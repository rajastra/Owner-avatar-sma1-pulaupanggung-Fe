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
  { id: 'no', label: 'No', minWidth: 170 },
  { id: 'nama', label: 'Nama', minWidth: 100 },
  {
    id: 'age',
    label: 'Umur',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'alamat',
    label: 'Alamat',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'nis',
    label: 'NIS',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'aksi',
    label: 'Aksi',
    minWidth: 170,
    align: 'right',
  },
];

const ActionIcon = ({ data, setUser, getUsers }) => {
  const URL = import.meta.env.VITE_API_URL;
  const handleSetUser = () => {
    setUser(data);
  };
  const handleDelete = async () => {
    try {
      await axios.delete(`${URL}/api/v1/students/${data.id}`);
      message.success('Berhasil menghapus murid');
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

function createData(id, no, nama, age, alamat, nis, aksi) {
  return { id, no, nama, age, alamat, nis, aksi };
}

// const rows = [createData('1', 'X IPA 2', 'Dwi Ananda', 'Perempuan', '225222xxx', editIcon), createData('2', 'X IPA 2', 'uvuveuveuve', 'Laki-laki', '225222xxx', editIcon)];

const TableMurid = ({ data, setUser, getUsers }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const dataTable = data.map((murid, index) => {
    return createData(
      murid.id,
      index + 1,
      murid.name,
      murid.age,
      murid.address,
      murid.nis,
      <ActionIcon
        data={{
          name: murid.name,
          age: murid.age,
          nis: murid.nis,
          address: murid.address,
          id: murid.id,
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
export default TableMurid;
