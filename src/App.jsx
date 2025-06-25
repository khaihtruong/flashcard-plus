import { useState } from 'react'
import './App.css'

const flashcards = [
  { front: 'dfs', back: 'depth first search' },
  { front: 'bfs', back: 'breadth first search' },
  { front: 'array', back: 'data structure to store items' },
  { front: 'algorithm', back: 'A well-defined procedure that allows an agent to solve a problem.'},
  { front: 'min heap', back: 'values stored in the subtree of a given node are greater than or equal to the value stored in that node'},
  { front: 'max heap', back: 'values stored in the subtree of a given node must be less than or equal to the value stored in that node'},
  { front: 'queue', back : 'items go in the data structure and come out in that order'},
  { front: 'set', back: 'an unordered collection of unique, immutable elements.'},
  { front: 'dictionary', back: 'a dictionary is a built-in data structure that stores data in key-value pairs.'},
  { front: 'binary search tree', back: 'a dictionary is a built-in data structure that stores data in key-value pairs.'}
]

function App() {
  const [flip, setFlip] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const currentCard = flashcards[currentIndex]

  const handleflip = () => {
    setFlip(!flip)
  }

  const handlenext = () => {
    setFlip(false)
    setCurrentIndex((prev) => (prev + 1) % flashcards.length)
  }

  const handleprev = () => {
    setFlip(false)
    setCurrentIndex((prev) => (prev - 1) % flashcards.length)
  }

  const handleshuffle = () => {
    setFlip(false)
    let randomInteger = Math.floor(Math.random() * (flashcards.length + 1));
    setCurrentIndex((prev) => (prev + randomInteger) % flashcards.length)
  }

  return (
    <div className='container'>
      <h1 className='title'>Computer Sciences foundation</h1>
      <h4 className='summary'>Let's test your foundation knowledges</h4>
      <h4>Total cards: 10</h4>
      
      <div className='flashcard-container'>
        <div className={`flashcard-inner ${flip ? 'flipped' : ''}`} onClick={handleflip}>
          <div className='flashcard front'>
            {currentCard.front}
          </div>
          <div className='flashcard back'>
            {currentCard.back}
          </div>
        </div>
      </div>
      <button className= 'next-button' onClick={handleprev}>Back</button>
      <button className='next-button' onClick={handlenext}>Next</button>
      <button className = 'next-button' onClick = {handleshuffle}>Shuffle</button>
    </div>
  )
}

export default App
