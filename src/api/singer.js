/*
 * @Author: admin 
 * @Date: 2018-12-03 17:18:24 
 * @Last Modified by: admin
 * @Last Modified time: 2018-12-04 17:21:36
 */

import jsonp from 'common/js/jsonp'
import { commonParams, options } from './config'

export function getSingerList() {
    const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'
    const data = Object.assign({}, commonParams, {
        channel: 'singer',
        page: 'list',
        key: 'all_all_all',
        pagesize: 100,
        pagenum: 1,
        hostUin: 0,
        needNewCode: 0,
        platform: 'yqq'
      })
      return jsonp(url, data, options)
}
