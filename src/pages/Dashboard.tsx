import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import { GridColDef, DataGrid } from '@mui/x-data-grid';
import ReactApexChart from 'react-apexcharts';
import numeral from 'numeral';
import { RecentOrderList, useGetRecentOrdersQuery } from '../feature/order';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'Order ID', width: 150 },
  {
    field: 'pickUp',
    headerName: 'Pick-Up',
    width: 200,
    editable: true,
    renderCell: (cellValues: any) => (
      <>
        <p className="mt-3" style={{ color: 'gray' }}>10, May, 2021 &nbsp;01:37 PM<br />
          <span style={{ color: '#383838', fontWeight: 'bold' }}>14, Kumolu.lkeja, Legos </span></p>
      </>
    ),
  },
  {
    field: 'delivery',
    headerName: 'Delivery',
    width: 200,
    editable: true,
    renderCell: (cellValues: any) => (
      <>
        <p className="mt-3" style={{ color: 'gray' }}>10, May, 2021 &nbsp;01:37 PM<br />
          <span style={{ color: '#383838', fontWeight: 'bold' }}>14, Kumolu.lkeja, Legos </span></p>
      </>
    ),
  },
  {
    field: 'age',
    headerName: 'Customer Name',
    width: 150,
    editable: true,
  },
  {
    field: 'priority',
    headerName: 'Priority',
    width: 150,
    editable: true,
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 150,
    editable: true,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 150,
    editable: true,
    renderCell: (cellValues: any) => (
      <Button className="contained" sx={{ bgcolor: '#053582', color: 'white' }} >
        On-Going
      </Button>
    ),
  },
];

const rows = [
  { id: '#003232', pickUp: 'Snow', delivery: 'Jon', age: 'Mark Geofrey', priority: 'Express', price: '#5,900', status: 'true' },
  { id: '#003232', pickUp: 'Lannister <br/> asdasdadad', delivery: 'Cersei', age: 'Mark Geofrey', priority: 'Express', price: '#5,900', status: 'true' },
  { id: '#003232', pickUp: 'Lannister', delivery: 'Jaime', age: 'Mark Geofrey', priority: 'Express', price: '#5,900', status: 'true' },
  { id: '#003232', pickUp: 'Stark', delivery: 'Arya', age: 'Mark Geofrey', priority: 'Express', price: '#5,900', status: 'true' },
  { id: '#003232', pickUp: 'Targaryen', delivery: 'Daenerys', age: 'Mark Geofrey', priority: 'Express', price: '#5,900', status: 'true' },
  { id: '#003232', pickUp: 'Melisandre', delivery: null, age: 'Mark Geofrey', priority: 'Express', price: '#5,900', status: 'true' },
  { id: '#003232', pickUp: 'Clifford', delivery: 'Ferrara', age: 'Mark Geofrey', priority: 'Express', price: '#5,900', status: 'true' },
  { id: '#003232', pickUp: 'Frances', delivery: 'Rossini', age: 'Mark Geofrey', priority: 'Express', price: '#5,900', status: 'true' },
  { id: '#003232', pickUp: 'Roxie', delivery: 'Harvey', age: 'Mark Geofrey', priority: 'Express', price: '#5,900', status: 'true' },
];

const chartOptions = {
  colors: ['#FFA500', '#FFA500', '#FFA500'],
  chart: { sparkline: { enabled: true } },
  plotOptions: { bar: { columnWidth: '48%', borderRadius: 1 } },
  tooltip: {
    x: { show: false },
    y: {
      formatter: (seriesName: number | string) => numeral(seriesName).format(),
      title: {
        formatter: (seriesName: number | string) => '',
      },
    },
    marker: { show: false },
  },
};


const Dashboard = () => {
  return (
    <>
      <section className="section">
        <Typography variant="h6" component="h1" color='black' paragraph>
          Dashboard
        </Typography>
        <div className="row ">
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div className="card pt-2 pb-2 dashboard-card">
              <div className="card-statistic-4">
                <div className="align-items-center justify-content-between">
                  <div className="row ">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3">
                      <div className="card-content">
                        <h5 className="font-15 mt-4">Total Order</h5>
                        <p className="mb-0 d-flex">
                          <h1 className="mb-2 font-28 col-red">504</h1>
                          <ReactApexChart
                            style={{ marginLeft: '10px' }}
                            type="line"
                            series={[{ data: [5, 8, 12, 21, 25, 11, 19, 32, 27, 37] }]}
                            options={chartOptions}
                            width={60}
                            height={26}
                          />
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pl-0 justify-content-center" >
                      <div className="mt-4  text-center">
                        <img src="assets/icons/Vector1.svg" alt="" style={{ height: '50px' }} /><br />
                        <button className="btn dropdown-toggle" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true"
                          aria-expanded="false">
                          today
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div className="card pt-2 pb-2">
              <div className="card-statistic-4">
                <div className="align-items-center justify-content-between">
                  <div className="row ">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3">
                      <div className="card-content">
                        <h5 className="font-15 mt-4">Active Users</h5>
                        <p className="mb-0 d-flex">
                          <h1 className="mb-2 font-28 col-red">504</h1>
                          <ReactApexChart
                            style={{ marginLeft: '10px' }}
                            type="line"
                            series={[{ data: [5, 8, 12, 21, 25, 11, 19, 32, 27, 37] }]}
                            options={chartOptions}
                            width={60}
                            height={26}
                          />
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pl-0 justify-content-center" >
                      <div className="mt-4  text-center">
                        <img src="assets/icons/Vector2.svg" alt="" style={{ height: '50px' }} /><br />
                        <button className="btn dropdown-toggle" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true"
                          aria-expanded="false">
                          today
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div className="card pt-2 pb-2">
              <div className="card-statistic-4">
                <div className="align-items-center justify-content-between">
                  <div className="row ">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3">
                      <div className="card-content">
                        <h5 className="font-15 mt-4">Active Users</h5>
                        <p className="mb-0 d-flex">
                          <h1 className="mb-2 font-28 col-red">504</h1>
                          <ReactApexChart
                            style={{ marginLeft: '10px' }}
                            type="line"
                            series={[{ data: [5, 8, 12, 21, 25, 11, 19, 32, 27, 37] }]}
                            options={chartOptions}
                            width={60}
                            height={26}
                          />
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pl-0 justify-content-center" >
                      <div className="mt-4  text-center">
                        <img src="assets/icons/Vector3.svg" alt="" style={{ height: '50px' }} /><br />
                        <button className="btn dropdown-toggle" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true"
                          aria-expanded="false">
                          today
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div className="card pt-2 pb-2">
              <div className="card-statistic-4">
                <div className="align-items-center justify-content-between">
                  <div className="row ">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3">
                      <div className="card-content">
                        <h5 className="font-15 mt-4">Active Users</h5>
                        <p className="mb-0 d-flex">
                          <h1 className="mb-2 font-28 col-red">504</h1>
                          <ReactApexChart
                            style={{ marginLeft: '10px' }}
                            type="line"
                            series={[{ data: [5, 8, 12, 21, 25, 11, 19, 32, 27, 37] }]}
                            options={chartOptions}
                            width={60}
                            height={26}
                          />
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pl-0 justify-content-center" >
                      <div className="mt-4  text-center">
                        <img src="assets/icons/Vector4.svg" alt="" style={{ height: '50px' }} /><br />
                        <button className="btn dropdown-toggle" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true"
                          aria-expanded="false">
                          today
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Typography variant="h6" component="h1" color='black' paragraph>
          Recent Orders
        </Typography>
        <RecentOrderList/>
      </section>

    </>
  );
};

export default Dashboard;
