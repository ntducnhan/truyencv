
import { colors, Container } from "@material-ui/core"
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router"
import Header from "../components/Header"
import Introducer from "../components/Introducer"
import NovelServices from "../services/NovelServices"


import { FaGlasses } from 'react-icons/fa';
import { FaRegBookmark, FaCandyCane } from 'react-icons/fa';
import { FcCloseUpMode } from "react-icons/fc";

import { FcRating } from 'react-icons/fc';


//store
import store from '../stateManamagements/store'
import { addNovelReading, getAllNovels } from '../stateManamagements/actions'
import { useSelector } from "react-redux";
import swal from "sweetalert";

export default function Details(){
    

    const [chap, setChap ] = useState([])

    const [novels, setLstNovels ] = useState([])

    const param = useParams();
    const { novelId } =  param

    const [detail, setDetail] = useState('')

    useEffect( () => {
        NovelServices.getNovelById(novelId).then( response => {
            console.log("getNovelById",response)
            setDetail(response)
        });

        NovelServices.getAllChapNovel().then( response => {
            console.log("lst chap", response)
            setChap(response)
        });

        getNovels();

    },[])
    
    const truyentu = ()  => store.dispatch(addNovelReading(detail))

    
    const lstChapByIdNovel = chap.filter(item => item.idNovels === Number(novelId) )

    //chuong dau tien cua truyen tho
    const firstChap = lstChapByIdNovel.filter((item, index) => index === 0)
    console.log("firstChap",firstChap.map(item=> item.id))
    const idss = firstChap.map(item=> item.id)
    console.log("ids", Number(idss))

    // so chuong truyen theo id
    let sochuong = lstChapByIdNovel.length

    const [Index, setIndex] = useState(1)
    // lay index de hien thi noi dung the div.para
    const sendIndex = (index) => {
        setIndex(index)
     
    }
    console.log("index",Index)

    //dem sao
    const demsao = [<FcRating />,<FcRating />,<FcRating />,<FcRating />]
    const demsao2 = [<FcRating />,<FcRating />,<FcRating />,<FcRating />,<FcRating />]


    const history =  useHistory()
  
    //GetChapById;
    const sendIds = (id) => {
        if(id != 0) {
            history.push(`/chap/${id}`)
        } else {
            swal ( "Oops" ,  "Truyện chưa có chương!" ,  "error" )
        }
       

     }
    
    

   const calStar = () => {

    let rateS = Number(detail.rate)
    console.log("rateS:", rateS )
    switch (rateS) {
        case 4: return demsao.map(item => item)
          
        case 5: return demsao2.map(item => item)
           
        default:
            break;
    }
}

 
    let list2 = [];

    const getNovels = () => {
        NovelServices.getAllNovel()
        .then((response) =>{       
            store.dispatch(getAllNovels(response))
           
            list2 = response;  
            console.log('res:', response)
            setLstNovels(list2)
        })
        .catch( (error) => console.log(error))
    }
    
   const donate = (id) => {
    const candy = novels.map(item => item.id === id ? {...item, candy: item.candy += 11111 } : item)

    const dataCandyUpdate = candy.find(item => item.id === id)
    delete dataCandyUpdate.id

    console.log("dataCandyUpdate",dataCandyUpdate)
    NovelServices.addCanDy(id,dataCandyUpdate).then(response => {
        console.log(response)
    })
  
    setLstNovels(candy)
    swal("Thank You!", "You are so nice!", "success");

    window.location.reload();
    
   }

   const donateDeCu = (id) => {
    const candy = novels.map(item => item.id === id ? {...item, flower: item.flower += 11111 } : item)

    const dataCandyUpdate = candy.find(item => item.id === id)
    delete dataCandyUpdate.id

    console.log("dataCandyUpdate",dataCandyUpdate)
    NovelServices.addCanDy(id,dataCandyUpdate).then(response => {
        console.log(response)
    })
  
    setLstNovels(candy)
    swal("Thank You!", "You are so nice!", "success");

    window.location.reload();
    
   }

    return <>
    <Header/>
     <div className="index">
         
        <Container fixed>
            <section id="appoint">      
               <div className="details">
                    <div className="detail-header">
                        <div className="detail-header-left">
                            <img src={detail.img} alt="" />
                        </div>
                        <div className="detail-header-right">
                            <h3>{detail.nameTruyen}</h3>
                            <div className="d-flex">
                                <span>{detail.author}</span>
                                <p>{detail.tag}</p>
                            </div>
                            <p className="totalChaps"> <p style={{margin:0,}}><strong>{sochuong}</strong></p>chương</p>
                            <p>{calStar()}</p>
                            <div className="right-button">
                                <ul className="lst-btn-detail">
                                    <li style={{borderColor:'red'}}><a className="btn1" onClick={() => sendIds(idss)} ><FaGlasses style={{marginRight:'5%', fontSize:'25px'}}/> Đọc truyện</a></li>
                                    <li className="li-2"><a className="btn2" onClick={() => truyentu()}><FaRegBookmark style={{marginRight:'5%', fontSize:'25px'}}/>Đánh dấu</a></li>
                                    <li  onClick={() => donateDeCu(detail.id)} style={{borderColor:'#b78a28'}}><a className="btn3"><FcCloseUpMode style={{marginRight:'5%', fontSize:'25px'}}/> Đề cử</a></li>
                                    <li onClick={() => donate(detail.id)} style={{borderColor:'#b78a28'}}><a className="btn4"><FaCandyCane style={{marginRight:'5%', fontSize:'25px', color:'red'}}/> Tặng kẹo</a></li>
                                </ul>                                                                          
                            </div>
                        </div>
                    </div>

                    {/* body header */}
                    <div className="lst-menu">
                        <ul className="ul-menu">
                            <li className="introducer" onClick={() => sendIndex(1)}> <a>Giới thiệu</a> </li>
                            <li className="rate1" onClick={() => sendIndex(2)}>Đánh giá</li>
                            <li className="list-chap" onClick={() => sendIndex(3)} >D.S chương({sochuong})</li>
                            <li className="comments" style={{textAlign:"center"}} onClick={() => sendIndex(4)}>Bình luận</li>
                            <li className="fans" style={{textAlign:"center"}}  onClick={() => sendIndex(5)}>Hâm mộ</li>
                        </ul>
                        <div className="para">
                            <Introducer sendIdex={Index} indexId={param}/>
                        </div>
                    </div>
               </div>
            </section>
        </Container>
     </div>
        
    </>
}