import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { albumsData, assets, songsData } from "../assets/assets";
import { useContext } from "react";
import { PlayerContext } from "../Context/PlayerContext";

function DisplayAlbum(){
     let { id } = useParams();
     let albumData = albumsData[id];
     console.log(albumData);
     const {playWithId} = useContext(PlayerContext)
     return(
          <>
               <Navbar/>
               <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
                    <img src={albumData.image} className="w-48 rounded" />
                    <div className="flex flex-col">
                         <p>Playlist</p>
                         <h2 className="text-4xl font-bold mb-4 md:text-6xl">{albumData.name}</h2>
                         <h4 className="">{albumData.desc}</h4>
                         <p className="mt-1">
                              <img src={assets.spotify_logo} className="inline-block w-5" /> 
                              <b> Spotify</b>
                              • 1,323,154 likes
                              • <b>50 songs,</b>
                              about 2 hr 30 min
                          </p>
                    </div>
               </div>
               <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
                    <p><b className="mr-4 ">#</b>Title</p> 
                    <p>Album</p>
                    <p className="hidden sm:block">Date Added</p>
                    <img src={assets.clock_icon} className="m-auto w-4" />
               </div>
               <hr />
               {songsData.map((item, index)=>{
                    return(
                         <div onClick={()=>{playWithId(item.id)}} key={index} className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer">
                              <p className="text-white flex">
                                   <b className="mr-4 text-[#a7a7a7]">{index+1}</b>
                                   <img src={item.image} className="inine w-10 mr-5" />
                                   {item.name}
                              </p>
                              <p className="text-[15px]">{albumData.name}</p>
                              <p className="text-[15px] hidden sm:block">5 days ago</p>
                              <p className="text-[15px] text-center">{item.duration}</p>
                         </div>
                    )
               })}
          </>
     )
}
export default DisplayAlbum; 