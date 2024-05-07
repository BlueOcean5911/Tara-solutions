// material-ui
import { Box, Grid, Typography } from '@mui/material';
// project import
import MainCard from 'components/MainCard';
import { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { useMemo } from 'react';

// material-ui
import { Chip, Stack, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { TextField, Select, MenuItem, Slider, Tooltip, IconButton } from '@mui/material';

// third-party
import { useTable, useFilters, usePagination } from 'react-table';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

// project import
import { DefaultColumnFilter } from 'utils/react-table';

import ScrollX from 'components/ScrollX';
import LinearWithLabel from 'components/@extended/progress/LinearWithLabel';
import { CSVExport, TablePagination } from 'components/third-party/ReactTable';

// assets
import { CheckOutlined, UserDeleteOutlined } from '@ant-design/icons';
import { deleteUser, getUsers, updateUser } from 'service/users.service';
import { FormattedMessage } from 'react-intl';

// ==============================|| SAMPLE PAGE ||============================== //

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #888',
  borderRadius: '1rem',
  boxShadow: 24,
  p: 4
};

// ==============================|| REACT TABLE ||============================== //

const ColumnCell = ({ row, deleteRowByEmail }) => (
  <>
    <Stack direction="row" alignItems="center" justifyContent="start" spacing={0}>
      <Tooltip title={<FormattedMessage id="deleteUser" />}>
        <span>
          <IconButton
            disabled={row.values.role === 'owner'}
            color={'primary'}
            onClick={() => {
              deleteRowByEmail(row.values.email);
              deleteUser(row.values.email);
            }}
          >
            <UserDeleteOutlined />
          </IconButton>
        </span>
      </Tooltip>
    </Stack>
  </>
);

ColumnCell.propTypes = {
  row: PropTypes.object,
  deleteRowByEmail: PropTypes.func
};

function ReactTable({ columns, data, top, updateData, skipPageReset, deleteRowByEmail }) {
  const defaultColumn = useMemo(
    () => ({
      Filter: DefaultColumnFilter,
      Cell: CellEdit
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    page,
    prepareRow,
    gotoPage,
    setPageSize,
    state: { pageIndex, pageSize }
  } = useTable(
    {
      columns,
      defaultColumn,
      autoResetPage: !skipPageReset,
      updateData,
      deleteRowByEmail,
      data,
      getSubRows: (row) => { },
      initialState: { pageIndex: 0, pageSize: 10 }
    },
    useFilters,
    usePagination,
    (hooks) => {
      hooks.allColumns.push((columns) => [
        ...columns,
        {
          accessor: 'edit',
          id: 'edit',
          Header: <FormattedMessage id="delete" />,
          Cell: ColumnCell
        }
      ]);
    }
  );

  return (
    <Stack>
      {top && (
        <Box sx={{ p: 2 }}>
          <TablePagination gotoPage={gotoPage} rows={rows} setPageSize={setPageSize} pageIndex={pageIndex} pageSize={pageSize} />
        </Box>
      )}

      <Table {...getTableProps()}>
        <TableHead sx={{ borderTopWidth: top ? 2 : 1 }}>
          {headerGroups.map((headerGroup, index) => (
            <TableRow key={index} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, i) => (
                <TableCell key={i} {...column.getHeaderProps([{ className: column.className }])}>
                  {column.render('Header')}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <TableRow key={i} {...row.getRowProps()}>
                {row.cells.map((cell, index) => (
                  <TableCell key={index} {...cell.getCellProps([{ className: cell.column.className }])}>
                    {cell.render('Cell')}
                  </TableCell>
                ))}
              </TableRow>
            );
          })}

          {!top && (
            <TableRow>
              <TableCell sx={{ p: 2 }} colSpan={7}>
                <TablePagination gotoPage={gotoPage} rows={rows} setPageSize={setPageSize} pageIndex={pageIndex} pageSize={pageSize} />
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Stack>
  );
}

ReactTable.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
  top: PropTypes.bool,
  updateData: PropTypes.func,
  deleteRowByEmail: PropTypes.func,
  skipPageReset: PropTypes.bool
};

// ==============================|| REACT TABLE - PAGINATION ||============================== //

const CellEdit = ({ value: initialValue, row: { index }, column: { id, dataType }, updateData }) => {
  const [value, setValue] = useState(initialValue);
  const [showSelect, setShowSelect] = useState(false);

  const onChange = (e) => {
    setValue(e.target?.value);
  };

  const onBlur = () => {
    updateData(index, id, value);
  };

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  let element;
  let userInfoSchema;
  switch (id) {
    case 'email':
      userInfoSchema = Yup.object().shape({
        userInfo: Yup.string().email('Enter valid email ').required('Email is a required field')
      });
      break;
    case 'age':
      userInfoSchema = Yup.object().shape({
        userInfo: Yup.number()
          .typeError('Age must be number')
          .required('Age is required')
          .min(18, 'You must be at least 18 years')
          .max(100, 'You must be at most 60 years')
      });
      break;
    default:
      userInfoSchema = Yup.object().shape({
        userInfo: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Name is Required')
      });
      break;
  }

  switch (dataType) {
    case 'text':
      element = (
        <>
          <Formik
            initialValues={{
              userInfo: value
            }}
            enableReinitialize
            validationSchema={userInfoSchema}
            onSubmit={() => { }}
          >
            {({ values, handleChange, handleBlur, errors, touched }) => (
              <Form>
                <TextField
                  value={values.userInfo}
                  id={`${index}-${id}`}
                  name="userInfo"
                  onChange={(e) => {
                    handleChange(e);
                    onChange(e);
                  }}
                  onBlur={(e) => {
                    handleBlur(e);
                    onBlur();
                  }}
                  error={touched.userInfo && Boolean(errors.userInfo)}
                  helperText={touched.userInfo && errors.userInfo && errors.userInfo}
                  sx={{
                    '& .MuiOutlinedInput-input': { py: 0.75, px: 1, width: { xs: 80 } },
                    '& .MuiOutlinedInput-notchedOutline': { border: 'none' }
                  }}
                />
              </Form>
            )}
          </Formik>
        </>
      );
      break;
    case 'select':
      element = (
        <>
          <Select
            labelId="editable-select-status-label"
            sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 }, svg: { display: 'none' } }}
            id="editable-select-status"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            disabled={value === 'owner'}
          >
            <MenuItem value="owner" disabled hidden={true}>
              <Chip color="primary" label="Owner" size="small" variant="light" />
            </MenuItem>
            <MenuItem value="admin">
              <Chip color="secondary" label="Admin" size="small" variant="light" />
            </MenuItem>
            <MenuItem value="user">
              <Chip color="success" label="User" size="small" variant="light" />
            </MenuItem>
            <MenuItem value="demo">
              <Chip color="error" label="Demo" size="small" variant="light" />
            </MenuItem>
          </Select>
        </>
      );
      break;
    default:
      element = <span></span>;
      break;
  }
  return element;
};

const Users = () => {
  const [data, setData] = useState([]);
  const [skipPageReset, setSkipPageReset] = useState(false);

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    console.log(data);
  });

  const fetchUserData = async () => {
    const users = await getUsers();
    setData(users);
  };

  const columns = useMemo(
    () => [
      {
        Header: <FormattedMessage id="firstname" />,
        accessor: 'first_name',
        dataType: 'text'
      },
      {
        Header: <FormattedMessage id="lastname" />,
        accessor: 'last_name',
        dataType: 'text'
      },
      {
        Header: <FormattedMessage id="email" />,
        accessor: 'email',
        dataType: 'text'
      },
      {
        Header: <FormattedMessage id="company" />,
        accessor: 'company',
        dataType: 'text'
      },
      {
        Header: <FormattedMessage id="role" />,
        accessor: 'role',
        dataType: 'select'
      }
    ],
    []
  );
  const updateData = (rowIndex, columnId, value) => {
    // we also turn on the flag to not reset the page
    setSkipPageReset(true);
    setData((old) =>
      old.map((row, index) => {
        console.log(row.role);
        if (index === rowIndex && row.role !== 'owner') {
          const updatedData = {
            ...old[rowIndex],
            [columnId]: value
          };
          const email = updatedData.email;
          updateUser(email, {
            first_name: updatedData.first_name,
            last_name: updatedData.last_name,
            role: updatedData.role,
            company: updatedData.company
          });
          return updatedData;
        }
        return row;
      })
    );
  };

  const deleteRowByEmail = (email) => {
    setData((old) => old.filter((row) => row.email !== email), []);
  };

  useEffect(() => {
    setSkipPageReset(false);
  }, [data]);

  return (
    <Grid container spacing={3}>
      <Grid item spacing={3} xs={12}>
        <Typography variant="h2">Users</Typography>
      </Grid>
      <Grid item xs={12} lg={12}>
        <MainCard>
          <ScrollX>
            <ReactTable
              columns={columns}
              data={data}
              updateData={updateData}
              skipPageReset={skipPageReset}
              deleteRowByEmail={deleteRowByEmail}
              top
            />
          </ScrollX>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default Users;
