import React, { useCallback } from "react";
import PhotosDB from "./PhotosDB";
import { useHistory } from "react-router-dom";
import {
  MotionScene,
  MotionScreen,
  SharedElement,
  useMotion
} from "react-motion-layout";

import { Container, BottomCard, Picture, Name , Date, Topo, Logo} from './styles/index'
import like from './like.svg'
import logo from './logo.svg'

function ItemComponent({ item, id }) {
  const history = useHistory();
  const withTransition = useMotion(`photo-${id}`);
  const callback = useCallback(() => history.push(`/photo/${id}`), [
    history,
    id
  ]);

  return (
    <MotionScene name={`photo-${id}`} onClick={withTransition(callback)}>
      <Topo>
        <Logo style={{marginLeft: 20, width: 45, height: 45}} src={logo}/>
      </Topo> 
      <Container>
        <SharedElement.Image
          style={{width: '99%', padding: 20, borderRadius: "20px"}}
          alt=""
          src={item.photo}
          animationKey="image"
        />
        <BottomCard>
          <Picture src={item.icon} alt="picture"/>
            <div style={{flexDirection: 'column'}}>
              <Name>Joseph Bornen</Name>
              <Date>Today, 11.45pm</Date>
            </div>
            <Picture style={{marginLeft: 123, width: 27, height: 27}} src={like}/>
        </BottomCard>
      </Container>
    </MotionScene>
  );
}

export default function Photos() {
  return (
    <MotionScreen>
      <Container>
        <div>
          {PhotosDB.slice(0, 2).map((item, id) => (
            <ItemComponent item={item} id={id} key={id} />
          ))}
        </div>
        <div>
          {PhotosDB.slice(2, 4).map((item, id) => (
            <ItemComponent item={item} id={id + 2} key={id} />
          ))}
        </div>
        <div>
          {PhotosDB.slice(4, 6).map((item, id) => (
            <ItemComponent item={item} id={id + 4} key={id} />
          ))}
        </div>
      </Container>
    </MotionScreen>
  );
}
