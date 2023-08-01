import { FC, ReactNode, useState } from 'react';
import Head from 'next/head';

import { Footer, Navbar, SideMenu } from '../ui';
import { darkTheme, lightTheme } from '@/themes';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { useSideBarContext } from '@/context';


interface Props {
    title: string;
    pageDescription: string;
    imageFullUrl?: string;
    children: ReactNode;
}

export const MainLayout:FC<Props> = ({ children, title, pageDescription, imageFullUrl }) => {
    
    const { toogleLightTheme, setToogleLightTheme } = useSideBarContext(); 

    const [theme, setTheme] = useState(lightTheme);

    const handleThemeChange = () => {
        setTheme(theme === lightTheme ? darkTheme : lightTheme);
        setToogleLightTheme(!toogleLightTheme);
    };

  return (
    <>
        <Head>

            <title>{ title }</title>

            <meta name="description" content={ pageDescription } />
            
            <meta name="og:title" content={ title } />
            <meta name="og:description" content={ pageDescription } />

            {
                imageFullUrl && (
                    <meta name="og:image" content={ imageFullUrl } />
                )
            }

        </Head> 
        <ThemeProvider theme={toogleLightTheme ? darkTheme : lightTheme}>
        <CssBaseline />

        <nav >
            <Navbar onThemeChange={handleThemeChange}/>
        </nav>

        <SideMenu />
            
        <main style={{
            margin: '80px auto',
            maxWidth: '1440px',
            padding: '0px 30px'
            
        }}>
             { children }
        </main>

        <footer>
            <Footer/>
        </footer>
        </ThemeProvider>

    </>
  )
}


