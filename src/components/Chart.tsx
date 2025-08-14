import React from 'react';

interface ChartProps {
  data: any[];
  type: 'bar' | 'area';
  color: string;
}

const Chart: React.FC<ChartProps> = ({ data, type, color }) => {
  const maxValue = Math.max(...data.map(d => 
    type === 'bar' ? Math.max(d.onTime || 0, d.delayed || 0) : d.visitors || 0
  ));

  if (type === 'area') {
    return (
      <div className="h-64">
        <svg className="w-full h-full">
          <defs>
            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: color, stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: color, stopOpacity: 0.05 }} />
            </linearGradient>
          </defs>
          
          {data.map((item, index) => {
            const height = (item.visitors / maxValue) * 200;
            const x = (index / (data.length - 1)) * 300;
            const y = 220 - height;
            
            return (
              <g key={index}>
                <circle
                  cx={x}
                  cy={y}
                  r="4"
                  fill={color}
                  className="hover:r-6 transition-all"
                />
                <text
                  x={x}
                  y={245}
                  textAnchor="middle"
                  className="text-xs fill-gray-600"
                >
                  {item.name}
                </text>
              </g>
            );
          })}
          
          <path
            d={`M ${data.map((item, index) => {
              const x = (index / (data.length - 1)) * 300;
              const y = 220 - (item.visitors / maxValue) * 200;
              return `${index === 0 ? 'M' : 'L'} ${x},${y}`;
            }).join(' ')}`}
            stroke={color}
            strokeWidth="2"
            fill="none"
          />
          
          <path
            d={`M ${data.map((item, index) => {
              const x = (index / (data.length - 1)) * 300;
              const y = 220 - (item.visitors / maxValue) * 200;
              return `${index === 0 ? 'M' : 'L'} ${x},${y}`;
            }).join(' ')} L 300,220 L 0,220 Z`}
            fill="url(#areaGradient)"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className="h-64 flex items-end space-x-2">
      {data.map((item, index) => (
        <div key={index} className="flex-1 flex flex-col items-center">
          <div className="w-full flex flex-col space-y-1 mb-2">
            <div 
              className="bg-green-500 rounded-t"
              style={{ height: `${(item.onTime / 100) * 150}px` }}
            />
            <div 
              className="bg-red-500 rounded-b"
              style={{ height: `${(item.delayed / 100) * 150}px` }}
            />
          </div>
          <span className="text-xs text-gray-600">{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Chart;