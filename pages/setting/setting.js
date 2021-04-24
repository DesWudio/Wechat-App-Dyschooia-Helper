Page({
  data: {
    labelvalue: [{ line1: "当前可选内容有：麻辣烫，麻辣拌，鸡公煲，渤海，打卤面，辣子鸡，羊汤，二小，食堂，其中食堂权重较高；", 
    custom: "在下方可以输入自定义可选项内容，使用逗号分隔可选项，中英文逗号均可：", 
      line3: "小提示：想要某个可选项的权重高一点的话，在上方多重复几次就可以了，后期会逐渐优化。更多功能目前还在开发,感谢您的支持！"},],
  },

  onLoad: function (option) {
    var arr = wx.getStorageSync("items") || [];
    var itemarray = arr.split(/,|，/);
    this.setData({
      itemslist: itemarray
    })
  },
  getinputitems: function (data) {
    var itemlist_input = data.detail.value
    wx.setStorage({
      key: 'items',
      data: itemlist_input
    })
    console.log(itemlist_input)
    },

  confirm: function(){
    wx.showToast({
      title: '更新成功！',
      icon: '',
      duration: 1500,
    })
  },

  gotomaingpage: function(event) {
    wx.navigateBack();
  },
})
