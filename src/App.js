// import './App.css';
// import Home from './components/Home';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import Create from './pagination/Create';
// function App() {
//   return (
//    <div className="App">
//           <h1>Redux-Crud Operation</h1>

//       <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/createform' element={<Create />} />
//       </Routes>
//       </BrowserRouter>

//     </div>
   
    
//   );
// }

// export default App;

import './App.css';
import Home from './components/Home';
import Create from './pagination/Create';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './store/CreateStore';
import Edit from './pagination/Edit';
function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <div className="App">
          <h1>Redux-Crud Operation</h1>
          <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/createform' element={<Create />} />
          <Route path='/editform/:index' element={<Edit />} />
          </Routes>
    </div>
    </BrowserRouter>
    
    </Provider>
  
   
    
  );
}

export default App;