import React from 'react';
import {HeaderBar} from "./headerBar/HeaderBar";
import {EtfList} from "./etfList/EtfList";
import {createUseStyles} from "react-jss";


function App() {

	const useStyles = createUseStyles({
		AppHeader: {
			backgroundColor: '#282c34',
			minHeight: '100vh'
		}
	})

	const classes = useStyles()

  return (
    <div className="App" data-testid="App Container">
      <header className={classes.AppHeader}>
					<HeaderBar />
					<EtfList />
      </header>
    </div>
  );
}

export default App;
