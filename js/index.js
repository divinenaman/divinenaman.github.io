// NamanOS - Vim Mode Interactivity Script

// Mock Files for Vim Editor
const fileSystem = {
  "about_me.md": {
    language: "markdown",
    content: `# Naman Agarwal
## Software Development Engineer II @ Juspay

I am a passionate Full-Stack Developer currently working as an SDE 2 at Juspay, where we build robust and scalable payment infrastructure. I take a bottom-up approach to learning—striving to understand tools from first principles, often reverse-engineering or building them from scratch (e.g., AI Agents, React, JSON parsers) to truly master them.

- Location: Bengaluru, Karnataka, India
- Email: namanddev7@gmail.com
- Current: Juspay SDE 2 (Trident 3DS, Godel AI Scraper Platform, Agentic Payments)
- Education: B.Tech in CSE @ VIT Chennai (Tech Lead for VIT Chennai Android Club)
- Key Skills: Rust, Haskell, Go, Functional Programming, Declarative Programming, Docker, LLMs`
  },
  "Note.md": {
    language: "markdown",
    content: `# Words that stuck

- On Exploration (Tidy First):
  "It’s tempting to try to figure out where things are going to go next. Tempting, but futile... We’ve all parachuted in the dark onto a large field. There’s large veins of gold down there somewhere. There is no metal detector so our best bet is to stick a shovel in the dirt & see what we turn up."

- On Boredom:
  "Boredom is Valuable!"

- On Work & Efficiency (The Anti-Productivity Manifesto):
  "The treadmill never stops... Often we’re not addicted to a particular kind of work, but the mere behavior of working."

- Linus Torvalds on Development:
  "You copied that function without understanding why it does what it does, and as a result your code IS GARBAGE... until somebody points to a real problem."

- On Beauty & Motivation (DHH):
  "And beauty isn't binary. It's the journey of a thousand little decisions and investments in making something marginally prettier than it was before. To resist the urge to just make it work, and not stop until you make it shine."`
  },
  "core_skills.json": {
    language: "json",
    content: `{
  "languages": [
    "Rust",
    "Haskell",
    "Go",
    "Python",
    "TypeScript",
    "JavaScript",
    "Java",
    "C++"
  ],
  "frontend": [
    "React",
    "React Native",
    "Redux",
    "HTML5",
    "CSS3",
    "Sass",
    "Gatsby"
  ],
  "backend_db": [
    "Node.js",
    "Express",
    "Flask",
    "GraphQL",
    "PostgreSQL",
    "MongoDB",
    "Hasura"
  ],
  "devops_cloud": [
    "Docker",
    "AWS Lambda",
    "AWS ECS",
    "Git/GitHub",
    "CI/CD Pipelines"
  ]
}`
  },
  "experience.log": {
    language: "bash",
    content: `[2023-Present] JUSPAY - Software Development Engineer 2
  * Trident Server: Led Rust port of a high-load 3DS payment server. Increased txn success by 2-3%.
  * Godel AI: Architected AI-driven system to autonomously maintain OTP-page scrapers.
  * Agentic Payments: Integrated payments workflows and product discovery via MCP AI Agents.
  * DevOps: Configured and hosted critical microservices using Docker.

[2022-2023] ZEEQ - Backend Developer
  * Architected scalable backend services from the ground up utilizing Clean Architecture.
  * Developed over 40% of the backend services, including custom RBAC authentication.
`
  },
  "projects.yaml": {
    language: "yaml",
    content: `projects:
  - name: "Text-to-Video Pipeline"
    status: "Production"
    description: "Fully autonomous video generation from text using AI Agents, hosted on AWS Lambda."
    tech: ["Python", "LLMs", "AWS Lambda", "Embeddings", "APIs"]
    demo: "https://www.youtube.com/shorts/GG5bko4Q8lM"

  - name: "Family Tree Builder"
    status: "Completed"
    description: "Data pipeline mapping 25,000+ relationships using Computer Vision & electoral data."
    tech: ["Python", "Tesseract OCR", "Scrapy", "NetworkX"]
    github: "https://github.com/divinenaman/family-tree-builder"

  - name: "Invoice Central"
    status: "Completed"
    description: "Invoice billing web app for offline shops, optimizing queries with MongoDB aggregation."
    tech: ["Node.js", "Express", "MongoDB", "React"]
    github: "https://github.com/divinenaman/Invoice-Central"

  - name: "Confab Video Chat"
    status: "Completed"
    description: "Video chat web app using WebRTC and WebSockets for full-duplex communication."
    tech: ["JavaScript", "WebRTC", "WebSockets", "Node.js"]
    github: "https://github.com/divinenaman/confab-video-chat-app"`
  },
  "contact_info.js": {
    language: "javascript",
    content: `const developer = {
  name: "Naman Agarwal",
  email: "namanddev7@gmail.com",
  phone: "+91 9651111184",
  linkedin: "https://www.linkedin.com/in/naman-agarwal-01/",
  github: "https://github.com/divinenaman",
  status: "Open to backend, full-stack, and agentic AI roles"
};

console.log(\`Connecting to \${developer.name}...\\nEmail: \${developer.email}\`);
`
  }
};

// Token Placeholder Syntax Highlighting
function highlightCode(code, language) {
  const escapeHTML = str => str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  let escaped = escapeHTML(code);
  
  const tokens = [];
  const addToken = (text, className) => {
    const placeholder = `___TOKEN_VAL_${tokens.length}___`;
    tokens.push({ placeholder, html: `<span class="${className}">${text}</span>` });
    return placeholder;
  };
  
  if (language === "json") {
    escaped = escaped.replace(/(".*?":)/g, (match) => {
      return addToken(match.slice(0, -1), "token-key") + ":";
    });
    escaped = escaped.replace(/(:\s*)(".*?")/g, (match, p1, p2) => {
      return p1 + addToken(p2, "token-string");
    });
    escaped = escaped.replace(/\b(true|false|null|\d+(\.\d+)?)\b/g, '<span class="token-value">$1</span>');
    
  } else if (language === "yaml") {
    escaped = escaped.replace(/^(\s*)([a-zA-Z0-9_-]+)(:)/gm, (match, p1, p2, p3) => {
      return p1 + addToken(p2, "token-key") + p3;
    });
    escaped = escaped.replace(/(:\s*)([^\n]+)/g, (match, p1, p2) => {
      if (p2.startsWith("[") || p2.startsWith('"') || p2.startsWith("'")) {
        return p1 + addToken(p2, "token-string");
      }
      return p1 + addToken(p2, "token-value");
    });
    
  } else if (language === "markdown") {
    escaped = escaped.replace(/^(#+)(.*)$/gm, (match, p1, p2) => {
      return addToken(p1 + p2, "token-header");
    });
    escaped = escaped.replace(/^(\s*-\s+)/gm, (match) => {
      return addToken(match, "token-bullet");
    });
    escaped = escaped.replace(/`([^`]+)`/g, (match, p1) => {
      return addToken("`" + p1 + "`", "token-inline-code");
    });
    
  } else if (language === "javascript") {
    escaped = escaped.replace(/(".*?"|'.*?'|`[\s\S]*?`)/g, (match) => {
      return addToken(match, "token-string");
    });
    escaped = escaped.replace(/(\/\/.*)/g, (match) => {
      return addToken(match, "token-comment");
    });
    escaped = escaped.replace(/\b(const|let|var|function|return|console|log|fetch|class|if|else|new|import|export)\b/g, '<span class="token-keyword">$1</span>');
    escaped = escaped.replace(/\b([a-zA-Z0-9_]+)(?=\()/g, '<span class="token-function">$1</span>');
    
  } else if (language === "bash") {
    escaped = escaped.replace(/^(\[.*?\])/gm, (match) => {
      return addToken(match, "token-header");
    });
    escaped = escaped.replace(/^(\s*\*\s+)/gm, (match) => {
      return addToken(match, "token-bullet");
    });
    escaped = escaped.replace(/(\bRust\b|\bHaskell\b|\bGo\b|\bPython\b|\bTypeScript\b|\bDocker\b)/gi, '<span class="token-keyword">$1</span>');
  }

  for (let i = tokens.length - 1; i >= 0; i--) {
    escaped = escaped.replace(tokens[i].placeholder, tokens[i].html);
  }
  
  return escaped;
}

// Vim File buffer state
let currentOpenFile = "about_me.md";

function initEditor() {
  renderVimTabs();
  openFile(currentOpenFile);
}

function renderVimTabs() {
  const tabsContainer = document.getElementById("vim-tabs");
  if (!tabsContainer) return;
  
  tabsContainer.innerHTML = "";
  const filesList = Object.keys(fileSystem);
  
  filesList.forEach((filename, index) => {
    const tabElement = document.createElement("div");
    tabElement.className = `vim-tab ${filename === currentOpenFile ? "active" : ""}`;
    tabElement.innerHTML = `<span>${index + 1}: ${filename}</span>`;
    
    tabElement.addEventListener("click", () => {
      openFile(filename);
      executeTerminalCommand(`:e ${filename}`, false);
    });
    
    tabsContainer.appendChild(tabElement);
  });
}

function openFile(filename) {
  if (!fileSystem[filename]) return;
  currentOpenFile = filename;
  
  // Update Tab Status
  renderVimTabs();
  
  // Render Code Content
  const editorBody = document.getElementById("editor-code");
  const activeFile = fileSystem[filename];
  editorBody.innerHTML = highlightCode(activeFile.content, activeFile.language);
  
  // Render Gutter (Vim Line Numbers)
  const gutter = document.getElementById("vim-gutter");
  if (gutter) {
    const linesCount = activeFile.content.split("\n").length;
    let gutterHTML = "";
    for (let i = 1; i <= linesCount; i++) {
      gutterHTML += `${i}\n`;
    }
    // Fill remaining rows (simulating empty Vim buffer lines)
    const fillerLines = Math.max(0, 15 - linesCount);
    for (let i = 0; i < fillerLines; i++) {
      gutterHTML += `~\n`;
    }
    gutter.innerHTML = gutterHTML;
  }
  
  // Update Vim Statusline
  const fileInfo = document.getElementById("vim-file-info");
  const lineCol = document.getElementById("vim-line-col");
  if (fileInfo) {
    fileInfo.innerText = filename;
  }
  if (lineCol) {
    const totalLines = activeFile.content.split("\n").length;
    lineCol.innerText = `1,1          All`;
  }
  
  editorBody.scrollTop = 0;
}

// Interactive Terminal Console
const terminalHistory = [];
let historyIndex = -1;

function initTerminal() {
  const terminalInput = document.getElementById("terminal-input-field");
  const terminalContainer = document.getElementById("terminal-outputs");
  
  if (!terminalInput || !terminalContainer) return;
  
  terminalInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const command = terminalInput.value.trim();
      terminalInput.value = "";
      if (command) {
        executeTerminalCommand(command, true);
        terminalHistory.push(command);
        historyIndex = terminalHistory.length;
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex > 0) {
        historyIndex--;
        terminalInput.value = terminalHistory[historyIndex];
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex < terminalHistory.length - 1) {
        historyIndex++;
        terminalInput.value = terminalHistory[historyIndex];
      } else {
        historyIndex = terminalHistory.length;
        terminalInput.value = "";
      }
    }
  });
  
  document.querySelectorAll(".quick-cmd-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const command = btn.dataset.cmd;
      executeTerminalCommand(command, true);
    });
  });

  printWelcomeMessage();
}

function printWelcomeMessage() {
  const terminalContainer = document.getElementById("terminal-outputs");
  if (!terminalContainer) return;
  
  terminalContainer.innerHTML = `
<div class="terminal-line text-grey">NamanOS [Version 2.1.0]</div>
<div class="terminal-line text-grey">(c) 2026 Naman Agarwal. Vim-Mode Active.</div>
<div class="terminal-line text-grey">Vim commands are supported in console (e.g. <span class="text-cyan">:e Note.md</span>, <span class="text-cyan">:w</span>).</div>
<div class="terminal-line text-grey">Type <span class="text-cyan">help</span> or <span class="text-cyan">:help</span> for command lists.</div>
<div class="terminal-line"></div>`;
}

const asciiNaman = `
 _   _                               
| \\ | | __ _ _ __ ___   __ _ _ __    
|  \\| |/ _\` | '_ \` _ \\ / _\` | '_ \\   
| |\\  | (_| | | | | | | (_| | | | |  
|_| \\_|\\__,_|_| |_| |_|\\__,_|_| |_|  
`;

function executeTerminalCommand(commandString, isUserCommand = true) {
  const terminalContainer = document.getElementById("terminal-outputs");
  if (!terminalContainer) return;
  
  if (isUserCommand) {
    const promptLine = document.createElement("div");
    promptLine.className = "terminal-line prompt-line";
    promptLine.innerHTML = `<span class="prompt-user">visitor@naman-os</span>:<span class="prompt-path">~</span>$ <span class="cmd-text">${escapeHTML(commandString)}</span>`;
    terminalContainer.appendChild(promptLine);
  }
  
  const tokens = commandString.split(/\s+/);
  const primaryCmd = tokens[0].toLowerCase();
  const args = tokens.slice(1);
  
  let outputHTML = "";
  
  // Vim commands handler
  if (commandString.startsWith(":")) {
    const vimCmd = commandString.slice(1).trim();
    const cmdTokens = vimCmd.split(/\s+/);
    const cmdName = cmdTokens[0].toLowerCase();
    const cmdArg = cmdTokens.slice(1).join(" ");
    
    switch (cmdName) {
      case "e":
      case "edit":
        if (!cmdArg) {
          outputHTML = `<div>Argument required. Usage: <span class="text-cyan">:e &lt;filename&gt;</span></div>`;
        } else if (fileSystem[cmdArg]) {
          openFile(cmdArg);
          outputHTML = `<div>[buffer] Editing '${escapeHTML(cmdArg)}'</div>`;
        } else {
          outputHTML = `<span class="text-red">Error: buffer '${escapeHTML(cmdArg)}' not found. Type ':ls' to list files.</span>`;
        }
        break;
        
      case "ls":
      case "buffers":
        outputHTML = `
<div class="cmd-output-table">
  <div>1 %a  "about_me.md"             line 1</div>
  <div>2      "Note.md"                 line 0</div>
  <div>3      "core_skills.json"        line 0</div>
  <div>4      "experience.log"          line 0</div>
  <div>5      "projects.yaml"           line 0</div>
  <div>6      "contact_info.js"         line 0</div>
</div>`;
        break;
        
      case "w":
      case "write":
        outputHTML = `<div>"${escapeHTML(currentOpenFile)}" [written] 100% lines written.</div>`;
        break;
        
      case "q":
      case "quit":
        outputHTML = `<div>Vim is eternal. You cannot quit Naman's world. Type <span class="text-cyan">:e</span> or other commands.</div>`;
        break;
        
      case "wq":
        outputHTML = `<div>"${escapeHTML(currentOpenFile)}" written. Exit blocked by user system.</div>`;
        break;
        
      case "theme":
        toggleTheme();
        outputHTML = `<div>Theme changed.</div>`;
        break;
        
      case "help":
        outputHTML = `
<div class="cmd-output-table">
  <div><span class="text-cyan">:e &lt;file&gt;</span> - Open/edit buffer file</div>
  <div><span class="text-cyan">:ls</span> - List all buffers/files</div>
  <div><span class="text-cyan">:w</span> - Write current buffer</div>
  <div><span class="text-cyan">:q</span> - Quit simulated session</div>
  <div><span class="text-cyan">:theme</span> - Toggle minimal theme</div>
</div>`;
        break;
        
      default:
        outputHTML = `<span class="text-red">Not an editor command: ${escapeHTML(commandString)}</span>`;
    }
  } else {
    // Shell command handler
    switch (primaryCmd) {
      case "help":
        outputHTML = `
<div class="cmd-output-table">
  <div><span>help</span> - Display list of available commands</div>
  <div><span>ls</span> - List files in this workspace</div>
  <div><span>cat &lt;file&gt;</span> - Output contents of a file (e.g., Note.md)</div>
  <div><span>whoami</span> - Display role information</div>
  <div><span>neofetch</span> - Render Naman's system parameters</div>
  <div><span>git status</span> - Show workspace Git status</div>
  <div><span>theme</span> - Toggle between DARK & LIGHT minimal mode</div>
  <div><span>hack</span> - Run simulated system test</div>
  <div><span>clear</span> - Clear the terminal outputs</div>
</div>`;
        break;
        
      case "ls":
        outputHTML = `<div>about_me.md  Note.md  core_skills.json  experience.log  projects.yaml  contact_info.js</div>`;
        break;
        
      case "cat":
        if (!args[0]) {
          outputHTML = `<span class="text-red">Error: cat expects 1 argument. Usage: cat &lt;filename&gt;</span>`;
        } else {
          const targetFile = args[0].trim();
          if (fileSystem[targetFile]) {
            openFile(targetFile);
            outputHTML = `<pre class="terminal-code-block">${highlightCode(fileSystem[targetFile].content, fileSystem[targetFile].language)}</pre>`;
          } else {
            outputHTML = `<span class="text-red">Error: file '${escapeHTML(targetFile)}' not found. Type 'ls' to list files.</span>`;
          }
        }
        break;
        
      case "whoami":
        outputHTML = `
<div><strong>Naman Agarwal</strong></div>
<div class="text-grey">Software Development Engineer II @ Juspay</div>
<p style="margin-top:0.5rem">Bottom-up engineer specializing in Rust, functional programming, payments systems, and high-performance backend layers. Tech Lead for VIT Chennai Android Club.</p>`;
        break;
        
      case "neofetch":
        outputHTML = `
<div class="neofetch-container">
  <pre class="neofetch-ascii">${asciiNaman}</pre>
  <div class="neofetch-stats">
    <div><span>naman</span>@<span>juspay</span></div>
    <div>-------------------</div>
    <div><span>OS:</span> NamanOS v2.1.0 (Vim Minimalist)</div>
    <div><span>Kernel:</span> Gemini-Agentic-1.5-Pro</div>
    <div><span>Uptime:</span> 100%</div>
    <div><span>Shell:</span> Vim Bash Shell</div>
    <div><span>Role:</span> Software Development Engineer II @ Juspay</div>
    <div><span>Core Tech:</span> Rust, Haskell, Go, TypeScript, Docker</div>
    <div><span>Lines Coded:</span> 100k+</div>
  </div>
</div>`;
        break;
        
      case "git":
        if (args[0] === "status") {
          outputHTML = `
<div>On branch <span>main</span></div>
<div>Your branch is up to date with 'origin/main'.</div>
<div></div>
<div>nothing to commit, working tree clean</div>`;
        } else if (args[0] === "log") {
          outputHTML = `
<div>* a4f9d0c - Refactored Trident 3DS server in Rust (Juspay)</div>
<div>* 7c8b211 - Deployed Godel AI Agent scraper platform</div>
<div>* bb4d99a - Built clean-architecture back-ends with Hasura (ZeeQ)</div>
<div>* 5a9c02d - Designed automated duty allotment desktop app (GRP India)</div>`;
        } else {
          outputHTML = `<div>Usage: git status | git log</div>`;
        }
        break;
        
      case "theme":
        toggleTheme();
        outputHTML = `<div>Theme toggled.</div>`;
        break;
        
      case "hack":
        runHackAnimation(terminalContainer);
        return;
        
      case "clear":
        terminalContainer.innerHTML = "";
        return;
        
      default:
        outputHTML = `<span class="text-red">Command not found: '${escapeHTML(primaryCmd)}'. Type 'help' or ':help' for commands.</span>`;
    }
  }
  
  if (outputHTML) {
    const resultLine = document.createElement("div");
    resultLine.className = "terminal-line result-line";
    resultLine.innerHTML = outputHTML;
    terminalContainer.appendChild(resultLine);
  }
  
  terminalContainer.scrollTop = terminalContainer.scrollHeight;
}

function toggleTheme() {
  if (document.body.classList.contains("theme-light")) {
    document.body.classList.remove("theme-light");
    document.body.classList.add("theme-dark");
  } else {
    document.body.classList.remove("theme-dark");
    document.body.classList.add("theme-light");
  }
}

function runHackAnimation(terminalContainer) {
  const hackLines = [
    "Initializing minimal test protocol...",
    "Locating Juspay payment gateways...",
    "Bypassing OTP scraping constraints...",
    "Injecting model context protocol parameters...",
    "Spinning up Docker containers...",
    "Recompiling Trident server in Rust...",
    "Optimizing database aggregate queries...",
    "Establishing secure SSH connection...",
    "ACCESS GRANTED - Recruiter clearance approved!"
  ];
  
  let delay = 100;
  
  hackLines.forEach((lineText, idx) => {
    setTimeout(() => {
      const l = document.createElement("div");
      l.className = "terminal-line";
      l.innerHTML = `[+] ${lineText}`;
      terminalContainer.appendChild(l);
      terminalContainer.scrollTop = terminalContainer.scrollHeight;
    }, delay);
    delay += Math.random() * 150 + 100;
  });
}

function escapeHTML(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// Experience details toggler
function initExperienceTimeline() {
  document.querySelectorAll(".timeline-card-header").forEach(header => {
    header.addEventListener("click", () => {
      const card = header.closest(".timeline-card");
      card.classList.toggle("collapsed");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initEditor();
  initTerminal();
  initExperienceTimeline();
  
  const terminalWrapper = document.querySelector(".terminal-body");
  const terminalInput = document.getElementById("terminal-input-field");
  if (terminalWrapper && terminalInput) {
    terminalWrapper.addEventListener("click", () => {
      terminalInput.focus();
    });
  }
});
