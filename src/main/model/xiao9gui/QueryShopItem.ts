/**
 * Created by jlc on 2018/3/20 0013. //首页接口
 */
import {observable} from "mobx";
import {action} from "mobx";
import {plainToClassFromExist} from "class-transformer";
import XiaoJiuGuiService from '../../service/xiao9gui/XiaoJiuGuiService';
export default class QueryShopItem{  
    @observable
    public shopItem : ShopItem[] = [];

    @action queryShopItem(shopId:number,token:string){
        return XiaoJiuGuiService.queryShopItem(shopId,token).then(res=>{
          /*plainToClassFromExist(this,res.data)
            return res;*/
        }).catch(res=>{
           this.shopItem = res.data;        
           //plainToClassFromExist(this,res.data)
           return res.data;
        })
    }
}
class ShopItem{
    @observable
    public agentId:number;
    @observable
    public agentItemId:number;
    @observable
    public agentOpId:number;
    @observable
    public agentOpName:number;
    @observable
    public balanceNum:number;
    @observable
    public itemBigIcon:number;
    @observable
    public itemBurden:number;  
    @observable
    public itemCode:string;
    @observable
    public itemDesc:string; 
    @observable
    public itemIcon:string;
    @observable
    public itemId:number;
    @observable
    public itemPrice:number;
    @observable
    public itemVolume:number;
    @observable
    public itemOriPrice:number;   
    @observable
    public sellNum:number;
    @observable
    public shopId:number;
    @observable
    public shopItemId:number;
}