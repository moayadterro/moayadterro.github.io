import React from "react";
import { Styles } from "./style";
import { Avatar, Grid } from "@mui/material";
import TypewriterComponent from "typewriter-effect";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import ContactInfo from "components/molecules/contact-info";
import Section from "components/molecules/section";

const contact = [
  { title: "+7(921) 926 35-17", icon: FiPhoneCall, href: "tel:+79219263517" },
  {
    title: "moaed.terro@gmail.com",
    icon: HiOutlineMailOpen,
    href: "mailto:moaed.terro@gmail.com",
  },
  {
    title: "facebook.com/moayad.terro",
    icon: BsFacebook,
    href: "https://www.facebook.com/moayad.terro",
  },
  {
    title: "linkedin.com/in/moayad-terro",
    icon: BsLinkedin,
    href: "https://www.linkedin.com/in/moayad-terro",
  },
];

function HomePage() {
  return (
    <Styles>
      <Grid container>
        <Grid item xs={12} sm={4} className="profile-pic__container">
          <Avatar
            src="https://avatars.githubusercontent.com/u/33261377"
            alt="profile-picture"
            className="profile-picture"
          />
          <div className="type-write">
            <TypewriterComponent
              options={{
                strings: [
                  "Hello World👋",
                  "We Are Developers;",
                  "We Build The Future!",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={8}>
          <h1 className="heading-name">Moayad Terro</h1>
          <p className="short-desc">
            Frontend web developer | React JS developer
          </p>
          {contact.map((item) => {
            return (
              <ContactInfo icon={item.icon} href={item.href}>
                {item.title}
              </ContactInfo>
            );
          })}
        </Grid>
      </Grid>
      <Section header="h1" title="About Me!">
        <p>👋 Hello There!</p>
        <p>
          My name is Moayad, I'm a freelance web developer since the beginning
          of 2021 and till now, I'm an expert in React JS also have a great
          knolowedge about Node.js and JavaScript in general.
        </p>
        <p>
          as a master in information security, I will be a good addition to your
          team, I have my own perspective about the problem and I'll make sure
          that what we build is securly enough, I love to work with team and
          make crazy things, rebuild the world in the way that we love, create
          the impossible.
        </p>

        <p>
          Do you have a creazy idea? and you think it will change the world,
          Welcome to the club! I'm looking forword to work with you, as
          freelancer I love challenging projects, and I'll make sure to get
          things done before the deadline, with me there is no comprehensive
          documents, customer collaboration over contract negotiation that is my
          slogan, following ISO standards in software development and agile
          principles, I love to give my clients my feedback about the ideas, If
          you don't like offering advice just tell me that and don't mention it,
          it's ok 😀
        </p>
        <p>
          My research interests lie in the area in "Information Security" in the
          cyberspace, especially Web Security, Cloud security and IoT Security.
        </p>
      </Section>
    </Styles>
  );
}

export default HomePage;
