// 导入Cloudflare Workers的kv命名空间,自己判断是否导入，不导不影响使用，感觉手动导会清楚很多，就是一个数据库吧
//const { getAssetFromKV, mapRequestToAsset } = require('@cloudflare/kv-asset-handler');

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  // 处理请求并获得响应
  const response = await handleEvent(request);

  // 将网站输出内容发送到邮箱
  await sendEmail(response.body);

  // 返回响应
  return response;
}

async function handleEvent(request) {
  // 原来的代码部分，生成 JSON 数据
  
  const { headers } = request;
  const ip = headers.get('cf-connecting-ip') || '';
  const country = headers.get('cf-ipcountry') || '';
  const userAgent = headers.get('user-agent') || '';
  let data = {
    ip: ip,
    country: country,
    userAgent: userAgent
  };

  // ...

  // 返回带有 JSON 数据的响应，这样格式要清楚很多
  const formattedData = JSON.stringify(data, null, 2);
  return new Response(formattedData, {
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
  });
}

async function sendEmail(content) {
  // 使用电子邮件服务提供商的API发送电子邮件
  // 你需要替换以下内容为你的电子邮件服务提供商的API调用代码
  //sendEmailEndpoint是提供商的 API 文档中提供的URL
  //你需要将 sendEmailEndpoint 替换为你所使用的服务提供商的正确的 API 端点 URL
  //qq邮箱好像没有诶，推荐用谷歌邮箱的端点URL https://gmail.googleapis.com 要用别的自己改吧，我不想改了
  // 例如以下发送电子邮件的示例代码
  const sendAPIKey = 'YOUR_API_KEY';
  const sendEmailEndpoint = 'https://gmail.googleapis.com';

  const emailData = {
    personalizations: [
      {
        to: [
          {
            //改一下YOUR_EMAIL_ADDRESS
            email: 'YOUR_EMAIL_ADDRESS',
          },
        ],
        subject: 'Website Output',
      },
    ],
    from: {
      //也改一下
      email: 'SENDER_EMAIL_ADDRESS',
    },
    content: [
      {
        type: 'text/plain',
        value: content,
      },
    ],
  };
//数据转移
  await fetch(sendEmailEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sendAPIKey}`,
    },
    body: JSON.stringify(emailData),
  });
}
