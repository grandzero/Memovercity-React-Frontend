import React from 'react';
import {Row} from 'react-bootstrap';
const ls = ["araba","ağaç", "kalem", "kitap", "bardak", "ayakkabı", "pano", "baykuş", "kaplumbağa" , "tabela"];
function StoryTutorial() {
    return (
        <div style={{height:"80vh"}}>
            <Row id="box" style={{textAlign:"center",justifyContent:"center",height:"45%",width:"100%",marginTop:15}} className="gradient-border">
                <div  style={{textAlign:"center",justifyContent:"center",height:"100%",width:"100%",overflow:"auto"}} >
                    <h1 style={{fontWeight:"bold",marginTop:15}}>
                        Example Words
                    </h1>
                    <hr></hr>
                    {ls.map((item,id) => <p style={{fontSize:25 }}>{id+1}.{item}</p>)}

                    </div>
                </Row>
            <Row id="box" style={{textAlign:"center",justifyContent:"center",height:"45%",width:"100%",marginTop:15}} className="gradient-border" >
                <div style={{textAlign:"center",justifyContent:"center",height:"100%",border:"1px solid black",width:"100%",overflow:"auto"}}>
                    <h1 style={{fontWeight:"bold",marginTop:15}}>
                        Try Building an Absurd Story Using Words
                    </h1>
                    <hr></hr>
                    <p style={{fontSize:25 }} >İçinde <span style={{fontWeight:"bold"}}>ağaç</span> biten bir <span style={{fontWeight:"bold"}}>arabada</span> gidiyordum. Gökten yağan <span style={{fontWeight:"bold"}}>kalem</span>eri silmek için sileceği çalıştırdım. Sonrasında direksiyonu bırakıp elime bir <span style={{fontWeight:"bold"}}>kitap</span> aldım. Ben kitap okurken aniden küçük bir <span style={{fontWeight:"bold"}}>bardak</span> yola fırladı.
                    Fren yapmaya çalıştım ama çok geçti. Bardak kırıldı. İlkyardım için bir <span style={{fontWeight:"bold"}}>ayakkabı</span> koşarak geldi ve cebinden <span style={{fontWeight:"bold"}}>pano</span> çıkarttı. Panoya kırık camları <span style={{fontWeight:"bold"}}>baykuş</span> şeklinde sapladı. Bu sırada siren sesiyle bir <span style={{fontWeight:"bold"}}>kaplumbağa</span> hızlıca yaklaştı ve yaralı bardağı kaplumbağaya bindirdiler
                    Kaplumbağa kırık bardak hastanesi <span style={{fontWeight:"bold"}}>tabela</span>sına doğru yola çıktı.</p>
                    
                    
                    </div></Row>
        </div>
    )
}

export default StoryTutorial
