import React from 'react'
import { Loading } from '../../../components';
import { GridColDef, DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Box, Button } from '@mui/material';
import moment from 'moment';
import { useGetTransitionsQuery } from '../services/PaymentSlice';

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 'frances zion', images: '', phone: '+251920929907', address: 'Addis Abeba' },
];

const TransactionList = () => {
    let transactions: any = [];
    const { data, error, isLoading, isFetching, isSuccess } = useGetTransitionsQuery();

    if (isLoading && isFetching) return <Loading />

    if (isSuccess) {
        transactions = data.data.data;
    }


    const columns: GridColDef[] = [
        { field: '_id', headerName: 'Order ID', width: 200 },
        {
            field: 'username',
            headerName: 'Customer Name',
            width: 150,
            editable: true,
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 250,
            editable: true
        },
        {
            field: 'phone',
            headerName: 'Phone',
            width: 250,
            editable: true
        },
        {
            field: 'paystackCustomerCode',
            headerName: 'Customer Code',
            width: 150,
            editable: true,
        },
        {
            field: 'accountStatus',
            headerName: 'Status',
            width: 150,
            editable: true,
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
                rows={transactions}
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

export default TransactionList