import React from 'react';
import {HeaderBar} from "./headerBar/HeaderBar";
import {EtfList} from "./etfList/EtfList";
import {createUseStyles} from "react-jss";
import {ReactQueryDevtools} from 'react-query/devtools'
import {QueryClient, QueryClientProvider} from "react-query";
import {TodoList} from "./todoList/TodoList";


function App() {

	const useStyles = createUseStyles({
		AppHeader: {
			backgroundColor: '#282c34',
			minHeight: '100vh'
		}
	})

	const styles = useStyles()
	const queryClient = new QueryClient()

  return (

		<QueryClientProvider client={queryClient}>
			<div className="App" data-testid="App Container">
				<header className={styles.AppHeader}>
					<HeaderBar />
					<EtfList />
					<TodoList />
				</header>
			</div>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
  );
}

export default App;
