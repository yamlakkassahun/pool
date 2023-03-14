import { Person } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Alert, Box, Button, Checkbox, Grid, InputAdornment, TextField } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Card, CardContent, Typography } from '@mui/material';
import { Container } from '@mui/material';
import { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import * as Yup from 'yup';
import { FormProvider, RHFTextField } from '../../../../components';

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


export default function CreateOrderStepTwo({ formData, setFormData, nextStep, prevStep, step }: Props) {
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


  const onSubmitNew = async (data: FormValuesProps) => {
    try {
      console.log(data);
    } catch {
      console.log('error occurs');
    };
  };

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
      <Typography variant="h6" component="h1" color='gray' paragraph>
        Create New Order
      </Typography>
      <Typography variant="body1" component="h1" color='gray' paragraph>
        Item Information
      </Typography>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}
        <Card sx={{ maxWidth: '75rem', marginBottom: '8px' }}>
          <CardContent>
            <div className='justify-content-center'>
              <Grid container spacing={2}>
                <Grid item md={6} xs={12}>
                  <RHFTextField
                    InputLabelProps={{
                      shrink: true,
                    }}
                    name="email" label="Item Name" placeholder="Eg: Laptop" defaultValue={''} />
                </Grid>
                <Grid item md={6} xs={12}>
                  <RHFTextField
                    InputLabelProps={{
                      shrink: true,
                    }}
                    name="email" label="No Of Packages" placeholder="eg: 1" defaultValue={''} />
                </Grid>
              </Grid>
            </div>
          </CardContent>
        </Card >
        <Card sx={{ maxWidth: '75rem', mb: 2, mt: 2 }}>
          <CardContent sx={{ display: 'flex' }}>
            <img className="mr-2" w-50 src='/assets/icons/Illustration.svg' alt='' />
            <Typography variant="caption" color="#053582" style={{ padding: '-5px' }}>
              Small sized parcel<br />
              <span style={{ color: 'gray' }}>Documents/Envelope, small electronics, essential oils, cosmetics, single piece clothing<br />
                Max dimension (40 cm x 30 cm x 20 cm, 5 kg)
              </span>
            </Typography>
            <Button sx={{ marginLeft: 'auto' }}><CheckCircleIcon /></Button>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: '75rem', mb: 2, mt: 2 }}>
          <CardContent sx={{ display: 'flex' }}>
            <img className="mr-2" w-50 src='/assets/icons/Illustration.svg' alt='' />
            <Typography variant="caption" color="#053582" style={{ padding: '-5px' }}>
              Medium sized parcel<br />
              <span style={{ color: 'gray' }}>Shoebox, laptop + charger, fruit basket, small hamper<br />
                Max dimension (50 cm x 40 cm x 30 cm, 10 kg)
              </span>
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: '75rem', mb: 2, mt: 2 }}>
          <CardContent sx={{ display: 'flex' }}>
            <img className="mr-2" w-50 src='/assets/icons/Illustration.svg' alt='' />
            <Typography variant="caption" color="#053582" style={{ padding: '-5px' }}>
              Large sized parcel<br />
              <span style={{ color: 'gray' }}>Shoebox, laptop + charger, fruit basket, small hamper<br />
                Max dimension (50 cm x 40 cm x 30 cm, 10 kg)
              </span>
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: '75rem', mb: 2, mt: 2 }}>
          <CardContent sx={{ display: 'flex' }}>
            <img className="mr-2" w-50 src='/assets/icons/Illustration.svg' alt='' />
            <Typography variant="caption" color="#053582" style={{ padding: '-5px' }}>
              Manual Input<br />
              <span style={{ color: 'gray' }}>If the above options do not fit your needs, feel free to input them manually<br />
                Max dimension (40 cm x 30 cm x 20 cm, 5 kg)
              </span><br />
              <Grid container spacing={2}>
                <Grid item md={3} xs={6}>
                  <span style={{ color: 'gray' }}>Length* <input style={{ width: '40px', border: '1px solid gray' }} /> </span>
                </Grid>
                <Grid item md={3} xs={6}>
                  <span style={{ color: 'gray' }}>width* <input style={{ width: '40px', border: '1px solid gray' }} /> </span>
                </Grid>
                <Grid item md={3} xs={6}>
                  <span style={{ color: 'gray' }}>height* <input style={{ width: '40px', border: '1px solid gray' }} /> </span>
                </Grid>
                <Grid item md={3} xs={6}>
                  <span style={{ color: 'gray' }}>wight* <input style={{ width: '40px', border: '1px solid gray' }} /> </span>
                </Grid>
              </Grid>
            </Typography>
          </CardContent>
        </Card>
        <Typography variant="body1" component="h1" color='gray' paragraph>
          Delivery type
        </Typography>
        <Card sx={{ maxWidth: '75rem', mb: 2 }}>
          <CardContent>
            <Typography variant="caption" component="h1" color="gray" paragraph>
              Please get your parcel ready by this time, and there will be a time range for agent to come pick up, please refer to the timeline depending <br />
              on service type chosen in the next step.
            </Typography>
            <Checkbox /><span style={{ color: 'gray' }}>Now</span> <Checkbox /><span style={{ color: 'gray' }}>Latter</span>
          </CardContent>
        </Card>

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
            }}
          >
            Continue
          </LoadingButton>
        </Grid>
      </FormProvider>
    </section >
  );
}
