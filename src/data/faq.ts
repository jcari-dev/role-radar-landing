import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
  {
    question: `What is ${siteDetails.siteName}?`,
    answer: `${siteDetails.siteName} is a Windows app that tracks company job boards, finds new postings on a schedule, and helps you manage applications in one place.`
  },
  {
    question: "Do I need an account to use it?",
    answer: "No. Download and use it right away. There is no sign up."
  },
  {
    question: "Is my data private?",
    answer: "Yes. Everything is stored locally in a SQLite database on your machine. Nothing is sent anywhere."
  },
  {
    question: "Does it scrape websites?",
    answer: "No. It uses official job board APIs where available for reliability and compliance."
  },
  {
    question: "Which job boards are supported?",
    answer: "Greenhouse today, with more planned. You add companies by pasting their job board URL."
  },
  {
    question: "How do I add a company?",
    answer: "Go to Companies, paste the job board URL, and select Track."
  },
  {
    question: "How often does it check for new jobs?",
    answer: "You choose the interval in Settings."
  },
  {
    question: "Can I filter results?",
    answer: "Yes. Filter by keywords, job title, location, company, status, date posted, and last updated. Include or exclude companies."
  },
  {
    question: "Can I save filters for later?",
    answer: "Saved filters are planned. For now you can adjust the filter panel quickly to narrow results."
  },
  {
    question: "Can I track application status?",
    answer: "Yes. Set statuses, hide roles you are not pursuing, and view your activity on the Dashboard."
  },
  {
    question: "Will I get notifications?",
    answer: "Yes. Enable desktop alerts for new jobs, available updates, and scan errors in Settings."
  },
  {
    question: "Does it run in the background?",
    answer: "Yes. It can sit in the system tray and notify you while the window is closed."
  },
  {
    question: "Can I export or back up my data?",
    answer: "Yes. Export CSV, create a backup file, and restore it later from Settings."
  },
  {
    question: "Can I use it on more than one computer?",
    answer: "It is built for Windows. To move data, create a backup on one PC and restore it on another."
  },
  {
    question: "Does it work offline?",
    answer: "You can browse saved data offline. Scans and updates need an internet connection."
  },
  {
    question: "Where do I get help or report a bug?",
    answer: "Use the GitHub link in Settings or the contact email on this site. Feedback is always welcome, I read everything."
  }
];
