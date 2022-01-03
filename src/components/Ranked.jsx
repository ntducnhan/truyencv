export default function Ranked({nameTruyen, value}){
    return<>
        <div className="Tname">
            <a href="#"><span className='nameT'> {nameTruyen}</span></a>
            <a href="#"><span className='value'>{value}</span></a> 
        </div>
      
        
    </>
}