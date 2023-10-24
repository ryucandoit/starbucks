// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
// var player; 사용안함
function onYouTubeIframeAPIReady() {
  // player = new YT.Player('player', {

  // <div id="player"></div>의 player 인식
  new YT.Player('player', {
    // height: '360', 따로 지정할 필요 없음
    // width: '640',
    videoId: 'An6LvWQuj_8', // 최초 재생할 유튜브 영상 ID
    // events: {
    //   onReady: onPlayerReady,
    //   onStateChange: onPlayerStateChange,
    // },
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: 'An6LvWQuj_8', // 반복 재생할 유튜브 영상 ID 목록 loop 사용시 필요
    },
    events: {
      onReady: function (event) {
        //익명함수 할당해 onready라는 메소드가 실행되면, 준비가 되면
        event.target.mute(); //음소거
      },
    },
  });
}
