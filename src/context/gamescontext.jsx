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
      stock: 150,
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
      highlighted: true, // juegos destacados (hero)
      onSale: false, // juegos en promoción
      isNew: true, // juegos nuevos
      reviews: [], // array para reseñas, ver como hacer reseñas locales
    },
    {
      id: 2,
      code: "the-witcher-3",
      title: "The Witcher 3: Wild Hunt",
      stock: 8,
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
      highlighted: false,
      onSale: true,
      isNew: false,
      reviews: [],
    },
    {
      id: 3,
      code: "gta-v",
      title: "Grand Theft Auto V",
      stock: 8,
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
      highlighted: true,
      onSale: true,
      isNew: false,
      reviews: [],
    },
    {
      id: 4,
      code: "fifa-23",
      title: "EA SPORTS™ FIFA 23",
      stock: 8,
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
      highlighted: false,
      onSale: true,
      isNew: false,
      reviews: [],
    },
    {
      id: 5,
      code: "cyberpunk-2077",
      title: "Cyberpunk 2077",
      stock: 8,
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
      highlighted: true,
      onSale: false,
      isNew: false,
      reviews: [],
    },
    {
      id: 6,
      code: "elden-ring",
      title: "Elden Ring",
      stock: 0,
      price: 59.99,
      category: "RPG / Acción",
      description:
        "Un vasto mundo abierto lleno de desafíos, creado por FromSoftware junto a George R. R. Martin.",
      image: "/images/elden-ring.webp",
      gallery: [],
      developer: "FromSoftware",
      requirements: {
        os: "Windows 10",
        processor: "Intel Core i5-8400 / AMD Ryzen 3 3300X",
        memory: "12 GB RAM",
        graphics: "NVIDIA GTX 1060 / AMD RX 580",
      },
      highlighted: true,
      onSale: true,
      isNew: true,
      reviews: [],
    },
    {
      id: 7,
      code: "god-of-war",
      title: "God of War",
      stock: 8,
      price: 49.99,
      category: "Acción / Aventura",
      description:
        "Kratos regresa en una historia épica ambientada en la mitología nórdica, junto a su hijo Atreus.",
      image: "/images/god-of-war.webp",
      gallery: [],
      developer: "Santa Monica Studio",
      requirements: {
        os: "Windows 10",
        processor: "Intel Core i5-6600K",
        memory: "8 GB RAM",
        graphics: "NVIDIA GTX 960",
      },
      highlighted: false,
      onSale: true,
      isNew: false,
      reviews: [],
    },
    {
      id: 8,
      code: "red-dead-redemption-2",
      title: "Red Dead Redemption 2",
      stock: 8,
      price: 59.99,
      category: "Acción / Aventura",
      description:
        "Una épica historia del lejano oeste con un mundo abierto extremadamente detallado.",
      image: "/images/red-dead-redemption-2.webp",
      gallery: [],
      developer: "Rockstar Games",
      requirements: {
        os: "Windows 10",
        processor: "Intel Core i7-4770K",
        memory: "12 GB RAM",
        graphics: "NVIDIA GTX 1060",
      },
      highlighted: true,
      onSale: true,
      isNew: false,
      reviews: [],
    },
    {
      id: 9,
      code: "call-of-duty-warzone",
      title: "Call of Duty: Warzone",
      stock: 0,
      price: 0.0,
      category: "Acción",
      description:
        "Battle royale gratuito con combates intensos y mapas a gran escala.",
      image: "/images/cod-warzone.webp",
      gallery: [],
      developer: "Infinity Ward",
      requirements: {
        os: "Windows 10",
        processor: "Intel Core i3-6100",
        memory: "8 GB RAM",
        graphics: "NVIDIA GTX 960",
      },
      highlighted: false,
      onSale: false,
      isNew: false,
      reviews: [],
    },
    {
      id: 10,
      code: "minecraft",
      title: "Minecraft",
      stock: 8,
      price: 26.95,
      category: "Aventura / Sandbox",
      description:
        "Explora, construye y sobrevive en un mundo infinito hecho de bloques.",
      image: "/images/minecraft.webp",
      gallery: [],
      developer: "Mojang Studios",
      requirements: {
        os: "Windows 10",
        processor: "Intel Core i3",
        memory: "4 GB RAM",
        graphics: "Intel HD Graphics",
      },
      highlighted: false,
      onSale: true,
      isNew: false,
      reviews: [],
    },
    {
      id: 11,
      code: "hollow-knight",
      title: "Hollow Knight",
      stock: 8,
      price: 14.99,
      category: "Indie / Plataformas",
      description:
        "Un desafiante metroidvania con un estilo artístico único y gran ambientación.",
      image: "/images/hollow-knight.webp",
      gallery: [],
      developer: "Team Cherry",
      requirements: {
        os: "Windows 10",
        processor: "Intel Core i3",
        memory: "4 GB RAM",
        graphics: "Intel HD Graphics 4000",
      },
      highlighted: false,
      onSale: true,
      isNew: false,
      reviews: [],
    },
    {
      id: 12,
      code: "the-last-of-us-part-1",
      title: "The Last of Us Part I",
      stock: 15,
      price: 69.99,
      category: "Acción / Aventura",
      description:
        "Una historia intensa de supervivencia en un mundo devastado por una pandemia.",
      image: "/images/the-last-of-us.webp",
      gallery: [],
      developer: "Naughty Dog",
      requirements: {
        os: "Windows 10",
        processor: "Intel Core i7-8700",
        memory: "16 GB RAM",
        graphics: "NVIDIA GTX 1080",
      },
      highlighted: false,
      onSale: true,
      isNew: false,
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
