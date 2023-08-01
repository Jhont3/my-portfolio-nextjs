import type { NextPage } from 'next';
import { Box, Button,  InputAdornment, Grid, TextField, Typography, Divider, FormControl, FormHelperText, Alert, Snackbar } from "@mui/material"
import { MainLayout } from "../../components/layouts"
// import nodemailer from 'nodemailer';

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { useState } from 'react';
import { sendContactForm } from '@/lib/sendContactForm ';

const initValues = { name: '', email: '', message: '',}
const initialState = { values: initValues, error: "" }

const Home: NextPage = () => {

  const [formState, setFormState] = useState(initialState)
  const { values, error  } = formState;

  const handleChange = ({target}: any)  => setFormState( (prev) => ({
    ...prev,
    values: {
      ...prev.values,
      [target.name]: target.value
    }
  }))

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const onSubmit =  async () => {

    handleClick();

    setFormState((prev) => ({
      ...prev
    }));
    try {
      await sendContactForm(values);
      setFormState(initialState);
    } catch (error: any) {
      setFormState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  return (
    <MainLayout title="Contact me" pageDescription="Formulary to contact Jhont3 developer">

        <Grid container spacing={ 2 } sx={{ mt: 2 }}>

        <Grid item xs={12} >
              <Divider component="div" role="presentation">
                <Typography variant="h1" component='h1'>My data</Typography>
              </Divider>
          </Grid>

          <Grid item xs={12} md={4}>
            <TextField
              id=""
              label="country"
              fullWidth
              value='Medellín, Colombia'
              disabled
              variant="standard"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PlaceIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              id=""
              label="email"
              fullWidth
              variant="standard"
              value='jhonatan.escobar.u@gmail.com'
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AlternateEmailIcon />
                  </InputAdornment>
                ),
              }}
              disabled
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <TextField
              id=""
              label="phone"
              fullWidth
              value='+57-3045235183'
              disabled
              variant="standard"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneIphoneIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          </Grid>
              
          <Grid container spacing={ 2 } sx={{ mt: 2 }}>

          <Grid item xs={12} >
              <Divider component="div" role="presentation">
                <Typography variant="h1" component='h1'>Say hi!</Typography>
              </Divider>
          </Grid>
            
          <Grid item xs={12} sm={ 6 }>
              <TextField type='text' label='Name' variant="outlined" value={values.name} name='name' onChange={handleChange} fullWidth required />
              {/* <FormHelperText error id="component-error-text">Incorrect entry</FormHelperText> */}
          </Grid>

          <Grid item xs={12} sm={ 6 }>
              <TextField type='email' label='Email' variant="outlined" value={values.email} name='email' onChange={handleChange} fullWidth required />

          </Grid>

          <Grid item xs={12} sm={ 12 }>
              <TextField type='text' label='Your message' variant="outlined" value={values.message} onChange={handleChange} name='message' required fullWidth multiline rows={4} sx={{ width: '100%' }} autoComplete="off" />

          </Grid>
 
          </Grid>

        <Box sx={{ mt: 5 }} display='flex' justifyContent='center'>
            <Button color="secondary" className="circular-btn" size="large" onClick={onSubmit} disabled={ !values.name || !values.email || !values.message }>
                Send message
            </Button>
        </Box>

        { open && !error ?  <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Message sent!
          </Alert>
         </Snackbar>  : undefined}   
         { error && (  <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            {error}
          </Alert>
         </Snackbar> )}
    </MainLayout>
  )
}

export default Home
