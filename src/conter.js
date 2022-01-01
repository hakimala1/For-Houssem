import React from 'react'
import{ useDispatch, useSelector} from 'react-redux'
import{incrument} from './action'


function Conter() {
const  dispatch = useDispatch()
const x  = useSelector(state =>state.count )

    return (
        <div>
     <button onClick={()=>dispatch(incrument())}  >+ </button>
     <span>{x} </span>
     <button> - </button>
        </div>
    )
}

export default Conter ;
