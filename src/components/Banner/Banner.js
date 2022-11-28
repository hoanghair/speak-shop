import React from "react";
import { Link } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";

import { Banner as BannerImages } from "../../assets";

import "./Banner.scss";

function Banner() {
  return (
    <div className="Banner">
      <Container>
        <Row>
          <Col sm={0} lg={6}>
            <Link to="/clothes">
              <img
                className="Banner__image"
                src={BannerImages.clothes}
                alt=""
              ></img>
            </Link>
          </Col>

          <Col sm={12} lg={6}>
            <Row>
              <Col>
                <Link to="/electronics">
                  <img
                    className="Banner__image"
                    src={BannerImages.electronic}
                    alt=""
                  ></img>
                </Link>
                <Link to="/furniture">
                  <img
                    className="Banner__image"
                    src={BannerImages.furniture}
                    alt=""
                  ></img>
                </Link>
              </Col>
              <Col>
                <Link to="/shoes">
                  <img
                    className="Banner__image"
                    src={BannerImages.shoes}
                    alt=""
                  ></img>
                </Link>
                <Link to="/others">
                  <img
                    className="Banner__image"
                    src={BannerImages.others}
                    alt=""
                  ></img>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>

        
      </Container>
    </div>
  );
}

export default Banner;
