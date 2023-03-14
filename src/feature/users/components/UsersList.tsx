import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridToolbar, GridValueGetterParams } from '@mui/x-data-grid';
import { BookOpen, Delete, Edit, Edit2, Trash2 } from 'react-feather';
import { useGetUsersQuery, useDeleteUserMutation } from '../services/userSlice';
import { Loading } from '../../../components';
import { Button, darken, lighten } from '@mui/material';
import { EditNotifications } from '@mui/icons-material';



const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 'frances zion', images: '', phone: '+251920929907', address: 'Addis Abeba' },
];


const UsersList = () => {
    let users: any = [];
    const { data, error, isLoading, isFetching, isSuccess } = useGetUsersQuery();
    // const [deleteGenre, { isLoading: isDeleting }] = useDeleteUserMutation();

    if (isLoading && isFetching) return <Loading />

    if (isSuccess) {
        users = data.data.data;
    }

    const columns: GridColDef[] = [
        { field: '_id', headerName: '#', width: 250 },
        {
            field: 'username',
            headerName: 'User Name',
            width: 150,
            editable: true,
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 250,
            editable: true,
        },
        {
            field: 'phone',
            headerName: 'Phone Number',
            width: 150,
            editable: true,
        },
        {
            field: 'role',
            headerName: 'Role',
            width: 150,
            editable: true,
        },
        {
            field: 'price',
            headerName: 'Status',
            width: 150,
            editable: true,
            renderCell: (cellValues: any) => (
                <Button className="contained" sx={{ bgcolor: '#053582', color: 'white' }} >
                    Active
                </Button>
            ),
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            editable: true,
            renderCell: (cellValues: any) => (
                <>
                    <Edit2 color='#053582' />
                </>
            ),
        },
    ];

    const rows = [
        { id: '#1', pickUp: 'John Doe', delivery: 'JohnDoe@gmail.com', age: '08170000560', priority: 'Admin', price: 'Active', status: 'true' },
        { id: '#1', pickUp: 'John Doe', delivery: 'JohnDoe@gmail.com', age: '08170000560', priority: 'Admin', price: 'Active', status: 'true' },
    ];

    const getHoverBackgroundColor = (color: string, mode: string) =>
        mode === 'dark' ? darken(color, 0.5) : lighten(color, 0.5);

    return (
        <Box sx={{
            height: 450,
            width: '100%',
            color: 'gray',
            '& .super-app-theme': {
                bgcolor: 'white',
                borderRadius: '10px',
                border: 'none',
                alignContent: 'baseline',
                marginTop: '10px',
                '&:hover': {
                    bgcolor: (theme) =>
                        getHoverBackgroundColor(theme.palette.info.main, theme.palette.mode),
                },
            },
        }}>
            <DataGrid
                rows={users}
                columns={columns}
                pageSize={4}
                rowHeight={75}
                rowsPerPageOptions={[4]}
                getRowId={(row) => row._id}

                getRowClassName={(params) => `super-app-theme`}
                disableSelectionOnClick
            />
        </Box>
    )
}

export default UsersList