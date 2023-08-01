import type { NextPage } from 'next';
import { Box, Button,  InputAdornment, Grid, TextField, Typography, Divider } from "@mui/material"
import { MainLayout } from "../../components/layouts"

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

const Home: NextPage = () => {
  return (
    <MainLayout title="Contact me" pageDescription="Formulary to contact Jhont3 developer">

        <Grid container spacing={ 2 } sx={{ mt: 2 }}>

        <Grid item xs={12} >
              <Divider component="div" role="presentation">
                {/* any elements nested inside the role="presentation" preserve their semantics. */}
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
              <TextField label='Name' variant="outlined" value='' fullWidth />
          </Grid>

          <Grid item xs={12} sm={ 6 }>
              <TextField label='Email' variant="outlined" value='' fullWidth />
          </Grid>

          <Grid item xs={12} sm={ 12 }>
              <TextField label='Description' variant="outlined" value='' fullWidth multiline rows={4} sx={{ width: '100%' }} autoComplete="off" />
          </Grid>
          </Grid>

        <Box sx={{ mt: 5 }} display='flex' justifyContent='center'>
            <Button color="secondary" className="circular-btn" size="large">
                Send message
            </Button>
        </Box>

    </MainLayout>
  )
}

export default Home
