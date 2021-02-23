import React, {useState} from "react";
import './NewEtf.css';
import {Etf} from "../types/Etf";

type Props = {
	addEtf: (etf: Etf) => void
}

export function NewEtf (props: Props) {

	const [name, setName] = useState<string>('')
	const [performance, setPerformance] = useState<number>(0)

	const onNameChange = (e: any) => {
		setName(e.target.value)
	}

	const onPerformanceChange = (e: any) => {
		setPerformance(parseInt(e.target.value))
	}

	const initializeState = () => {
		setName('')
		setPerformance(0)
	}

	const submit = () => {
		props.addEtf({
			name: name,
			performance: performance
		})

		initializeState()
	}

	return (
		<div>
			<div className="row new-etf-form">
				<div className="col">
					<input type="text" className="form-control" placeholder="Name" value={name} onChange={onNameChange} />
				</div>
				<div className="col">
					<input type="number" className="form-control" placeholder="Performance" value={performance} onChange={onPerformanceChange} />
				</div>
				<button className="btn btn-primary" onClick={submit}>+</button>
			</div>
		</div>
	)

}