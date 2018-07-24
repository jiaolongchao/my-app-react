
import * as React from "react";
import './shouye.scss';
import Swiper from 'swiper';
import {observer} from "mobx-react/custom";
import {observable} from "mobx";
import { inject } from "mobx-react";
import 'swiper/dist/css/swiper.min.css';
@inject("store")
@observer
export default class Shouye extends React.Component<any, any> { 
    public headerSwiper;
    public mySwiper;
    public constructor(props) {
        super(props); 
        this.init();
    }

    init() {
        
    }

    componentWillMount() {
       
    }

    componentDidMount() {
        this.headerSwiper = new Swiper(this.refs.headerSwiper, { //顶部轮播图
            initialSlide:1,
            autoplay: true,
            loop: true,
            slidesPerView: 1,
            pagination: {
                 el: '.swiper-pagination',
                 type: 'bullets',
                },
            })
        
            this.props.store.HomePageModel.getListDetail().then(res => {
                this.mySwiper = new Swiper(this.refs.headlineSwiper,{
                    direction: 'vertical',
                    autoplay: true,
                    loop: true,
                })               
           })
    }
    
    public render() {
        let {className, ...others} = this.props;       
        let { match, route,history } = this.props;
        return (
          <div className='faxianWrap'>
                <div className="headerSwiper swiper-container" ref="headerSwiper">
                    <div className="swiper-wrapper" >
                        <div className="swiper-slide">
                            <a href="#"><img src={require('../assets/images/faxian/banner@2x.png')} alt=""/></a>
                        </div>
                        <div className="swiper-slide">
                            <a href="#"><img src={require('../assets/images/faxian/banner2@2x.jpg')} alt=""/></a>
                        </div>
                        <div className="swiper-slide">
                            <a href="#"><img src={require('../assets/images/faxian/banner@2x.png')} alt=""/></a>
                        </div>
                        <div className="swiper-slide">
                            <a href="#"><img src={require('../assets/images/faxian/banner2@2x.jpg')} alt=""/></a>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
                <div className="navigateList">                    
                    <div className="headline">                        
                        <div className="headlineList swiper-container swiper-no-swiping" ref="headlineSwiper">
                            <div className="swiper-wrapper">
                                {
                                    this.props.store.HomePageModel.headline&&this.props.store.HomePageModel.headline.map((el,idx)=>{
                                        return (                                            
                                            <a href={`/news/information/NniuHeadlines?newsIdStr=${el._id}`} className="swiper-slide"  key={idx}>{el.title}</a>                                
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
          </div> 
        )
    }
}