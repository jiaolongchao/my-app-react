/**
 * Created by jlc on 2018/3/20
 */

import HttpClient from '@com.haina.web/haina-lib/lib/httpUtils/HttpClient';
import Utils from '@com.haina.web/haina-lib/lib/utils/Utils';
import Constants from '../../enum/Constants';

export default class XiaoJiuGuiService {
    public static saveitemDetail = (itemNum:number,shopId:number,shopItemId:number,token:string): Promise<any> => {
        const params = {
            itemNum : itemNum,
            shopId:shopId,
            shopItemId:shopItemId
        }       
        return HttpClient.post(Constants.getXiao9Gui(), '/web/do/rest2/web/api/shopcart/saveOrUpdateItemAndQueryList?token=' + token,params).then(res=>{
            return res;
        })
    }

    public static queryShopItem = (shopId:number,token:string): Promise<any> => {
        const params = {           
            shopId:shopId
        }       
        return HttpClient.post(Constants.getXiao9Gui(), '/web/do/rest2/web/api/shopitem/queryShopItemList?token=' + token,params).then(res=>{          
            return res;
        })
    }
}