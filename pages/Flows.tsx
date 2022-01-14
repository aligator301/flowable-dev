import {useState, useEffect} from 'react';
import {connect} from "react-redux";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import {useTranslations} from "next-intl";

import Footer from '../fragments/authenticated/Footer';
import Dashboard from '../templates/Dashboard';

import { i18nMessageBuilder } from "../i18n/i18nService";


const SummaryPage = (props: any) => {
    const translate = useTranslations('Flows');

    return <Dashboard>
        <Box
            component="main"
            sx={{
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[900],
                flexGrow: 1,
                height: '100vh',
                overflow: 'auto',
            }}
        >
            <Toolbar/>

            <Grid container spacing={3}>
                <Grid item xs={12} md={12} lg={12} sx={{
                    margin: '10px',
                }}>
                    <Paper
                        sx={{
                            padding: '10px',
                            display: 'flex',
                            flexDirection: 'column',
                            height: 240,
                        }}
                    >
                        FLOW
                    </Paper>
                </Grid>

            </Grid>
            <Footer sx={{pt: 4}}/>

        </Box>
    </Dashboard>;
}

export const getStaticProps = i18nMessageBuilder('authenticated/dashboard', 'authenticated/flow');

export default connect((state) => {
    return {
        navigation: state.navigation
    };
})(SummaryPage);