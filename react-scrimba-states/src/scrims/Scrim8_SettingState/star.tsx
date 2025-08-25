//import starFilled from "./images/star-filled.png"
//import starEmpty from "./images/star-empty.png"

interface Contact {
  firstName: string,
  lastName: string,
  phone: string,
  email: string,
  isFavorite: boolean
}

export default function Star({isFilled} : {isFilled : boolean}) {

  let starFilled = 'starFilled';
  let starEmpty = 'starEmpty';
  let starIcon = isFilled ? starFilled : starEmpty

  return (
    <button
        aria-pressed={isFilled}
        aria-label={isFilled ? "Remove from favorites" : "Add to favorites"}
        className="favorite-button"
    >
        <img
            src={''}
            className="favorite"
        />
        {starIcon}
    </button>
  );
}