import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";


function App() {
    return (
        <Router>
            <div>
                <Header />
                <Wrapper>
                    <Switch>
                        <Route exact path="/" component={About} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/portfolio" component={Portfolio} />
                        <Route exact path="/contact" component={Contact} />
                    </Switch>
                </Wrapper>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
