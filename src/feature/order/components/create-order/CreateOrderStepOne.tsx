import { Person } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Alert, Box, Button, Checkbox, Grid, InputAdornment, ListItemIcon, ListItemText, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { Card, CardContent, Typography } from '@mui/material';
import { Container } from '@mui/material';
import { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import * as Yup from 'yup';
import { FormProvider, Loading, RHFSelect, RHFTextField } from '../../../../components';
import { useGetAllDeliveryPlansQuery } from '../../../shared';
import { useGetUsersQuery } from '../../../users';


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

export default function CreateOrderStepOne({ formData, setFormData, nextStep, step }: Props) {
  let plans: any = [];
  let users: any = [];
  const { data, error, isLoading, isFetching, isSuccess } = useGetAllDeliveryPlansQuery();
  const { data: userData, error: userError, isLoading: userLoading, isFetching: userFetching, isSuccess: userSuccess } = useGetUsersQuery();
  const [deliveryType, setDeliveryType] = useState('small');
  const [user, setUser] = useState('');

  const handleDeliveryTypeChange = (event: SelectChangeEvent) => {
    setDeliveryType(event.target.value as string);
  };


  const handleUserChange = (event: SelectChangeEvent) => {
    setUser(event.target.value as string);
  };


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

  if (isLoading && isFetching && userLoading && userFetching) return <Loading />;

  if (isSuccess && userSuccess) {
    plans = data.data.data;
    users = userData.data.data;
  }

  return (
    <section>
      <Typography variant="h6" component="h1" color='gray' paragraph>
        Create New Order
      </Typography>
      <Typography variant="body1" component="h1" color='gray' paragraph>
        Delivery type
      </Typography>

      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}
        <Card sx={{ maxWidth: '75rem', marginTop: 1, mb: 2 }}>
          <Select fullWidth defaultValue='small' value={formData.deliveryPlan} name="deliveryType" placeholder='Select Delivery Type '
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
        <Typography variant="body1" component="h1" color='gray' paragraph>
          Sender Information
        </Typography>
        <Card sx={{ maxWidth: '75rem' }}>
          <CardContent>
            <Typography variant="subtitle2" component="h1" color="gray" paragraph>
              Sender<br />
            </Typography>
            <RHFSelect fullWidth className='' name="sender" sx={{ color: 'gray' }}>
              {users.length > 0 && users.map((user: any, index: number) => (
                <option key={index} style={{ width: '100%', color: 'gray' }} value={''}>{ user.username }</option>
              ))}
            </RHFSelect>
          </CardContent>
        </Card>
        <Typography variant="body1" component="h1" color='gray' paragraph sx={{ mt: 2 }}>
          Receiver Information
        </Typography>

        <Card sx={{ maxWidth: '75rem', marginBottom: '8px' }}>
          <CardContent>
            <div className='justify-content-center'>
              <Typography sx={{ color: 'gray' }} variant="caption" component="h1" paragraph>
                Select From Address Book
              </Typography>
              <Grid container spacing={2}>
                <Grid item md={6} xs={12}>
                  <RHFSelect className='' name="educationLevel" sx={{ color: 'gray' }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Person />
                        </InputAdornment>
                      ),
                    }}
                  >
                    <option style={{ width: '100%', color: 'gray' }} value={''}>Search or Select Receiver</option>
                    <option style={{ width: '100%', color: 'gray' }} value={'one'}>Search or Select Receiver one</option>
                    <option style={{ width: '100%', color: 'gray' }} value={'two'}>Search or Select Receiver two</option>
                  </RHFSelect>
                </Grid>
                <Grid item md={3} xs={12}>
                  <Box color={'gray'}>
                    <Checkbox />New Customer
                  </Box>
                </Grid>
                <Grid item md={3} xs={12}>
                  <Box color={'gray'}>
                    <Checkbox />Bulk Order
                  </Box>
                </Grid>
                <Grid item md={6} xs={12}>
                  <RHFTextField
                    InputLabelProps={{
                      shrink: true,
                    }}
                    name="email" label="First Name" placeholder="First Name" defaultValue={''} />
                </Grid>
                <Grid item md={6} xs={12}>
                  <RHFTextField
                    InputLabelProps={{
                      shrink: true,
                    }}
                    name="email" label="Last Name" placeholder="Last Name" defaultValue={''} />
                </Grid>
                <Grid item md={6} xs={12}>
                  <RHFTextField
                    InputLabelProps={{
                      shrink: true,
                    }}
                    label="Phone Number" name="email" placeholder="Phone Number" defaultValue={''} />
                </Grid>
                <Grid item md={12} xs={12}>
                  <RHFTextField
                    InputLabelProps={{
                      shrink: true,
                    }}
                    label="Address" name="email" placeholder="Address" defaultValue={''} />
                </Grid>
                <Grid item md={12} xs={12}>
                  <RHFTextField
                    InputLabelProps={{
                      shrink: true,
                    }}
                    multiline rows={3} label="Flat, Room and other details" name="email" placeholder="Flat, Room and other details" defaultValue={''} />
                </Grid>
              </Grid>
            </div>
          </CardContent>
        </Card >
        <Grid container justifyContent="center">
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
