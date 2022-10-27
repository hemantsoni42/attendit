import React from 'react';
import NavBarMain from '../Nav/NavBarMain';
//import Button from 'react-bootstrap/Button';
//import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Image from '../../../image/photo.jpg';

const AboutMe = () => {
  return (
    <>
      <NavBarMain />
      <div className="container">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-5" style={{ width: '100%' }}>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </div>
          </div>

          <div className="right_data mt-5 ml-6" style={{ width: '100%' }}>
            {/* <img src={Image} alt="OWNER_IMG" style={{ maxWidth: 480 }} /> */}
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Image} />
            </Card>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutMe;
