import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import PhotosDB from "./PhotosDB";
import { MotionScene, MotionScreen, SharedElement } from "react-motion-layout";
import {Like, Star, Much} from './animated/index'
import { ContainerVideo, CircleButton } from './styles/index'
import { useHistory } from 'react-router-dom'
import teste from './teste.mp4'
import {motion} from 'framer-motion'
export default function Photo() {
  const { photoId } = useParams();
  const item = PhotosDB[photoId || 0];
  const history = useHistory();
  const [xanimate, setX] = useState(555)
  const [like, setLike]=useState(true)
  const [star, setStar]=useState(true)
  const [much, setMuch]=useState(true)
  useEffect(()=>{
    setTimeout(function(){ setX(0)}, 1000);
    
  },[])

  return (
    <MotionScreen>
      <MotionScene name={`photo-${photoId}`}>
        <ContainerVideo>
          <SharedElement.Image
            onClick={()=> history.push('/')}
            style={{width: 55, height: 55, borderRadius: 50, margin: 20, border: '3px solid #fff'}}
            alt=""
            src={item.photo}
            animationKey="image"
          />
           <video width="80%" height="800" style={{marginTop: '-140px', marginLeft: 40}} autoPlay>
              <source src={teste} type="video/mp4"/>
                  Your browser does not support the video tag.
          </video> 
          <motion.div animate={{y: xanimate}} style={{marginTop: -225, opacity: 0.7, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>  
              <CircleButton onClick={()=> setLike(false)}> <Like click={like}/> </CircleButton>
              <CircleButton onClick={()=> setStar(false)}> <Star click={star}/> </CircleButton>
              <CircleButton onClick={()=> setMuch(false)}> <Much click={much}/> </CircleButton>
          </motion.div>
          <div style={{background:'#000', height: 200}}/>
        </ContainerVideo>
      </MotionScene>
    </MotionScreen>
  );
}
