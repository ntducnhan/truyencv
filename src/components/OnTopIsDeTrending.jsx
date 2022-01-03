import { FaCreativeCommonsBy } from "react-icons/fa";
import { FcCloseUpMode, FcDebian } from "react-icons/fc";
import { RiBook2Line } from "react-icons/ri";
import { FiArrowUpCircle } from "react-icons/fi";
import { orange } from "@material-ui/core/colors";
import { useHistory } from "react-router";



export default function OnTopIsTheTrending({nameTruyen, author, tag, img, flower, sendId, idd}){

    const history =  useHistory()
  
    //GetNovelById;
       const getNovel = (id) => {
        history.push(`/details/${id}`)
     }

    const findId = (id) => {
        if( id === '1'){
            return  <FcDebian/>
        } else if (id === '2'){
            return <FiArrowUpCircle style={{color: 'orange'}}/>
        } else {
            return <FcCloseUpMode/>
        }
    } 
    return <>

        <div className="infor-flower">
            <div className="flower">
                <div className="nameT">
                    <span onClick={() => getNovel(idd)}>{nameTruyen}</span>
                </div>
               
                <div className="candy">
                    <p>{flower}</p>
                     {
                        findId(sendId)
                     }                 
                </div>
               
                <div className="author">
                    <span><FaCreativeCommonsBy/></span>
                <p className='textAuthor'>{author}</p>
                </div>
                <div className="tag">
                    <RiBook2Line/>
                    <p>{tag}</p>
                </div>
               
            </div>
            <div className="img-flower">
                <img src={img} alt="" />
            </div>
         </div>  
        
    </>
}