//* aqui van las funciones para todo el CRUD de los juegos
import { createContext, useState } from "react";
// eslint-disable-next-line react-refresh/only-export-components
export const GamesContext = createContext();
export const GamesContextProvider = ({ children }) => {
  const [games, setGames] = useState([
    {
      id: 1,
      code: "resident-evil-4-remake", // codigo para url
      title: "Resident Evil 4 Remake",
      price: 59.99,
      category: "Terror / Acción",
      description:
        "Un clásico renacido con gráficos impresionantes y jugabilidad moderna. ¡No te pierdas esta obra maestra del terror!",
      image: "/images/resident_evil-4-remake.webp",
      gallery: ["/images/re4-1.webp", "/images/re4-2.webp"], // poner mas imagenes 
      developer: "Capcom",
      requirements: {
        os: "Windows 10 (64 bit)",
        processor: "AMD Ryzen 3 1200 / Intel Core i5-7500",
        memory: "8 GB RAM",
        graphics: "AMD Radeon RX 560 / NVIDIA GeForce GTX 1050 Ti",
      },
      reviews: [], // array para reseñas, ver como hacer reseñas locales
    },
    {
      id: 2,
      code: "the-witcher-3",
      title: "The Witcher 3: Wild Hunt",
      price: 29.99,
      category: "RPG / Aventura",
      description:
        "Conviértete en Geralt de Rivia, un cazador de monstruos profesional, en busca de la niña de la profecía en un vasto mundo abierto.",
      image: "/images/resident_evil-4-remake.webp", // placeholder, buscar imagenes
      gallery: [],
      developer: "CD Projekt Red",
      requirements: {
        os: "Windows 7 (64 bit)",
        processor: "Intel CPU Core i5-2500K 3.3GHz",
        memory: "6 GB RAM",
        graphics: "Nvidia GPU GeForce GTX 660",
      },
      reviews: [],
    },
    {
      id: 3,
      code: "gta-v",
      title: "Grand Theft Auto V",
      price: 19.99,
      category: "Acción / Aventura",
      description:
        "Un joven estafador callejero, un ladrón de bancos retirado y un psicópata aterrador se ven involucrados con lo peor del submundo criminal.",
      image: "/images/gta-v.webp",
      gallery: [],
      developer: "Rockstar North",
      requirements: {
        os: "Windows 10",
        processor: "Intel Core i5",
        memory: "8 GB RAM",
        graphics: "NVIDIA GTX 660",
      },
      reviews: [],
    },
    {
      id: 4,
      code: "fifa-23",
      title: "EA SPORTS™ FIFA 23",
      price: 69.99,
      category: "Deportes",
      description:
        "FIFA 23 nos acerca a The World's Game con la tecnología HyperMotion2 que ofrece una experiencia de juego aún más realista.",
      image: "/images/fifa-23.webp",
      gallery: [],
      developer: "EA Canada",
      requirements: {
        os: "Windows 10",
        processor: "Intel Core i7",
        memory: "12 GB RAM",
        graphics: "NVIDIA GTX 1660",
      },
      reviews: [],
    },
    {
      id: 5,
      code: "cyberpunk-2077",
      title: "Cyberpunk 2077",
      price: 49.99,
      category: "RPG / Acción",
      description:
        "Cyberpunk 2077 es un RPG de acción y aventura de mundo abierto ambientado en Night City, una megalópolis obsesionada con el poder.",
      image: "/images/cyberpunk.webp",
      gallery: [],
      developer: "CD Projekt Red",
      requirements: {
        os: "Windows 10",
        processor: "Intel Core i7",
        memory: "16 GB RAM",
        graphics: "NVIDIA RTX 2060",
      },
      reviews: [],
    },
  ]);

  const dataGames = {
    games,
    setGames,
  };

  return (
    <GamesContext.Provider value={dataGames}>{children}</GamesContext.Provider>
  );
};
