// ==UserScript==
// @name         N.G.A.自.动.签.到
// @version      1.0
// @description  在每天第一次打开网页版N.G.A.自.动.签.到
// @author       monat151
// @match        *://bbs.nga.cn/*
// @match        *://ngabbs.com/*
// @match        *://nga.178.com/*
// ==/UserScript==

(function() {
    'use strict';

    function checkin() {
        let postData;
        let logging;
        let domain = document.domain;
        fetch(`https://${domain}/nuke.php?__lib=check_in&__act=check_in&__output=8`, {
            method: 'POST',
            headers: new Headers({
                "X-User-Agent": "Nga_Official"
            })
        })
            .then(res => res.arrayBuffer())
            .then(buffer => new TextDecoder("gbk").decode(buffer))
            .then(res => {
                postData = JSON.parse(res);
                if (!postData) {
                    logging = "奇怪的错误...";
                } else {
                    if ('data' in postData) {
                        logging = postData.data[0];
                        var currDate = new Date();
                        let currDateString = currDate.toLocaleDateString();
                        localStorage.setItem('nga_monat_last_checkin', currDateString); // 使用 localStorage 替代 GM_setValue
                    } else if ('error' in postData) {
                        logging = postData.error[0];
                    }
                }
                console.log('[NGA自动签到]', logging);
            })
            .catch(error => {
                console.log('[NGA自动签到] 错误:', error);
            });
    }

    setTimeout(() => {
        let lastCheckInDate = localStorage.getItem('nga_monat_last_checkin'); // 使用 localStorage 替代 GM_getValue
        var currDate = new Date();
        let currDateString = currDate.toLocaleDateString();

        if (lastCheckInDate === currDateString) {
            console.log('[NGA自动签到]', '今日已经签到过...');
        } else {
            checkin();
        }
    }, 200);
})();
