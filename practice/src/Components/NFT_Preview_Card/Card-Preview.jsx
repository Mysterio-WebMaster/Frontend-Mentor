import React from 'react'
import './styles.css'
import nft from './images/image-equilibrium.jpg'
import profile from './images/image-avatar.png'
import ethIcon from './images/icon-ethereum.svg'
import clock from './images/icon-clock.svg'


export default function Card() {
  return (
      <div className='Card'>
        <img className='nft' src={nft} alt="" width="100%"/>
        <br /><br />

        <h3 className='title'>Equillibrium #3429</h3>

        <p className='desc'>Our Equilibrium collection promotes balance and calm.</p>

        <div>
          <span className='cost'> <img src={ethIcon}/> 0.041ETH</span> <span className='duration'><img src={clock}/> 3 days left</span>
        </div>

        <hr className='line' />

        <div>
          <img className='profile' src={profile} alt="" width={32}/>
          <span className='created'>  Creation of</span> <span className='name'>Jules Wyvern</span> 
        </div>

    </div>
    
  )
}
