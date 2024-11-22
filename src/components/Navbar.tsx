import { Coins, Menu, X } from 'lucide-react';
import { useState } from 'react';
import WalletModal from './WalletModal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full bg-black/10 backdrop-blur-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center gap-2">
                  <Coins className="h-8 w-8 text-purple-500" />
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Nexura
                  </span>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-gray-200 hover:text-purple-500 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#about" className="text-gray-200 hover:text-purple-500 px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#tokenomics" className="text-gray-200 hover:text-purple-500 px-3 py-2 rounded-md text-sm font-medium">Tokenomics</a>
                <a href="#swap" className="text-gray-200 hover:text-purple-500 px-3 py-2 rounded-md text-sm font-medium">Swap</a>
                <a href="#news" className="text-gray-200 hover:text-purple-500 px-3 py-2 rounded-md text-sm font-medium">News</a>
                <button
                  onClick={() => setIsWalletModalOpen(true)}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Connect Wallet
                </button>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-200 hover:text-purple-500"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90">
              <a href="#home" className="text-gray-200 hover:text-purple-500 block px-3 py-2 rounded-md text-base font-medium">Home</a>
              <a href="#about" className="text-gray-200 hover:text-purple-500 block px-3 py-2 rounded-md text-base font-medium">About</a>
              <a href="#tokenomics" className="text-gray-200 hover:text-purple-500 block px-3 py-2 rounded-md text-base font-medium">Tokenomics</a>
              <a href="#swap" className="text-gray-200 hover:text-purple-500 block px-3 py-2 rounded-md text-base font-medium">Swap</a>
              <a href="#news" className="text-gray-200 hover:text-purple-500 block px-3 py-2 rounded-md text-base font-medium">News</a>
              <button
                onClick={() => {
                  setIsWalletModalOpen(true);
                  setIsOpen(false);
                }}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Connect Wallet
              </button>
            </div>
          </div>
        )}
      </nav>
      
      <WalletModal
        isOpen={isWalletModalOpen}
        onClose={() => setIsWalletModalOpen(false)}
      />
    </>
  );
}