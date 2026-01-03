export const SITE = {
  name: "Logan Becker",
  role: "Computer Science + Data Science • Stats minor",
  tagline: "I build clean data pipelines, practical ML models, and polished apps.",
  location: "Iowa State University",
  email: "logan@example.com",
  links: {
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
    resume: "/resume.pdf",
  },
  highlights: [
    { label: "Focus", value: "Sports analytics, CV, full-stack" },
    { label: "Style", value: "Clean data, clear UX, fast shipping" },
    { label: "Currently", value: "Building & polishing portfolio + projects" },
  ],
};

export const SKILLS = [
  { group: "Languages", items: ["Python", "Java", "JavaScript", "SQL"] },
  { group: "Data/ML", items: ["Pandas", "Scikit-learn", "Feature engineering", "Model evaluation"] },
  { group: "Web", items: ["React", "Vite", "Tailwind", "HTML", "CSS"] },
  { group: "Tools", items: ["Git/GitHub", "Docker (basic)", "Linux (basic)", "MySQL", "T-SQL"] },
];

export const PROJECTS = [
  {
    slug: "full-court-forecast",
    title: "Full Court Forecast",
    short: "College basketball prediction pipeline: scrape → store → features → models.",
    stack: ["Python", "Pandas", "MySQL", "ML"],
    links: {
      repo: "https://github.com/",
      demo: "",
    },
    impact: [
      "Built a repeatable pipeline for scraping and cleaning game logs.",
      "Structured relational storage for fast feature queries.",
      "Trained baseline models and improved via feature iteration.",
    ],
    bullets: [
      "Data ingestion scripts with rate limiting + structured exports",
      "Feature set includes recent form, shooting efficiency, opponent context",
      "Evaluation: accuracy, log loss, calibration checks",
    ],
  },
  {
    slug: "unitrade",
    title: "UniTrade",
    short: "Android university marketplace with listings + real-time bid updates.",
    stack: ["Java", "Android", "APIs"],
    links: { repo: "https://github.com/", demo: "" },
    impact: [
      "Designed clean listing flows and data model for marketplace posts.",
      "Integrated API requests and real-time bidding updates.",
    ],
    bullets: [
      "Volley requests + backend endpoints",
      "Auction-style listings and bid interaction",
      "UI handling for multiple listing types",
    ],
  },
  {
    slug: "robotic-chess-vision",
    title: "Robotic Chess Vision Pipeline",
    short: "Detect pieces → map board → generate FEN → drive chess engine decisions.",
    stack: ["YOLO", "OpenCV", "ROS"],
    links: { repo: "https://github.com/", demo: "" },
    impact: [
      "Built a pipeline from vision detection to structured board state output.",
      "Improved reliability with calibration + mapping logic.",
    ],
    bullets: [
      "Piece detection + board coordinate mapping",
      "FEN generation for engine integration",
      "System integration mindset: accuracy + robustness",
    ],
  },
];
