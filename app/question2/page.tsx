import Markdown from 'markdown-to-jsx';

const q2Markdown = `
**Question 2:** A customer has reached out: “Fluid compute?! What is this?! Is this another
paradigm like JAMStack or serverless? I’d love a quick intro to the
paradigm and how it’s evolved from serverless. Since the CTO is skeptical
of the value that Vercel brings, I’d like to be able to bring back news of how
this brings value to our usage of the platform. Any news on that front would
be appreciated!” Please write a response to the customer.`

const a2Markdown = `
Hi Trevor,

Thank you for the question about fluid compute. It is indeed an interesting paradigm. Hopefully the following information will prove useful and help convince your CTO of the value that Vercel provides.

Fluid compute emerged as a balance between the model of dedicated servers (always-on availability, but often leads to over-provisioning and scaling challenges) and serverless computing (has auto-scaling but suffers from cold starts and inefficiency). Fluid compute aims to reap the benefits of each of these approaches without the negatives. Already, fluid compute has helped customers optimize and reduce compute costs by up to 85%.

I understand that you are currently using Next.js App Router and wish to add generative AI to allow your users to create personalized playlists. These AI models require considerable processing power in order to function correctly. As just one example of the benefits of fluid compute, it would allow you to scale your resources appropriately and run your functions on-demand. This way, the intensive processing for these AI generated playlists is only done as needed, is scaled appropriately, and you don’t need to be concerned about over-provisioning.

If you are interested in more information, the following Vercel blog post is a great resource to learn even more about fluid compute: *https://vercel.com/blog/introducing-fluid-compute*.

I am always available for further questions, and I look forward to our continued collaboration.

All the best,

Noam Zimet

Vercel Customer Success manager
`



export default function question2(){
    return(
        <>
            <div className='email-container'>
                <Markdown>{q2Markdown}</Markdown>
            </div>
            <div className='email-container'>
                <Markdown>{a2Markdown}</Markdown>
            </div>
        </>
    )
}
