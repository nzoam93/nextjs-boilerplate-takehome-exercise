import Markdown from 'markdown-to-jsx';

const q1Markdown = `
**Question 1:** An Enterprise customer has come to you to ask about the difference
between React and Next.js and what the benefits are of using Next.js for
her team. Please write a response to the customer.`

const a1Markdown = `
Hi Christy,

React is a library of functions that are used to create an application’s frontend UI. Next.js is a framework built on top of React which makes it easier to create React applications.

There are several benefits of using Next.js to develop your applications.

- Next.js incorporates server-side rendering and static site generation, which contributes to *faster page load times* and *directly improves core web vital statistics*.
- Search engines are able to more easily read the content of your application without needing to run client-side rendering as is typically done with React applications, *directly improving SEO results.*
- Improve conversion rates as customers will both be able to more easily find your website through better SEO, and have a *better user experience* once on the website due to faster performance.
- Next.js is widely used by developers and has many resources available for developers to use when transitioning to Next.js.

Another benefit of Next.js is the ability to integrate directly with Vercel (the maker of Next.js). Vercel is a frontend cloud platform from which a developer can seamlessly deploy Next.js applications. As just one example of the many benefits of this integration, Vercel utilizes serverless functions, which is crucial for the aforementioned server-side rendering benefit of Next.js. In case you are unfamiliar with Vercel, **[here](https://vercel.com/blog/what-is-vercel)** is a quick read that provides an overview of the product.

All the best,

Noam Zimet

Customer Success Manager
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
