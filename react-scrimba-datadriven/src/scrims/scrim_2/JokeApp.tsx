import Joke from "./Joke";
import jokesArray from "./jokesData";

export default function JokeApp() {

  const jokesElements = jokesArray.map((joke) => {
    return <Joke setup={joke.setup} punchline={joke.punchline} />
  }) 

  return (
    <main>
      {jokesElements}
    </main>
  )
}