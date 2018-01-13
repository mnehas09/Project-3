import React from "react";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Search from "../components/Search";
import SpaceCard from "../components/SpaceCard";




const Rent = () => (

<div> 
<Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-6">
          <Search />
        </Col>        
      </Row>
      <Row>
      	<Col size="md-3">
      		<SpaceCard/>
      	</Col>
        <Col size="md-3">
          <SpaceCard />
        </Col>
        <Col size="md-3">
        </Col>
        <Col size="md-3">
          MAP HERE
        </Col>
      </Row>
      <Row>
        <Col size="md-3">
          <SpaceCard />
        </Col>
        <Col size="md-3">
          <SpaceCard />
        </Col>
      </Row>
      <Row>
        <Col size="md-3">
          <SpaceCard />
        </Col>
        <Col size="md-3">
          <SpaceCard />
        </Col>
      </Row>
    </Container>
<Footer />
</div>
);



export default Rent;

