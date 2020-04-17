import React from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../src/store';
import { BrowserRouter as Router } from "react-router-dom";

import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Routes from './routes';

const App: React.FC = () => {	
	const prefersDarkMode = useSelector((state: ApplicationState) => state.themes.data);

	const theme = React.useMemo(
		() =>
			createMuiTheme({
				palette: {
					type: prefersDarkMode,
				},
			}),
		[prefersDarkMode],
	);

	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Routes/>
			</Router>			
		</ThemeProvider>
	);
}

export default App;
