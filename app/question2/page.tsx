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

Fluid compute evolved as a balance between the model of dedicated servers (always-on availability, but prone to over-provisioning and scaling challenges) and serverless computing (auto-scaling but has issues with from cold starts and inefficiency). Fluid compute aims to harness the benefits of each of these approaches without the negatives.

Fluid compute has already helped customers maximize their resource efficiency and reduce compute costs by up to 85%.

I understand that you are currently using Next.js App Router and wish to add generative AI to allow your users to create personalized playlists. These AI models require considerable processing power. Fluid compute allows you to scale your resources appropriately and run your functions on-demand. This way, the processing for these AI generated playlists is only done as needed, is scaled appropriately, and you don’t need to be concerned about over-provisioning.

**[This](https://vercel.com/blog/introducing-fluid-compute)** Vercel blog post is a great resource to learn even more about fluid compute.

All the best,

Noam Zimet

Customer Success Manager
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
