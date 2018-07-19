import * as React from "react";
import * as ReactDOM from "react-dom";
import { Main } from "./container/Main";
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'mobx-react';
import store from './model';
export class App {
    public constructor() {       
        this.init();        
    }

    private init() {
        ReactDOM.render(
            <Provider store={store}>
                <AppContainer>
                    <Main />
                </AppContainer>
            </Provider>,
            document.getElementById('example')
        );
    }
}
new App();