import React from 'react'
import Lottie from 'lottie-react-web'
import animationData from './like.json'
import stardate from './star.json'

export const Like = (click) =>{

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

export const Star = (click) =>{

    const defaultOptions = {
        loop: false,
        autoplay: true, 
        animationData: stardate,
    }

    return(
        <>
            <Lottie options={defaultOptions}
              height={45}
              width={45}
              isStopped={click.click}
              isPaused={click.click}
              />

        </>
    )
}

export const Much = (click) =>{

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

