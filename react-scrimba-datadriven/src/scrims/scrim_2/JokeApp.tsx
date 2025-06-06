import Joke from "./Joke";

export default function JokeApp() {
  return (
    <main>
      <Joke setup='hello' punchline='hi'
        votes={5} comments={["nice", "hii"]} isPun={false}/>
      <Joke setup='knock knock' punchline='whos there'/>
      <Joke setup='' punchline='punched a line'/>
      <Joke setup='' punchline=''/>
      <Joke setup='' punchline=''/>
    </main>
  )
}