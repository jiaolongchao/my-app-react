/**
 * Created by jlc on 2018/3/20
 */

import HttpClient from '@com.haina.web/haina-lib/lib/httpUtils/HttpClient'
import Utils from '@com.haina.web/haina-lib/lib/utils/Utils'
import Constants from '../../enum/Constants'

export default class HomepageService {
    public static getHomeDetail = (): Promise<any> => { 
        return HttpClient.get(Constants.getAdvisor(), '/homepage/assembly/list').then(res=>{
            return res;
        })
    }
}