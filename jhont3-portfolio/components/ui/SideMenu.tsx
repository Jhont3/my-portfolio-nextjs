import { Box, Divider, Drawer, IconButton, Input, InputAdornment, List, ListItemButton, ListItem, ListItemIcon, ListItemText } from "@mui/material"
import { LoginOutlined,  SearchOutlined } from "@mui/icons-material"
import EmailIcon from '@mui/icons-material/Email';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import PersonIcon from '@mui/icons-material/Person';

import { useSideBarContext } from "@/context";


export const SideMenu = () => {

    const { isSidebarOpen, setIsSidebarOpen } = useSideBarContext() 

  return (

    <Drawer
        open={ isSidebarOpen }
        anchor='right'
        sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
    >
        <Box sx={{ width: 250, paddingTop: 5 }}>
            
            <List>

                <ListItem>
                    <Input
                        type='text'
                        placeholder="Search..."
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
                                        
                <ListItemButton >
                    <ListItemIcon>
                        <PersonIcon/>
                    </ListItemIcon>
                    <ListItemText primary={'About me'} />
                </ListItemButton>

                <ListItemButton >
                    <ListItemIcon>
                        <AccountTreeIcon/>
                    </ListItemIcon>
                    <ListItemText primary={'Portfolio'} />
                </ListItemButton>

                <ListItemButton >
                    <ListItemIcon>
                        <EmailIcon/>
                    </ListItemIcon>
                    <ListItemText primary={'Contact me'} />
                </ListItemButton>

                <ListItemButton onClick={()=> setIsSidebarOpen(false) }>
                    <ListItemIcon>
                        <LoginOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Exit'} />
                </ListItemButton>

                <Divider />

            </List>
        </Box>
    </Drawer>
  )
}