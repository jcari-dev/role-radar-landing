import {
  FiBarChart2,
  FiBell,
  FiBriefcase,
  FiCloudOff,
  FiDatabase,
  FiFilter,
  FiLock,
  FiPieChart,
  FiShield,
  FiTarget,
  FiTrendingUp,
  FiUser,
} from "react-icons/fi";

import { IBenefit } from "@/types";

export const benefits: IBenefit[] = [
  {
    title: "Automated Job Monitoring",
    description:
      "RoleRadar checks your favorite companies on a schedule you set and pulls fresh listings right to your desktop.",
    bullets: [
      {
        title: "Scheduled Scans",
        description:
          "Background scanner hits official APIs at the interval you pick.",
        icon: <FiTrendingUp size={26} />,
      },
      {
        title: "Change Tracking",
        description:
          "Highlights what is new since the last scan and what you applied to today or this week.",
        icon: <FiTarget size={26} />,
      },
      {
        title: "Powerful Filtering",
        description:
          "Slice results by keywords, location, title, date ranges, company and more.",
        icon: <FiFilter size={26} />,
      },
    ],
    imageSrc: "/roleradar-landing/images/mockup-1.png",
  },
  {
    title: "Application Tracking and Insights",
    description:
      "All your actions are logged so you always know where every role sits in the pipeline.",
    bullets: [
      {
        title: "Statuses & History",
        description:
          "Mark jobs as applied, hidden or archived and view a full activity timeline.",
        icon: <FiPieChart size={26} />,
      },
      {
        title: "Live Stats",
        description:
          "Dashboard cards, trend charts and top-company rankings update after each scan.",
        icon: <FiBarChart2 size={26} />,
      },
      {
        title: "PDF & CSV Export",
        description:
          "One-click export for sharing, reporting or personal backups.",
        icon: <FiBriefcase size={26} />,
      },
    ],
    imageSrc: "/roleradar-landing/images/mockup-2.png",
  },
  {
    title: "Real-Time Desktop Alerts",
    description:
      "Stay in the loop without babysitting the app. RoleRadar pops up native notifications while it works in the tray.",
    bullets: [
      {
        title: "New Job Alerts",
        description: "Instant push when a posting matches your filters.",
        icon: <FiBell size={26} />,
      },
      {
        title: "Update Reminders",
        description: "Heads-up when an app update is ready to install.",
        icon: <FiUser size={26} />,
      },
      {
        title: "Error Warnings",
        description:
          "Get notified fast if a scan fails or something looks wrong.",
        icon: <FiShield size={26} />,
      },
    ],
    imageSrc: "/roleradar-landing/images/mockup-1.png",
  },
  {
    title: "Private, Local & Future-Proof",
    description:
      "Everything lives on your machine, no accounts or scraping tricks. Your data stays yours.",
    bullets: [
      {
        title: "100 % Local Storage",
        description:
          "Lightweight Windows executable with a local SQLite database.",
        icon: <FiDatabase size={26} />,
      },
      {
        title: "Official APIs Only",
        description:
          "Pulls listings through supported endpoints for reliability and compliance.",
        icon: <FiLock size={26} />,
      },
      {
        title: "Offline Backups",
        description:
          "Create full backups or reset the tracker with two clicks.",
        icon: <FiCloudOff size={26} />,
      },
    ],
    imageSrc: "/roleradar-landing/images/mockup-1.png",
  },
];
