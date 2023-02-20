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
import { red } from '@mui/material/colors';
import ButtonGroups from './ButtonGroups';
import ButtonClick from './ButtonClick';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
function createData(name, Ders, Topar,Sentiyabr, Oktiyabr,Wiza,WizaPerezdaca,Noyabr,Dekabr,Final,FinalPerezdaca) {
  return {
    name,
    Ders,
    Sentiyabr,
    Oktiyabr,
    Wiza,
    WizaPerezdaca,
    Noyabr,
    Dekabr,
    Final,
    FinalPerezdaca,
    Topar,
  };
}

const rows = [
  createData('Zafarow Umitjan','Database',3311, 80, 75, 10, 50,30,60,68,90),
  createData('Zafarow Umitjan','Netework',3322, 80, 75, 60, 50,30,60,10,90),
  createData('Gummyyew Ilmurat','Netework',3521,70, 10, 60, 50,30,80,10,90),
  createData('Zafarow Umitjan','English',3322, 80, 75, 60, 50,30,60,10,90),
  createData('Zafarow Umitjan','Math',3311, 80, 75, 60, 30,60,60,10,90),
  createData('Iskenderow Jumabay','Netework',3311, 80, 10, 60, 50,30,60,10,90),
  createData('Zafarow Umitjan','Database',3311, 80, 75, 10, 50,30,60,68,50),
  createData('Zafarow Umitjan','English',3311, 80, 75, 60, 50,30,60,10,90),
  createData('Gummyyew Ilmurat','Netework',3311, 70, 10, 60, 50,30,60,10,50),
  createData('Zafarow Umitjan','Math',3311, 80, 75, 60, 30,60,10,10,90),
  createData('Zafarow Umitjan','Netework',3311, 10, 75, 60, 50,30,60,10,90),
  createData('Zafarow Umitjan','Database',3311, 80, 75, 10, 50,30,60,68,90),
  createData('Gummyyew Ilmurat','Netework',3311, 80, 10, 60, 50,30,60,10,90),
  createData('Zafarow Umitjan','Database',3311, 80, 75, 10, 50,30,60,68),
  createData('Zafarow Umitjan','Database',3311, 80, 75, 10, 50,30,60,68,90),
  createData('Zafarow Umitjan','Netework',3322, 80, 75, 60, 50,30,60,10,90),
  createData('Gummyyew Ilmurat','Netework',3521,70, 10, 60, 50,30,80,10,90),
  createData('Zafarow Umitjan','English',3322, 80, 75, 60, 50,30,60,10,90),
  createData('Zafarow Umitjan','Math',3311, 80, 75, 60, 30,60,60,10,90),
  createData('Iskenderow Jumabay','Netework',3311, 80, 10, 60, 50,30,60,10,90),
  createData('Zafarow Umitjan','Database',3311, 80, 75, 10, 50,30,60,68,50),
  createData('Zafarow Umitjan','English',3311, 80, 75, 60, 50,30,60,10,90),
  createData('Gummyyew Ilmurat','Netework',3311, 70, 10, 60, 50,30,60,10,50),
  createData('Zafarow Umitjan','Math',3311, 80, 75, 60, 30,60,10,10,90),
  createData('Zafarow Umitjan','Netework',3311, 10, 75, 60, 50,30,60,10,90),
  createData('Zafarow Umitjan','Database',3311, 80, 75, 10, 50,30,60,68,90),
  createData('Gummyyew Ilmurat','Netework',3311, 80, 10, 60, 50,30,60,10,90),
  createData('Zafarow Umitjan','Database',3311, 80, 75, 10, 50,30,60,68),
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
    id: 'Ders',
    numeric: true,
    disablePadding: false,
    label: 'Ders',
  },
  {
    id: 'Topar',
    numeric: true,
    disablePadding: false,
    label: 'Topar',
  },
  {
    id: 'Sentiyabr',
    numeric: true,
    disablePadding: false,
    label: 'Sentiyabr Aralyk Jemleme',
  },
  {
    id: 'Oktiyabr',
    numeric: true,
    disablePadding: false,
    label: 'Oktiyabr Aralyk Jemleme',
  },
  {
    id: 'Wiza',
    numeric: true,
    disablePadding: false,
    label: 'Wiza',
  }, 
  {
    id: 'WizaPerezdaca',
    numeric: true,
    disablePadding: false,
    label: 'Wiza Perezdaca',
  }, 
  {
    id: 'Noyabr',
    numeric: true,
    disablePadding: false,
    label: 'Noyabr Aralyk Jemleme',
  }, 
  {
    id: 'Dekabr',
    numeric: true,
    disablePadding: false,
    label: 'Dekabr Aralyk Jemleme',
  }, 
  {
    id: 'Final',
    numeric: true,
    disablePadding: false,
    label: 'Final',
  }, 
  {
    id: 'FinalPerezdaca',
    numeric: true,
    disablePadding: false,
    label: 'Final Perezdaca',
  }, 
    
];
const Toparlar = [
  '3321',
  '3333',
  '5642',
  '1232',  
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
         <TableCell align="center" colSpan={5}>
            <h5>Temmiler Baha</h5>
         </TableCell>
         <TableCell align="right" colSpan={3}>
            <ButtonClick lists={Toparlar}/>            
        </TableCell> 
        <TableCell align="left" colSpan={3}>
          <Stack spacing={2} direction="row">
             <Button variant="contained">Gorkezmek</Button>
          </Stack>           
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

export default function MudirDuyduryshBaha() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('Ders');
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
                      <TableCell align="center">{row.Ders}</TableCell>
                      <TableCell align="center">{row.Topar}</TableCell>
                      <TableCell align="center">{row.Sentiyabr}</TableCell>  
                      <TableCell align="center">{row.Oktiyabr}</TableCell>
                      <TableCell align="center">{row.Wiza}</TableCell>
                      <TableCell align="center">{row.WizaPerezdaca}</TableCell>
                      <TableCell align="center">{row.Noyabr}</TableCell>
                      <TableCell align="center">{row.Dekabr}</TableCell>
                      <TableCell align="center">{row.Final}</TableCell>
                      <TableCell align="center">{row.FinalPerezdaca}</TableCell>
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
    
  );
}