import { Dialog, DialogContent, Typography, Card, CardContent, Button, Select, MenuItem, ListItemIcon, ListItemText, Checkbox, Stack, Alert, SelectChangeEvent } from '@mui/material';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { FormProvider, Loading, RHFSelect, RHFTextField } from '../../../../components';
import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';
import { LoadingButton } from '@mui/lab';
import * as Yup from 'yup';
import { useGetAllDeliveryPlansQuery } from '../../../shared/services/SharedSlice';


type Props = {
    formData: any;
    setFormData: any;
    nextStep: any;
    step: Number;
};


type FormValuesProps = {
    afterSubmit?: string;
    email: string;
};

const CreateOrderStepStart = ({ formData, setFormData, nextStep, step }: Props) => {
    let plans: any = [];
    const { data, error, isLoading, isFetching, isSuccess } = useGetAllDeliveryPlansQuery();
    const [open, setOpen] = useState(true);
    const [pickUpLocation, setPickUpLocation] = useState<any>()
    const [dropLocation, setDropLocation] = useState<any>()
    const [packageSize, setPackageSize] = React.useState('small');
    const [deliveryType, setDeliveryType] = React.useState('small');

    const handleChange = (event: SelectChangeEvent) => {
        setPackageSize(event.target.value as string);
    };

    const handleDeliveryTypeChange = (event: SelectChangeEvent) => {
        setDeliveryType(event.target.value as string);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const getPickUpLocation = (e: any) => {
        geocodeByAddress(`${e.label}`)
            .then(results => getLatLng(results[0]))
            .then(({ lat, lng }) => {
                setPickUpLocation({ lat, lng })
                console.log('Successfully got latitude and longitude', { lat, lng })
            });
    }

    const getDropLocation = (e: any) => {
        geocodeByAddress(`${e.label}`)
            .then(results => getLatLng(results[0]))
            .then(({ lat, lng }) => {
                setDropLocation({ lat, lng })
                console.log('Successfully got latitude and longitude', { lat, lng })
            });
    }

    console.log(pickUpLocation);


   

    //validation schema
    const RegisterSchema = Yup.object().shape({
        pickUpLocation: Yup.string().required("Job Title is required"),
        dropLocation: Yup.string().required("Job Title is required"),
        packageSize: Yup.string().required("Job Title is required"),
        deliveryType: Yup.string().required("Job Title is required"),
    });

    //default value
    const defaultValues = {
        email: '',
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

    const size = [
        {"length": 40,"width": 30,"height": 20,"weight": 5},
        {"length": 50,"width": 40,"height": 30,"weight": 10},
        {"length": 50,"width": 40,"height": 30,"weight": 10},
    ]
    const onSubmit = async (data: any) => {
        let pkgSize; 
        try {
            console.log('submit method called')

            if(packageSize === 'small') pkgSize = size[0]
            if(packageSize === 'medium') pkgSize = size[1]
            if(packageSize === 'large') pkgSize = size[2]

            const formData = {
                "pickUpLocation": pickUpLocation,
                "dropLocation": dropLocation,
                "packageSize": pkgSize,
                "deliveryType": deliveryType,
            }

            console.log(formData)

            setFormData({
                ...formData,
                pickUpLocation: pickUpLocation ,
                destinationLocation: dropLocation,
                deliveryPlan: deliveryType,
                sizeOfItem: pkgSize,
            })

            console.log(formData)

              nextStep();

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


    if (isLoading && isFetching) return <Loading />;

    if (isSuccess) {
        plans = data.data.data;
    }



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
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                {!! false && <Alert severity="error">Invalid email or password</Alert>}
                <div className='row'>
                    <div className='col-md-7'>
                        <GooglePlacesAutocomplete
                            apiKey="AIzaSyCGPY_hsHcarYRmtuyvZCTOyoRWGN7-JGA"
                            selectProps={{
                                placeholder: 'Pick Up Location ...',
                                pickUpLocation,
                                name: "pickupLocation",
                                onChange: getPickUpLocation,
                                styles: {
                                    textInputProps: (provided: any) => ({
                                        ...provided,
                                        placeholder: "Where is it?",
                                        placeholderTextColor: '#32a852',
                                        returnKeyType: "search"
                                    }),
                                    textInputContainer: (provided: any) => ({
                                        ...provided,
                                    }),
                                    input: (provided: any) => ({
                                        ...provided,
                                        padding: '25px',
                                        width: '45rem',
                                        placeholderTextColor: '#32a852',
                                        returnKeyType: "search"
                                    }),
                                },
                            }}
                        />
                        <Card sx={{ maxWidth: '50rem', mt: 1, mb: 1, p: 0 }}>
                            <CardContent sx={{ display: 'flex' }}>
                                <img className="mr-2" src='/assets/icons/Location.svg' style={{ height: '30px' }} alt='' />
                                <Typography variant="caption" color="#053582">
                                    Stop<br />|
                                </Typography>
                                <Button sx={{ marginLeft: 'auto' }}><img src='/assets/icons/plus.svg' alt='' /></Button>
                            </CardContent>
                        </Card>
                        <GooglePlacesAutocomplete
                            apiKey="AIzaSyCGPY_hsHcarYRmtuyvZCTOyoRWGN7-JGA"
                            selectProps={{
                                dropLocation,
                                onChange: getDropLocation,
                                placeholder: 'Drop Of Location ...',
                                styles: {
                                    textInputContainer: (provided: any) => ({
                                        ...provided,
                                    }),
                                    input: (provided: any) => ({
                                        ...provided,
                                        padding: '25px',
                                        width: '45rem',
                                        border: 'none'
                                    }),
                                    description: (provided: any) => ({
                                        description: 'Pick Up Location'
                                    })
                                },
                            }}
                        />
                        <Card sx={{ maxWidth: '50rem', marginTop: 1, padding: '-5px' }}>
                            <Select fullWidth defaultValue='small' value={packageSize}
                                onChange={handleChange}
                            >
                                <MenuItem value='small' sx={{ display: 'flex' }} selected>
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
                            <Select fullWidth defaultValue='small' name="deliveryType" placeholder='Select Delivery Type '
                                onChange={handleDeliveryTypeChange}>
                                <MenuItem value={'small'} sx={{ display: 'flex' }} selected>
                                    <ListItemIcon>
                                        <img className="mr-2" src='/assets/icons/deliveryType.svg' alt='' />
                                        <ListItemText>
                                            <Typography variant="caption" color="#053582" style={{ padding: '-5px' }}>
                                                Select <br />Delivery Plan
                                            </Typography>
                                        </ListItemText>
                                    </ListItemIcon>
                                </MenuItem>
                                {plans.length > 0 && plans.map((plan: any, index: number) => (
                                    <MenuItem key={index} value={plan._id} sx={{ display: 'flex' }} >
                                        <ListItemIcon>
                                            <img className="mr-2" src='/assets/icons/deliveryType.svg' alt='' />
                                            <ListItemText>
                                                <Typography variant="caption" color="#053582" style={{ padding: '-5px' }}>
                                                    {plan.name}<br /><span className='menu-body' style={{ color: 'gray' }}>{plan.description}</span>
                                                </Typography>
                                            </ListItemText>
                                        </ListItemIcon>
                                    </MenuItem>
                                ))}
                            </Select>
                        </Card>
                        <br />
                        <LoadingButton
                            size="small"
                            type="submit"
                            // variant="contained"
                            className='btn'
                            loading={isSubmitting}
                            style={{
                                backgroundColor: "#053582",
                                color: "#ffffff",
                            }}
                        >
                            Create Order
                        </LoadingButton>
                    </div>
                    <div className='col-md-4'>
                        <p><Checkbox />Add Stop</p>
                    </div>
                </div>
            </FormProvider>
        </section>
    );
}

export default CreateOrderStepStart