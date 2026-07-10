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
    summary: "Building scalable cloud infrastructure, backend systems, and production-ready web applications with AWS, Terraform, Docker, Django, and React."
}