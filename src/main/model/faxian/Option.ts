/**
 * Created by jlc on 2018/3/20 0013. //首页接口
 */
import {observable} from "mobx";
export default class Option{
    @observable
    public _id:string;
    @observable
    public advisor:Advisor;
    @observable
    public create_time:string;
    @observable
    public intro:string;
    @observable
    public title:string;
    @observable
    public reads:number;
    @observable
    public thumbnail_url:string;    
}

class Advisor{
    @observable
    public _id:string;
    @observable
    public advisor_type:number;
    @observable
    public avatar:string;
    @observable
    public create_time:string;
    @observable
    public fans:number;
    @observable
    public name:string;
    @observable
    public name_pinyin:string;
    @observable
    public intro:string;
    @observable
    public level:string;
    @observable
    public level_name:string;
    @observable
    public uid:string;
    @observable
    public qcer:string;
    @observable
    public tags:string;
}