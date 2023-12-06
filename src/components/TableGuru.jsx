import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { useState } from 'react';
import { message } from 'antd';

const columns = [
  { id: 'no', label: 'No', minWidth: 100, align: 'left' },
  { id: 'photo', label: 'Photo', minWidth: 170, align: 'left' },
  { id: 'nama', label: 'Nama', minWidth: 170, align: 'left' },
  { id: 'jabatan', label: 'Jabatan', minWidth: 170, align: 'left' },
  { id: 'npy', label: 'NPY', minWidth: 100 },
  { id: 'email', label: 'Email', minWidth: 100 },
  { id: 'alamat', label: 'Alamat', minWidth: 100 },
  { id: 'phone_number', label: 'No. Telepon', minWidth: 100 },
  { id: 'aksi', label: 'Aksi', minWidth: 170, align: 'right' },
];



{/*const fotoTable = (
    <img className='foto-table' src={logo} roundedCircle></img>
);
const fotoTable2 = (
    <img className='foto-table' src={react} roundedCircle></img>
);*/}

const ActionIcon = ({ data, setUser, getUsers }) => {
  const URL = import.meta.env.VITE_API_URL;
  const handleSetUser = () => {
    setUser(data);
  };
  const handleDelete = async () => {
    try {
      await axios.delete(`${URL}/api/v1/teachers/${data.id}`);
      message.success('Berhasil menghapus Guru');
      getUsers();
    } catch (error) {
      // console.log(data.id);
      let msg = error.response.data.message || 'Terjadi Kesalahan';
      message.error(msg);
    }
  };

  return (
    <div className="icon-edit-data">
      <EditIcon
        onClick={handleSetUser}
        style={{
          color: '#1890ff',
          cursor: 'pointer',
        }}
      />
      <DeleteIcon
        onClick={handleDelete}
        style={{
          color: '#ff0000',
          cursor: 'pointer',
        }}
      />
    </div>
  );
};


function createData(id, no, photo, jabatan, nama, npy, email, alamat, phone_number, aksi) {
  return { id, no, photo, jabatan, nama, npy, email, alamat, phone_number, aksi };
}

// const rows = [createData('1', fotoTable, 'Mala', '222222', 'Guru Fisika', editIcon), createData('2', fotoTable2, 'Alam', '333333', 'Guru Olahraga', editIcon)];

const TableGuru = ({ data, setUser, getUsers }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const dataTable = data.map((guru, index) => {
    return createData(
      guru.id,
      index + 1,
      <img className='foto-table' src={guru.photo} style={{
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        objectFit: 'cover',
      }}></ img >,
      guru.jabatan,
      guru.name,
      guru.nip,
      guru.email,
      guru.address,
      guru.phone_number,
      <ActionIcon
        data={{
          name: guru.name,
          nip: guru.nip,
          email: guru.nip,
          address: guru.address,
          phone_number: guru.phone_number,
          id: guru.id,
          jabatan: guru.jabatan,
        }}
        setUser={setUser}
        getUsers={getUsers}
      />
    );
  });

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <div className="container-table-murid">
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {dataTable.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination rowsPerPageOptions={[10, 25, 100]} component="div" count={dataTable.length} rowsPerPage={rowsPerPage} page={page} onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage} />
      </Paper>
    </div>
  );
};
export default TableGuru;
