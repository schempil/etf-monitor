export class TodoService {

	static getTodos = async() => {
		return await fetch("https://jsonplaceholder.typicode.com/todos").then(response => response.json())
	}

}