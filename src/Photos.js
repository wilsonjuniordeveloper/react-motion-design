import React, { useCallback } from "react";
import PhotosDB from "./PhotosDB";
import { useHistory } from "react-router-dom";
import {
  MotionScene,
  MotionScreen,
  SharedElement,
  useMotion
} from "react-motion-layout";

import { Container, BottomCard, Picture, Name , Date} from './styles/index'


function ItemComponent({ item, id }) {
  const history = useHistory();
  const withTransition = useMotion(`photo-${id}`);
  const callback = useCallback(() => history.push(`/photo/${id}`), [
    history,
    id
  ]);

  return (
    <MotionScene name={`photo-${id}`} onClick={withTransition(callback)}>
      <Container>
        <SharedElement.Image
          style={{width: '99%', padding: 20, borderRadius: "20px"}}
          alt=""
          src={item.photo}
          animationKey="image"
        />
        <BottomCard>
          <Picture src={item.photo} alt="picture"/>
            <div style={{flexDirection: 'column'}}>
              <Name>Joseph Bornen</Name>
              <Date>Today, 11.45pm</Date>
            </div>
            <Picture style={{marginLeft: 123, width: 30, height: 30}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABmJLR0QA/wD/AP+gvaeTAAAE4ElEQVRYhe2X2W9UdRTHv+cuvztLO8O0QJStyJ4SsBJUBKNNWiygVAQ1ihJRYog+KPGdf0AfjMYXTYhNIEJIBNkqlCXFCspWBRdcUhYrbUoptJ25+517fOhMU9tpnc7U9qWfx3vv7/w+93fP7/zOBcYZZ5zhw8wBZn5FT3jHLdNvTXq+nfR8x7H826bu1TLza8wcHEa8AmbeYureMcfy25Oe7yQ93zbNZItl+IeYeQMzK5nGUoZglbbt72xv8cJXLhqFbX+7iHcnAQbCERlTZqhYWBZKTClRIcm0XZLwCRF5g4ipvo/3/CRvb77m8NXLZkFLswMj7gMEFEZlTJspULYsHI/G5Dah0ctEdHFQQWZ+wTL9miN7O0M3/rCHXJXiyQqq1kf14snq70KjtUTU0i/WdMfmI20t7qy6/V3hzo6M79DLwiUhrqyOGIpK1UR0aoAgM5e6Dl/Y/VlHqL3VHTJY72ACllcUuktXhDsUQcuJ6Hoq1hzP5bPfnUrEzjckFHBW4VAyW8O6TbGEolIpETUDgJS+6di88/TR7kC2cj0iwJkTcbXhRHyS4/BpZo4xc5HjcH39193F57/JXg4AbjbZuPitrtkW70hfk3om4jLP4flXLhjS4MMHp/GMLl+7ak90bK5xHP686aodu3wut1jn6hOqJOFxZp7TK+i6/qafLhka+7mE7KFuf2fQMv0Ky/Arju/vDOUax/MYvzSaku9jU6+g56Ci+bqTcZtni+sy6vZ1hev2dYVddxjfNQM3/rQ120pWAYACAKqgkjtt2efeYNxsGnrnZ8vtVheKIs0FUisoySiwzPzeeiQxdR+yQoVA7yYhT5bHVqovkgwwIwmkc9Dl29FYXik4ohREZHiufxdI10HiYzPniDz28MgytUQATJeAlKCmSTsXPxrSB57MY8O8RYG4FqQ9QEqQiBqCIemv2fMDY2sGIFokY1qJAICDQJ+jTgtI71Y+G00oytgu44rKiAGij4goAfQRJKKTQqD2iVWRkSlmOTBlhsDcUs1QFLyfvvav81IEpK2LlgY7S5cER70oCo1QvTGmKyptIaJ4RkEi6lRUWrWyOmrdN00dNTki4OkXY4YQ2E1EB/veG9BxENGPikSvbthcpE8oGp3q/eSqiD19lvhN1aS3+9/L2BKRQvtUIW3b+NZEIzbx/y3gKyoLnUUPh1pUQSuJaEBDMOSWZeY3LNP/ePenHeG77UO37LlQvjpiL34k1KYKeqz/L0NWggDAHq+3Xa75sqajsLU5/44H6Mm5irVRa0FZsEnTqJyI7gz6bDYBmbncdfnwiQNdoV9/MPMqlEIjPPNSTJ86Q1wRAarqu2NzFkxJPuR5qG08k4g1HI9rw/nXSFM0ScGGzUV6MERfqUJ6PVPO5SyYkiy2LD7U3uouPvTFvbBpZN9fLHgwyE+ti+qqoG1EtOO/R+QgmJKUXRcfeK6/9cCue6FbN50hn9cCEqqem2CUzBUdQqM1RPTzcObLOZ+YeY3n8q7Gs3rB2ZMJNZkc+M0fmK9h9fMTdEXBXlVI76TP11ERTElOsi3eYxrJZYf3dIbabvWkVEFERvmaiD57gaYrKm0kopP5zJMXzEzs8Zuey93f18ft+touz3V803GSHzJzeMzE+sPM91umf9Q0vdPMPG+sfcYZZ6T4B/CQORVHjJZeAAAAAElFTkSuQmCC"/>
            
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
