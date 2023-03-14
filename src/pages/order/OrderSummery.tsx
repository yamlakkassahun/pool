import { LoadingButton } from "@mui/lab";
import { Button } from "@mui/material";
import { Input, InputAdornment } from "@mui/material";
import { Container, Typography, Card, CardContent, Grid, Checkbox, Alert } from "@mui/material";
import { Search } from "react-feather";
import { FormProvider } from "react-hook-form";
import { useNavigate } from "react-router";

export default function OrderSummery() {
    const navigate = useNavigate();
    return (
        <section>
            <Typography sx={{ display: 'flex' }} variant="h4" component="h1" paragraph>
                <img src="/assets/icons/back.svg" className="mr-2" alt="back" /> Order Summary<img src="/assets/icons/cargo.svg" className="ml-2" alt="back" />
            </Typography>
            <Typography variant="caption" component="h1" paragraph>
                Order No :<br />
                <Typography variant="subtitle2" component="h1" color="gray" paragraph>
                    #00112233
                </Typography>
            </Typography>
            <Grid container spacing={2}>
                <Grid item md={6} xs={12}>
                    <Card sx={{ maxWidth: '75rem', mb: 2 }}>
                        <CardContent>
                            <Typography variant="caption" color="text.secondary">
                                <Grid container spacing={2}>
                                    <Grid sx={{ display: 'flex' }} item md={6} xs={12}>
                                        <Typography variant="body2" className="mr-2">
                                            Pick Up :
                                        </Typography>
                                        <img className="mr-2" src='/assets/icons/user.svg' style={{ height: '40px' }} alt='' />
                                        <Typography variant="subtitle2" color="black">
                                            Olaniyi Ojo David<br />
                                            <span style={{ color: 'gray', fontSize: 'smaller' }}>091612891010</span>
                                        </Typography>
                                    </Grid>
                                    <Grid item md={3} xs={6}>
                                        <Typography sx={{ mt: 2 }} variant="caption" >10/10/2021   01:37PM</Typography>
                                    </Grid>
                                    <Grid item md={1} xs={6}>
                                        <Typography sx={{ mt: 2 }} variant="caption" color='black' ><b>₦2,500</b></Typography>
                                    </Grid>
                                </Grid>
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                <Grid container spacing={2}>
                                    <Grid item md={12} xs={12}></Grid>
                                    <Grid item sx={{ display: 'flex' }} md={8} xs={12}>
                                        <img className="mr-2" src="/assets/icons/pin.svg" alt="location" />
                                        <Typography variant="body2" color='black'>
                                            14, Kumolu Street. Ikeja, Lagos
                                        </Typography>
                                    </Grid>
                                    <Grid item md={3} xs={6}>
                                        <Typography variant="caption" >Pickup Type : <span style={{ color: 'black' }}>BIKE</span></Typography>
                                    </Grid>
                                </Grid>
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: '75rem', mb: 2 }}>
                        <CardContent>
                            <Typography variant="caption" sx={{ display: 'flex' }}>Items :
                                <Typography sx={{ ml: 2 }} variant="body2" color='black'>
                                    Books
                                </Typography>
                            </Typography>
                            <Typography variant="caption" sx={{ display: 'flex' }}>Notes :
                                <Typography sx={{ ml: 2 }} variant="body2" color='black'>
                                    The books are about 36 in numbers
                                </Typography>
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: '75rem', mb: 2 }}>
                        <img src="/assets/icons/map.svg" alt="" />
                    </Card>
                    <Card sx={{ maxWidth: '75rem', mb: 2 }}>
                        <CardContent>
                            <Typography variant="h6" color='black'>
                                Delivery Estimate
                            </Typography>
                            <hr />
                            <Typography variant="body2" sx={{ display: 'flex' }}>Basic Fair/ Km :
                                <Typography sx={{ ml: 'auto' }} variant="caption" color='gray'>
                                    N420.00
                                </Typography>
                            </Typography>
                            <Typography variant="body2" sx={{ display: 'flex' }}>Est. Distance to pick-up :
                                <Typography sx={{ ml: 'auto' }} variant="caption" color='gray'>
                                    4.2km
                                </Typography>
                            </Typography>
                            <Typography variant="body2" sx={{ display: 'flex' }}>Est. Distance to delivery :
                                <Typography sx={{ ml: 'auto' }} variant="caption" color='gray'>
                                    4.2km
                                </Typography>
                            </Typography>
                            <Typography variant="body2" sx={{ display: 'flex' }}>Est. Fair Total:
                                <Typography sx={{ ml: 'auto' }} variant="caption" color='gray'>
                                    14,320.00
                                </Typography>
                            </Typography>
                            <Typography variant="body2" sx={{ display: 'flex' }}>Tax :
                                <Typography sx={{ ml: 'auto' }} variant="caption" color='gray'>
                                    250
                                </Typography>
                            </Typography>
                            <hr />
                            <Typography variant="body2" sx={{ display: 'flex' }}>TOTAL :
                                <Typography sx={{ ml: 'auto' }} variant="caption" color='gray'>
                                    14,150.00
                                </Typography>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={6} xs={12}>
                    <Card sx={{ maxWidth: '75rem', mb: 2 }}>
                        <CardContent>
                            <Typography variant="caption" color="text.secondary">
                                <Grid container spacing={2}>
                                    <Grid sx={{ display: 'flex' }} item md={8} xs={12}>
                                        <Typography variant="body2" className="mr-2">
                                            Receiving :
                                        </Typography>
                                        <img className="mr-2" src='/assets/icons/user.svg' style={{ height: '40px' }} alt='' />
                                        <Typography variant="subtitle2" color="black">
                                            Olaniyi Ojo David<br />
                                            <span style={{ color: 'gray', fontSize: 'smaller' }}>091612891010</span>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Typography>
                        </CardContent>
                    </Card>
                    <Grid container spacing={2}>
                        <Grid item sx={{ display: 'flex', ml: 4 }} md={8} xs={12}>
                            <img className="mr-2" src="/assets/icons/pin.svg" alt="location" />
                            <Typography variant="body2" color='black'>
                                14, Kumolu Street. Ikeja, Lagos
                            </Typography>
                        </Grid>
                    </Grid>
                    <Card sx={{ maxWidth: '75rem', mb: 2, mt: 2 }}>
                        <img src="/assets/icons/rmap.svg" alt="" />
                    </Card>
                    <Card sx={{ maxWidth: '75rem', mb: 2 }}>
                        <CardContent>
                            <Typography sx={{ display: 'flex' }} variant="h6" color='black'>
                                Rider:
                                <Typography sx={{ ml: 'auto' }} variant="caption" color='gray'>
                                    <Input
                                        className="me-5"
                                        autoFocus
                                        disableUnderline
                                        placeholder="search rider or location here"
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <Search size={20} />
                                            </InputAdornment>
                                        }
                                        sx={{ mr: 1, fontWeight: 'fontWeightBold' }}
                                    />
                                </Typography>
                            </Typography>
                            <hr />
                            <Grid container spacing={2}>
                                <Grid sx={{ display: 'flex' }} item md={8} xs={12}>
                                    <img className="me-2" src='/assets/icons/Sharts/Charts 1.svg' style={{ height: '40px' }} alt='' />
                                    <Typography variant="subtitle2" color="black">
                                        Olaniyi Ojo David<br />
                                        <Typography variant="caption" sx={{ display: 'flex' }} color="gray">
                                            <img src="/assets/icons/locationBlack.svg" alt="" className="me-1" />  091612891010
                                        </Typography>
                                    </Typography>
                                </Grid>
                                <Grid item md={2} xs={12}>
                                    <Button variant="outlined" size="small" sx={{ color: 'gray', border: 'solid 1px gray' }}>Message</Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </section >
    );
}