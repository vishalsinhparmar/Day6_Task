
import { createRoot } from 'react-dom/client'
import './index.css'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Layout from './components/Layout.jsx'
import Contact from './components/Contact.jsx'

createRoot(document.getElementById('root')).render(
     <Router>
          <Routes>
             <Route path='/' element={<Layout/>}>
             <Route index element={<Home/>}/>
             <Route path='/home' element={<Home/>}/>

             <Route path='/About' element={<About/>}/>
             <Route path='/Contact' element={<Contact/>}/>

             </Route>
          </Routes>
     </Router>
)
