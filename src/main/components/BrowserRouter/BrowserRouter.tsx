import * as warning from "warning";
import * as React from "react";
import * as PropTypes from "prop-types";
import { createBrowserHistory as createHistory } from "history";
import { Router } from "react-router-dom";
import { inject } from "mobx-react";

var myhistory = createHistory();
@inject("store")
export default class BrowserRouter extends React.Component<any, any> {

    componentWillMount() {
        warning(
            !this.props.history,
            "<BrowserRouter> ignores the history prop. To use a custom history, " +
            "use `import { Router }` instead of `import { BrowserRouter as Router }`."
        );
    }

    render() {
        return <Router history={myhistory} children={this.props.children} />;
    }
}
export const history = myhistory