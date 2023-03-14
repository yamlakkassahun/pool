import { Person } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Alert, Box, Button, Checkbox, Grid, InputAdornment } from '@mui/material';
import { Card, CardContent, Typography } from '@mui/material';
import { Container } from '@mui/material';
import { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import * as Yup from 'yup';

type Props = {
  formData: any;
  setFormData: any;
  nextStep: any;
  prevStep: any;
  step: Number;
};


type FormValuesProps = {
  afterSubmit?: string;
  CoverLater: string;
};

export default function BulkOrderStepFour({ formData, setFormData, nextStep, prevStep, step }: Props) {

  return (
    <section>
      <Typography sx={{ color: 'gray' }} variant="subtitle1" component="h1" paragraph>
        Create New Order
      </Typography>
    </section>
  );
}
