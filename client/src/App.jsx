
import { Navbar, Footer, Services, Transactions, Welcome } from './components';

const App = () => {

  return (
    <div className="min-h-screen">
      <div class="gradient-bg-welcome">
      <Navbar/>
      <Welcome/>
      </div>
      <Services/>
      <Transactions/>
      <Footer/>

    </div>
  )
}

export default App

