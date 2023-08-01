import { Box, Button, Grid, Typography } from '@mui/material';
import { MainLayout } from '../../components/layouts';
import { ProductSlideshow } from '../../components/products';
import { initialData } from '../../database/products';

import { useRouter } from 'next/router';
import React from 'react'
import Custom404 from '../404';

export default function Slug () {

    const router = useRouter();
    const slug = router.query.slug;

    const product = initialData.products.find((item) => item.slug === slug);

    if (!product) 
    {
        return <Custom404 />;
    }

  return (
    <MainLayout title={ product.title } pageDescription={ product.description }>
    
    <Grid container spacing={3}>

      <Grid item xs={12} sm={ 7 }>
        <ProductSlideshow 
          images={ product.images }
        />
      </Grid> 

      <Grid item xs={ 12 } sm={ 5 }>
        <Box display='flex' flexDirection='column'>

          <Typography variant='h1' component='h1'>{ product.title }</Typography>
          <Typography variant='subtitle1' component='h2'>{ `${product.type}` }</Typography>



          <Box sx={{ mt:3 }}>
            <Typography variant='subtitle2'>Description</Typography>
            <Typography variant='body2'>{ product.description }</Typography>
          </Box> 

          <Button color="secondary" className='circular-btn' sx={{ mt:3 }}>
              See demo
          </Button>
        </Box>
        
      </Grid>

    </Grid>

  </MainLayout>
 );
}
