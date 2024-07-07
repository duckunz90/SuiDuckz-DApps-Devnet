import { FaMinus, FaPlus } from "react-icons/fa";
import SectionTitle from "../../../../common/sectionTitle";
import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionBody,
  IconWrapper,
  OpenIcon,
  CloseIcon,
} from "../../../../common/accordion/Accordion";


import data from "../../../../assets/data/faq";
import FAQStyleWrapper from "./Faq.style";

const FAQ = () => {
  return (
    <FAQStyleWrapper className="suiduckz_faq_sect" id="faq">
      <div className="container">
        <div className="suiduckz_faq_content">
          <SectionTitle
            isCenter={true}
            title="FREQUENTLY ASKED QUESTIONS"
            subtitle="QUESTIONS & ANSWERS"
            className="text-center"
          />

          <div className="suiduckz_faq_questions">
            <Accordion className="faq_questions">
              {data?.map((item, i) => (
                <AccordionItem key={i}>
                  <AccordionTitle>
                    <h5>{item.title}</h5>
                    <IconWrapper>
                      <OpenIcon>
                        <FaMinus />
                      </OpenIcon>
                      <CloseIcon>
                        <FaPlus />
                      </CloseIcon>
                    </IconWrapper>
                  </AccordionTitle>
                  <AccordionBody>
                    <p>{item.text}</p>
                  </AccordionBody>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="faq_bg_wattermark">
              
            </div>
          </div>
        </div>
      </div>
    </FAQStyleWrapper>
  );
};

export default FAQ;
