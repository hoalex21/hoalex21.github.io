import ExperienceCard from "../cards/ExperienceCard";

export default function Experience() {
    return (
        <div>
            <p className='text-5xl'>Professional Experience</p>

            <br />

            <div className="grid grid-cols-3 gap-10">
                <ExperienceCard 
                    title='Backend Software Developer' 
                    img='/NeuroFlow.svg'
                    alt='NeuroFlow Logo'
                    bullets={[
                        "Migrated the web app's notification functionality from main backend codebase to a micro-service that utilized AWS SQS to poll and send notifications and AWS Elastic Containers for rapid elasticity",
                        "Modified Terraform configurations, spun up multiple AWS ECS elastic containers, and developed asynchronous execution that makes the notification service 400% faster",
                        "Investigated and corrected software defects on patient management web app while adding unit and integration tests in Pytest",
                        "Participated in code reviews for pull requests on GitLab and troubleshoot the CI/CD pipeline for incoming merges",
                    ]}
                    time="April 3, 2023 - September 21, 2023"
                />

                <ExperienceCard 
                    title='Quality Assurance Analyst' 
                    img='Holman.png'
                    alt='Holman Logo'
                    bullets={[
                        "Planned and designed automated E2E test cases using Tricentis Tosca to validate proprietary applications", 
                        "Conducted manual integration and regression testing in DEV and QA environments in an agile setting", 
                        "Helped developers and testers with finding and reporting defects with concise steps to reproduce",
                    ]}
                    time="April 4, 2022 - September 16, 2022"
                />

                <ExperienceCard 
                    title='Full Stack Developer' 
                    img='WhyFit.png'
                    alt='WhyFit Logo'
                    bullets={[
                        "Created new routes on the WhyFit website and wrote PostgreSQL queries for relational databases to dynamically present data to the frontend using Ruby On Rails", 
                        "Collaborated with the company founder to develop a form to mass invite emails to the WhyFit platform using HTML, manipulated by JavaScript, and styled with CSS", 
                        "Integrated Slack and Microsoft Teams APIs with WhyFit's users to synchronize with their existing workflows"
                    ]}
                    time="March 29, 2021 - September 17, 2021"
                />
            </div>
        </div>
    );
}