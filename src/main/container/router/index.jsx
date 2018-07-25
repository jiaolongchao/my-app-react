
import Imported from 'react-imported-component'
import * as React from "react";
import Home from '@container/home/Home';
import Shouye from '@container/home/Shouye';
import Xiao9gui from '@container/xiao9gui/Xiao9gui';

export default [    
    {
        path: '/xiao9gui',
        component: Xiao9gui,
        childRoutes:[
            {
                path:'/home',
                component:Home,
                exact:true
            },
            {
                path: '/',
                component: Shouye,
                exact:true
            },
            {
                path:'/xiao9gui',
                component:Xiao9gui,
                exact:true
            }
            
        ]
    },
    {
        path: '/home',
        component: Shouye, 
        exact:true
    }
]