import Markdown from 'markdown-to-jsx';

const q3Markdown = `
**Question 3:** Through use of a monitoring dashboard, you notice that an Enterprise
customer has reduced the number of builds and their usage has gone down
by about 50% quarter over quarter. Please write an email to the champion
and executive sponsor of the account to re-engage and start to perform
some discovery.`

const a3Markdown = `
Hello Alex,

My name is Noam Zimet, customer success manager at Vercel. I have been in previous communication with Tanner, but I recently found out that they left the company. In case you are unfamiliar with Vercel, **[here](https://vercel.com/blog/what-is-vercel)** is a quick read that provides an overview of the product.


I see that your current build has some errors and that your Vercel usage has decreased by about 50% in the past quarter. Given that Vercel hosts your company’s marketing page, I want to ensure that it is running smoothly so that you do not miss out on any potential marketing opportunities!

The errors are visible through Cloudflare (a reverse proxy in front of Vercel). I understand that your engineering team is small with just a single developer so I wanted to offer a hand at troubleshooting the errors. Please let me know what questions you may have about these errors and I'd be happy to help get your Vercel deployment back to being error-free!



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
