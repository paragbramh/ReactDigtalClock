import React, { useState } from 'react'




const App=()=>{
  let time = new Date().toLocaleTimeString();

  const [ctime,setCtime] = useState(time);
  const UpdateTime=()=>{
     time = new Date().toLocaleTimeString();
    setCtime(time);
  };

  setInterval(UpdateTime,1000)
  return(
    <>
      <div className="container">
        <div className="child">
         <h1>{ctime}</h1>
         {/* <button onClick={UpdateTime}>get time</button> */}

        </div> 
      
      </div>
    </>
  );  
  }
export default App;