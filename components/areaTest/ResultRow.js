import {
  Row,
  Col,
  Card,
  Button,
  Table
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

export const ResultRow = function (props) {
  return (
    <tr className="table-success">
      <th scope="row">{props.questionNumber}</th>
      <td>{props.userAnswer}</td>
      <td>{props.rightAnswer}</td>
      <td>{0}</td>
    </tr>
  )
}