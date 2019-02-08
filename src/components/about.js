import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

const styles = {
  aboutTitle: {
    margin: 0
  }
};
const About = () => (
  <div>
    <h2 style={styles.aboutTitle}>Aus- und Weiterbildung</h2>
    <List>
      <ListItem>
        <KeyboardArrowRight />
        2007 Abschluss als Pflegefachmann DNII HF, Schwerpunkt Psychiatrie
      </ListItem>
      <ListItem>
        <KeyboardArrowRight />
        KISS/KT Trainer 2013
      </ListItem>
      <ListItem>
        <KeyboardArrowRight />
        MI Trainer und 2018 Coach/Supervisor MI
      </ListItem>
      <ListItem>
        <KeyboardArrowRight />
        Langjährige Berufserfahrung im ambulanten und stationären Setting
      </ListItem>
    </List>
  </div>
);

export default About;
