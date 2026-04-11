# X·EasyGo

手机端展示优先的西交利物浦大学校园导览 Web 项目。

## 当前功能

- 首页支持中英文切换
- Supabase 用户注册 / 登录
- 使用 `用户名 + 密码` 认证
- 选择身份后进入导览流程
- 身份信息会写入数据库，下次登录可跳过身份选择
- 地图页使用 `Leaflet + OpenStreetMap`
- 实时显示用户到 `FB / CB / SD` 的距离
- 地图上显示当前位置与三个建筑之间的虚线连线
- 进入建筑范围后自动播放对应讲解
- 讲解内容按 `身份 + 建筑 + 语言` 切换
- 支持扫描集章
- 支持集章排行榜

## 当前建筑与坐标

- `FB (Foundation Building)`: `31.2765683, 120.7337931`
- `CB (Central Building)`: `31.2749451, 120.7339179`
- `SD (Science Building D)`: `31.274314, 120.735793`

当前范围判断半径写在 [app.js](/Users/caoqi/Desktop/CPT208/web-url-project/app.js) 里，可继续按现场演示效果调整。

## 页面流程

1. Language
2. Register / Login
3. Select User Identity
4. Campus Map And Live Positioning
5. Virtual Guide Explanation Page
6. Stamp Collection
7. Stamp Leaderboard

## 认证与数据库

项目当前使用 `Supabase`。

需要准备：

1. 在 [supabase-config.js](/Users/caoqi/Desktop/CPT208/web-url-project/supabase-config.js) 中填写项目 URL 和 publishable key
2. 在 Supabase SQL Editor 中执行 [supabase-schema.sql](/Users/caoqi/Desktop/CPT208/web-url-project/supabase-schema.sql)

数据库当前保存：

- 用户名映射
- 用户身份
- 已收集印章数量

## 扫描与集章

当前扫描识别支持：

- `FB`
- `CB`
- `SD`

识别成功后会收集对应印章，并写入用户资料。  
排行榜页面会读取所有用户的用户名和当前已收集印章数量，并按数量排序显示。

## 本地运行

```bash
cd /Users/caoqi/Desktop/CPT208/web-url-project
python3 -m http.server 4173
```

然后打开：

`http://localhost:4173`

## GitHub Pages

项目可直接部署到 GitHub Pages：

`https://wonder239239.github.io/Campus-Tour-Guide/`

如果你在手机上测试定位和扫描：

- 优先使用 Safari 或 Chrome
- 页面必须使用 HTTPS
- 需要允许定位权限
- 扫描功能需要允许相机权限

## 重新推送

```bash
cd /Users/caoqi/Desktop/CPT208/web-url-project
git status
git add .
git commit -m "update project"
git push origin main
```

注意：本地的 `.DS_Store` 不建议提交。

## 主要文件

- [index.html](/Users/caoqi/Desktop/CPT208/web-url-project/index.html): 页面结构
- [styles.css](/Users/caoqi/Desktop/CPT208/web-url-project/styles.css): 样式与移动端适配
- [app.js](/Users/caoqi/Desktop/CPT208/web-url-project/app.js): 页面流程、地图、定位、讲解、扫描、集章与排行榜逻辑
- [supabase-auth.js](/Users/caoqi/Desktop/CPT208/web-url-project/supabase-auth.js): Supabase 认证与排行榜数据读取
- [supabase-schema.sql](/Users/caoqi/Desktop/CPT208/web-url-project/supabase-schema.sql): Supabase 表结构与权限策略
- [assets/xjtlu-building.jpg](/Users/caoqi/Desktop/CPT208/web-url-project/assets/xjtlu-building.jpg): 首页 / 注册页 / 身份页展示图片
