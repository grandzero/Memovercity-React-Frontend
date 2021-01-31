import React from 'react'
import {  Col, Row } from "react-bootstrap";
import {Link} from "react-router-dom";
import CardItem from '../CardItem';
const Story = "https://eskipaper.com/images/free-book-wallpaper-1.jpg";
const Pin = "https://wallpaperaccess.com/full/1139035.jpg";
const mb= "Mind Bullets Technique";
const st = "Story Technique";

const mbDesc = "With this technique you will learn some mind bullets to remember. And you will remember thing using this mind bullets";
const stDesc = "With this technique you will learn build stories to remember things";
function Excercises() {
    return (
        <>
        <Row
          style={{
            fontFamily: "Tahoma, sans-serif",
            textAlign: "center",
            justifyContent: "center",
            marginBottom:"5vh",
            marginTop: "10vh"
          }}
        >
          <h1>Excercises</h1>
        </Row>
        <Row
        style={{
          fontFamily: "Tahoma, sans-serif",
          textAlign: "center",
          justifyContent: "center",
          padding: "0 10vw"
        }}
        >
          <Col style={{
              textAlign:"right",
              justifyContent:"right",
              marginBottom:25,
  
          }}
              xl={6}
              lg={6}
              md={6}
              sm={12}
              xs={12}
          >
            <Link style={{ textDecoration: 'none' }} to="/stories"><CardItem src={Story} name={st} desc={stDesc} /></Link>
          </Col>
          <Col
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
          >
            <CardItem src={Pin} name={mb} desc={mbDesc} />
          </Col>
        </Row>
      </>
    )
}

export default Excercises
