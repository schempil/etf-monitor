import React from "react";
import {render, screen, fireEvent, waitFor, act} from "@testing-library/react";
import {NewEtf} from "./NewEtf";

test('test1', async() => {

	render(<NewEtf />)

	const nameInput = screen.getByPlaceholderText("Name")
	const performanceInput = screen.getByPlaceholderText("Performance")

	act(() => nameInput.focus());
	await waitFor(() => expect(nameInput).toHaveFocus())
	await waitFor(() => expect(performanceInput).not.toHaveFocus())

	act(() => performanceInput.focus());
	await waitFor(() => expect(nameInput).not.toHaveFocus())
	await waitFor(() => expect(performanceInput).toHaveFocus())
})