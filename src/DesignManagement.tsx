import { useEffect, useState } from 'react';
import './assets/styles/designManagement.css';

function DesignManagement() {
    const [animationSub, setAnimationSub] = useState(false);
    const [pAnimation, setPAnimation] = useState(false);
    const [pAnimationTriggered,setPAnimationTriggered] = useState(false)

    useEffect(() => {

        const timer = setTimeout(() => {

            setAnimationSub(true); 

        }, 100);
       

        // Scroll event listener
        const handleScroll = () => {
            const containerP = document.getElementById('containerPDesign');
            
            if (containerP && !pAnimation) {
                const rect = containerP.getBoundingClientRect();

               
                if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    
                    setPAnimationTriggered(true)
                    setPAnimation(true); 
                } else {
                
                    setPAnimation(false); 
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

 
        return () => {
            clearTimeout(timer)
            window.removeEventListener('scroll', handleScroll);
        };
    }, [pAnimationTriggered]); 

    useEffect(() => {

        const containerP = document.getElementById('containerPDesign')

        if(pAnimation) {

            containerP?.offsetHeight

        }

    },[pAnimation])

    return(

        <>

        <section className='containerDesignAll'>

        <div>

        

        <div>
            <h1 className='titleDesign'>Jank Jovanovic</h1>
        </div>

        <div id='containerSubtitleDesign' className={`containerSubtitleDesign ${animationSub ? 'animationSub' : '' }`}>

        <h1 className='subtitleDesign'>Design Management
        & Strategic Design</h1>

        </div>

        <div id='containerPDesign' className={`containerPDesign ${pAnimation ?'containerPAnimation' : ''}`}>

        <p className={`pDesign`}>A seasoned design and product lead with nearly 30 years of experience across various fields. I bring together design management, product management, strategy, futures thinking, and systems thinking to help teams and organizations navigate
             an increasing uncertainty and design for the preferable future.</p>

        </div>

        </div>

        </section>
        
        </>

    )

}

export default DesignManagement