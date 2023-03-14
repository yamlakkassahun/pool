import React, { useState } from 'react';
// @mui
import { Alert, Box, Card, CardActionArea, Checkbox, Container, Dialog, DialogActions, DialogContentText, DialogProps, DialogTitle, Grid, IconButton, InputAdornment, Modal, Select, SelectChangeEvent, Stack, Tab, Tabs, TextField, Typography, darken, lighten, styled } from '@mui/material';
import { CardContent } from '@mui/material';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
// ---------------------------------------------------------
import PaymentIcon from '@mui/icons-material/Payment';
import DialogContent from '@mui/material/DialogContent';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import LocalConvenienceStoreIcon from '@mui/icons-material/LocalConvenienceStore';
import { LoadingButton } from '@mui/lab';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { FormProvider, RHFTextField } from '../../components';
import { RecentOrderList } from '../../feature/order';
import { Menu } from 'react-feather';
import { TransactionList } from '../../feature/payment';

type FormValuesProps = {
    email: string;
    password: string;
    afterSubmit?: string;
};

interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function Payment() {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // const [login, { isLoading, error : loginError }] = useLoginMutation();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    //validation schema
    const RegisterSchema = Yup.object().shape({
        email: Yup.string().email('Email must be a valid email address').required('Email is required'),
        password: Yup.string().required('Password is required'),
    });

    //default value
    const defaultValues = {
        email: '',
        password: '',
    };

    //specify the method
    const methods = useForm<FormValuesProps>({
        resolver: yupResolver(RegisterSchema),
        defaultValues,
    });

    const {
        reset,
        setError,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = methods;

    const onSubmit = async (data: FormValuesProps) => {
        try {
            // await login(data).unwrap().then((res) => {
            //     dispatch(setCredentials({ user: res.user, accessToken: res.token }));
            //     toast.success("Login Successful!")
            //     navigate("/home", { replace: true })
            // });
            console.log(data);
            reset();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <section>
            <Typography variant="h5" component="h1" paragraph>
                Create New Order
            </Typography>
            <div className="row ">
                <div className="col-xl-4 col-md-6 col-sm-12 col-xs-12">
                    <div className="card pt-2 pb-2 dashboard-card">
                        <div className="card-statistic-4">
                            <div className="align-items-center justify-content-between">
                                <div className="row ">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3 pb-1">
                                        <div className="card-content">
                                            <h5 className="font-15">Monthly Credit</h5>
                                            <h2 style={{ color: '#053582' }}>₦500,00</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4  col-md-6 col-sm-12 col-xs-12">
                    <div className="card pt-2 pb-2 dashboard-card">
                        <div className="card-statistic-4">
                            <div className="align-items-center justify-content-between">
                                <div className="row ">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3">
                                        <div className="card-content">
                                            <h5 className="font-15">Monthly Credit</h5>
                                            <h2 style={{ color: '#053582' }}>₦500,00</h2>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pl-0 justify-content-center" >
                                        <div className="mt-4  text-center">
                                            <img className='img-fluid' src='/assets/icons/top-up.svg' height={40} alt='' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12 col-xs-12">
                    <div className="card pt-3 pb-4 dashboard-card">
                        <div className="card-statistic-4">
                            <div className="align-items-center justify-content-between">
                                <div className="row ">
                                    <div className="col-lg-3 col-md-4 col-3  pr-0 pt-3 pb-2">
                                        <div className="card-content">
                                            <img className='img-fluid' src='/assets/icons/credit-card.svg' alt='' />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-4 pr-0 pt-3">
                                        <div className="card-content">
                                            <p>Link your card</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-5 pr-0">
                                        <div className="card-content">
                                            <Button className='btn-sm' onClick={handleClickOpen} sx={{ mt: 2, backgroundColor: '#053582', color: 'white', }}>Link Card</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Dialog
                fullWidth={true}
                maxWidth={'sm'}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        borderRadius: '0px'
                    },
                }}
            >
                {/* <DialogTitle>Subscribe</DialogTitle> */}
                <DialogContent>
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-4 payment-card">
                            <ul className="nav nav-pills flex-column bg-transparent" id="myTab4" role="tablist" >
                                <li className="nav-item">
                                    <a className="nav-link text-black" id="home-tab4" data-toggle="tab" href="#home4" role="tab"
                                        aria-controls="home" aria-selected="true" style={{ color: 'black', fontWeight: 'bold' }}> Pay With</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="myTab4" data-toggle="tab" href="#profile4" role="tab"
                                        aria-controls="profile" aria-selected="false" style={{ color: 'black' }}><PaymentIcon className='mr-3' /> Card</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="profile-tab4" data-toggle="tab" href="#profile4" role="tab"
                                        aria-controls="profile" aria-selected="false" style={{ color: 'black' }}><AccountBalanceIcon className='mr-3' /> Bank</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="profile-tab4" data-toggle="tab" href="#profile4" role="tab"
                                        aria-controls="profile" aria-selected="false" style={{ color: 'black' }}><LocalConvenienceStoreIcon className='mr-3' /> GTB 737</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="profile-tab4" data-toggle="tab" href="#profile4" role="tab"
                                        aria-controls="profile" aria-selected="false" style={{ color: 'black' }}><MobileFriendlyIcon className='mr-3' /> Mobile</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="contact-tab4" data-toggle="tab" href="#contact4" role="tab"
                                        aria-controls="contact" aria-selected="false" style={{ color: 'black' }}><PaymentIcon className='mr-3' />Visa</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-12 col-md-8">
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <Menu color='#66C4E7' className='mt-3'/>
                                </div>
                                <div>
                                    <p>demo@playstcak.com<br />Pay&nbsp;<span style={{ color: '#25B062' }}>NGN 100</span></p>
                                </div>
                            </div>
                            <hr />
                            <div className="tab-content no-padding" id="myTab2Content">
                                <div className="tab-pane fade show active" id="home4" role="tabpanel" aria-labelledby="home-tab4">
                                    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                                        {!! false && <Alert severity="error">Invalid email or password</Alert>}
                                        <p>Enter Your Card Detail to Pay</p>
                                        <div className='row'>

                                            <div className='col-md-12'>
                                                <RHFTextField fullWidth className="inputRounded mt-4" name="email" label="CARD NUMBER" placeholder="0000 0000 0000 0000" defaultValue={''} />
                                            </div>
                                            <div className='col-md-6'>
                                                <RHFTextField fullWidth className="inputRounded mt-4 " name="email" label="CARD EXPIRE" placeholder="MM/YY" defaultValue={''} />
                                            </div>
                                            <div className='col-md-6'>
                                                <RHFTextField fullWidth className="inputRounded mt-4 me-2" name="email" label="CVV " placeholder="123" defaultValue={''} />
                                            </div>
                                            <div className='col-md-12'>
                                                <br />
                                                <LoadingButton
                                                    size="large"
                                                    type="submit"
                                                    variant="contained"
                                                    className='btn btn-default'
                                                    loading={isSubmitting}
                                                    style={{
                                                        margin: "auto",
                                                        width: "100%",
                                                        backgroundColor: "lightgreen",
                                                        color: "#ffffff",
                                                        borderRadius: "10px",
                                                        paddingLeft: "15px",
                                                        paddingRight: "15px",
                                                    }}
                                                >
                                                    Pay NGN 100
                                                </LoadingButton>
                                            </div>
                                        </div>
                                        <Grid container spacing={0}>
                                            <Grid item md={12} className='text-center'>
                                            </Grid>
                                            <Grid item md={6}>
                                            </Grid>
                                            <Grid item md={6}>
                                            </Grid>
                                            <Grid item md={12}>
                                                <br />

                                            </Grid>
                                        </Grid>
                                    </FormProvider>
                                </div>
                                <div className="tab-pane fade" id="profile4" role="tabpanel" aria-labelledby="profile-tab4">
                                    Sed sed metus vel lacus hendrerit tempus. Sed efficitur velit tortor, ac efficitur est
                                    lobortis quis. Nullam lacinia metus erat, sed fermentum justo rutrum ultrices. Proin quis
                                    iaculis tellus. Etiam ac vehicula eros, pharetra consectetur dui. Aliquam convallis neque
                                    eget tellus efficitur, eget maximus massa imperdiet. Morbi a mattis velit. Donec hendrerit
                                    venenatis justo, eget scelerisque tellus pharetra a.
                                </div>
                                <div className="tab-pane fade" id="contact4" role="tabpanel" aria-labelledby="contact-tab4">
                                    Vestibulum imperdiet odio sed neque ultricies, ut dapibus mi maximus. Proin ligula massa,
                                    gravida in lacinia efficitur, hendrerit eget mauris. Pellentesque fermentum, sem interdum
                                    molestie finibus, nulla diam varius leo, nec varius lectus elit id dolor. Nam malesuada orci
                                    non ornare vulputate. Ut ut sollicitudin magna. Vestibulum eget ligula ut ipsum venenatis
                                    ultrices. Proin bibendum bibendum augue ut luctus.
                                </div>
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
            <br />
            <Typography variant="h4" component="h1" paragraph>
                Recent Transitions
            </Typography>
            <TransactionList />
        </section >
    );
}