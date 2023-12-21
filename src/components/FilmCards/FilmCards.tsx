import { FilmCard } from "./FilmCard/FilmCard";

export interface Film {
  id: number,
  title: string,
  rating: number,
  price: number,
  favorite: boolean,
  genre: string,
  img: string,
}

type FilmProps = {
  films: Film[];
}

export const FilmCards = ({ films }: FilmProps) => {
   return (
    <ul className="movie-list">
      {films.map((item) => (
        <FilmCard item={item} key={item.id}/>
      ))}
    </ul>
   )
 }