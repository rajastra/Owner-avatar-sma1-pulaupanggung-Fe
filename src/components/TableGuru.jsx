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
import logo from '../assets/sma.png';
import react from '../assets/react.svg'

const columns = [
  { id: 'no' },
  { id: 'foto', label: 'Photo', minWidth: 170, align: 'left' },
  { id: 'nama', label: 'Nama', minWidth: 170, align: 'left' },
  { id: 'npy', label: 'NPY', minWidth: 100 },
  { id: 'jabatan', label: 'Jabatan', minWidth: 100 },
  { id: 'aksi', label: 'Aksi', minWidth: 170, align: 'right' },
];

const editIcon = (
  <div className="icon-edit-data">
    <EditIcon />
    <DeleteIcon />
  </div>
);

const fotoTable = (
    <img className='foto-table' src={logo} roundedCircle></img>
);
const fotoTable2 = (
    <img className='foto-table' src={react} roundedCircle></img>
);


function createData(no, foto, nama, npy, jabatan, aksi, size) {
  const density = no / size;
  return { foto, nama, npy, jabatan, aksi };
}

const rows = [createData('1', fotoTable, 'Mala', '222222', 'Guru Fisika', editIcon), createData('2', fotoTable2, 'Alam', '333333', 'Guru Olahraga', editIcon)];

const TableGuru = () => {
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
export default TableGuru;
