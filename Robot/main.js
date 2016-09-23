// $.ajax('http://op.juhe.cn/robot/index', {
//     info: "nihao",
//     key: "d36a210be688534b2f80f0beb162146e",
//     loc: "北京科技大学",
//     userid: "123"
// }, function (data) {
//     alert(data);
// })

// wx.startRecord();
var JeasonT = '你好呀';
var JiaFanmingT = '';


var getText2 = function (JiaFanming) {
    $.ajax({
        type: 'POST',
        url: 'http://www.tuling123.com/openapi/api',
        data: {
            info: JiaFanming,
            key: "6b88211150fb40f2b075040cc426b1b5",
            userid: "123"
        },
        success: function (data) {
            // console.log(data);
            console.log('州长夫人：' + data.text);
            document.write('<span class="innerTest">州长夫人：' + data.text + '</span><br/>');
            JeasonT = data.text;
            setTimeout(getText(JeasonT),1500);
            
            // getAK(data.result.text);
        },
        dataType: 'json'
    });
}


var getText = function (Jeason) {

    $.ajax({
        type: 'POST',
        url: 'http://op.juhe.cn/robot/index',
        data: {
            info: Jeason,
            key: "d36a210be688534b2f80f0beb162146e",
            loc: "北京科技大学",
            userid: "123"
        },
        success: function (data) {
            // console.log(data);
            console.log('长者：' + data.result.text);
            document.write('<span class="innerTest">长者：' + data.result.text + '</span><br/>');
            JiaFanmingT = data.result.text;
            setTimeout(getText2(JiaFanmingT),1500);
            // getAK(data.result.text);
        },
        dataType: 'JSONP'
    });
}

// http://www.tuling123.com/openapi/api

var getText2 = function (JiaFanming) {
    $.ajax({
        type: 'POST',
        url: 'http://www.tuling123.com/openapi/api',
        data: {
            info: JiaFanming,
            key: "6b88211150fb40f2b075040cc426b1b5",
            userid: "123"
        },
        success: function (data) {
            // console.log(data);
            console.log('州长夫人：' + data.text);
            document.write('<span class="innerTest">州长夫人：' + data.text + '</span><br/>');
            JeasonT = data.text;
            setTimeout(getText(JeasonT),1500);
            
            // getAK(data.result.text);
        },
        dataType: 'json'
    });
}

(getText(JeasonT))();

// var sayOut = function () {
//     // alert("Asd");
//     var theText = $("#diyKeyword").val();
//     console.log(theText);
//     getText2(theText);
// }

// var getAK = function (mainStr) {
//     // alert(mainStr);

//     $.ajax({
//         type: 'POST',
//         dataType: 'JSONP',
//         url: 'https://openapi.baidu.com/oauth/2.0/token',
//         data: {
//             grant_type: 'client_credentials',
//             client_id: '9HO189xz4FAPCoji5fPe8yhG',
//             client_secret: 'e109162a8056190d6a07662637fbd64a'
//         },
//         success: function (data) {
//             // console.log(data);
//             readIt( mainStr , '24.f66bbeeef7a98404f5d21cbd7739d15d.2592000.1476965633.282335-8650753');
//         },
//         // error: function () {
//         //     alert("Error!");
//         // }
//     });

//     readIt( mainStr , '24.f66bbeeef7a98404f5d21cbd7739d15d.2592000.1476965633.282335-8650753');
// }


// var readIt = function ( text , ak ) {
//     $.ajax({
//         type: 'POST',
//         dataType: 'jsonp',
//         url: 'http://tsn.baidu.com/text2audio',
//         data: {
//             tex: text,
//             lan: 'zh',
//             tok: ak,
//             ctp: 1,
//             cuid: '123423534'
//         },
//         success: function (data) { 
//             // console.log(data);
//          },
//         error: function () {
//             alert("Error!");
//         }
//     });
// }