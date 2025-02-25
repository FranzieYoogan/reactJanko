import { useEffect, useState } from 'react';
import './assets/styles/summary.css';

function Summary() {
  const [titleSummary, setTitleSummary] = useState(false);
  const [ulSummary, setUlSummary] = useState(false);

  const handleScroll = () => {
    
    const containerTitleSummary = document.getElementById('containerTitleSummary');
    if (containerTitleSummary && !titleSummary) {
      const rect = containerTitleSummary.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setTitleSummary(true);
      }
    }

    
    const containerUlElement = document.getElementById('containerUl');
    if (containerUlElement && !ulSummary) {
      const rect = containerUlElement.getBoundingClientRect();
      
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setUlSummary(true);
      }
    }
  };

  useEffect(() => {
    
    window.addEventListener('scroll', handleScroll);

    
    handleScroll();

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <>
      <section className='containerAllSummary'>
        <div>
          {/* Title Section */}
          <div
            id='containerTitleSummary'
            className={`containerTitleSummary ${titleSummary ? 'titleSummaryAnimation' : ''}`}
          >
            <h1 className='titleSummary'>Summary for people in a hurry</h1>
          </div>

          {/* UL Section */}
          <div className={`containerUl ${ulSummary ? 'containerUlAnimation' : '' }`} id='containerUl'>
            <ul className={`ulStyle1`}>
              <li>Nearly 30 years of experience</li>
              <li>10 years in building, managing, and scaling cross-functional teams including product, design, research, and content design</li>
              <li>13 years in coaching and mentoring</li>
              <li>Startup, agency, and corporate experience; B2B + B2C</li>
            </ul>

            <ul>
              <li>Strong stakeholder management</li>
              <li>Defining organizational, product, and CX vision and strategy</li>
              <li>Facilitation of multidisciplinary, cross-organizational efforts</li>
              <li>Applying business strategy, futures thinking, and systems thinking</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Summary;
