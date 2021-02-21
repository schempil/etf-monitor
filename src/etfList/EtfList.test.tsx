import React from "react";
import {render, screen, fireEvent, waitFor, act} from "@testing-library/react";
import {EtfList} from "./EtfList";
import {MockService} from "../services/MockService";

test('check if etf list is rendered correctly', async() => {

	render(<EtfList />)

	const etfList = await MockService.getEtfList()

	etfList.forEach(etf => {
		expect(screen.getByText(etf.name)).toBeInTheDocument()
	})
})

test('add new etf', async() => {

	render(<EtfList />)

	const etfList = await MockService.getEtfList()

	const nameInput = screen.getByPlaceholderText('Name')
	fireEvent.change(nameInput, {
		target: { value: "test" }
	})

	const performanceInput = screen.getByPlaceholderText('Performance')
	fireEvent.change(performanceInput, {
		target: { value: 2 }
	})

	fireEvent.click(screen.getByRole('button'))

	expect(etfList.length + 1).toEqual(screen.getAllByTestId('tid-etf-card').length)
})