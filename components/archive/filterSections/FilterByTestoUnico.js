import {
	Row,
	Col,
	Card,
	Form
} from 'react-bootstrap';
import { Select } from '../ui/Select';

export const FilterByTestoUnico = function (props) {

	return (
		<Card className="pt-2 pb-2 mb-2">
			<Row className="w-100 ml-0 mr-0">
				<Col md={12} className="justify-content-center pl-0 pr-0">
					<Row className="w-100 justify-content-center ml-0 mr-0 mb-4">
						<Card.Header>
							<h5>Filtra per Testo Unico</h5>
						</Card.Header>
					</Row>
					<Row className="w-100 ml-0 mr-0 pl-4 pr-4">
						<Col md={{ span: 10, offset: 1 }} className="pl-0 pr-0">
							<Select
								validationFunc={() => true}
								formGroupClass="text-center"
								label={"Lista Testi Unici"}
								onChange={props.handleChangeTestoUnico}
								isDisabled={false}
								selectableOptions={props.arrTestoUnico}
								//placeholder={"placeholder"}
								//getOptionValue={col => col}
								defaultValue={props.selectedTestoUnico}
							/>
						</Col>
					</Row>
				</Col>
			</Row>
		</Card>
	);
};