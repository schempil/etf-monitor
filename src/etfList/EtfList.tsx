import React from "react";
import {Etf} from "../types/Etf";
import './EtfList.css';
import {MockService} from "../services/MockService";
import {EtfCard} from "../etfCard/EtfCard";
import {NewEtf} from "../newEtf/NewEtf";

type State = {
	etfList: Etf[]
}

export class EtfList extends React.Component<any, State> {

	constructor(props: any) {
		super(props);

		this.addEtf = this.addEtf.bind(this)

		this.state = {
			etfList: []
		}
	}

	async componentDidMount() {
		this.setState({
			etfList: await MockService.getEtfList()
		})
	}

	addEtf(etf: Etf) {
		this.state.etfList.push(etf)
		this.setState({ etfList: this.state.etfList } )
	}

	render() {

		const listItems = this.state.etfList.map((etf, index) => {
			return (
				<EtfCard etf={etf} key={etf.name} />
			)
		})

		return (
			<div className="container etf-list">
				<NewEtf addEtf={this.addEtf} />
				<div className="row row-cols-1 row-cols-md-3 g-4">
					{listItems}
				</div>
			</div>
		)
	}
}