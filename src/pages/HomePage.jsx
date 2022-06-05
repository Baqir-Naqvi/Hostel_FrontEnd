import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../components/Hero/Hero";
import Subhero from "../components/subhero/Subhero";
import Room from "../components/room/Room.jsx";
import { Container, Row } from "react-bootstrap";
import CustomCard from "../components/card/card";
import Location from "../components/location/Location";
import Loader from "../layout/loader/Loader";
import Aos from "aos";
import "aos/dist/aos.css";
function HomePage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2000 });
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
    <div>
      <Container>
        <Hero />

        <Row xs={1} md={3}>
          {loading ? (
            <div>
              {" "}
              <Loader />
            </div>
          ) : (
            data.slice(0, 2).map((item) => {
              return <Room key={item._id} item={item} />;
            })
          )}
          <div data-aos="zoom-out">
            <CustomCard />
          </div>
        </Row>
        <Subhero />
        <Location />
      </Container>
    </div>
  );
}

export default HomePage;
