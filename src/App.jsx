import { useState } from 'react'
import './App.css';
import FlashCard from './Components/FlashCards';

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    {front: '', back: ''},
    {front: '', back: ''},
    {front: '', back: ''},
    {front: '', back: ''},
    {front: '', back: ''},
    {front: '', back: ''},
    {front: '', back: ''},
    {front: '', back: ''},
    {front: '', back: ''},
    {front: '', back: ''},
  ]
  return (
    <div className="App">
      <h1>Stay Aware of Climate Change!</h1>
      <h2>flashcards to keep aware of climate change issues</h2>
      <h3>Number of cards: 10</h3>
      <FlashCard question='what is largest contributor to greenhouse gases?' answer='coal'/>

    </div>
  )
}

export default App
