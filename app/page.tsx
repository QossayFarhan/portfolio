'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, ArrowUpRight, Cloud, Bot, Database, Server, Code, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const fadeIn: any = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-[#111] font-sans selection:bg-neutral-200">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fafafa]/80 backdrop-blur-md border-b border-neutral-200/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-semibold text-lg tracking-tight">Q.A</span>
          <div className="flex items-center gap-4 text-neutral-500">
            <Link href="https://github.com/QossayFarhan" target="_blank" className="hover:text-black transition-colors">
              <Github className="w-5 h-5" />
            </Link>
            <Link href="https://www.linkedin.com/in/qossay-abuamriya/" target="_blank" className="hover:text-black transition-colors">
              <Linkedin className="w-5 h-5" />
            </Link>
            <a href="/portfolio/cv.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-black text-white text-sm font-medium rounded-full hover:bg-neutral-800 transition-all shadow-md">
              <FileText className="w-4 h-4" />
              Resume
            </a>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-24">
        
        {/* Hero Section */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="py-20 md:py-32"
        >
          <motion.div variants={fadeIn} className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-6">
              Engineering <span className="text-neutral-400">intelligent</span> cloud systems.
            </h1>
            <p className="text-xl md:text-2xl text-neutral-500 leading-relaxed mb-10">
              Hi, I'm Qossay Abuamriya. A Cloud & AI Software Engineer specializing in Agentic RAG, LLM fine-tuning, and highly available Kubernetes infrastructure.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="mailto:qossay.amriya@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-medium hover:scale-105 transition-transform shadow-lg">
                <Mail className="w-4 h-4" />
                Get in touch
              </a>
            </div>
          </motion.div>
        </motion.section>

        {/* Bento Grid - Projects & Experience */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="py-12"
        >
          <motion.div variants={fadeIn} className="mb-10">
            <h2 className="text-3xl font-bold tracking-tight">Featured Work & Impact</h2>
            <p className="text-neutral-500 mt-2">Key projects from Takaful Emarat & CoolRiots (IBM Partner)</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Project 1 - Large */}
            <motion.div variants={fadeIn} className="col-span-1 md:col-span-2 lg:col-span-2 bg-white rounded-[2rem] p-8 border border-neutral-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
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
                    Engineered a highly secure, context-aware AI support agent utilizing the Airia Platform, OpenAI, and Cohere. Implemented strict guardrails and Azure Content Filtering for responsible AI interaction.
                  </p>
                </div>
                <div className="flex items-end justify-between mt-auto pt-8">
                  <div className="flex flex-wrap gap-2 max-w-[60%]">
                    <span className="px-3 py-1.5 bg-neutral-50 rounded-lg text-sm font-medium text-neutral-600 border border-neutral-200">OpenAI</span>
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
            <motion.div variants={fadeIn} className="col-span-1 bg-[#111] text-white rounded-[2rem] p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Database className="w-32 h-32 text-white" />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 bg-white/10 text-white text-xs font-bold uppercase tracking-wider rounded-full">CoolRiots</span>
                    <span className="text-white/60 text-sm font-medium">2022 - 2024</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Agentic Business Platform</h3>
                  <p className="text-white/60 leading-relaxed mb-6">
                    Co-developed a cloud-native platform using Python and GenAI to solve challenges in insurance, law, and education. Fine-tuned LLMs on IBM WatsonX and Azure OpenAI.
                  </p>
                </div>
                <div className="mt-8 pt-8 border-t border-white/10">
                  <div className="text-5xl font-black text-white mb-1 tracking-tighter">+40%</div>
                  <div className="text-xs text-white/50 uppercase tracking-wider font-bold">Model Accuracy</div>
                </div>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div variants={fadeIn} className="col-span-1 bg-white rounded-[2rem] p-8 border border-neutral-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
               <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-purple-50 text-purple-600 text-xs font-bold uppercase tracking-wider rounded-full">Takaful Emarat</span>
                </div>
              <h3 className="text-xl font-bold mb-3">Hybrid Search & RAG</h3>
              <p className="text-neutral-500 mb-6 text-sm leading-relaxed">
                Designed workflows combining keyword and semantic search across SQL and unstructured data using LangChain, Azure AI Search, and AI Foundry.
              </p>
              <div className="mt-auto pt-6 border-t border-neutral-100">
                <div className="text-3xl font-black text-black mb-1 tracking-tight">30%</div>
                <div className="text-xs text-neutral-400 uppercase tracking-wider font-bold">Faster Data Retrieval</div>
              </div>
            </motion.div>

            {/* Project 4 */}
            <motion.div variants={fadeIn} className="col-span-1 bg-white rounded-[2rem] p-8 border border-neutral-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
              <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-green-50 text-green-600 text-xs font-bold uppercase tracking-wider rounded-full">Takaful Emarat</span>
                </div>
              <h3 className="text-xl font-bold mb-3">Identity Document OCR</h3>
              <p className="text-neutral-500 mb-6 text-sm leading-relaxed">
                Built a high-performance ID processing tool utilizing Azure OCR and Document Intelligence to process mixed document formats automatically.
              </p>
              <div className="mt-auto pt-6 border-t border-neutral-100">
                <div className="text-3xl font-black text-black mb-1 tracking-tight">50%</div>
                <div className="text-xs text-neutral-400 uppercase tracking-wider font-bold">Reduction in Processing Time</div>
              </div>
            </motion.div>

            {/* Project 5 */}
            <motion.div variants={fadeIn} className="col-span-1 md:col-span-2 lg:col-span-1 bg-white rounded-[2rem] p-8 border border-neutral-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
              <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-orange-50 text-orange-600 text-xs font-bold uppercase tracking-wider rounded-full">CoolRiots</span>
                </div>
              <h3 className="text-xl font-bold mb-3">Cloud Infrastructure & K8s</h3>
              <p className="text-neutral-500 mb-6 text-sm leading-relaxed">
                Managed highly available Kubernetes (AKS/IKS) infrastructure with NGINX load balancing. Wrote Terraform (IaC) and built 20+ CI/CD pipelines.
              </p>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-neutral-100">
                 <div>
                  <div className="text-3xl font-black text-black mb-1 tracking-tight">99.95%</div>
                  <div className="text-xs text-neutral-400 uppercase tracking-wider font-bold">System Uptime</div>
                 </div>
              </div>
            </motion.div>

          </div>
        </motion.section>

        {/* Skills Section (Notion Style) */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="py-16"
        >
          <motion.div variants={fadeIn} className="mb-10">
            <h2 className="text-3xl font-bold tracking-tight">Technical Arsenal</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div variants={fadeIn} className="p-8 bg-white rounded-3xl border border-neutral-200 shadow-sm">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-4">Generative AI & ML</h3>
              <div className="flex flex-wrap gap-2">
                {['LLMs', 'RAG', 'Agentic AI', 'Prompt Engineering', 'LangChain', 'OpenAI', 'Claude', 'Cohere', 'WatsonX'].map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-[#fafafa] text-neutral-700 text-sm font-medium rounded-lg border border-neutral-200/80">{skill}</span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="p-8 bg-white rounded-3xl border border-neutral-200 shadow-sm">
              <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Cloud className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-4">Cloud & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {['Azure', 'IBM Cloud', 'Kubernetes', 'Docker', 'Terraform', 'CI/CD', 'GitHub Actions', 'Grafana', 'Prometheus'].map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-[#fafafa] text-neutral-700 text-sm font-medium rounded-lg border border-neutral-200/80">{skill}</span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="p-8 bg-white rounded-3xl border border-neutral-200 shadow-sm">
              <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-4">Software Engineering</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'FastAPI', 'ASP.Net', 'SQL', 'Microservices', 'REST APIs', 'Agile'].map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-[#fafafa] text-neutral-700 text-sm font-medium rounded-lg border border-neutral-200/80">{skill}</span>
                ))}
              </div>
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
          <motion.div variants={fadeIn} className="bg-white rounded-3xl border border-neutral-200 p-8 md:p-12 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] relative overflow-hidden">
            <div className="absolute -top-10 -right-10 p-12 opacity-[0.02]">
               <ShieldCheck className="w-96 h-96" />
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold tracking-tight flex items-center gap-3 mb-10">
                <div className="w-10 h-10 bg-green-50 text-green-600 rounded-xl flex items-center justify-center shadow-sm">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                Certifications & Education
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h4 className="font-bold text-neutral-900 mb-6 flex items-center gap-2 border-b border-neutral-100 pb-3">Microsoft Azure</h4>
                  <ul className="space-y-4 text-sm font-medium text-neutral-600">
                    <li className="flex items-center gap-3 group"><ArrowUpRight className="w-4 h-4 text-neutral-300 group-hover:text-black transition-colors" /> <span className="text-black">Azure AI Engineer Associate</span> <span className="text-neutral-400 font-normal ml-auto">Jan 2025</span></li>
                    <li className="flex items-center gap-3 group"><ArrowUpRight className="w-4 h-4 text-neutral-300 group-hover:text-black transition-colors" /> <span>Azure Developer Associate</span> <span className="text-neutral-400 font-normal ml-auto">Expected 2025</span></li>
                    <li className="flex items-center gap-3 group"><ArrowUpRight className="w-4 h-4 text-neutral-300 group-hover:text-black transition-colors" /> <span>Azure AI Fundamentals</span> <span className="text-neutral-400 font-normal ml-auto">May 2023</span></li>
                    <li className="flex items-center gap-3 group"><ArrowUpRight className="w-4 h-4 text-neutral-300 group-hover:text-black transition-colors" /> <span>Azure Security & Compliance</span> <span className="text-neutral-400 font-normal ml-auto">Mar 2023</span></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 mb-6 flex items-center gap-2 border-b border-neutral-100 pb-3">DevOps & IBM</h4>
                  <ul className="space-y-4 text-sm font-medium text-neutral-600">
                    <li className="flex items-center gap-3 group"><ArrowUpRight className="w-4 h-4 text-neutral-300 group-hover:text-black transition-colors" /> <span className="text-black">Certified Kubernetes Admin (CKA)</span> <span className="text-neutral-400 font-normal ml-auto">Feb 2024</span></li>
                    <li className="flex items-center gap-3 group"><ArrowUpRight className="w-4 h-4 text-neutral-300 group-hover:text-black transition-colors" /> <span>IBM Watson Assistant Tech Sales</span> <span className="text-neutral-400 font-normal ml-auto">May 2023</span></li>
                  </ul>
                  
                  <div className="mt-10 pt-6 border-t border-neutral-100">
                    <h4 className="font-bold text-neutral-900 mb-3">Education</h4>
                    <div className="bg-[#fafafa] p-5 rounded-2xl border border-neutral-200/60 shadow-sm">
                      <p className="font-bold text-black text-lg">Bachelor’s in Software Engineering (Hons)</p>
                      <p className="text-neutral-500 mt-1 font-medium">UNIMY, Malaysia • 3.73 CGPA (Full Scholarship)</p>
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
