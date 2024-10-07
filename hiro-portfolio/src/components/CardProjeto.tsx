import React from 'react'
import { Link } from 'react-router-dom'

interface Projeto {
    id: number;
    img: string;
    titulo: string;
    descricao: string;
    link: string;
  }
  
  const CardProjeto: React.FC<{ projeto: Projeto }> = ({ projeto }) => {
    return (
      <div className="bg-black/50 shadow-lg rounded-lg overflow-hidden max-w-xs">
        <img
          src={projeto.img}
          alt={projeto.titulo}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-white text-xl font-bold mb-2">{projeto.titulo}</h2>
          <p className="text-gray-500 pb-4">{projeto.descricao}</p>
          <Link to={`/Projects/${projeto.id}`} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
            Learn More
          </Link>
        </div>
      </div>
    );
  };
  
  export default CardProjeto;
