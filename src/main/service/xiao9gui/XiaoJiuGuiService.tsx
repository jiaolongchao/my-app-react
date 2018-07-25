/**
 * Created by jlc on 2018/3/20
 */

import HttpClient from '@com.haina.web/haina-lib/lib/httpUtils/HttpClient';
import Utils from '@com.haina.web/haina-lib/lib/utils/Utils';
import Constants from '../../enum/Constants';

export default class XiaoJiuGuiService {
    public static saveitemDetail = (itemNum:number,shopId:number,shopItemId:number): Promise<any> => {
        const params = {
            itemNum : itemNum,
            shopId:shopId,
            shopItemId:shopItemId
        }
        /*Constants.getAdvisor()*/ /*https://dev.xiao9gui.com/web/do/rest2/web/api*/
        return HttpClient.post(Constants.getXiao9Gui(), '/web/do/rest2/web/api/shopcart/saveOrUpdateItemAndQueryList',params).then(res=>{
            return res;
        })
    }
}