import { Box, Divider, Drawer, IconButton, Input, InputAdornment, List, ListItemButton, ListItem, ListItemIcon, ListItemText, Link } from "@mui/material"
import { LoginOutlined,  SearchOutlined } from "@mui/icons-material"
import EmailIcon from '@mui/icons-material/Email';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import PersonIcon from '@mui/icons-material/Person';
import NextLink from 'next/link';

import { useSideBarContext } from "@/context";

export const SideMenu = () => {

    const { isSidebarOpen, setIsSidebarOpen } = useSideBarContext() 

  return (

    <Drawer
        open={ isSidebarOpen }
        anchor='right'
        sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
        onClose={() => setIsSidebarOpen(false)}
    >
        <Box sx={{ width: 250, paddingTop: 5 }}>
            
            <List>

                <ListItem>
                    <Input
                        type='text'
                        placeholder="In process.."
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                >
                                 <SearchOutlined />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </ListItem>

                <NextLink href='/about' passHref legacyBehavior>
                    <Link>
                        <ListItemButton >
                            <ListItemIcon>
                                <PersonIcon/>
                            </ListItemIcon>
                            <ListItemText secondary={'About me'} />
                        </ListItemButton>
                    </Link>
                </NextLink>

                <NextLink href='/portfolio' passHref legacyBehavior>
                    <Link>
                        <ListItemButton >
                            <ListItemIcon>
                                <AccountTreeIcon/>
                            </ListItemIcon>
                            <ListItemText secondary={'Portfolio'} />
                        </ListItemButton>
                    </Link>
                </NextLink>

                <NextLink href='/contact' passHref legacyBehavior>
                    <Link>
                        <ListItemButton >
                            <ListItemIcon>
                                <EmailIcon/>
                            </ListItemIcon>
                            <ListItemText secondary={'Contact me'} />
                        </ListItemButton>
                    </Link>
                </NextLink>


                <ListItemButton onClick={()=> setIsSidebarOpen(false) }>
                    <ListItemIcon>
                        <LoginOutlined/>
                    </ListItemIcon>
                    <ListItemText secondary={'Exit'} />
                </ListItemButton>

                <Divider />

            </List>
        </Box>
    </Drawer>
  )
}
