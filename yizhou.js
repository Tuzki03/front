// 初始化图表
var sleepQualityChart = echarts.init(document.getElementById('sleepQualityChart'));

// 数据
const days = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
const sleepQuality = [45, 50, 48, 42, 47, 55, 40]; // 睡眠质量
const pciIndex = [42, 38, 45, 50, 47, 40, 34]; // PCI指数

// 配置项
const option = {
  title: {
    text: '7天睡眠质量变化与PCI指数',
    left: 'center'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: ['睡眠质量', 'PCI指数'],
    top: 'bottom'
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: days
  },
  yAxis: [
    {
      type: 'value',
      name: '指数',
      position: 'left'
    },
    {
      type: 'value',
      name: 'PCI',
      position: 'right'
    }
  ],
  series: [
    {
      name: '睡眠质量',
      type: 'line',
      data: sleepQuality,
      yAxisIndex: 1,
      smooth: true,
      itemStyle: {
        color: '#1f77b4c'
      },
      lineStyle: {
        width: 2
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(31, 119, 60, 0.5)' },
          { offset: 1, color: 'rgba(31, 119, 60, 0)' }
        ])
      }
    },
    {
      name: 'PCI指数',
      type: 'bar',
      data: pciIndex,
      yAxisIndex: 0,
      itemStyle: {
        color: '#aec7e8'
      },
      barWidth: '20%'
    }
  ]
};

// 渲染图表
sleepQualityChart.setOption(option);


// 初始化 ECharts 实例，绑定到 id 为 'main' 的 DOM 元素上
var myChart = echarts.init(document.getElementById('main'));

// 配置项
var option2 = {
  // 标题配置
  title: {
    text: '平均睡眠阶段完整性',
    left: 'left',
    textStyle: {
      fontSize: 15,
      fontWeight: 'bold'
    }
  },
  // 提示框配置
  tooltip: {
    trigger: 'item'
  },
  // 雷达图指示器配置
  radar: {
    shape: 'polygon', // 设置为多边形
    indicator: [
      { name: 'N1', max: 40 }, // 增加分割数量
      { name: 'N2', max: 40 },
      { name: 'N3', max: 40 },
      { name: 'N4', max: 40 },
      { name: 'REM', max: 40 },
      { name: 'Wake', max: 40 }
    ],
    splitArea: {
      show: true,
      areaStyle: {
        color: ['rgba(255,255,255,0.1)', 'rgba(255,255,255,0.2)']
      }
    },
    name: {
      textStyle: {
        color: 'black',
        fontSize: 14
      }
    }
  },
  // 数据系列配置
  series: [
    {
      name: '睡眠阶段',
      type: 'radar',
      data: [
        {
          value: [20, 40, 10, 5, 5, 20], // 每个阶段的百分比数据
          name: '平均睡眠阶段',
          areaStyle: {
            color: 'rgba(75, 192, 192, 0.5)' // 区域颜色
          },
          lineStyle: {
            color: 'rgba(75, 192, 192, 1)' // 线条颜色
          },
          label: {
            show: true,
            position: 'outside', // 标签显示在外部
          }
        }
      ]
    }
  ]
};

// 将配置项应用到图表中，渲染图表
myChart.setOption(option2);

// 模拟数据
const daysOfWeek = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
const spindleFrequencyData = [12, 15, 10, 8, 11, 14, 13]; // 纺锤波频率
const spindleDensityData = [5, 7, 6, 4, 5, 6, 8]; // 纺锤波密度
const spindlePowerData = [20, 25, 22, 18, 14, 18, 15]; // 纺锤波功率

// 获取画布上下文
const ctx = document.getElementById("stackedAreaChart").getContext("2d");

// 创建堆叠面积图
const stackedAreaChart = new Chart(ctx, {
  type: "line", // 使用 line 类型来实现堆叠面积图
  data: {
    labels: daysOfWeek,
    datasets: [
      {
        label: "纺锤波频率",
        data: spindleFrequencyData,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        fill: true,
        stack: "stack1", // 设置堆叠组
      },
      {
        label: "纺锤波密度",
        data: spindleDensityData,
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.5)",
        fill: true,
        stack: "stack1", // 设置堆叠组
      },
      {
        label: "纺锤波功率",
        data: spindlePowerData,
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        fill: true,
        stack: "stack1", // 设置堆叠组
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
        stacked: true, // 设置 Y 轴堆叠
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.raw}`;
          },
        },
      },
    },
  },
});


// 模拟数据
const labels = ['正常', 'VS', 'MCS', 'UWS'];
const data = [20, 40, 15, 25]; // 各状态的比例

// 获取画布上下文
const ctx2 = document.getElementById("consciousnessChart").getContext("2d");

// 创建环形图
const consciousnessChart = new Chart(ctx2, {
  type: "doughnut", // 使用 doughnut 类型创建环形图
  data: {
    labels: labels,
    datasets: [{
      label: '意识障碍倾向程度',
      data: data,
      backgroundColor: [
        'rgba(54, 162, 235, 0.6)', // 正常
        'rgba(255, 206, 86, 0.6)', // VS
        'rgba(75, 192, 192, 0.6)', // MCS
        'rgba(255, 99, 132, 0.6)'  // UWS
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '意识障碍倾向程度', // 添加标题
        font: {
          family: 'Arial', // 可选，设置字体类型
          weight: 'bold', // 可选，设置字体粗细
          fontSize: 30,
        }
      },
      legend: {
        position: 'bottom',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.label}: ${context.raw}%`;
          }
        }
      }
    }
  },
});