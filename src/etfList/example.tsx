import {useState} from "react";

export function Example() {

	const [items, setItems] = useState<any[]>([1, 2, 3])

	const updateItem = (updatedItem: any) => {

		let index = items.findIndex((item) => item === updatedItem)

		if (index === -1) {
			console.error('fuck it')
			return
		}

		updatedItem = Math.floor(Math.random() * 10) + 1

		const updatedItems = [...items]
		updatedItems[index] = updatedItem
		setItems(updatedItems)
	}

	return (
		<div>
			{ items.map(item => <h1 key={item} onClick={() => updateItem(item)}>{item}</h1>) }
		</div>
	)
}


