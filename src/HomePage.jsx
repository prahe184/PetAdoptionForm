import {useState} from "react";
export function HomePage() {

    return (
        <div>
            <Navbar/>
            <br/>
            <br/>
            <Card/>
        </div>
    )
}

export function Navbar() {
    return <div style={{backgroundColor:"rgba(224, 175, 183,0.5)",height:70, width:"full"}}>
        <div style={{display:"flex", justifyContent:"center",fontSize:25,color:"#5b4c36",paddingTop:17}}> 
            Pet Adoption Form
        </div>
        
    </div>
}

export function Card() {
   
    const [inputOne,setInputOne] = useState("");
     const [addValues, setAddValues] = useState([]);

    const [inputtwo,setInputTwo] = useState("");
    const [addValues2, setAddValues2] = useState([]);


    const [inputthree,setInputThree] = useState("");
    const [addValues3, setAddValues3] = useState([]);


    const [inputfour,setInputFour] = useState("");
    const [addValues4, setAddValues4] = useState([]);


    const [inputfive,setInputFive] = useState("");
    const [addValues5, setAddValues5] = useState([]);


    const [inputsix,setInputSix] = useState("");
    const [addValues6, setAddValues6] = useState([]);


    function onButtonClick() {
        setAddValues([...addValues,inputOne]);
        setAddValues2([...addValues2,inputtwo]);
        setAddValues3([...addValues3,inputthree]);
        setAddValues4([...addValues4,inputfour]);
        setAddValues5([...addValues5,inputfive]);
        setAddValues6([...addValues6,inputsix]);
        setInputOne("");
        setInputTwo("");
        setInputThree("");
        setInputFour("");
        setInputFive("");
        setInputSix("");
    }

    const items1 = addValues.map((addValue,index) => {
        return (
                <div>
                    <span key={index}>{addValue}</span>
                </div>
                );
            }
            )
    const items2 = addValues2.map((addValue2,index) => {
        return (
                <div>
                    <span key={index}>{addValue2}</span>
                </div>
                );
            }
            )
    const items3 = addValues3.map((addValue3,index) => {
        return (
                <div>
                    <span key={index}>{addValue3}</span>
                </div>
                );
            }
            )
    const items4 = addValues4.map((addValue4,index) => {
        return (
                <div>
                    <span key={index}>{addValue4}</span>
                </div>
                );
            }
            )
    const items5 = addValues5.map((addValue5,index) => {
        return (
                <div>
                    <span key={index}>{addValue5}</span>
                </div>
                );
            }
            )
    const items6 = addValues6.map((addValue6,index) => {
        return (
                <div>
                    <span key={index}>{addValue6}</span>
                </div>
                );
            }
            )


    return <div>
        <div style={{backgroundColor:"rgba(224, 175, 183,0.5)",height:650,width:500,
     marginLeft:550, marginRight:550,borderRadius:4, boxShadow:" rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px"
    }}>
         <div style={{paddingLeft:20,paddingRight:20,paddingTop:30}}>
        <div style={{color:"#5d2b2a", fontSize:22,fontFamily:"sans-serif",paddingBottom:10}}>Pet Name </div>
        <div>
            <input style={{paddingTop:8,paddingBottom:8,paddingLeft:10,paddingRight:200,fontSize:20,borderRadius:4,fontFamily:"sans-serif",}} 
            type="text" 
            placeholder="Pet Name"
            value={inputOne} 
            onChange={function handleChange(event) {
                setInputOne(event.target.value);
                }}/>
        </div>
        <div style={{color:"#5d2b2a", fontSize:22,fontFamily:"sans-serif",paddingBottom:10,paddingTop:10}}>Pet Type</div>
        <div>
            <input style={{paddingTop:8,paddingBottom:8,paddingLeft:10,paddingRight:200,fontSize:20,borderRadius:4,fontFamily:"sans-serif",}} 
            type="text" 
            placeholder="Pet Type"
            value={inputtwo} 
            onChange={function handleChange(event) {
                setInputTwo(event.target.value);
                }}/>
        </div>
        <div style={{color:"#5d2b2a", fontSize:22,fontFamily:"sans-serif",paddingBottom:10,paddingTop:10}}>Bread</div>
        <div>
            <input style={{paddingTop:8,paddingBottom:8,paddingLeft:10,paddingRight:200,fontSize:20,borderRadius:4,fontFamily:"sans-serif",}}
            type="text" 
            placeholder="Breed"value={inputthree} 
            onChange={function handleChange(event) {
                setInputThree(event.target.value);
                }}/>
        </div>
        <div>
        <div style={{color:"#5d2b2a", fontSize:22,fontFamily:"sans-serif",paddingBottom:10,paddingTop:10}}>Your Name</div>
            <input style={{paddingTop:8,paddingBottom:8,paddingLeft:10,paddingRight:200,fontSize:20,borderRadius:4,fontFamily:"sans-serif",}}
            type="text"
             placeholder="Your Name"
             value={inputfour}
              onChange={function handleChange(event) {
                setInputFour(event.target.value);
                }}/>
        </div>
        <div style={{color:"#5d2b2a", fontSize:22,fontFamily:"sans-serif",paddingBottom:10,paddingTop:10}}> Email </div>
        <div>
            <input style={{paddingTop:8,paddingBottom:8,paddingLeft:10,paddingRight:200,fontSize:20,borderRadius:4,fontFamily:"sans-serif",}}
            type="text" 
            placeholder="Email" 
            value={inputfive} 
            onChange={function handleChange(event) {
                setInputFive(event.target.value);
                }}/>
        </div>
        <div style={{color:"#5d2b2a", fontSize:22,fontFamily:"sans-serif",paddingBottom:10,paddingTop:10}}> Phone </div>
        <div>
            <input style={{paddingTop:8,paddingBottom:8,paddingLeft:10,paddingRight:200,fontSize:20,borderRadius:4,fontFamily:"sans-serif",}}
             type="text"
             placeholder="Phone" 
             value={inputsix} 
             onChange={function handleChange(event) {
                setInputSix(event.target.value);
                }}/>
        </div>
        <br/>
        <button onClick={onButtonClick} 
        style={{borderRadius:5,marginTop:10,paddingLeft:195,paddingRight:198,paddingTop:10,paddingBottom:10,fontSize:18,color:"#5d2b2a",backgroundColor:"#f493d4",}}>
            Submit
        </button>
        </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <div style={{display:"flex",justifyContent:"center"}}>
        <div>
        <div style={{backgroundColor:"rgba(224, 175, 183,0.5)",
            boxShadow:" rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px",
            alignItems:"center",
            fontSize:20,
            fontFamily:"sans-serif",
            borderRadius:2,
            paddingLeft:50,
             paddingRight:50,
             paddingTop:5,
             paddingBottom:5
        }}>Pet Name</div>
        <div style={{backgroundColor:"rgba(224, 175, 183,0.5)",
            boxShadow:" rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px",
            alignItems:"center",
            fontSize:20,
            fontFamily:"sans-serif",
            borderRadius:2,
            paddingLeft:50,
             paddingRight:50,
             paddingTop:5,
             paddingBottom:5
        }}> {items1} </div>
        </div>
        <div>
            <div style={{backgroundColor:"rgba(224, 175, 183,0.5)",
            boxShadow:" rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px",
            alignItems:"center",
            fontSize:20,
            fontFamily:"sans-serif",
            borderRadius:2,
             paddingLeft:50,
             paddingRight:50,
             paddingTop:5,
             paddingBottom:5
        }}>Pet Type</div>
            <div style={{backgroundColor:"rgba(224, 175, 183,0.5)",
            boxShadow:" rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px",
            alignItems:"center",
             fontSize:20,
            fontFamily:"sans-serif",
            borderRadius:2,
            paddingLeft:50,
             paddingRight:50,
             paddingTop:5,
             paddingBottom:5
        }}>{items2}</div>
        </div>
        <div>
            <div style={{backgroundColor:"rgba(224, 175, 183,0.5)",
            boxShadow:" rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px",
            alignItems:"center",
            fontSize:20,
            fontFamily:"sans-serif",
            borderRadius:2,
             paddingLeft:50,
             paddingRight:50,
             paddingTop:5,
             paddingBottom:5
        }}>Breed</div>
            <div style={{backgroundColor:"rgba(224, 175, 183,0.5)",
            boxShadow:" rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px",
            alignItems:"center",
            fontSize:20,
            fontFamily:"sans-serif",
            paddingLeft:50,
             paddingRight:50,
             paddingTop:5,
             paddingBottom:5
        }}>{items3}</div>
        </div>
        <div>  
            <div style={{backgroundColor:"rgba(224, 175, 183,0.5)",
            boxShadow:" rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px",
            alignItems:"center",
             fontSize:20,
            fontFamily:"sans-serif",
            borderRadius:2,
            paddingLeft:50,
             paddingRight:50,
             paddingTop:5,
             paddingBottom:5
        }}>Adopter Name</div>        
            <div style={{backgroundColor:"rgba(224, 175, 183,0.5)",
            boxShadow:" rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px",
            alignItems:"center",
            fontSize:20,
            fontFamily:"sans-serif",
            borderRadius:2,
            paddingLeft:50,
             paddingRight:50,
             paddingTop:5,
             paddingBottom:5
        }}>{items4}</div>
        </div>
        <div>
            <div style={{backgroundColor:"rgba(224, 175, 183,0.5)",
            boxShadow:" rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px",
            alignItems:"center",
             fontSize:20,
            fontFamily:"sans-serif",
            borderRadius:2,
            paddingLeft:50,
             paddingRight:50,
             paddingTop:5,
             paddingBottom:5
        }}>Email</div>
            <div style={{backgroundColor:"rgba(207, 187, 190, 0.5)",
            boxShadow:" rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px",
            alignItems:"center",
             fontSize:20,
            fontFamily:"sans-serif",
            borderRadius:2,
            paddingLeft:50,
             paddingRight:50,
             paddingTop:5,
             paddingBottom:5
        }}>{items5}</div>
        </div>
        <div>
            <div style={{backgroundColor:"rgba(224, 175, 183,0.5)",
            boxShadow:" rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px",
            alignItems:"center",
             fontSize:20,
            fontFamily:"sans-serif",
            borderRadius:2, 
            paddingLeft:50,
             paddingRight:50,
             paddingTop:5,
             paddingBottom:5
        }} >Phone</div>
            <div style={{backgroundColor:"rgba(224, 175, 183,0.5)",
            boxShadow:" rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px",
            alignItems:"center",
            fontSize:20,
            fontFamily:"sans-serif",
            borderRadius:2, 
            paddingLeft:50,
             paddingRight:50,
             paddingTop:5,
             paddingBottom:5
        }}>{items6}</div>
        </div>
    </div>
    </div>
}