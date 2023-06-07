import React from 'react'
import { Header } from '../components/Header'

export const LandingPage = () => {
  return (
    <div>
        <Header />

        <section className='d-flex flex-column justify-content-center align-items-center m-5 p-5'>
            <h1>Drama<span style={{color: '#ffc107'}}>List</span></h1>
            <h6>Your personal library of the best dramas.</h6>
        </section>
    </div>
  )
}
