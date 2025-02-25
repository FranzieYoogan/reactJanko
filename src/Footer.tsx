import { useEffect, useState } from 'react'
import './assets/styles/footer.css'

function Footer() {

    const [containerTitleFooter,setContainerTitleFooter] = useState(false)
    const [anchor,setAnchor] = useState(false)

    const handleScroll = () => {

        const titleFooter = document.getElementById('containerTitleFooter')

        if(titleFooter && !containerTitleFooter) {

            const rect = titleFooter.getBoundingClientRect()

            if(rect.top < window.innerHeight && rect.bottom >= 0) {

                setContainerTitleFooter(true)

            }

        }

        const containerAnchor = document.getElementById('containerAnchor')

        if(containerAnchor && !anchor) {

            const rect = containerAnchor.getBoundingClientRect()

            if(rect.top < window.innerHeight && rect.bottom >= 0) {

                setAnchor(true)

            }

        }

    }

    useEffect(() => {

        window.addEventListener('scroll',handleScroll)
        handleScroll()

        return() => {

            window.removeEventListener('scroll',handleScroll)

        }

    })

    return(

        <>

        <section className='containerAllFooter'>

            <div>


        <div className={`containerTitleFooter ${containerTitleFooter ? 'titleFooterAnimation' : ''}`} id='containerTitleFooter'>

        <a href='' className='titleFooter'>View more on LinkedIn →</a>

        </div>

        



            </div>

        </section>

        <div className={`containerAnchor ${anchor ? 'animationAnchor' : ''}`} id='containerAnchor'>

        <a href="" className='anchorFooter'>My neglected blog</a> <h1 className='barStyle'> | </h1>
        <a href="" className='anchorFooter'> My art ↗</a> <h1 className='barStyle'> | </h1>
        <a href="" className='anchorFooter'> My music ↗ </a> <h1 className='barStyle'> | </h1>
        <a href="" className='anchorFooter'> "Simpel" free font  </a> <h1 className='barStyle'> | </h1>
        <a href="" className='anchorFooter'> Contact  </a>

        </div>

        <div className='containerFooterTitle2'>
            <h1 className='footerTitle2'>&copy; Janko Jovanovic. Made in Berlin.</h1>
        </div>
        
        </>

    )

}

export default Footer