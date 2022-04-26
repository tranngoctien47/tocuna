import React from 'react'
import PrivateRoute from './layout/PrivateRoute';

const Home = React.lazy(() => import('./page/home'))

const routers = [
    {
        path: "/",
        element: <PrivateRoute />,
        children: [
            {
                path: '/',
                element: <Home />,
            },


        ]
    },



]

export default routers