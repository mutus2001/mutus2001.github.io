"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[2657],{2789:(i,s)=>{s.A=(i,s)=>{const a=i.__vccOpts||i;for(const[i,n]of s)a[i]=n;return a}},9540:(i,s,a)=>{a.r(s),a.d(s,{comp:()=>t,data:()=>h});var n=a(7829);const e=[(0,n.Fv)('<p>LearnData 使用的是 Waline 评论插件，部署简单，有后端管理。评论插件推荐次序为 Waline &gt; Valine &gt; giscus &gt; Gitalk &gt; Gitter。</p><h2 id="评论插件" tabindex="-1"><a class="header-anchor" href="#评论插件"><span>评论插件</span></a></h2><ul><li><a href="https://waline.js.org/guide/get-started.html" target="_blank" rel="noopener noreferrer">Waline</a>：基于 Valine 衍生的简洁、安全的评论系统，部署到 Vercel，可匿名互动，导出评论内容，支持文章表情互动。</li><li><a href="https://github.com/xCss/Valine" target="_blank" rel="noopener noreferrer">Valine</a>：快速、简洁且高效的无后端评论系统，可匿名互动。</li><li><a href="https://github.com/giscus/giscus" target="_blank" rel="noopener noreferrer">giscus</a>：基于 github discussion，近似于论坛。查看 <a href="https://blog.csdn.net/duninet/article/details/125280107" target="_blank" rel="noopener noreferrer">配置方法</a>。</li><li><a href="https://github.com/gitalk/gitalk" target="_blank" rel="noopener noreferrer">Gitalk</a>：基于 github commit，需配置独立库用于存储评论。</li><li><a href="https://gitter.im/" target="_blank" rel="noopener noreferrer">Gitter</a>：要登录的公共聊天室。样例如：<a href="https://boardgame.io/documentation/#/" target="_blank" rel="noopener noreferrer">boardgame</a>，<a href="https://itchef.github.io/regauge/#/" target="_blank" rel="noopener noreferrer">regauge</a>。</li></ul><h2 id="waline" tabindex="-1"><a class="header-anchor" href="#waline"><span>Waline</span></a></h2><p>Waline 支持 Akismet 反垃圾评论和免注册留言，但匿名留言会带来安全隐患。建议开启评论通知来避免出现极端情况。Waline 的评论通知支持多种方式，包括 QQ、微信、邮件等。对于评论的回复，仅支持邮件通知。</p><p>Vercel 项目中选择「Overview」&gt;「Settings」&gt;「Environment Variables」，然后按照 <a href="https://waline.js.org/guide/server/notification.html" target="_blank" rel="noopener noreferrer">Waline 评论通知</a>配置所需环境变量。如果需要 Webhook 等更多通知方式，则查看 <a href="https://waline.js.org/reference/server.html" target="_blank" rel="noopener noreferrer">Waline 服务端配置</a>。配置成功后，选择「Overview」&gt;「Deployments」，进行 Redeploy，重新部署后环境变量和评论通知方会生效。目前 <code>*.vercel.app</code> 域名已经被 DNS 污染，会出现「无法加载评论」，国内使用建议绑定自定义域名，域名对备案暂无硬性要求。</p><h3 id="手动部署" tabindex="-1"><a class="header-anchor" href="#手动部署"><span>手动部署</span></a></h3><p>请注意，Vercel 和 LeanCloud 有额度限制。如果你的网站日访客超过一千人次，建议使用自行部署的方案。以下是我的部署步骤：</p><ol><li><p>新建数据库，并导入 <a href="https://github.com/walinejs/waline/blob/main/assets/waline.sql" target="_blank" rel="noopener noreferrer">waline.sql</a> 以完成表和表结构的创建，之后在项目中配置如下环境变量。<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p></li><li><p>配置必要的环境变量，可添加于 /etc/environment。配置完成后，需要重启项目让环境变量生效。并注意最后一行需保留空行。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">MYSQL_DB</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;&quot;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">MYSQL_USER</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;&quot;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">MYSQL_PASSWORD</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>部署 Waline 服务端，使用 forever 让其持久化运行。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 切换到站点路径</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /www/wwwroot/node/waline</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 安装 waline 前端包</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> @waline/vercel</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --dev</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 运行模块内的 vanilla.js 文件</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">node</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> node_modules/@waline/vercel/vanilla.js</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 使用 forever 持久化运行程序</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> forever</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -g</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">forever</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> app.js</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  #启动应用</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">forever</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> stop</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> app.js</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  #关闭应用</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">forever</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> restartall</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  #重启所有应用</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 持久化运行 Waline</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">forever</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /www/wwwroot/node/waline/node_modules/@waline/vercel/vanilla.js</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 更改 package.json 版本号，升级并重启</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">forever</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> stop</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /www/wwwroot/node/waline/node_modules/@waline/vercel/vanilla.js</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /www/wwwroot/node/waline</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">forever</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /www/wwwroot/node/waline/node_modules/@waline/vercel/vanilla.js</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>打开网页管理后台，通过导入事先备份的 JSON 文件来还原数据。</p></li></ol><p>新手可以使用宝塔面板的 Node.js 版本管理器来部署 Node.js。安装后，受限更新版本列表，然后选择要使用的 Node 版本，将其设置为命令行版本，接着配置服务器的环境变量。虽然宝塔可以管理 Node 项目，但容易出现错误。处理流程为进入「网站」&gt;「Node 项目」&gt;「添加 Node 项目」，将启动选项设置为模块内的 vanilla.js 文件，将项目端口设置为 8360，并设置绑定域名。</p><p>注意：如果你选择手动部署反向代理服务器，请务必使用 Waline 官方提供的 Nginx 配置文件，否则可能会导致<strong>无法登录后台</strong>，或是<strong>版本升级后仍然提示升级</strong>等问题。如果仍然有问题，请检查是否使用 SSH 直连服务器，而非宝塔自带网页终端。宝塔网页终端执行的命令有几率出错，一定要使用正常的 SSH 链接。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">server</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  listen</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 80</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  listen</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 443</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ssl</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> http2</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  server_name</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> waline.newzone.top</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  root</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /www/wwwroot/waline</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">$server_port</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> !</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">~</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 443</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">){</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    rewrite</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ^</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">/.*</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)$ </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">https://</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">$host</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">$1</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> permanent</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  }</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  # SSL setting</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  ssl_certificate</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    /www/server/panel/vhost/cert/waline/fullchain.pem</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  ssl_certificate_key</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    /www/server/panel/vhost/cert/waline/privkey.pem</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  ssl_protocols</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> TLSv1.1</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> TLSv1.2</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> TLSv1.3</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  ssl_ciphers</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> EECDH+CHACHA20:EECDH+CHACHA20-draft:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  ssl_prefer_server_ciphers</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> on</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  ssl_session_cache</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> shared:SSL:10m</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  ssl_session_timeout</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 10m</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  add_header</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Strict-Transport-Security</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;max-age=31536000&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  # proxy to 8360</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  location</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> {</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    proxy_pass</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> http://127.0.0.1:8360</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    proxy_set_header</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Host</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> $host</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    proxy_set_header</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> X-Real-IP</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> $remote_addr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    proxy_set_header</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> X-Forwarded-For</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> $proxy_add_x_forwarded_for</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    proxy_set_header</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> X-Forwarded-Proto</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> $scheme</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    proxy_set_header</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> REMOTE-HOST</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> $remote_addr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    add_header</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> X-Cache</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> $upstream_cache_status</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    # cache</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    add_header</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Cache-Control</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> no-cache</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    expires</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 12h</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="导入时间处理" tabindex="-1"><a class="header-anchor" href="#导入时间处理"><span>导入时间处理</span></a></h2><p>如果 Waline 数据导入还原后，评论发布时间被重置为当前时间，则说明时间格式不兼容。以下以 LeanCloud 转 MySQL 为例：</p><ol><li><p><code>2023-03-24T17:27:28.121Z</code> 这个时间戳中的格式 &quot;T&quot; 和 &quot;Z&quot; 不被 MySQL 支持，要将 &quot;T&quot; 替换为空格并将 &quot;Z&quot; 删除。我写了个<a href="https://web-platform-dzhkey.stackblitz.io" target="_blank" rel="noopener noreferrer">网页工具</a>处理时间格式替换。</p></li><li><p>提取数据中的 Comment、Counter 和 Users，格式为 <code>[{},{}……,{}]</code>，依次复制到 <a href="https://www.convertjson.com/json-to-sql.htm#" target="_blank" rel="noopener noreferrer">json2sql</a> 进行操作。</p></li><li><p>在 json2sql 页面中，点击按钮「Format JSON」，然后按截图勾选「Still not happy」「Enclose field names」「Backtick (<code>name</code>)」，取消勾选第一个值的 key。同时，取消勾选 objectId 的「Include」，该项将不会导入数据库。</p><figure><img src="https://img.newzone.top/2023-03-24-16-52-57.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>将「Schema.Table or View Name」依次设为「`wl_Comment`」「`wl_Counter`」「`wl_Users`」，取消勾选「Create Table/View」。</p></li><li><p>在 Step 3: Generate output 下点击按钮「JSON TO SQL Insert」，然后点击复制按钮。</p></li><li><p>进入 phpMyAdmin 数据库后台，选中要操作的表（如 wl_Comment），点击右侧的 SQL 按钮运行 SQL 查询，将复制的内容粘贴到此，并点击执行。若无报错，则说明数据导入正常。</p></li></ol><p>处理后时间可以正常导入，但由于 id 结构不同，旧的评论回复将失去联系。</p><h2 id="gitalk" tabindex="-1"><a class="header-anchor" href="#gitalk"><span>Gitalk</span></a></h2><p>Gitalk 是轻量化的评论组件，用户必须登录 github 才能评论，适合项目类使用。</p><p><code>https://github.com/settings/developers</code> 页面管理已建的应用，获取 Client ID 和 Client secrets，修改应用链接。<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup></p><p>将以下代码复制粘贴至 docsify 页面，即可启动 Gitalk：</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">link</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> rel</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;stylesheet&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-y/gitalk/1.7.2/gitalk.min.css&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-y/docsify/4.12.2/plugins/gitalk.min.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-y/gitalk/1.7.2/gitalk.min.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    /* 使用下面的 Javascript 代码生成 gitalk 插件 */</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> gitalk</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> Gitalk</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        clientID</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;2f3da234d27ed9a7c290&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        clientSecret</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;d64c45594858477fff0c234c3ed3947a53b0a9ac&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        repo</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;docsifytalk&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,        </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//仓库名称 (GitHub repo)</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        owner</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;rockbenben&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,        </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//仓库拥有者 (GitHub repo owner)</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        admin</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;rockbenben&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">],      </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//仓库所有者和协作者。（对此存储库具有写访问权的用户）</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">        // id: location.pathname,   // Ensure uniqueness and length less than 50</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        distractionFreeMode</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // Facebook-like distraction free mode</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    })</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Gitalk 缺点：</p><ul><li>每次有新页面时，都需要登录 github 初始化评论区。</li><li>域名不能改变，Homepage URL 和 Authorization callback URL 需与你的 Gitalk 页面一致，否则页面会报错，提示初始化，无法登录 github。</li></ul><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p><a href="https://waline.js.org/guide/database.html#mysql" target="_blank" rel="noopener noreferrer">Waline 多数据库服务支持</a> <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li><li id="footnote2" class="footnote-item"><p><a href="https://blog.csdn.net/qq_39052513/article/details/108291272" target="_blank" rel="noopener noreferrer">超 Nice 的评论组件 —— Gitalk</a> <a href="#footnote-ref2" class="footnote-backref">↩︎</a></p></li></ol></section>',25)],l={},t=(0,a(2789).A)(l,[["render",function(i,s){return(0,n.uX)(),(0,n.CE)("div",null,e)}]]),h=JSON.parse('{"path":"/web/Comments.html","title":"评论插件","lang":"zh-CN","frontmatter":{"article":false,"title":"评论插件","icon":"fa-solid fa-comment-dots","order":3,"description":"LearnData 使用的是 Waline 评论插件，部署简单，有后端管理。评论插件推荐次序为 Waline > Valine > giscus > Gitalk > Gitter。 评论插件 Waline：基于 Valine 衍生的简洁、安全的评论系统，部署到 Vercel，可匿名互动，导出评论内容，支持文章表情互动。 Valine：快速、简洁且高效...","head":[["meta",{"property":"og:url","content":"https://newzone.top/web/Comments.html"}],["meta",{"property":"og:site_name","content":"LearnData 开源笔记"}],["meta",{"property":"og:title","content":"评论插件"}],["meta",{"property":"og:description","content":"LearnData 使用的是 Waline 评论插件，部署简单，有后端管理。评论插件推荐次序为 Waline > Valine > giscus > Gitalk > Gitter。 评论插件 Waline：基于 Valine 衍生的简洁、安全的评论系统，部署到 Vercel，可匿名互动，导出评论内容，支持文章表情互动。 Valine：快速、简洁且高效..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:image","content":"https://img.newzone.top/2023-03-24-16-52-57.png?imageMogr2/format/webp"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-17T08:07:21.000Z"}],["meta",{"property":"article:author","content":"LearnData"}],["meta",{"property":"article:modified_time","content":"2024-08-17T08:07:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"评论插件\\",\\"description\\":\\"LearnData 使用的是 Waline 评论插件，部署简单，有后端管理。评论插件推荐次序为 Waline > Valine > giscus > Gitalk > Gitter。 评论插件 Waline：基于 Valine 衍生的简洁、安全的评论系统，部署到 Vercel，可匿名互动，导出评论内容，支持文章表情互动。 Valine：快速、简洁且高效...\\"}"]]},"headers":[{"level":2,"title":"评论插件","slug":"评论插件","link":"#评论插件","children":[]},{"level":2,"title":"Waline","slug":"waline","link":"#waline","children":[{"level":3,"title":"手动部署","slug":"手动部署","link":"#手动部署","children":[]}]},{"level":2,"title":"导入时间处理","slug":"导入时间处理","link":"#导入时间处理","children":[]},{"level":2,"title":"Gitalk","slug":"gitalk","link":"#gitalk","children":[]}],"git":{"createdTime":1723882041000,"updatedTime":1723882041000,"contributors":[{"name":"mutus2001","email":"mutus.dev@gmail.com","commits":1}]},"readingTime":{"minutes":5.4,"words":1620},"filePathRelative":"web/Comments.md","localizedDate":"2024年8月17日","excerpt":"<p>LearnData 使用的是 Waline 评论插件，部署简单，有后端管理。评论插件推荐次序为 Waline &gt; Valine &gt; giscus &gt; Gitalk &gt; Gitter。</p>\\n<h2>评论插件</h2>\\n<ul>\\n<li><a href=\\"https://waline.js.org/guide/get-started.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Waline</a>：基于 Valine 衍生的简洁、安全的评论系统，部署到 Vercel，可匿名互动，导出评论内容，支持文章表情互动。</li>\\n<li><a href=\\"https://github.com/xCss/Valine\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Valine</a>：快速、简洁且高效的无后端评论系统，可匿名互动。</li>\\n<li><a href=\\"https://github.com/giscus/giscus\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">giscus</a>：基于 github discussion，近似于论坛。查看 <a href=\\"https://blog.csdn.net/duninet/article/details/125280107\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">配置方法</a>。</li>\\n<li><a href=\\"https://github.com/gitalk/gitalk\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Gitalk</a>：基于 github commit，需配置独立库用于存储评论。</li>\\n<li><a href=\\"https://gitter.im/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Gitter</a>：要登录的公共聊天室。样例如：<a href=\\"https://boardgame.io/documentation/#/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">boardgame</a>，<a href=\\"https://itchef.github.io/regauge/#/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">regauge</a>。</li>\\n</ul>","autoDesc":true}')}}]);