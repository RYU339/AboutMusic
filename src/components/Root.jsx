import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from './Menu';

const Root = () => {
    return (
        <>
            <Menu />
            <Outlet />
        </>
    );
};

export default Root;
