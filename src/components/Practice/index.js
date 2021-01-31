import React,{useState} from 'react';
import {useParams} from 'react-router-dom';
import {Row, Button} from 'react-bootstrap';
const ls = ["araba","ağaç", "kalem", "kitap", "bardak", "ayakkabı", "pano", "baykuş", "kaplumbağa" , "tabela"];
function Practice() {
    const {id} = useParams();
    const [isSolving, setSolving] = useState(false);
    const [isComplete, setComplete] = useState(false);
    const [inputs, setInputs] = useState(["","","","","","","","","",""]);
    const startHandler = () => {
        setSolving(true);
    }
    const submitHandler = (e) => {
        e.preventDefault();
    }
    const completeHandler = () => {
        setComplete(true);
        setSolving(false);
    }
    return (
        <div style={{textAlign: "center",justifyContent: "center"}} >
            <Row
               style={{
                fontFamily: "Tahoma, sans-serif",
                textAlign: "center",
                justifyContent: "center",
                marginBottom:"5vh",
                marginTop: "3vh"
             }}
            ><h1 style={{fontSize:55}}>{id} : 00:00</h1></Row>
            <div
               style={{
                fontFamily: "Tahoma, sans-serif",
                textAlign: "center",
                justifyContent: "center",
                margin:"auto",
                width:"auto",
                marginLeft: "0"
             }}
            >
                {!isSolving && ls.map((item,key) => {
                    return <Row key={key} style={{textAlign:"center"}}><h1 key={key} style={{fontSize:25, color : isComplete ? (item === inputs[key] ? "green" : "red") : "black"}}>{key+1}.{item}</h1></Row>
                })}
                {isSolving && <form onSubmit={submitHandler}>{ls.map((item,key) => (
                    <Row key={key} style={{textAlign:"center",justifyContent:"center",marginLeft:"8%"}}><h1 key={key} style={{fontSize:25}}>{key+1}.</h1>
                    <input type="text" 
                        style={{border:"none", borderBottom:"1px solid black",margin:15}}
                        onChange={(e) => {setInputs( prev => {
                            const newLs = [...prev];
                            newLs[key] = e.target.value;
                            return newLs;
                        
                        })}}
                        value={inputs[key]}></input></Row>
                )) }</form>}
            </div>
            {!isSolving && <Button style={{marginTop:25,textAlign:"center",justifyContent:"center"}} onClick={startHandler} disabled={isComplete} variant="success">Start</Button>}
            {isSolving && <Button style={{marginTop:25}} onClick={completeHandler} variant="success">Complete</Button>}
        </div>
    )
}

export default Practice
