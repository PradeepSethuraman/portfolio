import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/Firefly_a_guy_who_wearing_a_power_glasses_bigger_than_his_eyes_and_wearing_a_white_grey_hoodie_he_ha-removebg-preview.png"
            alt="man-svgrepo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">

            I'm <strong>Pradeep Sethuraman</strong>, a passionate UX/UI designer dedicated to crafting elegant digital experiences that seamlessly blend form and function. With a strong foundation in design principles and a knack for understanding user behavior, I thrive on transforming complex problems into intuitive solutions.
             </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            My journey into the world of design began with a fascination for the intersection of art and technology. Over the years, I've honed my skills using industry-standard tools such as Figma, Adobe XD, Illustrator, and Photoshop to bring my creative visions to life.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
            What sets me apart is my meticulous attention to detail and commitment to simplicity. I believe that great design lies in the ability to distill complexity into its most essential elements, creating experiences that are not only visually stunning but also effortless to use.
            </ScrollAnimation>
            
            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
            As a UX researcher, I delve deep into understanding user needs and motivations, ensuring that every design decision is informed by real-world insights. I thrive in collaborative environments, where I can leverage my communication skills to articulate my ideas and collaborate effectively with cross-functional teams.
            </ScrollAnimation>

            {/* <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies> */}
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
