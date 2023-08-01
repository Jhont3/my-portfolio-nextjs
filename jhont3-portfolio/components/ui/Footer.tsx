import { Box, Grid, Link, Toolbar } from '@mui/material';
import { Instagram, LinkedIn, GitHub } from '@mui/icons-material';

export const Footer = () => {
  return (
    <Toolbar sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '50px',
      }}>
        <Grid container justifyContent="center">
            <Grid item>
                <Box sx={{ display: 'flex', gap: 2, mr: 3.5 }}>
                <Link href="https://www.instagram.com/jhony4314/" target="_blank" rel="noopener noreferrer">
                    <Instagram />
                </Link>
                <Link href="https://www.linkedin.com/in/jhonatan-escobar-uribe/" target="_blank" rel="noopener noreferrer">
                    <LinkedIn />
                </Link>
                <Link href="https://github.com/Jhont3" target="_blank" rel="noopener noreferrer">
                    <GitHub />
                </Link>
                </Box>
            </Grid>
        </Grid>
  </Toolbar>
  
  )
}
