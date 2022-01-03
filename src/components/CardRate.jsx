import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import { useHistory } from 'react-router';

export default function CardRate({nameTruyen, img, rate, intro, author,tag,id}) {

    const history =  useHistory()
  
    //GetNovelById;
       const getNovel = (id) => {
        history.push(`/details/${id}`)
     }
    return <>
    <div className="rate">
        <div className="img-rate">
            <img src={img} alt="#" />
            </div>
        <div className="info-rate">
                <h5 onClick={() => getNovel(id)}>{nameTruyen}</h5>
                <div className="span2">
                    <span>{rate}</span>
                </div>
                <span className='intro'>{intro}</span>
                <div className="bottom-rate">
                    <span className="bt-author"><PermIdentityIcon style={{ fontSize: 20 }}/>{author}</span>
                    <span className="bt-tag">{tag}</span>
                </div>
        </div>
    </div>
       
    </>
}