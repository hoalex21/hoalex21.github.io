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
                    role="Backend Software Developer Co-op"
                    points={[
                        "Developed asynchronous functionality for the notification microservice to poll and send messages from AWS SQS queue faster",
                        "Investigated and corrected defects discovered on web application",
                        "Wrote unit and integration tests for new code implementations",
                        "Participated in code reviews for new software updates",
                        "Collaborated with DEV, QA and product teams to ensure that shipped code resulted in desired outcomes",
                    ]}
                    tools={[
                        "Flask",
                        "Pytest",
                        "Gitlab",
                        "Jira",
                        "Terraform",
                        "AWS",
                    ]}
                    footer='April 3 - September 21, 2023'
                />
                <ExperienceCard
                    link='https://www.holmanauto.com/'
                    src={holman}
                    role='Quality Assurance Analyst Co-op'
                    points={[
                        "Automated E2E test cases for internal and client facing applications using Tricentis Tosca",
                        "Conducted manual integration and regression testing in DEV and QA environments in an agile environment",
                        "Upskilled colleagues in utilizing Tricentis Tosca",
                        "Communicated with various development and testing teams to troubleshoot problems"
                    ]}
                    tools={[
                        "Tricentis Tosca",
                        "PostgreSQL",
                        "Microsoft TFS",
                        "Excel",
                    ]}
                    footer='April 4 - September 16, 2022'
                />
                <ExperienceCard
                    link='https://www.why.fit/'
                    src={whyfit}
                    role='Full Stack Developer Co-op'
                    points={[
                        "Utilized REST API to communicate across WhyFit's endpoints and work with third-party applications such as Slack and Microsoft Teams",
                        "Queried relational databases with PostgreSQL and Ruby On Rails",
                        "Formulated UI designs with team members to create positive user experiences"
                    ]}
                    footer='March 29 - September 17, 2021'
                    tools={[
                        "Ruby on Rails",
                        "Javascript",
                        "Slack API",
                        "Microsoft Teams API",
                    ]}
                />
            </div>
        </div>
    );
}
