import Header from "../components/Header";
import store from '../stateManamagements/store'
import { addNovelReading } from '../stateManamagements/actions'
import { getAllNovels } from '../stateManamagements/actions'
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Card } from "@material-ui/core";
import { useHistory } from "react-router";



export default function Account(){
    const history = useHistory()

    const truyen = useSelector( state => state.lstReading)
    console.log("truyen123", truyen.map(item => item))

  


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

    let anss = deduplicate(truyen);

    console.log("ans",anss);

    useEffect( () => {
         
      
    })

    const sendToDetail = (id) => {
        //GetNovelById;
     
      history.push(`/details/${id}`)

}
    return <>
       <Header/>
       <div className="danhdau">
            <div className="danhdau-left">
                <h4>Truyện đánh dấu</h4>
                <ul>
                     {
                         anss.map(item => <li>
                           <div className="img-acc" onClick={() => sendToDetail(item.id)}>
                              <img src={item.img} alt="" />
                           </div>
                            {item.nameTruyen}
                         </li>)
                     }
                </ul>
            </div>
            <div className="danhdau-right">
            <h4>Chat chít</h4>
            </div>
       </div>
    </>
}