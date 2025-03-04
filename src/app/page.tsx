"use client";

import { useEffect, useState } from "react";

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
};

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [contributions, setContributions] = useState<Project[]>([]);

  useEffect(() => {
    fecthProjects();
    fecthContributions();
  }, []);

  async function fecthProjects() {
    const response = await fetch("/json/projects.json");
    const data = await response.json();
    setProjects(data);
  }

  async function fecthContributions() {
    const response = await fetch("/json/contributions.json");
    const data = await response.json();
    setContributions(data);
  }

  return (
    <div className="min-h-screen font-sans bg-gray-900 text-white">
      <main className="space-y-24 md:space-y-40">
        <section className="h-screen flex flex-col justify-center items-center px-4 text-center bg-gradient-to-br from-purple-700 to-indigo-900">
          <nav className="container mx-auto flex justify-between items-center absolute top-0 left-0 right-0 p-6">
            <h1 className="text-xl md:text-2xl font-bold">
              Portfólio Henrique Dias
            </h1>
            <ul className="hidden md:flex space-x-4 md:space-x-6">
              <li>
                <a href="#projects" className="hover:text-gray-400">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#contributions" className="hover:text-gray-400">
                  Contribuições
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-400">
                  Contato
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col items-center">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4 md:mb-6">
              Olá, me chamo Henrique
            </h2>
            <p className="text-lg md:text-xl mb-6">
              Sou desenvolvedor e bem-vindo ao meu portfólio
            </p>
            <a
              href="#projects"
              className="px-6 py-3 md:px-8 md:py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-500 transition"
            >
              Veja meu trabalho
            </a>
          </div>
        </section>

        <section id="projects" className="container mx-auto p-4 md:p-8">
          <h3 className="text-3xl md:text-4xl font-semibold mb-6 md:mb-8 text-center">
            Projetos Pessoais
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-2xl font-bold mb-2">{project.title}</h4>
                  <p className="text-gray-400">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-indigo-500 mt-4 inline-block"
                  >
                    Ver Projeto
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contributions" className="container mx-auto p-4 md:p-8">
          <h3 className="text-3xl md:text-4xl font-semibold mb-6 md:mb-8 text-center">
            Contribuições
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {contributions.map((contribution, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
              >
                <img
                  src={contribution.image}
                  alt={contribution.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-2xl font-bold mb-2">
                    {contribution.title}
                  </h4>
                  <p className="text-gray-400">{contribution.description}</p>
                  {
                    contribution.link && (
                      <a
                        href={contribution.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-400 hover:text-indigo-500 mt-4 inline-block"
                      >
                        Ver Site
                      </a>
                    )
                  }
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="container mx-auto p-8 text-center">
          <h3 className="text-3xl md:text-4xl font-semibold mb-4">
            Entre em Contato
          </h3>
          <p className="text-gray-400 mb-8">
            Fique à vontade para entrar em contato para colaborações ou apenas
            para bater um papo!
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="/pdf/curriculo-henrique.pdf"
              download
              className="text-indigo-400 hover:text-indigo-500"
            >
              Currículo
            </a>
            <a
              href="https://github.com/HenriqueDiasSilva"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-500"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/henriquediassilva/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-500"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="p-6 bg-gray-800 text-center text-gray-400">
        &copy; 2024 Feito em Next.js e Tailwind
      </footer>
    </div>
  );
}
