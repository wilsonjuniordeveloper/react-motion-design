import React from "react";
import { useParams } from "react-router-dom";
import PhotosDB from "./PhotosDB";

import { MotionScene, MotionScreen, SharedElement } from "react-motion-layout";
import { Container } from './styles/index'
import { useHistory } from 'react-router-dom'

export default function Photo() {
  const { photoId } = useParams();
  const item = PhotosDB[photoId || 0];
  const history = useHistory();

  return (
    <MotionScreen>
      <MotionScene name={`photo-${photoId}`}>
        <Container>
          <SharedElement.Image
            onClick={()=> history.push('/')}
            style={{width: '100%', height: 300}}
            alt=""
            src={item.photo}
            animationKey="image"
          />
        </Container>
      </MotionScene>
    </MotionScreen>
  );
}
