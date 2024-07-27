import React from 'react'
import "./App.css"
import {BrowserRouter,Link,Routes,Route} from "react-router-dom";
import NodeApi from "./NodeApi.js"
import Register from './Register.js'
import Edit from './Edit.js'

function App() {
  return (
    <>

<Routes>
        <Route path='/' element={<NodeApi></NodeApi>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/edit/:id' element={<Edit></Edit>}></Route>
      
        </Routes>
    
    </>
  )
}

export default App