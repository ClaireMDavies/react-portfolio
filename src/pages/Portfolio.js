import React from "react";
import ProjectPanel from "../components/ProjectPanel";
import schedulerImage from "../img/screenshot-scheduler.png";
import weatherDashboardImage from "../img/weather-dashboard.png";
import projectOneImage from "../img/eatinNdrinkin.png";
import techBlogImage from "../img/tech-blog.png";
import workoutTrackerImage from "../img/workout-tracker.png";
import codeCrowdImage from "../img/code-crowd.png";

function Portfolio() {
    return (
        <div className="container">

            <div className="row">
                <div className="col-sm">
                    <div className="jumbotron">
                        <h1 className="display-4">Portfolio</h1>

                        <hr className="my-4"></hr>
                        <div className="row">

                        <ProjectPanel title="Work Day Scheduling App" image={schedulerImage} description = "This application allows the user to plan events between standard working hours With each hourly timeslot being colour coded, as to whether it is in the past, present or future. Any inputs were saved to local storage" repository="https://github.com/ClaireMDavies/work-day-scheduler-app" deployed="https://clairemdavies.github.io/work-day-scheduler-app" alt="app image" />
                        <ProjectPanel title="Code Crowd" image={codeCrowdImage} description = "A group project where we created a social media application aimed at coders, to make contacts with other coders, being able to search on people's skills to make collaborations, and be able to add images, files and screenshots to posts. Also an ability to comment on others posts" repository="https://github.com/ClaireMDavies/Code_Crowd" deployed="https://code-crowd-cmd.herokuapp.com/" alt="app image" />
                        <ProjectPanel title="eat in N drink in" image={projectOneImage} description = "An application that was the result of 4 coders (including myself) collaborating to make an application that was able to take an ingredient (plus any exclusions) and return recipe ideas, along with the option to add a drinks pairing. It made use of 2 3rd party API's." repository="https://github.com/ClaireMDavies/eat-in-n-drink-in" deployed="https://clairemdavies.github.io/eat-in-n-drink-in" alt="app image" />
                        <ProjectPanel title="Tech Blog" image={techBlogImage} description = "A blog style full-stack applicattion, creating a webpage that allows people to sign up, post articles, and comment on other people's articles, as well as updating and deleting your own posts/comments." repository="https://github.com/ClaireMDavies/tech-blog" deployed="https://obscure-escarpment-55372.herokuapp.com/" alt="app image" />
                        <ProjectPanel title="Weather Dashboard App" image={weatherDashboardImage} description = "An application that made use of 2 3rd party API's to allow the user to search for weather and a 5 day forecast at any location across the globe, and store those locations within local storage." repository="https://github.com/ClaireMDavies/weather-dashboard" deployed="https://clairemdavies.github.io/weather-dashboard/" alt="app image" />
                        <ProjectPanel title="Workout Tracker" image={workoutTrackerImage} description = "An application that allows the user to track exercise, and log the weights lifted, along with the duration of cardio exercise" repository="https://github.com/ClaireMDavies/workout-tracker" deployed="https://obscure-tundra-45842.herokuapp.com/" alt="app image" />
</div>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default Portfolio;