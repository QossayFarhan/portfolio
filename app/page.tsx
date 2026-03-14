'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, ArrowUpRight, Cloud, Bot, Database, Server, Code, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import {
  SiPython,
  SiNextdotjs,
  SiFastapi,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiGithubactions,
  SiPrometheus,
  SiGrafana,
  SiReact,
} from '@icons-pack/react-simple-icons';

const fadeIn: any = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const fadeInSlow: any = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 }
  }
};

const staggerContainerSlow: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

// Map skill names to Simple Icons (with size/color); unmapped skills use no icon
const skillIconMap: Record<string, { Icon: React.ComponentType<{ size?: number; color?: string }>; color?: string }> = {
  Kubernetes: { Icon: SiKubernetes, color: '#326CE5' },
  Docker: { Icon: SiDocker, color: '#2496ED' },
  Terraform: { Icon: SiTerraform, color: '#7B42BC' },
  'GitHub Actions': { Icon: SiGithubactions, color: '#2088FF' },
  Grafana: { Icon: SiGrafana, color: '#F46800' },
  Prometheus: { Icon: SiPrometheus, color: '#E6522C' },
  Python: { Icon: SiPython, color: '#3776AB' },
  FastAPI: { Icon: SiFastapi, color: '#009688' },
  'Next.js': { Icon: SiNextdotjs, color: '#000' },
  React: { Icon: SiReact, color: '#61DAFB' },
};

function SkillTag({ name }: { name: string }) {
  const entry = skillIconMap[name];
  if (!entry) {
    return (
      <motion.span
        whileHover={{ scale: 1.03 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        className="px-3 py-1.5 bg-[#fafafa] text-neutral-700 text-sm font-medium rounded-lg border border-neutral-200/80 cursor-default"
      >
        {name}
      </motion.span>
    );
  }
  const { Icon, color } = entry;
  return (
    <motion.span
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#fafafa] text-neutral-700 text-sm font-medium rounded-lg border border-neutral-200/80 cursor-default"
    >
      <Icon size={16} color={color} />
      {name}
    </motion.span>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-[#111] font-sans selection:bg-neutral-200">
      
      {/* Navigation */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#fafafa]/80 backdrop-blur-md border-b border-neutral-200/50"
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-semibold text-lg tracking-tight">Q.A</span>
          <div className="flex items-center gap-4 text-neutral-500">
            <Link href="https://github.com/QossayFarhan" target="_blank" className="hover:text-black transition-colors duration-200">
              <Github className="w-5 h-5" />
            </Link>
            <Link href="https://www.linkedin.com/in/qossay-abuamriya/" target="_blank" className="hover:text-black transition-colors duration-200">
              <Linkedin className="w-5 h-5" />
            </Link>
            <motion.a
              href="./Qossay%20Abuamriya%20AI%20Platform%20Engineer%20(3).pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-4 py-2 bg-black text-white text-sm font-medium rounded-full hover:bg-neutral-800 transition-colors duration-200 shadow-md"
            >
              <FileText className="w-4 h-4" />
              Resume
            </motion.a>
          </div>
        </div>
      </motion.nav>

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-24">
        
        {/* Hero Section */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="py-20 md:py-32 flex flex-col md:flex-row md:items-center md:justify-between gap-12"
        >
          <motion.div variants={fadeIn} className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-6">
              Engineering{' '}
              <motion.span
                className="inline-block text-neutral-500 border-b-2 border-neutral-300/50 border-dashed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                intelligent
              </motion.span>{' '}
              cloud systems.
            </h1>
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-neutral-500 leading-relaxed mb-4">
              Hi, I&apos;m Qossay Abuamriya. A Cloud & AI Software Engineer with <span className="text-neutral-800 font-medium">5 years</span> of experience, based in <span className="text-neutral-700">Dubai</span>. I specialize in Agentic RAG, LLM fine-tuning, NLP, OCR, and highly available Kubernetes—leveraging Azure, OpenAI, IBM, and Cohere to maximize AI impact.
            </motion.p>
            <motion.p variants={fadeIn} className="text-neutral-400 leading-relaxed mb-10 max-w-xl">
              I build production systems that combine AI, cloud-native architecture, and strong engineering practices—so teams can ship faster and scale with confidence. From requirement analysis to deployment and monitoring, I focus on control, security, and measurable outcomes.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-wrap items-center gap-4">
              <motion.a
                href="mailto:qossay.amriya@gmail.com"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Mail className="w-4 h-4" />
                Get in touch
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div variants={fadeIn} className="flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="relative w-40 h-40 md:w-52 md:h-52 rounded-[2rem] overflow-hidden border-2 border-neutral-200 shadow-[0_8px_30px_-4px_rgba(0,0,0,0.12)] bg-neutral-100"
            >
              <Image
                src="./portfolio-pic.jpeg"
                alt="Qossay Abuamriya"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 160px, 208px"
                priority
              />
            </motion.div>
          </motion.div>
        </motion.section>

        {/* About – from LinkedIn + resume */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="py-12"
        >
          <motion.div variants={fadeIn} className="rounded-3xl bg-neutral-100/80 border border-neutral-200/60 p-8 md:p-10">
            <h2 className="text-2xl font-bold tracking-tight mb-4">About me</h2>
            <p className="text-neutral-600 leading-relaxed max-w-3xl mb-6">
              I&apos;m a versatile AI and cloud expert who brings a blend of technical depth and business understanding to AI teams. My experience spans from being the <span className="font-medium text-neutral-800">AI provider at CoolRiots</span>, where I built and optimized AI-driven platforms, to <span className="font-medium text-neutral-800">leading business use cases at Takaful Emarat</span>, where I implement AI solutions tailored to real-world challenges. This dual perspective helps me understand requirements and translate them into implementations that deliver tangible value.
            </p>
            <p className="text-neutral-600 leading-relaxed max-w-3xl mb-6">
              Over the past 5 years I&apos;ve focused on innovation through AI, cloud, and automation. At CoolRiots (IBM Partner), I built the company&apos;s DevOps infrastructure from scratch for scalable growth and seamless deployments. As an AI Product Engineer I developed the <span className="font-medium text-neutral-800">BeX platform</span>—empowering businesses to create AI agents, chatbots, and workflows for industry-specific challenges. Now at Takaful Emarat in Dubai, I lead digital transformation by implementing AI-powered solutions that streamline operations and enhance customer experiences. My aim is to bridge cutting-edge technology and real-world business needs.
            </p>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-3xl">
              I hold a degree in Software Engineering from the <span className="font-medium text-neutral-700">University Malaysia of Computer Science and Engineering (UNIMY)</span>, in Cyberjaya, Malaysia&apos;s tech hub. My career has taken me through Kuala Lumpur, Singapore, and now Dubai.
            </p>
          </motion.div>
        </motion.section>

        {/* Bento Grid - Projects & Experience */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainerSlow}
          className="py-12"
        >
          <motion.div variants={fadeIn} className="mb-10">
            <h2 className="text-3xl font-bold tracking-tight">Featured Work & Impact</h2>
            <p className="text-neutral-500 mt-2 max-w-xl">Key projects from Takaful Emarat & CoolRiots (IBM Partner)—delivering measurable impact on efficiency, accuracy, and reliability.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Project 1 - Large */}
            <motion.div
              variants={fadeIn}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="col-span-1 md:col-span-2 lg:col-span-2 bg-white rounded-[2rem] p-8 border border-neutral-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.08)] transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
                <Bot className="w-48 h-48" />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider rounded-full">Takaful Emarat</span>
                    <span className="text-neutral-400 text-sm font-medium">2024 - Present</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Agentic AI Customer Support</h3>
                  <p className="text-neutral-500 leading-relaxed mb-6 max-w-lg text-lg">
                    Developed an AI-powered customer support agent that generates tailored, well-structured responses from user data and is equipped with tools to interact with core system functionalities. Built on the Airia Platform with LLMs from OpenAI and Cohere; implemented guardrails, content filtering, and Responsible AI practices for safe, reliable interactions—cutting turnaround time by 70%.
                  </p>
                </div>
                <div className="flex items-end justify-between mt-auto pt-8">
                  <div className="flex flex-wrap gap-2 max-w-[60%]">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-50 rounded-lg text-sm font-medium text-neutral-600 border border-neutral-200">
                      <Bot className="w-4 h-4" /> OpenAI
                    </span>
                    <span className="px-3 py-1.5 bg-neutral-50 rounded-lg text-sm font-medium text-neutral-600 border border-neutral-200">Cohere</span>
                    <span className="px-3 py-1.5 bg-neutral-50 rounded-lg text-sm font-medium text-neutral-600 border border-neutral-200">Airia</span>
                  </div>
                  <div className="text-right">
                    <div className="text-5xl font-black text-black tracking-tighter">70%</div>
                    <div className="text-xs text-neutral-400 uppercase tracking-wider font-bold mt-1">TAT Reduction</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project 2 - Tall */}
            <motion.div
              variants={fadeIn}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="col-span-1 bg-[#111] text-white rounded-[2rem] p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Database className="w-32 h-32 text-white" />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 bg-white/10 text-white text-xs font-bold uppercase tracking-wider rounded-full">CoolRiots</span>
                    <span className="text-white/60 text-sm font-medium">2022 - 2024</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">BeX & Agentic Business Platform</h3>
                  <p className="text-white/60 leading-relaxed mb-6">
                    As AI Product Engineer, developed the BeX platform—a cloud-native, microservice-based Agentic AI product in Python that lets businesses create AI agents, chatbots, and workflows for hospitality, law, and education. Fine-tuned LLMs on IBM WatsonX Studio and Azure OpenAI; used RAG with vector DB and LangChain. Built company DevOps from scratch; integrated Groq APIs for faster inference.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/10 rounded-lg text-xs font-medium text-white/90">
                      <SiPython className="w-3.5 h-3.5" color="#3776AB" /> Python
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/10 rounded-lg text-xs font-medium text-white/90">
                      <Cloud className="w-3.5 h-3.5" /> Azure
                    </span>
                    <span className="px-2.5 py-1 bg-white/10 rounded-lg text-xs font-medium text-white/90">WatsonX</span>
                    <span className="px-2.5 py-1 bg-white/10 rounded-lg text-xs font-medium text-white/90">LangChain</span>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/10">
                  <div className="text-5xl font-black text-white mb-1 tracking-tighter">+40%</div>
                  <div className="text-xs text-white/50 uppercase tracking-wider font-bold">Model Accuracy</div>
                </div>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div
              variants={fadeIn}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="col-span-1 bg-white rounded-[2rem] p-8 border border-neutral-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.08)] transition-all duration-300 relative overflow-hidden"
            >
               <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-purple-50 text-purple-600 text-xs font-bold uppercase tracking-wider rounded-full">Takaful Emarat</span>
                </div>
              <h3 className="text-xl font-bold mb-3">Hybrid Search & RAG</h3>
              <p className="text-neutral-500 mb-6 text-sm leading-relaxed">
                Designed and implemented AI-powered search workflows with data refinement, hybrid search (keyword + semantic), and retrieval from SQL, unstructured text, and vector stores using LangChain, Azure AI Search, and AI Foundry. Integrated Cohere Command R+ and Embed v4 into Agentic RAG pipelines—improving older RAG accuracy by 40% and cutting data retrieval time by 30%.
              </p>
              <div className="mt-auto pt-6 border-t border-neutral-100 flex items-end justify-between gap-4">
                <div>
                  <div className="text-3xl font-black text-black mb-1 tracking-tight">30%</div>
                  <div className="text-xs text-neutral-400 uppercase tracking-wider font-bold">Faster Retrieval</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-black mb-1 tracking-tight">+40%</div>
                  <div className="text-xs text-neutral-400 uppercase tracking-wider font-bold">RAG Accuracy</div>
                </div>
              </div>
            </motion.div>

            {/* Project 4 */}
            <motion.div
              variants={fadeIn}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="col-span-1 bg-white rounded-[2rem] p-8 border border-neutral-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.08)] transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-green-50 text-green-600 text-xs font-bold uppercase tracking-wider rounded-full">Takaful Emarat</span>
                </div>
              <h3 className="text-xl font-bold mb-3">Identity Document OCR</h3>
              <p className="text-neutral-500 mb-6 text-sm leading-relaxed">
                Led requirements and built a cost-efficient internal tool for identity document processing using Azure OCR, Document Intelligence, and Azure OpenAI LLMs. Handles mixed document types, formats, and resolutions; optimized data refinement and model selection to cut processing time by 50% and feed structured data into downstream workflows.
              </p>
              <div className="mt-auto pt-6 border-t border-neutral-100">
                <div className="text-3xl font-black text-black mb-1 tracking-tight">50%</div>
                <div className="text-xs text-neutral-400 uppercase tracking-wider font-bold">Reduction in Processing Time</div>
              </div>
            </motion.div>

            {/* Claims Management - Full stack */}
            <motion.div
              variants={fadeIn}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="col-span-1 bg-white rounded-[2rem] p-8 border border-neutral-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.08)] transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
                <Server className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-cyan-50 text-cyan-600 text-xs font-bold uppercase tracking-wider rounded-full">Full Stack</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Claims Management App</h3>
                <p className="text-neutral-500 mb-6 text-sm leading-relaxed">
                  Full-stack app with Next.js, FastAPI, and SQL Server. Built with best-practice stored procedures, role-based profiles and authorization, Azure Authentication, and SSO for secure, scalable claims handling.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-50 rounded-lg text-sm font-medium text-neutral-600 border border-neutral-200">
                    <SiNextdotjs className="w-4 h-4" color="#000" />
                    Next.js
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-50 rounded-lg text-sm font-medium text-neutral-600 border border-neutral-200">
                    <SiFastapi className="w-4 h-4" color="#009688" />
                    FastAPI
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-50 rounded-lg text-sm font-medium text-neutral-600 border border-neutral-200">
                    <Database className="w-4 h-4" />
                    SQL Server
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-50 rounded-lg text-sm font-medium text-neutral-600 border border-neutral-200">
                    <Cloud className="w-4 h-4" />
                    Azure
                  </span>
                </div>
                <div className="pt-6 border-t border-neutral-100">
                  <div className="text-3xl font-black text-black mb-1 tracking-tight">SSO</div>
                  <div className="text-xs text-neutral-400 uppercase tracking-wider font-bold">Azure Auth</div>
                </div>
              </div>
            </motion.div>

            {/* Takaful - Deployment & CI/CD */}
            <motion.div
              variants={fadeIn}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="col-span-1 bg-white rounded-[2rem] p-8 border border-neutral-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.08)] transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider rounded-full">Takaful Emarat</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Deployment & Time-to-Market</h3>
              <p className="text-neutral-500 mb-6 text-sm leading-relaxed">
                Use Azure App Service and Container Apps to deploy and configure applications; set up CI/CD pipelines and ingress controllers so new features reach production faster—reducing time-to-market by 25%.
              </p>
              <div className="pt-6 border-t border-neutral-100">
                <div className="text-3xl font-black text-black mb-1 tracking-tight">25%</div>
                <div className="text-xs text-neutral-400 uppercase tracking-wider font-bold">Faster to Market</div>
              </div>
            </motion.div>

            {/* Project 5 - K8s */}
            <motion.div
              variants={fadeIn}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="col-span-1 md:col-span-2 lg:col-span-1 bg-white rounded-[2rem] p-8 border border-neutral-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.08)] transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-orange-50 text-orange-600 text-xs font-bold uppercase tracking-wider rounded-full">CoolRiots</span>
                </div>
              <h3 className="text-xl font-bold mb-3">Cloud Infrastructure & K8s</h3>
              <p className="text-neutral-500 mb-6 text-sm leading-relaxed">
                Implemented Kubernetes (AKS, IKS, OpenShift) for application orchestration with NGINX load balancing and high availability per IBM and Azure standards. Delivered 20+ CI/CD pipelines (Azure DevOps, GitHub Actions), Terraform for Azure and K8s, and Grafana with Loki and Prometheus for monitoring—achieving 99.95% uptime and ~30% faster deployments and setup.
              </p>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-neutral-100 gap-4 flex-wrap">
                 <div>
                  <div className="text-3xl font-black text-black mb-1 tracking-tight">99.95%</div>
                  <div className="text-xs text-neutral-400 uppercase tracking-wider font-bold">Uptime</div>
                 </div>
                 <div>
                  <div className="text-2xl font-black text-black mb-1 tracking-tight">30%</div>
                  <div className="text-xs text-neutral-400 uppercase tracking-wider font-bold">Faster Deploy</div>
                 </div>
              </div>
            </motion.div>

          </div>
        </motion.section>

        {/* Skills Section (Notion Style) */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainerSlow}
          className="py-16"
        >
          <motion.div variants={fadeIn} className="mb-10">
            <h2 className="text-3xl font-bold tracking-tight">Technical Arsenal</h2>
            <p className="text-neutral-500 mt-2 max-w-xl">Tools and practices I use daily to design, build, and operate reliable systems.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              variants={fadeIn}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="p-8 bg-white rounded-3xl border border-neutral-200 shadow-sm hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.06)] transition-shadow duration-300"
            >
              <motion.div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6" whileHover={{ scale: 1.05 }}>
                <Bot className="w-6 h-6" />
              </motion.div>
              <h3 className="text-lg font-bold mb-2">Generative AI & ML</h3>
              <p className="text-neutral-500 text-sm mb-4">From prompt design to RAG and fine-tuning for production.</p>
              <div className="flex flex-wrap gap-2">
                {['LLMs', 'RAG', 'Agentic AI', 'Prompt Engineering', 'LangChain', 'OpenAI', 'Claude', 'Cohere', 'WatsonX'].map(skill => (
                  <SkillTag key={skill} name={skill} />
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="p-8 bg-white rounded-3xl border border-neutral-200 shadow-sm hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.06)] transition-shadow duration-300"
            >
              <motion.div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6" whileHover={{ scale: 1.05 }}>
                <Cloud className="w-6 h-6" />
              </motion.div>
              <h3 className="text-lg font-bold mb-2">Cloud & DevOps</h3>
              <p className="text-neutral-500 text-sm mb-4">Infrastructure as code, orchestration, and observability.</p>
              <div className="flex flex-wrap gap-2">
                {['Azure', 'IBM Cloud', 'Kubernetes', 'Docker', 'Terraform', 'CI/CD', 'GitHub Actions', 'Grafana', 'Prometheus'].map(skill => (
                  <SkillTag key={skill} name={skill} />
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="p-8 bg-white rounded-3xl border border-neutral-200 shadow-sm hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.06)] transition-shadow duration-300"
            >
              <motion.div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6" whileHover={{ scale: 1.05 }}>
                <Code className="w-6 h-6" />
              </motion.div>
              <h3 className="text-lg font-bold mb-2">Software Engineering</h3>
              <p className="text-neutral-500 text-sm mb-4">APIs, data layer, and iterative delivery.</p>
              <div className="flex flex-wrap gap-2">
                {['Python', 'FastAPI', 'ASP.Net', 'SQL', 'Microservices', 'REST APIs', 'Agile'].map(skill => (
                  <SkillTag key={skill} name={skill} />
                ))}
              </div>
              <p className="text-neutral-400 text-xs mt-4 pt-4 border-t border-neutral-100">Languages: Arabic (native), English (professional).</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Certifications Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="py-16"
        >
          <motion.div variants={fadeIn} className="bg-white rounded-3xl border border-neutral-200 p-8 md:p-12 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] relative overflow-hidden hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.08)] transition-shadow duration-300">
            <div className="absolute -top-10 -right-10 p-12 opacity-[0.02]">
               <ShieldCheck className="w-96 h-96" />
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold tracking-tight flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-50 text-green-600 rounded-xl flex items-center justify-center shadow-sm">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                Certifications & Education
              </h2>
              <p className="text-neutral-500 text-sm mb-10">Formal credentials and continuous learning in cloud, AI, and DevOps.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h4 className="font-bold text-neutral-900 mb-6 flex items-center gap-2 border-b border-neutral-100 pb-3">Microsoft Azure</h4>
                  <ul className="space-y-4 text-sm font-medium text-neutral-600">
                    <li className="flex items-center gap-3 group"><ArrowUpRight className="w-4 h-4 text-neutral-300 group-hover:text-black transition-colors flex-shrink-0" /> <span className="text-black">Azure AI Engineer Associate</span> <span className="text-neutral-400 font-normal ml-auto">Jan 2025</span></li>
                    <li className="flex items-center gap-3 group"><ArrowUpRight className="w-4 h-4 text-neutral-300 group-hover:text-black transition-colors flex-shrink-0" /> <span className="text-black">Azure Developer Associate</span> <span className="text-neutral-400 font-normal ml-auto">May 2025</span></li>
                    <li className="flex items-center gap-3 group"><ArrowUpRight className="w-4 h-4 text-neutral-300 group-hover:text-black transition-colors flex-shrink-0" /> <span>Azure Administrator</span> <span className="text-neutral-400 font-normal ml-auto">In progress</span></li>
                    <li className="flex items-center gap-3 group"><ArrowUpRight className="w-4 h-4 text-neutral-300 group-hover:text-black transition-colors flex-shrink-0" /> <span>Azure DevOps Expert</span> <span className="text-neutral-400 font-normal ml-auto">In progress</span></li>
                    <li className="flex items-center gap-3 group"><ArrowUpRight className="w-4 h-4 text-neutral-300 group-hover:text-black transition-colors flex-shrink-0" /> <span>Azure AI Fundamentals</span> <span className="text-neutral-400 font-normal ml-auto">May 2023</span></li>
                    <li className="flex items-center gap-3 group"><ArrowUpRight className="w-4 h-4 text-neutral-300 group-hover:text-black transition-colors flex-shrink-0" /> <span>Azure Security, Compliance & Identity</span> <span className="text-neutral-400 font-normal ml-auto">Mar 2023</span></li>
                    <li className="flex items-center gap-3 group"><ArrowUpRight className="w-4 h-4 text-neutral-300 group-hover:text-black transition-colors flex-shrink-0" /> <span>Azure Data Fundamentals</span> <span className="text-neutral-400 font-normal ml-auto">Feb 2023</span></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 mb-6 flex items-center gap-2 border-b border-neutral-100 pb-3">DevOps & IBM</h4>
                  <ul className="space-y-4 text-sm font-medium text-neutral-600">
                    <li className="flex items-center gap-3 group"><ArrowUpRight className="w-4 h-4 text-neutral-300 group-hover:text-black transition-colors flex-shrink-0" /> <span className="text-black">Certified Kubernetes Administrator (CKA)</span> <span className="text-neutral-400 font-normal ml-auto">Feb 2024</span></li>
                    <li className="flex items-center gap-3 group"><ArrowUpRight className="w-4 h-4 text-neutral-300 group-hover:text-black transition-colors flex-shrink-0" /> <span>IBM Watson Assistant Sales Foundation</span> <span className="text-neutral-400 font-normal ml-auto">May 2023</span></li>
                    <li className="flex items-center gap-3 group"><ArrowUpRight className="w-4 h-4 text-neutral-300 group-hover:text-black transition-colors flex-shrink-0" /> <span>IBM Watson Assistant Technical Sales</span> <span className="text-neutral-400 font-normal ml-auto">May 2023</span></li>
                  </ul>
                  
                  <div className="mt-10 pt-6 border-t border-neutral-100">
                    <h4 className="font-bold text-neutral-900 mb-3">Education</h4>
                    <div className="bg-[#fafafa] p-5 rounded-2xl border border-neutral-200/60 shadow-sm">
                      <p className="font-bold text-black text-lg">Bachelor’s in Software Engineering (Hons)</p>
                      <p className="text-neutral-500 mt-1 font-medium">University Malaysia of Computer Science & Engineering (UNIMY), Kuala Lumpur • 3.73 CGPA • Full scholarship • Mar 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

      </div>
    </main>
  );
}
