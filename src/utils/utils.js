/**
 * 万里通商城项目工具
 **/

import { SHA1 } from 'crypto-js';

// REM单位计算宽度

const Rem = (function() {
    let calculate_size = function() {
        let BASE_FONT_SIZE = 100;
        let docEl = document.documentElement;
        let clientWidth = docEl.clientWidth;

        if(!clientWidth) return;
        docEl.style.fontSize = BASE_FONT_SIZE * (clientWidth / 750) + 'px';
    }

    if (document.addEventListener) {
        let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
        let docBody = document.body;
        window.addEventListener(resizeEvt, calculate_size, false);
        document.addEventListener('DOMContentLoaded', calculate_size, false);
        calculate_size();
        docBody.style.display = 'block';
    }
})()


// SIGN签名
const Sign = function() {
    let [PRIVATE_KEY, REQ_TIME] = ['09FB84B1-D90E-4C14-84DB-DEE924A87B51', 'reqTime'];
    let ts;
    let a = arguments;
    let o = a[0] || {};
    let pk = a.length > 1 ? a[1] : PRIVATE_KEY;
    let pks = []
    
    for( let k in o) {
        if(k === REQ_TIME) {
            ts = o[k];
            continue;
        }
        pks.push(k);
    }

    pks.sort();

    let sign = '';
    if(ts) {
        for(let i in pks) {
            let k = pks[i];
            let v = o[k] ? o[k].toString() : '';
            sign += v + ts;
        }
        sign += pk;
        let oSign = SHA1(sign);
        return oSign.toString();
    } else {
        console.log('缺少必要参数reqTime');
    }
}

// 统计打点

const Track = function(id) {
    let [TRACK_SITE, TRACK_DOMAIN] = ['wlt', 'wanlitong.com']
    let memberId = id ? id : '';
    let loginUserId = memberId;

    if(loginUserId === '') {
        loginUserId = '0'
    }

    let _paq = {
        site: TRACK_SITE,
        domain: TRACK_DOMAIN,
        userId: loginUserId,
        userType: 1
    };

    window._paq = _paq;

    let elScript = document.createElement('script');
    if (location.protocol.toLowerCase() == 'http:') {
        elScript.setAttribute('src', '//webstat.wanlitong.com/webstat/pa_beacon_cdn.js');
    } else {
        elScript.setAttribute('src', '//webstat.wanlitong.com/js/pa_beacon_https.js');
    }
    document.body.appendChild(elScript);
}

export { Rem, Sign, Track };
