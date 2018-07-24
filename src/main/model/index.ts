import { observable, action } from 'mobx';
import HomePage from './faxian/HomePage';
export class Store {
    constructor() {
        console.log("Store>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>init")
    }
    public HomePageModel = new HomePage();    

    @action reset(){        
    }

}
let storeIntance = new Store();
export default storeIntance
