import React from "react";
import Backyard from "../components/Backyard";
import Row from "../components/Row";
import Col from "../components/Col";
import Container from "../components/Container"






const Welcome = () =>
<div>
  <Backyard>
      <h1>Welcome to GetSpace!</h1>
      <h2>Rent or Find Extra Storage Space!</h2>
    </Backyard>
    <Container>
      <Row>
        <Col size="md-12">
          <h1>Your Guide to GetSpace!</h1>
        </Col>
      </Row>     
    
   <Row>
        <Col size="md-6">
        <h2><span class="glyphicon glyphicon-tags"></span></h2>     
      </Col>
      <Col size="md-6">
        <h2><span class="glyphicon glyphicon-road"></span></h2>       
      </Col>
    </Row>
    <Row>
      <Col size="md-6">
      <p>List Extra Space</p>
      </Col>
      <Col size="md-6">
      <p>Search Available Space To Rent</p>
      </Col>
    </Row>
    <Row>
      <Col size="md-6">
      <p>List your available storage in three easy steps</p>
      <ul>
        <li>1.Click on Rent Space!</li>
        <li>2.Login with your Google account</li>
        <li>3.Click “Add Space” and fill out the form</li>
      </ul>
      </Col>
      <Col size="md-6">
      <p clasName="">Find available storage in two easy steps</p>
      <ul>
        <li>1.Click on “Find Space” to locate space in your neighborhood.!</li>
        <li>2.Click on “More Details” to contact the owner.</li>
      </ul>
      </Col>
    </Row>
      
    </Container>
  
  
</div>;


export default Welcome;
