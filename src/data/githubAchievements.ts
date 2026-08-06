import type { GithubAchievement } from "../types";

const ASSETS = "https://github.githubassets.com/images/modules/profile/achievements";
const PROFILE = "https://github.com/Marcoant007?tab=achievements";

export const githubAchievements: GithubAchievement[] = [
  {
    title: "Pair Extraordinaire",
    image: `${ASSETS}/pair-extraordinaire-default.png`,
    href: `${PROFILE}&achievement=pair-extraordinaire`,
    tier: "x2",
    color: "#57ab5a",
  },
  {
    title: "Pull Shark",
    image: `${ASSETS}/pull-shark-default.png`,
    href: `${PROFILE}&achievement=pull-shark`,
    tier: "x3",
    color: "#3b82f6",
  },
  {
    title: "YOLO",
    image: `${ASSETS}/yolo-default.png`,
    href: `${PROFILE}&achievement=yolo`,
    color: "#ec4899",
  },
  {
    title: "Quickdraw",
    image: `${ASSETS}/quickdraw-default.png`,
    href: `${PROFILE}&achievement=quickdraw`,
    color: "#f59e0b",
  },
  {
    title: "Starstruck",
    image: `${ASSETS}/starstruck-default.png`,
    href: `${PROFILE}&achievement=starstruck`,
    color: "#eab308",
  },
  {
    title: "Arctic Code Vault Contributor",
    image: `${ASSETS}/arctic-code-vault-contributor-default.png`,
    href: `${PROFILE}&achievement=arctic-code-vault-contributor`,
    color: "#38bdf8",
  },
];
