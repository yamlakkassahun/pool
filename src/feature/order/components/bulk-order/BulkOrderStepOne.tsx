import { Person } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Alert, Box, Button, Checkbox, Grid, InputAdornment } from '@mui/material';
import { Card, CardContent, Typography } from '@mui/material';
import { Container } from '@mui/material';
import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import * as Yup from 'yup';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { FormProvider } from '../../../../components';
import { RHFUploadSingleFile } from '../../../../components/form-hook';

const steps = [
    { title: 'Upload template', des: 'Upload file or download sampleYou may upload up to 1000 orders per file' },
    { title: 'Review orders', des: 'Correct details if needed Correct any order details by clicking Error to view the list. Hover over orders for tips on correcting and make the changes. When completed, orders will list under Ready' },
    { title: 'Checkout', des: 'Review and checkout When all orders are ready, click on Checkout to view the payment details and summary.' },
    { title: 'Order complete', des: 'Pay for the orders Link your credit card and place your order. Placed orders can be found in Complete or Order History.' },
];

type Props = {
    formData: any;
    setFormData: any;
    nextStep: any;
    step: Number;
};


type FormValuesProps = {
    afterSubmit?: string;
    CoverLater: string;
    cover: any;
};




export default function BulkOrderStepOne({ formData, setFormData, nextStep, step }: Props) {
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
        setValue,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = methods;

    const handleDrop = useCallback(
        (acceptedFiles: any) => {
            const file = acceptedFiles[0];
            if (file) {
                setValue(
                    'cover',
                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                    })
                );
            }
        },
        [setValue]
    );

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

            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}
                <RHFUploadSingleFile
                    name="cover"
                    maxSize={3145728}
                    onDrop={handleDrop}
                />

                <Grid container justifyContent="center">
                    <LoadingButton
                        size="small"
                        type="submit"
                        variant="contained"
                        loading={isSubmitting}
                        sx={{
                            backgroundColor: "#053582",
                            color: "#ffffff",
                            mt: 5,
                        }}
                    >
                        Continue
                    </LoadingButton>
                </Grid>
            </FormProvider>
        </section>
    );
}
