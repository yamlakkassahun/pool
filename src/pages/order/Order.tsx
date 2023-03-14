import React, { useState } from 'react';
// @mui
import { Box, Card, CardActionArea, Checkbox, Container, Dialog, DialogProps, InputAdornment, ListItemIcon, ListItemText, MenuItem, Modal, Select, SelectChangeEvent, Typography, styled } from '@mui/material';
// components
import { CardContent, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
// ---------------------------------------------------------
import DialogContent from '@mui/material/DialogContent';
import './Order.css';
import { FormProvider, RHFSelect } from '../../components';
import { Person } from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import { method } from 'lodash';

type Props = {
    formData: any;
    setFormData: any;
    nextStep: any;
    step: Number;
};


type FormValuesProps = {
    afterSubmit?: string;
    CoverLater: string;
};

export default function Order() {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        setOpen(false);
    };

    //validation schema
    // const RegisterSchema = Yup.object().shape({
    //     // CoverLater: Yup.string().required("Job Title is required"),
    // });

    //default value
    const defaultValues = {
        CoverLater: '',
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


    const onSubmitNew = async (data: FormValuesProps) => {
        try {
            console.log(data);
        } catch {
            console.log('error occurs');
        };
    };

    const onSubmit = async (data: FormValuesProps) => {
        try {

            // saveCoverLatter(body).then(res => {
            //   console.log(res);
            //   toast.success("Cover letter saved successfully")
            //   nextStep();
            // }).catch(e => {
            //   console.log(e);
            // });
        } catch {
            console.log('error occurs');
        };
    };


    return (
        <section className="section">
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
                <div id="carouselExampleIndicators3" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators3" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators3" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators3" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="/assets/icons/Rectangle.svg" className="w-100 d-block" alt="First" />
                            <DialogContent className='text-center mb-3'>
                                <Typography variant="h5" color="#053582">
                                    Get a quote
                                </Typography>
                                <Typography variant="caption" color="#053582">
                                    Get an instant quote by entering the details of your request<br />
                                </Typography>
                                <a className="btn btn-sm" type="a" href="#carouselExampleIndicators3" style={{ backgroundColor: '#053582', color: 'white', width: '10rem' }} data-slide="next">
                                    Next
                                </a>
                            </DialogContent>
                        </div>
                        <div className="carousel-item">
                            <img src="/assets/icons//Rectangle.svg" className="w-100 d-block" alt="First" />
                            <DialogContent className='text-center mb-3'>
                                <Typography variant="h5" color="#053582">
                                    Fill in Detail
                                </Typography>
                                <Typography variant="caption" color="#053582">
                                    Fill in the order details to get an accurate drop off time and pricing quote on your order later<br />
                                </Typography>
                                <a className="btn btn-sm" type="a" href="#carouselExampleIndicators3" style={{ backgroundColor: '#053582', color: 'white', width: '10rem' }} data-slide="next">
                                    Next
                                </a>
                            </DialogContent>
                        </div>
                        <div className="carousel-item">
                            <img src="/assets/icons//Rectangle.svg" className="w-100 d-block" alt="First" />
                            <DialogContent className='text-center mb-3'>
                                <Typography variant="h5" color="#053582">
                                    Confirm payment
                                </Typography>
                                <Typography variant="caption" color="#053582">
                                    Choose the payment option that works for you and make payment to process your request.<br />
                                </Typography>
                                <a className="btn btn-sm" type="a" href="#carouselExampleIndicators3" style={{ backgroundColor: '#053582', color: 'white', width: '10rem' }} data-slide="next">
                                    Next
                                </a>
                            </DialogContent>
                        </div>
                    </div>
                </div>
            </Dialog>
            <Typography variant="h6" component="h1" color='gray' paragraph>
                Create New Order
            </Typography>
            <Typography variant="body1" component="h1" color='black' paragraph>
                Calculate fee
            </Typography>
            <div className='row'>
                <div className='col-md-8'>
                    <Card sx={{ maxWidth: '50rem', marginTop: 1, p: 0 }}>
                        <CardContent sx={{ display: 'flex' }}>
                            <img className="mr-2" src='/assets/icons/Location.svg' style={{ height: '30px' }} alt='' />
                            <Typography variant="caption" color="#053582">
                                Pick Up Location<br />|
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: '50rem', marginTop: 1, p: 0 }}>
                        <CardContent sx={{ display: 'flex' }}>
                            <img className="mr-2" src='/assets/icons/Location.svg' style={{ height: '30px' }} alt='' />
                            <Typography variant="caption" color="#053582">
                                Stop<br />|
                            </Typography>
                            <Button sx={{ marginLeft: 'auto' }}><img src='/assets/icons/plus.svg' alt='' /></Button>
                        </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: '50rem', marginTop: 1 }}>
                        <CardContent sx={{ display: 'flex' }}>
                            <img className="mr-2" src='/assets/icons/Location.svg' style={{ height: '30px' }} alt='' />
                            <Typography variant="caption" color="#053582">
                                Drop-off Location<br />|
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: '50rem', marginTop: 1, padding: '-5px' }}>
                        <Select fullWidth defaultValue='small'>
                            <MenuItem value="small" sx={{ display: 'flex' }} selected>
                                <ListItemIcon>
                                    <img className="mr-2" src='/assets/icons/size.svg' alt='' />
                                    <ListItemText>
                                        <Typography variant="caption" color="#053582" style={{ padding: '-5px' }}>
                                            Small Size Parcel<br /><span className='menu-body' style={{ color: 'gray' }}>Documents/Envelope, small electronics, essential oils, cosmetics, single piece clothing</span>
                                        </Typography>
                                    </ListItemText>
                                </ListItemIcon>
                            </MenuItem>
                            <MenuItem value="medium" sx={{ display: 'flex' }}>
                                <ListItemIcon>
                                    <img className="mr-2" src='/assets/icons/size.svg' alt='' />
                                    <ListItemText>
                                        <Typography variant="caption" color="#053582" style={{ padding: '-5px' }}>
                                            Medium sized parcel<br /><span className='menu-body' style={{ color: 'gray' }}>Shoebox, laptop + charger, fruit basket, small hamper</span>
                                        </Typography>
                                    </ListItemText>
                                </ListItemIcon>
                            </MenuItem>
                            <MenuItem value="large" sx={{ display: 'flex' }}>
                                <ListItemIcon>
                                    <img className="mr-2" src='/assets/icons/size.svg' alt='' />
                                    <ListItemText>
                                        <Typography variant="caption" color="#053582" style={{ padding: '-5px' }}>
                                            Large sized parcel<br /><span className='menu-body' style={{ color: 'gray' }}>Shoebox, laptop + charger, fruit basket, small hamper</span>
                                        </Typography>
                                    </ListItemText>
                                </ListItemIcon>
                            </MenuItem>
                        </Select>
                    </Card>
                    <Card sx={{ maxWidth: '50rem', marginTop: 1 }}>
                        <Select fullWidth defaultValue='small'>
                            <MenuItem value="small" sx={{ display: 'flex' }} selected>
                                <ListItemIcon>
                                    <img className="mr-2" src='/assets/icons/deliveryType.svg' alt='' />
                                    <ListItemText>
                                        <Typography variant="caption" color="#053582" style={{ padding: '-5px' }}>
                                            Standard Delivery<br /><span className='menu-body' style={{ color: 'gray' }}>Delivered within 12 hours</span>
                                        </Typography>
                                    </ListItemText>
                                </ListItemIcon>
                            </MenuItem>
                        </Select>
                    </Card>
                    <br />
                    <Button
                        size="small"
                        type="submit"
                        variant="contained"
                        onClick={() => navigate("/order/create")}
                        sx={{
                            backgroundColor: "#053582",
                            color: "#ffffff",
                        }}
                    >
                        Create Order
                    </Button>
                </div>
                <div className='col-md-4'>
                    <p><Checkbox />Add Stop</p>
                </div>
            </div>
        </section>
    );
}
