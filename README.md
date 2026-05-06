# HTML Animation Deck
<img width="2550" height="1275" alt="158a7b843651a800ca1a7b90dbad5440" src="https://github.com/user-attachments/assets/5a85308f-f4ba-4305-8ac7-4221d99551f0" />
<img width="2550" height="1275" alt="1d62f5180e49170ca585610ca8091f93" src="https://github.com/user-attachments/assets/fd81b2f2-d5a6-41a0-a62a-0ce7eb9d0249" />
<img width="2550" height="1275" alt="7ba3e9b6a02f6846cc12a154cae12ea9" src="https://github.com/user-attachments/assets/2a66a812-b40a-45df-986e-e435dcc1561a" />

`html-animation-deck` 是一个 Codex Skill，用来把一句简短主题提示，自动扩展成经过资料梳理、叙事设计和视觉设计的 HTML 动画演示。

它适合这类需求：

```text
做一个关于量子计算的动画演示
做一个关于 AI Agent 的现代网页 PPT
把这个很有 AI 味的动画页面改成更有设计感的 HTML 演示
```

这个 Skill 会引导 Codex 自动完成：

1. 判断主题和受众
2. 必要时搜索或核对资料
3. 提炼关键知识点
4. 设计演示叙事结构
5. 选择现代化视觉风格
6. 生成浏览器原生 HTML/CSS/JavaScript 动画演示
7. 执行结构校验和可选截图 QA

## 能生成什么

- 单文件 HTML 动画演示
- 仿 PPT 的网页幻灯片
- 支持键盘、按钮、滚轮或触摸翻页的演示页面
- 适合录屏的视频化演示页面
- 面向科普、技术讲解、产品说明、故事化展示的 animated explainer
- 对 AI 味很重的霓虹、粒子、玻璃卡片页面进行现代化重构

注意：这个 Skill 生成的是浏览器原生 HTML 演示，不是可编辑的 `.pptx` 文件。

## 设计原则

- 先做叙事和概念设计，再做动效。
- 需要事实支撑的主题，要先搜索或核对资料。
- 避免默认的 AI 味视觉：紫蓝渐变、粒子背景、玻璃卡片、机器人脑、随机网络节点等。
- “换风格”不能只是换颜色，要改变版式语言、视觉隐喻、动效和表达方式。
- 科普或技术解释页必须有真正能讲清概念的演示区，而不是装饰图形。

## 目录结构

```text
html-animation-deck/
  SKILL.md
  agents/
    openai.yaml
  references/
    research-to-story.md
    modern-visual-direction.md
    html-deck-architecture.md
    qa-checklist.md
  scripts/
    validate_deck.js
    capture_deck.js
  assets/
```

## 使用方式

安装后，可以直接让 Codex 调用这个 Skill，例如：

```text
使用 $html-animation-deck，做一个关于量子计算的动画演示。
```

也可以自然描述：

```text
我要做一个关于 Transformer 原理的动画演示。
```

Skill 的触发描述已经覆盖了 animated presentation、HTML presentation、web PPT、browser slide deck、animated explainer 等场景。

## 校验 Skill

在本地校验 Skill 元数据：

```powershell
python ..\skills\.system\skill-creator\scripts\quick_validate.py D:\Hermes\skills\html-animation-deck
```

## 校验生成的 HTML 演示

```powershell
node scripts\validate_deck.js path\to\deck.html
```

这个脚本会检查：

- 是否有 `.deck` 根节点
- 是否有 `.slide` 页面
- 是否只有一个初始激活页
- 是否有进度显示
- 是否有上一页/下一页控制
- 是否有键盘导航
- 是否处理了 `prefers-reduced-motion`
- 是否存在明显占位文本或断开的本地资源

## 可选截图 QA

```powershell
node scripts\capture_deck.js path\to\deck.html --out output\preview
```

截图 QA 会使用 Playwright 打开 HTML 并逐页截图，方便检查视觉效果。

Playwright 只是可选 QA 工具，不是 HTML 演示的运行依赖。生成的 HTML 文件应该可以直接用浏览器打开。
