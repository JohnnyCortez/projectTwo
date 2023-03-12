import { useState } from 'react'
import './App.css';
import FlashCard from './Components/FlashCards';
import { NextButton, BackButton, RandomButton }  from './Components/Buttons';

import MainForm from './Components/Form';

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0); 
  const [disabled, setDisabled] = useState(false); 
  const [isFlipped, setIsFlipped] = useState('back');

  const cards = [
    {front: 'Greenhouse gases are at a __________ high', back: '4.5 million-year', img : 'https://cdn.mos.cms.futurecdn.net/h3aSZJE8F3DseTRsqKJ8vh.jpg'},
    {front: 'Earth has seen 20,000 years of change in ___ years', back: '170', img: 'https://climate.nasa.gov/internal_resources/2558'},
    {front: '______ was the hottest month ever recorded', back: 'July 2021', img: 'https://www.silive.com/resizer/vI_O-ndTuFGOcYRCTrRzUla-38k=/1280x0/smart/arc-anglerfish-arc2-prod-advancelocal.s3.amazonaws.com/public/XE2JANBMOVH2ZP54U7VKJXHC24.jpg'},
    {front: '___________ is not enough to reverse climate change', back: 'Tree planting', img : 'https://cdn-wordpress-info.futurelearn.com/wp-content/uploads/climate-change-nigeria.jpg.optimal.jpg'},
    {front: 'Antarctica loses ice the size of ______ every year', back: 'Everest', img: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/12DF7/production/_113530377_bears_kt-miller.jpg'},
    {front: 'The homes of _________ people will be below sea level in 70 years', back: '200 million', img: 'https://www.nj.com/resizer/Gdrql4QYUsPaKMPC3Wjl_hwAh6M=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.nj.com/home/njo-media/width2048/img/ledgerupdates_impact/photo/2018/10/18/floodingjpg-a473556de33e73d4.jpg'},
    {front: 'A _______ species are at risk', back: 'million', img: 'https://pbs.twimg.com/media/CY6tczcWsAA3LOp.jpg'},
    {front: 'There has been a ____ increase in heat-related mortality in people older than 65', back: '53.7%', img: 'https://www.beaumont.org/images/default-source/default-album/heat-stroke-heat-exhaustion.jpg?sfvrsn=cfbd7aef_2'},
    {front: 'The Great Barrier Reef in Australia is estimated to have lost ____ its corals since the 1990s.', back: 'half', img: 'https://scx2.b-cdn.net/gfx/news/2021/coralreefsco.jpg'},
    {front: '_______ of the most precious habitats are under threat.', back: 'One third', img: 'https://www.edf.org/sites/default/files/facebook_thumb/istock_boy_on_dry_lake_bed_157418252_1200_x_630.jpg'},
  ]

  function handleRandomClick() {
    let randomIndex = Math.floor(Math.random() * 10);
    setCurrentIndex(randomIndex);
    setIsFlipped('front');
  }

  function handleNextClick() {
    if (currentIndex < cards.length - 1){
      setCurrentIndex(currentIndex + 1);
      setIsFlipped('front');
    }
  }

  function handleBackClick() {
    if (currentIndex > 0){
      setCurrentIndex(currentIndex - 1);
      setIsFlipped('front');
    }
  }

  function flipCard() {
    setIsFlipped(isFlipped === 'back' ? 'front' : 'back');
  }


  return (
    <div className="App">
      <h1>Stay Aware of Climate Change!</h1>
      <h2>flashcards to keep aware of climate change issues</h2>
      <h3>Number of cards: 10</h3>
      <FlashCard card={cards[currentIndex]} isFlipped={isFlipped} onClick={flipCard} img={cards[currentIndex].img}/>      
      <MainForm />      
      <RandomButton onClick={handleRandomClick}/>
      <BackButton onClick={handleBackClick} disabled={currentIndex === 0}/>
      <NextButton onClick={handleNextClick} disabled={currentIndex === cards.length - 1}/>
    </div>
  )
}

export default App;