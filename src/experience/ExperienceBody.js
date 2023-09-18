// React
import React from 'react';

// Experience Components
import ExperienceCard from './ExperienceCard';

// Media
import whyfit from '../media/WhyFit.png';
import holman from '../media/Holman.png';
import neuroflow from '../media/NeuroFlow.svg';


export default function ExperienceBody() {
    return (
        <div className='container'>
            <h1 className='display-5'>Experience</h1>
            <div className='row row-cols-1 row-cols-md-3'>
                <ExperienceCard
                    link='https://www.neuroflow.com/'
                    src={neuroflow}
                    role="Backend Software Associate"
                    points={[
                        "Develop asynchronous functionality for the notification microservice to poll and send messages from AWS SQS queue",
                        "Investigate and correct defects discovered on web application",
                        "Write unit and integration tests for new code implementations",
                        "Participate in code reviews for new software updates",
                        "Collaborate with DEV, QA and product teams to ensure that shipped code results in desired outcomes",
                    ]}
                    tools={[
                        "Flask",
                        "Pytest",
                        "Gitlab",
                        "AWS",
                        "Jira",
                    ]}
                    footer='April 3 - September 21, 2023'
                />
                <ExperienceCard
                    link='https://www.holmanauto.com/'
                    src={holman}
                    role='Quality Assurance Analyst'
                    points={[
                        "Implement automated test cases for multiple web applications using Tricentis Tosca",
                        "Conduct manual integration and regression testing in DEV and QA environments before deploying to production",
                        "Provide support for team members with testing and automation inqueries", "Communicate with various development and testing teams to troubleshoot problems"
                    ]}
                    tools={[
                        "Tricentis Tosca",
                        "PostgreSQL",
                        "Microsoft TFS",
                    ]}
                    footer='April 4 - September 16, 2022'
                />
                <ExperienceCard
                    link='https://www.why.fit/'
                    src={whyfit}
                    role='Full Stack Developer'
                    points={[
                        "Utilized REST API to communicate across WhyFit's endpoints and work with third-party applications such as Slack and Microsoft Teams",
                        "Develop relational databases with PostgreSQL and Ruby On Rails",
                        "Fromulate UI designs with team members to create positive user experiences"
                    ]}
                    footer='March 29 - September 17, 2021'
                    tools={[
                        "Ruby on Rails",
                        "Slack API",
                        "Microsoft Teams API",
                    ]}
                />
            </div>
        </div>
    );
}
