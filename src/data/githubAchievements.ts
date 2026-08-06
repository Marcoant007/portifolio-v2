import type { GithubAchievement } from "../types";

const ASSETS = "https://github.githubassets.com/images/modules/profile/achievements";
const PROFILE = "https://github.com/Marcoant007?tab=achievements";

export const githubAchievements: GithubAchievement[] = [
  {
    title: "Pair Extraordinaire",
    image: `${ASSETS}/pair-extraordinaire-default.png`,
    href: `${PROFILE}&achievement=pair-extraordinaire`,
    tier: "x2",
  },
  {
    title: "Pull Shark",
    image: `${ASSETS}/pull-shark-default.png`,
    href: `${PROFILE}&achievement=pull-shark`,
    tier: "x3",
  },
  {
    title: "YOLO",
    image: `${ASSETS}/yolo-default.png`,
    href: `${PROFILE}&achievement=yolo`,
  },
  {
    title: "Quickdraw",
    image: `${ASSETS}/quickdraw-default.png`,
    href: `${PROFILE}&achievement=quickdraw`,
  },
  {
    title: "Starstruck",
    image: `${ASSETS}/starstruck-default.png`,
    href: `${PROFILE}&achievement=starstruck`,
  },
  {
    title: "Arctic Code Vault Contributor",
    image: `${ASSETS}/arctic-code-vault-contributor-default.png`,
    href: `${PROFILE}&achievement=arctic-code-vault-contributor`,
  },
];
