import bookDetails from "../assets/images/bookclub-book.webp";
import home from "../assets/images/bookclub-home.webp";
import readingLists from "../assets/images/bookclub-list.webp";
import searchbar from "../assets/images/bookclub-searchbar.webp";
import searchpage from "../assets/images/bookclub-searchpage.webp";
import profile from "../assets/images/bookclub-profile.webp";
import carlaImage from "../assets/images/carla-screenshot.webp"
import elkImage from "../assets/images/elk-screenshot.webp"
import idleImage from "../assets/images/idle-screenshot.webp"


export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectHighlight {
  title: string;
  description: string;
}

export interface Project {
  id: string;

  title: string;
  subtitle: string;
  description: string;

  images: ProjectImage[];

  technologies: string[];
  highlights: ProjectHighlight[];

  github: string;
  liveDemo?: string;
}

export interface OtherProject {
  id: string;

  title: string;
  subtitle: string;

  description: string;

  image: string;

  technologies: string[];

  github?: string;
  liveDemo?: string;
}

export interface SkillGroup {
  title: string;

  items?: string[];

  education?: string[];

  certifications?: string[];
}

export const featuredProject: Project = {
  id: "bookclub",

  title: "BookClub",

  subtitle: "A Goodreads-inspired social platform.",

  description:
    "A production-ready full-stack web application built with Django REST Framework, React, PostgreSQL, Docker and AWS. Users can discover books, create reading lists, write reviews, and manage their personal library through a responsive web interface.",

  technologies: [
    "React",
    "TypeScript",
    "Django",
    "Django REST Framework",
    "PostgreSQL",
    "Docker",
    "AWS",
    "Terraform",
  ],
  images: [
    {
      src: home,
      alt: "BookClub home page showing featured books",
      caption: "Home",
    },
    {
      src: bookDetails,
      alt: "Book details page with reviews and ratings",
      caption: "Book",
    },
    {
      src: searchbar,
      alt: "Autocomplete search suggestions",
      caption: "Searchbar",
    },
    {
      src: profile,
      alt: "User profile with reviews and reading lists",
      caption: "Profile",
    },
    {
      src: readingLists,
      alt: "Reading list modal displaying books",
      caption: "Lists",
    },
    {
      src: searchpage,
      alt: "Paginated Search Result Page",
      caption: "Search",
    },
  ],

  highlights: [
    {
      title: "ETL Pipeline",
      description:
        "Built an ETL pipeline to clean, normalize, and import over 52,000 books into a normalized PostgreSQL database.",
    },
    {
      title: "Database Design",
      description:
        "Designed a relational schema supporting books, authors, genres, publishers, reviews, and user-created reading lists.",
    },
    {
      title: "Advanced Search",
      description:
        "Implemented multi-field search across books, authors, genres, publishers, and series for fast content discovery.",
    },
    {
      title: "CI/CD Pipeline",
      description:
        "Built a GitHub Actions CI/CD pipeline to automate application testing, container image builds, and production deployments.",
    },
    {
      title: "Cloud Platform",
      description:
        "Designed and deployed production infrastructure on AWS using Docker, EC2, Application Load Balancer, Route 53, Systems Manager Parameter Store, and CloudWatch, with automated deployments and centralized monitoring."
    },
  ],

  github: "https://github.com/SinanErbezci/bookclub",

  liveDemo: "https://bookclub.sinanbook.club",
};

export const otherProjects: OtherProject[] = [
  {
      id: "carla",

  title: "Autonomous Driving with CARLA",

  subtitle: "Graduation Project",

  description:
    "Developed an autonomous driving perception pipeline using the CARLA simulator. Combined YOLO object detection with depth estimation and implemented a finite state machine for real-time vehicle decision making.",

  technologies: [
    "Python",
    "PyTorch",
    "YOLO",
    "CARLA",
    "Unreal Engine",
    "NumPy",
  ],

  image: carlaImage,
  },
  {
      id: "electricity",

  title: "Electricity Demand Forecasting",

  subtitle: "Graduation Project",

  description:
    "Developed and evaluated recurrent neural network models to forecast Turkey's electricity demand using historical time-series data, comparing RNN, LSTM, and GRU architectures.",

  technologies: [
    "Python",
    "PyTorch",
    "LSTM",
    "GRU",
    "RNN",
    "scikit-learn",
  ],

  image: elkImage,
  },
  {
      id: "code-idle",

  title: "CS50X Idle Game",

  subtitle: "Harvard CS50x Final Project",

  description:
    "Educational browser game combining idle progression with a typing challenge where players complete code snippets to gain experience and progress through all eleven weeks of the CS50x course.",

  technologies: [
    "HTML",
    "CSS",
    "JavaScript",
  ],

  image: idleImage,

  github: "https://github.com/SinanErbezci/cs50x_final",

  liveDemo: "...",
  } 
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Cloud & Infrastructure",

    items: [
      "AWS",
      "Terraform",
      "Docker",
      "Linux",
      "Amazon EC2",
      "Amazon S3",
      "CloudFront",
    ],
  },

  {
    title: "Backend",

    items: [
      "Python",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "REST APIs",
    ],
  },

  {
    title: "Frontend",

    items: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
  },

  {
    title: "DevOps & Tools",

    items: [
      "Git",
      "GitHub Actions",
      "Docker Compose",
      "Nginx",
      "CloudWatch",
      "Postman",
    ],
  },

  {
    title: "Education & Certifications",

    education: [
      "B.Sc. Electronics & Communication Engineering",
      "Double Degree in Electrical Engineering",
    ],

    certifications: [
      "AWS Certified Solutions Architect – Associate",
      "CS50x: Introduction to Computer Science",
      "DevOps with Docker (University of Helsinki)",
    ],
  },
];