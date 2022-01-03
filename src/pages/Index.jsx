import { Box, Container } from "@material-ui/core"
import { useEffect, useState } from "react";

import { AiFillDelete } from 'react-icons/ai';

//components
import Header from "../components/Header"
import Card from "../components/Card"
import Ranked from "../components/Ranked";
import OnTopIsTheTrending from "../components/OnTopIsDeTrending";
import SlideShow from '../components/SlideShow'

import CardRate from "../components/CardRate";

import { numberdb } from "../data/numberdb";

import CardReading from "../components/CardReading";
import TableIndex from '../components/TableIndex'

//svg
import medal from '../image/medal-svgrepo-com.svg'

//API
import NovelServices from '../services/NovelServices'

//Store
import store from '../stateManamagements/store'
import { getAllNovels } from '../stateManamagements/actions'

import {getAllChapNovel} from '../services/NovelServices'
import { useHistory } from "react-router";
import { FaWindowMinimize } from "react-icons/fa";
import { useSelector } from "react-redux";




export default function Index(){

    
    const [listNovels, setListNovels] = useState([])



    const [listNovels2, setListNovels2] = useState([])

    const [listChaps, setListChaps] = useState([])

    const [lstReading, setLstReading] = useState([])


    const lstNumber = numberdb

    const checkStore = useSelector(state => state.lstReading4)
    console.log("checkStore",checkStore.map(item=>item.id))

    //Call API 
    useEffect(()=> {
        getNovels();
        getChap();
        getNovelByChapsId();
    
    },[])

    
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

    console.log('listCallAPI',listNovels)

    //list chap

    let list3 = [];
    const getChap = () => {
        NovelServices.getAllChapNovel()
        .then((response) =>{       
            store.dispatch(getAllNovels(response))      
            list3 = response;  
            console.log('res:', response)
            setListChaps(list3)
        })
        .catch( (error) => console.log(error))
    }
    console.log('lstChap:',listChaps) 
    // End call API

    //appoint
    const lstAppoint = listNovels.filter((item,index) => item.appoint === 'true' && index <= 8)
    console.log("lstAppoint",lstAppoint)



    
    
    //Candy
    const lstCandy = listNovels.map(item => item.candy)
    const lstCandySort = lstCandy.sort((a,b) => b - a)

    let arr = []
    for( let i = 1; i<10; i++){
        arr.push(listNovels.filter(item => item.candy  === lstCandySort[i]))
      
    }

    const TopCandy = listNovels.filter(item => item.candy  === lstCandySort[0])

    //Popular
    const lstPop = listNovels.map(item => item.popular)
    const lstPopSort = lstPop.sort((a,b) => b - a)

    let arr1 = []
    for( let i = 1; i<10; i++){
        arr1.push(listNovels.filter(item => item.popular  === lstPopSort[i]))
    }

    const TopPopular = listNovels.filter(item => item.popular  === lstPopSort[0])

    //Flower 
    const lstFlower = listNovels.map(item => item.flower)
    const lstFlowerSort = lstFlower.sort((a,b) => b - a)
    
    let arr2 = []
    for( let i = 1; i<10; i++){
        arr2.push(listNovels.filter(item => item.flower  === lstFlowerSort[i]))
    }

    const TopFlower = listNovels.filter(item => item.flower  === lstFlowerSort[0])

    //Rate
    const Rate = listNovels.filter(item => item.rate === '5.00')
    console.log('rate:',Rate)   

    //Nhan ID 
   
    let pars = [];
    const OnId = (id) => { 
        
        let par = listNovels.find(item => item.id === id)
        pars = par;
        setListNovels2(pars)
        console.log("id can tim,", id)
   
    }



    //Show chap dang doc
    const idReading = sessionStorage.getItem("idChaps")
    const idChapReading = sessionStorage.getItem("idChapsNeedToFind")
    
    let list4 = [];
    const getNovelByChapsId= () => {
        NovelServices.getNovelById(idReading)
        .then((response) =>{          
            list4 = response;  
            console.log('res:', response)
            setLstReading(list4)
        })
        .catch( (error) => console.log(error))
    }
    console.log('lstReading:',lstReading)

    console.log('lstNovel2',listNovels2)

    //lay link chap dang doc
   const history =  useHistory()
    const linkChapReading = (id) => {
        if ( typeof(Storage) !== 'undefined') {
            history.push(`/chap/${id}`)
        }
       
    }

  
    // lay ten chap vua doc 
    const nameChapReading = listChaps.filter( item => item.id === Number(idChapReading) )
    console.log("nameChapReading",nameChapReading)
    const nameChaps = nameChapReading.map(item => item.nameChap)
    console.log("nameChaps",nameChaps)

  
    //GetNovelById;
       const getNovel = (id) => {
        history.push(`/details/${id}`)
     }


     //xu ly mang co phan tu bi trung 
     function deduplicate(arr) {
        let isExist = (arr, x) => {
            for(let i = 0; i < arr.length; i++) {
              if (arr[i] === x) return true;
            }
            return false;
          }
        
          let ans = [];
          arr.forEach(element => {
            if(!isExist(ans, element)) ans.push(element);
          });
          return ans;
    }

    let anss = deduplicate(checkStore);

    console.log("ans",anss);

    return <>
        <Header/>
        <div className="index">
            <Container fixed>
                <section id="appoint">
                    <div className="appoint1" >
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <div className="appoint-left">
                                <div className="left-title">
                                    <h4>Biên tập viên đề cử</h4>
                                    <span>Xem tất cả</span>
                                 
                                </div>
                                <div className="row">
                                    <Box display='flex' flexWrap='wrap'>
                                        {
                                            lstAppoint.map(item => <Card 
                                            id = {item.id}
                                            img={item.img}
                                            nameTruyen={item.nameTruyen}
                                            intro={item.intro}
                                            author={item.author}
                                            tag={item.tag}  
                                                                
                                            />)                                         
                                        }                
                                    </Box>                        
                                </div>
                            </div>
                            <div className="appoint-right">
                                <div className="title-right">
                                    <h3>Đang đọc</h3>
                                </div>
                                <div className="lstReading" >
                                    <ul className="lstRead" style={ sessionStorage.length !== 0 ? {display:"block"} :{display:"none"} }>
                                        <div className="chapReading">
                                                <div className="flex-reading">
                                                {
                                                   
                                                   anss.map(item => <li><CardReading name={item.nameTruyen} img={item.img} idd={item.id}/></li>)
                                                
                                                } 
                                                 
                                                </div>
                                          
                                        </div>        
                                      
                                 
                                        <div className="cardReading">
                                            
                                        </div>
                                    </ul>
                                    <ul  className="lstRead2" style={ sessionStorage.length !== 0 ? {display:"none"} :{display:"block"} }>
                                        {
                                            listNovels.map( (item,index) => {if (index <= 4) return <li><CardReading name={item.nameTruyen} img={item.img} idd={item.id}/></li>})
                                        }
                                    </ul>
                                   
                                </div>
                                <hr></hr>
                                <div className="guide">
                                    <div className="guild-title">
                                        <h3>Hướng dẫn</h3>
                                    </div>
                                    <div className="lstGuild">
                                        <ul>
                                            <li><a href="#">Làm sao đổi màu nền, phông chữ</a></li>
                                            <li><a href="#">Hoa là gì và dùng để làm gì?</a></li>
                                            <li><a href="#">làm sao để có Hoa?</a></li>
                                            <li><a href="#">Hoa tồn tại bao lâu?</a></li>
                                            <li><a href="#">Quy định khi tặng hoa</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Box>
                    </div>
                </section>

                {/*NEW UPDATE*/}
                <section id="update">
                    <div className="update-container">
                        <div className="update-title">
                            <h3>Mới cập nhật</h3>
                            <span>Xem tất cả</span>
                        </div>
                        <div className="update-table">
                            <TableIndex/>
                        </div>
                    </div>
                </section>
                {/* RANKED */}
                <div className="rank-mvp">
                    {/* rank week*/}
                    <div className="ranked">
                        <div className="rank-mvp-1">
                            <section id="rank-week">
                                <div className="rank-title">
                                    <h3>Nhận thưởng tuần</h3>
                                    <span>Xem thêm</span>
                                </div>   
                                <div className="listTruyen">
                                    <ul className="TopCandy">
                                        {
                                            TopCandy.map((item,index) => <li style={{display:'flex'}}> <img className="medal" src={medal} alt="" />  <OnTopIsTheTrending idd={item.id} nameTruyen={item.nameTruyen} author={item.author} tag ={item.tag} img={item.img} flower={item.candy} sendId={'1'}/></li>)
                                        }
                                    </ul>
                                    <ul className="lst2">
                                        {
                                           
                                            arr.map((item,index) => <li onClick={() => getNovel(item.map(pars => pars.id))} style={{display:'flex'}}><span>{lstNumber.filter(pars => pars === index+2 )}</span><Ranked nameTruyen={item.map(pars => pars.nameTruyen)} value={item.map(pars => pars.candy)}/></li>)
                                        }
                                    </ul>
                                </div>
                            </section>
                        </div>            
                    </div>
                     {/* rank week*/}
                     <div className="ranked">
                        <div className="rank-mvp-1">
                            <section id="rank-week">
                                <div className="rank-title">
                                    <h3>Thịnh hành tuần</h3>
                                    <span>Xem thêm</span>
                                </div>   
                                <div className="listTruyen">
                                     <ul className="TopPopular">
                                        {
                                            TopPopular.map((item,index) => <li style={{display:'flex'}}> <img className="medal" src={medal} alt="" /> <OnTopIsTheTrending idd={item.id} nameTruyen={item.nameTruyen} author={item.author} tag ={item.tag} img={item.img} flower={item.flower} sendId={'2'} /></li> )
                                            
                                        }
                                    </ul>
                                    <ul className='lst2'>
                                        {
                                            arr1.map((item,index) => <li onClick={() => getNovel(item.map(pars => pars.id))} style={{display:'flex'}}><span>{lstNumber.filter(pars => pars === index+2 )}</span><Ranked nameTruyen={item.map(pars => pars.nameTruyen)} value={item.map(pars => pars.popular)}/></li>)
                                        }
                                    </ul>
                                </div>
                            </section>
                        </div>            
                    </div>
                     {/* rank week*/}
                     <div className="ranked">
                        <div className="rank-mvp-1">
                            <section id="rank-week">
                                <div className="rank-title">
                                    <h3>Đề cử tuần</h3>
                                    <span>Xem thêm</span>
                                </div>   
                                <div className="listTruyen">
                                    <ul className="TopFlower">
                                        
                                        {
                                            TopFlower.map((item,index) => <li style={{display:'flex'}}><img className="medal" src={medal} alt="" /> <OnTopIsTheTrending idd={item.id} nameTruyen={item.nameTruyen} author={item.author} tag ={item.tag} img={item.img} flower={item.flower} sendId={'3'}/></li>)
                                        }
                                    </ul>
                                    <ul className='lst2'>
                                        {                                            
                                             arr2.map((item,index) => <li onClick={() => getNovel(item.map(pars => pars.id))} style={{display:'flex'}}><span>{lstNumber.filter(pars => pars === index+2 )}</span><Ranked nameTruyen={item.map(pars => pars.nameTruyen)} value={item.map(pars => pars.flower)}/></li>)
                                        }
                                    </ul>
                                </div>
                            </section>
                        </div>            
                    </div>
                </div>    
                {/****************** RATE *******************/}
                <section id="rate-comments">
                    <div className="rate-left">
                        <div className="rank-title">
                            <h3>Đánh giá cao</h3>
                            <span><a href="#">Xem thêm</a> </span>
                        </div>
                        <ul className="lst-rate">
                            {
                                Rate.map(item => <li><CardRate id={item.id} nameTruyen={item.nameTruyen} img={item.img} rate={item.rate} intro = {item.intro} author= {item.author} tag= {item.tag} /></li>)
                            }
                        </ul>
                    </div>
                    <div className="rate-right">
                        <div className="right">
                            <h3>Mới đánh giá</h3>
                            <span><a href="#"></a> Xem thêm </span>
                        </div>
                    </div>
                </section>        
                 {/****************** RATE *******************/}
                 <section id="rate-comments" className="sectionNew">
                    <div className="rate-right">
                            <div className="right">
                                <h3>Mới đăng </h3>
                                <span><a href="#"></a> Xem thêm </span>
                            </div>
                            <div>
                                {
                                   <SlideShow  sendID={ (value) => OnId(value)}/>                 
                                }   
                                <div>
                                <p className="pTenTruyen">{listNovels2.nameTruyen}</p>
                                <p className="pIntro">{listNovels2.intro}</p>
                                <p className="pAuthor">{listNovels2.author}</p>
                                <p className="pTag">{listNovels2.tag}</p>
                                    
                                </div>                
                            </div>

                            
                    </div>
                    <div className="rate-left">
                        <div className="rank-title">
                            <h3>Mới hoàn thành</h3>
                            <span><a href="#">Xem thêm</a> </span>
                        </div>
                        <ul className="lst-rate">
                            {
                                Rate.map(item => <li><CardRate nameTruyen={item.nameTruyen} img={item.img} rate={item.rate} intro = {item.intro} author= {item.author} tag= {item.tag} /></li>)
                            }
                        </ul>
                    </div>
                  
                </section>        
            </Container>
        </div>
    </>
}