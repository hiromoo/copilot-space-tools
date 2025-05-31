import inquirer from 'inquirer';
import * as fs from 'fs';
import * as path from 'path';

async function main() {
  const answers = await inquirer.prompt([
    { type: 'input', name: 'projectName', message: 'プロジェクト名は？' },
    { type: 'input', name: 'description', message: '概要を一言で？' },
    { type: 'input', name: 'members', message: '担当者（カンマ区切り）' },
    { type: 'input', name: 'background', message: '設計思想・背景を簡単に' },
    { type: 'input', name: 'tech', message: '使用技術（カンマ区切り）' },
    { type: 'input', name: 'faqQ', message: 'FAQ: 質問例を1つ' },
    { type: 'input', name: 'faqA', message: 'FAQ: 回答例を1つ' },
    { type: 'input', name: 'rules', message: '運用ルール（カンマ区切り）' },
    { type: 'input', name: 'copilotCmd', message: 'Copilotへの命令例' },
  ]);

  const template = `# 🏷️ プロジェクト概要

- プロジェクト名: ${answers.projectName}
- 概要: ${answers.description}
- 担当: ${answers.members}

# 🧠 設計思想・背景

- ${answers.background}

# 🏗️ アーキテクチャ

- 使用技術: ${answers.tech}

# 📝 よくある質問（FAQ）

Q: ${answers.faqQ}  
A: ${answers.faqA}

# ⚙️ 運用ルール

- ${answers.rules.split(',').map((r: string) => r.trim()).join('\n- ')}

# ✍️ Copilot 命令

- ${answers.copilotCmd}
`;

  fs.writeFileSync(path.join(process.cwd(), 'copilot_space.md'), template, 'utf-8');
  console.log('copilot_space.md を生成しました！');
}

main();
