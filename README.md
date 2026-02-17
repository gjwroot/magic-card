# 马到成功 - 喜庆互动粒子秀 🎉

一个基于 Canvas 的喜庆互动粒子特效网页，包含粒子系统、红包、福字、烟花等特效。

## 🎊 两个版本

### 1. 完整版 (index.html)
功能丰富的互动粒子秀，包含粒子系统、红包、福字、烟花、对联等多种特效。

### 2. 新年版 (new_year_2026.html)
简洁现代的新年祝福页面，专注于烟花效果和新年祝福文案。

## ✨ 功能特点

- **粒子系统**：100+ 粒子实时渲染，支持多种交互模式
- **红包特效**：随机飘落的红包，点击福字按钮可向天空泼洒红包
- **福字特效**：随机飘落的福字和财字
- **烟花特效**：随机绽放的烟花，点击福字按钮可触发烟花
- **对联展示**：左右两侧展示喜庆对联
- **多种交互模式**：吸引、排斥、轨迹、形状、波浪、漩涡、重力、弹跳等 8 种模式
- **纯净模式**：隐藏 UI 元素，只保留粒子效果
- **性能优化**：帧率控制、事件节流、DOM 操作优化

## 🎮 交互说明

### 鼠标交互
- **单击**：切换粒子跟随强度
- **双击**：切换交互模式
- **拖拽**：创建粒子尾焰
- **甩动**：粒子飞向四周
- **空格键**：快速切换模式

### 按钮功能
- **福字按钮**：发射红包、烟花，播放/暂停背景音乐

### 纯净模式
- 按 ESC 键退出纯净模式

## 🚀 快速开始

### 本地运行

1. 克隆项目：
```bash
git clone https://github.com/gjwroot/magic-card.git
cd magic-card
```

2. 启动本地服务器：
```bash
python3 -m http.server 8080
```

3. 打开浏览器访问：
```
http://localhost:8080
```

### 在线访问

直接在浏览器中打开 `index.html` 文件即可。

## 📁 项目结构

```
magic-card/
├── index.html              # 完整版：粒子秀、红包、福字、烟花、对联
├── new_year_2026.html      # 新年版：简洁烟花祝福页面
├── automated_test.js       # 本地自动化测试脚本
├── mcp_automated_test.js   # MCP 自动化测试脚本
└── README.md              # 项目说明文档
```

## 🧪 测试

### 本地测试

在浏览器控制台中运行：
```javascript
const test = new AutomatedTest();
test.startTests();
```

### MCP 测试

需要 MCP 工具支持，在浏览器控制台中运行：
```javascript
const test = new MCPAutomatedTest();
test.startTests();
```

## 🎨 自定义

### 修改粒子数量

在 `index.html` 中找到 `particleCount` 变量：
```javascript
this.particleCount = 100; // 修改为你想要的数量
```

### 修改红包、福字、烟花生成频率

在 `index.html` 中找到以下方法：
```javascript
createRandomRedPackets() {
    if (Math.random() < 0.03) { // 修改概率值
        // ...
    }
}

createRandomFuCharacters() {
    if (Math.random() < 0.02) { // 修改概率值
        // ...
    }
}

createRandomFireworks() {
    if (Math.random() < 0.03) { // 修改概率值
        // ...
    }
}
```

### 修改对联内容

在 `index.html` 中找到对联部分：
```html
<div class="couplet left">
    <div class="couplet-line">龙马精神事业兴</div>
</div>

<div class="couplet right">
    <div class="couplet-line">福星高照满堂春</div>
</div>
```

## 📊 性能优化

- **帧率控制**：限制在 60fps 以内
- **事件节流**：鼠标移动事件节流处理
- **DOM 操作优化**：减少 DOM 元素创建和删除
- **粒子数量优化**：从 150 减少到 100
- **动画优化**：使用 requestAnimationFrame

## 🛠️ 技术栈

- **HTML5 Canvas**：粒子渲染
- **CSS3**：动画和样式
- **JavaScript ES6+**：交互逻辑
- **Google Fonts**：马善政字体

## 📝 更新日志

### v1.1.0 (2026-02-17)
- ✅ 新增新年版页面 (new_year_2026.html)
- ✅ 实现真实烟花效果（发射、爆炸、粒子扩散）
- ✅ 添加自动发射烟花功能
- ✅ 添加点击发射烟花交互
- ✅ 优化页面加载动画

### v1.0.0 (2026-02-17)
- ✅ 完成基础粒子系统
- ✅ 添加红包、福字、烟花特效
- ✅ 实现多种交互模式
- ✅ 添加对联展示
- ✅ 性能优化
- ✅ 修复窗口大小变化卡死问题
- ✅ 添加自动化测试脚本

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

## 👨‍💻 作者

gjwroot

---

**祝您使用愉快！🎉**
