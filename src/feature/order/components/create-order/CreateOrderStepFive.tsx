import { Download, Person, Print, Share } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Alert, Box, Button, Checkbox, Grid, InputAdornment, TableBody, TableHead, TextField } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Card, CardContent, Typography } from '@mui/material';
import { Container } from '@mui/material';
import { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import * as Yup from 'yup';
import { TableContainer } from '@mui/material';
import { Table } from '@mui/material';
import { TableRow } from '@mui/material';
import { TableCell } from '@mui/material';
import { Paper } from '@mui/material';
import Barcode from 'react-barcode';
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

function createData(
    name: string,
    calories: string,
    fat: string,
    carbs: string,
    protein: string,
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('01', 'Light Package', '25 July, 2021', '01', 'N2,500',),
];


export default function CreateOrderStepFive({ formData, setFormData, nextStep, prevStep, step }: Props) {
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
            // nextStep();

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
                Order Conformation
            </Typography>

            <Typography variant="subtitle1" component="h1" paragraph>
                Delivery request was successful
            </Typography>
            <Typography variant="caption" component="h1" paragraph>
                Thank you!Your delivery request was successful.You can check status of this request anytime using the following tracking reference: 0289347
            </Typography>

            <Card sx={{ maxWidth: '75rem', marginBottom: '8px' }}>
                <CardContent>
                    <Typography variant="subtitle1" component="h1" paragraph>
                        Invoice #WAODD103Y452<br />
                        <Barcode value="71234 03782143 3482" width={1} />
                    </Typography>
                    <Typography variant="caption" component="h1" color="gray" paragraph>
                        <Grid sx={{ justifyContent: 'space-between' }} container spacing={2}>
                            <Grid item md={3}>Delivery of a Parcel</Grid>
                            <Grid item md={2}>Date: 25th July, 2021</Grid>
                        </Grid>
                    </Typography>
                    <hr />
                    <Typography variant="caption" component="h1" paragraph>
                        <Grid container spacing={2}>
                            <Grid item md={3}>
                                <Typography variant="subtitle2" component="h1" paragraph>From:
                                    <Typography variant="caption" sx={{ color: 'gray', mt: 1, mb: 1 }} component="h1" paragraph>Alim Borne
                                        <span style={{ display: 'flex', marginTop: '5px', marginBottom: '5px' }}>123213</span>
                                        <span style={{ display: 'flex', marginTop: '5px', marginBottom: '5px' }}>Phone: 08080808080</span>
                                        Email: alimborneborne@gmail.com
                                    </Typography>
                                </Typography>
                            </Grid>
                            <Grid item md={3}>
                                <Typography variant="subtitle2" component="h1" paragraph>To:
                                    <Typography variant="caption" sx={{ color: 'gray', mt: 1, mb: 1 }} component="h1" paragraph>Alim Borne
                                        <span style={{ display: 'flex', marginTop: '5px', marginBottom: '5px' }}>123213</span>
                                        <span style={{ display: 'flex', marginTop: '5px', marginBottom: '5px' }}>Phone: 08080808080</span>
                                        Email: alimborneborne@gmail.com
                                    </Typography>
                                </Typography>
                            </Grid>
                            <Grid item md={6}>
                                <Typography variant="subtitle2" component="h1" paragraph>Order Id : #546764911
                                    <Typography variant="caption" sx={{ color: 'gray', mt: 1, mb: 1 }} component="h1" paragraph>
                                        <span style={{ display: 'flex', marginTop: '5px', marginBottom: '5px' }}>Payment Status:<Button className='ml-3' size='small' variant="outlined" sx={{ mt: '-5px', color: 'lightgreen', border: 'solid 1px lightgreen' }}>Paid</Button></span>
                                        <span style={{ display: 'flex', marginTop: '5px', marginBottom: '5px' }}>Sender At Branch:  Branch - 1</span>
                                        Received At Branch:  Branch - 1
                                    </Typography>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Typography>
                    <div className="table-responsive">
                        <table className="table table-striped table-hover table-md">
                            <tr>
                                <th data-width="40">#</th>
                                <th>Courier Type</th>
                                <th className="text-center">Sending Date</th>
                                <th className="text-center">Quantity</th>
                                <th className="text-right">Subtotal</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Light Package</td>
                                <td className="text-center">25 July, 2021</td>
                                <td className="text-center">1</td>
                                <td className="text-right">N2,500</td>
                            </tr>
                            <tr>
                                <td>Subtotal:</td>
                                <td></td>
                                <td className="text-center"></td>
                                <td className="text-center"></td>
                                <td className="text-right">N2,500</td>
                            </tr>
                            <tr>
                                <td>Delivery Charge:</td>
                                <td></td>
                                <td className="text-center"></td>
                                <td className="text-center"></td>
                                <td className="text-right">N2,500</td>
                            </tr>
                        </table>
                    </div>
                    <div className="text-md-right">
                        <button className="btn btn-icon icon-left"><i className="fas fa-download" style={{ color: '#053582' }}></i></button>
                        <button className="btn btn-icon icon-left" style={{ color: '#053582' }}><Share /> Share</button>
                        <button className="btn btn-primary btn-icon icon-left" style={{ backgroundColor: '#053582', color: 'white' }}><i className="fas fa-print"></i> Print</button>
                    </div>
                </CardContent>
            </Card >
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
                        }}
                    >
                        Make Payment
                    </LoadingButton>
                </Grid>
            </FormProvider>
        </section >
    );
}