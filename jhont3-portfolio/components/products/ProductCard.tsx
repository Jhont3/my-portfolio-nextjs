import { FC } from 'react';
import NextLink from 'next/link';
import { Grid, Card, CardActionArea, CardMedia, Box, Typography, Link } from '@mui/material'

import { IProduct } from '../../interfaces/'

interface Props {
    product: IProduct;
}

export const ProductCard: FC<Props> = ({ product }) => {

    return (
      <Grid item 
            xs={ 12 } 
            sm={ 6 }
            md={ 3 }
            className='product-image'
      >
          <Card>
              <NextLink href={`/product/${product.slug}`} passHref prefetch={ false } legacyBehavior>
                <Link>
                    <CardActionArea>
                        <CardMedia 
                            component='img'
                            className='fadeIn'
                            image={`products/${ product.images[0] }`}
                            alt={ product.title }
                        />

                    </CardActionArea>
                </Link>
              </NextLink>
              
          </Card>

          <Box sx={{ mt: 2 }} className='fadeIn'>
              <Typography fontWeight={700}>{ product.title }</Typography>
              <Typography fontWeight={500}>{ `${product.type}` }</Typography>
          </Box>
      </Grid>
    )
}
