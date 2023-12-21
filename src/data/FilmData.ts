import type { Film } from "./models/Film";

export const filmData: Film[] = [
   {id: 1, title: 'Матрица: Перезагрузка', rating: 4, price: 950, favorite: true, genre: 'экшн', img: '/img/act.jpg'},
   {id: 2, title: 'Титаник', rating: 5, price: 500, favorite: false, genre: 'романтика', img: '/img/rom.jpg'},
   {id: 3, title: 'Гравитация', rating: 0, price: 800, favorite: false, genre: 'фантастика', img: '/img/scifi.jpg'}
]