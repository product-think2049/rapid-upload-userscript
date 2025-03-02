若喜欢该脚本可前往 <img src="https://static.afdiancdn.com/favicon.ico" width='16'>[爱发电](https://afdian.net/@mengzonefire) 支持作者

## 近期通知

- 22.10.24: 转存若提示 "<span style="color: red">转存失败-v1接口(#2)</span>" 请更新脚本2.4.4版本

- 22.6.10: 由[XTsat](https://github.com/XTsat)完成了文档页面重构和美化: **秒传脚本文档v2**: [载点1](https://mengzonefire.code.misakanet.cn/rapid-upload-userscript-doc/) [载点2](https://xtsat.github.io/rapid-upload-userscript-doc)

- 22.5.23: (<span style="color: red">重要</span>) ~~百度废弃了一个旧接口导致 生成秒传 报错 <span style="color: red">未知错误(#401)</span>, 2.2.7版本已修复该问题, 有需要请务必更新~~ (再测试了一下发现接口又修好了:-(

- 21.10.16: 已将完整的秒传转存功能移植到 **秒传网页版工具**: [载点1](https://rapidacg.gmgard.moe/)(可能不是最新版) [载点2](https://mengzonefire.github.io/baidupan-rapidupload) [载点3](https://mengzonefire.code.misakanet.cn/baidupan-rapidupload)</br>\* 网页版无需安装插件, 点开即用, <span style="color: red;">支持所有平台</span>, 推荐无法安装插件的用户使用, 工具源码托管在 <img src="https://github.githubassets.com/favicons/favicon.png" width='16'>[GitHub](https://github.com/mengzonefire/baidupan-rapidupload), 欢迎搭建分流

## 相关教程

- 安装教程: [载点1](https://mengzonefire.code.misakanet.cn/rapid-upload-userscript-doc/document/Install/About) [载点2](https://xtsat.github.io/rapid-upload-userscript-doc/document/Install/About): 适用于<span style="color: red;"> 不能正常使用 </span>或<span style="color: red;"> 不会安装 </span>此脚本的用户 [Win/安卓/IOS/MAC]

- 错误码文档: [载点1](https://mengzonefire.code.misakanet.cn/rapid-upload-userscript-doc/document/FAQ/错误代码) [载点2](https://xtsat.github.io/rapid-upload-userscript-doc/document/FAQ/错误代码): 适用于解决秒传 生成&分享 过程中遇到问题, 例如 秒传未生效 / md5获取失败 / 文件和谐

## 常见问题

1. 此脚本只在度盘主页运行: https://pan.baidu.com, 目前不兼容safari, macOS用户请使用mac版Chrome运行脚本

2. 安装时请使用最新版本的油猴插件, 脚本<span style="color: red;">不兼容</span>版本低于4.9的油猴插件, 尽量参考上方提供的 **安装教程**

3. 若使用脚本时 <span style="color: red;">秒传按钮 或 转存窗口 不显示、页面卡死无法操作</span> 等, 尝试关闭广告拦截插件和同时运行的其他插件脚本 
   * (**排查冲突**) 若无效再根据 **5.** 反馈

4. 下载转存的文件显示 "<span style="color: red;">下载失败1252017</span>" 等同**包含违规...**, 即文件已被和谐, 不允许下载

5. 若遇到其他问题, 请前往 [反馈页](https://greasyfork.org/zh-CN/scripts/424574/feedback) 反馈: 1.浏览器版本 2.油猴插件版本 3.出现问题时按F12->打开控制台(console)->截图

## 脚本说明

- 秒传链接是一种通过模拟网盘自带秒传功能实现的文件分享方式(**非官方**), 其优点是可以**永久**保证分享有效性(在官方不限制秒传功能前提下), 且链接内不包含账号信息, 注意, 使用秒传链接分享文件**并没有**任何加速下载的效果.

- 参考了初版秒传脚本 [仓库用度盘投稿助手](https://greasyfork.org/zh-CN/scripts/3285) 进行开发, 脚本源码托管在 <img src="https://github.githubassets.com/favicons/favicon.png" width='16'>[GitHub](https://github.com/mengzonefire/rapid-upload-userscript)

- 支持批量提取(**换行分隔**), 支持 url 传参(**一键秒传**), 格式：`https://pan.baidu.com/#bdlink=[参数]`, [参数]为 base64 加密过的任意格式链接 (支持批量), 访问该链接后脚本会自动弹出秒传窗口, 并将[参数]base64解密, 添加到秒传输入框内

- 支持新版度盘页面, 支持生成秒传, 网盘页面内选中 文件/文件夹后 即可看到秒传生成按钮

![](https://pic.rmb.bdstatic.com/bjh/f0cd38fd5bf474a1ca73afe5ac767ebf.png)

![](https://pic.rmb.bdstatic.com/bjh/1cb5384f4b7cd3fc5a07b42ef45bfe93.png)

- 支持输入文件路径生成秒传, 在秒传输入框中输入gen即可进入生成页面

- 支持设置主题样式, 在秒传输入框中输入set即可进入设置页面

## 常见秒传格式

<details>
<summary>点击展开</summary>

<ul><li><p>梦姬标准/标准码: D5AABEFC3290F7A3C09912228B136D0C#821A9F0D27FCD19C80474D2140ED2D85#6467659#test.exe</p></li><li><p>PanDL格式: bdpan://dGVzdC5leGV8NjQ2NzY1OXxENUFBQkVGQzMyOTBGN0EzQzA5OTEyMjI4QjEzNkQwQ3w4MjFBOUYwRDI3RkNEMTlDODA0NzREMjE0MEVEMkQ4NQ==</p></li><li><p>PCS-GO格式: BaiduPCS-Go rapidupload -length=6467659 -md5=D5AABEFC3290F7A3C09912228B136D0C -slicemd5=821A9F0D27FCD19C80474D2140ED2D85 "/test.exe"</p></li><li><p>游侠格式(BDLINK......): BDLINKQkRGUwAHAAAA0/AgXQEAAABvU6INa3SryWsF1pGpw7ALjjjB7lz4B3zYkhccg7C38ToAAABXAG8AcgBsAGQALgBXAGEAcgAuAFoALgAyADAAMQAzAC4AVQBuAHIAYQB0AGUAZAAuAEMAdQB0</p></li></ul>

</details>

## 待更新

1. ~~不少人反馈依赖加载失败, 找找更好的cdn替换unpkg~~(打算放弃使用cdn并内置所有依赖)(已完成)

2. [给页面中的秒传添加一键秒传超链接](https://greasyfork.org/zh-CN/scripts/424574/discussions/127485) (作为独立脚本发布和维护)

3. ~~尝试通过混合模式生成解决 “极速生成” 功能 生成部分md5错误的秒传的问题~~ (已完成)

4. ~~尝试解决秒传转存v2接口在批量连续转存文件时出现转存结果错误的问题 (秒传正确但转存显示秒传未生效, 单独转存该文件又能正常转存)~~ (已完成)
   * PS: “极速生成” 得到的简化版秒传只能通过v2接口转存

<details>
<summary>已完成 [点击展开]</summary>
<ol><li>支持 新版度盘页面 下的 "生成秒传" 功能 (完成)</li><li>支持 <a href="https://www.aliyundrive.com/drive/">阿里云盘</a> 的秒传提取&生成 (废弃, 阿里官方限制了秒传接口)</li><li>支持 <a href="https://pan.baidu.com/disk/main?from=oldversion#/index">新版度盘页面</a> (完成)</li><li>修复设置为非默认主题时, 窗口内会出现警告标识的问题 (完成, 实际为主题包不适配旧版 sweetalert2)</li><li>cdn.jsdelivr.net抽风有点严重, 尝试添加替代cdn (完成)</li><li>转存完成后的提示框添加转存成功列表(使用折叠框隐藏)(完成)</li></ol>
</details>

## 秒传链接的获取方式

1. 使用秒传脚本自带的生成功能, 选中文件/文件夹, 再点击 "生成秒传"

2. 网页版秒传生成工具: [载点1](https://rapidacg.gmgard.moe/gen.html) [载点2](https://mengzonefire.github.io/baidupan-rapidupload/gen.html) [载点3](https://mengzonefire.code.misakanet.cn/baidupan-rapidupload/gen.html)

3. 本地秒传生成工具: [蓝奏云](https://wwe.lanzoui.com/b01u0yqvi) 密码:2233

\*需要任意账号的网盘中存有至少一份文件才能保证秒传链接的有效性