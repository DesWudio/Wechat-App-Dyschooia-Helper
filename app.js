// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    wx.getStorage({
        key: 'items',
        success: res => {
          console.log("items already here")
        },
        fail: err => {
          wx.setStorage({
            key: 'items',
            data: "麻辣烫，麻辣拌，鸡公煲，渤海，打卤面，辣子鸡，羊汤，二小，食堂，食堂，食堂，食堂"
          })
          console.log("items formated")
        }
      }),

      wx.login({
        success: res => {
        }
      })
  },
  globalData: {
    userInfo: null
  }
})
