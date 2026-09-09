import React from 'react'

const FAQCard = () => {
  return (
    <>
        <div className="collapse bg-base-100 border border-base-300 text-lime-950">
            <input type="radio" name="my-accordion-1" defaultChecked/>
            <div className="collapse-title font-semibold">What is MyCompany about?</div>
            <div className="collapse-content text-sm">We are a company!</div>
        </div>
        <div className="collapse bg-base-100 border border-base-300 text-lime-950">
            <input type="radio" name="my-accordion-1"/>
            <div className="collapse-title font-semibold">Who is the CEO?</div>
            <div className="collapse-content text-sm">It's me!</div>
        </div>
        <div className="collapse bg-base-100 border border-base-300 text-lime-950">
            <input type="radio" name="my-accordion-1"/>
            <div className="collapse-title font-semibold">FUCK YOU!</div>
            <div className="collapse-content text-sm">dayum! fuck you too nigga</div>
        </div>
    </>
  )
}

export default FAQCard