export type CopilotSpaceInput = {
  lang: "ja" | "en";
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

export function generateCopilotSpaceMd(input: CopilotSpaceInput): string {
  if (input.lang === "ja") {
    return `# 🏷️ プロジェクト概要

- プロジェクト名: ${input.projectName}
- 概要: ${input.description}
- 担当: ${input.members}

# 🧠 設計思想・背景

- ${input.background}

# 🏗️ アーキテクチャ

- 使用技術: ${input.tech}

# 📝 よくある質問（FAQ）

Q: ${input.faqQ}  
A: ${input.faqA}

# ⚙️ 運用ルール

- ${input.rules
      .split(",")
      .map((r) => r.trim())
      .join("\n- ")}

# ✍️ Copilot 命令

- ${input.copilotCmd}
`;
  } else {
    return `# 🏷️ Project Overview

- Project Name: ${input.projectName}
- Description: ${input.description}
- Members: ${input.members}

# 🧠 Design Philosophy / Background

- ${input.background}

# 🏗️ Architecture

- Technologies: ${input.tech}

# 📝 Frequently Asked Questions (FAQ)

Q: ${input.faqQ}  
A: ${input.faqA}

# ⚙️ Operation Rules

- ${input.rules
      .split(",")
      .map((r) => r.trim())
      .join("\n- ")}

# ✍️ Copilot Instructions

- ${input.copilotCmd}
`;
  }
}
