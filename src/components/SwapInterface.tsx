import { ArrowDownUp, Loader2 } from 'lucide-react';
import { useState } from 'react';
import WalletModal from './WalletModal';

export default function SwapInterface() {
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  // Current token price from the chart (0.001 USD)
  const tokenPrice = 0.001;

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!isWalletConnected) {
      e.target.blur();
      setIsWalletModalOpen(true);
    }
  };

  const handleWalletModalClose = () => {
    setIsWalletModalOpen(false);
    // Simulate successful connection
    setIsWalletConnected(true);
  };

  const handleFromAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFromAmount(value);
    // Calculate equivalent amount based on current token price
    setToAmount(value); // 1:1 ratio for demo
  };

  const calculateDollarValue = (amount: string): string => {
    if (!amount) return '$0.00';
    const value = parseFloat(amount) * tokenPrice;
    return `$${value.toFixed(6)}`;
  };

  return (
    <>
      <div className="w-full max-w-md mx-auto bg-black/20 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-purple-500/20">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <label className="text-sm font-medium text-gray-300">From</label>
              <span className="text-sm text-gray-400">Balance: {isWalletConnected ? '0.0' : '---'}</span>
            </div>
            <div className="relative">
              <input
                type="number"
                value={fromAmount}
                onChange={handleFromAmountChange}
                onFocus={handleInputFocus}
                className={`w-full bg-black/30 border border-purple-500/20 rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 ${!isWalletConnected && 'cursor-not-allowed'} ${isWalletConnected && 'pr-[70px]'}`}
                placeholder="0.0"
                disabled={!isWalletConnected}
              />
              {isWalletConnected && (
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-purple-500 hover:bg-purple-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors">
                  MAX
                </button>
              )}
              {fromAmount && (
                <div className="absolute left-4 -bottom-6 text-sm text-gray-400">
                  {calculateDollarValue(fromAmount)}
                </div>
              )}
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            <button className="bg-purple-500/20 p-2 rounded-lg hover:bg-purple-500/30 transition-colors">
              <ArrowDownUp className="text-purple-400" />
            </button>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <label className="text-sm font-medium text-gray-300">To</label>
              <span className="text-sm text-gray-400">Balance: {isWalletConnected ? '0.0' : '---'}</span>
            </div>
            <div className="relative">
              <input
                type="number"
                value={toAmount}
                onChange={(e) => setToAmount(e.target.value)}
                onFocus={handleInputFocus}
                className={`w-full bg-black/30 border border-purple-500/20 rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 ${!isWalletConnected && 'cursor-not-allowed'}`}
                placeholder="0.0"
                disabled={!isWalletConnected}
              />
              {toAmount && (
                <div className="absolute left-4 -bottom-6 text-sm text-gray-400">
                  {calculateDollarValue(toAmount)}
                </div>
              )}
            </div>
          </div>

          <button
            onClick={() => setIsWalletModalOpen(true)}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mt-8"
          >
            Connect Wallet
          </button>
        </div>
      </div>

      <WalletModal
        isOpen={isWalletModalOpen}
        onClose={handleWalletModalClose}
      />
    </>
  );
}