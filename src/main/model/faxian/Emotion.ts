/**
 * Created by jlc on 2018/3/20 0013. //首页接口
 */
import {observable} from "mobx";
export default class Emotion{
    @observable
    public differences:number;   
    @observable
    public emotionDate:number;  
    @observable  
    public news:Array<News>=[];
    @observable
    public result:string;    
}
class News{
    @observable
    public newsDate:string;
    @observable
    public newsId:number;
    @observable
    public newsTitle:string;
}