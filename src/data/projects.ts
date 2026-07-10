import bookDetails from "../assets/images/bookclub-book.webp";
import home from "../assets/images/bookclub-home.webp";
import readingLists from "../assets/images/bookclub-list.webp";
import searchbar from "../assets/images/bookclub-searchbar.webp";
import searchpage from "../assets/images/bookclub-searchpage.webp";
import profile from "../assets/images/bookclub-profile.webp";


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
      caption: "Book Details",
    },
    {
      src: searchbar,
      alt: "Autocomplete search suggestions",
      caption: "Search",
    },
    {
      src: profile,
      alt: "User profile with reviews and reading lists",
      caption: "Profile",
    },
    {
      src: readingLists,
      alt: "Reading list modal displaying books",
      caption: "Reading Lists",
    },
    {
      src: searchpage,
      alt: "Paginated Search Result Page",
      caption: "Search Result Page",
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