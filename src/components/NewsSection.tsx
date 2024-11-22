import { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight, Tag, User } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  image: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Nexura Launches Revolutionary Cross-Chain Bridge",
    excerpt: "Game-changing technology enables seamless asset transfer across multiple blockchains with minimal fees.",
    content: `Nexura has unveiled its groundbreaking cross-chain bridge technology, marking a significant milestone in blockchain interoperability. The new system enables users to transfer assets across multiple blockchain networks with unprecedented efficiency and security.

    The bridge supports major networks including Ethereum, Binance Smart Chain, Polygon, and Avalanche, with more integrations planned for the future. Transaction fees are optimized through innovative batching mechanisms, resulting in cost savings of up to 80% compared to traditional bridge solutions.

    "This is just the beginning of our cross-chain vision," says the Nexura team. "We're committed to building a truly connected blockchain ecosystem where assets can flow freely and securely."`,
    category: "Technology",
    author: "Sarah Chen",
    date: "2024-03-15",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2232&ixlib=rb-4.0.3"
  },
  {
    id: 2,
    title: "Nexura Token Listed on Major Exchanges",
    excerpt: "NXR token now available on leading cryptocurrency exchanges, marking significant milestone for the project.",
    content: `In a major development for the Nexura ecosystem, the NXR token has been listed on several top-tier cryptocurrency exchanges. This expansion in trading venues provides greater accessibility and liquidity for token holders.

    The listings include partnerships with some of the most respected names in the cryptocurrency trading space. Trading pairs include NXR/USDT, NXR/USDC, and NXR/ETH, providing multiple options for traders and investors.

    Market makers have been engaged to ensure smooth trading operations and optimal liquidity across all trading pairs. The team has also implemented advanced security measures to protect traders.`,
    category: "Exchange",
    author: "Michael Roberts",
    date: "2024-03-12",
    image: "https://images.unsplash.com/photo-1618044733300-9472054094ee?auto=format&fit=crop&q=80&w=2142&ixlib=rb-4.0.3"
  },
  {
    id: 3,
    title: "Nexura Governance System Goes Live",
    excerpt: "Community-driven decision making becomes reality with the launch of Nexura's governance platform.",
    content: `The Nexura ecosystem has taken a major step toward decentralization with the launch of its governance system. Token holders can now participate directly in protocol decisions through a sophisticated voting mechanism.

    The governance platform features a user-friendly interface that allows token holders to create proposals, participate in discussions, and vote on key protocol parameters. The system implements a unique quadratic voting mechanism to ensure fair representation.

    Initial governance parameters include protocol fee adjustments, new bridge deployments, and treasury management decisions. The platform also includes delegation features for token holders who wish to entrust their voting power to expert community members.`,
    category: "Governance",
    author: "Elena Martinez",
    date: "2024-03-10",
    image: "https://images.unsplash.com/photo-1616077168079-7e09a677fb2c?auto=format&fit=crop&q=80&w=2148&ixlib=rb-4.0.3"
  },
  {
    id: 4,
    title: "Nexura Partners with Leading DeFi Protocols",
    excerpt: "Strategic partnerships set to enhance liquidity and yield opportunities for token holders.",
    content: `Nexura has announced strategic partnerships with several leading DeFi protocols, significantly expanding the ecosystem's capabilities and opportunities for token holders.

    These partnerships will enable enhanced liquidity mining programs, yield farming opportunities, and cross-protocol integrations. Users can now leverage their NXR tokens across multiple DeFi platforms for maximum returns.

    The integration process has already begun, with the first phase of partnerships going live next month.`,
    category: "Partnership",
    author: "David Kim",
    date: "2024-03-08",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2340&ixlib=rb-4.0.3"
  },
  {
    id: 5,
    title: "Nexura Introduces Advanced Staking Mechanism",
    excerpt: "New staking system offers enhanced rewards and flexible lock-up periods.",
    content: `Nexura has unveiled its next-generation staking mechanism, featuring dynamic reward rates and flexible staking options. The new system allows users to choose from multiple lock-up periods, each with corresponding reward multipliers.

    The platform introduces innovative features such as boost multipliers for long-term stakers and additional rewards for participating in governance. Early adopters will receive bonus rewards during the initial launch phase.

    The staking mechanism has undergone rigorous security audits and has been optimized for gas efficiency.`,
    category: "Product",
    author: "Alex Thompson",
    date: "2024-03-05",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=2340&ixlib=rb-4.0.3"
  },
  {
    id: 6,
    title: "Nexura Ecosystem Fund Launches with $10M",
    excerpt: "New fund aims to accelerate development of projects building on Nexura.",
    content: `Nexura has announced the launch of a $10 million ecosystem fund to support developers and projects building on the platform. The fund will provide grants, technical support, and marketing resources to promising projects.

    Priority will be given to projects focusing on cross-chain infrastructure, DeFi innovations, and user experience improvements. The fund will be managed by a committee of industry experts and community representatives.

    Applications for the first round of funding are now open, with decisions expected within the next month.`,
    category: "Investment",
    author: "Rachel Wong",
    date: "2024-03-03",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=2340&ixlib=rb-4.0.3"
  }
];

export default function NewsSection() {
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);

  return (
    <div className="max-w-7xl mx-auto">
      {selectedArticle ? (
        <div className="space-y-6">
          <button
            onClick={() => setSelectedArticle(null)}
            className="text-purple-400 hover:text-purple-300 flex items-center gap-2"
          >
            ← Back to News
          </button>
          
          <article className="bg-black/20 rounded-2xl overflow-hidden border border-purple-500/20">
            <img
              src={selectedArticle.image}
              alt={selectedArticle.title}
              className="w-full h-[400px] object-cover"
            />
            
            <div className="p-8 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full">
                    {selectedArticle.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {selectedArticle.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {selectedArticle.date}
                  </div>
                </div>
                
                <h1 className="text-3xl font-bold">{selectedArticle.title}</h1>
              </div>
              
              <div className="prose prose-invert max-w-none">
                {selectedArticle.content.split('\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-300">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            </div>
          </article>
        </div>
      ) : (
        <div className="relative">
          <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors swiper-button-prev">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors swiper-button-next">
            <ChevronRight className="w-6 h-6" />
          </button>
          
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {newsItems.map((item) => (
              <SwiperSlide key={item.id}>
                <article
                  className="bg-black/20 rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-colors cursor-pointer h-full"
                  onClick={() => setSelectedArticle(item)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Tag className="h-4 w-4 text-purple-400" />
                      <span className="text-purple-400">{item.category}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold line-clamp-2">{item.title}</h3>
                    <p className="text-gray-400 line-clamp-3">{item.excerpt}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        {item.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {item.date}
                      </div>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
}