import {useState} from "react";
export function HomePage() {

    return (
        <div>
            <Navbar/>
            <br/>
            <Card/>
        </div>
    )
}

export function Navbar() {
    return <div style={{backgroundColor:"rgba(200, 152, 139, 0.5)",height:70, width:"full"}}>
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
        <div style={{backgroundColor:"rgba(200, 152, 139, 0.5)",height:550,width:500,
     marginLeft:550, marginRight:550,
    }}>
         <div style={{paddingLeft:150,paddingRight:100,paddingTop:30}}>
        <div style={{color:"#5b4c36", fontSize:18}}>Pet Name </div>
        <div>
            <input style={{padding:3,fontSize:16,borderRadius:4}} 
            type="text" 
            placeholder="Pet Name"
            value={inputOne} 
            onChange={function handleChange(event) {
                setInputOne(event.target.value);
                }}/>
        </div>
        <div style={{color:"#5b4c36", fontSize:18}}>Pet Type</div>
        <div>
            <input style={{padding:3,fontSize:16,borderRadius:4}} 
            type="text" 
            placeholder="Pet Type"
            value={inputtwo} 
            onChange={function handleChange(event) {
                setInputTwo(event.target.value);
                }}/>
        </div>
        <div style={{color:"#5b4c36", fontSize:18}}>Bread</div>
        <div>
            <input style={{padding:3,fontSize:16,borderRadius:4}}  
            type="text" 
            placeholder="Bread"value={inputthree} 
            onChange={function handleChange(event) {
                setInputThree(event.target.value);
                }}/>
        </div>
        <div>
        <div style={{color:"#5b4c36", fontSize:18}}>Your Name</div>
            <input style={{padding:3,fontSize:16,borderRadius:4}}  
            type="text"
             placeholder="Your Name"
             value={inputfour}
              onChange={function handleChange(event) {
                setInputFour(event.target.value);
                }}/>
        </div>
        <div style={{color:"#5b4c36", fontSize:18}}> Email </div>
        <div>
            <input style={{padding:3,fontSize:16,borderRadius:4}}  
            type="text" 
            placeholder="Email" 
            value={inputfive} 
            onChange={function handleChange(event) {
                setInputFive(event.target.value);
                }}/>
        </div>
        <div style={{color:"#5b4c36", fontSize:18}}> Phone </div>
        <div>
            <input style={{padding:3,fontSize:16,borderRadius:4}} 
             type="text"
             placeholder="Phone" 
             value={inputsix} 
             onChange={function handleChange(event) {
                setInputSix(event.target.value);
                }}/>
        </div>
        <button onClick={onButtonClick} 
        style={{borderRadius:5,marginTop:10,paddingLeft:70,paddingRight:80,fontSize:18,color:"#5b4c36",backgroundColor:"rgba(200, 152, 139, 0.5)",}}>
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
        <div style={{backgroundColor:"rgba(200, 152, 139, 0.5)",
            boxShadow:" rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px",
            alignItems:"center",
            fontSize:18,
            borderRadius:2,
            paddingLeft:50,
             paddingRight:50
        }}>Pet Name</div>
        <div style={{backgroundColor:"rgba(200, 152, 139, 0.5)",
            boxShadow:" rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px",
            alignItems:"center",
            fontSize:18,
            borderRadius:2,
            paddingLeft:50,
             paddingRight:50
        }}> {items1} </div>
        </div>
        <div>
            <div style={{backgroundColor:"rgba(200, 152, 139, 0.5)",
            boxShadow:" rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px",
            alignItems:"center",
            fontSize:18,
            borderRadius:2,
             paddingLeft:50,
             paddingRight:50
        }}>Pet Type</div>
            <div style={{backgroundColor:"rgba(200, 152, 139, 0.5)",
            boxShadow:" rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px",
            alignItems:"center",
            fontSize:18,
            borderRadius:2,
            paddingLeft:50,
             paddingRight:50
        }}>{items2}</div>
        </div>
        <div>
            <div style={{backgroundColor:"rgba(200, 152, 139, 0.5)",
            boxShadow:" rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px",
            alignItems:"center",
            fontSize:18,
            borderRadius:2,
             paddingLeft:50,
             paddingRight:50
        }}>Breed</div>
            <div style={{backgroundColor:"rgba(200, 152, 139, 0.5)",
            boxShadow:" rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px",
            alignItems:"center",
            fontSize:18,
            borderRadius:2,
            paddingLeft:50,
             paddingRight:50
        }}>{items3}</div>
        </div>
        <div>  
            <div style={{backgroundColor:"rgba(200, 152, 139, 0.5)",
            boxShadow:" rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px",
            alignItems:"center",
            fontSize:18,
            borderRadius:2,
            paddingLeft:50,
             paddingRight:50
        }}>Adopter Name</div>        
            <div style={{backgroundColor:"rgba(200, 152, 139, 0.5)",
            boxShadow:" rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px",
            alignItems:"center",
            fontSize:18,
            borderRadius:2,
            paddingLeft:50,
             paddingRight:50
        }}>{items4}</div>
        </div>
        <div>
            <div style={{backgroundColor:"rgba(200, 152, 139, 0.5)",
            boxShadow:" rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px",
            alignItems:"center",
            fontSize:18,
            borderRadius:2,
            paddingLeft:50,
             paddingRight:50
        }}>Email</div>
            <div style={{backgroundColor:"rgba(200, 152, 139, 0.5)",
            boxShadow:" rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px",
            alignItems:"center",
            fontSize:18,
            borderRadius:2,
            paddingLeft:50,
             paddingRight:50
        }}>{items5}</div>
        </div>
        <div>
            <div style={{backgroundColor:"rgba(200, 152, 139, 0.5)",
            boxShadow:" rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px",
            alignItems:"center",
            fontSize:18,
            borderRadius:2, 
            paddingLeft:50,
             paddingRight:50
        }} >Phone</div>
            <div style={{backgroundColor:"rgba(200, 152, 139, 0.5)",
            boxShadow:" rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px",
            alignItems:"center",
            fontSize:18,
            borderRadius:2, 
            paddingLeft:50,
             paddingRight:50
        }}>{items6}</div>
        </div>
    </div>
    </div>
}