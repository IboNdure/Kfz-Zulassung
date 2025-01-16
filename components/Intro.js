"use client";

import styled from "styled-components";

export default function Intro() {
  return (
    <>
      <StyledIntro>
        <h3> Willkommen auf unserer Kfz-Dienstleistungsseite</h3>
        <p>
          Wir bieten professionelle und zuverlässige Services für Ihr Fahrzeug.
        </p>
        <p>"Sicher unterwegs – mit unserem TÜV-Service in besten Händen!"</p>
      </StyledIntro>
      <br></br>
      <br></br>
      <StyledText>
        Wir sorgen dafür, dass Sie sicher und sorgenfrei unterwegs sind. Unser
        erfahrenes Team bietet Ihnen umfassende Dienstleistungen rund um die
        TÜV-Prüfung und Fahrzeugwartung. Egal ob Hauptuntersuchung,
        Abgasuntersuchung oder die Vorbereitung auf den nächsten TÜV-Termin –
        bei uns sind Sie an der richtigen Adresse.
      </StyledText>
      <br></br>
      <br></br>
      <Styledh4>Warum wir die richtige Wahl sind:</Styledh4>
      <Styledlist>
        Kompetenz und Erfahrung: Unsere Fachleute kennen die Anforderungen Ihres
        Fahrzeugs genau.
      </Styledlist>
    </>
  );
}

const StyledIntro = styled.h3`
  display: flex;
  padding: 50px;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

const StyledText = styled.h3`
  display: flex;
  padding: 50px;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

const Styledh4 = styled.h2`
  display: flex;
  padding: 50px;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

const Styledlist = styled.h3`
  display: flex;
  padding: 50px;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;
