// pages/webview/webview.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    weburl: "",
    psmodel: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    GetList(that)
  },

  //使用优惠券
  usecoupon: function (e) {
    var that = this
    // console.log('hahah')
    var itemM = e.currentTarget.dataset.models
    console.log(itemM)
    if (itemM.state == 0) {
      wx.navigateTo({
        url: '../booking/booking'
      })
    }

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})

var GetList = function (that) {
  var url = app.requestcertyphotomanInfoUrl;
  that.setData({
    hidden: false
  });
  wx.request({
    url: url,
    data: {
      user_id: app.globalData.openid,
    },
    success: function (res) {
      // var l = []
      // for (var i in res.data['data']) {
      //   l.push(res.data['data'][i])
      // }
      console.log(res)
      if (res.data['code'] == 0) {
        that.setData({
          psmodel: res.data['data']
        });
      }
      
      that.setData({
        hidden: true
      });
    }
  });
}
