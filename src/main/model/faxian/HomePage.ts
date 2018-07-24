/**
 * Created by jlc on 2018/3/20 0013. //首页接口
 */
import {observable} from "mobx";
import {action} from "mobx";
import {plainToClassFromExist} from "class-transformer";
import HomepageService from '../../service/faxian/HomepageService';
import WebLive from './WebLive';
import Option from './Option';
import Headline from './Headline';
import Advert from './Advert';
import Emotion from './Emotion';
import Quant from './Quant';
export default class HomePage{
    @observable
    public web_live:Array<WebLive>=[];
    @observable
    public option:Array<Option>=[];
    @observable
    public headline:Array<Headline>=[];
    @observable
    public advert:Array<Advert>=[];
    @observable
    public emotion:Emotion;
    @observable
    public quant:Quant;

    @action getListDetail(page:number,pageSize:number){
        return HomepageService.getHomeDetail().then(res=>{
            /* this.total = res.total
            this.operateList = this.operateList.concat(res.operateList) */
            plainToClassFromExist(this,res)
            return res
        })
    }
}