import './App.css'
import Header from './сomponents/header'
import MainContent from './сomponents/mainContent'
import Sidebar from './сomponents/mainContent/Todo/Sidebar'
<script src="https://kit.fontawesome.com/c0645272a8.js"></script>
function App() {

  return (
    <>
      <div className="wrapper">
        <Header />
        <Sidebar />
        <MainContent />
      </div>
    </>
  )
}

export default App
