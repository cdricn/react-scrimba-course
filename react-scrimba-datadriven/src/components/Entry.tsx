import './Entry.css'
import { GiPositionMarker } from "react-icons/gi";

export default function Entry() {
  return (
    <article className='item-container'>
      <img src="/fuji.png" className='item-image'/>
      <div className='item-desc'>
        <div className='item-location'>
          <GiPositionMarker  className='map-pin'/>
          <span>JAPAN</span>
          <a href='https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu'>
            View on Google Maps
          </a>
        </div>
        <h1>Mount Fuji</h1>
        <span>12 Jan, 2021 - 24 Jan, 2021</span>
        <p>Mount Fuji is the tallest mountain in Japan, 
          standing at 3,776 meters (12,380 feet). Mount Fuji is 
          the single most popular tourist site in Japan, for both 
          Japanese and foreign tourists.</p>
      </div>
      <span className='divider'></span>
    </article>
  );
}