import styles from './AccordionCard.module.css';
import { useState } from 'react';
import AccordionItem from '../AccordionItem';
import { DATA } from '../../data/data';

function AccordionCard() {
  const [activeAccordionNumber, setActiveAccordionNumber] = useState(null);

  const handleClick = (accordionNumber) => {
    if (activeAccordionNumber === accordionNumber) {
      setActiveAccordionNumber(null);
    } else {
      setActiveAccordionNumber(accordionNumber);
    }
  };

  return (
    <div className={styles.cardContainer}>
      {DATA.map((item) => (
        <AccordionItem
          activeAccordionNumber={activeAccordionNumber}
          handleClick={handleClick}
          itemNumber={item.itemNumber}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
}

export default AccordionCard;
