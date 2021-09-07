import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/home.scss';
import InlineTextRadio from '../InlineTextRadio';
import svg from './dentata.svg';

const greetings = ['Hi', 'Hello', 'Hey', 'Howdy', 'Helloooo', 'Hiya'];
const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)].toLowerCase();

const Home = () => {

  const [output, setOutput] = React.useState(0);

  const outputs = [
    <div>
      e.g. react, javascript, nodejs, typescript, docker

      see projects below
    </div>,
    <div>
      e.g. deno, rust, elm

      see me writing things in a bunch of languages
    </div>,
    <div>
      <p>Modern HTML, CSS, and JavaScript are powerful and often-overlooked tools. When it comes to efficient, sustainable, and dependable web design, nothing really beats a static site with minimal dependencies.</p>

      <br/>

      <p>You check out some of the tools I've built for myself using these tools <a className="special" href="https://culi.page/toys/">here!</a></p>
    </div>
  ];

  return <div className="Home">
    <div>
      <section>
        <div>
          <h1>{randomGreeting}<span className="highlight">,</span> i<span className="highlight">'</span>m culi</h1>
          <span>a full-stack software engineer</span>
        </div>

        <img src={svg} alt="dentata"/>
      </section>
    </div>

    <div className="wave-top">
      <svg data-name="layer1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
      </svg>
    </div>

    <div>
      <section>
        <h3>What do you do?</h3>
        <div>
          <form onChange={e => setOutput(e.target.value)}>
            I place a focus on having a solid grasp of <InlineTextRadio text="industry standard tools" name="overview" value={0} checked={true}/> and I genuinely enjoy picking up <InlineTextRadio text="up-and-coming technologies" name="overview" value={1}/>, but I also have a deep appreciation for making things <InlineTextRadio text="by hand" name="overview" value={2}/>. I'm a versatile developer with a background in mathematics who likes to get their hands dirty with everything from convolutional neural networks to social choice theory.
          </form>
          <p>
            Check out my <Link to="/now">now</Link> page to see what I'm currently obsessing over.
          </p>
        </div>

        <output>{outputs[output % outputs.length]}</output>
      </section>
    </div>
  </div>;
};

export default Home;

