import type { NextPage } from 'next';
import { Typography } from '@mui/material';

import { MainLayout } from '../../components/layouts';
import { initialData } from '../../database/products';
import { ProductList } from '../../components/products';



const Home: NextPage = () => {
  return (
    <MainLayout title={'Jhont3 - Portfolio'} pageDescription={'Found the best projects from Jhonatan Escobar software developer'}>
    
        <Typography variant='h1' component='h1'>PORTFOLIO</Typography>
        <Typography variant='h2' sx={{ mb: 1 }}>My projects</Typography>

        <ProductList 
          products={ initialData.products as any }
        />

    </MainLayout>
  )
}

export default Home
