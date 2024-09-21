import skills_avatar from "../../assets/images/skills_avatar.png";
import projects_avatar from "../../assets/images/projects_avatar.png";
import experience_avatar from "../../assets/images/experience_avatar.png";
import interest_avatar from "../../assets/images/interest_avatar.png";
import react_icon from "../../assets/images/react_icon.png";
import next_icon from "../../assets/images/next_icon.png";
import node_icon from "../../assets/images/node_icon.png";
import redux_icon from "../../assets/images/redux_icon.png";
import redux_toolkit_icon from "../../assets/images/redux_toolkit_icon.png";
import js_icon from "../../assets/images/js_icon.png";
import ts_icon from "../../assets/images/ts_icon.png";
import html_icon from "../../assets/images/html_icon.png";
import css_icon from "../../assets/images/css_icon.png";
import sass_icon from "../../assets/images/sass_icon.png";
import bootstrap_icon from "../../assets/images/bootstrap_icon.png";
import tailwind_icon from "../../assets/images/tailwind_icon.png";
import mui_icon from "../../assets/images/mui_icon.png";
import vscode_icon from "../../assets/images/vscode_icon.png";
import copilot_icon from "../../assets/images/copilot_icon.png";
import chatgpt_icon from "../../assets/images/chatgpt_icon.png";
import mongodb_icon from "../../assets/images/mongodb_icon.png";
import mysql_icon from "../../assets/images/mysql_icon.png";
import postman_icon from "../../assets/images/postman_icon.png";
import insomnia_icon from "../../assets/images/insomnia_icon.png";
import swagger_icon from "../../assets/images/swagger_icon.png";
import jest_icon from "../../assets/images/jest_icon.png";
import figma_icon from "../../assets/images/figma_icon.png";
import react_devtool_icon from "../../assets/images/react_devtools_icon.png";
import adobe_photoshop_icon from "../../assets/images/adobe_photoshop_icon.png";
import sitecore_icon from "../../assets/images/sitecore_icon.png";
import wordpress_icon from "../../assets/images/wordpress_icon.png";
import github_icon from "../../assets/images/github_icon.png";
import bitbucket_icon from "../../assets/images/bitbucket_icon.png";
import jira_icon from "../../assets/images/jira_icon.png";
import trello_icon from "../../assets/images/trello_icon.png";
import slack_icon from "../../assets/images/slack_icon.png";
import msteams_icon from "../../assets/images/msteams_icon.png";

export const mainData = {
  intro: {
    title: "Hello, I'm a Front-End Developer!",
    subTitle: "Bringing Your Web Ideas to Life",
    description:
      "I craft engaging and responsive web experiences using HTML, CSS, and JavaScript. With a focus on modern frameworks, I turn concepts into seamless, interactive interfaces. Check out my work to see how I can help bring your vision to reality.",
    exploreMe: "Click here to explore me",
  },
  section: {
    cards: [
      {
        title: "Skills",
        icon: skills_avatar,
        avatar: {
          name: "skills_avatar.png",
          alt: "skills_avatar-logo",
          height: 120,
          width: 120,
        },
        description:
          "Experienced in HTML5, CSS3, JavaScript, and TypeScript, I specialize in ReactJS, NextJS for building dynamic web applications.",
      },
      {
        title: "Projects",
        icon: projects_avatar,
        avatar: {
          name: "projects_avatar.png",
          alt: "projects_avatar-logo",
          height: 120,
          width: 120,
        },
        description:
          "Led and contributed to diverse web development projects, utilizing modern frameworks like ReactJS and NextJS for building responsive, high-performance applications.",
      },
      {
        title: "Experience",
        icon: experience_avatar,
        avatar: {
          name: "experience_avatar.png",
          alt: "experience_avatar-logo",
          height: 120,
          width: 120,
        },
        description:
          "I have accumulated extensive experience working in web development roles, where I contributed to building and maintaining large-scale applications.",
      },
      {
        title: "Interests",
        icon: interest_avatar,
        avatar: {
          name: "interest_avatar.png",
          alt: "interest_avatar-logo",
          height: 120,
          width: 120,
        },
        description:
          "Passionate about traveling, reading manga, watching anime, and playing metal guitar. These interests keep me inspired and balanced.",
      },
    ],
  },
  skillSection: {
    title: "Skills",
    sections: [
      {
        title: "Web Technologies",
        skills: [
          { name: "React JS", icon: react_icon },
          { name: "Next JS", icon: next_icon },
          { name: "Node JS", icon: node_icon },
          { name: "Redux", icon: redux_icon },
          { name: "Redux-toolkit", icon: redux_toolkit_icon },
          { name: "JavaScript", icon: js_icon },
          { name: "TypeScript", icon: ts_icon },
          { name: "HTML5", icon: html_icon },
          { name: "CSS3", icon: css_icon },
          { name: "SASS", icon: sass_icon },
          { name: "Bootstrap", icon: bootstrap_icon },
          { name: "Tailwind", icon: tailwind_icon },
          { name: "MUI", icon: mui_icon },
        ],
      },
      {
        title: "Coding Tools",
        skills: [
          {
            name: "VS Code",
            icon: vscode_icon,
          },
          {
            name: "Copilot",
            icon: copilot_icon,
          },
          {
            name: "ChatGPT",
            icon: chatgpt_icon,
          },
        ],
      },
      {
        title: "Database",
        skills: [
          { name: "MongoDB", icon: mongodb_icon },
          { name: "MySQL", icon: mysql_icon },
        ],
      },
      {
        title: "API Tools",
        skills: [
          { name: "Postman", icon: postman_icon },
          { name: "Insomnia", icon: insomnia_icon },
          { name: "Swagger", icon: swagger_icon },
        ],
      },
      {
        title: "Testing Library",
        skills: [{ name: "Jest", icon: jest_icon }],
      },
      {
        title: "UI Tools",
        skills: [
          { name: "Figma", icon: figma_icon },
          { name: "React Dev Tools", icon: react_devtool_icon },
          { name: "Adobe Photoshop", icon: adobe_photoshop_icon },
        ],
      },
      {
        title: "CMS",
        skills: [
          { name: "Sitecore", icon: sitecore_icon },
          { name: "Wordpress", icon: wordpress_icon },
        ],
      },
      {
        title: "Source Code Management",
        skills: [
          { name: "Github", icon: github_icon },
          { name: "Bitbucket", icon: bitbucket_icon },
        ],
      },
      {
        title: "Team Cordination & Task Management",
        skills: [
          { name: "Jira", icon: jira_icon },
          { name: "Slack", icon: slack_icon },
          { name: "Trello", icon: trello_icon },
          { name: "MS-Teams", icon: msteams_icon },
        ],
      },
    ],
  },
  projectSection: {
    title: "Projects",
    projects: [
      {
        title: "Tricera",
        description:
          "Tricera Print is a boutique offering premium bespoke printing, mounting, and framing services. Specializing in fine art printing, scanning, and art reproduction, it caters to both individual artists and businesses. The platform integrates dropshipping and fulfillment services, providing a seamless end-to-end solution for creatives looking to showcase their work with professional quality. Whether you're an artist or a business, Tricera Print delivers tailored solutions for your artistic and printing needs",
        rolesAndResp: {
          title: "My Role and Responsibilities",
          rolesAndResp: [
            "Built and optimized cart and order modules.",
            "Implemented real-time product visualization.",
            "Performed continuous bug fixes.",
          ],
        },
        techUsed: {
          title: "Technology Used",
          techs: {
            frontend: {
              title: "Frontend techs",
              techs: ["React Js", "Wordpress"],
            },
            backend: { title: "Backend techs", techs: ["Node Js", "MongoDB"] },
          },
        },
        team: {
          title: "Team",
          members: [
            { memberType: "Manger", number: 1 },
            { memberType: "Team Lead", number: 1 },
            { memberType: "Frontend", number: 2 },
            { memberType: "Backend", number: 2 },
            { memberType: "QA", number: 1 },
          ],
        },
        projectLink: "https://app.triceraprint.com/",
      },
    ],
  },
  experienceSection: {
    title: "Experiences",
    experiences: [
      {
        companyName: "Orion eSolutions",
        description:
          "Orion eSolutions is a technology consulting company providing custom software development, DevOps, cloud management, and cybersecurity services. They help businesses with digital transformation, building scalable IT infrastructure, and managing cloud platforms like AWS, Azure, and Google Cloud. Orion eSolutions also offers expertise in enterprise solutions, microservices architecture, and web and mobile app development, with a focus on improving operational efficiency and security for businesses across various industries.",
        startData: "August 2021",
        endData: "Present",
        location: "Punjab, India",
        responsibilities: {
          title: "Responsibilities",
          resp: [
            "Contributed to React and Next js projects through problem-solving, teamwork, and mentoring of junior developers.",
            "Analyzed solutions and coding fixes for software problems.",
            "Liaised with QA testers to perform testing meeting various parameters.",
            "Created successful websites that met requirements for objectives such as load speed and design.",
            "Supported continuous improvement by investigating alternatives and technologies for review.",
          ],
        },
        link: "https://orionesolutions.com/",
      },
    ],
  },
  interestSection: {
    title: "Interests",
    interests: [
      {
        title: "Coding Challenges",
        description:
          "I actively engage in coding challenges on platforms like LeetCode and HackerRank to sharpen my problem-solving skills and algorithmic thinking. These challenges range from basic to advanced levels, covering topics such as data structures, algorithms, and dynamic programming. I also take on hypothetical scenarios designed for junior developers, which help me simulate real-world problem-solving and improve my coding efficiency.",
      },
      {
        title: "Exploring New Javascript Techs",
        description:
          "I have a strong passion for exploring the latest JavaScript frameworks and libraries to stay ahead in the rapidly evolving tech landscape. I actively research and experiment with emerging technologies such as Next.js, React Native, and Vite, among others. This exploration allows me to understand their unique features, advantages, and best practices.",
      },
      {
        title: "Manga and Anime",
        description:
          "As an avid fan of manga and anime, I enjoy immersing myself in diverse narratives and art styles that reflect a wide range of cultures and themes. From action-packed shonen series to thought-provoking slice-of-life stories, I appreciate the creativity and depth these mediums offer. My love for manga and anime inspires my artistic sensibilities and storytelling approach, influencing my work in design and development.",
      },
      {
        title: "Console Gaming",
        description:
          "I am passionate about console gaming, appreciating the immersive experiences and rich storytelling that games offer. From epic adventures in open-world environments to competitive multiplayer matches, I enjoy exploring various genres and styles. Gaming not only provides entertainment but also enhances my strategic thinking and teamwork skills. I love engaging with communities, discussing game mechanics, and sharing experiences with fellow gamers. ",
      },
      {
        title: "Bike Riding",
        description:
          "I am passionate about motorcycle riding, relishing the sense of freedom and adventure that comes with hitting the open road. Whether cruising along scenic highways or tackling challenging trails, I enjoy the thrill of the ride and the connection it fosters with the environment. Motorcycle riding not only fuels my love for exploration but also enhances my focus and decision-making skills.",
      },
    ],
  },
};
