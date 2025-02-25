import { useEffect, useState } from 'react'
import './assets/styles/seconds.css'

function Seconds() {

    const [titleSeconds,setTitleSeconds] = useState(false)
    const [textSeconds,setTextSeconds] = useState(false)
    const [textTriggered,setTextTriggered] = useState(false)

    const handleSeconds = () => {

        const containerTitleSeconds = document.getElementById('containerTitleSeconds')

        if(containerTitleSeconds && !titleSeconds) {

            const rect = containerTitleSeconds.getBoundingClientRect()

            if(rect.top < window.innerHeight && rect.bottom >= 0) {

                setTitleSeconds(true)

            }

        }

        const containerTextSeconds = document.getElementById('containerTextSeconds')

        if(containerTextSeconds && !textSeconds) {

            const rect = containerTextSeconds.getBoundingClientRect()

            if(rect.top < window.innerHeight && rect.bottom >= 0) {

                setTextTriggered(true)
                setTextSeconds(true)

            } 

        }

    }

    useEffect(() => {

        window.addEventListener('scroll',handleSeconds)
        handleSeconds()

        return() => {

            window.removeEventListener('scroll',handleSeconds)

        }

    },[textTriggered])

    return(

        <>
        
        <section className='containerAllSeconds'>

        <div>

        <div id='containerTitleSeconds' className={`containerTitleSeconds ${titleSeconds ? 
            'containerTitleSecondsAnimation' : ''}`}><h1 className='titleSeconds'>
                60 seconds summary</h1> <p className='subTitleSeconds'>(for those who are not
                     in such a hurry)</p></div>

        

        <div className={`containerTextSeconds ${textSeconds ? 'textSecondsAnimation' : ''}`} id='containerTextSeconds'>

        <p className='textSeconds'>Since 2023 I am working in <b> Yara</b>  as a <b> Senior Manager</b>. I look after the User Experience 
            organization that is responsible for building the Yara Digital Platform which serves 
            multitude of users and stakeholders - from farmers to agronomists. <br></br> <br /> Prior to this, I worked at 
             <b> Zalando</b>  as a Product Design Manager. As part of the Fashion Store digital experience, I was 
            responsible for the Product Design team focused on inspiration & engagement. In the more distant 
            past, as the first product designer in <b>Contentful</b>, I lead strategic design efforts and helped the 
            company to build the product, and grow design capabilities from scratch. Before joining Contentful,
             I co-owned a small <b> service design consultancy</b>, where I helped clients to define their strategies,
              and product and service offerings. That would sum up the last 15 years of my work. The rest is as 
              ancient as Nokia 3310 and involves interface design, packaging design, engineering, Clipper '87, and 
              software architecture. 
              
              <br /> <br /> I consider myself to be a <b> pluralist</b>  and I feel comfortable working 
              across boundaries of any kind. I’m exploring the crossroads of multiple disciplines, such as 
              product management, service and experience design, speculative design, system thinking, strategic
               foresight, and ethics. All this makes me a generalist, but I do specialize in something — being 
               comfortable with the unknown and being able to navigate uncertainty, complexity, and ambiguity.</p>

        </div>

        </div>

        </section>

        </>

    )

}

export default Seconds