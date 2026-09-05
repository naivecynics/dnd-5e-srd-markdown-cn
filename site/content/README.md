# D&D 5e SRD 5.2.1 Markdown（2024）——完整第五版参考资料

[![许可证：CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![D&D 5e 2024](https://img.shields.io/badge/D%26D_5e-2024_(5.2.1)-red.svg)](https://www.dndbeyond.com/)
[![格式：Markdown](https://img.shields.io/badge/format-markdown-blue.svg)](https://commonmark.org/)

这是完整的 **D&D 5e（2024）系统参考文档 5.2.1（System Reference Document，SRD）** Markdown 版本，经过整理，便于开发者、内容创作者和 DM 阅读、搜索和集成。内容包含全部 12 个职业、500 多个法术、400 多个怪物，以及完整的 D&D 5e 游戏规则。

## 项目简介

**D&D 5e（2024）SRD 5.2.1** 是 Wizards of the Coast 依据知识共享署名 4.0 国际许可协议发布的官方规则参考文档。本仓库将完整 SRD 从 PDF 转换为 Markdown，适合用于 D&D 5e 应用、角色构筑器、法术数据库和虚拟桌面：

- **机器可读**——便于解析并集成到应用程序
- **支持版本控制**——可以使用 Git 跟踪变更
- **开发者友好**——可用于静态站点生成器、文档工具或 API
- **便于搜索**——可以使用 grep、GitHub 搜索或 IDE 查找
- **易于访问**——支持屏幕阅读器和文本转语音工具

## 内容目录

| 文件 | 大小 | 说明 |
| --- | --- | --- |
| [character-creation.md](character-creation.md) | 51 KB | 角色创建步骤和概览 |
| [character-origins.md](character-origins.md) | 17 KB | 背景和物种 |
| [classes.md](classes.md) | 292 KB | 全部 12 个核心职业及子职业 |
| [equipment.md](equipment.md) | 71 KB | 武器、护甲、装备和工具 |
| [feats.md](feats.md) | 7.5 KB | 角色专长和能力 |
| [spells.md](spells.md) | 319 KB | 完整法术列表（按字母排序） |
| [magic-items.md](magic-items.md) | 239 KB | 魔法物品和神器 |
| [playing-the-game.md](playing-the-game.md) | 64 KB | 核心游戏规则和机制 |
| [gameplay-toolbox.md](gameplay-toolbox.md) | 50 KB | 进阶规则和可选系统 |
| [monsters.md](monsters.md) | 19 KB | 怪物统计信息概览 |
| [monsters-A-Z.md](monsters-A-Z.md) | 506 KB | 完整怪物图鉴 |
| [animals.md](animals.md) | 137 KB | 动物数据和伙伴 |
| [rules-glossary.md](rules-glossary.md) | 72 KB | 状态、动作和术语 |

**总计：**约 1.9 MB 的 D&D 5e 规则内容。

## 快速开始

### 面向开发者

```bash
# 克隆仓库
git clone https://github.com/downfallx/dnd-5e-srd-markdown.git

# 在项目中使用
cp -r dnd-5e-srd-markdown ./src/data/srd
```

### 面向静态站点生成器

```javascript
// 示例：在 Next.js 应用中加载法术数据
import fs from 'fs';
import path from 'path';

const spellsPath = path.join(process.cwd(), 'data/srd/spells.md');
const spellsMarkdown = fs.readFileSync(spellsPath, 'utf8');
```

### 面向 VTT 开发

将官方规则直接集成到虚拟桌面（Virtual Tabletop，VTT）中：

```typescript
// 解析职业数据，用于角色创建
import { marked } from 'marked';
import classData from './srd/classes.md';

const parsedClasses = marked.parse(classData);
```

### 面向 Obsidian / Notion 用户

将 Markdown 文件复制到你的库或工作区，即可获得一套支持全文搜索和互相链接的 D&D 参考资料。

## 使用场景

- 🎮 **游戏开发**——开发基于 D&D 的电子游戏或 VTT
- 🤖 **AI 训练**——将 D&D 规则提供给 AI 地下城主机器人
- 📱 **移动应用**——制作角色构筑器和法术参考应用
- 📚 **文档站点**——创建可搜索的 D&D Wiki
- 🔧 **API 开发**——为 D&D Web 服务提供后端数据
- 📖 **个人参考**——建立离线优先的规则资料库

## 特性

### 整洁的 Markdown 格式

- 使用规范的标题层级（`#`、`##`、`###`）
- 使用 Markdown 表格表示数据块和统计信息
- 所有文件采用一致的格式
- 不绑定任何专有格式

### 结构化数据

每个文件都采用清晰的章节标题、嵌套子章节、统计信息表格，以及表示特性和能力的列表。

### 便于搜索

```bash
# 查找名称中包含 fire 的所有法术
grep -i "fire" spells.md

# 查找挑战等级为 10 或更高的生物
grep "**Challenge:**" monsters-A-Z.md | grep -E "1[0-9]|2[0-9]"

# 列出所有法师法术
grep -A 5 "## Wizard Spells" classes.md
```

## 与 PDF 的区别

### 优势

- **无需解析**——已经是结构化文本格式
- **适合 Git**——可以准确查看版本之间的变化
- **可移植**——任何设备都能使用，无需 PDF 阅读器
- **可定制**——易于修改或扩展自制内容
- **可链接**——可以在 GitHub 上直接链接到具体章节

### 转换说明

- 表格使用 GitHub 风格 Markdown 格式
- 怪物数据块使用统一的 Markdown 格式
- 官方 SRD 5.2.1 的全部内容均已保留
- 不包含专有格式或嵌入字体

## 许可证

本项目包含取自 Wizards of the Coast LLC《系统参考文档 5.2.1》（SRD 5.2.1）的材料，依据[知识共享署名 4.0 国际许可协议](https://creativecommons.org/licenses/by/4.0/)授权。

**你可以：**

- 分享——复制和再分发本材料
- 改编——为任何目的重新混合、转换和创作本材料

**但必须遵守：**

- 署名——必须适当地注明 Wizards of the Coast

官方 SRD 可在 [Wizards of the Coast 网站](https://www.dndbeyond.com/)找到。

## 署名声明

Dungeons & Dragons、D&D 及其相关标志均为 Wizards of the Coast LLC 的商标。

本仓库包含来自 Wizards of the Coast LLC SRD 5.2.1 的材料。该材料版权归 Wizards of the Coast LLC（2024）所有，依据知识共享署名 4.0 国际许可协议使用。

## 贡献

发现格式问题或转换错误？欢迎贡献改进！详情请参阅 [CONTRIBUTING.md](CONTRIBUTING.md)。

## 常见问题

### 这是官方资料吗？

内容来自官方 SRD 5.2.1，但 Markdown 转换版本由社区维护。

### 可以用于商业项目吗？

可以。知识共享署名 4.0 许可协议允许商业使用，但必须注明 Wizards of the Coast 的署名。

### 不包含哪些内容？

SRD 只是完整 D&D 规则的一个子集，不包含 SRD 之外的角色选项、子职业、特定世界观内容、冒险内容和战役。

如需完整规则，请购买官方《玩家手册》《城主指南》和《怪物图鉴》。

## 相关项目

- [5e-database](https://github.com/bagelbits/5e-database)——D&D 5e 数据库
- [5e-srd-api](https://github.com/5e-bits/5e-srd-api)——REST API
- [open5e](https://github.com/open5e/open5e-api)——开源 API

## 支持

- 🐛 [提交 Issue](https://github.com/downfallx/dnd-5e-srd-markdown/issues)
- 💡 [发起讨论](https://github.com/downfallx/dnd-5e-srd-markdown/discussions)
- ⭐ 喜欢这个项目？给仓库点个 Star 吧！
