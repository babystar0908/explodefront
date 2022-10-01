import { lazy } from 'react';

// project imports
import Layout from './../layouts';
import Loadable from './../components/Loadable';
const Mint = Loadable(lazy(() => import('./../pages/mint/mint')));

const MainRoutes = {
    path: '/',
    element: <Layout />,
    children: [
        {
            path: '/',
            element: <Mint />
        }
    ]
};

export default MainRoutes;
