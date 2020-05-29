import React from 'react';
import { useParams } from 'react-router-dom';
import { SharedElement, MotionScene, MotionScreen } from 'react-motion-layout';

import { items } from './data';

export default function Story() {
  const { storyId } = useParams();
  
  const { image, text } = items[storyId || 0];

  return (
    <MotionScreen>
      <MotionScene name={`story-${storyId}`} scrollUpOnEnter>
        <SharedElement.Text animationKey="text-main">
          {text}
        </SharedElement.Text>
        <SharedElement.Image animationKey="big-image" src={image} />
      </MotionScene>
    </MotionScreen>
  );
}