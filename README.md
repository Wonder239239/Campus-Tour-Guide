# Campus Tour Guide

手机端可访问的校园 AR 导览静态网站。

## 功能

- 首页选择身份：学生或访客
- 中英文语言切换
- 校园地图展示
- 请求定位权限并判断是否靠近景点
- 到达景点后提示进入 AR 讲解
- 相机页面叠加 3D 小人
- 自动播放语音讲解

## 手机访问

项目适合直接部署到 GitHub Pages。启用后可通过类似下面的地址访问：

`https://wonder239239.github.io/Campus-Tour-Guide/`

为了让手机上的定位和相机权限正常工作，请使用 HTTPS 页面并在浏览器中允许权限请求。

## 本地运行

```bash
python3 -m http.server 4173
```

然后打开：

`http://localhost:4173`

## 代码结构

- `index.html`: 页面结构
- `styles.css`: 页面样式与移动端适配
- `app.js`: 定位、相机、3D 展示和语音讲解逻辑
- `assets/campus-map.svg`: 校园地图素材
