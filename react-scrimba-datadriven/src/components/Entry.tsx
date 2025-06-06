import './Entry.css'
import { GiPositionMarker } from "react-icons/gi";

export default function Entry({
  image,
  location,
  link,
  title,
  date,
  content
  } : {
  image: {
    alt: string,
    src: string
  }
  location: string,
  link: string,
  title: string,
  date: string,
  content: string
}) {
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