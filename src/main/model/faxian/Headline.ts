/**
 * Created by jlc on 2018/3/20 0013. //首页接口
 */
import {observable} from "mobx";
export default class Headline{
    @observable
    public _id:string;   
    @observable
    public title:string;    
}