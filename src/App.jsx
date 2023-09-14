import './App.css'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import BookMarks from './Components/Bookmarks/Bookmarks'
import Cards from './Components/Cards/Cards'
import { useState } from 'react'
function App() {
  const [players,setPlayers] =useState([]);
   const[playerName,setPlayerName] =useState([])
   const [totalPlayer,setTotalPlayer] = useState(0)
   const [remaining,setTotalRemaining] =useState(0)
   const [totalCount,setTotalCount] = useState(0)

   
   const handlePlayer = (player) =>{
    setPlayers([...players,player])
  
    
    let isExisted = players.find(item=>item.id==player.id)
   
    let count= player.salary;
   console.log(count);
   if(isExisted){
    return alert('already sold')
   }
    else{

      players.forEach((item)=>
      {
       count = count+item.salary
      }
      )
      const newRemaining = 500000-count;

      if(count>500000)
      {
        return alert('taka nai');
      }
    else{
      const totalNumberPlayer = totalPlayer+1;
      setTotalPlayer(totalNumberPlayer)
      setTotalCount(count)
      setTotalRemaining(newRemaining)
        const setName =[...playerName,player]
      setPlayerName(setName)
    }
      
    }
   
   }
   
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <div className='container mx-auto flex'>
      <Cards handlePlayer={handlePlayer}></Cards>
      <BookMarks totalPlayer={totalPlayer} playerName={playerName} totalCount={totalCount} remaining={remaining}> </BookMarks>
      </div>
    </>
  )
}

export default App
