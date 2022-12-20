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
import DuyduryshBaha from './DuyduryshBaha';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
function createData(name,Topar,Ders1, Ders2,Ders3,Ders4,Ders5,Ders6,Ders7,) {
  return {
    name,
    Topar,
    Ders1,
    Ders2,
    Ders3,
    Ders4,
    Ders5,
    Ders6,
    Ders7,  
       
  };
}

const rows = [
  createData('Zafarow Umitjan', 3321, 90, 85, 70, 40, 50, 83, 50),
  createData('Bekiyew Azim', 7007, 100, 100, 100,100,100,100,100),
  createData('Rasulow Arslan', 3322, 50, 51, 30,20,0,60,65),
  createData('Zafarow Umitjan', 3114, 68, 45, 85, 50, 65, 25, 55),
  createData('Rasulow Arslan', 3325, 85, 45, 45, 75, 78, 95, 100),
  createData('Zafarow Umitjan', 3321, 90, 85, 70,40,50,83,50),
  createData('Rasulow Arslan', 3322, 50, 51, 30,20,0,60,65),
  createData('Zafarow Umitjan', 3114, 68, 45, 85, 50, 65, 25, 55),
  createData('Rasulow Arslan', 3325, 85, 45, 45, 75, 78, 95, 100),
  createData('Zafarow Umitjan', 3321, 90, 85, 70,40,50,83,50),
  createData('Rasulow Arslan', 3322, 50, 51, 30,20,0,60,65),
  createData('Zafarow Umitjan', 3114, 68, 45, 85, 50, 65, 25, 55),
  createData('Rasulow Arslan', 3325, 85, 45, 45, 75, 78, 95, 100),
  createData('Zafarow Umitjan', 3321, 90, 85, 70,40,50,83,50),
  createData('Rasulow Arslan', 3322, 50, 51, 30,20,0,60,65),
  createData('Zafarow Umitjan', 3114, 68, 45, 85, 50, 65, 25, 55),
  createData('Rasulow Arslan', 3325, 85, 45, 45, 75, 78, 95, 100),
  createData('Zafarow Umitjan', 3321, 90, 85, 70, 40, 50, 83, 50),
  createData('Bekiyew Azim', 7007, 100, 100, 100,100,100,100,100),
  createData('Rasulow Arslan', 3322, 50, 51, 30,20,0,60,65),
  createData('Zafarow Umitjan', 3114, 68, 45, 85, 50, 65, 25, 55),
  createData('Rasulow Arslan', 3325, 85, 45, 45, 75, 78, 95, 100),
  createData('Zafarow Umitjan', 3321, 90, 85, 70,40,50,83,50),
  createData('Rasulow Arslan', 3322, 50, 51, 30,20,0,60,65),
  createData('Zafarow Umitjan', 3114, 68, 45, 85, 50, 65, 25, 55),
  createData('Rasulow Arslan', 3325, 85, 45, 45, 75, 78, 95, 100),
  createData('Zafarow Umitjan', 3321, 90, 85, 70,40,50,83,50),
  createData('Rasulow Arslan', 3322, 50, 51, 30,20,0,60,65),
  createData('Zafarow Umitjan', 3114, 68, 45, 85, 50, 65, 25, 55),
  createData('Rasulow Arslan', 3325, 85, 45, 45, 75, 78, 95, 100),
  createData('Zafarow Umitjan', 3321, 90, 85, 70,40,50,83,50),
  createData('Rasulow Arslan', 3322, 50, 51, 30,20,0,60,65),
  createData('Zafarow Umitjan', 3114, 68, 45, 85, 50, 65, 25, 55),
  createData('Rasulow Arslan', 3325, 85, 45, 45, 75, 78, 95, 100),
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
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Name',
  },
  {
    id: 'Topar',
    numeric: true,
    disablePadding: false,
    label: 'Topar',
  },
  {
    id: 'Ders1',
    numeric: true,
    disablePadding: false,
    label: 'Ders-1',
  },
  {
    id: 'Ders2',
    numeric: true,
    disablePadding: false,
    label: 'Ders-2',
  },
  {
    id: 'Ders3',
    numeric: true,
    disablePadding: false,
    label: 'Ders-3',
  },
  {
    id: 'Ders4',
    numeric: true,
    disablePadding: false,
    label: 'Ders-4',
  },
  {
    id: 'Ders5',
    numeric: true,
    disablePadding: false,
    label: 'Ders-5',
  },
  {
    id: 'Ders6',
    numeric: true,
    disablePadding: false,
    label: 'Ders-6',
  },
  {
    id: 'Ders7',
    numeric: true,
    disablePadding: false,
    label: 'Ders-7',
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
         <TableCell align="center" colSpan={6}>
            <h5>Toparyn Yetishik Zurnaly</h5>
         </TableCell>
         <TableCell align="center" colSpan={6}>
           <ButtonGroup>
             <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
               <Dropdown.Item eventKey="1">Sentyabr Aralyk Jemleme</Dropdown.Item>
               <Dropdown.Item eventKey="2">Oktyabr Aralyk jemleme</Dropdown.Item>
               <Dropdown.Item eventKey="3">Wiza</Dropdown.Item>
               <Dropdown.Item eventKey="4">Noyabr Aralyk Jemleme</Dropdown.Item>
               <Dropdown.Item eventKey="5">Dekabr Aralyk jemleme</Dropdown.Item>
               <Dropdown.Item eventKey="6">Final</Dropdown.Item>
             </DropdownButton>
           </ButtonGroup>
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

export default function MudirZuranl() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('Topar');
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
    <div >
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
                        {row.name}
                      </TableCell>
                      <TableCell align="center">{row.Topar}</TableCell>
                      <TableCell align="center">{row.Ders1}</TableCell>
                      <TableCell align="center">{row.Ders2}</TableCell>
                      <TableCell align="center">{row.Ders3}</TableCell>
                      <TableCell align="center">{row.Ders4}</TableCell>
                      <TableCell align="center">{row.Ders5}</TableCell>
                      <TableCell align="center">{row.Ders6}</TableCell>
                      <TableCell align="center">{row.Ders7}</TableCell>
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
    </div>
  );
}