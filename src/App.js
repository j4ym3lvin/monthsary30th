import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";
import "./App.css"; // import our custom CSS

export default function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const audioRef = useRef(null);

  const songUrl = "/music.mp3"; // place your song inside public folder

  const images = [
    "/photo (1).jpg",
    "/photo (2).jpg",
    "/photo (3).jpg",
    "/photo (4).jpg",
    "/photo (5).jpg",
    "/photo (6).jpg",
    "/photo (7).jpg",
    "/photo (8).jpg",
    "/photo (9).jpg",
    "/photo (10).jpg",
    "/photo (11).jpg",
    "/photo (12).jpg",
    "/photo (13).jpg",
    "/photo (14).jpg",
    "/photo (15).jpg",
    "/photo (16).jpg",
    "/photo (17).jpg",
    "/photo (18).jpg",
    "/photo (19).jpg",
    "/photo (20).jpg",
    "/photo (21).jpg",
    "/photo (22).jpg",
    "/photo (23).jpg",
    "/photo (24).jpg",
    "/photo (25).jpg",
    "/photo (26).jpg",
    "/photo (27).jpg",
    "/photo (28).jpg",
    "/photo (29).jpg",
    "/photo (30).jpg",
    "/photo (31).jpg",
    "/photo (32).jpg",
    "/photo (33).jpg",
    "/photo (34).jpg",
    "/photo (35).jpg",
  ]; // place your images inside public folder

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

    const handleClick = () => {
    setShowMessage(true);
    if (audioRef.current) {
      audioRef.current.play();
    }
  };
  useEffect(() => {
    const playMusic = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {
          console.log("Autoplay blocked, wait for user interaction.");
        });
      }
    };
    document.addEventListener("click", playMusic, { once: true });
    return () => document.removeEventListener("click", playMusic);
  }, []);

  return (
    <div className="app">
      <audio ref={audioRef} src={songUrl} loop />

      {/* Floating hearts */}
      <div className="hearts">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "100vh", x: Math.random() * window.innerWidth }}
            animate={{ y: "-10vh" }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className="heart"
          >
            <Heart size={24} />
          </motion.div>
        ))}
      </div>

      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="title"
      >
        Happy 30th Monthsary, Bossing ❤️
      </motion.h1>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowMessage(true)}
        className="button"
      >
        Click Me 💌
      </motion.button>

      {showMessage && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="message-box"
        >
        <p className="message-text">
          Hi Bossing 😘, <br /><br />
          Happy 30th Monthsary! 🎉  
          Thank you for being my partner, my best friend, and my safe place.  
          Every day with you feels like a gift, and I’m so grateful for the love we share. 💖  
          <br /><br />
          I’m thankful for all the lessons I’ve learned from you — about patience, love, and understanding.  
          You inspire me to become a better person each day. 🌹  
          <br /><br />
          Thank you for standing by me in good times and in hard times.  
          You make everything brighter and easier just by being there.  
          <br /><br />
          I’m so proud of the love we’ve built and I look forward to more adventures, more laughter, and more years of togetherness.  
          <br /><br />
          I love you endlessly, forever and always. 💕  
        </p>

          <div className="carousel">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt="Our Memories"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="carousel-img"
            />
            <button onClick={prevSlide} className="nav-btn left">
              <ChevronLeft size={20} />
            </button>
            <button onClick={nextSlide} className="nav-btn right">
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
