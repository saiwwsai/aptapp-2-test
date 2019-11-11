//index.js
Page({
  data: {
    searchValue: '',
    guidanceBody:''
  },

  // 搜索页面跳回
  onLoad: function (options) {
    if (options && options.searchValue=="taxi service") {
      this.setData({
        searchValue: "Guidance title：" + options.searchValue,
        guidanceBody:"THIS is the guidance for taxi service."
      });
    } 
    else if (options && options.searchValue == "share contact") {
      this.setData({
        searchValue: "Guidance title：" + options.searchValue,
        guidanceBody: "THIS is the guidance for share contact."
      });
    } 
    else if (options && options.searchValue == "real time location") { 
        wx.redirectTo({
          url: '../detail/detail'
        })
    }
    else{
      this.setData({
        searchValue: "We didn't find the guidance you want. Please try differently."
      });
    }
  },

  // 搜索入口  
  wxSearchTab: function () {
    wx.redirectTo({
      url: '../search/search'
    })
  }


})
