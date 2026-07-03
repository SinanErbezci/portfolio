import book from "../assets/projects/bookclub/book.png";
import searchpage from "../assets/projects/bookclub/searchbar.png";

export interface ProjectImage {
  src: string;
  label: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;

  images: ProjectImage[];

  technologies: string[];
  achievements: string[];

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
      src: book,
      label: "Book",
    },
    {
      src: searchpage,
      label: "Search Page",
    },
  ],

  achievements: [
    "Imported and normalized over 52,000 books from CSV.",
    "Built a RESTful API with Django REST Framework.",
    "Implemented secure session authentication with CSRF protection.",
    "Containerized the development environment with Docker.",
    "Deployed the application to AWS.",
    "Designed a responsive React frontend.",
  ],

  github: "https://github.com/SinanErbezci/bookclub",

  liveDemo: "https://bookclub.sinanbook.club",
};