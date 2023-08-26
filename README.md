<!DOCTYPE html>
<html>
<body>
  <h1>Cloudflare workers - GET IP</h1>
  <p>Cloudflare Workers 是一个强大的工具，无需服务器，可用于获取访问网站的用户的 IP 地址(支持IPV4以及IPV6)和其他相关信息。通过添加事件监听器，每当触发事件时，它会调用 handleEvent 函数来处理该事件。该函数从请求的头部信息中提取用户的 IP 地址（cf-connecting-ip）、国家（cf-ipcountry）、用户代理（user-agent）、使用浏览器和是否开启了代理。这些信息将被组装成一个对象，然后转换为 JSON 格式并作为响应返回。此代码依赖于 Cloudflare 的头部信息，如果在非 Cloudflare 的环境中使用，可能无法正确获取这些信息。<a href="https://ip.zhuoc.link/">演示地址</a></p>新代码新增获取指定测试网址的瞬时上传下载速度，可以通过手动刷新进行速度的大致测算，新代码中测得速度以我的个人博客为例。<a href="https://ip.zhuoc.top/">演示地址</a></p>新新代码将网站输出内容作为电子邮件正文发送到指定的邮箱地址,暂无演示地址。</p>
  
  <h2>Usage</h2>
  <ol>
    <li>创建一个 Cloudflare 账号，请点击链接 <a href="https://www.cloudflare.com">Cloudflare</a> 访问 Cloudflare 官网。</li>
    <li>在 Cloudflare 控制台中，点击左侧的 "Workers"，然后选择 "概述"，接着点击 "创建应用程序"，再选择 "创建 Workers"。为 Workers 指定一个名称，然后点击 "部署"。</li>
    <li>配置 Workers：选择 "快速编辑"，将代码替换为 <a href="https://github.com/zhuolhc/cloudflare-workers-GET-IP/blob/main/code%20in%20workers/">code in workers</a> / <a href="https://github.com/zhuolhc/cloudflare-workers-GET-IP/blob/main/new%20code%20in%20workers/">new code in workers</a> / <a href="https://github.com/zhuolhc/cloudflare-workers-GET-IP/blob/main/new%20new%20code%20in%20workers">new new code in workers</a>中的代码。</li>
    <li>如果有域名，你可以将 URL 模式映射到 Workers，使 Workers 根据传入请求的路由执行，从而实现域名网站的查看，并且添加DNS，A类型即可，ip随意，开启代理。</li>
    <li>new new code in workers 中确保在Cloudflare Workers环境中配置好电子邮件服务提供商的API密钥和其他必要的配置。由于qq邮箱好像没有官方API端点URL，所以推荐使用gmail,Gmail 的 API 端点 URL 是 "https://gmail.googleapis.com ，代码中已经添加好了，可自行修改。要开通<a href="https://console.cloud.google.com/ ">谷歌云</a>免费获取API_KEY，具体操作方法见<a href="https://developers.google.com/gmail/api/quickstart/js?hl=zh_CN">官方文档</a>，同时需要有接收的邮箱（不用API_KEY）,将两个邮箱和API_KEY分别填入方可。
    <li>该项目目前尚不完善，可作为网站的分支用于完善网站信息内容，请勿非法获取用户信息。</li>
  </ol>
  <h3>LICENCE</h3>
  本项目基于<a href="https://opensource.org/license/mit/">MIT</a>
</body>
</html>

