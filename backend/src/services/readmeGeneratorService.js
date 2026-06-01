const {buildBadges}=require("../utils/badgeUtils");
const cb=(lang,v)=>`\n\`\`\`${lang||""}\n${v||""}\n\`\`\`\n`;
const clean=(v,f="")=>v===undefined||v===null||v===""?f:String(v);
const list=(arr=[])=>arr.filter(Boolean).map(x=>`- ${x}`).join("\n");
const techTable=(s=[])=>`| Technology | Status |\n|---|---|\n${s.map(t=>`| ${t} | Included |`).join("\n")}`;
const featureList=(fs=[])=>fs.length?fs.map(f=>`- ${f.emoji||"✅"} **${f.title}**${f.description?` — ${f.description}`:""}`).join("\n"):"- ✅ Professional feature set";
const envBlock=(vars=[])=>vars.length?vars.map(v=>`${v.key}=${v.valueExample||""} # ${v.description||""}`).join("\n"):"VITE_API_URL=http://localhost:5000/api\nMONGO_URI=mongodb://localhost:27017/app\nJWT_SECRET=change_this_secret";
const apiTable=(es=[])=>es.length?`| Method | Endpoint | Description | Auth |\n|---|---|---|---|\n${es.map(e=>`| ${e.method||"GET"} | \`${e.path||"/api"}\` | ${e.description||"API endpoint"} | ${e.authRequired?"Yes":"No"} |`).join("\n")}`:"| Method | Endpoint | Description | Auth |\n|---|---|---|---|\n| GET | `/api/health` | Health check | No |";
function generateReadme(data={}){const emoji=data.includeEmojis!==false,anim=data.includeAnimations!==false,color=data.greenTheme!==false?"16A34A":"4F46E5",title=clean(data.projectName,"Project Title"),subtitle=clean(data.subtitle,data.category||"GitHub Project"),tag=clean(data.description,"A professional portfolio project."),badges=data.includeBadges!==false?buildBadges(data.techStack||[]):"",shot=clean(data.screenshotPath,"screenshots/preview.png");return `<div align="center">

# ${emoji?"🌿 ":""}${title}
### ${emoji?"✨ ":""}${subtitle}

${anim?`<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=800&size=26&duration=2500&pause=700&color=${color}&center=true&vCenter=true&width=950&lines=${encodeURIComponent(title)};${encodeURIComponent(subtitle)};Portfolio+Ready+Project" alt="Typing SVG" />

<br/>

<img src="https://capsule-render.vercel.app/api?type=waving&color=${color}&height=95&section=header" width="100%" />

<br/>`:""}

${badges}

<br/>

**${tag}**

</div>

---

## ${emoji?"📸 ":""}Project Preview

<div align="center">

<img src="${shot}" alt="${title} Preview" width="100%" />

</div>

---

## ${emoji?"🚀 ":""}Overview

${clean(data.overview,tag)}

---

## ${emoji?"🎯 ":""}Project Purpose

| Target | Details |
|---|---|
| Role | ${clean(data.targetRole,"Full Stack Developer")} |
| Category | ${clean(data.category,"Portfolio Project")} |
| Repository | \`${clean(data.repositoryName,"project-repository")}\` |

---

## ${emoji?"✨ ":""}Features

${featureList(data.features)}

---

## ${emoji?"🧰 ":""}Tech Stack

${techTable(data.techStack||[])}

---

## ${emoji?"🏗️ ":""}System Architecture

\`\`\`text
Frontend -> Backend -> Database
\`\`\`

---

## ${emoji?"📁 ":""}Project Structure

${cb("text",data.folderStructure||`${clean(data.repositoryName,"project")}/\n├── frontend/\n├── backend/\n└── README.md`)}

---

## ${emoji?"⚙️ ":""}Environment Variables

${cb("env",envBlock(data.environmentVariables))}

---

## ${emoji?"🧑‍💻 ":""}Run Locally

${(data.installationCommands&&data.installationCommands.length)?cb("bash",data.installationCommands.join("\n")):cb("bash","npm install")}
${(data.runCommands&&data.runCommands.length)?data.runCommands.map(r=>`### ${r.label}\n\`\`\`bash\n${r.command}\n\`\`\``).join("\n\n"):cb("bash","npm run dev")}

---

## ${emoji?"🔌 ":""}API Endpoints

${apiTable(data.apiEndpoints)}

---

## ${emoji?"✅ ":""}Validation Features

- Required field validation
- URL validation
- Duplicate value prevention
- Clean user-friendly messages
- Secure backend validation

---

## ${emoji?"🧩 ":""}Future Improvements

${list((data.futureImprovements&&data.futureImprovements.length)?data.futureImprovements:["AI-powered improvements","GitHub OAuth","Template marketplace"])}

---

## ${emoji?"📌 ":""}CV Bullet

> ${clean(data.cvBullet,`Developed ${title}, a production-style ${clean(data.category,"full-stack")} project with modern UI, secure backend APIs, validations, and professional documentation.`)}

---

## ${emoji?"🎤 ":""}Interview Explanation

> ${clean(data.interviewExplanation,`${title} is a ${clean(data.category,"portfolio")} project built for ${clean(data.targetRole,"developer")} roles. It demonstrates clean architecture, user-friendly UI, validation, and professional GitHub documentation.`)}

---

## ${emoji?"👨‍💻 ":""}Author

<div align="center">

**${clean(data.authorName,"Your Name")}**

${data.authorGithubUrl?`[![GitHub](https://img.shields.io/badge/GitHub-Profile-181717?style=for-the-badge&logo=github)](${data.authorGithubUrl})`:""}
${data.linkedinUrl?`[![LinkedIn](https://img.shields.io/badge/LinkedIn-Profile-0A66C2?style=for-the-badge&logo=linkedin)](${data.linkedinUrl})`:""}
${data.portfolioUrl?`[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-${color}?style=for-the-badge&logo=vercel&logoColor=white)](${data.portfolioUrl})`:""}

</div>

---

<div align="center">

### ${emoji?"⭐ ":""}If you like this project, give it a star!

${anim?`<img src="https://capsule-render.vercel.app/api?type=waving&color=${color}&height=120&section=footer" width="100%" />`:""}

</div>`} module.exports={generateReadme};
