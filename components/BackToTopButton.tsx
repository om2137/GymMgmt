import {useEffect, useState} from 'react'
import Button from "./Button";

export default function BackToTopButton() {

  const [backToTop, setBackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  return (
    <>
      {backToTop && (
          <button
              style={{
                position: 'fixed', 
                bottom: '40px', 
                right: '60px',
                height: '40px',
                width: '40px',
              }}
              className="bg-gray-500 hover:bg-gray-400 px-3 text-white uppercase py-2 rounded font-2xl text-sm select-none"
              onClick={scrollToTop}
          >
              ^
          </button>
        )
      }
    </>
    
  )
}
