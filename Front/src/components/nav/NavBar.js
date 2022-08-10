import gsap from 'gsap'
import React, { useEffect,useRef} from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({state}) => {
    let menu = useRef(null)
    let rewealMenu = useRef(null)
    let rewealMenuBackground = useRef(null)
    let line1 = useRef(null)
    let line2 = useRef(null)
    let line3 = useRef(null)
    let line4 = useRef(null)
    let info = useRef(null)

    useEffect(() => {
        if(state.clicked === false){
            //close our menu
            gsap.to([rewealMenu,rewealMenuBackground],{
                duration: 0.8,
                height:0,
                ease:'power3.inOut',
                stagger:{
                 amount:0.07
                }
            })
            gsap.to(menu, {
                duration: 1,
                css: {display:'none'}
            })
        }else if (state.clicked === true || state.clicked === true && state.initial === null){
            // open our menu
            gsap.to(menu, {
                duration: 0,
                css: {display:'block'}
            })
            gsap.to([rewealMenu,rewealMenuBackground], {
                duration: 0,
                opacity: 1,
                height:'100%'
            })
            staggerReweal(rewealMenu,rewealMenuBackground)
            fadeInUp(info)
            staggerText(line1,line2,line3,line4)
        }
    },[state])

    const staggerReweal = (node1,node2) => {
        gsap.from([node1,node2], {
            duration: .8,
            height:0,
            transformOrigin:'right top',
            skewY: 2,
            ease: 'power3.inOut',
            stagger:{
                amount: 0.1
            }
        })
    }
    
    const fadeInUp = (node) => {
        gsap.from([node], {
            y: 60,
            duration:1,
            delay: .2,
            opacity: 0,
            ease: 'power3.inOut'
        })
    }

    const staggerText = (node1,node2,node3,node4) => {
        gsap.from([node1,node2,node3,node4], {
            duration: 0.8,
            y: 100,
            delay: .2,
            ease: 'power3.inOut',
            stagger: {
                amount: 0.3
            }
        })
    }

    const handleHover = e => {
        gsap.to(e.target, {
            duration:.3,
            y: 3,
            skewX: 4,
            ease: "power3.inOut"
        })
    }
    const handleHoverExit = e => {
        gsap.to(e.target, {
            duration:.3,
            y: -3,
            skewX: 0,
            ease: "power3.inOut"
        })
    }
  return (
    <div ref={el => (menu = el)} className='hamburger-menu'>
        <div ref={el => (rewealMenuBackground = el)} className='menu-secondary-background-color'>
            <div ref={el => (rewealMenu = el)} className='menu-layer'>
                <div className='menu-city-background'>

                </div>
                <div className='container'>
                    <div className='wrapper'>
                        <div className='menu-links'>
                            <nav>
                                <ul>
                                    <li><Link to="/" onMouseEnter={e => handleHover(e)} onMouseOut={e => handleHoverExit(e)} ref={el => (line1 = el)}>Accueil</Link></li>
                                    <li><Link to="/pricing" onMouseEnter={e => handleHover(e)} onMouseOut={e => handleHoverExit(e)}  ref={el => (line2 = el)}>Tarifs</Link></li>
                                    <li><Link to="/capsule" onMouseEnter={e => handleHover(e)} onMouseOut={e => handleHoverExit(e)}  ref={el => (line3 = el)}>Films</Link></li>
                                    <li><Link to="/contact" onMouseEnter={e => handleHover(e)} onMouseOut={e => handleHoverExit(e)}  ref={el => (line4 = el)}>Nous Contacter</Link></li>
                                </ul>
                            </nav>
                            <div ref={el => (info = el)} className='info'>
                                <h3>Our promise</h3>
                                <p>
                                    Bonjour
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar