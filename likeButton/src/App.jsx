
import {useState} from 'react';


const App = () => {
  const [liked,setLiked]=useState(false);
  const [likes,setLikes]=useState(0);

function handleLike(){
  if(liked){
    setLiked(false);
    setLikes(prevlikes=>prevlikes-1);
  }else{
    setLiked(true);
    setLikes(prevlikes=>prevlikes+1);
  }
}

  return (
    <div>
      <h1>Like Button</h1>
      <button onClick={handleLike}>
        {liked ? "♥" : "♡"} {likes}
      </button>
    </div>
  )
}

export default App;
