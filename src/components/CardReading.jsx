import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useHistory } from "react-router"

export default function CardReading({name, img, idd}){
    const history =  useHistory()
    
    //GetNovelById;
       const getNovel = (id) => {
        history.push(`/details/${id}`)
     }

   
    
     useEffect( () => {
        
     })

    
    return<>
        <div className="reading">
            <img src={img} alt="" />
            <div className="infor">
                <h4><a href="#" onClick={() => getNovel(idd)}>{name}</a></h4>
                
            </div>
        </div>
    </>
}