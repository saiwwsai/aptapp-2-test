//index.js
Page({
  data: {
    searchValue:''
  },

  // 搜索页面跳回
 onLoad: function (options) {

    if (options && options.searchValue){
      this.setData({
       searchValue: "Searched："+options.searchValue
      });
    }; 

  },


  // 搜索入口  
  wxSearchTab: function () {
    wx.redirectTo({
      url: '../search/search'
    })
  }






})
