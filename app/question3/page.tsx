import Markdown from 'markdown-to-jsx';

const q3Markdown = `
**Question 3:** Through use of a monitoring dashboard, you notice that an Enterprise
customer has reduced the number of builds and their usage has gone down
by about 50% quarter over quarter. Please write an email to the champion
and executive sponsor of the account to re-engage and start to perform
some discovery.`

const a3Markdown = `
Hi Alex,

My name is Noam Zimet, customer success manager at Vercel. I have been in previous communication with Tanner, but I recently found out that they left the company.

Vercel offers many advantages to web developers:
- Fast and easy website deployment: you can deploy your website and make it accessible across the internet with just a few clicks
- Lightning-fast performance: Vercel optimizes your website to make it faster
- Scalability: as your website becomes more popular, Vercel can automatically scale as necessary to ensure that it is still accessible to the increased level of traffic.
- Simple integration with existing tools: easily connect with common tools that developers are already using

I am writing because I noticed that your current Vercel build has some errors and I see that your usage has decreased by about 50% in the past quarter. Given that Vercel hosts your company’s marketing page, I want to ensure that it is running smoothly so that you do not miss out on any potential marketing opportunities!

I understand that your engineering team is small with just a single developer so I wanted to offer a hand at fixing these errors. Given that Tanner is no longer with your company, could you please provide me with the best contact to continue conversations with moving forward?

All the best,

Noam Zimet

Customer Success Manager
`



export default function question3(){
    return(
        <>
            <div className='email-container'>
                <Markdown>{q3Markdown}</Markdown>
            </div>
            <div className='email-container'>
                <Markdown>{a3Markdown}</Markdown>
            </div>
        </>
    )
}
