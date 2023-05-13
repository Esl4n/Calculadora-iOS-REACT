export default function Board({valor,setValor}){
    const handleClick = (e) =>{
        setValor(valor.concat(e.target.name))
      }
    
      const clear = () =>{
        setValor("")
      }
    
      const result = () => {
        try{
          setValor(eval(valor.toString()))
        }catch(error){
          setValor("error")
        }
      }
    return(
        <div className='board'>
          <button className='top' onClick={clear} id='clear'>C</button>
          <button className='top'>+/-</button>
          <button className='top' name='%' onClick={handleClick}>%</button>
          <button className='right' name='/' onClick={handleClick}>&divide;</button>
          <button name='7' onClick={handleClick}>7</button>
          <button name='8' onClick={handleClick}>8</button>
          <button name='9' onClick={handleClick}>9</button>
          <button className='right' name='*' onClick={handleClick}>&times;</button>
          <button name='4' onClick={handleClick}>4</button>
          <button name='5' onClick={handleClick}>5</button>
          <button name='6' onClick={handleClick}>6</button>
          <button className='right' name='-' onClick={handleClick}>&ndash;</button>
          <button name='1' onClick={handleClick}>1</button>
          <button name='2' onClick={handleClick}>2</button>
          <button name='3' onClick={handleClick}>3</button>
          <button className='right' name='+' onClick={handleClick}>+</button>
          <button id='cero' name='0' onClick={handleClick}>0</button>
          <button name='.' onClick={handleClick}>.</button>
          <button className='right' onClick={result}>=</button>
        </div>
    )
}