

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




// pages 
import Home from './pages/Home';
import Missing from './pages/Missing';
import AddFeedback from './pages/AddFeedback';
import Roadmap from './pages/Roadmap';
import Details from './pages/Details';
import Signup from './pages/Signup';
import Login from './pages/Login';




function App() {
  return (
    <div className="w-full flex  min-h-screen justify-center py-12 lg:py-24 bg-[#f2f4ff] px-6 md:px-12 lg:px-16">
     <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/details/:id' element={<Details />}/>
        <Route path='/roadmap' element={<Roadmap />}/>
        <Route path='/add' element={<AddFeedback />}/>
        <Route path='*' element={<Missing />}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
