interface ContactProps {
  img: string,
  name: string,
  phone: string,
  email: string,
}

export default function Contact({img, name, phone, email} : ContactProps) {
  return (
    <article className="contact-card">
      <img 
          src={img}
          alt={`Photo of ${name}`}
      />
      <h3>{name}</h3>
      <div className="info-group">
          <img 
              src="./images/phone-icon.png" 
              alt="phone icon" 
          />
          <p>{phone}</p>
      </div>
      <div className="info-group">
          <img 
              src="./images/mail-icon.png" 
              alt="mail icon"
          />
          <p>{email}</p>
      </div>
    </article>
  )
}