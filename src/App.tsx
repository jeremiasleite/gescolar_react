import React from 'react';
import Layout from './components/Layout';
import { useSelector, useDispatch } from 'react-redux';
import { ApplicationState } from '../src/store';
import { addItem } from './store/ducks/repositories/actions';


const App: React.FC=()=> {
  const rep = useSelector((state: ApplicationState) => state.repositories);
  const dispatch = useDispatch();
  
  function add(){
    dispatch(addItem({id: 4, name: 'sandrelynn'}))
  }
  
  return (
    <Layout>
      <h1>{rep.data.map(item => <li key={item.id}>{item.name}</li>)}</h1>
      <button type="button" onClick={add}>
        Adicionar
  </button>
      
    </Layout>
    
  );
}

export default App;
