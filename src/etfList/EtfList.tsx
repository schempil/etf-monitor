import {Etf} from "../types/Etf";
import './EtfList.css';
import {useEffect, useState} from "react";
import {EtfCard} from "../etfCard/EtfCard";
import {NewEtf} from "../newEtf/NewEtf";
import {MockService} from "../services/MockService";

export function EtfList() {

	const [etfList, setEtfList] = useState<Etf[]>([])
	const [activeEtf, setActiveEtf] = useState<Etf | null>(null)

	useEffect(() => {
		MockService.getEtfList().then(etfList => {
			setEtfList(etfList)
		})
	}, [])

	const addEtf = (etf: Etf) => {

		//TODO Needs to clarify in here, very bad solution here...

		const newList = JSON.parse(JSON.stringify(etfList))
		newList.push(etf)
		setEtfList(newList)
	}

	const setActive = (etf: Etf) => {
		setActiveEtf(etf)
	}

	const listItems = etfList.map((etf, index) => {
		return (
			<EtfCard etf={etf} key={etf.name} activeEtf={activeEtf} setActive={setActive} />
		)
	})

	return (
		<div className="container etf-list">
			<NewEtf addEtf={addEtf} />
			<div className="row row-cols-1 row-cols-md-3 g-4">
				{listItems}
			</div>
		</div>
	)

}