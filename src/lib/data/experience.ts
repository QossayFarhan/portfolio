import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'open-sourcer',
		company: 'Takaful Emarat Insurance',
		description: 'At **Takaful Emarat**, I have been instrumental in developing **AI-driven and cloud-based solutions** to enhance **automation, customer support, and document processing**. I have built an **advanced identity document processing system** leveraging **Azure OCR, Azure Document Intelligence, and OpenAI LLMs**, optimizing accuracy and reducing processing time by **50%**. I have also developed an **AI-powered chatbot** that utilizes **LLMs and responsible AI practices** to handle customer inquiries, reducing **turnaround time (TAT) by 70%**. Additionally, I have worked with **Azure App Services, Container Apps, and CI/CD pipelines**, streamlining deployments and improving system efficiency.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Dubai',
		period: { from: new Date(2024, 6, 1), to: new Date() },
		skills: getSkills('Azure', 'GitHub', 'FastAPI', 'CSharpe', 'Pyhton', 'FastAPI', 'Hugging Face'),
		name: 'Business Digital Transformation Engineer',
		color: 'purple',
		links: [  { to: "https://lp.takafulemarat.com/", label: "Takaful Emarat" }	],
		logo: Assets.te,
		shortDescription: 'Revolutionizing the insurance industry with AI-driven solutions'
	},
	{
		slug: 'software-freelance',
		company: 'CoolRiots',
		description: 'At **CoolRiots**, I played a key role in developing **AI-driven business execution platforms**, leveraging **IBM WatsonX and OpenAI** to fine-tune **LLMs** for various industries, including **hospitality, law firms, and education centers**. I implemented **Retrieval-Augmented Generation (RAG) techniques** using **vector databases and LangChain**, enhancing AI accuracy and contextual relevance. I also deployed and managed **Kubernetes environments (IKS, AKS, OpenShift)** to ensure high availability, scalability, and seamless application orchestration. Using **Terraform**, I automated cloud infrastructure provisioning, reducing deployment time and enhancing system consistency. Additionally, I utilized **IBM Cloud Object Storage (COS) and WatsonX** to optimize data accessibility and AI model performance, streamlining operations and improving efficiency by **15%**.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Remote - Singapore',
		period: { from: new Date(2022, 10, 1), to: new Date() },
		skills: getSkills('Azure', 'IBM', 'Docker', 'FastAPI', 'GitHub', 'Hugging Face', 'Kuberntes', 'Redhat OpenShift', 'Terraform'),
		name: 'Freelancer',
		color: 'red',
		links: [  { to: "https://coolriots.com/", label: "CoolRiots" }	],
		logo: Assets.cr,
		shortDescription: 'Building AI-powered business solutions at CoolRiots, fine-tuning LLMs, optimizing Kubernetes, and automating the cloud with Terraform. 🚀'
	}
];

export const title = 'Experience';
