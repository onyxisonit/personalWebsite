import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";


const overlayVariants = {
    initial: {
      scale: 0,
      x: "100%", 
      y: "0%",
      originX: 1,
      originY: 0,
    },
    animate: {
      scale: 1,
      x: "0%",
      y: "0%",
      originX: 1,
      originY: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.3, 0.8, 0.3, 1],
      }
    },
    exit: {
      scale: 0,
      x: "-50%", 
      y: "50%",
      transition: {
        duration: 1,
        ease: "easeInOut",
      }
    },
  };
  
const routes: { [key: string]: string } = {
    "/": "Home",
    "/about": "About",
    "/contact": "Contact",
    "/projects": "Projects"
}

function AnimatedPage() {
    const location = useLocation();
    const currentRoute = location.pathname;

    return (
      <>
        <motion.p 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-white z-30"
          variants={overlayVariants}
          initial= {{
            scale: 0,
            opacity: 0,
            transition: {
              duration: 1,
              ease: [0, 1, 0.3, 1],
              delay: 0.5
            }
          }}
          animate="animate"
          exit="exit">{routes[currentRoute]}</motion.p>

      <motion.div
        className="fixed inset-0 z-20 bg-burntOrange pointer-events-none"
        variants={overlayVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      />
      </>
    );
}

export default AnimatedPage