import type { NextPage } from 'next';
import { Box, Grid, Typography, Button, Link } from '@mui/material';

import { MainLayout } from '../components/layouts';
import Image from 'next/image'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NextLink from 'next/link';


const Home: NextPage = () => {
  return (
    <MainLayout title={'Jhont3 - Portfolio'} pageDescription={'Found the projects made by Jhonatan Escobar, Software Developer'}>
        <Grid 
          container
          spacing={6}   
          height='75vh'
        >
            <Grid item 
              xs={ 12 } 
              sm={ 6 }  
              display="flex"
              justifyContent='center' 
              alignItems='center'  
              sx={{ flexDirection: { xs: 'column' } }}
              className='typewriter'
            >
               <Typography variant='h1' component='h1' fontWeight={500} textAlign="center">Hi there,</Typography>        
               <Typography variant='h1' component='h1' fontWeight={500} textAlign="center">I am </Typography>
               <Typography variant='h1' component='h1' fontWeight={500} textAlign="center">Jhonatan Escobar</Typography>
               <span ></span>
               <Typography variant='h2' component='h2' fontWeight={300}><br />FullStack Developer</Typography>
               <Box sx={{ mt: 5 }} display='flex' justifyContent='center'>
 
                        <NextLink href='/contact' passHref legacyBehavior>
                      <Link>
                      <Button color="secondary" className="circular-btn" size="large">
                        Get in touch <NavigateNextIcon/></Button>
                    </Link>
                </NextLink>
                 
               </Box>

            </Grid>   

            <Grid item 
              xs={ 12 } 
              sm={ 6 }    
              display="flex"
              justifyContent='center' 
              alignItems='center'
            >
               <Image 
                  src="/images/mainPic.jpg" 
                  alt="Image" 
                  width={360}
                  height={530}  
                  style={{ borderRadius: '2%' }}
               />
            </Grid> 
        </Grid>

    </MainLayout>
  )
}

export default Home
