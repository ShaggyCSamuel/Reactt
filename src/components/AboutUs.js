import React from 'react'

export default function AboutUs(props) {

// const [myStyle,setMyStyle] = useState ({
//             color: 'black',
//             backgroundColor : 'white',        

// })

let myStyle = {
    color : props.mode === 'dark'?'white':'black',
    backgroundColor : props.mode === 'dark'?'black':'white',
    border : '1px solid ',
    borderColor : props.mode=== 'dark'?'white':'black',
}

// const [btnText, setBtnText] = useState( 'Enable Dark Mode')

// const toggleStyle = () =>{
//     if (myStyle.color === 'black'){
//         setMyStyle({
//             color : 'white',
//             backgroundColor : 'black',
//             border : '1px solid white'
//         })
//         setBtnText('Enable Light Mode')
//     }
// else{
//     setMyStyle ({
//         color: 'black',
//         backgroundColor: 'white'
//     })
//     setBtnText('Enable Dark Mode')
// }
// }

  return (
   <div className="container" style={myStyle}>
        <h1 className='my-6'>About US</h1>
            <div className="accordion" id="accordionExample" >
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                Analyze Your Text
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
             <strong>Gives you a way to Analyze your text quickly .</strong>
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle} >
            <h2 className="accordion-header">
            <button className="accordion-button collapsed"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Free To Use 
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                <strong>Free to use counter tools for copying , editing and manupilating your texts in most of the forms.</strong>
            </div>
            </div> 
        </div>
        <div className="accordion-item" >
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Browser Compatible
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            <strong> The word counter software works in any web browsers such as Chrome , Fireforx , Safari , Opera. It suits to count characters in FACEBOOK,BLOG,BOOKS etc.</strong>
            </div>
            </div>
        </div>
        {/* <div className="container my-3">
        <button onClick={toggleStyle} type="button" className="btn  btn-info">{btnText}</button>
        </div> */}
        </div>
        </div>

  )
}

