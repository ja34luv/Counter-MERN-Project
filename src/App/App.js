import './App.css'
import Button from '../components/Button'

function App() {
  return (
    <div id="mainBox">
      <div id="subBoxOne" />
      <div id="subBoxTwo">
        <Button text="Down" />
        <Button text="Up" />
      </div>
    </div>
  )
}

export default App

// change font size for the number and btn texts for different screen width or height

setInterval(async function () {
  try {
    const fetchCount = await fetch(
      'https://counter-mern-project-backend.herokuapp.com/count',
      {
        method: 'GET',
      }
    )
      .then(res => res.json())
      .then(data => data[0].number)
      .then(value => (document.getElementById('subBoxOne').innerHTML = value))
  } catch (e) {
    console.log('Error:', e)
    document.getElementById('subBoxOne').innerHTML = '404'
  }
}, 100)
