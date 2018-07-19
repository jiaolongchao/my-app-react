/**
 * Created by face on 2017/11/4 17:13.
 */
import * as React from "react";
import { renderRoutes } from 'react-router-config'
import { Switch } from 'react-router-dom'
import BrowserRouter from '../components/BrowserRouter/BrowserRouter'
import routes from './router'
//import './index.scss';
import * as BJ_REPORT from 'badjs-report'
import { observer } from "mobx-react";
// import Loading from '../components/loading/Loading';
// import {appState} from '../model'
// import NativeJs from '@com.haina.web/haina-lib/lib/native/NativeJs'

//当存在子路由的时候,路由配置可以参照home的路由
//let { match, route } = this.props  {renderRoutes(route.childRoutes)}
//有嵌套子路由的情况下，不能加exact

@observer
export class Main extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
       
        this.init()
    }

    init(){        
       
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {renderRoutes(routes)}
                </Switch>
            </BrowserRouter>
        )
        
    }
}