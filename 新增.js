addEventListener('fetch', event => {
  event.respondWith(handleEvent(event))
})

async function handleEvent(event) {
  const { request } = event
  const { headers } = request
  const ip = headers.get('cf-connecting-ip') || ''
  const country = headers.get('cf-ipcountry') || ''
  const userAgent = headers.get('user-agent') || ''

  let data = {
    ip: ip,
    country: country,
    userAgent: userAgent
  }

  // 检查代理标头
  const isProxy = headers.get('cf-visitor') !== null

  // 添加代理标识到数据中
  data.isProxy = isProxy

  // 判断代理走向
  let proxyRoute = ''
  if (isProxy) {
    const cfRay = headers.get('cf-ray')
    if (cfRay) {
      const rayParts = cfRay.split('-')
      if (rayParts.length > 1) {
        proxyRoute = rayParts[1]
      }
    }
  }

  // 添加代理走向到数据中
  data.proxyRoute = proxyRoute

  // 添加 TLS 信息
  const tlsVersion = headers.get('cf-tls-version')
  const tlsCipher = headers.get('cf-tls-cipher')

  data.tlsVersion = tlsVersion
  data.tlsCipher = tlsCipher
  
  const url = new URL(request.url);
  data.uri = url.pathname;
  data.method = request.method;

  // 获取当前时间并添加到数据中
  const currentTime = new Date().toLocaleString()
  data.currentTime = currentTime

  // 格式化和排版 JSON 数据
  const formattedData = JSON.stringify(data, null, 2)

  return new Response(formattedData, {
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
  })
}
