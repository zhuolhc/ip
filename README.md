<!DOCTYPE html>
<html>
<body>
  <h1>Cloudflare - GET IP</h1>
  <p>Cloudflare Workers 是一个强大的工具，无需服务器，可用于获取访问网站的用户的 IP 地址(支持IPV4以及IPV6)和其他相关信息。通过添加事件监听器，每当触发事件时，它会调用 handleEvent 函数来处理该事件。该函数从请求的头部信息中提取用户的 IP 地址（cf-connecting-ip）、国家（cf-ipcountry）、用户代理（user-agent）和使用浏览器。这些信息将被组装成一个对象，然后转换为 JSON 格式并作为响应返回。此代码依赖于 Cloudflare 的头部信息，如果在非 Cloudflare 的环境中使用，可能无法正确获取这些信息。<a href="https://ip.zhuoc.link/">演示地址</a></p>新代码新增获取指定测试网址的上传下载速度，代码中以我的个人博客为例。<a href="https://ip-beta.zhuoc.link/">new code演示地址</a></p>
  
  <h2>Usage</h2>
  <ol>
    <li>创建一个 Cloudflare 账号，请点击链接 <a href="https://www.cloudflare.com">Cloudflare</a> 访问 Cloudflare 官网。</li>
    <li>在 Cloudflare 控制台中，点击左侧的 "Workers"，然后选择 "概述"，接着点击 "创建应用程序"，再选择 "创建 Workers"。为 Workers 指定一个名称，然后点击 "部署"。</li>
    <li>配置 Workers：选择 "快速编辑"，将代码替换为 Workers 中的代码。</li>
    <li>如果有域名，你可以将 URL 模式映射到 Workers，使 Workers 根据传入请求的路由执行，从而实现域名网站的查看，并且添加DNS，在这里不做演示。</li>
    <li>该项目目前还不完善，且没有UI界面，可作为网站的分支用于完善网站信息内容，请勿非法获取用户信息。</li>
  </ol>
</body>
</html>
