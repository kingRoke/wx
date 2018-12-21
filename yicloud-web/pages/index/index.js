//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/index/banner.jpg',
      '/images/index/banner001.jpg',
      '/images/index/banner002.jpg',
      '/images/index/banner003.jpg',
      '/images/index/banner004.jpg'
    ],
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, //  滑动动画时长1s
    
    logo: '',
    menu: '',
    menu_statu: false,
    showMenuStatus: false,

    eID_img: '/images/index/eID.png',

    three_content: '/images/index/application_processOf_digitalCertificate.jpg',

    four_content1: '/images/index/information1.jpg',
    four_content2: '/images/index/information2.jpg',
    four_content3: '/images/index/information3.jpg',
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    const logo = app.globalData.logo;
    const menu = app.globalData.menu;
    const statu = app.globalData.menu_statu;
    const showMenuStatus = app.globalData.showMenuStatus;
      this.setData({
        logo: logo,
        menu: menu,
        menu_statu: statu,
        showMenuStatus: showMenuStatus
      })
    //本地存储
    wx.setStorageSync('logo', logo)
    wx.setStorageSync('menu', menu)
    wx.setStorageSync('menu_statu', statu)
    wx.setStorageSync('showMenuStatus', showMenuStatus)
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  clickMenu: function(e) {
    var currentStatu = e.currentTarget.dataset.statu;
    console.log(currentStatu);
    this.setData({
      menu_statu: !currentStatu
    });
    this.showMenu(!currentStatu)
  },

  showMenu: function (currentStatu) {
    if (currentStatu == false) {
      this.setData(
        {
          showMenuStatus: false
        }
      );
    }
    // 显示抽屉
    if (currentStatu == true) {
      this.setData(
        {
          showMenuStatus: true
        }
      )
    }
  },

  goProductService: function() {
    wx.navigateTo({
      url: '../product-service/product-service'
    })
  }
})
