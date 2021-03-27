import React from 'react';

import {Title, Section} from './styles';

import mobileEditorImg from '../../assets/illustration-editor-mobile.svg';
import phonesImg from '../../assets/illustration-phones.svg';
import laptopImg from '../../assets/illustration-laptop-mobile.svg';

const Branding: React.FC = () => {
  return (
    <>
      <Section className="section">
        <Title>Designed for the Future</Title>

        <img src={mobileEditorImg} alt="Mobile Editor Mobile"/>
      </Section>

      <Section className="section">
        <Title>Introducing an<br/>extensible editor</Title>

        <p>
          Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.
          The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.
        </p>
      </Section>

      <Section className="section">
        <Title>Robust content management</Title>

        <p>
            Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
        </p>
      </Section>

      <Section className="section darker">
        <img src={phonesImg} alt="phones"/>

        <Title>State of the Art<br />Infrastructure</Title>

        <p>
            With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity.
            This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
        </p>
      </Section>

      <Section className="section">
        <img src={laptopImg} alt="Laptop"/>

        <Title>Free, open, simple</Title>

        <p>
          Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
        </p>
      </Section>

      <Section className="section">
        <Title>Powerful tooling</Title>

        <p>
          Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.
        </p>
      </Section>
    </>
  )
}

export default Branding;
