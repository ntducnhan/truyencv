import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';

//API
import NovelServices from '../services/NovelServices'

//Store
import store from '../stateManamagements/store'
import { getAllNovels } from '../stateManamagements/actions'



export default function SlideShow({sendID}){

  let list2 = [];

  const [listNovels, setListNovels] = useState([])

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

  //Call API 
  useEffect(()=> {
    getNovels();
},[])


      return <>
          
          <Coverflow
              width={960}
              height={480} 
              displayQuantityOfSide={2}
              navigation={false}
              enableHeading={false}
              infiniteScroll={true}  
              enableScroll={false}
            >
              {
                listNovels.map(item => <img src={item.img}  alt="#" style={{width:'80px'}} onClick={() => sendID(item.id)} />)
              } 
            </Coverflow>
          
      </>
}

var fn = function () {
  /* do you want */  
}