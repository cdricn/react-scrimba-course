import './Entry.css'
import { GiPositionMarker } from "react-icons/gi";
import type { EntryScrim } from './interface';

export default function EntryObjScrim({data} : EntryScrim) {
  console.log(data)

  const {image, location, link, title, date, content} = data;

  return (
    <article className='item-container'>
      <img src={image.src} className='item-image' alt={image.alt}/>
      <div className='item-desc'>
        <div className='item-location'>
          <GiPositionMarker  className='map-pin'/>
          <span>{location}</span>
          <a href={link}>
            View on Google Maps
          </a>
        </div>
        <h1>{title}</h1>
        <span>{date}</span>
        <p>{content}</p>
      </div>
      <span className='divider'></span>
    </article>
  );
}