/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { DesktopSidebar } from './style';

export default ({ collapsed, children }) => {
    return <DesktopSidebar collapsed={collapsed}>{children}</DesktopSidebar>;
};
