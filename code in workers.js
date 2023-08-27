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

  // 格式化和排版 JSON 数据
  const formattedData = JSON.stringify(data, null, 2)

  return new Response(formattedData, {
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
  })
}
