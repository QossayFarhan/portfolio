import { Github, Linkedin, Mail, FileText, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-slate-900 font-sans">
      <section className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900">
            Qossay Abuamriya.
          </h1>
          <h2 className="text-2xl md:text-3xl text-indigo-600 font-medium tracking-tight">
            Cloud & AI Software Engineer.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            I architect GenAI workflows, fine-tune LLMs, and deploy resilient cloud-native infrastructure. 
            Expertise across Azure, AWS, and Kubernetes, transforming complex business challenges into scalable AI platforms.
          </p>
          
          <div className="flex items-center gap-4 pt-6">
            <Link href="https://github.com/QossayFarhan" target="_blank" className="p-2 rounded-full hover:bg-gray-200 transition-colors text-slate-700 hover:text-slate-900">
              <Github className="w-6 h-6" />
            </Link>
            <Link href="https://www.linkedin.com/in/qossay-abuamriya/" target="_blank" className="p-2 rounded-full hover:bg-gray-200 transition-colors text-slate-700 hover:text-slate-900">
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link href="mailto:qossay.amriya@gmail.com" className="p-2 rounded-full hover:bg-gray-200 transition-colors text-slate-700 hover:text-slate-900">
              <Mail className="w-6 h-6" />
            </Link>
            <Link href="/portfolio/cv.pdf" target="_blank" className="flex items-center gap-2 px-6 py-2.5 ml-2 bg-slate-900 text-white rounded-full font-medium hover:bg-indigo-600 transition-colors">
              <FileText className="w-4 h-4" />
              View Resume
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20 border-t border-gray-200">
        <h3 className="text-2xl font-bold mb-12 flex items-center gap-2">Experience</h3>
        
        <div className="space-y-16">
          <div className="group">
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
              <h4 className="text-xl font-bold text-slate-900">Business Digital Transformation Engineer</h4>
              <span className="text-sm font-medium text-slate-500 mt-1 md:mt-0">Jun 2024 - Present</span>
            </div>
            <p className="text-lg text-indigo-600 font-medium mb-4">Takaful Emarat Insurance PSC. - Dubai</p>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start"><ChevronRight className="w-5 h-5 mr-2 shrink-0 text-indigo-400" /> Engineered a highly secure Agentic AI Customer Support platform using OpenAI and Cohere, driving a 70% reduction in Turnaround Time (TAT).</li>
              <li className="flex items-start"><ChevronRight className="w-5 h-5 mr-2 shrink-0 text-indigo-400" /> Developed a hybrid-search RAG pipeline across SQL and unstructured stores, cutting data retrieval time by 30%.</li>
              <li className="flex items-start"><ChevronRight className="w-5 h-5 mr-2 shrink-0 text-indigo-400" /> Built a high-performance Identity Document Processing tool utilizing Azure OCR, saving 50% in processing time.</li>
            </ul>
          </div>

          <div className="group">
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
              <h4 className="text-xl font-bold text-slate-900">Cloud & DevOps Engineer</h4>
              <span className="text-sm font-medium text-slate-500 mt-1 md:mt-0">Oct 2022 - Oct 2024</span>
            </div>
            <p className="text-lg text-indigo-600 font-medium mb-4">CoolRiots (IBM Partner) - Remote</p>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start"><ChevronRight className="w-5 h-5 mr-2 shrink-0 text-indigo-400" /> Co-developed a cloud-native Agentic AI Business Execution Platform from the ground up.</li>
              <li className="flex items-start"><ChevronRight className="w-5 h-5 mr-2 shrink-0 text-indigo-400" /> Fine-tuned LLMs on IBM WatsonX and Azure OpenAI, increasing model accuracy by 40% for specialized domains.</li>
              <li className="flex items-start"><ChevronRight className="w-5 h-5 mr-2 shrink-0 text-indigo-400" /> Managed highly available Kubernetes (AKS/IKS) infrastructure with NGINX, achieving 99.95% uptime.</li>
              <li className="flex items-start"><ChevronRight className="w-5 h-5 mr-2 shrink-0 text-indigo-400" /> Wrote Terraform scripts and built 20+ CI/CD pipelines, slashing deployment times by 30%.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-2xl font-bold mb-12">Core Technologies</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-indigo-400 font-semibold mb-4 text-sm uppercase tracking-wider">AI & Machine Learning</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Large Language Models (LLMs)</li>
                <li>Retrieval-Augmented Gen (RAG)</li>
                <li>OpenAI, Claude, Cohere</li>
                <li>LangChain & CrewAI</li>
                <li>Azure AI Foundry & WatsonX</li>
              </ul>
            </div>
            <div>
              <h4 className="text-indigo-400 font-semibold mb-4 text-sm uppercase tracking-wider">Cloud & DevOps</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Microsoft Azure (Certified)</li>
                <li>Kubernetes & Docker</li>
                <li>Terraform (IaC)</li>
                <li>CI/CD & GitHub Actions</li>
                <li>Grafana & Prometheus</li>
              </ul>
            </div>
            <div>
              <h4 className="text-indigo-400 font-semibold mb-4 text-sm uppercase tracking-wider">Software Engineering</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Python & FastAPI</li>
                <li>Microservices Architecture</li>
                <li>REST APIs</li>
                <li>SQL & NoSQL</li>
                <li>Agile & Scrum</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="max-w-4xl mx-auto px-6 py-8 text-center text-slate-500 text-sm">
        <p>Qossay Abuamriya. Built for the modern web.</p>
      </footer>
    </main>
  );
}
