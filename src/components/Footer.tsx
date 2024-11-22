import { Activity, Book, Coins, Github, Globe, Heart, Mail, MessageCircle, Twitter } from 'lucide-react';

export default function Footer() {
  const resources = [
    { name: 'Documentation', href: '#', icon: Book },
    { name: 'API Reference', href: '#', icon: Globe },
    { name: 'GitHub', href: '#', icon: Github },
    { name: 'Status', href: '#', icon: Activity }
  ];

  const community = [
    { name: 'Discord', href: '#', icon: MessageCircle },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'Email', href: '#', icon: Mail }
  ];

  const stats = [
    { label: 'Total Value Locked', value: '$125M+' },
    { label: 'Daily Transactions', value: '50k+' },
    { label: 'Community Members', value: '100k+' },
    { label: 'Countries', value: '150+' }
  ];

  return (
    <footer className="bg-black/40 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Coins className="h-8 w-8 text-purple-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Nexura
              </span>
            </div>
            <p className="text-gray-400">
              Building the future of decentralized finance with innovative cross-chain solutions.
            </p>
            <div className="flex gap-4">
              {community.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-purple-500 transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {resources.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-purple-500 transition-colors flex items-center gap-2"
                    >
                      <Icon className="h-4 w-4" />
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-purple-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#tokenomics" className="text-gray-400 hover:text-purple-500 transition-colors">
                  Tokenomics
                </a>
              </li>
              <li>
                <a href="#news" className="text-gray-400 hover:text-purple-500 transition-colors">
                  Latest News
                </a>
              </li>
              <li>
                <a href="#swap" className="text-gray-400 hover:text-purple-500 transition-colors">
                  Token Swap
                </a>
              </li>
            </ul>
          </div>

          {/* Stats */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Network Stats</h3>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-black/20 p-3 rounded-lg">
                  <p className="text-purple-400 font-semibold">{stat.value}</p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © 2024 Nexura Protocol. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                Cookie Policy
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-pink-500" />
              <span>by the Nexura Team</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}