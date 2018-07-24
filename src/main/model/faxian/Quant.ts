/**
 * Created by jlc on 2018/3/20 0013. //首页接口
 */
import {observable} from "mobx";
export default class Quant{
    @observable
    public goldstockList:Array<GoldstockList> = [];
    @observable
    public operateList:Array<OperateList> = [];       
}
class GoldstockList{
    @observable
    public _id:string;
    @observable
    public fiveProfit:number;
    @observable
    public label:Array<Label>=[];
    @observable
    public name:string;
    @observable
    public operateLabel:string;
    @observable
    public stockCode:string;
    @observable
    public stockName:string;
    @observable
    public successRatio:number;
}

class Label{
    @observable
    public title:string;   
}

class OperateList{
    @observable
    public _id:string; 
    @observable
    public canRenew:number; 
    @observable
    public expireDate:string; 
    @observable
    public fit:string; 
    @observable
    public followAmounts:number; 
    @observable
    public holdProfitRatio:number; 
    @observable
    public isBuy:number; 
    @observable
    public isOut:number; 
    @observable
    public label:Array<Label>=[]; 
    @observable
    public monthProfitRatio:number
    @observable
    public name:string; 
    @observable
    public operateLabel:string; 
    @observable
    public price:string; 
    @observable
    public slogan:string; 
    @observable
    public stockCode:string; 
    @observable
    public stockName:string; 
    @observable
    public successRatio:number; 
    @observable
    public totalReturnRatio:number; 
    @observable
    public tradeFre:string; 
}