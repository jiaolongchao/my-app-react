
import Imported from 'react-imported-component'
import * as React from "react";
import Home from '@container/home/Home';
import Shouye from '@container/home/Shouye';
import Xiao9gui from '@container/xiao9gui/Xiao9gui';

export default [    
    {
        path: '/',
        component: Shouye,       
        childRoutes:[                      
            {
                path:'/xiao9gui',
                component:Xiao9gui,
                exact:true
            }
            
        ]
    }
]