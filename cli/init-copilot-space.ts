import inquirer from "inquirer";
import * as fs from "fs";
import * as path from "path";
import { generateCopilotSpaceMd } from "../src/template";

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
    },
  ]);

  // 言語ごとの質問文
  const questions =
    lang === "ja"
      ? [
          { type: "input", name: "projectName", message: "プロジェクト名は？" },
          { type: "input", name: "description", message: "概要を一言で？" },
          { type: "input", name: "members", message: "担当者（カンマ区切り）" },
          {
            type: "input",
            name: "background",
            message: "設計思想・背景を簡単に",
          },
          { type: "input", name: "tech", message: "使用技術（カンマ区切り）" },
          { type: "input", name: "faqQ", message: "FAQ: 質問例を1つ" },
          { type: "input", name: "faqA", message: "FAQ: 回答例を1つ" },
          {
            type: "input",
            name: "rules",
            message: "運用ルール（カンマ区切り）",
          },
          { type: "input", name: "copilotCmd", message: "Copilotへの命令例" },
        ]
      : [
          { type: "input", name: "projectName", message: "Project name?" },
          { type: "input", name: "description", message: "Short description?" },
          {
            type: "input",
            name: "members",
            message: "Members (comma separated)",
          },
          {
            type: "input",
            name: "background",
            message: "Design philosophy / background?",
          },
          {
            type: "input",
            name: "tech",
            message: "Technologies (comma separated)",
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

  // inquirer.promptの型エラーを回避するため、as anyで強制的に通す
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const answers = await (inquirer.prompt as any)(questions);
  const input = {
    lang,
    ...answers,
  } as import("../src/template").CopilotSpaceInput;
  const template = generateCopilotSpaceMd(input);
  fs.writeFileSync(
    path.join(process.cwd(), "copilot_space.md"),
    template,
    "utf-8"
  );
  console.log("copilot_space.md を生成しました！");
}

main();
