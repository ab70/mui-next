"use client"
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import NProgress from 'nprogress';
import { CacheProvider } from '@emotion/react';
import themeConfig from './configs/themeConfig';
import UserLayout from './layouts/UserLayout';
import ThemeComponent from './@core/theme/ThemeComponent';
import { SettingsConsumer, SettingsProvider } from './@core/context/settingsContext';
import { createEmotionCache } from './@core/utils/create-emotion-cache';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './styles/global.css';
import useCache from "@emotion/react"

const clientSideEmotionCache = createEmotionCache();


export default function RootLayout({ children }) {
  const router = useRouter()
  // const { emotionCache = clientSideEmotionCache } = useCache(); // Use `useCache` from `@emotion/react` for emotionCache

  // Pace Loader
  if (themeConfig.routingLoader) {
    router.events.on('routeChangeStart', () => {
      NProgress.start();
    });
    router.events.on('routeChangeError', () => {
      NProgress.done();
    });
    router.events.on('routeChangeComplete', () => {
      NProgress.done();
    });
  }
  return (
    <>
      <CacheProvider value={emotionCache}>
        <Head>
          {/* Your Head content */}
        </Head>
        <SettingsProvider>
          <SettingsConsumer>
            {({ settings }) => (
              <ThemeComponent settings={settings}>
                <UserLayout>{children}</UserLayout>
              </ThemeComponent>
            )}
          </SettingsConsumer>
        </SettingsProvider>
      </CacheProvider>
    </>

  );
}
