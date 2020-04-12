import React, { useState } from 'react';
import Layout from './components/Layout';
import { useSelector, useDispatch } from 'react-redux';
import { ApplicationState } from '../src/store';
import { addItem } from './store/ducks/repositories/actions';
import { createMuiTheme, ThemeProvider, PaletteType } from '@material-ui/core';

const App: React.FC = () => {  
  const [prefersDarkMode, setPrefersDarkMode] = useState<PaletteType>('light')
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode,
        },
      }),
    [prefersDarkMode],
  );


  const rep = useSelector((state: ApplicationState) => state.repositories);
  const dispatch = useDispatch();

  function add() {
    dispatch(addItem({ id: 4, name: 'sandrelynn' }))
  }

  function aternarModoTheme(){
    if(prefersDarkMode === 'dark'){
      setPrefersDarkMode('light');
    }else{
      setPrefersDarkMode('dark')
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <div>
          <h1>{rep.data.map(item => <li key={item.id}>{item.name}</li>)}</h1>
          <button type="button" onClick={add}>
            Adicionar
          </button>
          <button type="button" onClick={aternarModoTheme}>
            mode
          </button>
        </div>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
