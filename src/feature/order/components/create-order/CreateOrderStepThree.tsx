import { Person } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Alert, Box, Button, Checkbox, Grid, InputAdornment, ListItemIcon, ListItemText, MenuItem, Select, TextField } from '@mui/material';
import { Card, CardContent, Typography } from '@mui/material';
import { Container } from '@mui/material';
import { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import * as Yup from 'yup';
import { FormProvider } from '../../../../components';

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

export default function CreateOrderStepThree({ formData, setFormData, nextStep, prevStep, step }: Props) {
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
        Optional Details
      </Typography>
      <Card sx={{ maxWidth: '75rem', marginBottom: 2 }}>
        <CardContent sx={{ display: 'flex' }}>
          <Checkbox />
          <img className="mr-2" src='/assets/icons/fragile.svg' alt='' />
          <Typography variant="caption" color="#053582" style={{ padding: '-5px' }}>
            Fragile  <br /><span style={{ color: 'gray' }}>Select if your item is fragile</span>
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: '75rem', marginBottom: 2 }}>
        <CardContent sx={{ display: 'flex' }}>
          <Checkbox />
          <img className="mr-2" src='/assets/icons/notepade.svg' alt='' />
          <Typography variant="caption" color="#053582" style={{ padding: '-5px' }}>
            Delivery <br /><span style={{ color: 'gray' }}>Note Select if you have a delivery note to drop-off along with your item</span>
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: '75rem', marginBottom: 2 }}>
        <CardContent sx={{ display: 'flex' }}>
          <Checkbox />
          <img className="mr-2" src='/assets/icons/pick.svg' alt='' />
          <Typography variant="caption" color="#053582" style={{ padding: '-5px' }}>
            Pick up SMS<br /><span style={{ color: 'gray' }}>
              Select if you want sender to receive order number and instructions to prepare for pick up via SMS notification after order created.</span>
          </Typography>
        </CardContent>
      </Card>
      <Typography variant="body1" component="h1" color='gray' paragraph>
        Insurance
      </Typography>
      <Card sx={{ maxWidth: '75rem', marginBottom: 2 }}>
        <CardContent sx={{ display: 'flex' }}>
          <Grid container spacing={2}>
            <Grid sx={{ display: 'flex' }} item md={3} xs={12}>
              <Checkbox />
              <img className="mr-2" src='/assets/icons/shipping-insurance.svg' alt='' />
              <Typography variant="caption" color="gray" sx={{ mt: 1 }}>
                Standard Insurance
              </Typography>
            </Grid>
            <Grid sx={{ display: 'flex' }} item md={3} xs={12}>
              <Checkbox />
              <img className="mr-2" src='/assets/icons/shipping-insurance.svg' alt='' />
              <Typography variant="caption" color="gray" sx={{ mt: 1 }}>
                Comprehensive Insurance
              </Typography>
            </Grid>
            <Grid sx={{ display: 'flex' }} item md={3} xs={12}>
              <Checkbox />
              <Typography variant="caption" color="gray" sx={{ mt: 1 }}>
                None
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Typography variant="body1" component="h1" color='gray' paragraph>
        Extra Notification Contacts
      </Typography>
      <Card sx={{ maxWidth: '75rem', marginBottom: 2 }}>
        <CardContent sx={{ display: 'flex' }}>
          <Grid container spacing={2}>
            <Grid sx={{ display: 'flex' }} item md={2} xs={12}>
              <Checkbox />
              <Typography variant="caption" color="gray" sx={{ mt: 1 }}>
                Contact 1
              </Typography>
            </Grid>
            <Grid sx={{ display: 'flex' }} item md={3} xs={12}>
              <input style={{ height: '35px', border: '1px solid gray', marginLeft: '20px', marginRight: '20px' }} />
            </Grid>
            <Grid sx={{ display: 'flex' }} item md={3} xs={12}>
              <Typography variant="caption" color="gray" sx={{ mt: 1 }}>
                Add Another
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Typography variant="body1" component="h1" color='gray' paragraph>
        Delivery time
      </Typography>
      <Card sx={{ maxWidth: '75rem', mb: 2 }}>
        <CardContent>
          <Typography variant="caption" component="h1" color="gray" paragraph>
            Choose the delivery time for this package or leave it blank and we will deliver as soon as we can.
          </Typography>
          <TextField size='small' name="email" type="date" defaultValue={''} />
        </CardContent>
      </Card>
      <Typography variant="body1" component="h1" color='gray' paragraph>
        Delivery type
      </Typography>
      <Card sx={{ maxWidth: '75rem', marginTop: 1 }}>
        <Select fullWidth defaultValue='small'>
          <MenuItem value="small" sx={{ display: 'flex' }} selected>
            <ListItemIcon>
              <img className="mr-2" src='/assets/icons/deliveryType.svg' alt='' />
              <ListItemText>
                <div className='row' style={{ width: '100%' }}>
                  <div className='col-lg-6'>
                    <Typography variant="caption" color="#053582" style={{ padding: '-5px' }}>
                      Standard Delivery<br /><span className='menu-body' style={{ color: 'gray' }}>Delivered within 12 hours</span>
                    </Typography>
                  </div>
                  <div className='col-lg-4 menu-body'>
                    <Button sx={{ width: '200px', bgcolor: '#F2F7FC' }}><Typography variant="caption" color="#053582"> Estimated Distance:<br />9.0KM</Typography></Button>
                  </div>
                  <div className='col-lg-2  menu-body'>
                    <Button sx={{ bg: 'transparent' }}>
                      <Typography sx={{ mt: 1, width: '200px' }} variant="caption" color="#053582"> ₦2,500</Typography>
                    </Button>
                  </div>
                </div>
              </ListItemText>
            </ListItemIcon>
          </MenuItem>
        </Select>
      </Card>
      <Typography sx={{ mt: 2 }} variant="body1" component="h1" color="gray" paragraph>
        Payment method
      </Typography>
      <Card sx={{ maxWidth: '75rem', mb: 3 }}>
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
            <Grid sx={{ display: 'flex' }} item md={3} xs={12}>
              <Checkbox />
              <Typography variant="caption" color="gray" sx={{ mt: 1 }}>
                Draft Order
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Grid container spacing={2}>
        <Grid sx={{ display: 'flex' }} item md={6} xs={12}>
          <Checkbox />
          <Typography variant="caption" color="gray" sx={{ mt: 1, mr: 1 }}>
            Save my selections
          </Typography>
          <input style={{ height: '30px', border: '1px solid gray' }} />
        </Grid>
      </Grid>
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
            className='ml-3 mr-3'
            loading={isSubmitting}
            sx={{
              backgroundColor: "#053582",
              color: "#ffffff",
            }}
          >
            Create Quote
          </LoadingButton>
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
            Make Payment
          </LoadingButton>
        </Grid>
      </FormProvider>
    </section >
  );
}
