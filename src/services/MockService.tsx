import {Etf} from "../types/Etf";

export class MockService {

	static getEtfList(): Promise<Etf[]> {
		return new Promise<Etf[]>((resolve) => {

			setTimeout(() => {
				resolve([
					{
						name: "Global Clean Energy",
						performance: 22
					},
					{
						name: "Global Driving Automation",
						performance: -6
					},
					{
						name: "Bitcoin Blockchain Master",
						performance: +77
					},
				])
			}, 250)
		})
	}

}