import React from "react";
import './NewEtf.css';
import {Etf} from "../types/Etf";

type Props = {
	addEtf: (etf: Etf) => void
}

type State = {
	name: string
	performance: number
}

export class NewEtf extends React.Component<Props, State> {

	constructor(props: any) {
		super(props);

		this.onNameChange= this.onNameChange.bind(this)
		this.onPerformanceChange= this.onPerformanceChange.bind(this)
		this.submit= this.submit.bind(this)

		this.state = {
			name: '',
			performance: 0
		}
	}

	onNameChange(e: any) {
		this.setState({
			name: e.target.value
		})
	}

	onPerformanceChange(e: any) {
		this.setState({
			performance: parseInt(e.target.value)
		})
	}

	initializeNewEtf() {
		this.setState({
			name: '',
			performance: 0
		})
	}

	submit() {
		this.props.addEtf({
			name: this.state.name,
			performance: this.state.performance
		})

		this.initializeNewEtf()
	}

	render() {
		return (
			<div>
				<div className="row new-etf-form">
					<div className="col">
						<input type="text" className="form-control" placeholder="Name" value={this.state.name} onChange={this.onNameChange} />
					</div>
					<div className="col">
						<input type="number" className="form-control" placeholder="Performance" value={this.state.performance} onChange={this.onPerformanceChange} />
					</div>
					<button className="btn btn-primary" onClick={this.submit}>+</button>
				</div>
			</div>
		)
	}

}