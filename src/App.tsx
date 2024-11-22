import { motion } from 'framer-motion';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import NewsSection from './components/NewsSection';
import SwapInterface from './components/SwapInterface';
import TokenStats from './components/TokenStats';
import Whitepaper from './components/Whitepaper';

function MainContent() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const scrollToSwap = () => {
    const element = document.getElementById('swap');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0D0D1F] text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10" />
      
      <Navbar />
      <HeroSection onSwapClick={scrollToSwap} />

      {/* Stats Section */}
      <motion.section
        className="py-20 px-4"
        {...fadeInUp}
      >
        <div className="max-w-7xl mx-auto">
          <TokenStats />
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-20 px-4 bg-black/20"
        {...fadeInUp}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Why Choose <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Nexura</span>
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
            <motion.div
              className="bg-black/20 p-6 rounded-xl border border-purple-500/20 md:col-span-1 lg:col-span-2"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Cross-Chain Integration
              </h3>
              <p className="text-gray-300">
                Seamlessly transfer assets across multiple blockchain networks with minimal fees.
              </p>
            </motion.div>
            <motion.div
              className="bg-black/20 p-6 rounded-xl border border-purple-500/20 md:col-span-1 lg:col-span-2"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Advanced Security
              </h3>
              <p className="text-gray-300">
                Built with state-of-the-art security measures to protect your assets.
              </p>
            </motion.div>
            <motion.div
              className="bg-black/20 p-6 rounded-xl border border-purple-500/20 md:col-span-1 lg:col-span-2"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Community Driven
              </h3>
              <p className="text-gray-300">
                Governance tokens give you a voice in the future of the protocol.
              </p>
            </motion.div>
            <motion.div
              className="bg-black/20 p-6 rounded-xl border border-purple-500/20 md:col-span-1 lg:col-span-2"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Enhanced Privacy
              </h3>
              <p className="text-gray-300">
                Your wallet addresses remain private and transactions are discreet, ensuring your financial privacy.
              </p>
            </motion.div>
            <motion.div
              className="bg-black/20 p-6 rounded-xl border border-purple-500/20 md:col-span-1 lg:col-span-2"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Minimal Fees
              </h3>
              <p className="text-gray-300">
                Experience near-zero transaction fees when sending or receiving tokens across the network.
              </p>
            </motion.div>
            <motion.div
              className="bg-black/20 p-6 rounded-xl border border-purple-500/20 md:col-span-1 lg:col-span-2"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Safe & Reliable
              </h3>
              <p className="text-gray-300">
                Multiple security audits and fail-safe mechanisms ensure your assets are always protected.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Rest of the sections remain unchanged */}
      <motion.section
        id="tokenomics"
        className="py-20 px-4"
        {...fadeInUp}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Tokenomics</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black/20 p-8 rounded-xl border border-purple-500/20">
              <h3 className="text-2xl font-semibold mb-6">Token Distribution</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Public Sale</span>
                  <span className="text-purple-400 font-semibold">40%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Team & Advisors</span>
                  <span className="text-purple-400 font-semibold">20%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Liquidity Pool</span>
                  <span className="text-purple-400 font-semibold">20%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Marketing</span>
                  <span className="text-purple-400 font-semibold">10%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Development</span>
                  <span className="text-purple-400 font-semibold">10%</span>
                </div>
              </div>
            </div>
            <div className="bg-black/20 p-8 rounded-xl border border-purple-500/20">
              <h3 className="text-2xl font-semibold mb-6">Token Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Token Name</span>
                  <span className="text-purple-400 font-semibold">Nexura</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Token Symbol</span>
                  <span className="text-purple-400 font-semibold">NXR</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Total Supply</span>
                  <span className="text-purple-400 font-semibold">1,000,000,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Network</span>
                  <span className="text-purple-400 font-semibold">Multi-chain</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="swap"
        className="py-20 px-4 bg-black/20"
        {...fadeInUp}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Swap <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Nexura</span>
          </h2>
          <SwapInterface />
        </div>
      </motion.section>

      <motion.section
        id="news"
        className="py-20 px-4"
        {...fadeInUp}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Latest <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">News</span>
          </h2>
          <NewsSection />
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/whitepaper" element={<Whitepaper />} />
      </Routes>
    </BrowserRouter>
  );
}