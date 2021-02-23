import {Etf} from "../types/Etf";
import {createUseStyles} from "react-jss";

type Props = {
	etf: Etf
	activeEtf: Etf | null
	setActive: (etf: Etf) => void
}

export function EtfCard(props: Props) {

	const useStyles = createUseStyles({
		EtfCard: {
			marginBottom: '30px'
		},
		Selected: {
			border: '2px solid yellow'
		}
	})

	const styles = useStyles()

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
			<div className={'col ' + styles.EtfCard + (isActive(etf) ? ` ${styles.Selected}` : '')}
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