// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image
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
  federated: require("../assets/federated.png")
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
        </Slide>

        <Slide transition={["zoom", "fade"]}>
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Design Systems
          </Heading>
        </Slide>

        <Slide transition={["zoom", "fade"]}>
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            What?
          </Heading>
        </Slide>
        <Slide>
          <BlockQuote>
            <Quote textSize={48} bold={false} textColor="secondary">
              &ldquo;...a library of visual style and components
              documented and released as reusable code for developers &amp; tools
              for designers.&rdquo;
            </Quote>
            <Cite>Nathan Curtis</Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <BlockQuote>
            <Quote textSize={48} bold={false} textColor="secondary">
              &ldquo;A system is a set of interconnected parts that form a unified whole.&rdquo;
            </Quote>
          </BlockQuote>
        </Slide>
        <Slide>
          <Heading size={1} lineHeight={1} textColor="secondary">
            Parts
          </Heading>
          <List textColor="secondary">
            <ListItem>
              Themes/Tokens
            </ListItem>
            <ListItem>
              Component Library
            </ListItem>
            <ListItem>
              Living Style Guide
            </ListItem>
            <ListItem>
              A Library of Sketch Symbols
            </ListItem>
            <ListItem>
              Documentation
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={1} lineHeight={1} textColor="secondary">
            Products
          </Heading>
          <List textColor="secondary">
            <ListItem>
              Canvas, Quizzes, Gauge, Arc
            </ListItem>
            <ListItem>
              Design system parts as a product
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={1} lineHeight={1} textColor="secondary">
            Process
          </Heading>
          <Text textColor="secondary">
            A community of collaborative, interconnected people
          </Text>
        </Slide>


        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Who?
          </Heading>
        </Slide>
        <Slide>
          <BlockQuote>
            <Quote textSize={48} bold={false} textColor="secondary">
              &ldquo;A design system is adopted by and supported for
              other teams making experiences. These teams use it to develop
              and ship features more efficiently to form a more cohesive
              customer journey.&rdquo;
            </Quote>
            <Cite>Nathan Curtis</Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <BlockQuote>
            <Quote textSize={48} bold={false} textColor="secondary">
              &ldquo;A design system is made by an individual, team,
              and/or community.&rdquo;
            </Quote>
            <Cite>Nathan Curtis</Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <Heading size={1} lineHeight={1} textColor="secondary">
            ..for developers & designers
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1} lineHeight={1} textColor="secondary">
            UI Dev Team
          </Heading>
          <List textColor="secondary">
            <ListItem>
              #instui on Slack
            </ListItem>
            <ListItem>
              Front end developers/designers with CSS and JS expertise
            </ListItem>
            <ListItem>
              Work closely with product designers and engineers to
              support front end development for features
            </ListItem>
            <ListItem>
              Build and support design system tools
            </ListItem>
          </List>
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
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Why?
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1} lineHeight={1} textColor="secondary">
            Cohesion
          </Heading>
          <Text textColor="secondary">
            across applications, platforms and products
          </Text>
        </Slide>
        <Slide>
          <Image style={imgStyle} src={images.buttons} />
        </Slide>
        <Slide>
          <Heading size={1} lineHeight={1} textColor="secondary">
            Collaboration &amp; Alignment
          </Heading>
          <Text textColor="secondary">
            across teams and disciplines
          </Text>
        </Slide>
        <Slide>
          <List textColor="secondary">
            <ListItem>
              Reduce the knowledge gap between design and development
            </ListItem>
            <ListItem>
              Help prevent information silos in feature teams and products
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={1} lineHeight={1} textColor="secondary">
            Efficiency
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1} lineHeight={1} textColor="secondary">
            Stop re-inventing the wheel
          </Heading>
        </Slide>
        <Slide>
          <List textColor="secondary">
            <ListItem>
              Designers can stop spending time on minute details and
              focus on the larger things like overall UX and
              information architecture of the feature.
            </ListItem>
            <ListItem>
              Encourages code re-use. Developers can take advantage of
              A11y support, etc. in pre-built components and focus on the
              larger feature specific implementation details.
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={1} lineHeight={1} textColor="secondary">
            Faster feedback loops
          </Heading>
        </Slide>
        <Slide>
          <List textColor="secondary">
            <ListItem>
              Makes it easier to build more functional POCs
              with actual production-ready code.
            </ListItem>
            <ListItem>
              Encourages breaking up a design into smaller, easier to
              digest components.
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={1} lineHeight={1} textColor="secondary">
            Reduce Maintenance Costs
          </Heading>
        </Slide>
        <Slide>
          <List textColor="secondary">
            <ListItem>
              More easily roll out global design changes
            </ListItem>
            <ListItem>
              i18n/RTL languages support
            </ListItem>
            <ListItem>
              Responsive/touch device support
            </ListItem>
            <ListItem>
              Add themes for color blind users
            </ListItem>
            <ListItem>
              Branding changes
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={1} lineHeight={1} textColor="secondary">
            Provide Trusted Resources
          </Heading>
        </Slide>
        <Slide>
          <List textColor="secondary">
            <ListItem>
              Centralized documentation (single source of truth)
            </ListItem>
            <ListItem>
              Shared language
            </ListItem>
          </List>
        </Slide>


        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            When?
          </Heading>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Now!
          </Heading>
          <Text textColor="secondary">after 2 years as a grassroots project</Text>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={1} lineHeight={1} textColor="secondary">
            Currently in production
          </Heading>
          <Text textColor="secondary">in Canvas,
          Quizzes, Gauge and Arc</Text>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={1} lineHeight={1} textColor="secondary">
            What's next?
          </Heading>
          <List textColor="secondary">
            <ListItem>
              Design tools (Sketch app integration)
            </ListItem>
            <ListItem>
              Pattern documentation
            </ListItem>
            <ListItem>
              Process improvements
            </ListItem>
          </List>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Where?
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <List>
            <ListItem>
              Slack: #instui, #design-systems
            </ListItem>
            <ListItem>
              https://instructure.github.io/instructure-ui/
            </ListItem>
          </List>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Thank You!
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
