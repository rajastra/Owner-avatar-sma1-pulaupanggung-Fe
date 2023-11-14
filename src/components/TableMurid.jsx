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
  { id: 'no', label: 'No', minWidth: 170 },
  { id: 'kelas', label: 'Kelas', minWidth: 100 },
  {
    id: 'nama',
    label: 'Nama',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'jenisKelamin',
    label: 'Jenis Kelamin',
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

const editIcon = (
  <div className="icon-edit-data">
    <EditIcon />
    <DeleteIcon />
  </div>
);

function createData(no, kelas, nama, jenisKelamin, nis, aksi, size) {
  const density = no / size;
  return { no, kelas, nama, jenisKelamin, nis, aksi };
}

const rows = [createData('1', 'X IPA 2', 'Dwi Ananda', 'Perempuan', '225222xxx', editIcon), createData('2', 'X IPA 2', 'uvuveuveuve', 'Laki-laki', '225222xxx', editIcon)];

const TableMurid = () => {
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
export default TableMurid;
