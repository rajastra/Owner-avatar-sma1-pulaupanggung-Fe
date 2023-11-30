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
  { id: 'foto', label: 'Photo', minWidth: 100, align: 'left' },
  { id: 'judul', label: 'Judul', minWidth: 170, align: 'left' },
  { id: 'isiBerita', label: 'Isi Berita', minWidth: 170 },
  { id: 'tanggal', label: 'Tanggal', minWidth: 100 },
  { id: 'kategori', label: 'Kategori', minWidth: 100 },
  { id: 'aksi', label: 'Aksi', minWidth: 100, align: 'right' },
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

function createData(id, no, judul, isiBerita, kategori, aksi) {
  return { id, no, judul, isiBerita, kategori, aksi };
}

//const rows = [createData('1', fotoTable, 'Waspadai 3 Hal Ini', 'Keadaan Indonesia saat ini sangat mengkhawatirkan', '23 Oktober 2023', 'kegiatan', editIcon), createData('2', fotoTable2, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam egestas odio est, facilisis pellentesque lorem egestas id. Phasellus felis dolor, efficitur a volutpat sit amet, tristique eget diam. Vivamus fermentum tincidunt nibh vitae elementum. Praesent pulvinar nulla pharetra risus condimentum eleifend. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam ultrices, arcu at luctus posuere, arcu urna mattis lacus, ut ultricies libero augue vel lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis ut ligula at nunc placerat consectetur sed vel ipsum. Mauris faucibus, nisi non ultrices luctus, dui velit mattis magna, nec feugiat massa tortor id erat.', '23 Oktober 2023', 'news', editIcon)];

const TablePost = ({ data, setUser, getUsers }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const dataTable = data.map((post, index) => {
    return createData(
      post.id,
      index + 1,
      post.title,
      post.description,
      post.kategori,
      <ActionIcon
        data={{
          title: post.title,
          description: post.description,
          kategori: post.kategori,
          id: post.id,
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
export default TablePost;
