// 稳定率图
// 初始化ECharts实例
// var myChartwendin = echarts.init(document.getElementById('wendinluecharts - chart'));

// // 配置项
// var optionwendin = {
//   title: {
//     text: '98%',
//     x: 'center',
//     y: 'center',
//     textStyle: {
//       fontWeight: 'normal',
//       // color: '#0580f2',
//       color: 'rgba(51, 61, 90)',
//       fontSize: '30'
//     }
//   },
//   // color: ['rgba(176, 212, 251, 1)'],
//   color: ['rgba(238, 238, 238 )'],
//   legend: {
//     show: true,
//     itemGap: 12,
//     data: ['yes', 'no']
//   },

//   series: [{
//     name: 'Line 1',
//     type: 'pie',
//     clockWise: true,
//     radius: ['72%', '90%'],
//     itemStyle: {
//       normal: {
//         label: {
//           show: false
//         },
//         labelLine: {
//           show: false
//         }
//       }
//     },
//     hoverAnimation: false,
//     data: [{
//       value: 98,
//       // name: 'yes',
//       itemStyle: {
//         normal: {
//           color: { // 完成的圆环的颜色
//             colorStops: [{
//               offset: 0,
//               // color: '#00cefc' // 0% 处的颜色
//               color: "#315098"
//             },
//             {
//               offset: 1,
//               // color: '#367bec' // 100% 处的颜色
//               color: "#315098"
//             }]
//           },
//           label: {
//             show: false
//           },
//           labelLine: {
//             show: false
//           }
//         }
//       }
//     }, {
//       // name: 'no',
//       value: 2
//     }]
//   }]
// };

// // 使用配置项显示图表
// myChartwendin.setOption(optionwendin);


// var myChartHuxican = echarts.init(document.getElementById('huxicancharts - chart'));

// // 配置项
// var optionHuxican = {
//   title: {
//     text: '16次/分钟', // 假设展示呼吸频率数值
//     x: 'center',
//     y: 'center',
//     textStyle: {
//       fontWeight: 'normal',
//       color: 'rgba(51, 61, 90)',
//       fontSize: '30'
//     }
//   },
//   series: [{
//     name: '呼吸频率',
//     type: 'pie',
//     clockwise: true,
//     radius: ['72%', '90%'], // 调整环形图大小
//     itemStyle: {
//       normal: {
//         label: {
//           show: false
//         },
//         labelLine: {
//           show: false
//         }
//       }
//     },
//     data: [{
//       value: 16, // 假设呼吸频率值为16
//       itemStyle: {
//         normal: {
//           color: { // 圆环颜色
//             colorStops: [{
//               offset: 0,
//               color: "#315098"
//             }, {
//               offset: 1,
//               color: "#315098"
//             }]
//           },
//           label: {
//             show: false
//           },
//           labelLine: {
//             show: false
//           }
//         }
//       }
//     }]
//   }],
//   hoverAnimation: false
// };

// // 使用配置项显示图表
// myChartHuxican.setOption(optionHuxican);


// 初始化ECharts实例
var myChart = echarts.init(document.getElementById('main-chart'));

// 模拟一个代表整体的综合评分数据，这里假设为80分
var overallScore = 90;

// 配置项
var option = {
  title: {
    text: overallScore,
    x: 'center',
    y: 'center',
    textStyle: {
      fontWeight: 'bold',
      color: '#315098',
      fontSize: '27'
    }
  },
  series: [{
    name: '睡眠呼吸参数综合评分',
    type: 'pie',
    clockwise: true,
    radius: ['60%', '80%'],
    itemStyle: {
      normal: {
        label: {
          show: false
        },
        labelLine: {
          show: false
        }
      }
    },
    data: [{
      value: overallScore,
      itemStyle: {
        normal: {
          color: {
            colorStops: [{
              offset: 0,
              color: '#315098'
            }, {
              offset: 1,
              color: '#315098'
            }]
          },
          label: {
            show: false
          },
          labelLine: {
            show: false
          }
        }
      }
    }, {
      value: 100 - overallScore,
      itemStyle: {
        normal: {
          color: '#f0f0f0'
        }
      }
    }]
  }],
  hoverAnimation: false
};

// 使用配置项显示图表
myChart.setOption(option);

// 事件图
// 初始化 ECharts 实例
// var shijianmyChart = echarts.init(document.getElementById('shijianchart'));

// // 配置项
// var shijianoption = {
//   xAxis: {
//     type: 'category',
//     data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
//   },
//   yAxis: {
//     type: 'value',
//     show: false
//   },
//   series: [
//     {
//       name: 'Critical',
//       type: 'line',
//       stack: '总量',
//       symbol: 'none',
//       areaStyle: {
//         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//           {
//             offset: 0,
//             color: 'rgba(0, 0, 139, 0.2)'
//           },
//           {
//             offset: 1,
//             color: 'rgba(0, 0, 139, 0)'
//           }
//         ])
//       },
//       itemStyle: {
//         color: '#00008B' // 设置折线颜色
//       },
//       data: [120, 200, 150, 80, 70, 110, 130]
//     },
//     {
//       name: 'Error',
//       type: 'line',
//       stack: '总量',
//       symbol: 'none',
//       areaStyle: {
//         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//           {
//             offset: 0,
//             color: 'rgba(255, 0, 0, 0.2)'
//           },
//           {
//             offset: 1,
//             color: 'rgba(255, 0, 0, 0)'
//           }
//         ])
//       },
//       itemStyle: {
//         color: '#FF0000' // 设置折线颜色
//       },
//       data: [80, 150, 180, 100, 120, 90, 160]
//     },
//     {
//       name: 'Warning',
//       type: 'line',
//       stack: '总量',
//       symbol: 'none',
//       areaStyle: {
//         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//           {
//             offset: 0,
//             color: 'rgba(255, 140, 0, 0.2)'
//           },
//           {
//             offset: 1,
//             color: 'rgba(255, 140, 0, 0)'
//           }
//         ])
//       },
//       itemStyle: {
//         color: '#FF8C00' // 设置折线颜色
//       },
//       data: [90, 110, 130, 150, 60, 100, 140]
//     }
//   ]
// };

// // 使用刚指定的配置项和数据显示图表
// shijianmyChart.setOption(shijianoption);


// 初始化 ECharts 实例
var oxygenmyChart = echarts.init(document.getElementById('oxygenchart'));

// 配置项
var oxygenoption = {
  // 提示框组件，鼠标悬浮时显示对应数据信息
  tooltip: {
    trigger: 'axis',
    formatter: function (params) {
      return `序号: ${params[0].dataIndex}<br/>正常人: ${params[0].value}%<br/>测试者: ${params[1].value}%`;
    }
  },
  // X轴配置为类目轴，使用固定值
  xAxis: {
    type: 'category',
    show: false,
    data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
  },
  // Y轴配置为数值轴，显示血氧饱和度
  yAxis: {
    type: 'value',
    name: '血氧饱和度(%)',
    min: 90,
    max: 100,
    show: false,
    splitLine: {
      show: true,
      lineStyle: {
        color: '#eee',
        type: 'dashed'
      }
    }
  },
  // 图表系列配置，包含正常人及测试者两个系列
  series: [
    {
      name: '正常人',
      data: [96, 95, 99, 95, 98, 96, 96, 99, 96, 98],
      type: 'line',
      symbol: 'circle',
      symbolSize: 6,
      itemStyle: {
        color: '#0099ff'
      },
      lineStyle: {
        width: 2,
        color: '#0099ff'
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgba(0, 153, 255, 0.2)'
          },
          {
            offset: 1,
            color: 'rgba(0, 153, 255, 0)'
          }
        ])
      }
    },
    {
      name: '测试者',
      data: [90, 91, 93, 91, 97, 92, 91, 93, 91, 90],
      type: 'line',
      symbol: 'square',
      symbolSize: 6,
      itemStyle: {
        color: '#ff6666'
      },
      lineStyle: {
        width: 2,
        color: '#ff6666'
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgba(255, 102, 102, 0.2)'
          },
          {
            offset: 1,
            color: 'rgba(255, 102, 102, 0)'
          }
        ])
      }
    }
  ],
  // 图表网格配置，让图表在容器内尽量占满
  grid: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    containLabel: true
  },
};

// 使用刚指定的配置项和数据显示图表
oxygenmyChart.setOption(oxygenoption);

// 纺锤波频率与密度
// 频率数据
const frequencyData = [20, 25, 30, 15, 22];
// 密度数据
const densityData = [0.2, 0.3, 0.4, 0.15, 0.22];
const xAxisData = ['11 - 12Hz', '12 - 13Hz', '13 - 14Hz', '14 - 15Hz', '15 - 16Hz'];

const fpinlumyChart = echarts.init(document.getElementById('fpinluchart'));

const fpinluoption = {
  title: {
    show: false,
    text: '纺锤波频率和密度展示',
    left: 'center',
    textStyle: {
      color: '#333',
      fontSize: 20
    }
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['频率', '密度'],
    top: '5%',
    left: 'center'
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: xAxisData,
    axisTick: {
      alignWithLabel: true
    },
    axisLabel: {
      fontSize: 14,
      rotate: 35,
      textStyle: {
        color: '#666'
      }
    }
  },
  yAxis: [
    {
      type: 'value',
      name: '频率值',
      axisLabel: {
        color: '#666',
        fontSize: 14
      }
    },
    {
      type: 'value',
      name: '密度值',
      axisLabel: {
        color: '#666',
        fontSize: 14
      },
      offset: 60
    }
  ],
  series: [
    {
      name: '频率',
      type: 'line',
      data: frequencyData,
      yAxisIndex: 0,
      lineStyle: {
        color: '#007bff',
        width: 2
      },
      itemStyle: {
        color: '#007bff'
      },
      label: {
        show: false,
        position: 'top',
        color: '#333',
        fontSize: 14
      }
    },
    {
      name: '密度',
      type: 'bar', // 将类型改为柱状图
      data: densityData,
      yAxisIndex: 1,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: '#315098'
          },
          {
            offset: 1,
            color: '#0f63ee'
          }
        ])
      },
      label: {
        show: false,
        position: 'top',
        color: '#333',
        fontSize: 14
      }
    }
  ]
};

fpinlumyChart.setOption(fpinluoption);




// 纺锤波发生率
// 不同睡眠阶段
// 不同睡眠阶段
// const sleepStages = ['浅睡眠1', '深睡眠1', 'REM睡眠1', '浅睡眠2', '深睡眠2', 'REM睡眠2'];

// // 正常人不同睡眠阶段纺锤波发生率数据
// const normalPersonData = [5, 2, 1, 4, 2, 0];

// // MCS患者不同睡眠阶段纺锤波发生率数据（示例数据，可根据实际情况调整）
// const mcsPatientData = [3, 1, 0, 3, 2, 0];

// // VS患者不同睡眠阶段纺锤波发生率数据（示例数据，可根据实际情况调整）
// const vsPatientData = [2, 0, 0, 1, 0, 0];

// // UWS患者不同睡眠阶段纺锤波发生率数据（示例数据，可根据实际情况调整）
// const uwsPatientData = [1, 0, 0, 1, 0, 0];

// // 初始化图表
// const ffashenglumyChart = echarts.init(document.getElementById('ffashengluchart'));

// // 配置项
// const ffashengluoption = {
//   // 标题
//   title: {
//     show: false,
//     text: '不同睡眠阶段纺锤波发生率对比',
//     left: 'center',
//     top: '3%',
//     textStyle: {
//       color: '#333333',
//       fontSize: 26,
//       fontWeight: '600',
//       fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
//     }
//   },
//   // 提示框
//   tooltip: {
//     trigger: 'axis',
//     axisPointer: {
//       type: 'cross',
//       crossStyle: {
//         color: '#999999',
//         width: 1,
//         type: 'dashed'
//       }
//     },
//     backgroundColor: 'rgba(0, 0, 0, 0.8)',
//     textStyle: {
//       color: '#ffffff',
//       fontSize: 14
//     },
//     padding: [8, 12],
//     extraCssText: 'box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);'
//   },
//   // 图例
//   legend: {
//     data: ['正常人', 'MCS患者', 'VS患者', 'UWS患者'],
//     top: '10%',
//     left: 'center',
//     textStyle: {
//       color: '#666666',
//       fontSize: 16,
//       fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
//     },
//     itemWidth: 15,
//     itemHeight: 15
//   },
//   // 网格
//   grid: {
//     left: '5%', // 左侧内边距减少，让图表整体右移，横坐标更宽
//     right: '15%', // 右侧内边距增大，给横坐标留出更多空间
//     bottom: '10%', // 底部内边距适当增大，防止横坐标文字被遮挡
//     containLabel: true
//   },
//   // x轴
//   xAxis: {
//     type: 'category',
//     data: sleepStages,
//     axisTick: {
//       alignWithLabel: true,
//       length: 5,
//       lineStyle: {
//         color: '#cccccc'
//       }
//     },
//     axisLabel: {
//       color: '#666666',
//       fontSize: 14,
//       rotate: 30,
//       fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
//       margin: 15
//     },
//     axisLine: {
//       boundaryGap: false
//     }
//   },
//   // y轴
//   yAxis: {
//     show: false,
//     type: 'value',
//     axisLabel: {
//       color: '#666666',
//       fontSize: 14,
//       fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
//       formatter: '{value}'
//     },
//     // name: '纺锤波发生率（次/分钟）',
//     // nameLocation: 'middle',
//     // nameGap: 35,
//     // nameTextStyle: {
//     //   color: '#666666',
//     //   fontSize: 16,
//     //   fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
//     // },
//     axisLine: {
//       lineStyle: {
//         color: '#cccccc',
//         width: 1
//       }
//     },
//     splitLine: {
//       lineStyle: {
//         color: '#eeeeee',
//         type: 'dashed'
//       }
//     }
//   },
//   // 系列数据
//   series: [
//     {
//       name: '正常人',
//       type: 'line',
//       data: normalPersonData,
//       symbol: 'none',
//       symbolSize: 12,
//       lineStyle: {
//         color: '#0099FF',
//         width: 2,
//         shadowColor: 'rgba(0, 153, 255, 0.5)',
//         shadowBlur: 10,
//         shadowOffsetY: 5
//       },
//       itemStyle: {
//         color: '#0099FF'
//       },
//       label: {
//         show: true,
//         position: 'top',
//         color: '#333333',
//         fontSize: 14,
//         fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
//       },
//       areaStyle: {
//         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//           { offset: 0, color: 'rgba(0, 153, 255, 0.2)' },
//           { offset: 1, color: 'rgba(0, 153, 255, 0)' }
//         ])
//       }
//     },
//     {
//       name: 'MCS患者',
//       type: 'line',
//       data: mcsPatientData,
//       symbol: 'none',
//       symbolSize: 12,
//       lineStyle: {
//         color: '#9933FF',
//         width: 2,
//         shadowColor: 'rgba(153, 51, 255, 0.5)',
//         shadowBlur: 10,
//         shadowOffsetY: 5
//       },
//       itemStyle: {
//         color: '#9933FF'
//       },
//       label: {
//         show: true,
//         position: 'top',
//         color: '#333333',
//         fontSize: 14,
//         fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
//       },
//       areaStyle: {
//         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//           { offset: 0, color: 'rgba(153, 51, 255, 0.2)' },
//           { offset: 1, color: 'rgba(153, 51, 255, 0)' }
//         ])
//       }
//     },
//     {
//       name: 'VS患者',
//       type: 'line',
//       data: vsPatientData,
//       symbol: 'none',
//       symbolSize: 12,
//       lineStyle: {
//         color: '#FF0099',
//         width: 2,
//         shadowColor: 'rgba(255, 0, 153, 0.5)',
//         shadowBlur: 10,
//         shadowOffsetY: 5
//       },
//       itemStyle: {
//         color: '#FF0099'
//       },
//       label: {
//         show: true,
//         position: 'top',
//         color: '#333333',
//         fontSize: 14,
//         fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
//       },
//       areaStyle: {
//         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//           { offset: 0, color: 'rgba(255, 0, 153, 0.2)' },
//           { offset: 1, color: 'rgba(255, 0, 153, 0)' }
//         ])
//       }
//     },
//     {
//       name: 'UWS患者',
//       type: 'line',
//       data: uwsPatientData,
//       symbol: 'none',
//       symbolSize: 12,
//       lineStyle: {
//         color: '#33CC33',
//         width: 2,
//         shadowColor: 'rgba(51, 204, 51, 0.5)',
//         shadowBlur: 10,
//         shadowOffsetY: 5
//       },
//       itemStyle: {
//         color: '#33CC33'
//       },
//       label: {
//         show: true,
//         position: 'top',
//         color: '#333333',
//         fontSize: 14,
//         fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
//       },
//       areaStyle: {
//         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//           { offset: 0, color: 'rgba(51, 204, 51, 0.2)' },
//           { offset: 1, color: 'rgba(51, 204, 51, 0)' }
//         ])
//       }
//     }
//   ]
// };

// // 使用配置项显示图表
// ffashenglumyChart.setOption(ffashengluoption);


// 不同意识障碍状态下SWS持续时间及CRS - R评分
// 生成模拟数据
const swsDurationData = [30, 40, 60]; // 分别对应VS患者、UWS患者、MCS患者的SWS持续时间（分钟）模拟数据
const crsRScoreData = [3, 5, 10]; // 分别对应VS患者、UWS患者、MCS患者的CRS - R评分模拟数据

// 初始化图表
const swscRSChart = echarts.init(document.getElementById('swsCRSchart'));

// 配置项
const swsCRSOption = {
  title: {
    show: false,
    text: '不同意识障碍状态下SWS持续时间及CRS - R评分',
    left: 'center',
    top: '3%',
    textStyle: {
      color: '#333333',
      fontSize: 26,
      fontWeight: '600',
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
    }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999999',
        width: 1,
        type: 'dashed'
      }
    },
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    textStyle: {
      color: '#ffffff',
      fontSize: 14
    },
    padding: [8, 12],
    extraCssText: 'box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);'
  },
  legend: {
    data: ['SWS持续时间', 'CRS - R评分'],
    top: '10%',
    left: 'center',
    textStyle: {
      color: '#666666',
      fontSize: 16,
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
    },
    itemWidth: 15,
    itemHeight: 15
  },
  grid: {
    left: '8%',
    right: '10%',
    bottom: '10%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: ['VS', 'UWS', 'MCS'],
    axisTick: {
      alignWithLabel: true,
      length: 5,
      lineStyle: {
        color: '#cccccc'
      }
    },
    axisLabel: {
      color: '#666666',
      fontSize: 14,
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
    }
  },
  yAxis: [
    {
      type: 'value',
      name: 'SWS持续时间（分钟）',
      nameLocation: 'middle',
      nameGap: 30,
      nameTextStyle: {
        color: '#666666',
        fontSize: 16,
        fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
      },
      axisLine: {
        lineStyle: {
          color: '#cccccc',
          width: 1
        }
      },
      splitLine: {
        lineStyle: {
          color: '#eeeeee',
          type: 'dashed'
        }
      }
    },
    {
      type: 'value',
      name: 'CRS - R评分',
      nameLocation: 'middle',
      nameGap: 30,
      nameTextStyle: {
        color: '#666666',
        fontSize: 16,
        fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
      },
      axisLine: {
        lineStyle: {
          color: '#cccccc',
          width: 1
        }
      },
      splitLine: {
        lineStyle: {
          color: '#eeeeee',
          type: 'dashed'
        }
      }
    }
  ],
  series: [
    {
      name: 'SWS持续时间',
      type: 'line',
      yAxisIndex: 0,
      data: swsDurationData,
      symbol: 'none',
      symbolSize: 12,
      lineStyle: {
        color: '#0099FF',
        width: 2,
        shadowColor: 'rgba(0, 153, 255, 0.5)',
        shadowBlur: 10,
        shadowOffsetY: 5
      },
      itemStyle: {
        color: '#0099FF'
      },
      label: {
        show: true,
        position: 'top',
        color: '#333333',
        fontSize: 14,
        fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(0, 153, 255, 0.2)' },
          { offset: 1, color: 'rgba(0, 153, 255, 0)' }
        ])
      }
    },
    {
      name: 'CRS - R评分',
      type: 'line',
      yAxisIndex: 1,
      data: crsRScoreData,
      symbol: 'none',
      symbolSize: 12,
      lineStyle: {
        // color: '#FF3399',
        color: "#ff6666",
        width: 2,
        // shadowColor: 'rgba(255, 51, 153, 0.5)',
        shadowColor: "#ff6666",
        shadowBlur: 10,
        shadowOffsetY: 5
      },
      itemStyle: {
        color: '#FF6666'
      },
      label: {
        show: true,
        position: 'top',
        color: '#333333',
        fontSize: 14,
        fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(255, 102,102,0.2)' },
          { offset: 1, color: 'rgba(255, 102,102,0)' }
        ])
      }
    }
  ]
};

// 使用配置项显示图表
swscRSChart.setOption(swsCRSOption);


// 意识障碍状态判断
var shuimianpinfenmyChart = echarts.init(document.getElementById('shuimianpinfen'));

var shuimianpinfenoption = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: 0,
    left: 'center'
  },
  color: ['#1660ab', '#ee3f4d', '#11616b'], // 添加颜色数组
  series: [
    {
      show: false,
      name: '意识障碍百分比',
      type: 'pie',
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 5,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,//不显示文字
        // formatteer:'hehe',决定文字显示的内容
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 25,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 60, name: 'MCS' },
        { value: 15, name: 'VS' },
        { value: 25, name: 'UWS' }
      ]
    }
  ]
};


// 使用配置项显示图表
shuimianpinfenmyChart.setOption(shuimianpinfenoption);


// 分期与标签
var fenqimyChart = echarts.init(document.getElementById('fenqichart'));

var fenqioption = {
  xAxis: {
    type: 'category',
    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', "Dec"],
    axisLabel: {
      color: '#586069',
      fontSize: 14
    },
    axisLine: {
      lineStyle: {
        color: '#d1d5da',
        width: 1
      }
    },
    splitLine: {
      show: false
    },
    boundaryGap: false // 设置此项为 false 让横坐标占满 div
  },
  yAxis: {
    show: false,
    type: 'value',
    axisLabel: {
      color: '#586069',
      fontSize: 14
    },
    axisLine: {
      lineStyle: {
        color: '#d1d5da',
        width: 1
      }
    },
    splitLine: {
      lineStyle: {
        color: '#eaecef',
        type: 'dashed'
      }
    }
  },
  series: [
    {
      name: '浅睡眠',
      type: 'line',
      symbol: 'none',
      data: [15, 12, 15, 10, 18, 14, 16, 13, 14, 13, 16, 13],
      smooth: true,
      lineStyle: {
        color: '#ff4500',
        width: 3.5,
        type: 'solid'
      },
      itemStyle: {
        color: '#ff4500'
      }


    },
    {
      name: '深睡眠',
      type: 'line',
      symbol: 'none',
      data: [9, 8, 10, 12, 9, 11, 13, 10, 12, 14, 12, 13],
      smooth: true,
      lineStyle: {
        color: '#007bff',
        width: 3.5,
        type: 'solid'
      },
      itemStyle: {
        color: '#007bff'
      }
    },
    {
      name: 'OSA标签段',
      type: 'line',
      symbol: 'none',
      data: [4, 3, 5, 4, 6, 4, 5, 3, 3, 3, 5, 3],
      smooth: true,
      lineStyle: {
        color: '#ffb800',
        width: 3.5,
        type: 'solid'
      },
      itemStyle: {
        color: '#ffb800'
      }
    }
  ]
};

fenqimyChart.setOption(fenqioption);


// 分析结果
// var resultmyChart = echarts.init(document.getElementById('resultchart'));

// // 模拟12个月的OSA占比数据
// var resultosaData = [12, 50, 60, 45, 19, 36, 63, 80, 37, 60, 32, 21];

// var resultoption = {
//   xAxis: {
//     show: false,
//     type: 'category',
//     data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//     axisTick: {
//       show: false
//     },
//     axisLabel: {
//       show: true,
//       color: '#586069',
//       fontSize: 14
//     },
//     axisLine: {
//       lineStyle: {
//         color: '#e0e0e0'
//       }
//     }
//   },
//   yAxis: {
//     type: 'value',
//     axisTick: {
//       show: false
//     },
//     axisLabel: {
//       show: false
//     },
//     splitLine: {
//       show: false
//     },
//     axisLine: {
//       lineStyle: {
//         color: '#e0e0e0'
//       }
//     },

//   },
//   tooltip: {
//     trigger: 'axis',
//     axisPointer: {
//       type: 'shadow'
//     },
//     formatter: function (params) {
//       return params.name + '<br>OSA占比:' + params.value + '%';
//     }
//   },
//   series: [
//     {
//       name: 'OSA占比',
//       type: 'bar',
//       data: resultosaData,
//       itemStyle: {
//         color: '#ccc'
//       }
//     }
//   ]
// };

// resultmyChart.setOption(resultoption);

// // 点击交互
// resultmyChart.on('click', function (params) {
//   console.log('点击了', params.seriesName, '在', params.name, '的数据，值为:', params.value);
// });

// // 鼠标悬浮交互
// resultmyChart.on('mouseover', function (params) {
//   var originalColor = params.series.itemStyle.color;
//   // 改变柱子颜色
//   params.series.itemStyle.color = '#b3b3b3';
//   myChart.setOption(option);
// });

// resultmyChart.on('mouseout', function (params) {
//   var originalColor = params.series.itemStyle.color;
//   // 恢复柱子颜色
//   params.series.itemStyle.color = '#ccc';
//   myChart.setOption(option);
// });

// // 修复提示框数据显示问题
// resultmyChart.setOption({
//   tooltip: {
//     formatter: function (params) {
//       return params[0].name + '<br>OSA占比:' + params[0].value + '%';
//     }
//   }
// });


// edf图像对比
// var edfmyChart = echarts.init(document.getElementById('edfchart'));

// // 模拟数据
// var dataDay1 = [];
// for (var i = 0; i < 50; i++) {
//   dataDay1.push(Math.random() * 100);
// }
// var dataDay2 = [];
// for (var i = 0; i < 50; i++) {
//   dataDay2.push(Math.random() * 100);
// }

// var edfoption = {
//   xAxis: {
//     // show: false,
//     type: 'category',
//     boundaryGap: false,
//     data: Array.from({ length: 50 }, (_, i) => i),
//     axisLine: {
//       show: false
//     },
//     axisTick: {
//       show: false
//     },
//     axisLabel: {
//       color: '#666',
//       fontSize: 12
//     },
//     splitLine: {
//       show: false
//     }
//   },
//   yAxis: {
//     // show: false,
//     type: 'value',
//     axisLine: {
//       show: false
//     },
//     axisTick: {
//       show: false
//     },
//     axisLabel: {
//       color: '#666',
//       fontSize: 12
//     },
//     splitLine: {
//       lineStyle: {
//         color: '#e0e0e0',
//         opacity: 0.5,
//         type: 'dashed'
//       }
//     }
//   },
//   series: [
//     {
//       name: 'day1',
//       type: 'line',
//       data: dataDay1,
//       lineStyle: {
//         color: '#0096ff',
//         width: 2,
//         type: 'solid',
//         shadowColor: 'rgba(0, 150, 255, 0.3)',
//         shadowBlur: 5,
//         shadowOffsetX: 0,
//         shadowOffsetY: 3
//       },
//       itemStyle: {
//         color: '#0096ff',
//         borderColor: '#fff',
//         borderWidth: 2,
//         // shadowColor: 'rgba(0, 150, 255, 0.3)',
//         shadowBlur: 5
//       },
//       symbolSize: 8,
//       symbol: 'none',
//       areaStyle: {
//         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//           { offset: 0, color: '#d0ebff' },
//           { offset: 1, color: '#e7f5ff' }
//         ])
//       }
//     },
//     {
//       name: 'day2',
//       type: 'line',
//       data: dataDay2,
//       lineStyle: {
//         color: '#00c853',
//         width: 2,
//         type: 'solid',
//         shadowColor: 'rgba(0, 200, 83, 0.3)',
//         shadowBlur: 5,
//         shadowOffsetX: 0,
//         shadowOffsetY: 3
//       },
//       itemStyle: {
//         color: '#00c853',
//         borderColor: '#fff',
//         borderWidth: 2,
//         // shadowColor: 'rgba(0, 200, 83, 0.3)',
//         shadowBlur: 5
//       },
//       symbolSize: 8,
//       symbol: 'none',
//       areaStyle: {
//         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//           { offset: 0, color: 'rgba(50, 205, 50, 0.2)' },
//           { offset: 1, color: 'rgba(50, 205, 50, 0)' }
//         ])
//       }
//     }
//   ],
//   tooltip: {
//     trigger: 'axis',
//     axisPointer: {
//       type: 'shadow'
//     },
//     formatter: function (params) {
//       var result = params[0].name + '<br>';
//       params.forEach(function (param) {
//         result += param.seriesName + ': ' + param.value + '<br>';
//       });
//       return result;
//     }
//   }
// };

// edfmyChart.setOption(edfoption);

// // 获取日期选择器元素
// var dateSelector = document.getElementById('dateSelector');

// // 为日期选择器添加change事件监听器
// dateSelector.addEventListener('change', function () {
//   var selectedDate = this.value;
//   console.log('选择的日期范围:', selectedDate);
//   // 这里可以添加根据选择的日期范围更新图表数据等逻辑
//   // 目前只是在控制台打印选择的日期
// });


// 静息眼电位时间变化
var jinximyChart = echarts.init(document.getElementById("jinxichart"));
var jinxioption = {
  xAxis: {
    type: 'category',
    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', "Dec"],
    axisLabel: {
      color: '#586069',
      fontSize: 12
    },
    axisLine: {
      lineStyle: {
        color: '#d1d5da',
        width: 1
      }
    },
    splitLine: {
      show: false
    },
    boundaryGap: false // 设置此项为 false 让横坐标占满 div
  },
  yAxis: {
    show: true,
    type: 'value',
    axisLabel: {
      color: '#586069',
      fontSize: 12
    },
    axisLine: {
      lineStyle: {
        color: '#d1d5da',
        width: 1
      }
    },
    splitLine: {
      lineStyle: {
        color: '#eaecef',
        type: 'dashed'
      }
    }
  },
  series: [
    {
      name: '植物人状态',
      type: 'line',
      symbol: 'none',
      data: [0.15, 0.18, 0.16, 0.14, 0.17, 0.13, 0.12, 0.14, 0.15, 0.16, 0.13, 0.14],
      smooth: true,
      lineStyle: {
        color: '#ff4500',
        width: 3.5,
        type: 'solid'
      },
      itemStyle: {
        color: '#ff4500'
      }
    },
    {
      name: '无反应觉醒综合征UWS',
      type: 'line',
      symbol: 'none',
      data: [0.35, 0.38, 0.36, 0.34, 0.37, 0.33, 0.32, 0.34, 0.35, 0.36, 0.33, 0.34],
      smooth: true,
      lineStyle: {
        color: '#007bff',
        width: 3.5,
        type: 'solid'
      },
      itemStyle: {
        color: '#007bff'
      }
    },
    {
      name: '微小意识状态MCS',
      type: 'line',
      symbol: 'none',
      data: [0.55, 0.58, 0.56, 0.54, 0.57, 0.53, 0.52, 0.54, 0.55, 0.56, 0.53, 0.54],
      smooth: true,
      lineStyle: {
        color: '#ffb800',
        width: 3.5,
        type: 'solid'
      },
      itemStyle: {
        color: '#ffb800'
      }
    },
    {
      name: '张梓禹（MCS）',
      type: 'line',
      symbol: 'none',
      data: [0.52, 0.53, 0.51, 0.55, 0.54, 0.52, 0.50, 0.53, 0.54, 0.51, 0.52, 0.53],
      smooth: true,
      lineStyle: {
        color: '#9932CC',
        width: 3.5,
        type: 'solid'
      },
      itemStyle: {
        color: '#9932CC'
      }
    }
  ]
};

jinximyChart.setOption(jinxioption);


// （CRS - R）评估报告
const infoItems = document.querySelectorAll('.crs-container .info-item');

infoItems.forEach((item) => {
  item.addEventListener('click', () => {
    const href = item.dataset.href;
    if (href) {
      window.location.href = href;
    }
  });
});