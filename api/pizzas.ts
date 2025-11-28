import type { VercelRequest, VercelResponse } from '@vercel/node';

// This is the same data structure and mock data as before
interface PizzaServidor {
  id: number;
  nome: string;
  ingredientes: string;
  preco: number;
  tamanho: string;
  disponivel: boolean;
  origem: string;
}

const pizzasServidor: PizzaServidor[] = [
  {
    id: 9001,
    nome: 'Margherita',
    ingredientes: 'Molho de tomate, mussarela, manjericão fresco, azeite',
    preco: 35.9,
    tamanho: 'média',
    disponivel: true,
    origem: 'servidor',
  },
  {
    id: 9002,
    nome: 'Pepperoni',
    ingredientes: 'Molho de tomate, mussarela, pepperoni',
    preco: 42.9,
    tamanho: 'grande',
    disponivel: true,
    origem: 'servidor',
  },
  {
    id: 9003,
    nome: 'Quatro Queijos',
    ingredientes: 'Mussarela, gorgonzola, parmesão, provolone',
    preco: 45.9,
    tamanho: 'média',
    disponivel: true,
    origem: 'servidor',
  },
];

export default function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  // Allow CORS for all origins, you might want to restrict this in production
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests for CORS
  if (request.method === 'OPTIONS') {
    return response.status(200).end();
  }

  // Set the response header to indicate JSON content
  response.setHeader('Content-Type', 'application/json');

  // Return the pizza data
  return response.status(200).json({
    success: true,
    data: pizzasServidor,
    message: 'Pizzas carregadas do servidor',
  });
}