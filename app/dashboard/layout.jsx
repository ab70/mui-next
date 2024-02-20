"use client"
import NProgress from 'nprogress';
import { CacheProvider } from '@emotion/react';
// import themeConfig from './configs/themeConfig';
import UserLayout from '../layouts/UserLayout';
import ThemeComponent from '../@core/theme/ThemeComponent';
import { SettingsConsumer, SettingsProvider } from '../@core/context/settingsContext';
import { createEmotionCache } from '../@core/utils/create-emotion-cache';
import 'react-perfect-scrollbar/dist/css/styles.css';
import '../styles/global.css';
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"
import { useEffect, useState } from 'react';

export default function DashboardLayout({
    children, // will be a page or nested layout
}) {
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        setLoaded(true)
    }, [])
    return (
        <>
            {
                loaded && (
                    <AppRouterCacheProvider>
                        <SettingsProvider>
                            <SettingsConsumer>
                                {({ settings }) => (
                                    <ThemeComponent settings={settings}>
                                        <UserLayout>{children}</UserLayout>
                                    </ThemeComponent>
                                )}
                            </SettingsConsumer>
                        </SettingsProvider>
                    </AppRouterCacheProvider>
                )
            }
        </>


    )
}
