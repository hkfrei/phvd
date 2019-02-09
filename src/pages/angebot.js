import React from "react";
import Jumbotron from "../components/jumbotron";
import Layout from "../components/layout";
import Content from "../components/content";
import SEO from "../components/seo";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

const styles = {
  angebotPaper: {
    padding: "12px",
    marginBottom: "24px"
  }
};
const AngebotPage = () => (
  <Layout>
    <SEO title="Angebot" />
    <Jumbotron title="ANGEBOT" />
    <Content>
      <h2>Angebote für Einzelpersonen:</h2>
      <h4>Ansatz: 100.- / h</h4>
      <Paper elevation={1} style={styles.angebotPaper}>
        <h3>Einzelsupervision / kollegiale Beratung</h3>
        <List>
          <ListItem>
            <KeyboardArrowRight />
            Reflektieren Sie sich und ihr Arbeiten im Einzelsetting.
          </ListItem>
          <ListItem>
            <KeyboardArrowRight />
            Gelangen Sie durch die geleitete Reflexion nach MI Grundlagen zu
            neuen Erkenntnissen und neuem Elan.
          </ListItem>
          <ListItem>
            <KeyboardArrowRight />
            Sie erhalten neue Inputs und wo angebracht konkrete
            Handlungsvorschläge.
          </ListItem>
        </List>
      </Paper>
      <Paper elevation={1} style={styles.angebotPaper}>
        <h3>Coaching</h3>
        <List>
          <ListItem>
            <KeyboardArrowRight />
            Bei Schwierigkeiten im Berufsalltag (unzureichende/nachlassende
            Leistung, Konflikte mit Vorgesetzten/Kollegen, etc.) oder als
            Katalysator für laufende Entwicklungsprozesse, hilft das Coaching
            Orientierung zu bieten, die Situation und das eigene Verhalten zu
            analysieren, und zielgerichtete Massnahmen für eine Verbesserung zu
            erarbeiten.
          </ListItem>
        </List>
      </Paper>
      <Divider />
      <h2>Angebote für Firmen/Gruppen:</h2>
      <h4>Ansatz: 200.- / h</h4>
      <Paper elevation={1} style={styles.angebotPaper}>
        <h3>Supervision</h3>
        <List>
          <ListItem>
            <KeyboardArrowRight />
            Reflektieren Sie sich und ihr Arbeiten im Gruppensetting.
          </ListItem>
          <ListItem>
            <KeyboardArrowRight />
            Gelangen Sie durch die geleitete Reflexion nach MI Grundlagen zu
            neuen Erkenntnissen und neuem Elan.
          </ListItem>
          <ListItem>
            <KeyboardArrowRight />
            Sie erhalten neue Inputs und wo angebracht konkrete
            Handlungsvorschläge.
          </ListItem>
        </List>
      </Paper>
      <Paper elevation={1} style={styles.angebotPaper}>
        <h3>Teamentwicklung</h3>
        <List>
          <ListItem>
            <KeyboardArrowRight />
            bla bla bla....
          </ListItem>
        </List>
      </Paper>
      <Paper elevation={1} style={styles.angebotPaper}>
        <h3>MI</h3>
        <List>
          <ListItem>
            <KeyboardArrowRight />
            Sämtliche MI Angebote sind direkt über GK-Quest buchbar.
          </ListItem>
        </List>
      </Paper>
      <Paper elevation={1} style={styles.angebotPaper}>
        <h3>Schulung und Weiterbildung</h3>
        <List>
          <ListItem>
            <KeyboardArrowRight />
            Schulungen zu zentralen Themen wie Kommunikation, Menschenbild,
            Führung werden nach individuellem Bedarf sowohl inhaltlich als auch
            vom Umfang her angepasst und dem Vorwissen der Teilnehmer angepasst.
          </ListItem>
        </List>
      </Paper>
    </Content>
  </Layout>
);

export default AngebotPage;
