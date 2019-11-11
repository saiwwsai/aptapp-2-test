const myaudio = wx.createInnerAudioContext();
Page({
  data: {
    node4:
      `
    <h3> Click here for audio guidance: <\h3>
    ` ,
    isplay: false,//是否播放
    // header 
    node1: `
    <h1> Real-time Location<\h1>
    `,
    node2: `<h3>How to share your real-time location with your friend(s)?<\h3>`,
    node3:  
    `
    <ol>
   <li>Open up your friend's chat, click on the "+" button at the bottom right corner</li>
   <img src="/docs/rtl_1.jpg" width="100%">
   <li>Click on "Location"</li>
    <img src="/docs/rtl_2.jpg" width="100%">
   <li>Click on "Real-time Location"</li>
    <img src="/docs/rtl_3.jpg" width="100%">
    </ol>
    ` 
  },
  tap() {
    console.log('tap')
  },
  onShow: function () {
    myaudio.src = "/docs/story39b.mp3"
  },
  //播放
  play: function () {

    myaudio.play();
    console.log(myaudio.duration);
    this.setData({ isplay: true });
  },
  // 停止
  stop: function () {
    myaudio.pause();
    this.setData({ isplay: false });
  }

})