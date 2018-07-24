import * as React from "react";
import "./index.scss"
import { Route,Link } from "react-router-dom";
import { renderRoutes } from 'react-router-config'
// declare var $
export default class Home extends React.Component<any, any> {
    public constructor(props) {
        super(props);
    }

    componentDidMount() {       
        document.title = '海纳智投'
    }
    public render() {
        let { className, ...others } = this.props;
        let { match, route,history } = this.props;
        console.log(this.props)
        return (
            <div className={className}>                
                {renderRoutes(route.childRoutes)}
            </div >
        )
    }
}