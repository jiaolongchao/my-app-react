/**
 * Created by jlc on 2018/3/20 0013. //首页接口
 */
import {observable} from "mobx";
export default class Advert{
    @observable
    public _id:string;   
    @observable
    public create_time:string;  
    @observable  
    public device_image_url:string;
    @observable
    public image_url:string;
    @observable
    public intro:string;
    @observable
    public link_type:number;
    @observable
    public link_url:string;
    @observable
    public ref_type:number;
    @observable
    public title:string;
}