type CopilotSpaceInput = {
  lang: string;
  projectName: string;
  description: string;
  members: string;
  background: string;
  tech: string;
  faqQ: string;
  faqA: string;
  rules: string;
  copilotCmd: string;
};

function generateCopilotSpaceMd(input: CopilotSpaceInput) {
  if (input.lang === "ja") {
    return `# 🏷️ プロジェクト概要\n\n- プロジェクト名: ${
      input.projectName
    }\n- 概要: ${input.description}\n- 担当: ${
      input.members
    }\n\n# 🧠 設計思想・背景\n\n- ${
      input.background
    }\n\n# 🏗️ アーキテクチャ\n\n- 使用技術: ${
      input.tech
    }\n\n# 📝 よくある質問（FAQ）\n\nQ: ${input.faqQ}  \nA: ${
      input.faqA
    }\n\n# ⚙️ 運用ルール\n\n- ${input.rules
      .split(",")
      .map((r) => r.trim())
      .join("\n- ")}\n\n# ✍️ Copilot 命令\n\n- ${input.copilotCmd}\n`;
  } else {
    return `# 🏷️ Project Overview\n\n- Project Name: ${
      input.projectName
    }\n- Description: ${input.description}\n- Members: ${
      input.members
    }\n\n# 🧠 Design Philosophy / Background\n\n- ${
      input.background
    }\n\n# 🏗️ Architecture\n\n- Technologies: ${
      input.tech
    }\n\n# 📝 Frequently Asked Questions (FAQ)\n\nQ: ${input.faqQ}  \nA: ${
      input.faqA
    }\n\n# ⚙️ Operation Rules\n\n- ${input.rules
      .split(",")
      .map((r) => r.trim())
      .join("\n- ")}\n\n# ✍️ Copilot Instructions\n\n- ${input.copilotCmd}\n`;
  }
}
document.getElementById("form")!.onsubmit = function (e) {
  e.preventDefault();
  const f = e.target as HTMLFormElement;
  const input = {
    lang: (f.elements.namedItem("lang") as HTMLSelectElement).value,
    projectName: (f.elements.namedItem("projectName") as HTMLInputElement)
      .value,
    description: (f.elements.namedItem("description") as HTMLInputElement)
      .value,
    members: (f.elements.namedItem("members") as HTMLInputElement).value,
    background: (f.elements.namedItem("background") as HTMLInputElement).value,
    tech: (f.elements.namedItem("tech") as HTMLInputElement).value,
    faqQ: (f.elements.namedItem("faqQ") as HTMLInputElement).value,
    faqA: (f.elements.namedItem("faqA") as HTMLInputElement).value,
    rules: (f.elements.namedItem("rules") as HTMLInputElement).value,
    copilotCmd: (f.elements.namedItem("copilotCmd") as HTMLInputElement).value,
  };
  const output = document.getElementById(
    "output"
  ) as HTMLTextAreaElement | null;
  if (output) output.value = generateCopilotSpaceMd(input);
};
