import type { Film } from "./models/Film";
import act from "../img/act.jpg";
import rom from "../img/rom.jpg";
import scifi from "../img/scifi.jpg";

export const filmData: Film[] = [
   {id: 1, title: 'Матрица: Перезагрузка', rating: 4, price: 950, favorite: true, genre: 'экшн', img: act},
   {id: 2, title: 'Титаник', rating: 5, price: 500, favorite: false, genre: 'романтика', img: rom},
   {id: 3, title: 'Гравитация', rating: 0, price: 800, favorite: false, genre: 'фантастика', img: scifi}
]