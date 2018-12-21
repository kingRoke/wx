// pages/cfl/cfl.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'images/p1.jpg',
      'images/p2.jpg',
      'images/p3.jpg'
    ],
    images: {},
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1300,
    bg: '#C79C77',
    Height: "" ,    //这是swiper要动态设置的高度属性
  },

  imgHeight: function (e) {
    var winWid = wx.getSystemInfoSync().windowWidth, //获取当前屏幕的宽度
        winwiH = wx.getSystemInfoSync().windowHeight,
        rpxR = 750 / winWid,
        height = winwiH * 0.5 * rpxR,
        image = this.data.images;
    console.log(winWid);
    //将图片的datadata-index作为image对象的key,然后存储图片的宽高值
    image[e.target.dataset.index] = {
      width: winWid *2,
      height: winwiH *2
    }
    this.setData({
      Height: height+'px', //设置高度
      images: image
    })
    console.log(this.data.images);
  },

  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
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