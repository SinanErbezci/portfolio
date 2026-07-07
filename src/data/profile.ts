export interface Profile {
    name: string;
    headline: string;
    degrees: string[];
    summary: string;
}

export const profile: Profile = {
    name: "Sinan Erbezci",
    headline: "AWS Certified Solutions Architect",
    degrees: [
        "Electronics and Communication Engineer",
        "Electrical Engineer (Double Degree)"],
    summary: "I build production-ready web applications and cloud infrastructure with AWS, Django, React, Docker, PostgreSQL, and Terraform."
}