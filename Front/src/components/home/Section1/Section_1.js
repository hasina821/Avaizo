import React, { useEffect, useRef } from "react"
import gsap, { Power3 } from "gsap";
import "./section1.scss"


const Section1 = () => {
     
     let tl = new gsap.timeline();
    let ease = Power3.easeOut();
    let h2 = useRef(null)
    let h6 = useRef(null)
    let btn = useRef(null)
    let image = useRef(null)

    useEffect(()=>{
        tl.from([h2,h6,btn],2,{
            opacity:0,
            y:200,
            skewY: 10,
            stagger:{
                amount:.4
            }
        },"-=1")
        tl.from(image, 2 , {
          scale:0.6,
          ease:ease
        },"-=1.2")
    })
     return (
          <>
               <div className="ligne-vertical"></div>
               <div className="section1">
                    <div className="content-section1">
                         <div  className="content-left">
                         <div>
                              <div className="block-span" ref={el => h2 = el}>
                                   <span data-scroll data-scroll-delay="0.13" data-scroll-speed="4">Reservation</span>
                                   <span data-scroll data-scroll-delay="0.09" data-scroll-speed="4">&nbsp;en ligne</span>
                                   <span data-scroll data-scroll-delay="0.06" data-scroll-speed="4">au cinema</span>
                              </div>
                                   <h6 ref={el => h6 = el}>
                                        Lorem ipsum dolor sit amet consectetur adipiscing elit.
                                        Consectetur tortor nunc aliquam consectetur semper augue at.
                                   </h6>
                                   <button ref={el => btn = el}>Commencer</button>
                         </div>
                         </div>
                         <div className="content-right">
                              <img ref={el => image = el} src="/fond.svg" alt="" style={{objectFit:"cover"}}/>
                         </div>
                    </div>
          </div> 
          </>     
     )
}

export default Section1