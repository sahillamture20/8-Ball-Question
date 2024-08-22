import { useContext } from 'react'
import 'animate.css'
import './App.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Initial from './components/Initial'
import Confirm from './components/Confirm'
import Result from './components/Result'
import { MyContext } from './context'
function App() {
  const context = useContext(MyContext);

  const handleComponent = () => {
    const screen = context.state.screen;
    console.log(context.state.screen)
    if(screen === 0) return <Initial />
    if(screen === 1) return <Confirm/>
    if(screen === 2) return <Result />
  }

  return (
    <>
    <div>
    <div className='container'>
        {handleComponent()}
      </div>
      <ToastContainer />
    </div>
      
    </>
  )
}

export default App
