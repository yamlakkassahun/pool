import React from 'react'
import { useGetDraftOrdersQuery } from '../services/OrderSlice';
import { Loading } from '../../../components';
import { Button, Box, Dialog, DialogContent, DialogTitle, Grid, Typography } from '@mui/material';
import { GridColDef, DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom'
import moment from 'moment';

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 'frances zion', images: '', phone: '+251920929907', address: 'Addis Abeba' },
];

const DraftOrdersList = () => {
    let orders: any = [];
    const [open, setOpen] = React.useState(false);
    const { data, error, isLoading, isFetching, isSuccess } = useGetDraftOrdersQuery();

    if (isLoading && isFetching) return <Loading />

    if (isSuccess) {
        orders = data.data.data;
    }

    console.log(orders);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
                <Button className="contained" size="small" onClick={handleClickOpen} sx={{ bgcolor: '#053582', color: 'white' }} >
                    Confirm Order
                </Button>
            ),
        },
    ];

    return (
        <>
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
            <Dialog
                className="text-center"
                open={open}
                fullWidth={true}
                maxWidth={'sm'}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        borderRadius: '0px'
                    },
                }}
            // aria-labelledby="alert-dialog-title"
            // aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    <Typography variant="body2" component="h1" paragraph>
                        Are you sure you want to confirm this order?
                    </Typography>
                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Button variant="outlined" size="large" fullWidth sx={{ border: 'solid 1px #053582', color: '#053582', borderRadius: 0 }}>No, Cancel</Button>
                        </Grid>
                        <Grid item xs={6}>
                            {/* <Link to={'/order/payment'} style={{ textDecoration: 'none' }}> */}
                            <Button size="large" fullWidth sx={{ borderRadius: 0, bgcolor: '#053582', color: 'white' }}>Yes Confirm</Button>
                            {/* </Link> */}
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default DraftOrdersList