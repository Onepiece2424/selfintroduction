// アニメーション付きのいいねボタンcomponent

import { useCallback, useState } from "react";
import FavoriteIconAnim from "./FavoriteIconAnim";

const Favorite = () => {
 const [on, setOn] = useState(false);
 const handleClick = useCallback(() => {
   setOn((prev) => !prev);
 }, []);

 return (
   <>
     <button onClick={handleClick}>
       <FavoriteIconAnim on={on} />
     </button>
   </>
 );
}

export default Favorite;
