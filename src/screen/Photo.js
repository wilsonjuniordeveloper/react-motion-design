import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import PhotosDB from "../data/PhotosDB";
import { MotionScene, MotionScreen, SharedElement } from "react-motion-layout";
import {Like, Star, Much} from '../animated/index'
import { ContainerVideo, CircleButton, VideHeader, ChipView } from '../styles/index'
import { useHistory , useLocation} from 'react-router-dom'
import teste from '../data/teste.mp4'
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

  const { pathname } = useLocation();

  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <MotionScreen>
      <MotionScene name={`photo-${photoId}`}>

        <ContainerVideo>
        <VideHeader>
          <SharedElement.Image
            onClick={()=> history.push('/')}
            style={{width: 55, height: 55, borderRadius: 50, margin: 10, border: '3px solid #fff', marginTop: 10}}
            alt=""
            src={item.photo}
            animationKey="image"
          />
        <div style={{display: 'flex', justifyContent: 'flex-end',width: '100%' ,alignItems: 'flex-end', marginTop: -10}}>
          <ChipView><img alt="view" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ2OS4zMzMgNDY5LjMzMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDY5LjMzMyA0NjkuMzMzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCI+CjxnPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGQ9Ik0yMzQuNjY3LDE3MC42NjdjLTM1LjMwNywwLTY0LDI4LjY5My02NCw2NHMyOC42OTMsNjQsNjQsNjRzNjQtMjguNjkzLDY0LTY0UzI2OS45NzMsMTcwLjY2NywyMzQuNjY3LDE3MC42Njd6IiBmaWxsPSIjMDAwMDAwIi8+CgkJCTxwYXRoIGQ9Ik0yMzQuNjY3LDc0LjY2N0MxMjgsNzQuNjY3LDM2LjkwNywxNDEuMDEzLDAsMjM0LjY2N2MzNi45MDcsOTMuNjUzLDEyOCwxNjAsMjM0LjY2NywxNjAgICAgIGMxMDYuNzczLDAsMTk3Ljc2LTY2LjM0NywyMzQuNjY3LTE2MEM0MzIuNDI3LDE0MS4wMTMsMzQxLjQ0LDc0LjY2NywyMzQuNjY3LDc0LjY2N3ogTTIzNC42NjcsMzQxLjMzMyAgICAgYy01OC44OCwwLTEwNi42NjctNDcuNzg3LTEwNi42NjctMTA2LjY2N1MxNzUuNzg3LDEyOCwyMzQuNjY3LDEyOHMxMDYuNjY3LDQ3Ljc4NywxMDYuNjY3LDEwNi42NjcgICAgIFMyOTMuNTQ3LDM0MS4zMzMsMjM0LjY2NywzNDEuMzMzeiIgZmlsbD0iIzAwMDAwMCIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"/>
          <p style={{fontSize: '16px'}}>1250</p></ChipView>
        </div>
        </VideHeader>   
       
           <video width="100%" height="800" style={{marginTop: '-80px'}} autoPlay>
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
