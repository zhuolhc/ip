<!DOCTYPE html>
<html>
<head>
  <title>Cloudflare - GET IP</title>
</head>
<body>
  <h1>Cloudflare - GET IP</h1>
  <p>Cloudflare Workers is a powerful tool that can be used to retrieve the IP address and other related information of the users accessing your website. By adding an event listener, it calls the handleEvent function to process the event. The function extracts the user's IP address (cf-connecting-ip), country (cf-ipcountry), and user agent (user-agent) from the request headers. These pieces of information are then assembled into an object, converted to JSON format, and returned as a response. Please note that this code relies on Cloudflare headers and may not work correctly in a non-Cloudflare environment.</p>
  
  <h2>Usage</h2>
  <ol>
    <li>Create a Cloudflare account by visiting the <a href="https://www.cloudflare.com">Cloudflare website</a>.</li>
    <li>In the Cloudflare dashboard, click on "Workers" in the left sidebar, then select "Overview" and click on "Create Application". Choose "Create Workers". Provide a name for your Workers and click on "Deploy".</li>
    <li>Configure Workers: Select "Quick Edit" and replace the code with the code from your Workers.</li>
    <li>If you have a domain, you can map URL patterns to your Workers to execute based on incoming requests, allowing you to view the website using the domain.</li>
    <li>Please note that this project is currently incomplete and does not have a user interface. It can be used as a branch of a website to enhance website information content.</li>
  </ol>
</body>
</html>
