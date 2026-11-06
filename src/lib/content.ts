import data from '../data/portfolio-content.json';

export type PersonalInfo = typeof data.personal;
export type Summary = typeof data.summary;
export type Education = typeof data.education;
export type Experience = typeof data.experience;
export type Project = typeof data.projects;
export type Skills = typeof data.skills;
export type Certification = typeof data.certifications;
export type Extracurricular = typeof data.extracurricular;

export const personal: PersonalInfo = data.personal;
export const summary: Summary = data.summary;
export const education: Education = data.education;
export const experience: Experience = data.experience;
export const projects: Project = data.projects;
export const skills: Skills = data.skills;
export const certifications: Certification = data.certifications;
export const extracurricular: Extracurricular = data.extracurricular;

export const RESUME_PATH = '/Moheed_Ul_Hassan_Resume.pdf';
export const RESUME_VERSION = '2026-11-04';