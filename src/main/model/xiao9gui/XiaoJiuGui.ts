/**
 * Created by jlc on 2018/3/20 0013. //首页接口
 */
import {observable} from "mobx";
import {action} from "mobx";
import {plainToClassFromExist} from "class-transformer";
import XiaoJiuGuiService from '../../service/xiao9gui/XiaoJiuGuiService';
export default class XiaoJiuGui{
    @observable    
    public shopItem : ShopItem[] = [];

    @action saveitemDetail(itemNum:number,shopId:number,shipItemId:number,token:string){
        return XiaoJiuGuiService.saveitemDetail(itemNum,shopId,shipItemId,token).then(res=>{
            //plainToClassFromExist(this,res.data)           
            //return res
        }).catch(res=>{
            //plainToClassFromExist(this,res.data) 
            this.shopItem = res.data; 
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
    public balanceNum:number;
    @observable
    public createTime:number;
    @observable
    public id:number;
    @observable
    public isLimit:number;
    @observable
    public isPromo:number;
    @observable
    public itemCode:string;
    @observable
    public itemDesc:string;
    @observable
    public itemDisFee:number;
    @observable
    public itemIcon:string;
    @observable
    public itemId:number;
    @observable
    public itemNum:number;
    @observable
    public itemOriFee:number;
    @observable
    public itemOriPrice:number;
    @observable
    public itemRealFee:number;
    @observable
    public modifyTime:number;
    @observable
    public sellNum:number;
    @observable
    public shopId:number;
    @observable
    public shopItemId:number;
    @observable
    public userId:number;
}