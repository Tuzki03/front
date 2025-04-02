// script.js
const myChart = echarts.init(document.getElementById('naodian'));
const tableBody = document.getElementById('featureTable').getElementsByTagName('tbody')[0];
const maxRows = 5; // 表格最大行数
let chartInterval; // 用于存储图表更新的定时器
let featureInterval; // 用于存储特征更新的定时器
let running = false; // 是否正在运行

// 指定图表的配置项和数据
var option = {
  title: {
    text: '脑电与眼动信号图',
    textStyle: {
      color: 'rgba(119, 119, 119)'
    }
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: { // 添加图例
    data: ['脑电信号', '眼动信号']
  },
  xAxis: {
    type: 'category',
    data: []
  },
  yAxis: {
    type: 'value',
    min: -180,
    max: 120
  },
  series: [
    {
      name: '脑电信号', // 添加名称
      data: [],
      type: 'line',
      lineStyle: {
        color: '#61aaff' // 脑电信号颜色
      },
      showSymbol: false,
      itemStyle: {
        normal: {
          color: '#61aaff'
        }
      }
    },
    {
      name: '眼动信号', // 添加第二条折线
      data: [],
      type: 'line',
      lineStyle: {
        color: '#ff8a65' // 眼动信号颜色
      },
      showSymbol: false,
      itemStyle: {
        normal: {
          color: '#ff8a65'
        }
      }
    }
  ]
};

myChart.setOption(option);  //使用刚指定的配置项和数据显示图表

// 数据生成函数
function generateData() {
  const now = new Date();
  const time = now.toISOString().replace(/T.*/, '') + ' ' + now.toTimeString().substr(0, 5);
  const eegData = Math.floor(Math.random() * (75 - 38 + 1)) + 38; // 随机生成脑电信号，范围在+38uv到+75uv之间
  const eyeData = Math.floor(Math.random() * (100 - (-180) + 1)) - 180; // 随机生成眼动信号，范围在-150uv到+100uv之间
  return { time, eegData, eyeData };
}

// 更新图表函数
function updateChart() {
  const { time, eegData, eyeData } = generateData();
  // 移除旧的数据
  if (option.xAxis.data.length >= 60) {
    option.xAxis.data.shift();
    option.series[0].data.shift();
    option.series[1].data.shift();
  }
  // 添加新的数据
  option.xAxis.data.push(time);
  option.series[0].data.push(eegData); // 更新脑电信号
  option.series[1].data.push(eyeData); // 更新眼动信号
  // 使用刚指定的配置项和数据显示图表
  myChart.setOption(option, true); // 第二个参数为true时，表示不合并之前的option
}

// 生成随机特征数据
function generateRandomFeature() {
  const consciousnessDisorders = [
    { brainwave: "轻度慢波化，α波频率降低", eyeMovement: "减少的自发性眼球运动，对视觉刺激反应减弱", type: "N1" },
    { brainwave: "θ波增多，背景慢波化", eyeMovement: "无明显的眼球追踪能力，对威胁性刺激有轻微反应", type: "N2" },
    { brainwave: "δ波为主，可能有爆发-抑制波形", eyeMovement: "缺乏自发性眼球运动，对任何外部刺激无反应", type: "N3" },
    { brainwave: "α波为主，无反应", eyeMovement: "缺乏自发性眼球运动，对任何外部刺激无反应", type: "N4" },
    { brainwave: "β波为主，低振幅", eyeMovement: "缺乏自发性眼球运动，对任何外部刺激无反应", type: "Wake" },
    { brainwave: "纺锤波，背景慢波化", eyeMovement: "缺乏自发性眼球运动，对任何外部刺激无反应", type: "REM" }
  ];
  const randomIndex = Math.floor(Math.random() * consciousnessDisorders.length);
  const { brainwave, eyeMovement, type } = consciousnessDisorders[randomIndex];
  return { brainwave, eyeMovement, type };
}

// 添加特征到表格
function addFeatureToTable(feature) {
  const row = tableBody.insertRow();
  const timeCell = row.insertCell(0);
  const brainwaveCell = row.insertCell(1);
  const eyeMovementCell = row.insertCell(2);
  const typeCell = row.insertCell(3);

  const { time, eegData, eyeData } = generateData(); // 使用相同的时间戳
  timeCell.textContent = time;
  brainwaveCell.textContent = feature.brainwave;
  eyeMovementCell.textContent = feature.eyeMovement;
  typeCell.textContent = feature.type;

  if (tableBody.rows.length > maxRows) {
    tableBody.deleteRow(0);
  }
}

// 开始按钮逻辑
function startTimer() {
  if (!running) {
    chartInterval = setInterval(updateChart, 1000); // 每秒更新一次图表
    featureInterval = setInterval(() => {
      const feature = generateRandomFeature();
      addFeatureToTable(feature);
    }, 30000); // 每30秒更新一次特征
    running = true;
    document.getElementById('startButton').disabled = true;
    document.getElementById('stopButton').disabled = false;
  }
}

// 暂停按钮逻辑
function stopTimer() {
  clearInterval(chartInterval); // 清除图表更新的定时器
  clearInterval(featureInterval); // 清除特征生成定时器
  running = false;
  document.getElementById('startButton').disabled = false;
  document.getElementById('stopButton').disabled = true;
}

// 绑定按钮事件
document.getElementById('startButton').addEventListener('click', startTimer);
document.getElementById('stopButton').addEventListener('click', stopTimer);


const canvas = document.getElementById('soundWaveCanvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth * 0.8;
const height = canvas.height = 200;

let data = [];

function generateRandomData() {
  data = [];
  for (let i = 0; i < width; i++) {
    data.push(Math.random() * height / 2);
  }
}

function drawSoundWave() {
  ctx.clearRect(0, 0, width, height);
  ctx.beginPath();
  ctx.moveTo(0, height / 2);

  for (let i = 0; i < width; i++) {
    ctx.lineTo(i, height / 2 + data[i] - height / 4);
  }

  ctx.stroke();
}

generateRandomData();
drawSoundWave();

setInterval(() => {
  generateRandomData();
  drawSoundWave();
}, 1000); // Update every second


const musicplay = document.getElementById('musicplay');
const musicpause = document.getElementById('musicpause');
const audioPlayer = document.getElementById('audioPlayer');

musicplay.addEventListener('click', () => {
  audioPlayer.play();
});

musicpause.addEventListener('click', () => {
  audioPlayer.pause();
});