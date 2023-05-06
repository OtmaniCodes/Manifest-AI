import React from 'react'
import './Team.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import TeamSection from '../../components/TeamSection/TeamSection'

export default function Team() {
  return (
    <div id="team-page">
        {/* <Navbar/> */}
        <div className='py-5 py-md-0'>
            <TeamSection givenStyle={{marginTop: '55px'}} />
            {/* <TeamSection/> */}
            <p className='mx-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa magni, facere voluptates non architecto dolores cumque nostrum sequi aspernatur aut nemo reiciendis veniam temporibus nihil repellendus placeat, dolorem rem! Ullam earum labore qui nam deleniti possimus quas obcaecati quod quasi iste consequatur, quis distinctio quisquam. Voluptatem, iste? Laudantium, dolore temporibus?</p>
        </div>
        {/* <Footer/> */}
    </div>
  )
}
