addEventListener('fetch', event => {
  event.respondWith(handleEvent(event));
});

async function handleEvent(event) {
  const { request } = event;
  const { headers } = request;
  const ip = headers.get('cf-connecting-ip') || '';
  const country = headers.get('cf-ipcountry') || '';
  const userAgent = headers.get('user-agent') || '';

  let data = {
    ip: ip,
    country: country,
    userAgent: userAgent
  };

  // 测试用户网络状况的上传下载时间
  const { uploadTime, downloadTime } = await testNetworkSpeed();
  data.uploadTime = uploadTime;
  data.downloadTime = downloadTime;

  const responseData = JSON.stringify(data, null, 2); // 使用两个空格缩进格式化输出

  return new Response(responseData, {
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
  });
}

async function testNetworkSpeed() {
  const testURL = 'https://blog.zhuoc.link'; // 替换为你的测试 URL，我以我的个人博客为例

  // 发起上传和下载测试请求
  const startTime = performance.now();
  await fetch(testURL, { method: 'POST', body: 'test' });
  const uploadTime = performance.now() - startTime;

  const downloadStartTime = performance.now();
  await fetch(testURL);
  const downloadTime = performance.now() - downloadStartTime;

  // 转换单位为毫秒（ms）
  const uploadTimeInMs = uploadTime.toFixed(2);
  const downloadTimeInMs = downloadTime.toFixed(2);

  // 转换单位为秒（s）
  const uploadTimeInS = (uploadTime / 1000).toFixed(2);
  const downloadTimeInS = (downloadTime / 1000).toFixed(2);

  return {
    uploadTime: {
      ms: uploadTimeInMs,
      s: uploadTimeInS
    },
    downloadTime: {
      ms: downloadTimeInMs,
      s: downloadTimeInS
    }
  };
}
