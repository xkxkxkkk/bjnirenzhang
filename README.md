# 泥人张 · 彩塑艺术网站

一个以东方美学为基调的非物质文化遗产展示网站，参照美术馆级别的呈现方式。

## 🚀 快速启动

### 前置要求
- Node.js 18+ （推荐 LTS 版本）
- npm 9+

### 安装与运行

```bash
# 1. 进入项目目录
cd nirenzhang

# 2. 安装依赖
npm install

# 3. 启动开发服务器
npm run dev
```

浏览器访问 **http://localhost:5173** 即可预览。

---

## 📁 项目结构

```
nirenzhang/
├── index.html              # HTML 入口
├── vite.config.js          # Vite 配置
├── package.json
└── src/
    ├── main.jsx            # React 根入口
    ├── App.jsx             # 路由配置
    ├── data.js             # 作品 & 时间轴数据
    ├── styles/
    │   └── global.css      # 全局设计系统（CSS 变量、基础样式）
    ├── components/
    │   ├── Nav.jsx/css     # 顶部导航（支持滚动变色 & 移动端）
    │   └── FadeIn.jsx/css  # 滚动渐入动效组件
    └── pages/
        ├── Home.jsx/css        # 首页（英雄轮播 + 精选 + 工艺 + 统计）
        ├── Gallery.jsx/css     # 作品馆（网格 + 分类筛选）
        ├── ArtworkDetail.jsx/css  # 作品详情（大图 + 赏析）
        ├── Heritage.jsx/css    # 传承志（传人 + 时间轴）
        └── Visit.jsx/css       # 到访（地图 + 时间 + 票价）
```

---

## 🎨 设计系统

### 颜色
| 变量 | 色值 | 用途 |
|------|------|------|
| `--ink-deep` | `#0d0b08` | 主背景（深墨色）|
| `--gold-bright` | `#d4a843` | 主强调色（金色）|
| `--paper-warm` | `#f5f0e8` | 主文字（纸色）|
| `--vermillion` | `#c0392b` | 朱砂红（点缀）|

### 字体
- **标题**：ZCOOL XiaoWei（zcool小薇）/ Noto Serif SC
- **正文**：Noto Sans SC
- 均通过 Google Fonts 加载，需联网

---

## 🔧 定制开发

### 替换真实作品图片
编辑 `src/data.js`，将 `image` 和 `thumb` 字段替换为真实作品的图片路径：
```js
image: "/assets/works/yuanwengdeli-full.jpg",   // 大图（800px+）
thumb: "/assets/works/yuanwengdeli-thumb.jpg",  // 缩略图（400px）
```

### 嵌入真实地图
在 `src/pages/Visit.jsx` 中，将 `.visit__map-placeholder` 区域替换为：
```jsx
<iframe 
  src="https://uri.amap.com/marker?..." 
  width="100%" height="100%" 
  style={{border:'none'}} 
/>
```

### 添加背景音乐
在 `src/pages/Home.jsx` 的 Hero 区域加入：
```jsx
<audio autoPlay loop volume={0.1}>
  <source src="/assets/audio/guqin.mp3" type="audio/mp3" />
</audio>
```

---

## 📦 构建生产版本

```bash
npm run build
# 产物在 dist/ 目录，可直接部署到任意静态托管服务
```

---

## 📝 待完善

- [ ] 替换占位图为真实作品高清图
- [ ] 嵌入真实高德/百度地图
- [ ] 接入真实联系表单（Formspree / EmailJS）
- [ ] 添加古琴背景音效
- [ ] 作品详情页的"对比滑块"（制作过程可视化）
- [ ] Three.js 粒子背景（可选增强）

---

*以美术馆之心，呈百年工艺之美。*
