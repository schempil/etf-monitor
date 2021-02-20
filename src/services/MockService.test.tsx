import React from 'react';
import {MockService} from "./MockService";

test('mocked etf list returns more than one etf', async() => {
	const etfList = await MockService.getEtfList()
	expect(etfList.length).toBeGreaterThan(1)
})
