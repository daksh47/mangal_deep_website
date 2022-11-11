import React from 'react'

const Header = (props) => {
  return (
    <div style={{paddingTop: '90px', backgroundColor:"black"}}>
      <div className='container'>
        <div className='pt-5' style={{ textAlign:'center'}}>
          <h1 className='text-white pt-5 pb-5'>{props.heading}</h1>
        </div>
      </div>
    </div>
  )
}

export default Header