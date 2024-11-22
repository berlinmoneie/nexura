import { createChart, ColorType, UTCTimestamp } from 'lightweight-charts';
import { useEffect, useRef, useState } from 'react';

interface ChartData {
  time: UTCTimestamp;
  value: number;
  volume?: number;
}

const generatePriceData = (days: number, startPrice: number): ChartData[] => {
  const data: ChartData[] = [];
  let currentPrice = startPrice;
  const volatilityBase = 0.015;
  const trendBias = 0.002;
  const volumeBase = 500000;
  
  const now = new Date();
  const startDate = new Date(now.getTime() - (days * 24 * 60 * 60 * 1000));
  
  // Ensure unique timestamps by using hourly intervals
  const hourMs = 3600 * 1000;
  for (let time = startDate.getTime(); time <= now.getTime(); time += hourMs) {
    const date = new Date(time);
    const timeOfDay = date.getHours();
    const dayOfWeek = date.getDay();
    
    let volatility = volatilityBase;
    if (timeOfDay >= 9 && timeOfDay <= 16) {
      volatility *= 1.5;
    }
    
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      volatility *= 0.7;
    }
    
    const random = Math.random();
    const change = (random - 0.5) * volatility + trendBias;
    
    const periodicEffect = 
      Math.sin(timeOfDay * Math.PI / 12) * 0.001 + 
      Math.sin(dayOfWeek * Math.PI / 3.5) * 0.002;
    
    currentPrice = Math.max(0.0001, currentPrice * (1 + change + periodicEffect));
    
    const volume = Math.floor(
      volumeBase * (1 + Math.random() * 0.5) * 
      (timeOfDay >= 9 && timeOfDay <= 16 ? 1.5 : 0.7) * 
      (dayOfWeek === 0 || dayOfWeek === 6 ? 0.6 : 1)
    );
    
    // Ensure unique timestamps by using seconds precision
    const timestamp = Math.floor(time / 1000) as UTCTimestamp;
    
    data.push({
      time: timestamp,
      value: currentPrice,
      volume
    });
  }
  
  return data;
};

const timeframes = [
  { label: '24H', days: 1 },
  { label: '7D', days: 7 },
  { label: '30D', days: 30 },
  { label: '3M', days: 90 },
  { label: '1Y', days: 365 }
] as const;

const formatPrice = (price: number) => {
  if (price < 0.0001) return price.toExponential(4);
  if (price < 0.01) return price.toFixed(6);
  if (price < 1) return price.toFixed(4);
  return price.toFixed(2);
};

const formatVolume = (volume: number) => {
  if (volume >= 1e9) return `${(volume / 1e9).toFixed(2)}B`;
  if (volume >= 1e6) return `${(volume / 1e6).toFixed(2)}M`;
  if (volume >= 1e3) return `${(volume / 1e3).toFixed(2)}K`;
  return volume.toString();
};

export default function PriceChart() {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const [selectedTimeframe, setSelectedTimeframe] = useState<typeof timeframes[number]>(timeframes[0]);
  const [priceStats, setPriceStats] = useState({
    current: 0.001,
    high: 0.001,
    low: 0.001,
    volume: 0,
    change: 0,
    changePercent: 0
  });

  useEffect(() => {
    if (!chartContainerRef.current) return;

    try {
      const chartData = generatePriceData(selectedTimeframe.days, 0.001);
      
      if (chartData.length === 0) {
        console.error('No chart data generated');
        return;
      }

      const currentPrice = chartData[chartData.length - 1].value;
      const startPrice = chartData[0].value;
      const high = Math.max(...chartData.map(d => d.value));
      const low = Math.min(...chartData.map(d => d.value));
      const volume = chartData.reduce((sum, d) => sum + (d.volume || 0), 0);
      const change = currentPrice - startPrice;
      const changePercent = (change / startPrice) * 100;
      
      setPriceStats({
        current: currentPrice,
        high,
        low,
        volume,
        change,
        changePercent
      });

      const chart = createChart(chartContainerRef.current, {
        layout: {
          background: { type: ColorType.Solid, color: 'transparent' },
          textColor: '#9ca3af',
        },
        grid: {
          vertLines: { color: '#1f2937' },
          horzLines: { color: '#1f2937' },
        },
        width: chartContainerRef.current.clientWidth,
        height: 400,
        rightPriceScale: {
          borderVisible: false,
        },
        timeScale: {
          borderVisible: false,
          timeVisible: true,
          secondsVisible: false,
        },
      });

      const mainSeries = chart.addAreaSeries({
        lineColor: '#8b5cf6',
        topColor: '#8b5cf640',
        bottomColor: '#8b5cf610',
        lineWidth: 2,
        crosshairMarkerVisible: true,
        crosshairMarkerRadius: 6,
        priceFormat: {
          type: 'price',
          precision: 6,
          minMove: 0.000001,
        },
      });

      const volumeSeries = chart.addHistogramSeries({
        color: '#8b5cf620',
        priceFormat: {
          type: 'volume',
        },
        priceScaleId: '',
      });

      // Set data with proper error handling
      try {
        mainSeries.setData(chartData.map(({ time, value }) => ({ time, value })));
        volumeSeries.setData(chartData.map(({ time, volume }) => ({ 
          time, 
          value: volume || 0,
          color: '#8b5cf640'
        })));
        chart.timeScale().fitContent();
      } catch (error) {
        console.error('Error setting chart data:', error);
      }

      const handleResize = () => {
        if (chartContainerRef.current) {
          chart.applyOptions({ width: chartContainerRef.current.clientWidth });
        }
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        chart.remove();
      };
    } catch (error) {
      console.error('Error creating chart:', error);
    }
  }, [selectedTimeframe]);

  return (
    <div className="bg-black/20 backdrop-blur-lg p-6 rounded-xl border border-purple-500/20">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold">Nexura Price</h3>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-2xl font-bold">${formatPrice(priceStats.current)}</span>
              <span className={`text-sm ${priceStats.changePercent >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {priceStats.changePercent >= 0 ? '↑' : '↓'} {Math.abs(priceStats.changePercent).toFixed(2)}%
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            {timeframes.map((timeframe) => (
              <button
                key={timeframe.label}
                onClick={() => setSelectedTimeframe(timeframe)}
                className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                  selectedTimeframe.label === timeframe.label
                    ? 'bg-purple-500 text-white'
                    : 'bg-black/20 text-gray-400 hover:bg-purple-500/20'
                }`}
              >
                {timeframe.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="bg-black/20 p-3 rounded-lg">
            <div className="text-gray-400">24h High</div>
            <div className="font-medium">${formatPrice(priceStats.high)}</div>
          </div>
          <div className="bg-black/20 p-3 rounded-lg">
            <div className="text-gray-400">24h Low</div>
            <div className="font-medium">${formatPrice(priceStats.low)}</div>
          </div>
          <div className="bg-black/20 p-3 rounded-lg">
            <div className="text-gray-400">24h Volume</div>
            <div className="font-medium">${formatVolume(priceStats.volume)}</div>
          </div>
          <div className="bg-black/20 p-3 rounded-lg">
            <div className="text-gray-400">Market Cap</div>
            <div className="font-medium">$2.5M</div>
          </div>
        </div>

        <div ref={chartContainerRef} />
      </div>
    </div>
  );
}