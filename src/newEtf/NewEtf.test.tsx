import React from "react";
import {render, screen, fireEvent, waitFor, act} from "@testing-library/react";
import {NewEtf} from "./NewEtf";

test('add etf and clear form', () => {

	const addEtf = jest.fn()

	render(<NewEtf addEtf={addEtf} />)

	const nameInput = screen.getByPlaceholderText('Name')
	fireEvent.change(nameInput, {
		target: { value: "test" }
	})
	expect(nameInput).toHaveValue('test')

	const performanceInput = screen.getByPlaceholderText('Performance')
	fireEvent.change(performanceInput, {
		target: { value: 2 }
	})
	expect(performanceInput).toHaveValue(2)

	const submitButton = screen.getByRole('button')
	fireEvent.click(submitButton)

	expect(addEtf).toBeCalled()
	expect(nameInput).toHaveValue('')
	expect(performanceInput).toHaveValue(0)

})