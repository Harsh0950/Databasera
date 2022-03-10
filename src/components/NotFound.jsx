import React from 'react'
import notfound from '../Assests/images/NotFound.jpg';
export default function NotFound() {
  return (
    <>
    <h1 style={{textAlign:'center'}}>Page Not Found</h1>
    <img src={notfound} style={{width:'30%',margin:'80px 0 0 35%'}} />
    </>
  )
}
