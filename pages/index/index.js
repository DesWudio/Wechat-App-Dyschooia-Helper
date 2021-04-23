Page({
  onShareAppMessage() {
    return {
      title: '晚上吃什么',
      path: 'pages/index/index'
    }
  },

  data: {
    inputTxt: '?',
  },

  b1: function() {
    var that = this
    var items = ['麻辣烫', '麻辣拌', '鸡公煲', '渤海', '打卤面', '辣子鸡', '羊汤', '二小', '食堂', '食堂', '食堂', '食堂'];
    var randomItem = items[Math.floor(Math.random() * items.length)];
    console.log(randomItem);
    this.setData({
      inputTxt: "·"
    })
    setTimeout(function() {
      that.setData({
        inputTxt: "··"
      })
    }, 300)
    setTimeout(function() {
      that.setData({
        inputTxt: "···"
      })
    }, 600)
    setTimeout(function() {
      that.setData({
        inputTxt: "····"
      })
    }, 900)
    setTimeout(function() {
      that.setData({
        inputTxt: randomItem
      })
    }, 1500)

    // wx.showModal({
    //   title: '结果出现了：',
    //   cancelText: "重来",
    //   confirmText: "妥嘞",
    //   content: "今晚去吃" + randomItem,
    //   success: function (res) {
    //     if (res.confirm) {
    //       wx.showToast({
    //         title: "就这么愉快地决定了",
    //         icon: 'none',
    //         duration: 1500
    //       })
    //     } else {
    //       wx.showToast({
    //         title: "那···给你重选好吧",
    //         icon: 'none',
    //         duration: 1000
    //       })
    //     }
    //   }
    // })

  },

  gotosettingpage: function(event) {
    wx.navigateTo({
      url: '../setting/setting',
    })
  },
})