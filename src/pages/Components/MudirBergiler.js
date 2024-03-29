import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import ButtonGroups from './ButtonGroups'
import { red } from '@mui/material/colors';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonClick from './ButtonClick';
function createData(Mugallym,Talyp,Topary, Dersi, Dekan, Mugallym1, Mudir) {
  return {
    Mugallym,
    Talyp,
    Topary,
    Dersi,
    Dekan,
    Mugallym1,
    Mudir,
   
  };
}

const rows = [
  createData('Zafarow Umitjan','Hudayarow Nuralli','3141','database','Aldy','Almady', 'Almady'),
  createData('Zafarow Umitjan','Gummyyew Gulmyrat','3221','Network','Almady','Almady', 'Almady'),
  createData('Gummyyew Ilmurat','Bazarow Didar','1254','Network','Almady','Almady', 'Almady'),
  createData('Zafarow Umitjan','Rasulow Arslan','4151','database','Aldy','Almady', 'Almady'),
  createData('Gummyyew Ilmurat','Babamuradow Ahmetmurat','3321','Network','Almady','Almady', 'Almady'),
  createData('Zafarow Umitjan','Muradow Murat','3421','database','Aldy','Almady', 'Almady'),
  createData('Zafarow Umitjan','Atagulyew Suhanbek','3321','Network','Almady','Almady', 'Almady'),
  createData('Gummyyew Ilmurat','Kurambayew Sadula','2121','Network','Almady','Almady', 'Almady'),
  createData('Zafarow Umitjan','Jumabayew Isgender','3421','database','Aldy','Almady', 'Almady'),
  createData('Zafarow Umitjan','Hudayarow Nuralli','3141','database','Aldy','Almady', 'Almady'),
  createData('Zafarow Umitjan','Gummyyew Gulmyrat','3221','Network','Almady','Almady', 'Almady'),
  createData('Gummyyew Ilmurat','Bazarow Didar','1254','Network','Almady','Almady', 'Almady'),
  createData('Zafarow Umitjan','Rasulow Arslan','4151','database','Aldy','Almady', 'Almady'),
  createData('Gummyyew Ilmurat','Babamuradow Ahmetmurat','3321','Network','Almady','Almady', 'Almady'),
  createData('Zafarow Umitjan','Muradow Murat','3421','database','Aldy','Almady', 'Almady'),
  createData('Zafarow Umitjan','Atagulyew Suhanbek','3321','Network','Almady','Almady', 'Almady'),
  createData('Gummyyew Ilmurat','Kurambayew Sadula','2121','Network','Almady','Almady', 'Almady'),
  createData('Zafarow Umitjan','Jumabayew Isgender','3421','database','Aldy','Almady', 'Almady'),
  createData('Zafarow Umitjan','Hudayarow Nuralli','3141','database','Aldy','Almady', 'Almady'),
  createData('Zafarow Umitjan','Gummyyew Gulmyrat','3221','Network','Almady','Almady', 'Almady'),
  createData('Gummyyew Ilmurat','Bazarow Didar','1254','Network','Almady','Almady', 'Almady'),
  createData('Zafarow Umitjan','Rasulow Arslan','4151','database','Aldy','Almady', 'Almady'),
  createData('Gummyyew Ilmurat','Babamuradow Ahmetmurat','3321','Network','Almady','Almady', 'Almady'),
  createData('Zafarow Umitjan','Muradow Murat','3421','database','Aldy','Almady', 'Almady'),
  createData('Zafarow Umitjan','Atagulyew Suhanbek','3321','Network','Almady','Almady', 'Almady'),
  createData('Gummyyew Ilmurat','Kurambayew Sadula','2121','Network','Almady','Almady', 'Almady'),
  createData('Zafarow Umitjan','Jumabayew Isgender','3421','database','Aldy','Almady', 'Almady'),
  createData('Zafarow Umitjan','Hudayarow Nuralli','3141','database','Aldy','Almady', 'Almady'),
  createData('Zafarow Umitjan','Gummyyew Gulmyrat','3221','Network','Almady','Almady', 'Almady'),
  createData('Gummyyew Ilmurat','Bazarow Didar','1254','Network','Almady','Almady', 'Almady'),
  createData('Zafarow Umitjan','Rasulow Arslan','4151','database','Aldy','Almady', 'Almady'),
  createData('Gummyyew Ilmurat','Babamuradow Ahmetmurat','3321','Network','Almady','Almady', 'Almady'),
  createData('Zafarow Umitjan','Muradow Murat','3421','database','Aldy','Almady', 'Almady'),
  createData('Zafarow Umitjan','Atagulyew Suhanbek','3321','Network','Almady','Almady', 'Almady'),
  createData('Gummyyew Ilmurat','Kurambayew Sadula','2121','Network','Almady','Almady', 'Almady'),
  createData('Zafarow Umitjan','Jumabayew Isgender','3421','database','Aldy','Almady', 'Almady'),
  createData('Gummyyew Ilmurat','Network','Almady','Almady', 'Almady'),
  createData('Zafarow Umitjan','Hudayarow Nuralli','3141','database','Aldy','Almady', 'Almady'),
  createData('Zafarow Umitjan','Gummyyew Gulmyrat','3221','Network','Almady','Almady', 'Almady'),
  createData('Gummyyew Ilmurat','Bazarow Didar','1254','Network','Almady','Almady', 'Almady'),
  createData('Zafarow Umitjan','Rasulow Arslan','4151','database','Aldy','Almady', 'Almady'),
  createData('Gummyyew Ilmurat','Babamuradow Ahmetmurat','3321','Network','Almady','Almady', 'Almady'),
  createData('Zafarow Umitjan','Muradow Murat','3421','database','Aldy','Almady', 'Almady'),
  createData('Zafarow Umitjan','Atagulyew Suhanbek','3321','Network','Almady','Almady', 'Almady'),
  createData('Gummyyew Ilmurat','Kurambayew Sadula','2121','Network','Almady','Almady', 'Almady'),
  createData('Zafarow Umitjan','Jumabayew Isgender','3421','database','Aldy','Almady', 'Almady'),
  createData('Zafarow Umitjan','Hudayarow Nuralli','3141','database','Aldy','Almady', 'Almady'),
  createData('Zafarow Umitjan','Gummyyew Gulmyrat','3221','Network','Almady','Almady', 'Almady'),
  createData('Gummyyew Ilmurat','Bazarow Didar','1254','Network','Almady','Almady', 'Almady'),
  createData('Zafarow Umitjan','Rasulow Arslan','4151','database','Aldy','Almady', 'Almady'),
  createData('Gummyyew Ilmurat','Babamuradow Ahmetmurat','3321','Network','Almady','Almady', 'Almady'),
  createData('Zafarow Umitjan','Muradow Murat','3421','database','Aldy','Almady', 'Almady'),
  createData('Zafarow Umitjan','Atagulyew Suhanbek','3321','Network','Almady','Almady', 'Almady'),
  createData('Gummyyew Ilmurat','Kurambayew Sadula','2121','Network','Almady','Almady', 'Aldy'),
  createData('Zafarow Umitjan','Jumabayew Isgender','3421','database','Aldy','Almady', 'Almady'),
  createData('Zafarow Umitjan','Hudayarow Nuralli','3141','database','Aldy','Almady', 'Almady'),
  createData('Zafarow Umitjan','Gummyyew Gulmyrat','3221','Network','Almady','Aldy', 'Almady'),
  createData('Gummyyew Ilmurat','Bazarow Didar','1254','Network','Almady','Almady', 'Almady'),
  createData('Zafarow Umitjan','Rasulow Arslan','4151','database','Aldy','Almady', 'Almady'),
  createData('Gummyyew Ilmurat','Babamuradow Ahmetmurat','3321','Network','Almady','Almady', 'Almady'),
  createData('Zafarow Umitjan','Muradow Murat','3421','database','Aldy','Almady', 'Almady'),
  createData('Zafarow Umitjan','Atagulyew Suhanbek','3321','Network','Almady','Almady', 'Almady'),
  createData('Gummyyew Ilmurat','Kurambayew Sadula','2121','Network','Almady','Almady', 'Almady'),
  createData('Zafarow Umitjan','Jumabayew Isgender','3421','database','Aldy','Almady', 'Almady'),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    {
        id: 'Mugallym',
        numeric: false,
        disablePadding: true,
        label: 'Mugallym',
      },
      {
        id: 'Talyp',
        numeric: true,
        disablePadding: false,
        label: 'Talyp',
      },
      {
        id: 'Topary',
        numeric: true,
        disablePadding: false,
        label: 'Topary',
      },
      {
        id: 'Dersi',
        numeric: true,
        disablePadding: false,
        label: 'Dersi',
      },
      {
        id: 'Dekan',
        numeric: true,
        disablePadding: false,
        label: 'Dekan',
      },
      {
        id: 'Mugallym1',
        numeric: true,
        disablePadding: false,
        label: 'Mugallym1',
      },  
      {
        id: 'Mudir',
        numeric: true,
        disablePadding: false,
        label: 'Mudir',
      },  
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableBody>
        <TableRow className="bg-[#F8F8FA] flex-row flex-column">
         <TableCell align="center" colSpan={7}>
            <h5>Bergili Talyplar</h5>
         </TableCell>         
      </TableRow>     
      <TableRow className="bg-[#F8F8FA] flex-row flex-column">
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'center' : 'center'}
           // padding={headCell.disablePadding ? 'none' : 'normal'}
            //sortDirection={orderBy === headCell.id ? order : false}
           >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableBody>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

// function EnhancedTableToolbar(props) {
//   const { numSelected } = props;

//   return (
//     <Toolbar
//       sx={{
//         pl: { sm: 2 },
//         pr: { xs: 1, sm: 1 },
//         ...(numSelected > 0 && {
//           bgcolor: (theme) =>
//             alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
//         }),
//       }}
//     >
//       {numSelected > 0 ? (
//         <Typography
//           sx={{ flex: '1 1 100%' }}
//           color="inherit"
//           variant="subtitle1"
//           component="div"
//         >
//           {numSelected} selected
//         </Typography>
//       ) : (
//         <Typography
//           sx={{ flex: '1 1 100%' }}
//           variant="h6"
//           id="tableTitle"
//           component="div"
//         >
//           Nutrition
//         </Typography>
//       )}

//       {numSelected > 0 ? (
//         <Tooltip title="Delete">
//           <IconButton>
//             <DeleteIcon />
//           </IconButton>
//         </Tooltip>
//       ) : (
//         <Tooltip title="Filter list">
//           <IconButton>
//             <FilterListIcon />
//           </IconButton>
//         </Tooltip>
//       )}
//     </Toolbar>
//   );
// }

// EnhancedTableToolbar.propTypes = {
//   numSelected: PropTypes.number.isRequired,
// };

export default function MudirBergiler() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('Talyp');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <div className="container">
    <Box sx={{ width: '100%', marginTop:5}}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.sort(getComparator(order, orderBy)).slice() */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      // onClick={(event) => handleClick(event, row.name)}
                      // role="checkbox"
                      // aria-checked={isItemSelected}
                      // tabIndex={-1}
                      // key={row.name}
                      // selected={isItemSelected}
                    >
                      
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        style={{paddingLeft:20}}
                      >
                        {row.Mugallym}
                      </TableCell>
                      <TableCell align="center">{row.Talyp}</TableCell>
                      <TableCell align="center">{row.Topary}</TableCell>
                      <TableCell align="center">{row.Dersi}</TableCell>
                      <TableCell align="center">{row.Dekan}</TableCell>
                      <TableCell align="center">{row.Mugallym1}</TableCell>  
                      <TableCell align="center">{row.Mudir}</TableCell>                     
                  </TableRow>
                  );
                })}
              {/* {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}  */}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25,50]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
    </div>
  );
}