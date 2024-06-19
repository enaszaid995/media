import React from 'react'
import '../Components/Introduction/Introduction.css';
import clients from '../assets/images/clients.jpg'
export default function Clients() {
  return (
    <div>
      <section className='intro' style={{"min-height":"65vh"}}>
        <h3>
            Our Clients !
        </h3>
        <img src={clients} width='250px' height='200px' style={{padding:'1rem'}} alt="team"/>
          <p>
            "<span>Vision Media Consultancy</span> proudly serves a wide range of clients, including
            multinational corporations, startups, non-profit organizations, and government agencies. Our
            client-centric approach has earned us a reputation for delivering results that exceed
            expectations."
          </p>
        </section>

    </div>
  )
}
