import PropTypes from 'prop-types';
import { useMemo } from 'react';

// material-ui
import { Box, Chip, Grid, Stack, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

// third-party
import { useTable, useFilters, usePagination } from 'react-table';

// project import
import makeData from 'data/react-table';
import MainCard from 'components/MainCard';
import ScrollX from 'components/ScrollX';
import LinearWithLabel from 'components/@extended/progress/LinearWithLabel';
import { CSVExport, TablePagination } from 'components/third-party/ReactTable';

// ==============================|| REACT TABLE ||============================== //

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
    usePagination
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
    case 'Active':
      return <Chip color="success" label="Active" size="small" variant="light" />;
    case 'Drop Out':
      return <Chip color="error" label="Drop Out" size="small" variant="light" />;
    case 'Single':
    default:
      return <Chip color="info" label="Fail" size="small" variant="light" />;
  }
};

StatusCell.propTypes = {
  value: PropTypes.string
};

const ProgressCell = ({ value }) => <LinearWithLabel value={value} sx={{ minWidth: 75 }} />;

ProgressCell.propTypes = {
  value: PropTypes.number
};

const StudentPerformanceSegmentedAnalysis = ({ studentData }) => {
  console.log(studentData);
  const data = useMemo(() => studentData, [studentData]);
  const columns = useMemo(
    () => [
      {
        Header: 'Student ID',
        accessor: 'id_student'
      },
      {
        Header: 'Gender',
        accessor: 'gender'
      },
      {
        Header: 'Highest Education',
        accessor: 'highest_education'
      },
      {
        Header: 'Assessment Completed Rate(%)',
        accessor: 'assessments_completed'
      },
      {
        Header: 'Average Assessment Score(10)',
        accessor: 'average_assessment_score'
      },
      {
        Header: 'Studied Day',
        accessor: 'days_studied'
      },
      {
        Header: 'Drop out',
        accessor: 'final_result',
        Cell: StatusCell
      }
    ],
    []
  );

  return (
    <Grid item xs={12}>
      <MainCard title="Pagination at Top" content={false} secondary={<CSVExport data={data} filename={'pagination-top-table.csv'} />}>
        <ScrollX>
          <ReactTable columns={columns} data={data} top />
        </ScrollX>
      </MainCard>
    </Grid>
  );
};

StudentPerformanceSegmentedAnalysis.propTypes = {
  studentData: PropTypes.array.isRequired
};

export default StudentPerformanceSegmentedAnalysis;
