import { motion } from 'framer-motion';
import { ArrowLeft, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Whitepaper() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-[#0D0D1F] text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <Link
            to="/"
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          <button className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-colors">
            <Download className="w-5 h-5" />
            Download PDF
          </button>
        </div>

        <motion.div {...fadeInUp} className="space-y-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Nexura Protocol Whitepaper
            </h1>
            <p className="text-gray-400">Version 1.0 - March 2024</p>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-400">Abstract</h2>
            <p className="text-gray-300 leading-relaxed">
              Nexura Protocol introduces a revolutionary cross-chain liquidity protocol that enables seamless asset transfers and trading across multiple blockchain networks. By leveraging advanced smart contract technology and innovative consensus mechanisms, Nexura provides a secure, efficient, and cost-effective solution for decentralized finance operations.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-400">1. Introduction</h2>
            <p className="text-gray-300 leading-relaxed">
              The blockchain ecosystem has evolved significantly, resulting in multiple chains with distinct advantages and use cases. However, this fragmentation has created inefficiencies in liquidity distribution and increased complexity for users. Nexura Protocol addresses these challenges by providing a unified solution for cross-chain interactions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-400">2. Technical Architecture</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">2.1 Cross-Chain Bridge</h3>
              <p className="text-gray-300 leading-relaxed">
                The Nexura bridge utilizes a network of decentralized validators and advanced cryptographic protocols to ensure secure asset transfers across chains. Our innovative approach minimizes trust assumptions while maximizing efficiency.
              </p>
              
              <h3 className="text-xl font-semibold">2.2 Smart Contract System</h3>
              <p className="text-gray-300 leading-relaxed">
                Our smart contracts are designed with modularity and upgradability in mind, allowing for continuous improvement while maintaining security. The system includes:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Multi-signature governance</li>
                <li>Automated market makers (AMM)</li>
                <li>Cross-chain message passing</li>
                <li>Liquidity aggregation</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-400">3. Tokenomics</h2>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                The NXR token is central to the Nexura ecosystem, serving multiple purposes:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Governance rights</li>
                <li>Fee reduction</li>
                <li>Staking rewards</li>
                <li>Protocol incentives</li>
              </ul>
              <div className="bg-black/20 p-6 rounded-xl border border-purple-500/20 mt-4">
                <h4 className="text-lg font-semibold mb-4">Token Distribution</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Public Sale</span>
                    <span className="text-purple-400">40%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Team & Advisors</span>
                    <span className="text-purple-400">20%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ecosystem Growth</span>
                    <span className="text-purple-400">20%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Treasury</span>
                    <span className="text-purple-400">15%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Strategic Partners</span>
                    <span className="text-purple-400">5%</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-400">4. Roadmap</h2>
            <div className="space-y-6">
              <div className="bg-black/20 p-6 rounded-xl border border-purple-500/20">
                <h3 className="text-xl font-semibold mb-4">Phase 1: Foundation (Q2 2024)</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Launch of core protocol</li>
                  <li>Initial bridge deployment</li>
                  <li>Security audits</li>
                  <li>Community building</li>
                </ul>
              </div>
              
              <div className="bg-black/20 p-6 rounded-xl border border-purple-500/20">
                <h3 className="text-xl font-semibold mb-4">Phase 2: Expansion (Q3 2024)</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Additional chain integrations</li>
                  <li>Advanced trading features</li>
                  <li>Governance implementation</li>
                  <li>Strategic partnerships</li>
                </ul>
              </div>
              
              <div className="bg-black/20 p-6 rounded-xl border border-purple-500/20">
                <h3 className="text-xl font-semibold mb-4">Phase 3: Optimization (Q4 2024)</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Layer 2 scaling solutions</li>
                  <li>Cross-chain DEX aggregation</li>
                  <li>Mobile app launch</li>
                  <li>Enterprise partnerships</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-400">5. Conclusion</h2>
            <p className="text-gray-300 leading-relaxed">
              Nexura Protocol represents a significant step forward in blockchain interoperability and DeFi infrastructure. Through our innovative technology and community-driven approach, we aim to create a more connected and efficient blockchain ecosystem.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}