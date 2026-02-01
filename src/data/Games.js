export const initialGames = [
  {
    id: 1,
    code: "resident-evil-4-remake",
    title: "Resident Evil 4 Remake",
    stock: 30,
    price: 59.99,
    category: "Terror / Acción",
    rating: 4.6,
    ratingsCount: 2543,
    description:
      "Un clásico renacido con gráficos impresionantes y jugabilidad moderna.",
    longDescription: `Leon S. Kennedy regresa en una versión completamente renovada del clásico. Sobrevive a una pesadilla rural en España mientras rescatas a la hija del presidente.
• Combate modernizado y sigilo dinámico.
• Gráficos RE Engine de última generación.
• Historia expandida con nuevos matices.
• El modo Mercenarios incluido.`,
    image: "https://i.postimg.cc/6qfRpGgN/RE4_1A.webp",
    gallery: [
      "https://i.postimg.cc/NMVCkZjc/resident-evil-4-1.webp",
      "https://i.postimg.cc/PxNFZdTN/resident-evil-4-2.webp",
      "https://i.postimg.cc/Ssjt8mkK/resident-evil-4-3.webp",
    ],
    developer: "Capcom",
    platform: "PC",
    mode: "Un Jugador",
    languages: "Español / Inglés / Portugués",
    requirements: {
      os: "Windows 10 (64 bit)",
      processor: "AMD Ryzen 3 1200 / Intel Core i5-7500",
      memory: "8 GB RAM",
      graphics: "AMD Radeon RX 560 / NVIDIA GeForce GTX 1050 Ti",
    },
    highlighted: true,
    onSale: false,
    isNew: true,
    reviews: [
      {
        user: "Lucas",
        rating: 5,
        comment: "Muy buen juego, gráficos increíbles.",
      },
      { user: "Martina",
        rating: 4,
        comment: "La historia es buenísima." },
    ],
  },
  {
    id: 2,
    code: "the-witcher-3",
    title: "The Witcher 3: Wild Hunt",
    stock: 35,
    price: 29.99,
    category: "RPG / Aventura",
    rating: 4.9,
    ratingsCount: 15430,
    description:
      "Conviértete en Geralt de Rivia, un cazador de monstruos profesional.",
    longDescription: `Eres Geralt de Rivia, cazador de monstruos. En una ciudad devastada por la guerra y regiones salvajes, debes encontrar a Ciri, la niña de la profecía.
• Mundo abierto masivo y detallado.
• Sistema de combate basado en signos y espadas.
• Decisiones que cambian el rumbo del mundo.
• Incluye todas las actualizaciones de nueva generación.`,
    image: "https://i.postimg.cc/tJMmRTfG/proximamente.webp",
    gallery: [],
    developer: "CD Projekt Red",
    platform: "PC / PS5 / Xbox",
    mode: "Un Jugador",
    languages: "Español / Inglés",
    requirements: {
      os: "Windows 10",
      processor: "Intel i5-2500K",
      memory: "6 GB RAM",
      graphics: "GTX 660",
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
    stock: 90,
    price: 19.99,
    category: "Acción / Aventura",
    rating: 4.8,
    ratingsCount: 50000,
    description:
      "Tres criminales muy diferentes lo arriesgan todo en una serie de atrevidos atracos.",
    longDescription: `Vive las vidas de tres criminales muy diferentes, Michael, Franklin y Trevor, mientras lo arriesgan todo en una serie de audaces atracos en Los Santos.
• Cambia entre los tres protagonistas en cualquier momento.
• Explora un mundo abierto gigante inspirado en California.
• Incluye Grand Theft Auto Online, un universo en constante evolución.
• Cientos de vehículos, armas y actividades secundarias.`,
    image: "https://i.postimg.cc/05XKcPvY/gta-v-1.webp",
    gallery: ["https://i.postimg.cc/br5GJHLq/gta-v-2.webp"],
    developer: "Rockstar Games",
    platform: "PC",
    mode: "Multijugador",
    languages: "Español / Inglés",
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
    stock: 0,
    price: 69.99,
    category: "Deportes",
    rating: 3.5,
    ratingsCount: 8540,
    description:
      "Experimenta la emoción del fútbol con HyperMotion2 y la Copa del Mundo.",
    longDescription: `El Juego de Todos llega al campo con la tecnología HyperMotion2, las Copas Mundiales masculina y femenina, y clubes femeninos por primera vez.
• Realismo inigualable con animaciones capturadas de partidos reales.
• Crea el equipo de tus sueños en FIFA Ultimate Team.
• Modo Carrera renovado para jugar como futbolista o mánager.
• Juego cruzado entre plataformas de la misma generación.`,
    image: "https://i.postimg.cc/tJMmRTfG/proximamente.webp",
    gallery: [],
    developer: "EA Sports",
    platform: "PC",
    mode: "Multijugador",
    languages: "Español / Inglés",
    requirements: {
      os: "Windows 10",
      processor: "Intel Core i7",
      memory: "12 GB RAM",
      graphics: "GTX 1660",
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
    stock: 80,
    price: 49.99,
    category: "RPG / Acción",
    rating: 4.2,
    ratingsCount: 12400,
    description:
      "Una historia de acción y aventura en Night City, una megalópolis obsesionada con el poder.",
    longDescription: `Conviértete en V, un mercenario cyberpunk en Night City. Personaliza tu cuerpo con implantes cibernéticos y forja tu propio destino en el futuro.
• Mundo abierto vertical y futurista lleno de detalles.
• Sistema de combate variado: armas, hackeo y sigilo.
• Narrativa ramificada con finales múltiples.
• Incluye la actualización masiva 2.0 y soporte para Ray Tracing.`,
    image: "https://i.postimg.cc/YS92ZmMP/cyberpunk.webp",
    gallery: [
      "https://i.postimg.cc/QMtNwWhy/cyberpunk-2.webp",
      "https://i.postimg.cc/Pqxf98Tc/cyberpunk-3.webp",
      "https://i.postimg.cc/Gp23VsdV/cyberpunk-4.webp",
      "https://i.postimg.cc/Y0cpvnYC/cyberpunk-5.webp",
    ],
    developer: "CD Projekt Red",
    platform: "PC",
    mode: "Un Jugador",
    languages: "Español / Inglés",
    requirements: {
      os: "Windows 10",
      processor: "Intel Core i7",
      memory: "16 GB RAM",
      graphics: "RTX 2060",
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
    stock: 18,
    price: 59.99,
    category: "RPG / Acción",
    rating: 4.9,
    ratingsCount: 30000,
    description:
      "Álzate, Sinluz, y que la gracia te guíe para convertirte en el Señor del Círculo.",
    longDescription: `En las Tierras Intermedias, gobernadas por la Reina Marika la Eterna, el Círculo de Elden ha sido destruido. Recupera los fragmentos y reclama tu trono.
• Un mundo abierto vasto diseñado por Hidetaka Miyazaki y George R.R. Martin.
• Combate desafiante contra jefes legendarios.
• Gran variedad de magias, armas y estilos de juego.
• Montura dinámica para explorar y combatir.`,
    image: "https://i.postimg.cc/RhDfjzHF/elden-ring-2.webp",
    gallery: [
      "https://i.postimg.cc/nrP76tQP/elden-ring.webp",
      "https://i.postimg.cc/RhDfjzHC/elden-ring-3.webp",
      "https://i.postimg.cc/rsPWvLr6/elden-ring-4.webp",
      "https://i.postimg.cc/VvVM3cCc/elden-ring-5.webp",
    ],
    developer: "FromSoftware",
    platform: "PC",
    mode: "Un Jugador / Cooperativo",
    languages: "Español / Inglés",
    requirements: {
      os: "Windows 10",
      processor: "Intel Core i5-8400",
      memory: "12 GB RAM",
      graphics: "GTX 1060",
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
    rating: 4.9,
    ratingsCount: 20000,
    description:
      "Kratos es padre de nuevo. Como mentor de Atreus, debe luchar para sobrevivir.",
    longDescription: `Kratos ha dejado atrás su venganza contra los dioses del Olimpo y ahora vive en el reino de las deidades y monstruos nórdicos.
• Una relación profunda y emocional entre padre e hijo.
• Combate visceral con el hacha Leviatán.
• Un viaje por los nueve reinos de la mitología nórdica.
• Gráficos y rendimiento optimizados para PC.`,
    image: "https://i.postimg.cc/tJMmRTfG/proximamente.webp",
    gallery: [],
    developer: "Santa Monica Studio",
    platform: "PC",
    mode: "Un Jugador",
    languages: "Español / Inglés",
    requirements: {
      os: "Windows 10",
      processor: "Intel i5-6600K",
      memory: "8 GB RAM",
      graphics: "GTX 960",
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
    rating: 4.9,
    ratingsCount: 45000,
    description:
      "La épica historia del forajido Arthur Morgan y la banda de Van der Linde.",
    longDescription: `América, 1899. El fin de la era del salvaje oeste ha comenzado. Tras un atraco fallido en Blackwater, Arthur Morgan y su banda huyen.
• El mundo abierto más detallado y realista jamás creado.
• Sistema de honor que influye en cómo reacciona el mundo ante ti.
• Caza, pesca, juega póker o simplemente explora la frontera.
• Una narrativa cinematográfica inigualable.`,
    image: "https://i.postimg.cc/vZPvLqyc/rdr2-2.webp",
    gallery: ["https://i.postimg.cc/yxzhY2mf/rdr-2-3.webp","https://i.postimg.cc/zfVFdCDB/rdr2-1.webp", "https://i.postimg.cc/13WKcCSt/rdr2-4.webp"],
    developer: "Rockstar Games",
    platform: "PC",
    mode: "Un Jugador / Online",
    languages: "Español / Inglés",
    requirements: {
      os: "Windows 10",
      processor: "Intel Core i7-4770K",
      memory: "12 GB RAM",
      graphics: "GTX 1060",
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
    category: "Acción / Shooter",
    rating: 4.0,
    ratingsCount: 60000,
    description:
      "Battle royale gratuito y masivo de los creadores de Modern Warfare.",
    longDescription: `Salta, ármate, saquea y lucha para llegar a la cima en esta experiencia de combate a gran escala gratuita.
• Combate masivo para hasta 150 jugadores.
• El sistema de contratos ofrece recompensas por misiones dinámicas.
• Nuevos mapas y temporadas con contenido constante.
• Armamento totalmente personalizable en el armero.`,
    image: "https://i.postimg.cc/tJMmRTfG/proximamente.webp",
    gallery: [],
    developer: "Activision",
    platform: "PC",
    mode: "Multijugador",
    languages: "Español / Inglés",
    requirements: {
      os: "Windows 10",
      processor: "Intel i3-6100",
      memory: "8 GB RAM",
      graphics: "GTX 960",
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
    stock: 50,
    price: 26.95,
    category: "Aventura / Sandbox",
    rating: 4.8,
    ratingsCount: 100000,
    description:
      "Explora mundos infinitos y construye desde la casa más sencilla hasta el castillo más grandioso.",
    longDescription: `¡Crea lo que imagines! Minecraft te permite explorar, excavar y construir en un mundo generado aleatoriamente.
• Modo Supervivencia: lucha contra monstruos y busca recursos.
• Modo Creativo: recursos ilimitados para construir sin límites.
• Juega con amigos en servidores multiplayer o mundos privados.
• Infinitas posibilidades con mods y texturas de la comunidad.`,
    image: "https://i.postimg.cc/tJMmRTfG/proximamente.webp",
    gallery: [],
    developer: "Mojang",
    platform: "PC",
    mode: "Multijugador",
    languages: "Español / Inglés",
    requirements: {
      os: "Windows 10",
      processor: "Intel i3",
      memory: "4 GB RAM",
      graphics: "Integrated Graphics",
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
    stock: 15,
    price: 14.99,
    category: "Indie / Metroidvania",
    rating: 4.9,
    ratingsCount: 15000,
    description:
      "Forja tu propio camino en Hollow Knight! Una aventura de acción épica.",
    longDescription: `Desciende al mundo de Hallownest, un vasto reino en ruinas lleno de insectos y héroes. Explora cavernas y laberintos para descubrir antiguos secretos.
• Estilo artístico dibujado a mano de gran belleza.
• Combate preciso y desafiante contra más de 150 enemigos.
• Encuentra amuletos mágicos para personalizar tus habilidades.
• Una banda sonora evocadora y melancólica.`,
    image: "https://i.postimg.cc/tJMmRTfG/proximamente.webp",
    gallery: [],
    developer: "Team Cherry",
    platform: "PC",
    mode: "Un Jugador",
    languages: "Español / Inglés",
    requirements: {
      os: "Windows 10",
      processor: "Intel Core i3",
      memory: "4 GB RAM",
      graphics: "GT 430",
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
    stock: 12,
    price: 69.99,
    category: "Acción / Aventura",
    rating: 4.7,
    ratingsCount: 5000,
    description:
      "En una civilización devastada, Joel y Ellie deben sobrevivir juntos.",
    longDescription: `Disfruta de la emocionante historia y los personajes inolvidables de The Last of Us, reconstruido desde cero para PC y PS5.
• Narrativa profunda centrada en la supervivencia y la humanidad.
• Gráficos hiperrealistas y animaciones faciales mejoradas.
• Incluye el capítulo precuela Left Behind.
• Modos de juego adicionales y opciones de accesibilidad.`,
    image: "https://i.postimg.cc/tJMmRTfG/proximamente.webp",
    gallery: [],
    developer: "Naughty Dog",
    platform: "PC / PS5",
    mode: "Un Jugador",
    languages: "Español / Inglés",
    requirements: {
      os: "Windows 10",
      processor: "Intel Core i7-8700",
      memory: "16 GB RAM",
      graphics: "RTX 2060",
    },
    highlighted: false,
    onSale: true,
    isNew: false,
    reviews: [],
  },
  {
    id: 13,
    code: "the-last-of-us-part-2",
    title: "The Last of Us Part II",
    stock: 12,
    price: 69.99,
    category: "Acción / Aventura",
    rating: 4.3,
    ratingsCount: 3000,
    description:
      "Cinco años después, Ellie y Joel se asientan en Jackson, Wyoming.",
    longDescription: `Tras un evento violento que altera la paz de Jackson, Ellie se embarca en un viaje implacable para impartir justicia y encontrar un cierre.
• Una historia compleja que cuestiona la moralidad y la venganza.
• Sistema de sigilo y combate evolucionado y muy táctico.
• Escenarios increíblemente detallados de una Seattle post-apocalíptica.
• Animaciones y físicas que definen una generación.`,
    image: "https://i.postimg.cc/tJMmRTfG/proximamente.webp",
    gallery: [],
    developer: "Naughty Dog",
    platform: "PS4 / PS5",
    mode: "Un Jugador",
    languages: "Español / Inglés",
    requirements: {
      os: "Mínimo Windows 10",
      processor: "N/A (Console focus)",
      memory: "8 GB RAM",
      graphics: "N/A",
    },
    highlighted: false,
    onSale: false,
    isNew: false,
    reviews: [],
  },
  {
    id: 14,
    code: "war-thunder",
    title: "War Thunder",
    stock: 50,
    price: 69.99,
    category: "Simulación / Combate",
    rating: 4.8,
    ratingsCount: 18943,
    description: "Combate masivo de vehículos militares en tierra, mar y aire.",
    longDescription: `War Thunder es el juego de combate MMO más completo de vehículos militares dedicados a la Segunda Guerra Mundial y la Guerra Fría.
• Lucha en batallas masivas de aire, tierra y mar en un solo juego.
• Más de 2000 vehículos altamente detallados.
• Mapas a gran escala que reproducen campos de batalla históricos.
• Modelos de daños hiperrealistas.`,
    image: "https://i.postimg.cc/DwKmmZFx/war-thunder-2.webp",
    gallery: [
      "https://i.postimg.cc/sgR11Xyn/war-thunder-1.webp",
      "https://i.postimg.cc/HsMVp5GB/war-thunder-3.webp",
    ],
    developer: "Gaijin Entertainment",
    platform: "PC",
    mode: "Multijugador",
    languages: "Español / Inglés",
    releaseDate: "12 de Agosto de 2013",
    requirements: {
      os: "Windows 10",
      processor: "Intel Core i5",
      memory: "8 GB RAM",
      graphics: "GTX 1060",
    },
    highlighted: true,
    onSale: false,
    isNew: false,
    reviews: [],
  },
  {
    id: 15,
    code: "stardew-valley",
    title: "Stardew Valley",
    stock: 40,
    price: 14.99,
    category: "RPG / Simulación",
    rating: 4.9,
    ratingsCount: 25000,
    description: "Heredaste la vieja granja de tu abuelo en Stardew Valley.",
    longDescription: `Escapa de la ciudad y construye la granja de tus sueños. Aprende a vivir de la tierra y haz amigos en Pueblo Pelícano.
• Planta cultivos, cría animales y domina el arte de la minería.
• Conoce a 30 personajes únicos y forma relaciones.
• Explora cuevas misteriosas y lucha contra monstruos.
• Juega con hasta 3 amigos en modo cooperativo.`,
    image: "https://i.postimg.cc/tJMmRTfG/proximamente.webp",
    gallery: [],
    requirements: {
      os: "Windows 10",
      processor: "Intel Core i3-3220",
      memory: "4 GB RAM",
      graphics: "Intel HD Graphics 4000",
    },
    developer: "ConcernedApe",
    platform: "PC / Switch",
    mode: "Un Jugador / Cooperativo",
    languages: "Español / Inglés",
    highlighted: false,
    onSale: false,
    isNew: false,
    reviews: [],
  },
  {
    id: 16,
    code: "forza-horizon-5",
    title: "Forza Horizon 5",
    stock: 25,
    price: 59.99,
    category: "Carreras",
    rating: 4.7,
    ratingsCount: 12000,
    description:
      "Tu aventura Horizon definitiva te espera! Explora los vibrantes paisajes de México.",
    longDescription: `Explora un mundo abierto lleno de contrastes y belleza en México. Conduce cientos de los mejores coches del mundo en carreras sin límites.
• Gráficos fotorrealistas con clima dinámico.
• Cientos de desafíos y misiones de historia de expedición.
• Modo online con eventos multijugador masivos.
• Editor de eventos para crear tus propias pistas.`,
    image: "https://i.postimg.cc/tJMmRTfG/proximamente.webp",
    gallery: [],
    requirements: {
      os: "Windows 10",
      processor: "Intel i5-4460",
      memory: "8 GB RAM",
      graphics: "GTX 970",
    },
    developer: "Playground Games",
    platform: "PC / Xbox",
    mode: "Multijugador",
    languages: "Español / Inglés",
    highlighted: true,
    onSale: true,
    isNew: false,
    reviews: [],
  },
  {
    id: 17,
    code: "overwatch-2",
    title: "Overwatch 2",
    stock: 100,
    price: 0.0,
    category: "Shooter / Acción",
    rating: 3.2,
    ratingsCount: 40000,
    description:
      "Overwatch 2 es un juego de acción en equipo gratuito siempre activo.",
    longDescription: `Reúnete con tus amigos y lánzate a la batalla en Overwatch 2, un shooter por equipos gratuito con héroes legendarios.
• Más de 35 héroes con habilidades únicas y roles definidos.
• Nuevos mapas internacionales y modos de juego 5v5.
• Sistema de pases de batalla con cosméticos exclusivos.
• Eventos estacionales y actualizaciones constantes.`,
    image: "https://i.postimg.cc/tJMmRTfG/proximamente.webp",
    gallery: [],
    requirements: {
      os: "Windows 10",
      processor: "Intel Core i3",
      memory: "6 GB RAM",
      graphics: "GTX 660",
    },
    developer: "Blizzard Entertainment",
    platform: "PC / Consolas",
    mode: "Multijugador",
    languages: "Español / Inglés",
    highlighted: false,
    onSale: false,
    isNew: true,
    reviews: [],
  },
  {
    id: 18,
    code: "valorant",
    title: "Valorant",
    stock: 100,
    price: 0.0,
    category: "Shooter",
    rating: 4.5,
    ratingsCount: 50000,
    description:
      "Un shooter táctico basado en personajes 5v5 ambientado en el futuro.",
    longDescription: `Mezcla puntería precisa y habilidades tácticas especiales en este shooter 5v5 competitivo.
• Elige entre una plantilla de agentes con habilidades únicas.
• Mapas diseñados para estrategias de ataque y defensa complejas.
• Sistema de rangos competitivo para demostrar tu habilidad.
• Optimizado para un alto rendimiento en una gran variedad de PC.`,
    image: "https://i.postimg.cc/tJMmRTfG/proximamente.webp",
    gallery: [],
    requirements: {
      os: "Windows 10",
      processor: "Intel i3-370M",
      memory: "4 GB RAM",
      graphics: "Intel HD 3000",
    },
    developer: "Riot Games",
    platform: "PC",
    mode: "Multijugador",
    languages: "Español / Inglés",
    highlighted: false,
    onSale: false,
    isNew: false,
    reviews: [],
  },
  {
    id: 19,
    code: "diablo-iv",
    title: "Diablo IV",
    stock: 30,
    price: 69.99,
    category: "RPG / Acción",
    rating: 4.0,
    ratingsCount: 15000,
    description: "La batalla eterna entre los Cielos e Infiernos continúa.",
    longDescription: `Regresa al mundo oscuro de Santuario. Lucha contra hordas de demonios y descubre tesoros legendarios en este RPG épico.
• Inmensas zonas de mundo abierto para explorar y saquear.
• Personalización profunda del personaje con árboles de habilidades y glifos.
• Eventos mundiales y jefes masivos para grupos de jugadores.
• Modo Jugador contra Jugador (PvP) en los Campos del Odio.`,
    image: "https://i.postimg.cc/tJMmRTfG/proximamente.webp",
    gallery: [],
    requirements: {
      os: "Windows 10",
      processor: "Intel Core i5-2500K",
      memory: "8 GB RAM",
      graphics: "GTX 660",
    },
    developer: "Blizzard Entertainment",
    platform: "PC / Consolas",
    mode: "Un Jugador / Multijugador",
    languages: "Español / Inglés",
    highlighted: true,
    onSale: false,
    isNew: true,
    reviews: [],
  },
  {
    id: 20,
    code: "baldurs-gate-3",
    title: "Baldur's Gate 3",
    stock: 20,
    price: 59.99,
    category: "RPG",
    rating: 4.9,
    ratingsCount: 35000,
    description: "Reúne a tu grupo y regresa a los Reinos Olvidados.",
    longDescription: `Basado en el sistema de Dungeons & Dragons, elige una historia de origen o crea tu propio héroe. Tus decisiones afectan al mundo.
• Combate por turnos táctico y muy profundo.
• Cientos de diálogos y misiones con consecuencias reales.
• Juega solo o en cooperativo de hasta 4 jugadores.
• Un mundo reactivo que responde a tu creatividad.`,
    image: "https://i.postimg.cc/tJMmRTfG/proximamente.webp",
    gallery: [],
    requirements: {
      os: "Windows 10",
      processor: "Intel I5 4690",
      memory: "8 GB RAM",
      graphics: "GTX 970",
    },
    developer: "Larian Studios",
    platform: "PC / PS5",
    mode: "Un Jugador / Cooperativo",
    languages: "Español / Inglés",
    highlighted: true,
    onSale: false,
    isNew: true,
    reviews: [],
  },
  {
    id: 21,
    code: "starfield",
    title: "Starfield",
    stock: 15,
    price: 69.99,
    category: "RPG / Ciencia Ficción",
    rating: 3.8,
    ratingsCount: 20000,
    description:
      "El primer universo nuevo de Bethesda Game Studios en 25 años.",
    longDescription: `Viaja a las estrellas y explora más de 1000 planetas. Únete a Constelación en la búsqueda de artefactos raros por toda la galaxia.
• Crea cualquier personaje que imagines con un editor detallado.
• Construye y personaliza tu propia nave espacial.
• Sistema de asentamientos en diferentes planetas.
• Combate espacial y terrestre contra piratas y mercenarios.`,
    image: "https://i.postimg.cc/tJMmRTfG/proximamente.webp",
    gallery: [],
    requirements: {
      os: "Windows 10",
      processor: "AMD Ryzen 5 2600X",
      memory: "16 GB RAM",
      graphics: "AMD Radeon RX 5700",
    },
    developer: "Bethesda",
    platform: "PC / Xbox",
    mode: "Un Jugador",
    languages: "Español / Inglés",
    highlighted: true,
    onSale: false,
    isNew: true,
    reviews: [],
  },
  {
    id: 22,
    code: "resident-evil-village",
    title: "Resident Evil Village",
    stock: 10,
    price: 39.99,
    category: "Terror",
    rating: 4.8,
    ratingsCount: 8000,
    description:
      "Experimenta el horror de supervivencia en la octava entrega principal.",
    longDescription: `Tras los horrores de Luisiana, Ethan Winters busca a su hija secuestrada en un pueblo remoto acechado por criaturas terroríficas.
• Acción intensa combinada con exploración de misterios.
• Jefes icónicos y memorables como Lady Dimitrescu.
• El modo "Mercenarios" ofrece retos rápidos de puntuación.
• Impresionantes gráficos con soporte para Ray Tracing.`,
    image: "https://i.postimg.cc/tJMmRTfG/proximamente.webp",
    gallery: [],
    requirements: {
      os: "Windows 10",
      processor: "Intel Core i5-7500",
      memory: "8 GB RAM",
      graphics: "GTX 1050 Ti",
    },
    developer: "Capcom",
    platform: "PC",
    mode: "Un Jugador",
    languages: "Español / Inglés",
    highlighted: false,
    onSale: true,
    isNew: false,
    reviews: [],
  },
  {
    id: 23,
    code: "it-takes-two",
    title: "It Takes Two",
    stock: 15,
    price: 39.99,
    category: "Aventura / Cooperativo",
    rating: 4.9,
    ratingsCount: 10000,
    description: "Embárcate en el viaje más loco de tu vida en It Takes Two.",
    longDescription: `Juega como Cody y May, una pareja en conflicto transformada en muñecos. Deben trabajar juntos para recuperar su forma humana.
• Mecánicas de juego cambiantes en cada nivel.
• Narrativa divertida sobre las relaciones humanas.
• Incluye el Pase de Amigo para jugar con alguien sin comprarlo.
• Ganador del Juego del Año 2021.`,
    image: "https://i.postimg.cc/tJMmRTfG/proximamente.webp",
    gallery: [],
    requirements: {
      os: "Windows 10",
      processor: "Intel Core i3-2100T",
      memory: "8 GB RAM",
      graphics: "GTX 660",
    },
    developer: "Hazelight",
    platform: "PC",
    mode: "Cooperativo obligatorio",
    languages: "Español / Inglés",
    highlighted: false,
    onSale: true,
    isNew: false,
    reviews: [],
  },
  {
    id: 24,
    code: "dead-space-remake",
    title: "Dead Space Remake",
    stock: 8,
    price: 59.99,
    category: "Terror / Ciencia Ficción",
    rating: 4.7,
    ratingsCount: 5000,
    description:
      "Vuelve el clásico de terror de ciencia ficción totalmente rehecho.",
    longDescription: `Isaac Clarke debe sobrevivir a los horrores de la USG Ishimura tras un brote de necromorfos que masacró a la tripulación.
• Desmembramiento estratégico para derrotar enemigos.
• Sonido envolvente e iluminación dinámica de terror puro.
• Navegación continua sin pantallas de carga por toda la nave.
• Historia expandida con diálogos para el protagonista Isaac.`,
    image: "https://i.postimg.cc/tJMmRTfG/proximamente.webp",
    gallery: [],
    requirements: {
      os: "Windows 10",
      processor: "Ryzen 5 2600x",
      memory: "16 GB RAM",
      graphics: "RX 5700",
    },
    developer: "Motive Studio",
    platform: "PC",
    mode: "Un Jugador",
    languages: "Español / Inglés",
    highlighted: false,
    onSale: false,
    isNew: true,
    reviews: [],
  },
  {
    id: 25,
    code: "street-fighter-6",
    title: "Street Fighter 6",
    stock: 12,
    price: 59.99,
    category: "Lucha",
    rating: 4.6,
    ratingsCount: 4000,
    description: "¡Aquí llega el nuevo contendiente de Capcom!",
    longDescription: `La legendaria saga de lucha regresa con un nuevo sistema de combate y el modo aventura World Tour para crear tu propio luchador.
• Tres modos principales: Battle Hub, World Tour y Fighting Ground.
• El sistema 'Drive' ofrece nuevas capas tácticas de defensa y ataque.
• Gráficos realistas y vibrantes con el motor RE Engine.
• Controles simplificados para nuevos jugadores opcionales.`,
    image: "https://i.postimg.cc/tJMmRTfG/proximamente.webp",
    gallery: [],
    requirements: {
      os: "Windows 10",
      processor: "Intel Core i5-7500",
      memory: "8 GB RAM",
      graphics: "GTX 1060",
    },
    developer: "Capcom",
    platform: "PC",
    mode: "Multijugador",
    languages: "Español / Inglés",
    highlighted: false,
    onSale: false,
    isNew: true,
    reviews: [],
  },
  {
    id: 26,
    code: "portal-2",
    title: "Portal 2",
    stock: 50,
    price: 9.99,
    category: "Puzles",
    rating: 4.9,
    ratingsCount: 80000,
    description: "La secuela del éxito sorprendente que fue Portal.",
    longDescription: `Vuelve a las instalaciones de Aperture Science y enfréntate a GLaDOS en una nueva serie de cámaras de pruebas con portales.
• Nuevos tipos de geles para saltar, correr o crear superficies.
• Campaña cooperativa separada con dos robots: Atlas y P-Body.
• Diálogos humorísticos y una historia cautivadora.
• Editor de niveles para descargar miles de cámaras extra.`,
    image: "https://i.postimg.cc/tJMmRTfG/proximamente.webp",
    gallery: [],
    requirements: {
      os: "Windows 7",
      processor: "Dual Core 2.0",
      memory: "2 GB RAM",
      graphics: "NVIDIA GeForce 7600",
    },
    developer: "Valve",
    platform: "PC",
    mode: "Un Jugador / Cooperativo",
    languages: "Español / Inglés",
    highlighted: false,
    onSale: true,
    isNew: false,
    reviews: [],
  },
  {
    id: 27,
    code: "half-life-alyx",
    title: "Half-Life: Alyx",
    stock: 5,
    price: 59.99,
    category: "VR / Shooter",
    rating: 4.9,
    ratingsCount: 15000,
    description:
      "El regreso de Valve en realidad virtual a la serie Half-Life.",
    longDescription: `Ambientado entre Half-Life 1 y 2, es la lucha imposible contra una raza alienígena cruel conocida como la Alianza, diseñada para VR.
• Inmersión total interactuando con casi cualquier objeto.
• Combate tenso contra headcrabs y soldados de la Alianza.
• Puzles ambientales complejos que usan tus manos reales.
• El referente absoluto de calidad en juegos de realidad virtual.`,
    image: "https://i.postimg.cc/tJMmRTfG/proximamente.webp",
    gallery: [],
    requirements: {
      os: "Windows 10",
      processor: "Core i5-7500",
      memory: "12 GB RAM",
      graphics: "GTX 1060",
    },
    developer: "Valve",
    platform: "PC VR",
    mode: "Un Jugador",
    languages: "Español / Inglés",
    highlighted: false,
    onSale: false,
    isNew: false,
    reviews: [],
  },
  {
    id: 28,
    code: "terraria",
    title: "Terraria",
    stock: 100,
    price: 9.99,
    category: "Sandbox / Aventura",
    rating: 4.8,
    ratingsCount: 150000,
    description: "¡Cava, lucha, explora, construye!",
    longDescription: `El mundo está a tu alcance mientras luchas por la supervivencia, el honor y la gloria. Explora mundos infinitos en 2D.
• Más de 500 armas diferentes para descubrir o fabricar.
• Enfréntate a jefes gigantes para progresar en la historia.
• Construye ciudades para atraer a diferentes personajes (NPCs).
• Contenido inmenso con biomas secretos y retos constantes.`,
    image: "https://i.postimg.cc/tJMmRTfG/proximamente.webp",
    gallery: [],
    requirements: {
      os: "Windows 7",
      processor: "2.0 Ghz",
      memory: "2.5 GB RAM",
      graphics: "128mb Video Memory",
    },
    developer: "Re-Logic",
    platform: "PC",
    mode: "Multijugador",
    languages: "Español / Inglés",
    highlighted: false,
    onSale: true,
    isNew: false,
    reviews: [],
  },
  {
    id: 29,
    code: "among-us",
    title: "Among Us",
    stock: 1000,
    price: 4.99,
    category: "Social / Casual",
    rating: 4.0,
    ratingsCount: 200000,
    description: "Juego de fiesta cooperativo y de traición en el espacio.",
    longDescription: `Prepara tu nave con tus compañeros, pero ten cuidado: uno o más jugadores aleatorios son impostores decididos a matarlos a todos.
• Tareas rápidas y divertidas para arreglar la nave.
• Reuniones de emergencia para debatir quién es el sospechoso.
• Personalización de personajes con sombreros y mascotas.
• Soporta cross-play entre PC, consolas y dispositivos móviles.`,
    image: "https://i.postimg.cc/tJMmRTfG/proximamente.webp",
    gallery: [],
    requirements: {
      os: "Windows 7",
      processor: "SSE2 instruction set support",
      memory: "1 GB RAM",
      graphics: "Integrated",
    },
    developer: "Innersloth",
    platform: "PC / Móvil",
    mode: "Multijugador",
    languages: "Español / Inglés",
    highlighted: false,
    onSale: false,
    isNew: false,
    reviews: [],
  },
  {
    id: 30,
    code: "sea-of-thieves",
    title: "Sea of Thieves",
    stock: 30,
    price: 39.99,
    category: "Aventura / Piratas",
    rating: 4.4,
    ratingsCount: 25000,
    description:
      "Sea of Thieves te ofrece la experiencia de pirata definitiva.",
    longDescription: `Escribe tu propia leyenda en este paraíso pirata de mundo abierto compartido. Navega, lucha y descubre tesoros.
• Navegación cooperativa real: ajusta velas, timón y cañones.
• Misiones épicas llamadas 'Grandes Relatos' con voz e historia.
• Un mundo lleno de otros barcos de jugadores y peligros marinos.
• Progresión cosmética: tu reputación es lo que importa.`,
    image: "https://i.postimg.cc/tJMmRTfG/proximamente.webp",
    gallery: [],
    requirements: {
      os: "Windows 10",
      processor: "Intel Q9450",
      memory: "4 GB RAM",
      graphics: "GTX 650",
    },
    developer: "Rare",
    platform: "PC / Xbox",
    mode: "Multijugador",
    languages: "Español / Inglés",
    highlighted: false,
    onSale: true,
    isNew: false,
    reviews: [],
  },
  {
    id: 31,
    code: "rust",
    title: "Rust",
    stock: 40,
    price: 39.99,
    category: "Supervivencia",
    rating: 4.1,
    ratingsCount: 30000,
    description: "El único objetivo en Rust es sobrevivir.",
    longDescription: `Apareces desnudo en una isla hostil. Debes fabricar herramientas, construir una base y sobrevivir tanto al entorno como a otros jugadores.
• PVP intenso y despiadado donde puedes perderlo todo.
• Sistema de construcción de bases complejo y defensas de torretas.
• Domina la tecnología: desde arcos de piedra hasta fusiles de asalto.
• Forma clanes para dominar los recursos de la isla.`,
    image: "https://i.postimg.cc/tJMmRTfG/proximamente.webp",
    gallery: [],
    requirements: {
      os: "Windows 10",
      processor: "Intel Core i7-3770",
      memory: "10 GB RAM",
      graphics: "GTX 670",
    },
    developer: "Facepunch Studios",
    platform: "PC",
    mode: "Multijugador",
    languages: "Español / Inglés",
    highlighted: false,
    onSale: false,
    isNew: false,
    reviews: [],
  },
  {
    id: 32,
    code: "the-sims-4",
    title: "The Sims 4",
    stock: 100,
    price: 0.0,
    category: "Simulación de vida",
    rating: 4.0,
    ratingsCount: 50000,
    description:
      "Da rienda suelta a tu imaginación y crea un mundo de Sims único.",
    longDescription: `Controla a personas en un mundo virtual sin reglas. Personaliza desde sus rasgos físicos hasta sus aspiraciones profesionales.
• Potente modo de construcción para diseñar casas habitación por habitación.
• Desarrolla relaciones, haz amigos o crea enemigos.
• Guía a tus Sims a través de las diferentes etapas de la vida.
• Cientos de expansiones y packs de accesorios disponibles.`,
    image: "https://i.postimg.cc/tJMmRTfG/proximamente.webp",
    gallery: [],
    requirements: {
      os: "Windows 10",
      processor: "Intel Core i5",
      memory: "4 GB RAM",
      graphics: "NVIDIA GTX 650",
    },
    developer: "Maxis",
    platform: "PC",
    mode: "Un Jugador",
    languages: "Español / Inglés",
    highlighted: false,
    onSale: false,
    isNew: false,
    reviews: [],
  },
  {
    id: 33,
    code: "cities-skylines-ii",
    title: "Cities: Skylines II",
    stock: 20,
    price: 49.99,
    category: "Simulación / Estrategia",
    rating: 3.0,
    ratingsCount: 5000,
    description: "Si puedes soñarlo, puedes construirlo. Levanta una ciudad.",
    longDescription: `El simulador de construcción de ciudades más realista jamás creado. Gestiona la economía, los servicios y el tráfico de tu metrópolis.
• Mapas masivos con clima dinámico y estaciones.
• Simulación detallada de cada ciudadano individual.
• Sistema de transporte y carreteras avanzado.
• Herramientas de planificación urbana potentes y flexibles.`,
    image: "https://i.postimg.cc/tJMmRTfG/proximamente.webp",
    gallery: [],
    requirements: {
      os: "Windows 10",
      processor: "Intel Core i7-6700K",
      memory: "8 GB RAM",
      graphics: "GTX 970",
    },
    developer: "Colossal Order",
    platform: "PC",
    mode: "Un Jugador",
    languages: "Español / Inglés",
    highlighted: true,
    onSale: false,
    isNew: true,
  },
  {
    id: 34,
    code: "age-of-empires-iv",
    title: "Age of Empires IV",
    stock: 15,
    price: 39.99,
    category: "Estrategia",
    rating: 4.6,
    ratingsCount: 8000,
    description: "Uno de los juegos de estrategia en tiempo real más queridos.",
    longDescription: `Vuelve la legendaria saga de estrategia. Dirige civilizaciones históricas en batallas épicas que cambiaron el mundo.
• 10 civilizaciones únicas con mecánicas de juego diferenciadas.
• Campañas históricas inspiradas en eventos reales con videos documentales.
• Multijugador competitivo y modo cooperativo contra la IA.
• Herramientas de aprendizaje para dominar la estrategia básica y avanzada.`,
    image: "https://i.postimg.cc/tJMmRTfG/proximamente.webp",
    gallery: [],
    requirements: {
      os: "Windows 10",
      processor: "Intel i5-6300U",
      memory: "8 GB RAM",
      graphics: "Intel HD 520",
    },
    developer: "Relic Entertainment",
    platform: "PC",
    mode: "Un Jugador / Multijugador",
    languages: "Español / Inglés",
    highlighted: false,
    onSale: true,
    isNew: false,
  },
  {
    id: 35,
    code: "civilization-vi",
    title: "Civilization VI",
    stock: 25,
    price: 59.99,
    category: "Estrategia",
    rating: 4.7,
    ratingsCount: 15000,
    description:
      "Civilization VI ofrece nuevas formas de interactuar con tu mundo.",
    longDescription: `Construye un imperio que resista el paso del tiempo. Guía a tu civilización desde la Edad de Piedra hasta la Era de la Información.
• Ciudades expansivas que ocupan varias casillas en el mapa.
• Sistema de investigación activa con impulsos tecnológicos.
• Diplomacia dinámica que evoluciona a lo largo del juego.
• Diferentes rutas hacia la victoria: Militar, Científica o Religiosa.`,
    image: "https://i.postimg.cc/tJMmRTfG/proximamente.webp",
    gallery: [],
    requirements: {
      os: "Windows 7",
      processor: "Intel Core i3",
      memory: "4 GB RAM",
      graphics: "GeForce 450",
    },
    developer: "Firaxis Games",
    platform: "PC",
    mode: "Un Jugador / Multijugador",
    languages: "Español / Inglés",
    highlighted: false,
    onSale: true,
    isNew: false,
  },
  {
    id: 36,
    code: "outer-wilds",
    title: "Outer Wilds",
    stock: 10,
    price: 24.99,
    category: "Exploración / Misterio",
    rating: 4.9,
    ratingsCount: 12000,
    description:
      "Un mundo abierto sobre un sistema solar en un bucle temporal.",
    longDescription: `Eres el recluta más nuevo de Outer Wilds Ventures. Investiga un sistema solar que cambia con el tiempo y descubre sus secretos antes de que todo termine.
• Bucle temporal de 22 minutos: aprende y progresa antes del reinicio.
• Explora planetas alienígenas con físicas únicas y peligrosas.
• Traduce textos antiguos para entender a una raza desaparecida.
• Una de las mejores experiencias de descubrimiento puro en videojuegos.`,
    image: "https://i.postimg.cc/tJMmRTfG/proximamente.webp",
    gallery: [],
    requirements: {
      os: "Windows 7",
      processor: "Intel Core i5-2300",
      memory: "4 GB RAM",
      graphics: "GTX 560",
    },
    developer: "Mobius Digital",
    platform: "PC",
    mode: "Un Jugador",
    languages: "Español / Inglés",
    highlighted: false,
    onSale: false,
    isNew: false,
  },
  {
    id: 37,
    code: "tunic",
    title: "Tunic",
    stock: 15,
    price: 29.99,
    category: "Indie / Aventura",
    rating: 4.8,
    ratingsCount: 3000,
    description:
      "Explora una tierra llena de leyendas perdidas y poderes antiguos.",
    longDescription: `Juega como un pequeño zorro en un gran mundo lleno de peligros. Encuentra páginas del manual del juego para entender la historia y los controles.
• Perspectiva isométrica detallada con secretos ocultos por doquier.
• Combate preciso inspirado en Dark Souls y Zelda.
• Sistema de progresión basado en el conocimiento, no solo en estadísticas.
• Desafío constante con puzles ambientales ingeniosos.`,
    image: "https://i.postimg.cc/tJMmRTfG/proximamente.webp",
    gallery: [],
    requirements: {
      os: "Windows 10",
      processor: "Intel i5 Quad-Core",
      memory: "8 GB RAM",
      graphics: "GTX 660",
    },
    developer: "TUNIC Team",
    platform: "PC",
    mode: "Un Jugador",
    languages: "Español / Inglés",
    highlighted: false,
    onSale: false,
    isNew: false,
  },
  {
    id: 38,
    code: "hadest-ii",
    title: "Hades II",
    stock: 20,
    price: 29.99,
    category: "Indie / Roguelike",
    rating: 4.9,
    ratingsCount: 1000,
    description: "Enfréntate al Titán del Tiempo en esta secuela galardonada.",
    longDescription: `La princesa del Inframundo, Melinoë, debe luchar para rescatar a su padre Hades y derrotar a Cronos en una épica mitológica oscura.
• Acción roguelike rápida y fluida con nuevos poderes de brujería.
• Narrativa rica interactuando con docenas de dioses y figuras míticas.
• Sistema de progresión permanente que te hace más fuerte tras cada muerte.
• Estilo visual y banda sonora espectaculares.`,
    image: "https://i.postimg.cc/tJMmRTfG/proximamente.webp",
    gallery: [],
    requirements: {
      os: "Windows 10",
      processor: "Dual-Core 3.0 Ghz",
      memory: "8 GB RAM",
      graphics: "1 GB VRAM",
    },
    developer: "Supergiant Games",
    platform: "PC",
    mode: "Un Jugador",
    languages: "Español / Inglés",
    highlighted: true,
    onSale: false,
    isNew: true,
    reviews: [
      {
        user: "Juan",
        rating: 5,
        comment: "Excelente juego",
      },
      {
        user: "Maria",
        rating: 4,
        comment: "Muy buen juego",
      },
    ],
  },
  {
    id: 39,
    code: "cuphead",
    title: "Cuphead",
    stock: 10,
    price: 19.99,
    category: "Indie / Acción",
    rating: 4.9,
    ratingsCount: 50000,
    description: "Juego de acción clásico centrado en combates contra jefes.",
    longDescription: `Cuphead y Mugman perdieron una apuesta con el Diablo. Ahora deben recolectar contratos de almas derrotando a jefes increíbles.
• Estilo visual inspirado en los dibujos animados de los años 30.
• Dificultad legendaria que requiere precisión total.
• Banda sonora original de jazz grabada por una orquesta real.
• Modo cooperativo local para jugar con un amigo.`,
    image: "https://i.postimg.cc/tJMmRTfG/proximamente.webp",
    gallery: [],
    requirements: {
      os: "Windows 7",
      processor: "Intel Core2 Duo E8400",
      memory: "4 GB RAM",
      graphics: "Geforce 9600 GT",
    },
    developer: "Studio MDHR",
    platform: "PC",
    mode: "Multijugador local",
    languages: "Español / Inglés",
    highlighted: false,
    onSale: false,
    isNew: false,
    reviews: [
      {
        user: "Juan",
        rating: 5,
        comment: "Excelente juego",
      },
      {
        user: "Maria",
        rating: 4,
        comment: "Muy buen juego",
      },
    ],
  },
  {
    id: 40,
    code: "valheim",
    title: "Valheim",
    stock: 30,
    price: 19.99,
    category: "Indie / Supervivencia",
    rating: 4.7,
    ratingsCount: 20000,
    description: "Brutal juego de supervivencia para 1-10 jugadores.",
    longDescription: `Eres un guerrero caído en batalla transportado a Valheim, el décimo mundo nórdico. Demuestra que eres digno ante Odín.
• Sistema de construcción de casas y barcos vikingos impresionante.
• Caza legendarias bestias para recolectar trofeos y mejorar equipo.
• Biomas variados desde bosques tranquilos hasta montañas heladas.
• Cooperativo de hasta 10 jugadores en servidores dedicados.`,
    image: "https://i.postimg.cc/tJMmRTfG/proximamente.webp",
    gallery: [],
    requirements: {
      os: "Windows 7",
      processor: "2.6 Ghz Dual Core",
      memory: "4 GB RAM",
      graphics: "GTX 500 series",
    },
    developer: "Iron Gate AB",
    platform: "PC",
    mode: "Multijugador",
    languages: "Español / Inglés",
    highlighted: false,
    onSale: true,
    isNew: false,
  },
  {
    id: 41,
    code: "undertale",
    title: "Undertale",
    stock: 50,
    price: 9.99,
    category: "Indie / RPG",
    rating: 4.9,
    ratingsCount: 100000,
    description: "El RPG donde no tienes que matar a nadie.",
    longDescription: `Un niño cae al mundo subterráneo lleno de monstruos. ¿Elegirás pelear o usar la misericordia para sobrevivir y volver a casa?
• Sistema de combate único basado en minijuegos de esquiva.
• Decisiones que cambian drásticamente la historia y los diálogos.
• Personajes carismáticos que recordarás para siempre.
• La banda sonora se ha convertido en un fenómeno cultural.`,
    image: "https://i.postimg.cc/tJMmRTfG/proximamente.webp",
    gallery: [],
    requirements: {
      os: "Windows XP",
      processor: "2GHz+",
      memory: "2 GB RAM",
      graphics: "128MB",
    },
    developer: "tobyfox",
    platform: "PC",
    mode: "Un Jugador",
    languages: "Español / Inglés",
    highlighted: false,
    onSale: false,
    isNew: false,
    reviews: [],
  },
  {
    id: 42,
    code: "dead-cells",
    title: "Dead Cells",
    stock: 20,
    price: 24.99,
    category: "Indie / Roguelike",
    rating: 4.8,
    ratingsCount: 25000,
    description: "Explora un castillo en constante cambio y expansión.",
    longDescription: `Dead Cells es un 'roglevania' de acción. Explora una isla interconectada enfrentando peligros mortales con combate fluido.
• Acción 2D frenética con controles perfectos.
• Progresión no lineal: elige tu camino a través del castillo.
• Cientos de armas y hechizos para probar diferentes 'builds'.
• Permadeath: aprende de tus errores en cada intento.`,
    image: "https://i.postimg.cc/tJMmRTfG/proximamente.webp",
    gallery: [],
    requirements: {
      os: "Windows 7",
      processor: "Intel i5+",
      memory: "2 GB RAM",
      graphics: "GTX 460",
    },
    developer: "Motion Twin",
    platform: "PC",
    mode: "Un Jugador",
    languages: "Español / Inglés",
    highlighted: false,
    onSale: true,
    isNew: false,
    reviews: [],
  },
  {
    id: 43,
    code: "slay-the-spire",
    title: "Slay the Spire",
    stock: 20,
    price: 24.99,
    category: "Indie / Cartas",
    rating: 4.9,
    ratingsCount: 15000,
    description: "El mejor deckbuilder de un solo jugador.",
    longDescription: `Escala la Aguja. Construye un mazo único, encuentra reliquias bizarras y lucha contra criaturas de poder inmenso.
• Cuatro personajes principales con cartas y mecánicas propias.
• El mapa cambia cada vez para asegurar que cada partida sea nueva.
• Cientos de reliquias que potencian tus cartas de formas inesperadas.
• Modo ascensión para jugadores expertos que buscan el desafío máximo.`,
    image: "https://i.postimg.cc/tJMmRTfG/proximamente.webp",
    gallery: [],
    requirements: {
      os: "Windows XP",
      processor: "2.0 Ghz",
      memory: "2 GB RAM",
      graphics: "128mb Video Memory",
    },
    developer: "Mega Crit Games",
    platform: "PC",
    mode: "Un Jugador",
    languages: "Español / Inglés",
    highlighted: false,
    onSale: false,
    isNew: false,
    reviews: [],
  },
  {
    id: 44,
    code: "phasmophobia",
    title: "Phasmophobia",
    stock: 30,
    price: 13.99,
    category: "Indie / Terror",
    rating: 4.8,
    ratingsCount: 40000,
    description: "Un horror psicológico cooperativo en línea.",
    longDescription: `Eres un investigador de lo paranormal. Entra en lugares encantados solo o con tu equipo para recoger pruebas de fantasmas.
• Reconocimiento de voz: los fantasmas te escuchan e incluso te responden.
• Más de 20 tipos de entidades con comportamientos únicos.
• Equipamiento profesional como cámaras térmicas y cajas espirituales.
• Tensión psicológica constante sin recurrir a 'jumpscares' fáciles.`,
    image: "https://i.postimg.cc/tJMmRTfG/proximamente.webp",
    gallery: [],
    requirements: {
      os: "Windows 10",
      processor: "Intel Core i5-4590",
      memory: "8 GB RAM",
      graphics: "GTX 970",
    },
    developer: "Kinetic Games",
    platform: "PC",
    mode: "Multijugador",
    languages: "Español / Inglés",
    highlighted: false,
    onSale: false,
    isNew: false,
    reviews: [],
  },
  {
    id: 45,
    code: "lethal-company",
    title: "Lethal Company",
    stock: 50,
    price: 9.99,
    category: "Indie / Terror",
    rating: 4.9,
    ratingsCount: 50000,
    description: "Trabajadores contratados para recoger chatarra.",
    longDescription: `Visita lunas abandonadas para recolectar chatarra y cumplir con la cuota de ganancias de la Compañía. Sobrevive a monstruos y trampas.
• Cooperativo hilarante y aterrador con chat de voz de proximidad.
• Gestión de inventario y linternas limitada.
• Peligros nocturnos que cambian según la luna.
• Un éxito viral que mezcla risas y gritos a partes iguales.`,
    image: "https://i.postimg.cc/tJMmRTfG/proximamente.webp",
    gallery: [],
    requirements: {
      os: "Windows 10",
      processor: "Intel Core i5-7400",
      memory: "4 GB RAM",
      graphics: "GTX 1050",
    },
    developer: "Zeekerss",
    platform: "PC",
    mode: "Multijugador",
    languages: "Inglés",
    highlighted: true,
    onSale: false,
    isNew: true,
    reviews: [],
  },
  {
    id: 46,
    code: "rimworld",
    title: "RimWorld",
    stock: 10,
    price: 34.99,
    category: "Indie / Estrategia",
    rating: 4.9,
    ratingsCount: 60000,
    description: "Simulador de colonias de ciencia ficción.",
    longDescription: `Tres supervivientes de un choque en un planeta desconocido deben construir una colonia. La IA genera historias dramáticas basadas en el azar.
• Simulación detallada de psicología, salud y relaciones de los colonos.
• Construye bases defensivas para repeler ataques de piratas.
• Fabrica prótesis, entrena animales y gestiona suministros médicos.
• Un juego infinito gracias a su enorme soporte para mods.`,
    image: "https://i.postimg.cc/tJMmRTfG/proximamente.webp",
    gallery: [],
    requirements: {
      os: "Windows 7",
      processor: "Core 2 Duo",
      memory: "4 GB RAM",
      graphics: "Intel HD Graphics 4000",
    },
    developer: "Ludeon Studios",
    platform: "PC",
    mode: "Un Jugador",
    languages: "Español / Inglés",
    highlighted: false,
    onSale: false,
    isNew: false,
    reviews: [],
  },
  {
    id: 47,
    code: "project-zomboid",
    title: "Project Zomboid",
    stock: 20,
    price: 19.99,
    category: "Supervivencia / Zombis",
    rating: 4.7,
    ratingsCount: 35000,
    description: "¿Cómo vas a morir?",
    longDescription: `El simulador de supervivencia zombi definitivo. Sin cura, sin ayuda. Solo tú intentando aguantar un día más en Kentucky.
• Sistema de supervivencia profundo: hambre, sed, depresión y fatiga.
• Construye fortificaciones, cocina, pesca y cultiva tu comida.
• Mundo masivo para explorar con coches y multijugador online.
• Un nivel de detalle inigualable en la mecánica de supervivencia.`,
    image: "https://i.postimg.cc/tJMmRTfG/proximamente.webp",
    gallery: [],
    requirements: {
      os: "Windows 10",
      processor: "Intel 2.77GHz Quad-core",
      memory: "8 GB RAM",
      graphics: "2GB VRAM",
    },
    developer: "The Indie Stone",
    platform: "PC",
    mode: "Multijugador",
    languages: "Español / Inglés",
    highlighted: false,
    onSale: true,
    isNew: false,
    reviews: [],
  },
  {
    id: 48,
    code: "the-forest",
    title: "The Forest",
    stock: 15,
    price: 19.99,
    category: "Supervivencia / Terror",
    rating: 4.5,
    ratingsCount: 40000,
    description: "Solo superviviente de un accidente de avión.",
    longDescription: `Construye, explora y sobrevive en este terrorífico simulador en primera persona. Lucha contra una sociedad de mutantes caníbales.
• Tala árboles para construir una base o quemar hogueras.
• Bucea en lagos y explora cuevas profundas llenas de secretos.
• Fabrica armas y trampas para defenderte de los nativos.
• Juega solo o en cooperativo con amigos.`,
    image: "https://i.postimg.cc/tJMmRTfG/proximamente.webp",
    gallery: [],
    requirements: {
      os: "Windows 7",
      processor: "Intel Dual-Core 2.4 GHz",
      memory: "4 GB RAM",
      graphics: "NVIDIA GeForce 8800GT",
    },
    developer: "Endnight Games",
    platform: "PC",
    mode: "Un Jugador / Cooperativo",
    languages: "Español / Inglés",
    highlighted: false,
    onSale: true,
    isNew: false,
    reviews: [],
  },
  {
    id: 49,
    code: "monster-hunter-world",
    title: "Monster Hunter: World",
    stock: 12,
    price: 29.99,
    category: "Acción / RPG",
    rating: 4.8,
    ratingsCount: 55000,
    description: "¡Caza monstruos gigantes!",
    longDescription: `Como cazador, tu misión es investigar el Nuevo Mundo. Caza bestias feroces para obtener materiales y fabricar armas aún mejores.
• Gráficos espectaculares con entornos que parecen vivos.
• 14 tipos de armas diferentes con estilos de juego totalmente únicos.
• Modo cooperativo online para cazar en grupo de 4.
• Actualizaciones constantes con nuevos monstruos y colaboraciones.`,
    image: "https://i.postimg.cc/tJMmRTfG/proximamente.webp",
    gallery: [],
    requirements: {
      os: "Windows 7",
      processor: "Intel Core i5-4460",
      memory: "8 GB RAM",
      graphics: "GTX 760",
    },
    developer: "Capcom",
    platform: "PC",
    mode: "Multijugador",
    languages: "Español / Inglés",
    highlighted: false,
    onSale: true,
    isNew: false,
    reviews: [],
  },
  {
    id: 50,
    code: "sekiro-shadows-die-twice",
    title: "Sekiro™: Shadows Die Twice",
    stock: 10,
    price: 59.99,
    category: "Acción / Aventura",
    rating: 4.9,
    ratingsCount: 40000,
    description: "Encarnas al 'lobo manco', un guerrero desfigurado.",
    longDescription: `Explora el Japón de la era Sengoku a finales del siglo XVI. Enfrenta enemigos colosales con un brazo protésico y habilidades ninja.
• Sistema de combate basado en desvíos ('parries') extremadamente preciso.
• Herramientas ninja como el gancho para explorar verticalmente.
• Sigilo y verticalidad únicos en los juegos de FromSoftware.
• Una de las curvas de dificultad más gratificantes del género.`,
    image: "https://i.postimg.cc/tJMmRTfG/proximamente.webp",
    gallery: [],
    requirements: {
      os: "Windows 7",
      processor: "Intel Core i3-2100",
      memory: "4 GB RAM",
      graphics: "GTX 760",
    },
    developer: "FromSoftware",
    platform: "PC",
    mode: "Un Jugador",
    languages: "Español / Inglés",
    highlighted: true,
    onSale: false,
    isNew: false,
    reviews: [],
  },
];
