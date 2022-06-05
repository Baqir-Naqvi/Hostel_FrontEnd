import React from "react";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";
function AboutContact() {
  return (
    <div style={{ backgroundColor: "#f4fbfd",marginBlock:"10rem" }}>
      <Row>
        <Col sm={1} md={6} lg={6}>
          <h1 style={{fontWeight:"600"}}>Rule settlement, eviction and stay</h1>
          <ul>
            <li style={{ fontSize: "1.25rem", color: "gray" }}>
              Time of arrival is after 14-00. Time of departure is to 12-00
            </li>
            <br />
            <li
              style={{ marginTop: "1rem", fontSize: "1.25rem", color: "gray" }}
            >
              Is there a settlement in hostel only after the presence of
              passport
            </li>
            <br />
            <li
              style={{ marginTop: "1rem", fontSize: "1.25rem", color: "gray" }}
            >
              Does a settlement take place only at complete payment
            </li>
            <br />
            <li
              style={{ marginTop: "1rem",fontSize: "1.25rem",color: "gray",fontWeight: "bold",}}
            >
              Volutpat odio facilisis mauris sit amet massa vitae tortor
              condimentum. Quam elementum pulvinar etiam non quam lacus
              suspendisse. Eget gravida cum sociis natoque
            </li>
          </ul>
        </Col>
        <Col sm={1} md={6} lg={6}  style={{backgroundColor:"white"}}>
          <h1 style={{fontWeight:"600"}}>We are ready answer your question</h1>
          <label className="label" style={{ marginTop: "2rem" }}>
            <input
              type="text"
              placeholder="Name"
              style={{
                marginLeft: "2rem",
                borderRadius: "25px",
                border: "2px solid black",
                padding: "20px",
                width: "200px",
                height: "15px",
              }}
            />
            <input
              type="text"
              placeholder="Email"
              style={{
                marginLeft: "2rem",
                borderRadius: "25px",
                border: "2px solid black",
                padding: "20px",
                width: "200px",
                height: "15px",
              }}
            ></input>
            <textarea
              rows="5"
              id="comment"
              placeholder="Message"
              style={{
                marginTop: "2rem",
                marginLeft: "2rem",
                border: "2px solid",
                width: "90%",
                borderRadius: "25px",
                paddingLeft: "1rem",
                height:"12rem"
              }}
            ></textarea>
          </label>
          <br />
          <Button
            variant="primary"
            size="lg"
            style={{
              marginTop: "2rem",
              marginBottom: "2rem",
              marginInline: "30%",
              backgroundColor: "#285484",
              width:"fit-content"
            }}
          >
            Send Message
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default AboutContact;
