
import Imported from 'react-imported-component'
import * as React from "react";
import Home from '@container/home/Home';
import Shouye from '@container/home/Shouye';

export default [    
    {
        path: '/',
        component: Home,
        childRoutes:[
            {
                path: '/',
                component: Shouye,
                exact:true
            }
        ]      
    },
]