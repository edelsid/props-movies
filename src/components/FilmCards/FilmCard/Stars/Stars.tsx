import { Star } from "./Star/Star";

interface Stars {
   rating: number;
}

export const Stars = (rating: Stars) => {
   if (rating.rating >= 1 && rating.rating <= 5) {
      return (
         <ul className="card-body-stars u-clearfix">
            {[...Array(rating.rating)].map((_number, index) => (
               <Star key={index}/>
            ))}
         </ul>
      )
   }
 }
