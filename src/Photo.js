import React from "react";
import { useParams } from "react-router-dom";
import PhotosDB from "./PhotosDB";
import { MotionScene, MotionScreen, SharedElement } from "react-motion-layout";

import { ContainerVideo, ButoonGrup, CircleButton } from './styles/index'
import { useHistory } from 'react-router-dom'
import teste from './teste.mp4'

export default function Photo() {
  const { photoId } = useParams();
  const item = PhotosDB[photoId || 0];
  const history = useHistory();

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
           <video width="80%" height="800" style={{marginTop: '-140px', marginLeft: 40}}>
              <source src={teste} type="video/mp4"/>
                  Your browser does not support the video tag.
          </video> 
          <ButoonGrup style={{marginTop: -225, opacity: 0.7}}>  
              <CircleButton />
              <CircleButton />
              <CircleButton />
          </ButoonGrup>
          <div style={{background:'#000', height: 200}}/>
        </ContainerVideo>
      </MotionScene>
    </MotionScreen>
  );
}
