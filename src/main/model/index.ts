import { observable, action } from 'mobx';
import HomePage from './faxian/HomePage';
import XiaoJiuGui from './xiao9gui/XiaoJiuGui';
export class Store {
    constructor() {
        console.log("Store>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>init")
    }
    public HomePageModel = new HomePage();   
    public XiaoJiuGuiModel = new XiaoJiuGui(); 

    @action reset(){        
    }

}
let storeIntance = new Store();
export default storeIntance
