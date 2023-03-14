import { Person } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Alert, Box, Button, CardHeader, Checkbox, Grid, InputAdornment } from '@mui/material';
import { Card, CardContent, Typography } from '@mui/material';
import { Container } from '@mui/material';
import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import * as Yup from 'yup';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Looks5RoundedIcon from '@mui/icons-material/Looks5Rounded';
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

export default function BulkOrderStepTwo({ formData, setFormData, nextStep, prevStep, step }: Props) {
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
        <Stepper activeStep={0} alternativeLabel>
          {steps.map((data, key) => (
            <Step key={key}>
              <StepLabel>{data.title}<br /><Typography sx={{ display: { xs: 'none', md: 'block' } }} variant="caption" component="h1" paragraph>{data.des}</Typography></StepLabel>
            </Step>
          ))}
        </Stepper>

        <Card sx={{ maxWidth: '75rem', borderRadius: '0px' }}>
          <CardContent>
            <Grid container spacing={2} sx={{ bgcolor: '#053582', padding: '20px' }}>
              <Grid md={2} xs={12}>
                <Button endIcon={<Looks5RoundedIcon />} sx={{ bgcolor: '#FFFFFF', width: '100%', padding: '15px', borderRadius: '15px' }}>All&nbsp;&nbsp;&nbsp;</Button>
              </Grid>
              <Grid md={2} xs={12}>
                <Button endIcon={<Looks5RoundedIcon />} sx={{ bgcolor: '#FFFFFF', width: '100%', padding: '15px', borderRadius: '15px' }}>Errors&nbsp;&nbsp;&nbsp;</Button>
              </Grid>
              <Grid md={2} xs={12}>
                <Button endIcon={<Looks5RoundedIcon />} sx={{ bgcolor: '#FFFFFF', width: '100%', padding: '15px', borderRadius: '15px' }}>Ready&nbsp;&nbsp;&nbsp;</Button>
              </Grid>
              <Grid md={2} xs={12}>
                <Button endIcon={<Looks5RoundedIcon />} sx={{ bgcolor: '#FFFFFF', width: '100%', padding: '15px', borderRadius: '15px' }}>Complete&nbsp;&nbsp;&nbsp;</Button>
              </Grid>
              <Grid md={3} xs={12} sx={{ display: 'flex', ml: 2 }}>
                <Button sx={{ bgcolor: '#FFFFFF', width: '100%', padding: '15px', borderRadius: '15px' }}>Upload</Button>
                <Button sx={{ bgcolor: '#FFFFFF', width: '100%', padding: '15px', borderRadius: '15px' }}>Print</Button>
                <Button sx={{ bgcolor: '#FFFFFF', width: '100%', padding: '15px', borderRadius: '15px' }}>Checkout</Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <br />
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}

          <Grid container justifyContent="center">
            <Button
              size="small"
              type="submit"
              variant="contained"
              onClick={() => prevStep()}
              sx={{
                backgroundColor: "#053582",
                color: "#ffffff",
                mr: 1,
              }}
            >
              Back
            </Button>
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
              Continue
            </LoadingButton>
          </Grid>
        </FormProvider>
    </section>
  );
}
