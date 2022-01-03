import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import NovelServices from '../services/NovelServices'

//UseHistory
import { useHistory } from "react-router";


export default function Card({ nameTruyen, img, author, tag, intro, id}) {
  const history =  useHistory()
  
  //GetNovelById;
     const getNovel = (id) => {
      history.push(`/details/${id}`)
   }

  return <>
    <div className="cardTruyen">
        <div className="avatar">
            <a href="#"><img src={img} alt="" /></a>
        </div>
        <div className="infor">
            <h3><a href="#" onClick={() => getNovel(id)}>{nameTruyen}</a></h3>
            <p>{intro}</p>
            <div className="infor-bottom">
                <span className="spanAuthor"><PermIdentityIcon style={{ fontSize: 20 }}/>{author}</span>
                <span className="hashtag"><a href="#">{tag}</a></span>
            </div>
        </div>
    </div>
  </>

}

