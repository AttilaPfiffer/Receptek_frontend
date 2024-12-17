import React from 'react'
import TablazatReceptek from './TablazatReceptek.js'

export default function SorRecept(props) {
  return (
    <div>
        {
            props.receptLista.map(recept=>{
                return(<TablazatReceptek recept={recept} key={recept.id}/>
                )
            })
        }
    </div>
  )
}