import React from "react";
import {Etf} from "../types/Etf";

type Props = {
	etf: Etf
}

export class EtfCard extends React.Component<Props, any> {

	getSign(performance: number) {
		return performance < 0 ? '' : '+'
	}

	formatPerformance(etf: Etf): string {
		return `${this.getSign(etf.performance)}${etf.performance}%`
	}

	getColorClass(performance: number): string {
		return performance < 0 ? 'text-danger' : 'text-success'
	}

	render() {

		const { etf } = this.props

		return (
			<div className="col">
				<div className="card">
					<div className={"card-body " + this.getColorClass(etf.performance)}>
						<h5 className="card-title">{etf.name}</h5>
						<p className="card-text">Performance: {this.formatPerformance(etf)}</p>
					</div>
				</div>
			</div>
		)
	}


}