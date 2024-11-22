import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  onSwapClick: () => void;
}

export default function HeroSection({ onSwapClick }: HeroSectionProps) {
  const glowVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: [0.8, 1.2, 0.8],
      opacity: [0, 1, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  const buttonVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: {
        delay: 0.8,
        duration: 0.4,
        ease: "easeOut"
      }
    },
    hover: { 
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.section
      id="home"
      className="relative pt-32 pb-20 px-4 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-purple-500/5"
        variants={glowVariants}
        initial="initial"
        animate="animate"
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-pink-500/5"
        variants={glowVariants}
        initial="initial"
        animate="animate"
        style={{ animationDelay: "-1.5s" }}
      />

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-[15%] w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg backdrop-blur-sm"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
      />
      <motion.div
        className="absolute bottom-20 right-[15%] w-20 h-20 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full backdrop-blur-sm"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        style={{ animationDelay: "-2s" }}
      />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          className="inline-block mb-4 px-6 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-medium">
            Welcome to the Future of DeFi
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 relative"
          custom={1}
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <span className="relative">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Nexura Token
            </span>
            <motion.span
              className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            />
          </span>
        </motion.h1>

        <motion.p
          className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          custom={2}
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          The next generation DeFi token powering seamless cross-chain transactions
          and innovative financial solutions.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          variants={buttonVariants}
          initial="initial"
          animate="animate"
        >
          <motion.button
            onClick={onSwapClick}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-medium relative group overflow-hidden"
            whileHover="hover"
          >
            <span className="relative z-10">Swap Nexura</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <Link to="/whitepaper">
            <motion.button
              className="bg-white/10 text-white px-8 py-3 rounded-lg font-medium relative group overflow-hidden"
              whileHover="hover"
            >
              <span className="relative z-10">Read Whitepaper</span>
              <motion.div
                className="absolute inset-0 bg-white/5"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-purple-500/30 rounded-full p-1"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-2 bg-purple-500 rounded-full mx-auto"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}