# DeepSeek 官网复刻 (DeepSeek Website Clone)

对 [deepseek.com](https://www.deepseek.com/) 首页的高保真静态复刻，使用纯 HTML / CSS / JavaScript 实现，无构建步骤、无外部依赖。布局、配色、文案、链接均与原站一致。

## 预览 / Preview

直接在浏览器中打开 `index.html`，或启动本地静态服务器：

```bash
python3 -m http.server 8000
# 然后访问 http://localhost:8000
```

## 页面 / Pages

主站（www.deepseek.com）共 4 个页面，全部复刻：

| 路径 | 说明 |
| --- | --- |
| `/` | 中文首页 |
| `/en/` | 英文首页 |
| `/transparency/` | 透明度中心（中文） |
| `/en/transparency/` | 透明度中心（英文） |
| `/chat/` | 聊天界面（chat.deepseek.com 视觉复刻） |
| `/platform/` | API 开放平台控制台（platform.deepseek.com 视觉复刻） |

> `chat.` / `platform.` 是带登录的纯客户端 SPA（服务端返回 202 空壳，无法抓取源码），`/chat/` 与 `/platform/` 为**高保真静态视觉复刻**，未接入后端 / 模型 / 计费。首页卡片与页脚已指向这两个本地页面，使克隆站自成一体。`api-docs.` 等文档站仍跳转真实地址。

## 文件结构 / Structure

| 文件 | 说明 |
| --- | --- |
| `index.html`, `en/index.html` | 中/英文首页：全屏 Hero（公告条 / Logo / 标语 / 双卡片）+ 页脚 |
| `transparency/index.html`, `en/transparency/index.html` | 透明度中心：暗色 Hero + 说明卡 + 模型概览列表 |
| `styles.css` | 样式，沿用原站 slate + branding(#4d6bfe) 配色，响应式 |
| `script.js` | 轻量交互（Hero 背景视差） |
| `logo.png` / `banner-background.webp` | 原站 Logo 与背景图 |
| `vercel.json` | cleanUrls + trailingSlash，匹配原站 URL 风格 |

## 还原要点 / Fidelity

- 全屏居中 Hero，使用原站背景图
- 左上角 Logo、右上角链接（API 文档 / 获取 App / English）
- 顶部公告：DeepSeek-V4 预览版本发布……
- 居中大 Logo + 标语「探索未至之境」
- 两张卡片：开始对话（→ chat.deepseek.com）/ API 开放平台（→ platform.deepseek.com）
- 页脚四栏（研究 / 产品 / 法务 & 安全 / 加入我们）+ 版权与备案信息，链接均指向真实地址

> 本项目仅用于学习与演示，与深度求索（DeepSeek）官方无关。Logo 及背景图版权归 DeepSeek 所有。
