import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const columns = [
  { id: 'no', label: 'Email', minWidth: 170 },
  { id: 'email', label: 'Email', minWidth: 170 },
  { id: 'username', label: 'Username', minWidth: 100 },
  {
    id: 'level',
    label: 'Level',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'nomorKontak',
    label: 'Nomor Kontak',
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

const editIcon = (
  <div className="icon-edit-data">
    <EditIcon />
    <DeleteIcon />
  </div>
);

function createData(no, email, username, level, nomorKontak, aksi, size) {
  const density = no / size;
  return { no, email, username, level, nomorKontak, aksi };
}

const rows = [createData('1', 'dwiaanandaz90@gmail.com', 'Dwi Ananda', 'Laboran', '08223141xxx', editIcon)];

const TableAdmin = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

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
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
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
        <TablePagination rowsPerPageOptions={[10, 25, 100]} component="div" count={rows.length} rowsPerPage={rowsPerPage} page={page} onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage} />
      </Paper>
    </div>
  );
};
export default TableAdmin;
