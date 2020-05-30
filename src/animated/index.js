import React from 'react'
import Lottie from 'lottie-react-web'
import animationData from './like.json'

const Animate = (click) =>{

    const defaultOptions = {
        loop: false,
        autoplay: true, 
        animationData: animationData,
    }

    return(
        <>
            <Lottie options={defaultOptions}
              height={40}
              width={40}
              isStopped={click.click}
              isPaused={click.click}
              />

        </>
    )
}
export default Animate