import * as React from "react";
import { observer } from "mobx-react/custom";
import { observable } from "mobx";
import { inject } from "mobx-react";
import "../main.scss";
import './xiao9gui.scss';
@inject("store")
@observer
export default class Xiao9gui extends React.Component<any, any> {
    public headerSwiper;
    public mySwiper;
    private itemNum = 3;
    private shopId = 12002;
    private shopItemId = 13304;
    public constructor(props) {
        super(props);
        this.init();
    }

    init() {

    }
    componentDidMount() {
        //document.title = '小酒柜'
        this.props.store.XiaoJiuGuiModel.saveitemDetail(this.itemNum, this.shopId, this.shopItemId).then(res=>{
            console.log(res)
        })
    }

    public render() {
        let { className, ...others } = this.props;
        let { match, route, history } = this.props;
        return (
            <div className="productListPage">
                <div className="proBanner">
                    <div className="proLogo"></div>
                    <div className="proBusiness">大碗鱼饭店</div>
                    <div className="proTableNum">纸短情长</div>
                    <div className="orderList"></div>
                </div>
                <div className="inStock" style={{ display: 'block' }}>
                    <div className="proListBox">
                        <div className="proList" id="proList">
                            <div className="proItem itemBox" data-index="0" data-shopitemid="13304">
                                <div className="proItemImg">
                                    <img src="https://dev.xiao9gui.com/binarys-rsm-slave/1/20180709/106379.png" alt="" />
                                </div>
                                <div className="proItemInfo">
                                    <div className="proItemTit">
                                        <span>青酒</span>
                                    </div>
                                    <div className="proCapacity">容量：500ml</div>
                                    <div className="proCxxl"></div>
                                    <div className="proItemBottom">
                                        <div className="price">¥60</div>
                                        <div className="btn">
                                            <input className="itemIdInput" type="hidden" name="field＿name" value="10904" />
                                            <span className="subtract listItemSubtract"></span>
                                            <span className="addNum listItemAddNum">0</span>
                                            <span className="add listItemAdd"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cartListBj"></div>
                        <div className="cartList">
                            <div className="cartListHeader">
                                <div>已选商品</div>
                                <div className="clearCart">清空</div>
                            </div>
                            <div className="cartListBox" id="cartListBox">
                            </div>
                        </div>
                        <div className="buyFixed target">
                            <div className="buyInfo">
                                <span className="shopCart ">
                                    <span className="cartNum" style={{ display: 'none' }}>
                                        0
                        </span>
                                </span>
                                <div className="totalPrice">
                                    <div className="total">合计：￥ <span className="totalPriceNum">0</span></div>
                                    <div className="totalDetails"><span> 总额：￥ <span className="temOriFeeTotal">0.00</span> </span><span className="lj">立减: ￥ <span className="itemDisFeeTotal">0.00</span></span></div>
                                </div>

                            </div>
                            <div className="toBuy gray" id="toBuy">提交订单</div>
                        </div>

                        <div className="pointerCart"></div>
                    </div>
                    <div className="replenishment">
                        <div className="replenishmenContent">
                            商户正在抓紧补货哦
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}