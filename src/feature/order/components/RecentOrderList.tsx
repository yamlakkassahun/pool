import React from 'react'
import { Loading } from '../../../components';
import { useGetRecentOrdersQuery } from '../services/OrderSlice';
import { GridColDef, DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Box, Button } from '@mui/material';
import moment from 'moment';

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 'frances zion', images: '', phone: '+251920929907', address: 'Addis Abeba' },
];

const RecentOrderList = () => {
    let orders: any = [];
    const { data, error, isLoading, isFetching, isSuccess } = useGetRecentOrdersQuery();

    if (isLoading && isFetching) return <Loading />

    if (isSuccess) {
        orders = data.data.data;
    }

    console.log(orders);

    const columns: GridColDef[] = [
        { field: '_id', headerName: 'Order ID', width: 200 },
        {
            field: 'account',
            headerName: 'Pick-Up',
            width: 250,
            editable: true,
            renderCell: (cellValues: any) => (
                <>
                    <p className="mt-3" style={{ color: 'gray' }}>{moment(cellValues.row.date).format('MMMM Do YYYY, h:mm:ss a')}<br />
                        <span style={{ color: '#383838', fontWeight: 'bold' }}>14, Kumolu.lkeja, Legos </span></p>
                </>
            ),
        },
        {
            field: 'delivery',
            headerName: 'Delivery',
            width: 250,
            editable: true,
            renderCell: (cellValues: any) => (
                <>
                    <p className="mt-3" style={{ color: 'gray' }}>{moment(cellValues.row.date).format('MMMM Do YYYY, h:mm:ss a')}<br />
                        <span style={{ color: '#383838', fontWeight: 'bold' }}>14, Kumolu.lkeja, Legos </span></p>
                </>
            ),
        },
        {
            field: 'isDraft',
            headerName: 'Customer Name',
            width: 150,
            editable: true,
        },
        {
            field: 'distance',
            headerName: 'Priority',
            width: 150,
            editable: true,
        },
        {
            field: 'amount',
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
                <p className="mt-3">{cellValues.row.status}</p>
            ),
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            editable: true,
            renderCell: (cellValues: any) => (
                <Button className="contained" sx={{ bgcolor: '#053582', color: 'white' }} >
                    On-Going
                </Button>
            ),
        },
    ];

    return (
        <Box
            sx={{
                height: 600,
                width: '100%',
                // color: 'gray',
                '& .super-app-theme': {
                    bgcolor: 'white',
                    borderRadius: '10px',
                    border: 'none',
                    alignContent: 'baseline',
                    marginTop: '10px',
                },
            }}
        >
            <DataGrid
                getRowId={(row) => row._id}
                rows={orders}
                columns={columns}
                pageSize={6}
                rowHeight={75}
                rowsPerPageOptions={[4]}
                getRowClassName={(params) => `super-app-theme`}
                disableSelectionOnClick
            />
        </Box>
    )
}

export default RecentOrderList