import { Player } from "@lottiefiles/react-lottie-player";
import { useEffect, useRef } from "react";
import heartAnimation from "./9963-teal-color-heart-animation.json"

const FavoriteIconAnim = ({ on }) => {

  const playerRef = useRef(null);

  useEffect(() => {
   if (!playerRef.current) {
     return;
   }
   if (on) {
     playerRef.current.play();
   } else {
     playerRef.current.stop();
   }
 }, [on]);

 return (
   <Player ref={playerRef} speed={1.8} keepLastFrame src={heartAnimation} />
 )
}


export default FavoriteIconAnim;
