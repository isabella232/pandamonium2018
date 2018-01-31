// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Deck,
  Heading,
  Quote,
  Slide,
  Text,
  Image,
  Notes
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import preloader from "spectacle/lib/utils/preloader";

// Require CSS
require("normalize.css");

const images = {
  structure: require("../assets/design-system-structure.png"),
  buttons: require("../assets/buttons.jpg"),
  centralized: require("../assets/centralized.png"),
  federated: require("../assets/federated.png"),
  stools: require("../assets/three-legged-stool.jpg"),
  wobble: require("../assets/wobbly-stool.jpg"),
  radar: require("../assets/tech-radar.png"),
  team: require("../assets/uidev-team.png"),
  instui: require("../assets/instui.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#1F2022",
  quarternary: "#1F2022"
}, {
  primary: "Georgia",
  secondary: "Lucida Grande"
});

const imgStyle = {
  display: "inline-block",
  verticalAlign: "middle"
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transitionDuration={500} theme={theme}>
        <Slide>
          <Heading size={1} lineHeight={1} textColor="secondary">
            Design Systems at Instructure
          </Heading>
          <Text textColor="secondary">The 5 Ws</Text>
        </Slide>

        <Slide>
          <Heading size={1} lineHeight={1} textColor="secondary">
            Jennifer Stern
          </Heading>
          <Text textColor="secondary">Principal UI Engineer</Text>
          <Image style={imgStyle} src={images.instui} />
        </Slide>

        <Slide transition={["zoom", "fade"]}>
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Design Systems
          </Heading>
        </Slide>

        <Slide transition={["zoom", "fade"]}>
          <Heading size={1} lineHeight={1} textColor="secondary">
            What?
          </Heading>
          <Appear>
            <BlockQuote>
              <Quote textSize={48} bold={false} textColor="secondary">
                &ldquo;A <b>system</b> is a set of interconnected parts that form a unified whole.&rdquo;
              </Quote>
            </BlockQuote>
          </Appear>
        </Slide>


        <Slide transition={["zoom", "fade"]}>
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Parts of a Design System
          </Heading>
          <Text textColor="secondary">
            <Appear><span>Resources</span></Appear>
            <Appear><span>, Tooling</span></Appear>
            <Appear><span>, &amp; Processes</span></Appear>
          </Text>
        </Slide>
        <Slide>
          <Heading size={1} lineHeight={1} textColor="secondary">
            Resources
          </Heading>
          <Text textColor="secondary">
            <Appear><span>Themes</span></Appear>
            <Appear><span>, Component Library</span></Appear>
            <Appear><span>, Living Style Guide</span></Appear>
            <Appear><span>, Sketch Symbol Library</span></Appear>
            <Appear><span>, Documentation</span></Appear>
          </Text>
          <Notes>
            - TODO: add screenshots/examples
            - shared language
          </Notes>
        </Slide>
        <Slide>
          <Heading size={1} lineHeight={1} textColor="secondary">
            Tooling
          </Heading>
          <Text textColor="secondary">
            <Appear><span>Theme System</span></Appear>
            <Appear><span>, A11y &amp; Visual Testing Utilities</span></Appear>
            <Appear><span>, Sketch app plugins</span></Appear>
            <Appear><span>, Prototyping tools</span></Appear>
          </Text>
        </Slide>
        <Slide>
          <Heading size={1} lineHeight={1} textColor="secondary">
            Design + Technology = <Appear><span style={{ color: "red" }}>♥</span></Appear>
          </Heading>
          <Notes>
            - encourage tighter integration between design and technology
          </Notes>
        </Slide>
        <Slide>
          <Heading size={1} lineHeight={1} textColor="secondary">
            Process
          </Heading>
          <Appear>
            <Text textColor="secondary">
              A community of collaborative, interconnected people
            </Text>
          </Appear>
          <Notes>
            - multi-disciplinary, across the organization
            - product, design, engineering
          </Notes>
        </Slide>
        <Slide transition={["zoom", "fade"]}>
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Design at Scale
          </Heading>
        </Slide>

        <Slide transition={["zoom", "fade"]}>
          <Heading size={1} lineHeight={1} textColor="secondary">
            Who?<Appear><span>&nbsp;Product, Design &amp; Engineering</span></Appear>
          </Heading>
          <Notes>
            - who is the design system for?
            - who builds and maintains the design system?
            - shared responsibility and ownership
          </Notes>
        </Slide>
        <Slide>
          <Image style={imgStyle} src={images.stools} />
        </Slide>
        <Slide>
          <Image style={imgStyle} src={images.wobble} />
        </Slide>
        <Slide>
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Design Ops?
          </Heading>
        </Slide>
        <Slide>
          <Image style={imgStyle} src={images.radar} />
        </Slide>
        <Slide>
          <Heading><s>Dev</s> Design Ops Principles</Heading>
          <Text textColor="secondary">
            <Appear><span>Holistic systems thinking</span></Appear>
            <Appear><span>, Rapid feedback</span></Appear>
            <Appear><span>, Automation</span></Appear>
            <Appear><span>, Break down silos</span></Appear>
          </Text>
          <Notes>
            - applying dev ops principles to design at scale
            - enable experimentation and learning
            - everbody owns production => everbody owns design
          </Notes>
        </Slide>
        <Slide>
          <Heading size={1} lineHeight={1} textColor="secondary">
            UI Dev Team
          </Heading>
          <Image style={imgStyle} src={images.team} />
          <Notes>
            - TODO: add pictures
            - Front end developers/designers with CSS and JS expertise
            - Work closely with product designers and engineers to
              support front end development for feature development
            - Build and support design system tools (Infrastructure)
          </Notes>
        </Slide>
        <Slide>
          <Heading size={1} lineHeight={1} textColor="secondary">
            Centralized
          </Heading>
          <Image style={imgStyle} src={images.centralized} />
        </Slide>
        <Slide>
          <Heading size={1} lineHeight={1} textColor="secondary">
            Federated
          </Heading>
          <Image style={imgStyle} src={images.federated} />
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Heading size={1} lineHeight={1} textColor="secondary">
            Why?
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1} lineHeight={1} textColor="secondary">
            Collaboration &amp; Alignment
          </Heading>
          <Appear>
            <Text textColor="secondary">
              Across teams, disciplines, &amp; products
            </Text>
          </Appear>
          <Notes>
            - Prevent information silos
            - Reduce the knowledge gap between design &amp; development
          </Notes>
        </Slide>
        <Slide>
          <Heading size={1} lineHeight={1} textColor="secondary">
            <s>Consistency</s> Cohesion
          </Heading>
          <Appear>
            <Text textColor="secondary">
              Across applications, platforms and products
            </Text>
          </Appear>
          <Notes>
            - vs consistency
            - patterns and components are not fixed, but are constantly changing, evolving based on
              user feedback
            - note platforms, native apps too!
          </Notes>
        </Slide>
        <Slide>
          <Heading size={1} lineHeight={1} textColor="secondary">
            Efficiency
          </Heading>
          <Text textColor="secondary">
            <Appear><span>Speed through reusability</span></Appear>
            <Appear><span>, Faster feedback loops</span></Appear>
          </Text>
          <Notes>
            - Encourages code re-use. Developers can take advantage of
            A11y support, etc. in pre-built components and focus on the
            larger feature specific implementation details.

            - Reduce bottlenecks in design and/or UX debt after launch
            - Build more functional POCs with actual production-ready code.
            - Encourages breaking up designs into smaller, easier to digest components

            - At the expense of creativity? Just like dev ops is not eliminating operations...
            - Designers can focus on the larger things like overall UX and
            information architecture of the feature.
          </Notes>
        </Slide>
        <Slide>
          <Heading size={1} lineHeight={1} textColor="secondary">
            Trusted Resources
          </Heading>
          <Appear>
            <Text textColor="secondary">
              Centralized documentation
            </Text>
          </Appear>
          <Notes>
            - single source of truth
            - shared language
          </Notes>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Heading size={1} lineHeight={1} textColor="secondary">
            When?
          </Heading>
          <Appear>
            <Heading size={1} lineHeight={1} textColor="secondary">
              Now!
            </Heading>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={1} lineHeight={1} textColor="secondary">
            In production
          </Heading>
          <Appear>
            <Text textColor="secondary">
              in Canvas, Quizzes, Gauge and Arc
            </Text>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            43 Contributors
          </Heading>
          <Appear>
            <Text textColor="secondary">
             Across 10 teams
            </Text>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={1} lineHeight={1} textColor="secondary">
            What&rsquo;s next?
          </Heading>
          <Text textColor="secondary">
            <Appear><span>Sketch app integration</span></Appear>
            <Appear><span>, Pattern documentation</span></Appear>
            <Appear><span>, Testing Utilities</span></Appear>
          </Text>
          <Notes>
            - tools for designers
            - documentation and process improvements
            - testing (visual regression, integration test helpers)
          </Notes>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Heading size={1} lineHeight={1} textColor="secondary">
            Where?
          </Heading>
          <Text textColor="secondary">
            <Appear><p>Slack: #instui, #design-systems</p></Appear>
            <Appear><p>https://instructure.github.io/instructure-ui/</p></Appear>
            <Appear><p>gerrit:instructure-ui</p></Appear>
            <Appear><p>gerrit:bridge-ui-components</p></Appear>
          </Text>
        </Slide>
      </Deck>
    );
  }
}
