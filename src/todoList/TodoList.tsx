import {useQuery} from "react-query";
import {TodoService} from "../services/TodoService";

export function TodoList () {

	const query = useQuery("getTodos", TodoService.getTodos)

	if (query.isLoading) {
		return <h1>Loading...</h1>
	}

	return (
		<>
			{query.data.map((data: any) => <p>{data.title}</p> )}
		</>
	)
}