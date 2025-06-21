"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    category: "MAKING A BOOKING",
    questions: [
      {
        question: "How do I make a booking?",
        answer:
          "Our diary opens at 6 am (GMT) and allows reservations for tables in the main restaurant to be made up to 2 months ahead. For groups of 6 to 10 guests within our dining vaults, reservations can also be made up 2 months in advance. All availability is shown online. Due to card details being required to secure your booking, we cannot accept reservations over the phone or via email.",
      },
      {
        question: "How do I make a booking for larger groups?",
        answer:
          "Tables of 6 to 10 guests are accommodated in our private dining vaults. We are unable to accommodate within the main restaurant. Groups of 11+ guests require a semi-private hire of the restaurant. We generally require at least two to three months of notice to ensure availability.",
      },
      {
        question:
          "I can’t find the date or time I’m looking for, what do I do?",
        answer:
          "If you cannot  see availability during your chosen time or date, we are likely to be fully booked. Reservations for our sister restaurant, Ambassadors Clubhouse are now live. Located just a short walk away in Mayfair, Ambassadors Clubhouse celebrates food, drink and music from the region of Punjab.",
      },
      {
        question: "Do you take walk-ins?",
        answer: "We operate on a reservations-only basis.",
      },
      {
        question: "How can I enquire about hosting a private event with you?",
        answer:
          "If you’re looking to host a semi-private or private event, please complete our Event Enquiry Form.",
      },
      {
        question:
          "How can I make a reservation for pre/post meal drinks at 42?",
        answer:
          "42 is presently closed for renovations, reopening Spring 2025.",
      },
    ],
  },
  {
    category: "MANAGING YOUR BOOKING",
    questions: [
      {
        question: "How can I change or cancel my reservation?",
        answer:
          "Cancellations can be made via the ‘Cancel Reservation’ link in your confirmation email. Cancellations must be made at least 72 hours before your booking. Unfortunately, modifications (change in party size, change of date) cannot be made online. Please consider cancelling and making another reservation.",
      },
      {
        question: "What is your cancellation policy?",
        answer:
          "Cancellations must be made at least 72 hours before your booking to avoid any charges.",
      },
      {
        question: "What should I do if I’m running late for my reservation?",
        answer:
          "We hold tables for up to 10 minutes. If you are running late, please reply to your confirmation text or email with your estimated arrival time. We are unable to extend your dining time, so a late arrival may result in a reduced duration at the table.",
      },
      {
        question: "Can I request a specific table in advance?",
        answer:
          "While we will always do our best to fulfil requests, all tables are allocated upon arrival and can’t be guaranteed in advance. Please add a note to your booking specifying your seating preference, and we will certainly do our best to accommodate it.",
      },
    ],
  },
  {
    category: "AHEAD OF YOUR VISIT",
    questions: [
      {
        question: "Where are you located?",
        answer:
          "We are located just a few minutes from Green Park underground station.",
      },
      {
        question: "Is your restaurant wheelchair-accessible?",
        answer:
          "A ramp is available for entrance assistance. Whilst we do not provide accessible washrooms, our ladies' bathroom offers a wider entrance and can be accessed by wheelchair users of all genders.",
      },
      {
        question: "What is your dress code?",
        answer: "Our dress code is smart casual; sportswear is not permitted.",
      },
      {
        question: "What is your child policy?",
        answer:
          "Children over 7 are welcome during lunch service and children over 16 during dinner service. We are unable to accommodate guests below 7 at any time, nor provide highchairs or accommodate pushchairs in the main restaurant. Private Dining Vaults have no age restriction.",
      },
      {
        question: "Can we bring our own wine?",
        answer:
          "Currently, we do not offer a corkage service but we do have an extensive wine list and a dedicated sommelier team.",
      },
      {
        question: "Do you allow dogs in the restaurant?",
        answer:
          "Guide dogs are allowed in our restaurant. Other pets are not permitted.",
      },
      {
        question: "What can be stored in your cloakroom?",
        answer:
          "Due to limited space, our cloakroom is reserved only for coats and jackets. We cannot accommodate large items such as bicycles or any luggage.",
      },
    ],
  },
  {
    category: "DIETARIES",
    questions: [
      {
        question: "Can you accommodate dietary restrictions?",
        answer:
          "If you or a member of your group has an allergy, intolerance, or any special dietary requirements, please include this information in your booking details. We cannot always avoid cross-contamination.",
      },
      {
        question: "Do you serve halal meat?",
        answer: "Our chicken, lamb, and goat are halal certified.",
      },
      {
        question: "Do you cater for vegans?",
        answer:
          "We have a good range of vegan options on our a la carte menu. However, we do not currently offer a vegan tasting menu, and our lunch menu may not be suitable for vegans.",
      },
      {
        question: "What menus do you offer?",
        answer:
          "During lunch, we offer our a la carte menu, lunch menu, and tasting menu. During dinner, we offer our a la carte and tasting menu. Last orders for the tasting menu are at 13:45 for lunch and 21:45 for dinner. Special events and private dining have separate menus.",
      },
    ],
  },
  {
    category: "WORK WITH US",
    questions: [
      {
        question: "I am looking for a career at Gymkhana, how can I apply?",
        answer:
          "We are always looking for passionate and enthusiastic team members that embody the Gymkhana culture. Email us at careers@jksrestaurants.com with your CV and cover letter.",
      },
    ],
  },
  {
    category: "ANYTHING ELSE",
    questions: [
      {
        question: "How do I contact Gymkhana for additional assistance?",
        answer:
          "If your query is not covered by the above guide, you can contact us at Info@gymkhanalondon.com. Due to the volume of emails received, we only reply to queries not included in our FAQ page.",
      },
    ],
  },
];

export default function FAQ() {
  const [openCategory, setOpenCategory] = useState<number | null>(null);
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleCategory = (index: number) => {
    setOpenCategory(openCategory === index ? null : index);
    setOpenQuestion(null);
  };

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section className="h-full w-full py-12 md:py-20">
      <div className="flex flex-col items-center justify-center gap-8 md:gap-16">
        <div>
          <h3 className="border px-10 py-2 text-center text-xl text-white md:text-2xl">
            FAQs
          </h3>
        </div>
        <div className="h-full w-[90%] bg-[#0f1d22] px-4 py-16 md:px-20 md:py-24">
          {faqData.map((section, sectionIndex) => (
            <div key={sectionIndex} className="pb-4">
              <button
                className="flex w-full items-center justify-center rounded-lg px-4 py-2 font-opens text-lg font-semibold tracking-[2px] text-primary focus:outline-none"
                onClick={() => toggleCategory(sectionIndex)}
              >
                {section.category}
              </button>
              <AnimatePresence>
                {openCategory === sectionIndex && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    {section.questions.map((item, questionIndex) => (
                      <div key={questionIndex} className="mt-2">
                        <button
                          className="flex w-full items-center justify-center rounded-lg px-3 py-2 font-poppins font-medium text-[#000] text-primary underline focus:outline-none"
                          onClick={() => toggleQuestion(questionIndex)}
                        >
                          {item.question}
                        </button>
                        <AnimatePresence>
                          {openQuestion === questionIndex && (
                            <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.3 }}
                              className="mt-1 rounded-md p-3 text-center font-inter text-[#9aa0a2]"
                            >
                              {item.answer}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
