import React from "react";

function NotFound(){
  return <div className="flex  grow bg-[url('')] bg-cover">
    
    <div className="grow basis-1 flex-col"> 

      <div className=" flex justify-end">
      <img src="https://seeklogo.com/images/B/bored-ape-nft-logo-0336141711-seeklogo.com.png" className ="object-fill w-48 self-end" /> 
      </div>
    
      <div className="flex ">
      <img src="https://static.wixstatic.com/media/03667d_03690c33b0a84fdb8a9ceb24f2458b0b~mv2.png/v1/crop/x_457,y_0,w_733,h_524/fill/w_468,h_334,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/vr%20png.png" className ="object-fill self-end " /> 
      </div>
    
    
    </div>
    
    <div className = "justify-between flex flex-col grow  w-48  ">
    
    <h1 className="text-5xl py-8 self-center "> 404 ERROR Page NOT Found</h1>
  <img src="https://www.pngall.com/wp-content/uploads/13/NFT-Character-PNG-Pic.png" className ="object-contain h-48 self-center  grow-0" />  
  </div>

  <div className="grow basis-1">
    <div>
    </div>
    <div>
    </div>
  </div> 
    
  </div>;
}

export default NotFound;
//https://www.pngall.com/wp-content/uploads/13/NFT-Character-PNG-File.png
//bg-gradient-to-r from-indigo-700 to-blue-700