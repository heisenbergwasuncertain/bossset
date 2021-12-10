
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Desktop1 from "./components/Desktop1";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|desktop-1)">
          <Desktop1 {...desktop1Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const desktop1Data = {
    dpbossNetlifyApp: "Dpboss.netlify.app",
    sattaMatkaKalyanMumbaiResult: "Satta Matka Kalyan Mumbai Result",
    kalyanMatkaMatka: <>KALYAN MATKA | MATKA RESULT | KALYAN MATKA TIPS | SATTA MATKA | MATKA.COM | MATKA PANA JODI TODAY | BATTA SATKA | MATKA PATTI JODI NUMBER | MATKA RESULTS | MATKA CHART | MATKA JODI | <br />SATTA COM | FULL RATE GAME | MATKA GAME | MATKA WAPKA | ALL MATKA RESULT LIVE ONLINE | MATKA RESULT | KALYAN MATKA RESULT | DPBOSS MATKA 143 | MAIN MATKA</>,
    liveUpdate: "!! LIVE UPDATE !!",
    place: "KALYAN",
    phone: "152-25-567",
    place2: "KALYAN",
    phone2: "152-25-567",
    dpbossSattaMatkaK: <>DPBOSS<br />SATTA MATKA<br />KALYAN RESULT<br />+9100000000</>,
    liveMatkaResult: "! LIVE MATKA RESULT !",
    spanText: <>TIME BAZAR<br /></>,
    spanText2: <>790-62-589<br /></>,
    spanText3: "( 1:15 pm - 2:15 pm )",
    spanText4: <>KALYAN<br /></>,
    spanText5: <>790-62-589<br /></>,
    spanText6: "( 1:15 pm - 2:15 pm )",
};

