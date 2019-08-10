

import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
// import SearchBar from "./components/SearchBar/SearchBar";
// import CategoryMenu from "./components/CategoryMenu/CategoryMenu";
// import ItemThumbnails from "./components/CategoryMenu/ItemThumbnails";



function WhatsOnSale() { 

    return ( 
      <Container>
        <Row>
            <h1>What's On Sale?</h1>
            <h5> links for MyAccount and Logout Buttons </h5>
        </Row>
        <Row>
            <h2>SearchBar goes here</h2>  
        </Row>
        <Row>
            <Col md={4}>
                <h2>CategoryMenu goes here</h2>
            </Col> 
            <Col md={8}>
                <h2>ItemThumbnails go here</h2>
            </Col>
        </Row>
  
      </Container>
    );
  }



export default WhatsOnSale;