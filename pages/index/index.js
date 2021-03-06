//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    activityList:[{
      title:'活动名称0',
      tags: ['标签', '标签'],
      activityDate:'2019年08月20日 星期二 6:30',
      address:'地点：首都图书馆',
      cover:'https://img.yzcdn.cn/vant/t-thirt.jpg'
    }, {
        title: '活动名称1',
        tags: ['标签', '标签', '标签', '标签', '标签'],
        activityDate: '2019年08月20日 星期二 6:30',
        address: '地点：首都图书馆',
        cover: 'https://img.yzcdn.cn/vant/t-thirt.jpg'
      }, {
        title: '活动名称2',
        tags: ['标签', '标签',  '标签', '标签'],
        activityDate: '2019年08月20日 星期二 6:30',
        address: '地点：首都图书馆',
        cover: 'https://img.yzcdn.cn/vant/t-thirt.jpg'
      }, {
        title: '活动名称3',
        tags: ['标签', '标签',  '标签', '标签'],
        activityDate: '2019年08月20日 星期二 6:30',
        address: '地点：首都图书馆',
        cover: 'https://img.yzcdn.cn/vant/t-thirt.jpg'
      }, {
        title: '活动名称4',
        tags: ['标签', '标签', '标签', '标签'],
        activityDate: '2019年08月20日 星期二 6:30',
        address: '地点：首都图书馆',
        cover: 'https://img.yzcdn.cn/vant/t-thirt.jpg'
      }]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // changeCalendar(){
  //  wx.navigateTo({
  //    url: '/pages/calendar/calendar',
  //  })
  // },
  /**
  * 日历是否被打开
  */
  bindselect(e) {
    console.log(e.detail.ischeck)
  },
  /**
   * 获取选择日期
   */
  bindgetdate(e) {
    let time = e.detail;
    console.log(time)

  }


})
