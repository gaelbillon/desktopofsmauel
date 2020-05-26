import React from "react";
import styled from "styled-components";
import ReadOn from "../elements/ReadOn";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Escadrone from "../../static/images/workshot/Escadrone-on-ipad.png";
import Parachutedrone from "../../static/images/workshot/parachutedrone-com-on-macbook.png";
import EcoStruxure from "../../static/images/workshot/EcoStruxure_Power_Build-Contractor_Screen_3-IC-490x280.png";
import Parthenay from "../../static/images/workshot/blackerry-parthenay.png";

const IconWrapper = styled.div`
  padding: 1rem;
  cursor: pointer;
`;

const Item = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: stretch;
  align-content: start; */
  padding: var(--padding-m);
  margin-bottom: 16px;
`;

const ItemTitle = styled.h3`
  margin: 0;
`;

const ItemText = styled.p`
  max-width: 36ch;
`;

const Image = styled.img``;

const ListedItem = ({ title, description, url, role, year, image }) => (
  <Item>
    <Image src={image} alt={title} />
    <ItemTitle>{title}</ItemTitle>
    <small>{role}</small>
    <ItemText>{description}</ItemText>
    <ReadOn href={url} text="View Project" />
  </Item>
);

const WorkList = data => {
  return (
    <Carousel
      autoPlay={10000}
      animationSpeed={1000}
      infinite
      arrowLeft={
        <IconWrapper>
          <FaAngleLeft size="1.5em" />
        </IconWrapper>
      }
      arrowRight={
        <IconWrapper>
          <FaAngleRight size="1.5em" />
        </IconWrapper>
      }
      addArrowClickHandler
      breakpoints={{
        768: {
          slidesPerPage: 1,
          arrows: true,
        },
        1024: {
          slidesPerPage: 2,
          arrows: true,
        },
        2440: {
          slidesPerPage: 3,
          arrows: false,
        },
      }}
      slidesPerPage={3}
    >
      <ListedItem
        title="EcoStruxure Power Build Contractor"
        description="All-in-one online configuration and quotation software dedicated to MV equipment installers."
        url="https://www.se.com/fr/fr/work/products/product-launch/ecoreal-mv/"
        year="2017"
        role="Proxy Product Owner"
        image={EcoStruxure}
      />
      <ListedItem
        title="Parachutedrone.com"
        description="A blazing fast e-commerce website built with Prestashop, NGINX, Redis, PHP FPM, Varnish, CDN."
        url="https://parachutedrone.com/"
        year="2016"
        role="Project Manager"
        image={Parachutedrone}
      />
      <ListedItem
        title="Parthenay"
        description="This mobile site application is used to visit the community of communes of Parthenay runs on iPhone, Android, BlackBerry, Windows Phone."
        url="http://mobile.parthenay.com"
        year="2013"
        role="Web developer"
        image={Parthenay}
      />
      <ListedItem
        title="Escadrone"
        description="UAV pilot training center, bespoke drone design and manufacturing."
        url="https://escadrone.com/"
        year="2014"
        role="Co-founder"
        image={Escadrone}
      />
    </Carousel>
  );
};

export default WorkList;
{
  /* <ProjectBox
                img={PinSVG}
                title="Pins"
                blurb="Curated design resource site coded by myself using GatsbyJS."
                year="2018"
                url="https://pins.desktopofsamuel.com"
              /> */
}
{
  /* <ProjectBox
                  img={DocuSVG}
                  title="Road Not Taken"
                  blurb="A documentary I directed with multiple Asian film festival selected."
                  year="2016"
                  url="https://vimeo.com/ondemand/roadnottaken"
                /> */
}
{
  /* <ProjectBox
                img={PingspaceSVG}
                title="Pingspace"
                blurb="Websites uptime monitor as a personal project"
                year="2018"
                url="https://pingspace.webflow.io/"
              />
              <ProjectBox
                img={WaterSVG}
                title="CDC Connects"
                blurb="Goals Tracking for Children With Special Educational Needs"
                year="2019"
                url="https://www.cdchk.org/news/cdc-app-launch/"
              />
              <ProjectBox
                img={PlayaSVG}
                title="Playa"
                blurb="Revamped portfolio and landing page of my agency"
                year="2018"
                url="https://playa.hk/portfolio.html"
              />
              <ProjectBox
                img={WaterSVG}
                title="New Asia Institue"
                blurb="Chinese Cultural Courses & Events"
                year="2017"
                url="https://newasia.org.hk/"
              />
              <ProjectBox
                img={BookSVG}
                title="Creation Cabin"
                blurb="Online novel platform supported by an independent publisher"
                year="2017"
                url="https://playa.hk/projects/creation-cabin-reading-platform.html"
              /> */
}
