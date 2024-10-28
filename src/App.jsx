import Side from './components/Nav/Side'
import { Outlet } from 'react-router-dom'
function App() {
  

  return (
    <>
      <Side/>
      <Outlet/>
    </>
  )
}

export default App
