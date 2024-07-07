import { FiPlus, FiMinus } from "react-icons/fi";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionBody,
  IconWrapper,
  OpenIcon,
  CloseIcon,
} from "../../../../common/accordion/Accordion";
import data from "../../../../assets/data/voteData";
import "react-tabs/style/react-tabs.css";
import FAQStyleWrapper from "./Vote.style";
import Button from "../../../../common/button";

const Vote = () => {
  const handleVote = (categoryIndex, itemIndex, action) => {
    // Implementasi logika like/dislike di sini
  };


  return (
    <FAQStyleWrapper className="suiduckz_faq_sect" id="faq">
      <div className="container">
        <div className="faq_content">
          <Tabs>
            <TabList>
              {data?.map((faq, idx) => (
                <Tab key={idx}>{faq.category}</Tab>
              ))}
            </TabList>

            {data?.map((faq, idx) => (
              <TabPanel key={idx}>
                <Accordion className="faq_questions">
                  {faq.items?.map((item, i) => (
                    <AccordionItem key={i}>
                      
                      <AccordionTitle>
                      <img src={item.image} alt="" style={{ maxWidth: '100%' }} />
                        <h5>{item.title}</h5>
                        
                        <IconWrapper>
                          <OpenIcon>
                            <FiMinus />
                          </OpenIcon>
                          <CloseIcon>
                            <FiPlus />
                          </CloseIcon>
                        </IconWrapper>
                      </AccordionTitle>
                      <AccordionBody>
                        <p>{item.text}</p>
                        <div className="suiduckz_menu_btns">
                        <Button onClick={() => handleVote(categoryIndex, itemIndex, 'like')}>yes ({item.likes})</Button>
                        <Button onClick={() => handleVote(categoryIndex, itemIndex, 'like')}>no ({item.likes})</Button>
                        </div>
                      </AccordionBody>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </div>
    </FAQStyleWrapper>
  );
};

export default Vote;
