
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import NovelServices from "../services/NovelServices"
import { addNovelReading2 } from "../stateManamagements/actions";
import store from "../stateManamagements/store";

export default function ListChaps({idChaps}){
    
   const [chap, setChap ] = useState([])

   const history =  useHistory()
  
   const lstChapByIdNovel = chap.filter(item => item.idNovels === idChaps)
   console.log("lstChapByIdNovel",lstChapByIdNovel)




   //GetNovelById;
      const sendIddd = (id) => {
       history.push(`/chap/${id}`)
       const idCanTim = lstChapByIdNovel.filter(item => item.id === id)

       console.log("idCanTim",idCanTim)
       sessionStorage.setItem("idChaps",Number(idCanTim.map((item) => item.idNovels )))
       sessionStorage.setItem("idChapsNeedToFind",Number(idCanTim.map(item => item.id )))

       store.dispatch(addNovelReading2(findNovel))

    }

    //lay danh sach tat ca truyen
    const lstNovel = useSelector( state => state.novels)
    
    //tim truyen theo id
    const findNovel = lstNovel.find(item => item.id ===idChaps)



    useEffect( () => {
        NovelServices.getAllChapNovel().then( response => {
            console.log("lst chap", response)
            setChap(response)
        });
        
        
        
    },[])
    console.log("lst,chap:",chap)


  

    return <>
        <h1>Danh sách chương</h1>
        <div className="lstChaps">
            <ul>
            {
                lstChapByIdNovel.map(item => <li className="lstNameChap" onClick={() => sendIddd(item.id)}>{item.nameChap}</li>)
            }
            </ul>
        </div>
    </>
}