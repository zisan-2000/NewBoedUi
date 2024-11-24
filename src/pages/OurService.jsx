import React, { useState } from "react";

// Importing the icons
import icon1 from "./../assets/icon1.png"; // Replace with actual icon path
import icon10 from "./../assets/icon10.png"; // Replace with actual icon path
import icon11 from "./../assets/icon11.png"; // Replace with actual icon path
import icon12 from "./../assets/icon12.png"; // Replace with actual icon path
import icon2 from "./../assets/icon2.png"; // Replace with actual icon path
import icon3 from "./../assets/icon3.png"; // Replace with actual icon path
import icon4 from "./../assets/icon4.png"; // Replace with actual icon path
import icon5 from "./../assets/icon5.png"; // Replace with actual icon path
import icon6 from "./../assets/icon6.png"; // Replace with actual icon path
import icon7 from "./../assets/icon7.png"; // Replace with actual icon path
import icon8 from "./../assets/icon8.png"; // Replace with actual icon path
import icon9 from "./../assets/icon9.png"; // Replace with actual icon path

const OurService = () => {
  const [visibleText, setVisibleText] = useState({});

  const toggleTextVisibility = (index) => {
    setVisibleText((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const cards = [
    {
      icon: icon1,
      title: "Implementing LLMs in Business",
      text: "Utilizing Generative AI Models for Business Advancement - Harness the capabilities of generative AI models to elevate decision-making processes, unveil valuable insights, enhance operational efficiency, and gain a substantial competitive advantage. This is additional text for the card that will be revealed when the button is clicked.",
    },
    {
      icon: icon2,
      title: "Vector Semantic Search",
      text: "Unlocking Precision with Vector Semantic Search - Employ the prowess of vector search and natural language processing (NLP) to swiftly and accurately interpret user intents, bypassing the necessity for an exact keyword match. This is additional text for the card that will be revealed when the button is clicked.",
    },
    {
      icon: icon3,
      title: "Generative AI Development",
      text: "Empowering Developers with Generative AI Tools - Optimize developers' productivity by incorporating AI tools such as GitHub Pilot and Microsoft Copilot. Streamline workflows and expedite coding processes to foster efficiency and faster development. This is additional text for the card that will be revealed when the button is clicked.",
    },
    {
      icon: icon4,
      title: "Autonomous Agent Development",
      text: "Empower Organizational Tasks with Autonomous AI Agents - Implement autonomous AI agents like AutoGPT or BabyAGI that operate independently, learn dynamically, and adapt seamlessly, bolstering your organization's capabilities in daily tasks. This is additional text for the card that will be revealed when the button is clicked.",
    },
    {
      icon: icon5,
      title: "Text Generation",
      text: "Enhancing Content Creation with Generative AI - Infuse generative AI into your content creation process to produce comprehensive content, enhancing overall efficiency and effectiveness. This is additional text for the card that will be revealed when the button is clicked.",
    },
    {
      icon: icon6,
      title: "Fine-tuning AI Models",
      text: "Tailoring AI Outputs for Specific Needs - Customize AI model outputs to align with your specific requirements. Fine-tune pre-trained AI models for specific tasks, enhancing performance and reducing training times. This is additional text for the card that will be revealed when the button is clicked.",
    },
    {
      icon: icon7,
      title: "Image Generation",
      text: "Accessing Creative Resources with Instant Image Generation - Tap into a virtually infinite resource pool of creative and imaginative graphics generated instantly to save both time and costs. This is additional text for the card that will be revealed when the button is clicked.",
    },
    {
      icon: icon8,
      title: "Reinforcement Learning from Human Feedback (RLHF)",
      text: "Optimizing AI Outputs with Reinforcement Learning and Human Feedback - Combine reinforcement learning with human feedback to refine and improve AI models iteratively. Enable AI systems to learn optimal behaviors, resulting in more accurate, efficient, and robust outputs. This is additional text for the card that will be revealed when the button is clicked.",
    },
    {
      icon: icon9,
      title: "Enhanced Task Automation",
      text: "Streamlining Operations through Enhanced Automation - Automate and expedite tasks, minimizing the time and effort required. Improve accuracy, reduce errors, and enhance overall task quality. This is additional text for the card that will be revealed when the button is clicked.",
    },
    {
      icon: icon10,
      title: "Improved Data Analysis",
      text: "Elevating Data Analysis through AI-generated Insights - Leverage AI-generated insights to collect, organize, and visualize extensive datasets. Accelerate product development and outpace competitors in business growth. This is additional text for the card that will be revealed when the button is clicked.",
    },
    {
      icon: icon11,
      title: "Boosted Software Development",
      text: "Augmenting Efficiency in Software Development - Increase the efficiency of software development by supporting programmers with tools that enhance productivity, reduce frustration, and maintain focus on their tasks. This is additional text for the card that will be revealed when the button is clicked.",
    },
    {
      icon: icon12,
      title: "Reduced Costs",
      text: "Optimizing Daily Operations with LLM-based Solutions - Drive down daily operational costs by implementing LLM-based solutions to support routine operations. This is additional text for the card that will be revealed when the button is clicked.",
    },
  ];

  return (
    <div className="pt-24">
      <div className="container mx-auto mb-16 mt-8">
        <div className="grid gap-8 text-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-lg bg-white p-6 shadow-lg transition-transform duration-300 hover:scale-105 dark:bg-slate-800"
            >
              <img
                src={card.icon}
                alt={card.title}
                className="mb-4 h-12 w-12 animate-spin-slow"
              />
              <h3 className="mb-2 transform animate-pulse text-xl font-bold text-indigo-600 transition-transform duration-300 hover:scale-105 dark:text-purple-400">
                {card.title}
              </h3>
              <p className="mb-4 text-center text-gray-700 dark:text-white">
                {card.text.substring(0, card.text.indexOf(".") + 1)}
                {visibleText[index] && (
                  <span>{card.text.substring(card.text.indexOf(".") + 1)}</span>
                )}
              </p>
              <button
                onClick={() => toggleTextVisibility(index)}
                className="mt-auto rounded-md bg-indigo-600 px-4 py-2 text-white transition-colors duration-300 hover:bg-indigo-700 dark:text-white"
              >
                {visibleText[index] ? "Show Less" : "Learn More"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurService;
