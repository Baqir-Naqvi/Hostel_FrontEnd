import React from "react";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPerson,
  faBed,
  faStoreAlt,
  faCalendar,
  faKitchenSet,
  faContactBook,
} from "@fortawesome/free-solid-svg-icons";
import BlueCard from "../../components/card/card";
import Loader from "../../layout/loader/Loader";
import "./roomdetailsstyle.css";
import { useState, useEffect } from "react";
import axios from "axios";
const locate = "https://hostelbackend.herokuapp.com/roomimages/";

function Roomdetails() {
  const [room, setRoom] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const param = useParams();
  useEffect(() => {
    if (
      localStorage.getItem("token") === "user" ||
      localStorage.getItem("token") === "admin"
    )
      setLoggedIn(true);
    else 
    setLoggedIn(false);

    setLoading(true);
    async function GetRoombyID() {
      await axios
        .get(`https://hostelbackend.herokuapp.com/roomslist/${param.id}`)
        .then((res) => {
          setRoom(res.data);
          setLoading(false);
        });
    }
    
    GetRoombyID();
  }, [param.id]);

  async function BookRoom(e) {
    axios({
      method: "put",
      url: `https://hostelbackend.herokuapp.com/roomslist?id=${param.id}`,
      data: {
        roomcapacity: room.roomcapacity - 1,
      },
    }).catch((err) => {
      console.log(err);
    });
    window.location.reload();
    alert("Room Booked Successfully");
  }

  return loading ? (
    <div>
      <Loader />
    </div>
  ) : (
    <Container>
      <Row>
        <Col sm={8}>
          <div
            style={{ display: "flex", marginTop: "4rem", marginBottom: "4rem" }}
          >
            <Card style={{ width: "45rem" }}>
              <Card.Img
                variant="top"
                src={locate + room.image}
                style={{ height: "32rem", width: "100%" }}
              />
              <Card.Body>
                <Card.Title>
                  <li>
                    <FontAwesomeIcon icon={faPerson} size="2x" />{" "}
                    <strong>{room.roomcapacity}</strong> Sleeps
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faBed} size="2x" /> <strong></strong>{" "}
                    Air Conditioner
                  </li>
                </Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                  ad quos assumenda, cupiditate similique laboriosam molestias
                  iste enim. Saepe id delectus iusto, esse quo voluptas ullam,
                  quasi consequuntur at cumque magnam, similique fugit mollitia.
                  Soluta fuga blanditiis delectus temporibus nam?
                </Card.Text>
                {loggedIn ? (
                  <Button
                    variant="primary"
                    onClick={BookRoom}
                    style={{ marginInline: "40%" }}
                  >
                    BookNow
                  </Button>
                ) : (
                  <Card.Text
                    style={{
                      fontWeight: "bold",
                      fontSize: "1rem",
                      color: "red",
                    }}
                  >
                    You must be logged in to Book Room
                  </Card.Text>
                )}
              </Card.Body>
            </Card>
          </div>
          <div style={{ marginBottom: "4rem" }}>
            <h4>Room facilities</h4>
            <li id="roomfacility">
              <FontAwesomeIcon
                icon={faBed}
                size="2x"
                style={{ paddingRight: "1rem" }}
              />
              Comfortable bed
            </li>
            <li id="roomfacility">
              <FontAwesomeIcon
                icon={faStoreAlt}
                size="2x"
                style={{ paddingRight: "1rem" }}
              />
              Separate Cupboards
            </li>
            <li id="roomfacility">
              <FontAwesomeIcon
                icon={faContactBook}
                size="2x"
                style={{ paddingRight: "1rem" }}
              />
              Complaint Service
            </li>
            <li id="roomfacility">
              <FontAwesomeIcon
                icon={faCalendar}
                size="2x"
                style={{ paddingRight: "1rem" }}
              />
              Immediate Support
            </li>
            <li id="roomfacility">
              <FontAwesomeIcon
                icon={faKitchenSet}
                size="2x"
                style={{ paddingRight: "1rem" }}
              />
              Kitchen Facility
            </li>
          </div>
        </Col>
        <Col sm={4} style={{ marginBlock: "4rem" }}>
          <Card>
            <Card.Img variant="top" src={locate + room.image} />
          </Card>
          <Card style={{ marginBlock: "2rem" }}>
            <Card.Img variant="top" src={locate + room.image} />
          </Card>
          <BlueCard />
        </Col>
      </Row>
    </Container>
  );
}

export default Roomdetails;
