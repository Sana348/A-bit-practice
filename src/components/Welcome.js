import React from 'react'

function Welcome(props) {
    console.log(props)
  return <div> hello,{props.user} from Welcome component</div>
  
}

export default Welcome