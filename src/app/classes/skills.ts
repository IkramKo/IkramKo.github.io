import { SkillsIcons } from "./skills-icons";
export interface SkillsInfo {
    icon: string,
    name: string
}

export const SKILLS_LIST: SkillsInfo[] = [
    { icon: SkillsIcons.Ts, name: 'TypeScript'},
    { icon: SkillsIcons.Angular, name: 'Angular'},
    { icon: SkillsIcons.NodeJs, name: 'NodeJs'},
    { icon: SkillsIcons.Html, name: 'HTML5'},
    { icon: SkillsIcons.Css, name: 'CSS'},
    // { icon: SkillsIcons.C, name: 'C'}, Been a while
    { icon: SkillsIcons.Python, name: 'Python'},
    { icon: SkillsIcons.Java, name: 'Java'},
    { icon: SkillsIcons.Cpp, name: 'C++'},
    { icon: SkillsIcons.Flutter, name: 'Flutter'},
    { icon: SkillsIcons.Sql, name: 'MYSQL'},
    { icon: SkillsIcons.Git, name: 'Git'},
    { icon: SkillsIcons.Docker, name: 'Docker'},
    // { icon: SkillsIcons.Jira, name: 'Jira'}, Irrelecant compared to the rest
    { icon: SkillsIcons.Jenkins, name: 'Jenkins'},
    { icon: SkillsIcons.Linux, name: 'Linux'}
];