import * as React from 'react';
import PropTypes from 'prop-types';
import {NextIntlProvider} from 'next-intl';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import Head from 'next/head';
import {connect, Provider} from "react-redux";

import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import {StateStore} from '../redux/store';
import StateService from '../src/services/StateService';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const store = StateStore(StateService.getState());


StateService.subscribe(store.subscribe);

const InternalApp = (props) => {
    const {Component, pageProps} = props;
    return <>
        <Head>
            <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    </>;
};

const MyApp = (props) => {
    const { emotionCache = clientSideEmotionCache, pageProps} = props;
    return (
        <NextIntlProvider messages={pageProps.messages}>
            <CacheProvider value={emotionCache}>
                <Provider store={store}>
                    <InternalApp {...props}/>
                </Provider>
            </CacheProvider>
        </NextIntlProvider>
    );
}

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
