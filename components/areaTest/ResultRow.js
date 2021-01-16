export const ResultRow = function (props) {
  const userAnswerSpan = props.userAnswer.length > 1 ? props.userAnswer.map((elem, i) => (<span key={i}> {elem.text} | </span>)) : " - "
  const correctAnswerSpan = props.correctAnswer.length > 1 ? props.correctAnswer.map((elem, i) => (<span key={i}> {i !== 0 ? "|" : ""} {elem.text} </span>)) : props.correctAnswer[0].text
  return (
    <tr className={props.color === "green" ? "table-success" : "table-danger"}>
      <th scope="row">{props.questionNumber}) {props.questionText}</th>
      <td>{userAnswerSpan}</td>
      <td>{correctAnswerSpan}</td>
      { props.points !== null && <td>{props.points}</td>}
    </tr>
  )
}