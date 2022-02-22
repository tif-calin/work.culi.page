import { useState } from 'react';
import { Link } from 'react-router-dom';
import InlineTextRadio from '../common/InlineTextRadio';
import svgSystem from '../../assets/system.svg';

const outputs = [
  <div>
    <p>I've worked on small teams for numerous full-stack applications using tools like React, NodeJS, Express, and more. I have a solid understanding of Javascript and Python and use them almost daily on personal and team projects.</p>
    <br/>
    <p>See some of my projects <a href="#projects">below</a> for some examples.</p>
  </div>,
  <div>
    <p>Tools like deno, Elm, and Rust might still have a long way to go before they gain wide adoption, but I find that learning how to use well-built tools like these can teach us a lot about how to best use the tools we're already using.</p>
    <br/>
    <p>Check out my <Link className="special" to="/now">now</Link> page to see what I'm currently obsessing over!</p>
  </div>,
  <div>
    <p>Modern HTML5, CSS3, and ES6 JavaScript are powerful and often-overlooked tools for smaller projects that promote a <a href="https://handmade.network/manifesto">handmade</a> <a href="https://gossipsweb.net/">web</a>. When it comes to efficient, sustainable, and dependable web design, nothing really beats a static site with minimal dependencies.</p>
    <br/>
    <p>Click to checkout some of the <a className="special" href="https://culi.page/toys/" target="_blank" rel="noreferrer">toys</a> I've built for myself using vanilla HTML/CSS/Javascript!</p>
  </div>,
  <div>
    <img src={svgSystem} alt="geometric art"/>
    <p>
      While pursuing a mathematics degree at the University of California, Irvine I got the opportunity to take courses in linear algebra, the mathematics of cryptology and encryption, modern geometry, probability and stoachstic processes, number theory, group and set theory, and many more that I still find useful and pertinent to current interests.
    </p>
  </div>
];

const AboutSection = props => {
  const [output, setOutput] = useState(0);

  return <div id="about">
    <section>
      <h2 className="section-heading"><a href="#about">About</a></h2>
        
      <form onChange={e => setOutput(e.target.value)}>
        <p>
          I place a focus on having a solid grasp of <InlineTextRadio text="industry standard tools" name="about" value={0} checked={true}/> and I genuinely enjoy picking up <InlineTextRadio text="up-and-coming technologies," name="about" value={1}/> but I also have a deep appreciation for making things <InlineTextRadio text="by hand" name="about" value={2}/>.
        </p>
        <p>
          I'm a versatile developer and an eclectic learner with a <InlineTextRadio text="background in mathematics" name="about" value={3}/> who likes to get their hands dirty with everything from convolutional neural networks to social choice theory. 
        </p>
        <p>
          <Link to="/now">Click here to see what I'm doing now.</Link>
        </p>
      </form>

      <output>{outputs[output % outputs.length]}</output>
    </section>
  </div>;
};

export default AboutSection;
