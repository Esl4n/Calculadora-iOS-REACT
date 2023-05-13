export default function Panel({valor}){
    return(
        <div className='panel'>
          <textarea className='value' rows="3" type="text" size="7" value ={valor}></textarea>
        </div>
    )
}