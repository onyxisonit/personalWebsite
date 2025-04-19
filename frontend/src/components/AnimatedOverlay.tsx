import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";


const overlayVariants = {
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



function AnimatedOverlay() {
    const location = useLocation();
    const currentRoute = location.pathname;

    const initialVariant = currentRoute === "/"
    ? { scale: 0, x: "-100%", y: "-100%", originX: 0, originY: 0 }
    : { scale: 0, x: "100%", y: "0%", originX: 1, originY: 0 };     

    const initialTextVariant = currentRoute === "/"
    ? { scale: 0, opacity: 0, transition: {duration: 1, ease: [0, 1, 0.3, 1], delay: 0.5}, x: "-100%", y: "-100%", originX: 0, originY: 0 } 
    : { scale: 0, opacity: 0, transition: {duration: 1, ease: [0, 1, 0.3, 1], delay: 0.5}, x: "100%", y: "0%", originX: 1, originY: 0 };    

    return (
      <>
        <motion.p 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-white z-30"
          variants={overlayVariants}
          initial= {initialTextVariant}
          animate="animate"
          exit="exit">{routes[currentRoute]}</motion.p>

        <motion.div
          className="fixed inset-0 z-20 bg-burntOrange pointer-events-none"
          variants={overlayVariants}
          initial={initialVariant}
          animate="animate"
          exit="exit"
        />
      </>
    );
}

export default AnimatedOverlay