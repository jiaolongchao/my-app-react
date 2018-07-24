/**
 * Created by jlc on 2018/3/20 0013. //首页接口
 */
import {observable} from "mobx";
export default class WebLive{
    @observable
    public _id:string;
    @observable
    public advisor:Advisor;
    @observable
    public explain:string;
    @observable
    public member_id:string;
    @observable
    public status:number;
    @observable
    public topic:string;
    @observable
    public type:number;
    @observable
    public visitor_count:number;
    @observable
    public live_type:number;
    @observable
    public course_type:number;
    @observable
    public limit_view:number;
    @observable
    public star_level:number;
    @observable
    public  probability:number;
    @observable
    public vip_service_id:string;
    @observable
    public thumbnail:string;
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