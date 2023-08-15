# cloudflare- GET- IP
Cloudflare Workers 是一个很好的工具，可以用来获取用户访问网站的 IP 地址和其他相关信息。
每个请求上添加一个事件监听器，当事件触发时，它会调用 handleEvent 函数处理这个事件。
这个函数会从请求的头部信息中获取用户的 IP 地址 (cf-connecting-ip)，国家 (cf-ipcountry)，和用户代理 (user-agent)。
这些信息会被放入一个对象中，然后这个对象会被转换为 JSON 格式并作为响应返回。
