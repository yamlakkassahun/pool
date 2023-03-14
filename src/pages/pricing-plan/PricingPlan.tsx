import React, { useState } from 'react'
// @mui
import { Alert, Avatar, Box, Card, CardContent, CardHeader, CardMedia, Container, Dialog, DialogContent, DialogTitle, Grid, IconButton, InputAdornment, Link, Stack, Tab, Tabs, TextField, Typography, darken, lighten } from '@mui/material';

import { LoadingButton, TabContext, TabList, TabPanel } from '@mui/lab';
import { Button } from '@mui/material';
import './PricingPlan.css';
import PaymentIcon from '@mui/icons-material/Payment';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import LocalConvenienceStoreIcon from '@mui/icons-material/LocalConvenienceStore';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, } from 'react-hook-form';
import * as Yup from 'yup';
import { FormProvider, RHFTextField } from '../../components';

type FormValuesProps = {
    email: string;
    password: string;
    afterSubmit?: string;
};

interface TabPanelPaymentProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: number;
}


interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: number;
}

function TabPanelVertical(props: TabPanelPaymentProps) {
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
export default function PricingPlan() {
    const [value, setValue] = useState('1');
    const [value1, setValue1] = useState(0);
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);

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
        // resolver: yupResolver(RegisterSchema),
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

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpen1 = () => {
        setOpen1(true);
    };

    const handleClose1 = () => {
        setOpen1(false);
    };

    const handleClickOpen2 = () => {
        setOpen2(true);
    };

    const handleClose2 = () => {
        setOpen2(false);
    };


    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };


    const handleChange1 = (event: React.SyntheticEvent, newValue: number) => {
        setValue1(newValue);
    };

    return (
        <section>
            <Typography variant="h3" className="text-center" component="h1" paragraph>
                Pricing Plan
            </Typography>
            <Typography variant="body1" className="text-center" component="h1" paragraph>
                Whether you're a growing SME or an MNC, we've a solution for you.
            </Typography>
            <div className="card">
                <div className="card-body">
                    <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                        <li className="nav-item justify-content-center mt-5">
                            <a className="nav-link text-center active mt-5" id="home-tab" data-toggle="tab" href="#home" role="tab"
                                aria-controls="home" aria-selected="true" style={{ border: 'none', color: 'black' }}>
                                Select Plan <br />
                                <div className="dropdown" style={{ backgroundColor: 'lightgray', borderRadius: '10px' }} >
                                    <button className="btn dropdown-toggle bg-gray" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                        monthly plan
                                    </button>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-center mt-5" id="home-tab" data-toggle="tab" href="#home" role="tab"
                                aria-controls="home" aria-selected="true" style={{ border: 'none' }}>
                                <h5 style={{ color: 'black' }}>Pay per use</h5>
                                <p>First Priority Support</p>
                                <p style={{ color: '#104D5B' }}>₦ 2,950</p>
                                <p>Per Month</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                                aria-controls="home" aria-selected="true" style={{ border: 'none' }}>
                                <div className="pricing" style={{ backgroundColor: '#053582', color: 'white' }}>
                                    <div className="pricing-title" style={{ background: '#FDC27B', color: 'black', borderRadius: '10px', marginTop: '-150px' }}>
                                        Best Value
                                    </div>
                                    <div className="pricing-padding">
                                        <h5>Rookie</h5>
                                        <p className='text-white'>First Priority Support</p>
                                        <p style={{ color: '#FDC27B' }}>₦ 2,950</p>
                                        <p className='text-white'>Per Month</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-center mt-5" id="profile-tab" data-toggle="tab" href="#profile" role="tab"
                                aria-controls="profile" aria-selected="false" style={{ border: 'none' }}>
                                <h5 style={{ color: 'black' }}>Pay per use</h5>
                                <p>First Priority Support</p>
                                <p style={{ color: '#104D5B' }}>₦ 2,950</p>
                                <p>Per Month</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-center mt-5" id="contact-tab" data-toggle="tab" href="#contact" role="tab"
                                aria-controls="contact" aria-selected="false" style={{ border: 'none' }}>
                                <h5 style={{ color: 'black' }}>Pay per use</h5>
                                <p>First Priority Support</p>
                                <p style={{ color: '#104D5B' }}>₦ 2,950</p>
                                <p>Per Month</p>
                            </a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div className="table-responsive-md">
                                <table className="table table-responsive-md table-striped table-curved">
                                    <tbody>
                                        <tr>
                                            <td><b>Recommended for</b></td>
                                            <td>Personal use</td>
                                            <td>Ad-Hoc Users</td>
                                            <td>Growing Business Users</td>
                                            <td>Frequent Business Users</td>
                                        </tr>

                                        <tr className='rounded'>
                                            <td><b>SMS Notification  & Tracking</b></td>
                                            <td><img src='/assets/icons/check.svg' /></td>
                                            <td><img src='/assets/icons/check.svg' /></td>
                                            <td><img src='/assets/icons/check.svg' /></td>
                                            <td><img className="mt-2" src='/assets/icons/minus.svg' /></td>
                                        </tr>
                                        <tr>
                                            <td><b>Proof of Delivery</b></td>
                                            <td><img src='/assets/icons/check.svg' /></td>
                                            <td><img src='/assets/icons/check.svg' /></td>
                                            <td><img src='/assets/icons/check.svg' /></td>
                                            <td><img src='/assets/icons/check.svg' /></td>
                                        </tr>
                                        <tr>
                                            <td><b>Level of support</b></td>
                                            <td>Customer service</td>
                                            <td>Customer service</td>
                                            <td>Customer service</td>
                                            <td>Customer service</td>
                                        </tr>
                                        <tr>
                                            <td><b>On Demand Delivery</b></td>
                                            <td><img src='/assets/icons/check.svg' /></td>
                                            <td><img src='/assets/icons/check.svg' /></td>
                                            <td><img src='/assets/icons/check.svg' /></td>
                                            <td><img src='/assets/icons/check.svg' /></td>
                                        </tr>
                                        <tr>
                                            <td><b>Same Day Delivery</b></td>
                                            <td>Unlimited</td>
                                            <td>50</td>
                                            <td>20</td>
                                            <td>5</td>
                                        </tr>
                                        <tr>
                                            <td><b>Next Day Delivery</b></td>
                                            <td><img src='/assets/icons/check.svg' /></td>
                                            <td><img src='/assets/icons/check.svg' /></td>
                                            <td><img className="mt-2" src='/assets/icons/minus.svg' /></td>
                                            <td><img className="mt-2" src='/assets/icons/minus.svg' /></td>
                                        </tr>
                                        <tr>
                                            <td><b>Lost and Damage Liability</b></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td><b>Plugin</b></td>
                                            <td><img src='/assets/icons/check.svg' /></td>
                                            <td><img src='/assets/icons/check.svg' /></td>
                                            <td><img className="mt-2" src='/assets/icons/minus.svg' /></td>
                                            <td><img className="mt-2" src='/assets/icons/minus.svg' /></td>
                                        </tr>
                                        <tr>
                                            <td><b>API Integration</b></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td><b>Service Customization</b></td>
                                            <td><img src='/assets/icons/check.svg' /></td>
                                            <td><img src='/assets/icons/check.svg' /></td>
                                            <td><img className="mt-2" src='/assets/icons/minus.svg' /></td>
                                            <td><img className="mt-2" src='/assets/icons/minus.svg' /></td>
                                        </tr>
                                        <tr>
                                            <td><b>Minimum Top-up</b></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td><b>Top-up Cashback</b></td>
                                            <td></td>
                                            <td></td>
                                            <td>5%</td>
                                            <td>10%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <Box sx={{ display: 'flex' }}>
                                <Typography variant="caption" sx={{ ml: 'auto', mr: 3 }} className="text-end" component="h1" paragraph>
                                    You don't have any credit card linked. Please link your credit card to get started?
                                    <Button sx={{ bgcolor: 'lightgray', color: 'white', ml: 3, width: '200px' }}>Apply Code</Button>
                                    <Button sx={{ bgcolor: '#FDC27B', color: 'black', mr: 3, ml: 3 }} onClick={handleClickOpen} >Checkout</Button>
                                </Typography>
                            </Box>
                        </div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <div className="table-responsive-md">
                                <table className="table table-responsive-md table-striped table-curved">
                                    <tbody>
                                        <tr>
                                            <td><b>Recommended for</b></td>
                                            <td>Personal use</td>
                                            <td>Ad-Hoc Users</td>
                                            <td>Growing Business Users</td>
                                            <td>Frequent Business Users</td>
                                        </tr>

                                        <tr className='rounded'>
                                            <td><b>SMS Notification  & Tracking</b></td>
                                            <td><img src='/assets/icons/check.svg' /></td>
                                            <td><img src='/assets/icons/check.svg' /></td>
                                            <td><img src='/assets/icons/check.svg' /></td>
                                            <td><img className="mt-2" src='/assets/icons/minus.svg' /></td>
                                        </tr>
                                        <tr>
                                            <td><b>Proof of Delivery</b></td>
                                            <td><img src='/assets/icons/check.svg' /></td>
                                            <td><img src='/assets/icons/check.svg' /></td>
                                            <td><img src='/assets/icons/check.svg' /></td>
                                            <td><img src='/assets/icons/check.svg' /></td>
                                        </tr>
                                        <tr>
                                            <td><b>Level of support</b></td>
                                            <td>Customer service</td>
                                            <td>Customer service</td>
                                            <td>Customer service</td>
                                            <td>Customer service</td>
                                        </tr>
                                        <tr>
                                            <td><b>On Demand Delivery</b></td>
                                            <td><img src='/assets/icons/check.svg' /></td>
                                            <td><img src='/assets/icons/check.svg' /></td>
                                            <td><img src='/assets/icons/check.svg' /></td>
                                            <td><img src='/assets/icons/check.svg' /></td>
                                        </tr>
                                        <tr>
                                            <td><b>Same Day Delivery</b></td>
                                            <td>Unlimited</td>
                                            <td>50</td>
                                            <td>20</td>
                                            <td>5</td>
                                        </tr>
                                        <tr>
                                            <td><b>Next Day Delivery</b></td>
                                            <td><img src='/assets/icons/check.svg' /></td>
                                            <td><img src='/assets/icons/check.svg' /></td>
                                            <td><img className="mt-2" src='/assets/icons/minus.svg' /></td>
                                            <td><img className="mt-2" src='/assets/icons/minus.svg' /></td>
                                        </tr>
                                        <tr>
                                            <td><b>Lost and Damage Liability</b></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td><b>Plugin</b></td>
                                            <td><img src='/assets/icons/check.svg' /></td>
                                            <td><img src='/assets/icons/check.svg' /></td>
                                            <td><img className="mt-2" src='/assets/icons/minus.svg' /></td>
                                            <td><img className="mt-2" src='/assets/icons/minus.svg' /></td>
                                        </tr>
                                        <tr>
                                            <td><b>API Integration</b></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td><b>Service Customization</b></td>
                                            <td><img src='/assets/icons/check.svg' /></td>
                                            <td><img src='/assets/icons/check.svg' /></td>
                                            <td><img className="mt-2" src='/assets/icons/minus.svg' /></td>
                                            <td><img className="mt-2" src='/assets/icons/minus.svg' /></td>
                                        </tr>
                                        <tr>
                                            <td><b>Minimum Top-up</b></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td><b>Top-up Cashback</b></td>
                                            <td></td>
                                            <td></td>
                                            <td>5%</td>
                                            <td>10%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <Box sx={{ display: 'flex' }}>
                                <Typography variant="caption" sx={{ ml: 'auto', mr: 3 }} className="text-end" component="h1" paragraph>
                                    You don't have any credit card linked. Please link your credit card to get started?
                                    <Button sx={{ bgcolor: 'lightgray', color: 'white', ml: 3, width: '200px' }}>Apply Code</Button>
                                    <Button sx={{ bgcolor: '#FDC27B', color: 'black', mr: 3, ml: 3 }} onClick={handleClickOpen} >Checkout</Button>
                                </Typography>
                            </Box>
                        </div>
                        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                            <div className="table-responsive-md">
                                <table className="table table-responsive-md table-striped table-curved">
                                    <tbody>
                                        <tr>
                                            <td><b>Recommended for</b></td>
                                            <td>Personal use</td>
                                            <td>Ad-Hoc Users</td>
                                            <td>Growing Business Users</td>
                                            <td>Frequent Business Users</td>
                                        </tr>

                                        <tr className='rounded'>
                                            <td><b>SMS Notification  & Tracking</b></td>
                                            <td><img src='/assets/icons/check.svg' /></td>
                                            <td><img src='/assets/icons/check.svg' /></td>
                                            <td><img src='/assets/icons/check.svg' /></td>
                                            <td><img className="mt-2" src='/assets/icons/minus.svg' /></td>
                                        </tr>
                                        <tr>
                                            <td><b>Proof of Delivery</b></td>
                                            <td><img src='/assets/icons/check.svg' /></td>
                                            <td><img src='/assets/icons/check.svg' /></td>
                                            <td><img src='/assets/icons/check.svg' /></td>
                                            <td><img src='/assets/icons/check.svg' /></td>
                                        </tr>
                                        <tr>
                                            <td><b>Level of support</b></td>
                                            <td>Customer service</td>
                                            <td>Customer service</td>
                                            <td>Customer service</td>
                                            <td>Customer service</td>
                                        </tr>
                                        <tr>
                                            <td><b>On Demand Delivery</b></td>
                                            <td><img src='/assets/icons/check.svg' /></td>
                                            <td><img src='/assets/icons/check.svg' /></td>
                                            <td><img src='/assets/icons/check.svg' /></td>
                                            <td><img src='/assets/icons/check.svg' /></td>
                                        </tr>
                                        <tr>
                                            <td><b>Same Day Delivery</b></td>
                                            <td>Unlimited</td>
                                            <td>50</td>
                                            <td>20</td>
                                            <td>5</td>
                                        </tr>
                                        <tr>
                                            <td><b>Next Day Delivery</b></td>
                                            <td><img src='/assets/icons/check.svg' /></td>
                                            <td><img src='/assets/icons/check.svg' /></td>
                                            <td><img className="mt-2" src='/assets/icons/minus.svg' /></td>
                                            <td><img className="mt-2" src='/assets/icons/minus.svg' /></td>
                                        </tr>
                                        <tr>
                                            <td><b>Lost and Damage Liability</b></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td><b>Plugin</b></td>
                                            <td><img src='/assets/icons/check.svg' /></td>
                                            <td><img src='/assets/icons/check.svg' /></td>
                                            <td><img className="mt-2" src='/assets/icons/minus.svg' /></td>
                                            <td><img className="mt-2" src='/assets/icons/minus.svg' /></td>
                                        </tr>
                                        <tr>
                                            <td><b>API Integration</b></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td><b>Service Customization</b></td>
                                            <td><img src='/assets/icons/check.svg' /></td>
                                            <td><img src='/assets/icons/check.svg' /></td>
                                            <td><img className="mt-2" src='/assets/icons/minus.svg' /></td>
                                            <td><img className="mt-2" src='/assets/icons/minus.svg' /></td>
                                        </tr>
                                        <tr>
                                            <td><b>Minimum Top-up</b></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td><b>Top-up Cashback</b></td>
                                            <td></td>
                                            <td></td>
                                            <td>5%</td>
                                            <td>10%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <Box sx={{ display: 'flex' }}>
                                <Typography variant="caption" sx={{ ml: 'auto', mr: 3 }} className="text-end" component="h1" paragraph>
                                    You don't have any credit card linked. Please link your credit card to get started?
                                    <Button sx={{ bgcolor: 'lightgray', color: 'white', ml: 3, width: '200px' }}>Apply Code</Button>
                                    <Button sx={{ bgcolor: '#FDC27B', color: 'black', mr: 3, ml: 3 }} onClick={handleClickOpen} >Checkout</Button>
                                </Typography>
                            </Box>
                        </div>
                    </div>
                </div>
            </div>

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
                        You don't have any credit card linked. Please link your credit card to get started.
                    </Typography>
                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Button variant="outlined" size="large" fullWidth sx={{ border: 'solid 1px #053582', color: '#053582', borderRadius: 0 }}>No, Cancel</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button size="large" onClick={handleClickOpen1} fullWidth sx={{ borderRadius: 0, bgcolor: '#053582', color: 'white' }}> Link credit card</Button>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>

            <Dialog
                fullWidth={true}
                maxWidth={'sm'}
                open={open1}
                onClose={handleClose1}
                PaperProps={{
                    style: {
                        borderRadius: '0px'
                    },
                }}
            >
                {/* <DialogTitle>Subscribe</DialogTitle> */}
                <DialogContent>
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-4" style={{ borderRight: 'solid 1px gray' }}>
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

            <Dialog
                className="text-center"
                open={open2}
                fullWidth={true}
                maxWidth={'sm'}
                onClose={handleClose2}
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
                        Are you sure you want to subscribe to this plan? We will bill your linked card for the amount of  ₦10,000.
                    </Typography>
                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Button variant="outlined" size="large" fullWidth sx={{ border: 'solid 1px #053582', color: '#053582', borderRadius: 0 }}>No, Cancel</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button size="large" fullWidth sx={{ borderRadius: 0, bgcolor: '#053582', color: 'white' }}> Yes Subscribe</Button>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </section>
    );
}
