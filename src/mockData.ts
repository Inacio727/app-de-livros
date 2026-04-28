export interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  image: string;
}

export const books: Book[] = [
  {
    id: 1,
    title: "Naruto",
    author: "Masashi Kishimoto",
    description: "A história de um jovem ninja que busca reconhecimento e sonha em se tornar Hokage.",
    image: "https://m.media-amazon.com/images/I/91RpwagB7uL.jpg"
  },
  {
    id: 2,
    title: "Attack on Titan",
    author: "Hajime Isayama",
    description: "Humanidade luta pela sobrevivência contra gigantes devoradores de humanos.",
    image: "https://m.media-amazon.com/images/I/81qPzeEO5IL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 3,
    title: "Death Note",
    author: "Tsugumi Ohba",
    description: "Um estudante encontra um caderno capaz de matar qualquer pessoa cujo nome seja escrito nele.",
    image: "https://m.media-amazon.com/images/I/81+JKoSTQgL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 4,
    title: "One Piece",
    author: "Eiichiro Oda",
    description: "A jornada de Luffy e sua tripulação em busca do maior tesouro do mundo.",
    image: "https://cdn.xzone.cz/p/komiksy/komiks-one-piece-1-romance-dawn-dobrodruzstvi-zacina-1/komiks-one-piece-1-romance-dawn-dobrodruzstvi-zacina-1-664-900w.png"
  },
  {
    id: 5,
    title: "Harry Potter e a Pedra Filosofal",
    author: "J.K. Rowling",
    description: "Um jovem descobre que é um bruxo e inicia sua jornada em Hogwarts.",
    image: "https://static.wikia.nocookie.net/harrypotter/images/8/86/Sorcerer%27s_stone_cover.jpg/revision/latest/scale-to-width-down/250?cb=20130201141131&path-prefix=pt-br"
  },
  {
    id: 6,
    title: "Duna",
    author: "Frank Herbert",
    description: "Uma épica ficção científica sobre política, religião e poder em um planeta desértico.",
    image: "https://martinsfontespaulista.vteximg.com.br/arquivos/ids/315974-800-800/827928_ampliada.jpg?v=637254554562530000"
  }
];