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

  subtitle: "Cloud-native book discovery platform with AI-powered search and recommendations.",

  description:
    "A full-stack platform built with Django REST Framework, React, TypeScript, and PostgreSQL. BookClub supports book discovery, reviews, reading lists, and semantic search, with containerized backend services deployed on demand to Amazon EKS through Terraform and GitOps.",

  technologies: [
    "Python",
    "Django REST Framework",
    "React",
    "TypeScript",
    "PostgreSQL",
    "pgvector",
    "Amazon EKS",
    "Docker",
    "Terraform",
    "Argo CD",
    "GitHub Actions",
    "Prometheus",
    "Grafana",
  ],

  images: [
    {
      src: home,
      alt: "BookClub homepage showing featured books",
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
      alt: "BookClub AI recommendation explanation",
      caption: "Explanation",
    },
    {
      src: profile,
      alt: "User profile showing reviews and reading lists",
      caption: "Profile",
    },
    {
      src: readingLists,
      alt: "Reading list dialog displaying books",
      caption: "Lists",
    },
  ],

  highlights: [
    {
      title: "Kubernetes & AWS Infrastructure",
      description:
        "Deployed Django, FastAPI, and Celery workloads to Amazon EKS. Managed VPC networking, load balancing, and related AWS resources with Terraform, including on-demand provisioning and teardown to control costs.",
    },
    {
      title: "CI/CD, GitOps & Automated Tests",
      description:
        "Built GitHub Actions pipelines with Docker image builds, Trivy scans, and 34 Django API tests. Managed Kubernetes releases through deployment pull requests, Kustomize, and Argo CD.",
    },
    {
      title: "Monitoring & Observability",
      description:
        "Instrumented services and Kubernetes workloads with Prometheus, built Grafana dashboards for health and performance metrics, and configured Alertmanager notifications through Slack.",
    },
    {
      title: "AI Search & Recommendations",
      description:
        "Implemented semantic search and recommendations using a FastAPI embedding service, 384-dimensional vectors, and PostgreSQL pgvector. Used the OpenAI Batch API to generate book summaries and an LLM to explain recommendations.",
    },
    {
      title: "Backend APIs & Data Engineering",
      description:
        "Developed the Django REST API for reviews, ratings, and personal lists, and an ETL pipeline that cleaned and imported more than 52,000 book records into PostgreSQL.",
    },
    {
      title: "Async Processing & Caching",
      description:
        "Used Celery with Amazon SQS for background tasks and Amazon ElastiCache Redis for application caching, including scheduled homepage refreshes and transactional email workflows.",
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
      "Amazon EKS",
      "Kubernetes",
      "Terraform",
      "VPC",
      "IAM",
      "Application Load Balancer",
      "S3",
      "CloudFront",
      "ElastiCache",
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
      "Redis",
      "Celery",
      "Amazon SQS",
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
    title: "DevOps & Observability",
    items: [
      "Docker",
      "Git",
      "GitHub Actions",
      "Argo CD",
      "Helm",
      "Kustomize",
      "Trivy",
      "Prometheus",
      "Grafana",
      "Alertmanager",
    ],
  },
];
