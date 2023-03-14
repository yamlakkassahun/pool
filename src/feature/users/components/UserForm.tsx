import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import * as yup from 'yup';
import { Button, Grid, TextField } from '@mui/material';
import * as Yup from 'yup';
// form
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack, IconButton, InputAdornment, Alert } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useDispatch } from 'react-redux';
import { FormProvider, RHFSelect, RHFTextField } from '../../../components';
import { useAddUserMutation } from '../services/userSlice';

type FormValuesProps = {
    email: string;
    password: string;
    city: string;
    role: string;
    userName: string;
    gender: string;
    phone: string;
    afterSubmit?: string;
};

const UserForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState(null);
    const [addUser, { data, isLoading, error }] = useAddUserMutation();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        city: '',
        role: '',
        userName: '',
        gender: '',
        phone: '',
    });

    //validation schema
    const RegisterSchema = Yup.object().shape({
        email: Yup.string()
            .email('Email must be a valid email address')
            .required('Email is required'),
        password: Yup.string().required('Password is required'),
        city: Yup.string().required('City is required'),
        role: Yup.string().required('Role is required'),
        username: Yup.string().required('First Name is required'),
        gender: Yup.string().required('Last Name is required'),
        phone: Yup.string().required('Phone Number is required'),
    });

    //default value
    const defaultValues = {
        email: '',
        password: '',
        city: '',
        role: '',
        userName: '',
        gender: '',
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
                    navigate('/system-users', { replace: true });
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
            <h5><b>Add New User</b></h5>
            <hr />
            <Stack spacing={3}>
                {!!error && (
                    <Alert severity="error">Error Ocurred</Alert>
                )}
                <Grid container spacing={2}>
                    <Grid item md={12} xs={12}>
                        <RHFTextField
                            fullWidth
                            name="username"
                            size="small"

                            defaultValue={''}
                            label="User Name"
                        />
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <RHFTextField
                            fullWidth
                            name="email"
                            size="small"

                            defaultValue={''}
                            label="Email"
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
                        <RHFTextField
                            fullWidth
                            name="city"
                            size="small"

                            defaultValue={''}
                            label="City"
                        />
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <RHFTextField
                            fullWidth
                            name="gender"
                            size="small"

                            defaultValue={''}
                            label="Gender"
                        />
                    </Grid>

                    <Grid item md={12} xs={12}>
                        <RHFTextField
                            fullWidth
                            defaultValue={''}
                            size="small"
                            name="password"
                            label="Password"
                        />
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <RHFSelect
                            fullWidth
                            select
                            name="role"
                            size="small"
                            defaultValue={''}
                            label="Role"
                        >
                            <option></option>
                            <option value='Customer'>Customer</option>
                            <option value='Admin'>Admin</option>
                        </RHFSelect>
                    </Grid>
                </Grid>
                <div className='text-center'>
                    <LoadingButton
                        size="small"
                        type="submit"
                        className="btn btn-primar btn-lg"
                        loading={isSubmitting}
                        sx={{ maxWidth: '200px', backgroundColor: '#053582', color: '#ffffff' }}
                    >
                        Add User
                    </LoadingButton>
                </div>
            </Stack>
        </FormProvider>
    )
}

export default UserForm