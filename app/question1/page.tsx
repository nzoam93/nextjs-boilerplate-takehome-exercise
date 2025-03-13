import Markdown from 'markdown-to-jsx';

const q1Markdown = `
**Question 1:** An Enterprise customer has come to you to ask about the difference
between React and Next.js and what the benefits are of using Next.js for
her team. Please write a response to the customer.`

const a1Markdown = `
Hi Christy,

Thank you for your question regarding the comparison of React and Next.js.

First, let’s touch upon the distinction between React and Next.js: React is essentially a library of functions that are used to create an application’s frontend UI. Next.js itself comes in as a React framework which makes it easier to create React applications. If you are interested, more info about this topic can be found on Next.js’s website at *https://nextjs.org/learn/react-foundations/what-is-react-and-nextjs.*

There are several benefits of using Next.js to develop your applications. One benefit is that Next.js incorporates server-side rendering and static site generation, which contributes to *faster page load times* and directly *improves core web vital statistics.* This enables search engines to be able to more easily read the content of the application without needing to run client-side rendering as is typically done with React applications, directly *improving SEO results.* These benefits should also have a direct *improvement of conversion rates* as customers will both be able to more easily find your website through better SEO, and have a better experience once on the website due to faster performance.

Next.js is widely used by developers and has a vast ecosystem of resources available for developers to utilize when transitioning to Next.js (or when simply stuck). Personally, as a developer learning Next.js, I appreciated its intuitiveness. Many aspects of Next.js simply make intuitive sense, such as the use of a file-based routing system which allows for navigation to be automatically set up based on the file tree of your application.

I am always available for further questions, and I look forward to our continued collaboration.

All the best,

Noam Zimet

Vercel Customer Success Manager
`



export default function question1(){




    return(
        <>
            <div className='email-container'>
                <Markdown>{q1Markdown}</Markdown>
            </div>
            <div className='email-container'>
                <Markdown>{a1Markdown}</Markdown>
            </div>
        </>
    )
}
