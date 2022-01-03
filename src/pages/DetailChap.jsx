import { Container } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router"
import Header from "../components/Header";
import NovelServices from "../services/NovelServices"
import { addNovelReading2, getAllNovels } from "../stateManamagements/actions";
import store from "../stateManamagements/store";

export default function DetailChap(){
    const history = useHistory()

    const [lstChap, setLstChap] = useState([])


    const params = useParams();
    console.log(params.chapId)


    const findItem = lstChap.filter(item => item.id === Number(params.chapId))
    console.log("content",findItem.map(item => item.content))


    useEffect( () => {
        //lay tat ca cac chuong truyen
        NovelServices.getAllChapNovel().then( response => {
            console.log("lst chap", response)
            setLstChap(response)
        });

      
    },[])

    const allTruyen = useSelector(state => state.novels)
    console.log("allTruyen",allTruyen)
    
    const idChap = findItem.map(item => item.idNovels)
    console.log("idNovel", idChap)
    const chaps = lstChap.filter(item => item.idNovels === Number(idChap))
    console.log("chaps",chaps)

    
    
    const nextchap = (status) => {
     
        status ? history.push(`/chap/${(Number(params.chapId) +1)}`) : history.push(`/chap/${(Number(params.chapId) -1)}`)
        if((Number(params.chapId) +1 > chaps.length)) {
            history.push(`/details/${Number(idChap)}`)
        }

       
     }


    return <>
    <Header/>   
         <div className="main">
             <div className="content">
                <Container >
                        <div className="btn-lr">
                            <button style={Number(params.chapId) -1 < 1 ? {display:"none"} : {display:"block"}} onClick={() => nextchap(false) }>Chương Trước</button>
                            <button  onClick={() => nextchap(true) }>Chương Sau</button>
                        </div>
                        <h3>
                            {
                                findItem.map(item => item.nameChap)
                            }
                        </h3>
                        <p>
                            {
                                findItem.map(item => item.content)
                            }
                        </p>
                </Container>
             </div>
         </div>
    </>
}