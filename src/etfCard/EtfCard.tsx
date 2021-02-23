import {Etf} from "../types/Etf";
import './EtfCard.css';

type Props = {
	etf: Etf
	activeEtf: Etf | null
	setActive: (etf: Etf) => void
}

export function EtfCard(props: Props) {
	const getSign = (performance: number) => {
		return performance < 0 ? '' : '+'
	}

	const formatPerformance = (etf: Etf): string => {
		return `${getSign(etf.performance)}${etf.performance}%`
	}

	const getColorClass = (performance: number): string => {
		return performance < 0 ? 'text-danger' : 'text-success'
	}

	const isActive = (etf: Etf): boolean => {
		return !!props.activeEtf && props.activeEtf.name === etf.name
	}

	const { etf } = props

		return (
			<div className={'col etf-card' + (isActive(etf) ? ' selected' : '')}
					 data-testid="tid-etf-card"
					 onClick={() => props.setActive(etf)}>
				<div className="card">
					<div className={"card-body " + getColorClass(etf.performance)}>
						<h5 className="card-title">{etf.name}</h5>
						<p className="card-text">Performance: {formatPerformance(etf)}</p>
					</div>
				</div>
			</div>
		)
}