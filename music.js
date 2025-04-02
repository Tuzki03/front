document.addEventListener('DOMContentLoaded', function () {
  const songs = [
    {
      title: "海の形",
      album: "海の形",
      duration: "04:10",
      src: "audios/昙轩 - 海の形.mp3",
      cover: "images/海的形状.jpg" // 封面图片路径
    },
    {
      title: "a脑波音乐",
      album: "Uncharted",
      duration: "03:46",
      src: "audios/安眠a脑波音乐.mp3",
      cover: "images/a脑波.jpg"
    },
    {
      title: "冬季瀑布",
      album: "声谷",
      duration: "02:30",
      src: "audios/冬季瀑布.mp3",
      cover: "images/冬季瀑布.png"
    },
    {
      title: "古镇雨滴",
      album: "声谷",
      duration: "03:21",
      src: "audios/古镇雨滴.mp3",
      cover: "images/古镇雨滴.jpg"
    },
    {
      title: "漓江水",
      album: "声谷",
      duration: "04:23",
      src: "audios/漓江水.mp3",
      cover: "images/漓江水.jpg"
    },
    {
      title: "泉水水滴",
      album: "声谷",
      duration: "04:09",
      src: "audios/泉水水滴.mp3",
      cover: "images/泉水水滴.jpg"
    },
    {
      title: "松树林小雪",
      album: "声谷",
      duration: "03:46",
      src: "audios/松树林小雪.mp3",
      cover: "images/松树林小雪.jpg"
    },
    {
      title: "峡谷听风",
      album: "声谷",
      duration: "03:35",
      src: "audios/峡谷听风.mp3",
      cover: "images/峡谷听风.jpg"
    },
    {
      title: "帐篷遇雨",
      album: "声谷",
      duration: "03:46",
      src: "audios/帐篷遇雨.mp3",
      cover: "images/帐篷遇雨.jpg"
    },
    {
      title: "竹棚",
      album: "声谷",
      duration: "03:46",
      src: "audios/竹棚.mp3",
      cover: "images/竹棚.jpg"
    }
  ];

  const playlistBody = document.getElementById('playlist-body');

  songs.forEach((song, index) => {
    const row = document.createElement('tr');

    row.innerHTML = `
          <td>${index + 1}</td>
          <td><img src="${song.cover}" alt="${song.title} Cover">${song.title}</td>
          <td>${song.album}</td>
          <td>${song.duration}</td>
          <td>
          <button class="play-button">播放</button>
              <audio controls>
                  <source src="${song.src}" type="audio/mpeg">
              </audio>
          </td>
      `;
    playlistBody.appendChild(row);
  });
});   //动态添加歌曲