// $.ajax('http://op.juhe.cn/robot/index', {
//     info: "nihao",
//     key: "d36a210be688534b2f80f0beb162146e",
//     loc: "北京科技大学",
//     userid: "123"
// }, function (data) {
//     alert(data);
// })

// wx.startRecord();

$.ajax({
    type: 'POST',
    url: 'http://op.juhe.cn/robot/index',
    data: {
        info: "我帅不",
        key: "d36a210be688534b2f80f0beb162146e",
        loc: "北京科技大学",
        userid: "123"
    },
    success: function (data) {
        console.log(data);
        console.log(data.result.text)
    },
    dataType: 'JSONP'
});