
import './App.css';
import Cart from './Components/Cart/Cart';
import AllCategories from './Components/Filter/AllCategories';
import Sweets from './Components/StoreSweets/Sweets';
import Header from './Header';



function App() {
  return (
    <div className="App" >
      <div>
      <Header/>
      <AllCategories/>
<Cart/>
      </div>
      <div className="dessert">
        <Sweets/>
     
      </div>
  
    </div>
  );
}

export default App;
