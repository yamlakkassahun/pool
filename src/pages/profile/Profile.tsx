import { Label, Person } from "@mui/icons-material";
import { LoadingButton, TabContext, TabList, TabPanel } from "@mui/lab";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormLabel, darken, lighten } from "@mui/material";
import { Alert, Box, Button, Card, CardContent, Container, Divider, Grid, InputAdornment, Tab, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React, { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import * as Yup from 'yup'
import EditIcon from '@mui/icons-material/Edit';
import { InputLabel } from "@mui/material";
import { FormProvider, RHFSelect, RHFTextField } from "../../components";
import { RHFUploadSingleFile } from "../../components/form-hook";
import { UserForm, UsersList } from "../../feature/users";
import { AddressForm } from "../../feature/address";

type FormValuesProps = {
    afterSubmit?: string;
    CoverLater: string;
    cover: any;
};

const columnsEarnings: GridColDef[] = [
    { field: 'id', headerName: '#', width: 150 },
    {
        field: 'pickUp',
        headerName: 'Title',
        width: 200,
        editable: true,
    },
    {
        field: 'delivery',
        headerName: 'Value',
        width: 250,
        editable: true,
        renderCell: (cellValues: any) => (
            <p>15% discount on all orders</p>
        ),
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
        field: 'status',
        headerName: 'Status',
        width: 150,
        editable: true,
        renderCell: (cellValues: any) => (
            <EditIcon sx={{ color: '#053582' }} />
        ),
    },
];

const columnsDropOff: GridColDef[] = [
    { field: 'id', headerName: 'Order ID', width: 150 },
    {
        field: 'pickUp',
        headerName: 'Sender Name',
        width: 200,
        editable: true,
    },
    {
        field: 'delivery',
        headerName: 'Address',
        width: 200,
        editable: true,
    },
    {
        field: 'age',
        headerName: 'Phone Number',
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
        field: 'status',
        headerName: 'Status',
        width: 150,
        editable: true,
        renderCell: (cellValues: any) => (
            <EditIcon sx={{ color: '#053582' }} />
        ),
    },
];

const columns: GridColDef[] = [
    { field: 'id', headerName: 'Order ID', width: 150 },
    {
        field: 'pickUp',
        headerName: 'Name',
        width: 200,
        editable: true,
    },
    {
        field: 'delivery',
        headerName: 'Email',
        width: 200,
        editable: true,
    },
    {
        field: 'age',
        headerName: 'Phone Number',
        width: 150,
        editable: true,
    },
    {
        field: 'priority',
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
        field: 'status',
        headerName: 'Status',
        width: 150,
        editable: true,
        renderCell: (cellValues: any) => (
            <EditIcon sx={{ color: '#053582' }} />
        ),
    },
];

const rows = [
    { id: '#1', pickUp: 'John Doe', delivery: 'JohnDoe@gmail.com', age: '08170000560', priority: 'Admin', price: 'Active', status: 'true' },
    { id: '#1', pickUp: 'John Doe', delivery: 'JohnDoe@gmail.com', age: '08170000560', priority: 'Admin', price: 'Active', status: 'true' },
];

const getHoverBackgroundColor = (color: string, mode: string) =>
    mode === 'dark' ? darken(color, 0.5) : lighten(color, 0.5);



export default function Profile() {
    const [value, setValues] = useState('1');
    const [show, setShow] = useState(true);
    const [open, setOpen] = useState(false);
    const [address, setAddress] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAddressClickOpen = () => {
        setAddress(true);
    };

    const handleAddressClose = () => {
        setAddress(false);
    };


    //validation schema
    const RegisterSchema = Yup.object().shape({
        // CoverLater: Yup.string().required("Job Title is required"),
    });

    //default value
    const defaultValues = {
        CoverLater: '',
        cover: ''
    };

    //specify the method
    const methods = useForm<FormValuesProps>({
        // resolver: yupResolver(RegisterSchema),
        defaultValues,
    });

    const {
        reset,
        setError,
        setValue,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = methods;

    const handleDrop = useCallback(
        (acceptedFiles: any) => {
            const file = acceptedFiles[0];
            if (file) {
                setValue(
                    'cover',
                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                    })
                );
            }
        },
        [setValue]
    );

    const onSubmit = async (data: FormValuesProps) => {
        try {
            console.log('clicked');

            // saveCoverLatter(body).then(res => {
            //   console.log(res);
            //   toast.success("Cover letter saved successfully")
            //   nextStep();
            // }).catch(e => {
            //   console.log(e);
            // });
            setShow(!show)
        } catch {
            console.log('error occurs');
        };
    };

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValues(newValue);
    };

    const handleEditChange = () => {
        setShow(!show)
    }


    return (
        <section>
            <Typography variant="h5" component="h1" paragraph>
                Pricing Plan
            </Typography>
            <TabContext value={value}>
                <Box>
                    <TabList onChange={handleChange} aria-label="Vertical tabs example" variant="scrollable" sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tab label="Company" value="1" />
                        <Tab label="Users" value="2" />
                        <Tab label="Addresses" value="3" />
                        <Tab label="Refer & Earn" value="4" />
                    </TabList>
                    <Divider />
                    <TabPanel value="1">
                        {show ? (
                            <Grid container spacing={2}>
                                <Grid item md={6} xs={12}>
                                    <Card sx={{ borderRadius: '0px' }}>
                                        <CardContent>
                                            <Typography sx={{ display: 'flex' }} variant="h5" component="h1" paragraph>
                                                Company profile <Button size="small" onClick={handleEditChange} sx={{ backgroundColor: "#053582", color: "#ffffff", ml: 'auto', }}>Edit</Button>
                                            </Typography>
                                            <Grid container spacing={2}>
                                                <Grid item md={3} xs={6}>
                                                    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                                                        <RHFUploadSingleFile
                                                            name="cover"
                                                            label="Logo"
                                                            sx={{ height: '80px', mb: 9 }}
                                                            // accept="image/*"
                                                            maxSize={3145728}
                                                            onDrop={handleDrop}
                                                        />

                                                    </FormProvider>
                                                </Grid>
                                                <Grid item md={4} xs={6}>
                                                    <Typography variant="body2" color={'#053582'} component="h1" paragraph>
                                                        Touchcore
                                                        <Typography variant="caption" color={'gray'} component="h1" paragraph>
                                                            John Doe<br />
                                                            68170000
                                                        </Typography>
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <Card sx={{ borderRadius: '0px', height: '240px' }}>
                                        <CardContent>
                                            <Typography sx={{ display: 'flex' }} variant="h6" component="h1" paragraph>
                                                Bank <Button size="small" onClick={handleEditChange} sx={{ backgroundColor: "#053582", color: "#ffffff", ml: 'auto', }}>Edit</Button>
                                            </Typography>
                                            <Grid container spacing={2}>
                                                <Grid item md={3} xs={6}>
                                                    <img className="img-fluid" src="/assets/icons/credit-card.svg" alt="" />
                                                </Grid>
                                                <Grid item md={4} xs={6}>
                                                    <Typography variant="body2" color={'#053582'} component="h1" paragraph>
                                                        Touchcore
                                                        <Typography variant="caption" color={'gray'} component="h1" paragraph>
                                                            John Doe<br />
                                                            68170000
                                                        </Typography>
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        ) : (
                            <Grid container spacing={2}>
                                <Grid item md={6} xs={12}>
                                    <Card sx={{ borderRadius: '0px' }}>
                                        <CardContent>
                                            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                                                {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}

                                                <Typography sx={{ display: 'flex' }} variant="h5" component="h1" paragraph>
                                                    Company profile
                                                    <LoadingButton
                                                        size="small"
                                                        type="submit"
                                                        variant="contained"
                                                        className='btn btn-default'
                                                        loading={isSubmitting}
                                                        sx={{
                                                            marginLeft: "auto",
                                                            backgroundColor: "#053582",
                                                            color: "#ffffff",
                                                            borderRadius: "10px",
                                                            paddingLeft: "15px",
                                                            paddingRight: "15px",
                                                        }}
                                                    >
                                                        Save
                                                    </LoadingButton>
                                                </Typography>
                                                <Grid container spacing={2}>
                                                    <Grid item md={3} xs={12}>
                                                        <RHFUploadSingleFile
                                                            name="cover"
                                                            label="Logo"
                                                            sx={{ height: '80px', mb: 5 }}
                                                            // accept="image/*"
                                                            maxSize={3145728}
                                                            onDrop={handleDrop}
                                                        />
                                                    </Grid>
                                                    <Grid item md={9} xs={12}>
                                                        <br />
                                                        <Typography sx={{ display: 'flex' }} variant="caption" component="h1" paragraph>Company Name</Typography>
                                                        <RHFTextField className="" size="small" name="email" placeholder="Touchcore" defaultValue={''} />
                                                        <FormLabel>
                                                            <Typography sx={{ display: 'flex' }} variant="caption" component="h1" paragraph>Phone Number *</Typography>
                                                        </FormLabel>
                                                        <RHFTextField size="small" label="" name="email" placeholder="08170000560" defaultValue={''} />
                                                        <FormLabel>
                                                            <Typography sx={{ display: 'flex' }} variant="caption" component="h1" paragraph>Contact Person Name *</Typography>
                                                        </FormLabel>
                                                        <RHFTextField size="small" label="" name="email" placeholder="John Doe" defaultValue={''} />
                                                        <FormLabel>
                                                            <Typography sx={{ display: 'flex' }} variant="caption" component="h1" paragraph>Nature of Business</Typography>
                                                        </FormLabel>
                                                        <RHFSelect size="small" name="educationLevel" sx={{ color: 'gray' }}>
                                                            <option style={{ width: '100%', color: 'gray' }} value={''}>Professional services</option>
                                                            <option style={{ width: '100%', color: 'gray' }} value={'one'}>Search or Select Receiver one</option>
                                                            <option style={{ width: '100%', color: 'gray' }} value={'two'}>Search or Select Receiver two</option>
                                                        </RHFSelect>
                                                        <FormLabel>
                                                            <Typography sx={{ display: 'flex' }} variant="caption" component="h1" paragraph>Company Website</Typography>
                                                        </FormLabel>
                                                        <RHFTextField size="small" label="" name="email" placeholder="www.tcore.com.ng" defaultValue={''} />
                                                        <FormLabel>
                                                            <Typography sx={{ display: 'flex' }} variant="caption" component="h1" paragraph>Webhook</Typography>
                                                        </FormLabel>
                                                        <RHFTextField size="small" label="Webhook" name="email" placeholder="http://www.tcore.com.ng/webhook" defaultValue={''} />
                                                    </Grid>
                                                </Grid>
                                            </FormProvider>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <Card sx={{ borderRadius: '0px' }}>
                                        <CardContent>
                                            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                                                {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}
                                                <Typography sx={{ display: 'flex' }} variant="h6" component="h1" paragraph>
                                                    Bank <Button size="small" sx={{ backgroundColor: "#053582", color: "#ffffff", ml: 'auto', }}>Save</Button>
                                                </Typography>
                                                <Grid container spacing={2}>
                                                    <Grid item md={3} xs={12}>
                                                        <br />
                                                        <img src="/assets/icons/credit-card.svg" alt="" />
                                                    </Grid>
                                                    <Grid item md={9} xs={12}>
                                                        <FormLabel>
                                                            <Typography sx={{ display: 'flex' }} variant="caption" component="h1" paragraph>Bank Name</Typography>
                                                        </FormLabel>
                                                        <RHFSelect size="small" name="educationLevel" sx={{ color: 'gray' }}>
                                                            <option style={{ width: '100%', color: 'gray' }} value={''}>Professional services</option>
                                                            <option style={{ width: '100%', color: 'gray' }} value={'one'}>Search or Select Receiver one</option>
                                                            <option style={{ width: '100%', color: 'gray' }} value={'two'}>Search or Select Receiver two</option>
                                                        </RHFSelect>
                                                        <FormLabel>
                                                            <Typography sx={{ display: 'flex' }} variant="caption" component="h1" paragraph>Bank Account</Typography>
                                                        </FormLabel>
                                                        <RHFSelect size="small" name="educationLevel" sx={{ color: 'gray' }}>
                                                            <option style={{ width: '100%', color: 'gray' }} value={''}>Professional services</option>
                                                            <option style={{ width: '100%', color: 'gray' }} value={'one'}>Search or Select Receiver one</option>
                                                            <option style={{ width: '100%', color: 'gray' }} value={'two'}>Search or Select Receiver two</option>
                                                        </RHFSelect>
                                                    </Grid>
                                                </Grid>
                                            </FormProvider>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        )}
                    </TabPanel>
                    <TabPanel value="2">
                        <Typography sx={{ display: 'flex' }} variant="h6" component="h1" paragraph>
                            <Button size="small" onClick={handleEditChange} sx={{ backgroundColor: "#053582", color: "#ffffff", ml: 'auto', }}>Generate API Token</Button>
                        </Typography>
                        <UsersList/>
                        <Typography sx={{ display: 'flex' }} variant="h6" component="h1" paragraph>
                            <Button size="small" onClick={handleClickOpen} variant="outlined" sx={{ border: "solid 1px #053582", color: "#053582", ml: 'auto', }}>Add New User</Button>
                        </Typography>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            fullWidth={true}
                            maxWidth='xs'
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogContent>
                                <UserForm/>
                            </DialogContent>
                        </Dialog>
                    </TabPanel>
                    <TabPanel value="3">
                        <br />
                        <Typography sx={{ display: 'flex' }} variant="h6" component="h1" paragraph>
                            <img className="mr-2" src="/assets/icons/package.svg" alt="" />Pickup
                            <img className="ml-5 mr-2" src="/assets/icons/package.svg" alt="" />Pickup
                        </Typography>
                        <Box sx={{
                            height: 300,
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
                                rows={rows}
                                columns={columnsDropOff}
                                pageSize={6}
                                rowHeight={75}
                                rowsPerPageOptions={[4]}
                                getRowClassName={(params) => `super-app-theme`}
                                disableSelectionOnClick
                            />
                        </Box>
                        <Typography sx={{ display: 'flex' }} variant="h6" component="h1" paragraph>
                            <Button size="small" onClick={handleAddressClickOpen} variant="outlined" sx={{ border: "solid 1px #053582", color: "#053582", ml: 'auto', }}>Add New Address</Button>
                        </Typography>
                        <Dialog
                            open={address}
                            onClose={handleAddressClose}
                            fullWidth={true}
                            maxWidth='xs'
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogContent>
                                <AddressForm />
                            </DialogContent>
                        </Dialog>
                    </TabPanel>
                    <TabPanel value="4">
                        <Box sx={{
                            height: 300,
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
                                rows={rows}
                                columns={columnsEarnings}
                                pageSize={6}
                                rowHeight={75}
                                rowsPerPageOptions={[4]}
                                getRowClassName={(params) => `super-app-theme`}
                                disableSelectionOnClick
                            />
                        </Box>
                        <div className="justify-content-center">
                            <Typography className="text-center" variant="caption" component="h1" paragraph>
                                <img className="m-auto" src="/assets/icons/referrals.svg" alt="" /> <br />
                                You have no referral history. <br />
                                Start inviting your friends and enjoy a discount for your next order!</Typography>
                        </div>
                    </TabPanel>
                </Box>
            </TabContext>
        </section>
    );
}