import React, { useRef } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import AppRouter from './router'

const App = () => {
    const AppRef = useRef(null)
  return (
    <>
        <LocomotiveScrollProvider
            options={{
                smooth:true
            }}
            watch={[]}
            containerRef={AppRef}
        >
            <main data-scroll-container ref={AppRef}>
                <AppRouter/>
            </main>
        </LocomotiveScrollProvider>
    </>
  )
}

export default App