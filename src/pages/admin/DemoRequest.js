import PropTypes from 'prop-types';
import { useEffect, useMemo, useState } from 'react';

// material-ui
import { Box, Chip, Grid, Stack, Table, TableBody, TableCell, TableHead, TableRow, Tooltip, IconButton, Typography } from '@mui/material';

// third-party
import { useTable, useFilters, usePagination, useRowSelect } from 'react-table';

// project import
import MainCard from 'components/MainCard';
import ScrollX from 'components/ScrollX';
import LinearWithLabel from 'components/@extended/progress/LinearWithLabel';
import { TablePagination } from 'components/third-party/ReactTable';
import { deleteDemoRequest, getDemoRequests } from 'service/demo-request.service';
import { UserAddOutlined } from '@ant-design/icons';
import { createUser } from 'service/users.service';
import { FormattedMessage } from 'react-intl';

// ==============================|| REACT TABLE ||============================== //

const ColumnCell = ({ row }) => (
  <>
    <Stack direction="row" alignItems="center" justifyContent="start" spacing={0}>
      <Tooltip title={'Add'}>
        <IconButton
          color={'primary'}
          onClick={() => {
            createUser(row.values.email, row.values.first_name, row.values.last_name, row.values.company);
            deleteDemoRequest(row.values.email);
          }}
        >
          <UserAddOutlined />
        </IconButton>
      </Tooltip>
    </Stack>
  </>
);

ColumnCell.propTypes = {
  row: PropTypes.object,
  setEditableRowIndex: PropTypes.func,
  editableRowIndex: PropTypes.number
};

function ReactTable({ columns, data, top }) {
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
      data,
      initialState: { pageIndex: 0, pageSize: 10 }
    },
    useFilters,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.allColumns.push((columns) => [
        ...columns,
        {
          accessor: 'edit',
          id: 'edit',
          Header: <FormattedMessage id="add" />,
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
  top: PropTypes.bool
};

// ==============================|| REACT TABLE - PAGINATION ||============================== //

const StatusCell = ({ value }) => {
  switch (value) {
    case 'Complicated':
      return <Chip color="error" label="Complicated" size="small" variant="light" />;
    case 'Relationship':
      return <Chip color="success" label="Relationship" size="small" variant="light" />;
    case 'Single':
    default:
      return <Chip color="info" label="Single" size="small" variant="light" />;
  }
};

StatusCell.propTypes = {
  value: PropTypes.string
};

const ProgressCell = ({ value }) => <LinearWithLabel value={value} sx={{ minWidth: 75 }} />;

ProgressCell.propTypes = {
  value: PropTypes.number
};

const DemoRequest = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchDemoRequest();
  });

  const fetchDemoRequest = async () => {
    const demoRequests = await getDemoRequests();
    setData(demoRequests);
  };

  const columns = useMemo(
    () => [
      {
        Header: <FormattedMessage id="firstname" />,
        accessor: 'first_name'
      },
      {
        Header: <FormattedMessage id="lastname" />,
        accessor: 'last_name'
      },
      {
        Header: <FormattedMessage id="email" />,
        accessor: 'email'
      },
      {
        Header: <FormattedMessage id="company" />,
        accessor: 'company'
      }
    ],
    []
  );

  return (
    <Grid container spacing={3}>
      <Grid item spacing={3} xs={12}>
        <Typography variant="h2">
          <FormattedMessage id="demoRequest" />
        </Typography>
      </Grid>
      <Grid spacing={3} item xs={12}>
        <MainCard>
          <ScrollX>
            <ReactTable columns={columns} data={data} top />
          </ScrollX>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default DemoRequest;
