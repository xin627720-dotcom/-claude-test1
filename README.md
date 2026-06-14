# DeepSeek 官网复刻 (DeepSeek Website Clone)

一个对 [deepseek.com](https://www.deepseek.com/) 首页的静态复刻，使用纯 HTML / CSS / JavaScript 实现，无构建步骤、无外部依赖。

## 预览 / Preview

直接在浏览器中打开 `index.html` 即可，或启动一个本地静态服务器：

```bash
python3 -m http.server 8000
# 然后访问 http://localhost:8000
```

## 文件结构 / Structure

| 文件 | 说明 |
| --- | --- |
| `index.html` | 页面结构：公告条、导航、Hero、模型、特性、CTA、页脚 |
| `styles.css` | 全部样式，响应式，CSS 变量主题 |
| `script.js` | 交互：公告关闭、移动端菜单、中英文切换、滚动阴影 |

## 功能 / Features

- 顶部公告横幅（可关闭）
- 粘性导航栏 + 移动端汉堡菜单
- 深色渐变 Hero 区，主标题「探索未至之境」
- 两个主入口卡片：开始对话 / API 平台
- 模型展示、产品特性、CTA 区块
- 多栏页脚（研究 / 产品 / 法律 / 加入我们）
- 中英文一键切换
- 完全响应式布局

> 本项目仅用于学习与演示，与深度求索（DeepSeek）官方无关。
