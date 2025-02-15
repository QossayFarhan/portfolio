import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' }),
	defineSkillCategory({ name: 'AI', slug: 'AI' }),
	defineSkillCategory({ name: 'Cloud', slug: 'Cloud' }),
	defineSkillCategory({ name: 'DevOps', slug: 'DevOps' })



] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'image',
		color: 'blue',
		description:'The **Azure AI Engineer Associate** certification (AI-102) validates expertise in designing, implementing, and integrating AI solutions on Microsoft Azure. It covers **Azure AI services** such as **Azure OpenAI, Cognitive Services (Vision, Speech, Language, and Decision), Machine Learning, and Bot Services**. Candidates learn to **build AI models, apply NLP, process speech and images, use responsible AI practices, and integrate AI into applications** using Azure tools like **Azure Machine Learning, Azure AI Studio, and Power Virtual Agents**. It is ideal for AI developers, data scientists, and cloud engineers working on AI-powered solutions.',
		logo: Assets.azureAI,
		name: 'Azure AI Engineer',
		category: 'AI'
	}),
	defineSkill({
		slug: 'Azure',
		color: 'blue',
		description:
			'I have extensive experience working with **Microsoft Azure**, specializing in deploying and managing **Azure Kubernetes Service (AKS), Azure AI Services, and Azure IaaS/PaaS solutions**. I have designed and implemented **AI-driven applications** using **Azure OpenAI, Azure Document Intelligence, and Azure OCR**, enhancing automation and service reliability. I expertise includes **Azure App Services, Azure Container Apps, and CI/CD pipeline integration**, optimizing deployment workflows and reducing time-to-market. Additionally, I have leveraged **Terraform** for automating Azure infrastructure provisioning, improving efficiency and scalability. I work emphasizes **performance optimization, security, cost-effectiveness, and responsible AI practices**, ensuring seamless and reliable cloud-based solutions.',
		logo: Assets.azure,
		name: 'Azure',
		category: 'Cloud'
	}),
	defineSkill({
		slug: 'IBM',
		color: 'white',
		description:
			'I have extensive experience working with **IBM Cloud**, particularly in deploying and managing **Kubernetes (IKS and OpenShift)**, ensuring high availability and performance. I have implemented **Cloud Pak for Data** on OpenShift to enhance data management and analytics capabilities. Additionally, I have leveraged **IBM WatsonX** for AI-driven solutions and **IBM Cloud Object Storage (COS)** to optimize data accessibility and processing efficiency. I expertise in **Terraform** has enabled efficient provisioning and automation of IBM Cloud infrastructure, reducing deployment time and improving system consistency. I work aligns with IBM Clouds best practices, emphasizing **scalability, security, and operational efficiency**.',
		logo: Assets.ibm,
		name: 'IBM',
		category: 'Cloud'
	}),
	defineSkill({
		slug: 'openAI',
		color: 'green',
		description:
			'I have **extensive experience working with OpenAI**, integrating **Large Language Models (LLMs)** into AI-driven applications. I have **fine-tuned OpenAI models** to enhance accuracy and contextual relevance, improving performance by **40%**. My expertise includes implementing **Retrieval-Augmented Generation (RAG) techniques** with vector databases and the **Langchain Python library**, enabling more precise and controlled AI responses. I have leveraged OpenAIs **GPT-based models** for **chatbots, document processing, and business execution platforms**, optimizing interactions and user experience. Additionally, I have utilized **Groq APIs** to enhance inference speed and **cost-effectiveness**, ensuring scalable and efficient AI-powered solutions.',
		logo: Assets.openAI,
		name: 'OpenAI',
		category: 'AI'
	}),
	defineSkill({
		slug: 'Kuberntes',
		color: 'blue',
		description:
			'I have **extensive experience with Kubernetes (K8s)**, deploying and managing **Azure Kubernetes Service (AKS), IBM Cloud Kubernetes Service (IKS), and Red Hat OpenShift** to orchestrate applications with high availability and scalability. I have implemented **auto-scaling, ingress controllers, and CI/CD pipelines**, ensuring efficient and seamless application deployments. I have also worked with **NGINX for high-availability setups** and configured **multi-container environments** to optimize performance. Additionally, I have leveraged **Terraform for infrastructure automation**, streamlining Kubernetes resource provisioning and reducing setup times by over **30%**. My expertise includes **migrating workloads, managing namespaces, configuring persistent storage (PVCs), and securing workloads** using best practices.',
		logo: Assets.k8s,
		name: 'Kubernetes',
		category: 'Cloud'
	}),
	defineSkill({
		slug: 'Docker',
		color: 'blue',
		description:
			'I have **extensive experience with Docker**, utilizing it to containerize applications for **scalability, portability, and efficient deployment**. I have built and optimized **Docker images**, managed **multi-container applications** using **Docker Compose**, and integrated **Docker with Kubernetes (AKS, IKS, OpenShift)** for seamless orchestration. I have also configured **Docker networking, storage, and security best practices** to ensure robust and efficient containerized environments. Additionally, I have leveraged **CI/CD pipelines** to automate Docker image builds, testing, and deployment, reducing deployment time and enhancing system reliability.',
		logo: Assets.docker,
		name: 'Docker',
		category: 'Cloud'
	}),
	defineSkill({
		slug: 'Pyhton',
		color: 'yellow',
		description: 'I have **extensive experience with Python**, leveraging it for **automation, cloud integrations, and AI-driven applications**. I have built and optimized **FastAPI-based APIs**, integrated **Azure AI, IBM WatsonX, and OpenAI services**, and developed **backend solutions for cloud and AI applications**. My expertise includes **data processing, automation scripts, and infrastructure as code (IaC) using Terraform with Python**. I have also utilized **Python for Kubernetes (K8s) automation**, managing deployments, scaling applications, and handling cloud resources efficiently. Additionally, I have worked with **machine learning libraries, LangChain for LLM-based applications, and RAG techniques**, ensuring robust AI-powered solutions.',
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'Redhat OpenShift',
		color: 'red',
		description: 'I have **extensive experience with Red Hat OpenShift**, deploying and managing containerized applications in **enterprise environments**. I have worked with **OpenShift on IBM Cloud**, leveraging its capabilities for **scalability, high availability, and security**. My expertise includes **configuring OpenShift ingress, managing namespaces, setting up persistent storage (PVCs), and integrating CI/CD pipelines for automated deployments**. I have also deployed **Cloud Pak for Data** on OpenShift, enhancing data management and analytics capabilities. Additionally, I have utilized **Terraform for infrastructure automation**, streamlining OpenShift cluster provisioning and resource management while ensuring best practices for security and performance.',
		logo: Assets.openShift,
		name: 'Redhat Openshift',
		category: 'Cloud'
	}),
	defineSkill({
		slug: 'Hugging Face',
		color: 'yellow',
		description: 'I have **experience with Hugging Face**, utilizing its **Transformers and Datasets** libraries to build and fine-tune **large language models (LLMs) and NLP solutions**. I have worked with **pre-trained models for text classification, summarization, named entity recognition (NER), and conversational AI**, integrating them into cloud-based applications. Additionally, I have implemented **custom fine-tuning and model optimization techniques** to enhance model accuracy and efficiency. I have also leveraged **Hugging Face pipelines and APIs** for seamless integration with **Azure AI, IBM WatsonX, and OpenAI**, ensuring scalable and cost-effective AI-driven solutions.',
		logo: Assets.Huggingface,
		name: 'Hugging Face',
		category: 'AI'
	}),
	defineSkill({
		slug: 'FastAPI',
		color: 'green',
		description: 'I have **extensive experience with FastAPI**, developing **high-performance, scalable APIs** for AI, cloud, and automation solutions. I have built **RESTful and asynchronous APIs**, integrating them with **Azure AI, OpenAI, IBM WatsonX, and Hugging Face** for AI-driven applications. My expertise includes **JWT authentication, OAuth2, and middleware integration** to ensure security and efficiency. I have also utilized FastAPI for **database interactions with SQLAlchemy, asynchronous processing with Celery, and deployment on Kubernetes (AKS, IKS, OpenShift)**. Additionally, I have implemented **CI/CD pipelines** to automate API deployments, ensuring reliability and reducing time-to-market.',
		logo: Assets.FastApi,
		name: 'FastAPI',
		category: 'framework'
	}),
	defineSkill({
		slug: 'CSharpe',
		color: 'purple',
		description: 'I have **experience with C#**, primarily for **backend development, API integration, and cloud-based applications**. I have built **RESTful APIs using ASP.NET Core**, integrating them with **Azure AI, OpenAI, and IBM WatsonX** for AI-driven solutions. My expertise includes **entity framework for database interactions, dependency injection for scalable architecture, and authentication mechanisms like JWT and OAuth2**. I have also worked on **microservices architectures**, deploying C# applications on **Azure App Services and Kubernetes (AKS, OpenShift)**. Additionally, I have implemented **CI/CD pipelines using GitHub Actions and Azure DevOps**, ensuring efficient and automated deployments.',
		logo: Assets.Csharp,
		name: 'C-Sharpe',
		category: 'pro-lang'
	}), 
	defineSkill({
		slug: 'Terraform',
		color: 'purple',
		description: 'I have **extensive experience with Terraform**, leveraging it to **automate infrastructure provisioning and management** across **Azure, IBM Cloud, and Kubernetes (AKS, IKS, OpenShift)**. I have written **Infrastructure as Code (IaC) modules** to deploy **cloud resources, networking, storage, and security policies** while ensuring scalability and cost efficiency. My expertise includes **managing Terraform state remotely, implementing CI/CD pipelines for infrastructure deployments, and using Terraform with Azure DevOps and GitHub Actions**. I have also automated **Kubernetes resource management**, provisioning **namespaces, deployments, services, and ingress controllers**, reducing manual overhead and improving deployment consistency.',
		logo: Assets.Terraform,
		name: 'Terraform',
		category: 'DevOps'
	}),
	defineSkill({
		slug: 'GitHub',
		color: 'white',
		description: 'I have **extensive experience with GitHub**, utilizing it for **version control, collaboration, and CI/CD automation**. I have implemented **GitHub Actions** to automate **builds, testing, deployments, and infrastructure provisioning** across **Azure, IBM Cloud, and Kubernetes (AKS, IKS, OpenShift)**. My expertise includes **writing custom workflows**, integrating **Terraform for infrastructure as code (IaC), Docker for container builds, and FastAPI for API deployments**. I have also managed **branching strategies, code reviews, and repository security** to ensure efficient and secure development workflows. Additionally, I have optimized **CI/CD pipelines** for cloud applications, reducing deployment time and improving system reliability.',
		logo: Assets.Github,
		name: 'Github',
		category: 'DevOps'
	})

] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
