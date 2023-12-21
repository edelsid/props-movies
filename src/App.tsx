import './App.css'
import { FilmCards } from './components/FilmCards/FilmCards';
import { filmData } from './data/FilmData';

function App() {

  return (
    <>
      <div className='widget'>
        <FilmCards films={filmData}/>
      </div>
    </>
  )
}

export default App
