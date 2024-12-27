import axios from "axios";
import { useEffect, useState } from "react";
import { API_Key, Vedio_API } from "../Constants/youtube";
import Vediocart from "./Vediocart";
import { Link } from "react-router-dom";

const Vediocontainer = () => {

    const[vedio,setvedio]=useState([])

    const fetchVedios= async ()=>{
        //fetching home section vedios upto 50/100
        try {
            const res= await axios.get(Vedio_API+API_Key)
            // console.log(res)
            setvedio(res?.data?.items)
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
          fetchVedios()
    },[])

    return (
      <div className="h-screen overflow-y-auto  ">
        {
            vedio.map((items)=>{
               console.log(items.snippet.channelId)
                return(
                    <Link key={items.id} to={`/watch?v=${items.id}`}>

                    <Vediocart  item={items}/>
                    </Link>
                )
            })

        }

      </div>
    );
  };
  
  export default Vediocontainer;