import inquirer from "inquirer";
import * as fs from "fs";
import * as path from "path";
import { generateCopilotSpaceMd, CopilotSpaceInput } from "./src/template";

async function main() {
  // 言語選択
  const { lang } = await inquirer.prompt([
    {
      type: "list",
      name: "lang",
      message: "言語を選択してください / Select language",
      choices: [
        { name: "日本語", value: "ja" },
        { name: "English", value: "en" },
      ],
      default: "ja",
    },
  ]);

  // 質問文定義
  let questions;
  if (lang === "ja") {
    questions = [
      { type: "input", name: "projectName", message: "プロジェクト名は？" },
      { type: "input", name: "description", message: "概要を一言で？" },
      { type: "input", name: "members", message: "担当者（カンマ区切り）" },
      { type: "input", name: "background", message: "設計思想・背景を簡単に" },
      { type: "input", name: "tech", message: "使用技術（カンマ区切り）" },
      { type: "input", name: "faqQ", message: "FAQ: 質問例を1つ" },
      { type: "input", name: "faqA", message: "FAQ: 回答例を1つ" },
      { type: "input", name: "rules", message: "運用ルール（カンマ区切り）" },
      { type: "input", name: "copilotCmd", message: "Copilotへの命令例" },
    ];
  } else {
    questions = [
      { type: "input", name: "projectName", message: "Project name?" },
      { type: "input", name: "description", message: "Short description?" },
      { type: "input", name: "members", message: "Members (comma separated)" },
      {
        type: "input",
        name: "background",
        message: "Design background / philosophy",
      },
      {
        type: "input",
        name: "tech",
        message: "Technologies used (comma separated)",
      },
      { type: "input", name: "faqQ", message: "FAQ: Example question" },
      { type: "input", name: "faqA", message: "FAQ: Example answer" },
      {
        type: "input",
        name: "rules",
        message: "Operation rules (comma separated)",
      },
      {
        type: "input",
        name: "copilotCmd",
        message: "Copilot instruction example",
      },
    ];
  }

  const answers = await inquirer.prompt(questions as any);

  // 共通テンプレートロジックを利用
  const input: CopilotSpaceInput = {
    lang: lang as "ja" | "en",
    projectName: answers.projectName,
    description: answers.description,
    members: answers.members,
    background: answers.background,
    tech: answers.tech,
    faqQ: answers.faqQ,
    faqA: answers.faqA,
    rules: answers.rules,
    copilotCmd: answers.copilotCmd,
  };
  const template = generateCopilotSpaceMd(input);

  fs.writeFileSync(
    path.join(process.cwd(), "copilot_space.md"),
    template,
    "utf-8"
  );
  console.log(
    lang === "ja"
      ? "copilot_space.md を生成しました！"
      : "copilot_space.md has been generated!"
  );
}

main();
