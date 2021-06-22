import {Etf} from "../types/Etf";
import {useEffect, useState} from "react";
import {EtfCard} from "../etfCard/EtfCard";
import {NewEtf} from "../newEtf/NewEtf";
import {MockService} from "../services/MockService";
import {createUseStyles} from "react-jss";
import {Example} from "./example";

const useStyles = createUseStyles({
	EtfList: {
		marginTop: '30px'
	}
})

export function EtfList() {

	const styles = useStyles()

	const [etfList, setEtfList] = useState<Etf[]>([])
	const [activeEtf, setActiveEtf] = useState<Etf | null>(null)

	const loadEtfs = async () => {
		const etfList = await MockService.getEtfList()
		setEtfList(etfList)
	}

	useEffect(() => {
		loadEtfs()
	}, [])

	const addEtf = (etf: Etf) => {
		setEtfList([...etfList, etf])
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
		<div className={'container ' + styles.EtfList}>
			<NewEtf addEtf={addEtf} />
			<div className="row row-cols-1 row-cols-md-3 g-4">
				{listItems}
			</div>
			<Example />
		</div>
	)
}