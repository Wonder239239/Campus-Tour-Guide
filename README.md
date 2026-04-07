# XJTLU Campus Tour Guide

手机端可访问的西交利物浦大学校园 AR 导览静态网站。

## 功能

- 首页选择身份：学生或访客
- 中英文语言切换
- 西交利物浦大学校园地图展示
- 请求定位权限并判断是否靠近西浦景点
- 到达景点后提示进入 AR 讲解
- 相机页面叠加 3D 小人
- 自动播放语音讲解

## 当前答辩展示景点

- 西浦图书馆
- 西浦博物馆
- 南校区体育中心

说明：

- 图书馆位于中心楼三到十层，这一描述来自西交利物浦大学官网。
- 博物馆位于中心楼一层，体育中心介绍基于西浦官网的 SIP 校区运动设施说明。
- 当前 `app.js` 中的经纬度是围绕西浦苏州工业园区校园设置的演示坐标，用于手机端流程演示。
- 如果你要做正式答辩或真实导航，建议再替换成你们实测的景点精准坐标。

## 重新推送到 GitHub

如果你已经把仓库连接到 `https://github.com/Wonder239239/Campus-Tour-Guide.git`，在项目目录执行：

```bash
cd /Users/caoqi/Desktop/CPT208/web-url-project
git status
git add index.html app.js styles.css assets/campus-map.svg README.md
git commit -m "update xjtlu poi content"
git push origin main
```

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
