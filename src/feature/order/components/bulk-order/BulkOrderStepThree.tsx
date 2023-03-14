import { Person } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Alert, Box, Button, Checkbox, Grid, InputAdornment } from '@mui/material';
import { Card, CardContent, Typography } from '@mui/material';
import { Container } from '@mui/material';
import { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import * as Yup from 'yup';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { FormProvider } from '../../../../components';

const steps = [
  { title: 'Upload template', des: '' },
  { title: 'Review orders', des: '' },
  { title: 'Checkout', des: '' },
  { title: 'Order complete', des: '' },
];


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

export default function BulkOrderStepThree({ formData, setFormData, nextStep, prevStep, step }: Props) {
  const [data, setData] = useState(true);
  const navigate = useNavigate();

  //validation schema
  const RegisterSchema = Yup.object().shape({
    // CoverLater: Yup.string().required("Job Title is required"),
  });

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


  const onSubmit = async (data: FormValuesProps) => {
    try {
      console.log(data);
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
  return (
    <section>
        <Typography sx={{ color: 'gray' }} variant="subtitle1" component="h1" paragraph>
          Create new bulk order
        </Typography>
        <Typography variant="subtitle1" component="h1" paragraph>
          Payment Information
        </Typography>
        <Typography variant="subtitle2" component="h1" color="gray" paragraph>
          Delivery type
        </Typography>
        <Card sx={{ maxWidth: '75rem', mb: 2 }}>
          <CardContent>
            <Typography variant="caption" color="text.secondary">
              <Grid container spacing={2}>
                <Grid sx={{ display: 'flex' }} item md={4} xs={12}>
                  <img className="mr-2" src='/assets/icons/deliveryType.svg' style={{ height: '40px' }} alt='' />
                  <Typography variant="caption" color="#053582">
                  Total delivery fee<br />
                    <span style={{ color: 'gray' }}>Sum of fees all orders</span>
                  </Typography>
                </Grid>
                <Grid item md={4} xs={12}>
                </Grid>
                <Grid item md={1} xs={6}>
                  <Typography sx={{ mt: 2 }} variant="body1" color="#053582"> ₦2,500</Typography>
                </Grid>
              </Grid>
            </Typography>
          </CardContent>
        </Card>
        <Typography variant="subtitle2" component="h1" color="gray" paragraph>
          Payment method
        </Typography>
        <Card sx={{ maxWidth: '75rem', mb: 2 }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid sx={{ display: 'flex' }} item md={3} xs={12}>
                <Checkbox />
                <img className="mr-2" src='/assets/icons/credit-card.svg' alt='' />
                <Typography variant="caption" color="gray" sx={{ mt: 1 }}>
                  Credit / Debit card
                </Typography>
              </Grid>
              <Grid sx={{ display: 'flex' }} item md={3} xs={12}>
                <Checkbox />
                <img className="mr-2" src='/assets/icons/wallet.svg' alt='' />
                <Typography variant="caption" color="gray" sx={{ mt: 1 }}>
                  Wallet
                </Typography>
              </Grid>
              <Grid sx={{ display: 'flex' }} item md={3} xs={12}>
                <Checkbox />
                <img className="mr-2" src='/assets/icons/money.svg' alt='' />
                <Typography variant="caption" color="gray" sx={{ mt: 1 }}>
                  Cash on delivery
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}

          <Grid container justifyContent="center">
            <LoadingButton
              size="small"
              type="submit"
              variant="contained"
              loading={isSubmitting}
              onClick={() => prevStep()}
              sx={{
                backgroundColor: "#053582",
                color: "#ffffff",
                mr: 2,
              }}
            >
              Back
            </LoadingButton>
            <LoadingButton
              size="small"
              type="submit"
              variant="contained"
              loading={isSubmitting}
              sx={{
                backgroundColor: "#053582",
                color: "#ffffff",
                // mt: 5,
              }}
            >
              Make Payment
            </LoadingButton>
          </Grid>
        </FormProvider>
    </section>
  );
}
