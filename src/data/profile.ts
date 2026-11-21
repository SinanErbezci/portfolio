export interface Profile {
    name: string;
    headline: string;
    degrees: string[];
    summary: string;
}

export const profile: Profile = {
    name: "Sinan Erbezci",
    headline: "Cloud & DevOps Engineer | AWS Certified Solutions Architect – Associate",
    degrees: [
        "Electronics and Communication Engineer",
        "Electrical Engineer (Double Degree)"],
    summary: "I build cloud infrastructure and backend applications with AWS, Kubernetes, Terraform, Python, and Django, with a focus on CI/CD, GitOps, and observability."
}