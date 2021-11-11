/* This example requires Tailwind CSS v2.0+ */
const faqs = [
  {
    id: 1,
    question: "Wen launch ?",
    answer: "We don't know yet",
  },
  {
    id: 2,
    question: "On what plateform ?",
    answer: "Solana",
  },
  {
    id: 3,
    question: "How much each mint ?",
    answer: "1 SOL",
  },
  {
    id: 4,
    question: "How many Degen Beavers will exist?",
    answer: "3333",
  },
  {
    id: 5,
    question: "How much royalties I pay on second market ?",
    answer: "5% Total. 2.5% to the team and 2.5% to the Degen Beavers community wallet",
  },
  {
    id: 6,
    question: "What are you going to do with the money in the community wallet",
    answer: "Our goal is to create a strong community implicated for the good of the community. Our plan is to create a DAO where Beavers Lodge member's can vote on how to achieve that. We will also be investing in the project by investing in our systems.",
  },
  {
    id: 7,
    question: "blabla ?",
    answer: "blablabla",
  },
  {
    id: 8,
    question: "blabla ?",
    answer: "blablabla",
  },
  // More questions...
];

export default function FAQSection() {
  return (
    <div className="bg-gray-800 rounded-md">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="lg:max-w-2xl lg:mx-auto lg:text-center">
          <h2 className="text-8xl font-extrabold tracking-tight text-white sm:text-7xl font-mouseMemoire">
            Frequently Asked Questions
          </h2>
          <p className="text-3xl mt-4 text-gray-400 font-mouseMemoire">
            Here's we hope all the answers to your questions !
          </p>
        </div>
        <div className="mt-20">
          <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="font-semibold text-xl text-white font-mohave">{faq.question}</dt>
                <dd className="mt-3 text-xl text-gray-400 font-mohave">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
