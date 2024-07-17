import React, { useState } from 'react';

const QuestionAnswers = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleMenu = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const data = [
    {
      question: "How much does web design and development typically cost?",
      ans: "The majority of our projects sit between £30k and £150k, but project costs will depend on the final scope of work and vary from project to project. We generally have a minimum project size of £25k and prefer to agree a fixed cost with agreed milestone payments.",
    },
    {
      question: "How long does a project usually take?",
      ans: "A web design and build project can last around 12-14 weeks, whereas brand-into-website-and-marketing can take 6 months or more. There are always ways to consider business objectives (such as phased launches) so even if your timescales don’t work with this, it’s always worth reaching out. Expect clear milestones and a timeline that respects your urgency, without ever skimping on the quality that makes your site distinctly you.",
    },
    {
      question: "Can your creative agency accommodate tight deadlines?",
      ans: "Sure thing! We’re ready to mobilise our design and development teams, prioritising the essentials to turn your dream site from a fast-approaching deadline into a reality. Flexibility and focus are our middle names, ensuring your project crosses the finish line.",
    },
    {
      question: "What ongoing support and maintenance do you offer post-launch?",
      ans: "SiteCare is a huge part of what we offer here at KOTA. Think of us as the guardians of your digital home, offering a suite of post-launch support and maintenance services to ensure your website continues to thrive. From regular updates to performance tuning, we’re on hand to keep your site smooth, secure, and evolving along with your brand. You can read more about SiteCare.",
    },
    {
      question: "How do you handle revisions and feedback during the design process?",
      ans: "Your feedback is the secret sauce in our design process. We welcome your thoughts, tweaks, and “aha” moments, incorporating them into each iteration to ensure the end product is nothing short of perfection. Our process is built on collaboration, making sure your voice is heard loud and clear at every turn.",
    },
  ];

  return (
    <div className='mx-6 lg:mx-24 text-md lg:text-2xl'>
      {data.map((faq, index) => (
        <div key={index}>
          <div className='flex font-semibold'>
            <button
              onClick={() => toggleMenu(index)}
              className="text-black mr-4 focus:outline-none"
            >
              <div className={`faq ${openIndex === index ? 'open' : ''}`}>
                <div className="line bg-white w-6 h-0.5 my-1.5 transition-transform duration-300"></div>
                <div className="line bg-white w-6 h-0.5 my-1.5 transition-transform duration-300"></div>
              </div>
            </button>
            <h2>{faq.question}</h2>
          </div>
          {openIndex === index && (
            <h2 className='ml-10 text-blue-100 transition-transform duration-200 ease-in-out'>{faq.ans}</h2>
          )}
        </div>
      ))}
    </div>
  );
};

export default QuestionAnswers;
