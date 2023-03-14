import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridToolbar, GridValueGetterParams } from '@mui/x-data-grid';
import { BookOpen, Delete, Edit, Trash2 } from 'react-feather';
import { UsersList } from '../../feature/users';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 50 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 100,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 100,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'User Name',
    width: 120,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'phone',
    headerName: 'Phone Number',
    width: 150,
    editable: true,
  },
  {
    field: 'address',
    headerName: 'Address',
    width: 120,
    editable: true,
  },
  {
    field: 'action',
    headerName: 'Action',
    width: 150,
    editable: true,
    renderCell: (cellValues) => {
      return (
        <div className='d-flex'>
          <a href="#show" className="btn btn-sm bg-transparent ml-2" >
            <BookOpen color="#6777F0"/>
          </a>
          <a href="#edit" className="btn btn-sm bg-transparent ml-2">
            <Edit color="#6777F0" />
          </a>
          <a href="#delete" className="btn btn-sm bg-transparent ml-2">
            <Trash2 color="#6777F0"/>
          </a>
        </div>
      );
    },
  }
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 'frances zion', images: '', phone: '+251920929907', address: 'Addis Abeba' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 'frances zion', images: '', phone: '+251920929907', address: 'Addis Abeba' },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 'frances zion', images: '', phone: '+251920929907', address: 'Addis Abeba' },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 'frances zion', images: '', phone: '+251920929907', address: 'Addis Abeba' },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 'frances zion', images: '', phone: '+251920929907', address: 'Addis Abeba' },
  { id: 6, lastName: 'Melisandre', firstName: 'Rossini', age: 'frances zion0', images: '', phone: '+251920929907', address: 'Addis Abeba' },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 'frances zion', images: '', phone: '+251920929907', address: 'Addis Abeba' },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 'frances zion', images: '', phone: '+251920929907', address: 'Addis Abeba' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 'frances zion', images: '', phone: '+251920929907', address: 'Addis Abeba' },
];

const SystemUsers = () => {
  return (
    <div className="row">
      <div className="col-12">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Users</a></li>
            <li className="breadcrumb-item active" aria-current="page">System Users</li>
          </ol>
        </nav>
            <UsersList />
      </div>
    </div>
  );
};

export default SystemUsers;
