import bookDetails from "../assets/images/bookclub-book.webp";
import home from "../assets/images/bookclub-home.webp";
import readingLists from "../assets/images/bookclub-list.webp";
import profile from "../assets/images/bookclub-profile.webp";
import carlaImage from "../assets/images/carla-screenshot.webp"
import elkImage from "../assets/images/elk-screenshot.webp"
import idleImage from "../assets/images/idle-screenshot.webp"
import semantic from "../assets/images/semantic.gif";
import explanation from "../assets/images/explanation.gif";


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

export interface Education {
  degrees: string[];
  university: string;
}

export interface SkillGroup {
  title: string;

  items?: string[];

  education?: Education;

  certifications?: string[];
}

export const featuredProject: Project = {
  id: "bookclub",

  title: "BookClub",

  subtitle: "A Goodreads-inspired book discovery and review platform.",

  description:
    "A production-ready full-stack web application built with Django REST Framework, React, TypeScript, PostgreSQL, Docker, and AWS. Users can discover books, search using natural language, create reading lists, write reviews, and receive AI-powered recommendations with LLM-generated explanations.",

  technologies: [
    "React",
    "TypeScript",
    "Django",
    "Django REST Framework",
    "PostgreSQL",
    "pgvector",
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
      src: semantic,
      alt: "BookClub semantic search feature",
      caption: "Semantic Search",
    },
    {
      src: explanation,
      alt: "BookClub recommendation explanation",
      caption: "Explanation",
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
  ],

  highlights: [
    {
      title: "AI & Semantic Search",
      description:
        "Built semantic search and book recommendations using 384-dimensional embeddings from BAAI/bge-small-en-v1.5 with PostgreSQL and pgvector, allowing users to discover books by concepts and themes rather than exact keywords.",
    },
    {
      title: "AI Recommendation Pipeline",
      description:
        "Developed an AI pipeline using generated book summaries, embeddings, vector similarity search, and LLM-generated recommendation explanations. Large-scale summaries were generated asynchronously using the OpenAI Batch API.",
    },
    {
      title: "ETL Pipeline",
      description:
        "Built an ETL pipeline to clean, normalize, and import more than 52,000 books into a relational PostgreSQL database.",
    },
    {
      title: "Production AWS Infrastructure",
      description:
        "Designed and deployed the application on AWS using ECS with Fargate, ECR, an Application Load Balancer, CloudFront, S3, CloudWatch, IAM, and Systems Manager Parameter Store, with infrastructure managed through Terraform.",
    },
    {
      title: "CI/CD Pipeline",
      description:
        "Built a GitHub Actions deployment pipeline that runs validation, builds and publishes Docker images, runs migrations, deploys ECS tasks, uploads frontend assets to S3, and invalidates the CloudFront cache.",
    },
  ],

  github: "https://github.com/SinanErbezci/bookclub",

  liveDemo: "https://bookclub.sinanerbezci.com",
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

    liveDemo: "https://sinanerbezci.com/projects/idle-game/",
  }
];

export const skillGroups: SkillGroup[] = [

  {
    title: "Education & Certifications",

    education: {
      degrees: [
        "B.Sc. Electronics & Communication Engineering",
        "Double Degree in Electrical Engineering",
      ],
      university: "Istanbul Technical University",
    },

    certifications: [
      "AWS Certified Solutions Architect – Associate",
      "CS50x: Introduction to Computer Science",
      "DevOps with Docker (University of Helsinki)",
    ],
  },
  {
    title: "Cloud & Infrastructure",

    items: [
      "AWS",
      "ECS / Fargate",
      "S3",
      "CloudFront",
      "Cloudflare",
      "Terraform",
      "IAM",
      "CloudWatch",
    ],
  },
  {
    title: "Backend & Data",

    items: [
      "Python",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "pgvector",
      "REST APIs",
    ],
  },
  {
    title: "AI & Machine Learning",

    items: [
      "OpenAI API",
      "OpenAI Batch API",
      "Embeddings",
      "Semantic Search",
      "Vector Similarity",
      "Sentence Transformers",
      "PyTorch",
      "Ollama",
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
    ],
  },

];