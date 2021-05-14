import React from "react";
import headshot from "../img/headshot2.jpg";

function About() {
    return (

        <div className="container">
            
            <div className="row">
                <div className="col-sm">
                    <div className="jumbotron">
                        <h1 className="display-4">About Me</h1>
                       
                        <hr className="my-4"></hr>
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                              
                                    <div className="col-sm-12 col-md-4">
                                    <img src={headshot} alt="HeadShot" class="img-fluid"  
                                            id="headshot"/>
                                    </div>
                                    
                                    <div className="col-sm-12 col-md-8">
                                        <p> I am a mother of 4, who has spent most of the last 20 years as a stay at
                                            home mum. Having trained as a
                                            social
                                            worker before having a family. I am now looking for a complete change in
                                            direction, where the plan is to use my new found coding skills and apply
                                            them to the issues I am passionate about. I have kept myself busy during
                                            my
                                            time at home with numerous hobbies such as running my own allotment, and now
                                            being involved in a community allotment mentoring young people with mental
                                            health issues. I have taught myself to spin, knit, crochet, felt and
                                            weave,
                                            and have spent a few years running a small online craft business</p>

                                        <p>I have also spent time in various voluntary capacities, from being on the
                                            committee for our local refugee welcome group, to helping organise events at
                                            our local community orchard. In the more distant past, when the children
                                            were younger I helped to run a toddler group, as well as breastfeeding
                                            support group, as a trained breastfeeding peer supporter</p>
                                        <p>My other interests include British Sign Language which I have spent a number
                                            of years learning, and then applied those skills with a part time job as a
                                            communication support worker for a woman who was a BSL user and was
                                            accessing some sewing courses. Along
                                            with environmental issues and campaigning, and up until recently I was
                                            co-ordinator for our local Green Party</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;