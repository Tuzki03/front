
//setup
function updateAmplifierValue() {
  const amplifierSelect = document.getElementById('amplifier');
  const selectedValue = amplifierSelect.value;
  console.log(`当前选择的电极放大器为: ${selectedValue}`);
  // 这里可以添加更多逻辑，比如根据选择更新其他部分的内容
}


// 这里可以添加按钮点击等交互逻辑
const uploadButton = document.getElementById('upload-button');
const fileInput = document.getElementById('file-input');


uploadButton.addEventListener('click', function () {
  fileInput.click();
});

fileInput.addEventListener('change', function (e) {
  const file = e.target.files[0];
  if (file) {
    console.log(`选择的文件: ${file.name}`);
    // 这里可以添加实际的上传逻辑，比如使用Fetch API 或 XMLHttpRequest 发送文件到服务器
    // 示例：使用Fetch API
    const formData = new FormData();
    formData.append('file', file);
    fetch('D:\aaa', {
      method: 'POST',
      body: formData
    })
      .then(response => response.text())
      .then(data => {
        console.log('上传结果:', data);
      })
      .catch(error => {
        console.error('上传错误:', error);
      });
  }
});




const submitButton = document.getElementById('submit-button');
const cancelButton = document.getElementById('cancel-button');
const filterInput = document.getElementById('filter-input');


submitButton.addEventListener('click', function () {
  const inputValue = filterInput.value;
  console.log('提交的滤波选择为:', inputValue);
  // 这里可以添加向服务器提交数据的实际逻辑，比如使用Fetch API 或 XMLHttpRequest
});

cancelButton.addEventListener('click', function () {
  filterInput.value = '';
  console.log('输入已取消，文本框已清空');
});


// 新增采样参数设置逻辑
const samplingRateInput = document.getElementById('sampling-rate');
const resolutionInput = document.getElementById('resolution');

// 这里可以添加获取和设置采样参数的逻辑，比如提交到服务器
// 示例：在提交按钮点击事件中获取参数
submitButton.addEventListener('click', function () {
  const samplingRate = samplingRateInput.value;
  const resolution = resolutionInput.value;
  console.log('采样率:', samplingRate);
  console.log('采样分辨率:', resolution);
  // 这里可以添加向服务器提交这些参数的实际逻辑
});




document.addEventListener('DOMContentLoaded', function () {
  const calibrationButton = document.getElementById('calibration-button');
  const progressValue = document.getElementById('progress-value');
  const progressBar = document.getElementById('progress-bar');

  if (calibrationButton && progressValue && progressBar) {
    calibrationButton.addEventListener('click', function () {
      progressValue.textContent = '校准中...';
      progressBar.innerHTML = '<div class="progress-bar-fill"></div>';
      let progress = 0;
      const intervalId = setInterval(() => {
        progress += 10;
        if (progress > 100) {
          progress = 100;
          clearInterval(intervalId);
          progressValue.textContent = '校准完成';
        }
        document.querySelector('.progress-bar-fill').style.width = `${progress}%`;
      }, 500);
    });
  } else {
    console.error('按钮或进度显示元素获取失败');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const calibrationButton = document.getElementById('calibration-button');
  const progressValue = document.getElementById('progress-value');
  const progressBar = document.getElementById('progress-bar');

  if (calibrationButton && progressValue && progressBar) {
    calibrationButton.addEventListener('click', function () {
      progressValue.textContent = '校准中...';
      progressBar.innerHTML = '<div class="progress-bar-fill"></div>';
      let progress = 0;
      const intervalId = setInterval(() => {
        progress += 10;
        if (progress > 100) {
          progress = 100;
          clearInterval(intervalId);
          // 模拟可能的校准失败情况，这里假设进度达到100%时也有50%概率失败
          if (Math.random() < 0.5) {
            progressValue.textContent = '校准失败，请重试';
            document.querySelector('.progress-bar-fill').style.backgroundColor = 'red';
          } else {
            progressValue.textContent = '校准完成';
          }
        }
        document.querySelector('.progress-bar-fill').style.width = `${progress}%`;
      }, 500);
    });
  } else {
    console.error('按钮或进度显示元素获取失败');
  }
});








// 睡眠环境参数
document.addEventListener('DOMContentLoaded', function () {
  // 模拟自动获取温度的函数，实际需连接相关传感器或API
  const autoTempButton = document.getElementById('autoTempButton');
  autoTempButton.addEventListener('click', function () {
    const temperatureInput = document.getElementById('temperature');
    // 这里用随机数模拟自动获取的温度，实际要替换为真实获取逻辑
    const randomTemperature = (Math.random() * 10 + 20).toFixed(1);
    temperatureInput.value = randomTemperature;
  });

  // 模拟自动获取湿度的函数，实际需连接相关传感器或API
  const autoHumidityButton = document.getElementById('autoHumidityButton');
  autoHumidityButton.addEventListener('click', function () {
    const humidityInput = document.getElementById('humidity');
    // 这里用随机数模拟自动获取的湿度，实际要替换为真实获取逻辑
    const randomHumidity = (Math.random() * 30 + 40).toFixed(1);
    humidityInput.value = randomHumidity;
  });

  // 模拟自动获取噪音水平的函数，实际需连接相关传感器或API
  const autoNoiseButton = document.getElementById('autoNoiseButton');
  autoNoiseButton.addEventListener('click', function () {
    const noiseInput = document.getElementById('noise-level');
    // 这里用随机数模拟自动获取的噪音水平，实际要替换为真实获取逻辑
    const randomNoise = (Math.random() * 30 + 30).toFixed(1);
    noiseInput.value = randomNoise;
  });

  // 模拟自动获取光照强度的函数，实际需连接相关传感器或API
  const autoLightButton = document.getElementById('autoLightButton');
  autoLightButton.addEventListener('click', function () {
    const lightInput = document.getElementById('light-intensity');
    // 这里用随机数模拟自动获取的光照强度，实际要替换为真实获取逻辑
    const randomLight = (Math.random() * 50 + 10).toFixed(1);
    lightInput.value = randomLight;
  });

  // 模拟自动获取电磁辐射强度的函数，实际需连接相关传感器或API
  const autoRadiationButton = document.getElementById('autoRadiationButton');
  autoRadiationButton.addEventListener('click', function () {
    const radiationInput = document.getElementById('electromagnetic-radiation');
    // 这里用随机数模拟自动获取的电磁辐射强度，实际要替换为真实获取逻辑
    const randomRadiation = (Math.random() * 10 + 5).toFixed(1);
    radiationInput.value = randomRadiation;
  });
});

// 多模型参数设置
// 获取保存按钮和重置按钮元素
const saveButton = document.getElementById('save-button');
const resetButton = document.getElementById('reset-button');

// 保存按钮点击事件处理
saveButton.addEventListener('click', function () {
  // 获取睡眠监测参数
  const samplingFrequency = document.getElementById('sampling-frequency').value;
  const electrodeImpedanceThreshold = document.getElementById('electrode-impedance-threshold').value;
  const wStageThreshold = document.getElementById('w-stage-threshold').value;
  const wStageDuration = document.getElementById('w-stage-duration').value;
  const n1StageThreshold = document.getElementById('n1-stage-threshold').value;
  const n1StageDuration = document.getElementById('n1-stage-duration').value;
  // 其他睡眠阶段参数可类似获取

  // 获取意识障碍筛查参数
  const filterParameters = document.getElementById('filter-parameters').value;
  const svmKernel = document.getElementById('svm-kernel').value;
  const svmPenalty = document.getElementById('svm-penalty').value;

  // 这里可以添加将参数发送到服务器或进行本地存储的逻辑
  console.log('保存的睡眠监测参数：');
  console.log('采样频率:', samplingFrequency);
  console.log('电极阻抗阈值:', electrodeImpedanceThreshold);
  console.log('清醒（W）阶段判断阈值:', wStageThreshold);
  console.log('清醒（W）阶段时长标准:', wStageDuration);
  console.log('浅睡（N1）阶段判断阈值:', n1StageThreshold);
  console.log('浅睡（N1）阶段时长标准:', n1StageDuration);
  console.log('保存的意识障碍筛查参数：');
  console.log('滤波参数:', filterParameters);
  console.log('SVM核函数类型:', svmKernel);
  console.log('SVM惩罚参数:', svmPenalty);

  // 简单提示保存成功
  alert('参数设置已保存');
});

// 重置按钮点击事件处理
resetButton.addEventListener('click', function () {
  // 重置睡眠监测参数输入框
  document.getElementById('sampling-frequency').value = '';
  document.getElementById('electrode-impedance-threshold').value = '';
  document.getElementById('w-stage-threshold').value = '';
  document.getElementById('w-stage-duration').value = '';
  document.getElementById('n1-stage-threshold').value = '';
  document.getElementById('n1-stage-duration').value = '';
  // 其他睡眠阶段参数输入框可类似重置

  // 重置意识障碍筛查参数输入框
  document.getElementById('filter-parameters').value = '';
  document.getElementById('svm-kernel').value = '';
  document.getElementById('svm-penalty').value = '';

  // 简单提示已重置
  alert('参数设置已重置');
});


// 数据处理模块
const browseButton = document.getElementById('browse-button');
const storagePathInput = document.getElementById('storage-path');
const folderInput = document.getElementById('folder-input');

browseButton.addEventListener('click', function () {
  folderInput.click();
});

folderInput.addEventListener('change', function (e) {
  const selectedFolder = e.target.files[0];
  if (selectedFolder) {
    storagePathInput.value = selectedFolder.path;
  }
});

const submitButton2 = document.getElementById('submit-button2');
const cancelButton2 = document.getElementById('cancel-button2');

submitButton2.addEventListener('click', function () {
  // 弹性时间窗口设置
  const windowSize = document.getElementById('window-size').value;
  const stepLength = document.getElementById('step-length').value;
  // 信号预处理设置
  const filterType = document.getElementById('filter-type').value;
  const passbandFrequency = document.getElementById('passband-frequency').value;
  const stopbandFrequency = document.getElementById('stopband-frequency').value;
  const amplificationFactor = document.getElementById('amplification-factor').value;
  const baselineCorrectionMethod = document.getElementById('baseline-correction-method').value;
  // 特征提取设置
  const featureTypes = Array.from(document.getElementById('feature-types').selectedOptions).map(option => option.value);
  const fftWindowFunction = document.getElementById('fft-window-function').value;
  const fftPoints = document.getElementById('fft-points').value;
  // 数据转换设置
  const dataEncoding = document.getElementById('data-encoding').value;
  const dataPrecision = document.getElementById('data-precision').value;
  // 分析模型相关设置
  const learningRate = document.getElementById('learning-rate').value;
  const epochs = document.getElementById('epochs').value;
  const batchSize = document.getElementById('batch-size').value;
  const normalizationMethod = document.getElementById('normalization-method').value;
  // 数据存储路径设置
  const storagePath = document.getElementById('storage-path').value;
  // 自动备份设置
  const backupInterval = document.getElementById('backup-interval').value;
  const backupMethod = document.getElementById('backup-method').value;

  console.log('弹性时间窗口大小:', windowSize);
  console.log('步长:', stepLength);
  console.log('滤波器类型:', filterType);
  console.log('通带频率:', passbandFrequency);
  console.log('阻带频率:', stopbandFrequency);
  console.log('信号放大倍数:', amplificationFactor);
  console.log('基线校正方式:', baselineCorrectionMethod);
  console.log('特征类型:', featureTypes);
  console.log('傅里叶变换窗函数类型:', fftWindowFunction);
  console.log('傅里叶变换点数:', fftPoints);
  console.log('数据编码方式:', dataEncoding);
  console.log('数据精度:', dataPrecision);
  console.log('学习率:', learningRate);
  console.log('迭代次数:', epochs);
  console.log('批量大小:', batchSize);
  console.log('归一化方式:', normalizationMethod);
  console.log('数据存储路径:', storagePath);
  console.log('自动备份时间间隔:', backupInterval);
  console.log('备份方式:', backupMethod);

  alert('数据处理相关设置已保存');
});

cancelButton2.addEventListener('click', function () {
  document.getElementById('window-size').value = '';
  document.getElementById('step-length').value = '';
  document.getElementById('filter-type').value = '';
  document.getElementById('passband-frequency').value = '';
  document.getElementById('stopband-frequency').value = '';
  document.getElementById('amplification-factor').value = '';
  document.getElementById('baseline-correction-method').value = '';
  document.getElementById('feature-types').selectedIndex = -1;
  document.getElementById('fft-window-function').value = '';
  document.getElementById('fft-points').value = '';
  document.getElementById('data-encoding').value = '';
  document.getElementById('data-precision').value = '';
  document.getElementById('learning-rate').value = '';
  document.getElementById('epochs').value = '';
  document.getElementById('batch-size').value = '';
  document.getElementById('normalization-method').value = '';
  document.getElementById('storage-path').value = '';
  document.getElementById('backup-interval').value = '';
  document.getElementById('backup-method').value = '';

  alert('设置已取消');
});