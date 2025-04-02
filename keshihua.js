// 初始化图表
var boxPlot = echarts.init(document.getElementById('boxPlot'));

// 模拟单日睡眠报告中的纺锤波特征数据
function generateSleepSpindleData() {
  // 模拟睡眠分期数据（N1, N2, N3, N4, REM, Wake）
  const stages = ['N1', 'N2', 'N3', 'N4', 'REM', 'Wake'];
  const features = ['密度', '幅度', '功率'];
  const data = [];

  // 为每个睡眠分期生成纺锤波特征数据
  stages.forEach(stage => {
    const spindleData = {
      name: stage,
      density: generateRandomData(10, 20, 50), // 纺锤波密度（单位：个/分钟）
      amplitude: generateRandomData(0.5, 1.0, 2.0), // 纺锤波幅度（单位：μV）
      power: generateRandomData(0.1, 0.5, 1.5) // 纺锤波功率（单位：μV²）
    };
    data.push(spindleData);
  });

  return data;
}

// 生成随机数据（正态分布）
function generateRandomData(min, mean, max) {
  const count = 20; // 每个特征生成20个数据点
  const data = [];
  for (let i = 0; i < count; i++) {
    const value = Math.random() * (max - min) + min;
    data.push(value);
  }
  return data;
}

// 计算箱线图所需的统计值
function calculateBoxData(data) {
  const boxData = data.map(item => {
    const stats = {
      name: item.name,
      density: calculateStats(item.density),
      amplitude: calculateStats(item.amplitude),
      power: calculateStats(item.power)
    };
    return stats;
  });

  return boxData;
}

// 计算单个特征的统计值
function calculateStats(values) {
  const sortedData = values.sort((a, b) => a - b);
  const q1 = sortedData[Math.floor(sortedData.length / 4)];
  const q2 = sortedData[Math.floor(sortedData.length / 2)];
  const q3 = sortedData[Math.floor(sortedData.length * 3 / 4)];
  const iqr = q3 - q1;
  const min = sortedData[0];
  const max = sortedData[sortedData.length - 1];
  const outliers = sortedData.filter(d => d < q1 - 1.5 * iqr || d > q3 + 1.5 * iqr);
  return {
    boxData: [min, q1, q2, q3, max],
    outliers: outliers
  };
}

// 配置项
const option = {
  title: {
    text: '单日睡眠报告 - 纺锤波特征箱线图',
    left: 'center'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  xAxis: {
    type: 'category',
    data: ['N1', 'N2', 'N3', 'N4', 'REM', 'Wake']
  },
  yAxis: {
    type: 'value',
    name: '数值'
  },
  series: [
    {
      name: '密度',
      type: 'boxplot',
      data: calculateBoxData(generateSleepSpindleData()).map(item => item.density.boxData),
      tooltip: {
        formatter: function (params) {
          const { name, data } = params;
          const [min, q1, q2, q3, max] = data;
          return `${name}<br>最小值: ${min.toFixed(2)}<br>Q1: ${q1.toFixed(2)}<br>中位数: ${q2.toFixed(2)}<br>Q3: ${q3.toFixed(2)}<br>最大值: ${max.toFixed(2)}`;
        }
      }
    },
    {
      name: '幅度',
      type: 'boxplot',
      data: calculateBoxData(generateSleepSpindleData()).map(item => item.amplitude.boxData),
      tooltip: {
        formatter: function (params) {
          const { name, data } = params;
          const [min, q1, q2, q3, max] = data;
          return `${name}<br>最小值: ${min.toFixed(2)}<br>Q1: ${q1.toFixed(2)}<br>中位数: ${q2.toFixed(2)}<br>Q3: ${q3.toFixed(2)}<br>最大值: ${max.toFixed(2)}`;
        }
      }
    },
    {
      name: '功率',
      type: 'boxplot',
      data: calculateBoxData(generateSleepSpindleData()).map(item => item.power.boxData),
      tooltip: {
        formatter: function (params) {
          const { name, data } = params;
          const [min, q1, q2, q3, max] = data;
          return `${name}<br>最小值: ${min.toFixed(2)}<br>Q1: ${q1.toFixed(2)}<br>中位数: ${q2.toFixed(2)}<br>Q3: ${q3.toFixed(2)}<br>最大值: ${max.toFixed(2)}`;
        }
      }
    }
  ]
};

// 渲染图表
boxPlot.setOption(option);



// 初始化图表
var sleepPieChart = echarts.init(document.getElementById('sleepPieChart'));

// 模拟睡眠分期数据
const sleepData = {
  categories: ['Wake', 'REM', 'N1', 'N2', 'N3', 'N4'],
  values: [20, 5, 25, 20, 20, 10] // 假设REM期占比25%
};

// 配置项
const option2 = {
  title: {
    text: '睡眠分期占比',
    left: 'center',
    top: '5%',
    textStyle: {
      color: '#333'
    }
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: sleepData.categories,
    textStyle: {
      color: '#333'
    }
  },
  series: [
    {
      name: '睡眠分期',
      type: 'pie',
      radius: '50%',
      data: sleepData.categories.map((category, index) => ({
        value: sleepData.values[index],
        name: category
      })),
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      },
      label: {
        normal: {
          show: false
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      itemStyle: {
        normal: {
          color: function (params) {
            var colorList = [
              '#D2B4DE', '#F9E79F', '#D6A2E8', '#C9E2BE', '#A9CCE3', '#A3C2AD'
            ];
            return colorList[params.dataIndex];
          }
        }
      }
    }
  ]
};

// 渲染图表
sleepPieChart.setOption(option2);



var chartDom = document.getElementById('waveformChart');
var myChart = echarts.init(chartDom);
var option3;

option3 = {
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['α波', '慢波', 'δ波', 'θ波', 'β波', '纺锤波', 'K复合波']
  },
  xAxis: {
    type: 'value',
    name: 'Time'
  },
  yAxis: {
    type: 'value',
    name: 'Amplitude'
  },
  series: [
    {
      name: 'α波',
      type: 'line',
      symbol: 'none',
      data: (function () {
        var data = [];
        for (var i = 0; i < 100; i++) {
          data.push([i, Math.random() * 50]);
        }
        return data;
      })(),
      itemStyle: {
        color: '#D2B4DE' // 深紫
      }
    },
    {
      name: '慢波',
      type: 'line',
      symbol: 'none',
      data: (function () {
        var data = [];
        for (var i = 0; i < 100; i++) {
          data.push([i, Math.random() * 30]);
        }
        return data;
      })(),
      itemStyle: {
        color: '#A9CCE3' // 明亮的蓝色
      }
    },
    {
      name: 'δ波',
      type: 'line',
      symbol: 'none',
      data: (function () {
        var data = [];
        for (var i = 0; i < 100; i++) {
          data.push([i, Math.random() * 20]);
        }
        return data;
      })(),
      itemStyle: {
        color: '#C9E2BE' // 鲜绿色
      }
    },
    {
      name: 'θ波',
      type: 'line',
      symbol: 'none',
      data: (function () {
        var data = [];
        for (var i = 0; i < 100; i++) {
          data.push([i, Math.random() * 40]);
        }
        return data;
      })(),
      itemStyle: {
        color: '#F9E79F' // 鲜黄色
      }
    },
    {
      name: 'β波',
      type: 'line',
      symbol: 'none',
      data: (function () {
        var data = [];
        for (var i = 0; i < 100; i++) {
          data.push([i, Math.random() * 60]);
        }
        return data;
      })(),
      itemStyle: {
        color: '#F5B7B1' // 亮红色
      }
    },
    {
      name: '纺锤波',
      type: 'line',
      symbol: 'none',
      data: (function () {
        var data = [];
        for (var i = 0; i < 100; i++) {
          data.push([i, Math.random() * 70]);
        }
        return data;
      })(),
      itemStyle: {
        color: '#D6A2E8' // 紫色
      }
    },
    {
      name: 'K复合波',
      type: 'line',
      symbol: 'none',
      data: (function () {
        var data = [];
        for (var i = 0; i < 100; i++) {
          data.push([i, Math.random() * 80]);
        }
        return data;
      })(),
      itemStyle: {
        color: '#A3C2AD' // 深蓝色
      }
    }
  ]
};

option3 && myChart.setOption(option3);

// 初始化图表
var sleepDurationChart = echarts.init(document.getElementById('sleepDurationChart'));

// 睡眠分期数据
const sleepStages = ['Wake', 'REM', 'N1', 'N2', 'N3', 'N4'];
const durations = [120, 30, 90, 150, 60, 50]; // 各个时期持续时间，单位：分钟

// 配置项
const option4 = {
  title: {
    text: '睡眠各个时期持续时间',
    subtext: '单位：分钟',
    left: 'center'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  xAxis: {
    type: 'category',
    data: sleepStages,
    axisLabel: {
      color: '#333'
    }
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      color: '#333'
    }
  },
  series: [{
    data: durations,
    type: 'bar',
    itemStyle: {
      color: function (params) {
        // 为每个柱子分配不同的颜色
        const colors = ['#D2B4DE', '#F9E79F', '#D6A2E8', '#C9E2BE', '#A9CCE3', '#A3C2AD'];
        return colors[params.dataIndex];
      }
    },
    barWidth: '60%'
  }]
};

// 渲染图表
sleepDurationChart.setOption(option4);



