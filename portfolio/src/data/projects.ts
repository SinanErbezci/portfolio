import bookDetails from "../assets/images/book_detail.png";
import home from "../assets/images/home.png";
import readingLists from "../assets/images/reading_list.png";
import searchbar from "../assets/images/searchbar.png";
import searchpage from "../assets/images/searchpage.png";
import profile from "../assets/images/profile.png";


export interface ProjectImage {
  src: string;
  alt: string;
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