
import './App.css';
import TablazatReceptek from './Components/TablazatReceptek';

import {useContext} from 'react'
import { ApiContext } from './Contexts/ApiContext';



function App() {

  const {receptLista}=useContext(ApiContext)
  return (
    <main className = "row">
    <aside className = "col-lg-4">
        <h1>Receptkönyv</h1>
        
    </aside>
    <article className = "col-lg-8 row">
      <TablazatReceptek receptLista = {receptLista}/>
      <a href="">Kategóriák</a>
      <a href="">Receptek</a>
    </article>
    </main>
  );
}

export default App;
