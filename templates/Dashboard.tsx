import {connect, useDispatch} from "react-redux";
import {useEffect, useState, Children, isValidElement, cloneElement} from "react";
import {TestState} from "../redux/actions/nagivation";
import Box from "@mui/material/Box";
import Header from "../fragments/authenticated/Header";
import LeftNavDrawer from "../fragments/authenticated/LeftNavDrawer";

import i18NLanguagesSupported from '../i18n/i18nService';

const Dashboard = (props : any) => {
    const dispatch = useDispatch();
    const {children} = props;

    useEffect(() => {
        dispatch(TestState());
    }, [dispatch]);

    const [open, setOpen] = useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    const fragmentState = {
        ...props,
        open, setOpen,
        toggleDrawer,
        dispatch
    };

    return <Box sx={{ display: 'flex' }}>
            <Header {...fragmentState}/>
            <LeftNavDrawer {...fragmentState}/>
            {
                Children.map(children, (child) => {
                    if (isValidElement(child)) {
                        return cloneElement(child, {...fragmentState});
                    }
                    return child;
                })
            }
        </Box>;
}


export default Dashboard;