import Message from './Message'
import ListGroup from './components/ListGroup'


function App() {

  let items = [
    'Awka',
    'Akure',
    'Dutse',
    'Damaturu',
    'Lafia'
 ]
  
  return (
    <div>
      <ListGroup items={items} heading="Capitals to Nigerian states" />
    </div>
  )
}

export default App
