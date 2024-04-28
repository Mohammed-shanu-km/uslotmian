import React from 'react'
import Resultheader from '../Resultpageheader/Resultheader'
import './Layouts.css'
import Sidebar from '../Sidebar/Sidebar'

const Layouts = ({childern}) => {
  return (
    <>
  <div className='result-page'>
    <Resultheader/>
    <div className='result-container'>
      <div className='sidebar'>
        <Sidebar/>

      </div>
      <div className='datas'>
    
      </div>


    </div>
    <div className='result-footer'>

    </div>

  </div>


    </>
   
  )
}

export default Layouts