
import { useEffect, useState } from "react";
import NovelServices from "../services/NovelServices"

import { getAllNovels } from '../stateManamagements/actions'
import store from '../stateManamagements/store'
import RateChap from '../components/RateChap'
import ListChaps from '../components/ListChaps'

import {FcLike, FcCloseUpMode} from "react-icons/fc"
import { useHistory } from "react-router";

import { FaCandyCane } from 'react-icons/fa';

export default function Introducer({sendIdex, indexId}){
    console.log("indexId",indexId.novelId)
    const [listNovels, setListNovels] = useState([])
    const [listChaps, setListChap] = useState([])
  
    useEffect( () => {
        getNovels();
        getChaps();
    },[])

    
    
   const history =  useHistory()
  
   //GetNovelById;
      const sendIddd = (id) => {
       history.push(`/chap/${id}`)
    }


    let list2 = [];
    const getNovels = () => {
        NovelServices.getAllNovel()
        .then((response) =>{       
            store.dispatch(getAllNovels(response))
            list2 = response;  
            console.log('res:', response)
            setListNovels(list2)
        })
        .catch( (error) => console.log(error))
    } 
    const lstNameTruyen = listNovels.filter(item => item.id === Number(indexId.novelId))
    const intro = lstNameTruyen.map(item => item.intro)
    let candy = lstNameTruyen.map(item => item.candy)
    
    let list3 = [];
    const getChaps = () => {
        NovelServices.getAllChapNovel()
        .then((response) =>{       
            list3 = response;  
            console.log('res:', response)
            setListChap(list3)
        })
        .catch( (error) => console.log(error))
    }

    const lstChap =  listChaps.filter(item => item.idNovels === Number(indexId.novelId))
    console.log("lstChap", lstChap)
    const lstIdChap = lstChap.map(item => item.id)
    const maxId = Math.max.apply(Math, lstIdChap); 
    console.log("maxId", maxId)
    
    const NewestChaps = listChaps.filter(item => item.id === maxId)
    console.log("new chap?:", NewestChaps.map(item => item.nameChap))
    const Idd =   NewestChaps.map(item => item.id)

    const onIndex = () => {
        console.log(sendIdex)
        switch (sendIdex) {
            case 1: return <div className="bottoom-detail">
                                 <p>{intro}</p>
                                 <ul className="lst-Intro">
                                     <li><span style={{fontWeight:"600"}}>Cảm xúc</span>
                                       <span style={{paddingLeft: "5%"}}><FcLike/> 1234</span>
                                       <span style={{paddingLeft: "5%"}}><FaCandyCane/> {candy}</span>
                                    </li>
                                     <li> <span style={{fontWeight:"600"}}>Đề cử </span> <span style={{paddingLeft: "5%"}}><FcCloseUpMode/>1234</span></li>
                                     <li style={{borderBottom: "1px solid #eee"}}> <span style={{fontWeight:"600"}}>Chương mới</span><span className="nameChuong" onClick={()=> sendIddd(Idd)} style={{marginLeft: "5%", cursor:"pointer"}}>{NewestChaps.map(item => item.nameChap)}</span></li>
                                 </ul>
                           </div>                  
  
            case 2: return <RateChap/>
     
            case 3: return <ListChaps idChaps={Number(indexId.novelId)}/>           
  
            case 4: console.log("4")            
                break;
            case 5: console.log("5")         
                break;
            default: console.log("fail")
                break;
        }
    }
    return <>
    
           <div className="introducer">
               {
                   onIndex()
               }
           </div>
    </>
}