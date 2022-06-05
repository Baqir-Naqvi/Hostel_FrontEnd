import React from "react";
import Room from "../components/room/Roomcard"
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import Roomhero from "../components/room/Roomhero"
import Loader from "../layout/loader/Loader";
import axios from "axios";
function Rooms() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      await axios.get("https://hostelbackend.herokuapp.com/roomslist").then((res) => {
        setData(res.data);
        setLoading(false);
      });
    }
    fetchData();
  }, []);

  return (
    <Container>
      
      <Roomhero />
      <Row xs={1} md={1} data-aos="fade-left">
        {loading ? (
          <div> <Loader/></div>
        ) : (
          data.map((item) => {
            return <Room key={item._id} item={item} />;
          })
        )}
      </Row>
    </Container>
  );
}

export default Rooms;
