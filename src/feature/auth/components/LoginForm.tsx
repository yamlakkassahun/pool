import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import * as yup from 'yup';
import { Button, TextField } from '@mui/material';
import * as Yup from 'yup';
// form
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack, IconButton, InputAdornment, Alert } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '../services/loginSlice';
import { setCredentials } from '../services/authSlice';
import { FormProvider, RHFTextField } from '../../../components';
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

type FormValuesProps = {
  email: string;
  password: string;
  afterSubmit?: string;
};

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState(null);
  const [login, { data, isLoading, error: loginError }] = useLoginMutation();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  //validation schema
  const RegisterSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email must be a valid email address')
      .required('Email is required'),
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

  const onSubmit = async (body: FormValuesProps) => {
    try {
      await login(body)
        .unwrap()
        .then((res) => {
          dispatch(
            setCredentials({ user: res.data.account, accessToken: res.data.token }),
          );
          navigate('/dashboard', { replace: true });
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
          setMessage(error);
        });
      reset();
    } catch (error) {
      console.error(error);
    }
    console.log(data);
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!! false && <Alert severity="error">Invalid email or password</Alert>}

        <RHFTextField size="small" className="inputRounded mt-4" name="email" placeholder="Email Address" defaultValue={''} />
        <RHFTextField
          name="password"
          placeholder="Password"
          size="small"
          className="inputRounded mt-4"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton size="small" onClick={() => setShowPassword(!showPassword)} edge="end">
                  {showPassword ? (
                    <VisibilityOffOutlinedIcon />
                  ) : (
                    <VisibilityOutlinedIcon />
                  )}
                  {/* <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} /> */}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <div className="nav justify-content-end mt-1">
          <a
            className="nav-link ml-auto login-card-body"
            style={{ color: "#053582" }}
            href="#"
          >
            Forger Password
          </a>
        </div>
        <div className="nav d-flex mt-5 login-card-body ">
          <div className="d-flex justify-content-baseline">
            <a
              href="#"
              style={{ color: "#053582" }}
              className="nav-link"
            >
              <span style={{ color: "#696974" }}>
                just joining as hear?{" "}
              </span>{" "}
              Register Now
            </a>
          </div>
          <LoadingButton
            size="large"
            type="submit"
            // variant="contained"
            className='btn'
            loading={isSubmitting}
            style={{
              marginLeft: "auto",
              backgroundColor: "#053582",
              // color: "#f5f5f3",
              borderRadius: "10px",
              paddingLeft: "15px",
              paddingRight: "15px",
            }}
          >
            Login
          </LoadingButton>
        </div>
      </Stack>
    </FormProvider>
  );
};

export default LoginForm;
