Page({
  data: {
    labelvalue: [{line1: 
    "当前可选内容有：麻辣烫，麻辣拌，鸡公煲，渤海，打卤面，辣子鸡，羊汤，二小，食堂，其中食堂权重较高；"},
    {line2:
    "选项自定义功能目前还在开发,感谢您的支持！"},],
  },
  gotomaingpage: function(event) {
    wx.navigateBack();
  },
})