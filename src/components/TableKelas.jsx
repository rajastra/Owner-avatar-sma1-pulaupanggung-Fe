import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import { message } from 'antd';

const columns = [
  { id: 'no', label: 'No', minWidth: 170 },
  { id: 'name', label: 'Kelas', minWidth: 100 },

  {
    id: 'deskripsi',
    label: 'Deskripsi',
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
      await axios.delete(`${URL}/api/v1/classes/${data.id}`);
      message.success('Berhasil menghapus admin');
      getUsers();
    } catch (error) {
      let msg = error.response.data.message || 'Terjadi kesalahan';
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

function createData(id, no, name, deskripsi, aksi) {
  return { id, no, name, deskripsi, aksi };
}

const TableKelas = ({ data, setUser, getUsers }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const dataTable = data.map((kelas, index) => {
    return createData(
      kelas.id,
      index + 1,
      kelas.name,
      kelas.description,
      <ActionIcon
        data={{
          id: kelas.id,
          name: kelas.name,
          description: kelas.description,
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
export default TableKelas;
