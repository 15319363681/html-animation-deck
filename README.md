# HTML Animation Deck
<img width="2550" height="1275" alt="158a7b843651a800ca1a7b90dbad5440" src="https://github.com/user-attachments/assets/5a85308f-f4ba-4305-8ac7-4221d99551f0" />
<img width="2550" height="1275" alt="1d62f5180e49170ca585610ca8091f93" src="https://github.com/user-attachments/assets/fd81b2f2-d5a6-41a0-a62a-0ce7eb9d0249" />
<img width="2550" height="1275" alt="7ba3e9b6a02f6846cc12a154cae12ea9" src="https://github.com/user-attachments/assets/2a66a812-b40a-45df-986e-e435dcc1561a" />

`html-animation-deck` 是一个 **Codex Skill**，用于把一句简短主题提示扩展成经过资料梳理、叙事设计和视觉设计的 HTML 动画演示。

它不是独立应用、不是 npm 包、也不是普通网页模板。它的主要用途是给 Codex 提供一套专业工作流，让 Codex 在用户说“做一个关于某主题的动画演示”时，自动完成研究、策划、设计、编码和校验。

## 它能做什么

用户可以只说一句：

```text
做一个关于量子计算的动画演示
```

Codex 使用这个 Skill 后，会按流程完成：

1. 理解主题、受众和演示目标
2. 必要时搜索或核对资料
3. 提炼关键知识点
4. 设计演示叙事结构
5. 选择现代化视觉风格
6. 生成浏览器原生 HTML/CSS/JavaScript 动画演示
7. 执行结构校验和可选截图 QA

适合的场景：

- 科普动画演示
- 技术概念讲解
- 仿 PPT 网页演示
- 产品说明动画页
- 适合录屏的视频化演示
- 将 AI 味很重的霓虹、粒子、玻璃卡片页面改成更有设计感的 HTML 演示

不适合的场景：

- 生成可编辑 `.pptx`
- 做完整 Web 应用
- 做独立 npm 工具包
- 只需要静态 Markdown/PDF 文档

## 谁可以用

### 1. Codex 使用

这是最完整的使用方式。

把本仓库安装或放置到 Codex 可识别的 skills 目录后，Codex 可以读取：

```text
SKILL.md
references/
scripts/
```

然后根据用户请求自动触发工作流。

示例：

```text
使用 $html-animation-deck，做一个关于 OSI 七层模型的动画演示。
```

或者更自然地说：

```text
我要做一个关于量子计算的动画演示。
```

### 2. 其他 AI 手动使用

其他 AI 也可以参考这个仓库，但不会自动识别 Codex Skill。

你可以把以下内容复制给其他模型：

```text
SKILL.md
references/research-to-story.md
references/modern-visual-direction.md
references/html-deck-architecture.md
references/qa-checklist.md
```

然后让它按这些规则生成 HTML 演示。

### 3. 人工复用脚本

仓库里的脚本可以独立运行，用来校验或截图 HTML 演示。

校验生成的 HTML：

```powershell
node scripts\validate_deck.js path\to\deck.html
```

可选截图 QA：

```powershell
node scripts\capture_deck.js path\to\deck.html --out output\preview
```

注意：Playwright 只用于可选截图 QA，不是 HTML 演示的运行依赖。生成的 HTML 文件应该可以直接用浏览器打开。

## 设计原则

这个 Skill 不鼓励“AI 味”的默认视觉。

它会尽量避免：

- 紫蓝渐变宇宙
- 粒子背景
- 玻璃卡片
- 机器人脑
- 随机网络节点
- 大段文字塞进半透明卡片
- 只换颜色但版式不变的“假换风格”

它强调：

- 先做叙事，再做动效
- 每页只有一个主要信息
- 技术/科普页必须有能解释概念的演示区
- 风格变化要改变版式、视觉隐喻、动效和表达方式
- HTML 演示必须能直接用浏览器打开

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

## 核心文件说明

- `SKILL.md`：Codex Skill 入口，定义触发条件、主流程和输出要求。
- `references/research-to-story.md`：从主题研究到演示叙事的规则。
- `references/modern-visual-direction.md`：现代视觉方向、反 AI 味规则、风格差异化规则。
- `references/html-deck-architecture.md`：HTML 演示的结构、翻页、动效和响应式要求。
- `references/qa-checklist.md`：交付前检查清单。
- `scripts/validate_deck.js`：检查 HTML deck 的结构问题。
- `scripts/capture_deck.js`：使用 Playwright 对 HTML deck 逐页截图。

## 校验 Skill

在本地校验 Skill 元数据：

```powershell
python ..\skills\.system\skill-creator\scripts\quick_validate.py D:\Hermes\skills\html-animation-deck
```

## 示例请求

```text
使用 $html-animation-deck，做一个关于量子计算的动画演示。
```

```text
使用 $html-animation-deck，做一个关于 OSI 七层模型的现代 HTML 演示，风格像网络运维控制台。
```

```text
使用 $html-animation-deck，把这个动画页面改成动漫科普风，要求风格大改，不只是换颜色。
```

## 许可证

如果你准备公开分发，建议根据自己的需求补充 LICENSE 文件。
