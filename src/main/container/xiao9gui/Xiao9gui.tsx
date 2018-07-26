import * as React from "react";
import { observer } from "mobx-react/custom";
import { observable } from "mobx";
import { inject } from "mobx-react";
import Toast from '@com.haina.web/haina-component-mobile/lib/toast';
import Utils from '@com.haina.web/haina-lib/lib/utils/Utils';
import XiaoJiuGui from '../../model/xiao9gui/XiaoJiuGui';
import QueryShopItem from '../../model/xiao9gui/QueryShopItem';

import "../main.scss";
import './xiao9gui.scss';

let XiaoJiuGuiModel: XiaoJiuGui;
let QueryShopItemModel: QueryShopItem;

@inject("store")
@observer
export default class Xiao9gui extends React.Component<any, any> {
    private token = '41a35133ef13aebda40a6bb7122d58502b4e928a89e0259723360feb683962e64dc65ab81821adf7318ee83331aacc6f4fe4879f2ae77a3b5ce00fef6a858284';
    private itemNum = 3;
    private shopId = 12002;
    private shopItemId = 13304;
    public constructor(props) {
        super(props);
        this.init();
        XiaoJiuGuiModel = this.props.store.XiaoJiuGuiModel;
        QueryShopItemModel = this.props.store.QueryShopItemModel;
    }

    init() {
        this.state = {
            isOpenList: false
        }
    }
    componentDidMount() {
        Utils.setDocumentTitle("小酒柜");
        let that = this;
        QueryShopItemModel.queryShopItem(this.shopId, this.token);
        XiaoJiuGuiModel.saveitemDetail(this.itemNum, this.shopId, this.shopItemId, this.token);
    }

    changOpenList() {
        //Toast.info('您还没有选择任何商品哦！')
        this.setState({
            isOpenList: !this.state.isOpenList
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
                            {QueryShopItemModel && QueryShopItemModel.shopItem.length > 0 ?
                                QueryShopItemModel.shopItem.map((item, index) => {
                                    return (
                                        <div className="proItem itemBox" data-index={index} data-shopitemid={item.shopItemId} key={Math.random()}>
                                            <div className="proItemImg">
                                                <img src={`https://dev.xiao9gui.com/binarys-rsm-slave` + item.itemIcon} alt="" />
                                            </div>
                                            <div className="proItemInfo">
                                                <div className="proItemTit">
                                                    <span>{item.itemDesc}</span>
                                                </div>
                                                <div className="proCapacity">容量：{item.itemVolume}ml</div>
                                                <div className="proCxxl"></div>
                                                <div className="proItemBottom">
                                                    <div className="price">¥{item.itemPrice / 100}</div>
                                                    <div className="btn">
                                                        <input className="itemIdInput" type="hidden" name="field＿name" value="10904" />
                                                        <span className="subtract listItemSubtract"></span>
                                                        <span className="addNum listItemAddNum">0</span>
                                                        <span className="add listItemAdd"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                                :
                                null
                            }
                        </div>

                        <div className="cartListBj" style={{ display: this.state.isOpenList ? "block" : "none" }} onClick={res=>this.changOpenList()}></div>
                        <div className="cartList" style={{ display: this.state.isOpenList ? "block" : "none" }}>
                            <div className="cartListHeader">
                                <div>已选商品</div>
                                <div className="clearCart">清空</div>
                            </div>
                            <div className="cartListBox" id="cartListBox">
                                {XiaoJiuGuiModel && XiaoJiuGuiModel.shopItem.length > 0 ?
                                    XiaoJiuGuiModel.shopItem.map((item, index) => {
                                        return (
                                            <div className="cartListItem itemBox" data-index={index} data-shopitemid={item.shopItemId} key={Math.random()}>
                                                <div className="cartProName">{item.itemDesc}</div>
                                                <div className="cartProPrice">￥{item.itemRealFee / 100}</div>
                                                <div className="btn">
                                                    <input className="cartItemIdInput" type="hidden" name="field＿name" value="10904" />
                                                    <span className="subtract cartItemsubtract red"></span>
                                                    <span className="addNum cartAddNum">{item.itemNum}</span>
                                                    <span className="add cartItemAdd"></span>
                                                </div>
                                            </div>
                                        )
                                    })
                                    :
                                    null
                                }
                            </div>
                        </div>

                        <div className="buyFixed target">
                            <div className="buyInfo">
                                <span className="shopCart" onClick={res => this.changOpenList()}>
                                    <span className="cartNum">
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