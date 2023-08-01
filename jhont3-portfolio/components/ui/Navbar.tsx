import NextLink from 'next/link';
import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography } from '@mui/material';
// import { SearchOutlined } from '@mui/icons-material';
import { useSideBarContext } from '@/context';
import CustomizedSwitches from '../products/ToogleButton';
import { FC } from 'react';

interface NavbarProps {
    onThemeChange: () => void;
  }

export const Navbar:FC<NavbarProps>  = ({ onThemeChange }) => {

    const { setIsSidebarOpen } = useSideBarContext(); 

  return (
    <AppBar>
        <Toolbar sx={{height: "10vh"}}>
            <NextLink href='/' passHref legacyBehavior>
                <Link display='flex' alignItems='center'>
                    <Typography variant='h6'>Jhont3 |</Typography>
                    <Typography sx={{ ml: 0.5 }}>Dev</Typography>
                </Link>  
            </NextLink>

            <Box flex={ 1 } />

            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <NextLink href='/portfolio' passHref legacyBehavior>
                    <Link>
                        <Button>Portfolio</Button>
                    </Link>
                </NextLink>
                <NextLink href='/about' passHref legacyBehavior>
                    <Link>
                        <Button>About</Button>
                    </Link>
                </NextLink>
                <NextLink href='/contact' passHref legacyBehavior>
                    <Link>
                        <Button>Contact</Button>
                    </Link>
                </NextLink>
            </Box>

            <Box flex={ 1 } />

            {/* <IconButton onClick={()=> setIsSidebarOpen(true) }>
                <SearchOutlined />
            </IconButton> */}

            <IconButton onClick={()=> onThemeChange()}>
                <CustomizedSwitches/>
            </IconButton>
            
            <Button onClick={()=> setIsSidebarOpen(true) }>
                Menú
            </Button>

        </Toolbar>
    </AppBar>
  )
}
