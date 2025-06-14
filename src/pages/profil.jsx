"use client";

import { useState } from "react";
import {
  ArrowLeft,
  Github,
  Linkedin,
  Mail,
  Globe,
  Heart,
  Code,
  Coffee,
  Star,
} from "lucide-react";

export default function AboutPage() {
  const [isEmailCopied, setIsEmailCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("zainazmi50@gmail.com");
    setIsEmailCopied(true);
    setTimeout(() => setIsEmailCopied(false), 2000);
  };

  const skills = [
    "React",
    "Tailwind CSS",
    "DaisyUI",
    "Node.js",
    "Python",
    "JavaScript",
    "HTML/CSS",
    "PHP",
    "MySQL",
    "Python",
    "Git",
  ];

  const projects = [
    {
      name: "Infonesia",
      description:
        "Website untuk mencari informasi lengkap tentang negara-negara di dunia",
      tech: ["React", "DaisyUI", "REST API"],
      status: "Active",
    },
    {
      name: "BaznasCare",
      description: "Sistem Pengelolaan Permohonan Bantuan Baznas",
      tech: ["React", "Express.js", "CoreUI", "MySQL"],
      status: "Completed",
    },
    {
      name: "Retail Management System",
      description:
        "Sistem retail dengan fitur pengelolaan barang, pengelolaan transaksi, dan pengelolaan laporan.",
      tech: ["PHP", "HTML/CSS", "MySQL"],
      status: "Completed",
    },
  ];

  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="card bg-white text-black shadow-lg mb-8">
            <div className="card-body">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="avatar">
                  <div className="w-32 rounded-full ring ring-success ring-2">
                    <img src="/bebek.gif" alt="Profile Picture" />
                  </div>
                </div>

                <div className="text-center md:text-left flex-1">
                  <h1 className="text-lg font-bold mb-2">Zain Azmi</h1>
                  <p className="text-sm text-content/70 mb-4">
                    Full Stack Developer
                  </p>
                  <p className="text-sm text-content/80 leading-relaxed">
                    Seorang developer yang passionate dalam menciptakan aplikasi
                    web yang bermanfaat dan user-friendly. Saya senang
                    mengeksplorasi teknologi baru dan berbagi pengetahuan dengan
                    komunitas developer.
                  </p>

                  <div className="flex justify-center md:justify-start gap-4 mt-6">
                    <a
                      href="https://github.com/Zain-Azmi"
                      target="_blank"
                      className="btn btn-circle btn-outline"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/zain-azmi-368723345/"
                      target="_blank"
                      className="btn btn-circle btn-outline"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <button
                      onClick={copyEmail}
                      className="btn btn-circle btn-outline"
                    >
                      <Mail className="w-5 h-5" />
                    </button>
                    <a
                      href="https://zain-azmi.vercel.app/"
                      target="_blank"
                      className="btn btn-circle btn-outline"
                    >
                      <Globe className="w-5 h-5" />
                    </a>
                  </div>

                  {isEmailCopied && (
                    <div className="alert alert-success mt-4">
                      <span>Email berhasil disalin ke clipboard!</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card bg-white shadow-lg">
              <div className="card-body">
                <h2 className="card-title text-lg text-black mb-4">
                  <Code className="w-6 h-6" />
                  Keahlian Teknis
                </h2>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <div key={index} className="badge badge-primary badge-md">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="card bg-white text-black shadow-lg">
              <div className="card-body">
                <h2 className="card-title text-lg mb-4">
                  <Star className="w-6 h-6" />
                  Statistik
                </h2>
                <div className="stats stats-vertical lg:stats-horizontal">
                  <div className="stat">
                    <div className="stat-title text-gray-600 ">
                      Proyek Selesai
                    </div>
                    <div className="stat-value text-success">7+</div>
                  </div>
                  <div className="stat">
                    <div className="stat-title text-gray-600">Pengalaman</div>
                    <div className="stat-value text-primary">3 Tahun</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-white text-black shadow-lg mt-8">
            <div className="card-body">
              <h2 className="card-title text-lg mb-6">
                <Globe className="w-6 h-6" />
                Proyek Terbaru
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project, index) => (
                  <div key={index} className="card bg-gray-100 shadow-md">
                    <div className="card-body p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-black text-sm">
                          {project.name}
                        </h3>
                        <div
                          className={`badge ${
                            project.status === "Active"
                              ? "badge-success"
                              : project.status === "Completed"
                              ? "badge-primary"
                              : "badge-warning"
                          } badge-sm`}
                        >
                          {project.status}
                        </div>
                      </div>
                      <p className="text-sm text-black text-content/70 mb-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map((tech, techIndex) => (
                          <div
                            key={techIndex}
                            className="badge badge-outline badge-xs"
                          >
                            {tech}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="card bg-white shadow-lg mt-8">
            <div className="card-body">
              <h2 className="card-title text-black text-lg mb-4">
                <Heart className="w-6 h-6" />
                Tentang Website Ini
              </h2>
              <div className="prose max-w-none">
                <p className="text-sm text-black  text-content/80 leading-relaxed mb-4">
                  Website "Infonesia" ini dibuat dengan tujuan untuk menyediakan
                  informasi lengkap tentang negara-negara di seluruh dunia dalam
                  satu platform yang mudah digunakan.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h3 className="font-bold text-sm text-black  mb-2">
                      🎯 Fitur Utama:
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-black text-xs">
                      <li>Pencarian negara real-time</li>
                      <li>Informasi lengkap setiap negara</li>
                      <li>Modal detail yang informatif</li>
                      <li>Design responsive dan modern</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-black text-md mb-2">
                      🛠️ Teknologi:
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-black ">
                      <li>React</li>
                      <li>JavaScript</li>
                      <li>Tailwind CSS</li>
                      <li>DaisyUI Components</li>
                      <li>REST Countries API</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
