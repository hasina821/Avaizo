import React, { useEffect, useRef } from "react"
import gsap, { Power3 } from "gsap";
import "./section1.scss"
import lottie from 'lottie-web';

const Section1 = () => {

     let tl = new gsap.timeline();
     let ease = Power3.easeOut();
     let h2 = useRef(null)
     let h6 = useRef(null)
     let btn = useRef(null)
     let image = useRef(null)

     useEffect(() => {
          lottie.loadAnimation({
               container: image.current,
               renderer: 'svg',
               loop: true,
               autoplay: true,
               animationData: require('../../../Assets/67654-networking-for-all.json')
          })
     }, [])


     useEffect(() => {
          tl.from([h2, h6, btn], 2, {
               opacity: 0,
               y: 200,
               skewY: 10,
               stagger: {
                    amount: .4
               }
          }, "-=1")
     })
     return (
          <>
               <div className="section1">
                    <div className="content-section1">
                         <div className="content-left">
                              <div>
                                   <div className="block-span" ref={el => h2 = el}>
                                        <span data-scroll data-scroll-delay="0.13" data-scroll-speed="4">Acces wifi</span>
                                        <span data-scroll data-scroll-delay="0.09" data-scroll-speed="4">&nbsp;de l'Etudiant</span>
                                   </div>
                                   <h6 ref={el => h6 = el}>
                                        Site pour la gérance de l'accès wifi de tous les etudiants de l'Ecole
                                        Nationale de l'Informatique
                                   </h6>
                                   <button ref={el => btn = el}>Commencer</button>
                              </div>
                         </div>
                         <div className="content-right" ref={image}></div>
                    </div>
               </div>
          </>
     )
}

export default Section1