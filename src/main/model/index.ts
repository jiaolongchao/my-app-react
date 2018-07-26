import { observable, action } from 'mobx';
import HomePage from './faxian/HomePage';
import XiaoJiuGui from './xiao9gui/XiaoJiuGui';
import QueryShopItem from './xiao9gui/QueryShopItem';

export class Store {
    constructor() {
        console.log("Store>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>init")
    }
    public HomePageModel = new HomePage();   
    public XiaoJiuGuiModel = new XiaoJiuGui(); 
    public QueryShopItemModel = new QueryShopItem();

    @action reset(){        
    }

}
let storeIntance = new Store();
export default storeIntance
