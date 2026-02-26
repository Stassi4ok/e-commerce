import MyAppRouter from './router/index'
import { CurrencyUser, ROLES } from './context/userContext'
import {useState} from 'react'
import './App.css'
import './css/typography.css'
import './css/buttons.css'

function App() {
  const savedUser = JSON.parse(localStorage.getItem('currentUser'))

  const [user, setUser] = useState(
    savedUser || { id: null, role: ROLES.GUEST }
  )

  return (
    <CurrencyUser.Provider value={{user,setUser}}>
      <MyAppRouter />
    </CurrencyUser.Provider>
  );
}

export default App;