export default function Joke({setup, punchline, votes, comments, isPun} : {
  setup: String, 
  punchline: String,
  votes?: number,
  comments?: Array<string>,
  isPun?: boolean
}) {
  return(
    <div>
      <p>{setup}</p>
      <p>{punchline}</p>
      <span>{votes}</span>
      <span>{comments}</span>
      <div>{isPun}</div>
    </div>
  )
}