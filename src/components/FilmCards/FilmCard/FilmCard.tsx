import { Stars } from "./Stars/Stars";
import { Film } from "../../../data/models/Film";

interface ItemProp {
   item: Film;
}

const labelColor = ({ item }: ItemProp) => {
   let color;
   switch (item.genre) {
      case 'экшн': color = '#194a9e';
         return color;
      case 'фантастика': color = '#619e00';
         return color;
      case 'романтика': color = '#a60825';
         return color;
      default: color = '#b00911';
   }
   return color;
}

export const FilmCard = ({ item }: ItemProp) => {
   const color = labelColor({ item });
   return (
      <div className="card">
         <div className="main-bloc">
            <div className="poster-bloc">
               <img className="poster" src={item.img} alt={item.title}></img>
               <div className="label" style={{backgroundColor: color}}>{item.genre}</div>
            </div>
            <div className="main-info">
               <h1 className="name">{item.title}</h1>
               <Stars rating={item.rating}/>
               <div className="buy">
                  <button className="btn buy-btn">Купить {item.price}</button>
                  <button className="btn reference">Подробнее</button>
               </div>
            </div>
         </div>
         <div className="other-info">
               <span className="icon favorite" style={item.favorite ? {fontWeight: 'bold'} : {fontWeight: 'regular'}}></span>
               <span className="icon share"></span>
         </div>
      </div>
   )
}