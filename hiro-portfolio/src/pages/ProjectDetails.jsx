import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';

export default function ProjectDetails() {
  const { id } = useParams(); // Pega o ID da rota

  // Verifica se os dados estão disponíveis
  if (!data || data.length === 0) {
    return <p>Loading projects or no projects available.</p>;
  }

  const projeto = data.find((proj) => proj.id === parseInt(id));

  // Verifica se o projeto foi encontrado
  if (!projeto) {
    return <p>Project not found.</p>;
  }

  return (
    <div className="min-h-screen min-w-full bg-gradient-to-b from-[#030027] to-[#0B008D] p-8 pt-[10%]">
      <div className="bg-black/50 shadow-lg rounded-lg p-6 max-w-lg mx-auto">
        <img
          src={projeto.img}
          alt={projeto.titulo}
          className="w-full h-48 object-cover"
        />
        <h2 className="text-white text-3xl font-bold my-4">{projeto.titulo}</h2>
        <p className="text-gray-300 mb-4">{projeto.descricao}</p>
        <a
          href={projeto.link}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Visit Project
        </a>
      </div>
    </div>
  );
}