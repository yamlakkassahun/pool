import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';
import { Stack, Alert, Grid } from '@mui/material';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { FormProvider, RHFTextField, RHFSelect, RHFCheckbox } from '../../../components';
import * as Yup from 'yup';
import { useAddAddressMutation } from '../services/AddressSlice';

type FormValuesProps = {
    name: string;
    address: string;
    phone: string;
    afterSubmit?: string;
};

const AddressForm = () => {
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState('null');
    const [addUser, { data, isLoading, error }] = useAddAddressMutation();

    const [formData, setFormData] = useState({
        name: '',
        address: '',
        phone: '',
    });

    //validation schema
    const RegisterSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        address: Yup.string().required('address is required'),
        phone: Yup.string().required('Phone Number is required'),
    });

    //default value
    const defaultValues = {
        name: '',
        address: '',
        phone: '',
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

    const onSubmit = async (body: FormValuesProps) => {
        console.log(body);
        try {
            await addUser(body)
                .unwrap()
                .then((res) => {
                    // navigate('/system-users', { replace: true });
                    console.log(res);
                })
                .catch((error) => {
                    console.log(error);
                    setMessage(error);
                });
            reset();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <h5><b>Add new address</b></h5>
            <hr />
            <Stack spacing={3}>
                {!!error && (
                    <Alert severity="error">{ message }</Alert>
                )}
                <Grid container spacing={2}>
                    <Grid item md={12} xs={12}>
                        <RHFTextField
                            fullWidth
                            name="name"
                            size="small"

                            defaultValue={''}
                            label="Sender Name"
                        />
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <RHFTextField
                            fullWidth
                            name="address"
                            size="small"
                            defaultValue={''}
                            label="Address"
                        />
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <RHFTextField
                            fullWidth
                            name="phone"
                            size="small"
                            defaultValue={''}
                            label="Phone Number"
                        />
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <RHFCheckbox
                            name="default"
                            label="Make Default"
                        />
                    </Grid>
                </Grid>
                <div className='text-center'>
                    <LoadingButton
                        size="small"
                        type="submit"
                        className="btn btn-lg btn-block"
                        loading={isSubmitting}
                        sx={{ maxWidth: '100px', backgroundColor: '#053582', color: '#ffffff' }}
                    >
                        Login
                    </LoadingButton>
                </div>
            </Stack>
        </FormProvider>
    )
}

export default AddressForm