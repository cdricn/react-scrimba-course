import React from "react"
import { SlStar } from "react-icons/sl";
import { SlMagicWand } from "react-icons/sl";

export default function Scrim4() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (212) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false
  })

  function toggleFavorite() {
    setContact(prev => { 
      return {
        ...prev, 
        isFavorite: !prev.isFavorite
      }
    })
    console.log("Toggle Favorite")
  }

  let starIcon = contact.isFavorite ? <SlStar/> : <SlMagicWand/>
  let ariaLabel = contact.isFavorite ? "Add to favorites" : "Remove from favorites" 
  
  return (
    <main>
      <article className="card">
        <img
          src=''
          className="avatar"
          alt="User profile picture of John Doe"
        />
      <div className="info">
        <button
          onClick={toggleFavorite}
          aria-pressed={contact.isFavorite}
          aria-label={(ariaLabel)}
          className="favorite-button"
        >
          {starIcon}
        </button>
        <h2 className="name">
          {contact.firstName} {contact.lastName}
        </h2>
        <p className="contact">{contact.phone}</p>
        <p className="contact">{contact.email}</p>
        <p>{contact.isFavorite ? "Add to favorites" : "Remove from favorites" }</p>
      </div>

      </article>
    </main>
  )
}
