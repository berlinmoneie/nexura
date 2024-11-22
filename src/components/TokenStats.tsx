import { Activity, Users, Wallet } from 'lucide-react';
import PriceChart from './PriceChart';

export default function TokenStats() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-black/20 backdrop-blur-lg p-6 rounded-xl border border-purple-500/20">
          <div className="flex items-center gap-4">
            <div className="bg-purple-500/20 p-3 rounded-lg">
              <Activity className="h-6 w-6 text-purple-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Market Cap</p>
              <p className="text-2xl font-bold text-gray-100">$2.5M</p>
            </div>
          </div>
        </div>
        
        <div className="bg-black/20 backdrop-blur-lg p-6 rounded-xl border border-purple-500/20">
          <div className="flex items-center gap-4">
            <div className="bg-purple-500/20 p-3 rounded-lg">
              <Users className="h-6 w-6 text-purple-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Holders</p>
              <p className="text-2xl font-bold text-gray-100">2,543</p>
            </div>
          </div>
        </div>
        
        <div className="bg-black/20 backdrop-blur-lg p-6 rounded-xl border border-purple-500/20">
          <div className="flex items-center gap-4">
            <div className="bg-purple-500/20 p-3 rounded-lg">
              <Wallet className="h-6 w-6 text-purple-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Total Supply</p>
              <p className="text-2xl font-bold text-gray-100">1B</p>
            </div>
          </div>
        </div>
      </div>

      <PriceChart />
    </div>
  );
}