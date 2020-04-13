import React from 'react';
import Layout from './components/Layout';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../src/store';

import { createMuiTheme, ThemeProvider } from '@material-ui/core';

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
			<Layout/>
		</ThemeProvider>
	);
}

export default App;
