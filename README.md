# DeepSeek 官网复刻 (DeepSeek Website Clone)

对 [deepseek.com](https://www.deepseek.com/) 首页的高保真静态复刻，使用纯 HTML / CSS / JavaScript 实现，无构建步骤、无外部依赖。布局、配色、文案、链接均与原站一致。

## 预览 / Preview

直接在浏览器中打开 `index.html`，或启动本地静态服务器：

```bash
python3 -m http.server 8000
# 然后访问 http://localhost:8000
```

## 文件结构 / Structure

| 文件 | 说明 |
| --- | --- |
| `index.html` | 页面结构：全屏 Hero（公告条 / Logo / 标语 / 双卡片）+ 页脚 |
| `styles.css` | 样式，沿用原站 slate + branding(#4d6bfe) 配色，响应式 |
| `script.js` | 轻量交互（Hero 背景视差） |
| `logo.png` | 原站 DeepSeek Logo |
| `banner-background.webp` | 原站首页背景图 |

## 还原要点 / Fidelity

- 全屏居中 Hero，使用原站背景图
- 左上角 Logo、右上角链接（API 文档 / 获取 App / English）
- 顶部公告：DeepSeek-V4 预览版本发布……
- 居中大 Logo + 标语「探索未至之境」
- 两张卡片：开始对话（→ chat.deepseek.com）/ API 开放平台（→ platform.deepseek.com）
- 页脚四栏（研究 / 产品 / 法务 & 安全 / 加入我们）+ 版权与备案信息，链接均指向真实地址

> 本项目仅用于学习与演示，与深度求索（DeepSeek）官方无关。Logo 及背景图版权归 DeepSeek 所有。
