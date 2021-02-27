export class TodoService {

	static getTodos = async() => {
		return await fetch("https://jsonplaceholder.typicode.com/todos?userId=1").then(response => response.json())
	}

}