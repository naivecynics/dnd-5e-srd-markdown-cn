# D&D 5.2.1 SRD Markdown 贡献指南

感谢你有兴趣改进这个资源！本仓库旨在为 D&D 开发者社区提供整洁、易访问的 SRD 内容。

## 如何贡献

### 欢迎的贡献类型

1. **错误报告**——发现格式错误或错别字？请告诉我们。
2. **格式改进**——优化表格结构、标题层级和可读性。
3. **内部链接**——在相关章节之间添加有帮助的链接。
4. **文档**——补充集成指南和教程。
5. **脚本与工具**——提交解析器、验证器、转换器或搜索工具。

### 不接受的变更类型

- 修改官方 SRD 内容（必须与 WotC 官方 SRD 保持一致）
- 添加自制内容或超出 SRD 范围的内容
- 大幅重组文件结构

## 贡献流程

### 1. 开始之前

- 检查已有 Issue，避免重复报告。
- 对于重大变更，请先创建 Issue 进行讨论。
- 完整阅读本指南。

### 2. 进行修改

```bash
# 在 GitHub 上 Fork 本仓库并克隆你的 Fork
git clone https://github.com/YOUR_USERNAME/dnd-5e-srd-markdown.git
cd dnd-5e-srd-markdown

# 创建功能分支并进行修改
git checkout -b fix/spell-table-formatting
# ... 编辑文件 ...

# 测试、提交并推送
git commit -m "Fix spell table formatting in spells.md"
git push origin fix/spell-table-formatting
```

随后在 GitHub 上创建 Pull Request。

### 3. Pull Request 指南

**标题格式：**

- `Fix: [简短描述]`——修复错误
- `Improve: [简短描述]`——改进现有内容
- `Add: [简短描述]`——新增内容
- `Docs: [简短描述]`——文档变更

**描述应包括：**修改内容和原因、受影响的文件、格式变化时的截图，以及相关 Issue 编号（如有）。

**示例：**

```markdown
## 摘要
修复 spells.md 中导致渲染问题的错误表格

## 变更
- 修复法术等级表中的列对齐
- 补全第 234–245 行缺失的竖线

## 测试
- [x] 在 GitHub Markdown 渲染器中预览
- [x] 使用 markdownlint 验证
- [x] 在 VS Code Markdown 预览中检查表格

修复 #42
```

## 测试变更

### Markdown 验证

```bash
npm install -g markdownlint-cli
markdownlint spells.md
markdownlint *.md
```

### 预览渲染

- 在 IDE 中打开 Markdown 预览。
- 在 GitHub 上查看你的分支。
- 按实际使用场景测试解析器、静态站点或其他工具。

### 检查链接

```bash
npm install -g markdown-link-check
markdown-link-check README.md
```

## 内容指南

### 保留官方内容

SRD 内容必须保持与 WotC 官方发布版本一致。

**应该做：**修复 Markdown 格式错误、改进表格结构、补充缺失语法、修正格式性错误。

**不应该做：**修改官方名称、数值或游戏机制；添加自制内容；改写或删除官方规则文本。

### 格式标准

```markdown
# 文件主标题（每个文件一个 H1）
## 章节标题（H2）
### 子章节标题（H3）
#### 细节标题（H4）
```

```markdown
| 列 1 | 列 2 | 列 3 |
|------|------|------|
| 数据 | 数据 | 数据 |
```

表格必须包含表头分隔行；列表、强调、代码块和链接应遵循标准 Markdown 语法。

### 交叉引用

- 同一目录中的文件使用相对链接。
- 文件内链接使用章节锚点。
- 提交前测试所有链接。

## 提交信息规范

使用清晰、描述性的提交信息，例如 `Fix table alignment in equipment.md`、`Improve monster stat block formatting`。避免使用 `fix stuff` 这类含义不清的信息。

## 行为准则

参与项目时请保持尊重、建设性和包容性，共同维护一个友好的 D&D 开发社区。

## 许可证

通过贡献内容，你同意这些贡献可以依据本项目采用的 CC BY 4.0 许可协议发布。
