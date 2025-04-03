import Images from '@/components/ui/Images/Images';
import React from 'react';

const Graph = () => {
  const data = [
    { country: 'United States', total: 1500, immigrants: 92.4, ethnicities: 71 ,flag:"/flag/united-states-flag-icon.png" },
    { country: 'Canada', total: 1200, immigrants: 50, ethnicities: 100 ,flag:"/flag/canada-flag-icon.png"},
    { country: 'Australia', total: 200, immigrants: 16.36, ethnicities: 64,flag:"/flag/australia-flag-icon.png" },
    { country: 'New Zealand', total: 500, immigrants: 50, ethnicities: 100 ,flag:"/flag/new-zealand-flag-icon.png"},
    { country: 'Europe', total: 1489.2, immigrants: 89.4, ethnicities: 33 ,flag:"/flag/europe-flag-icon.png"},
    { country: 'Middle East', total: 1002, immigrants: 92.4, ethnicities: 31 ,flag:"/flag/UAE-flag-icon.png"},
    { country: 'Asia Pacific', total: 800, immigrants: 47.2, ethnicities: 46 ,flag:"/flag/china-flag-icon.png"},
  ];

  return (
    <div className="flex flex-col items-center p-10 " style={{ marginTop: "var(--margin-top-lg)" }}>
      <div className="flex justify-center items-end space-x-10">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center w-36">
            <div className="relative flex flex-col items-center w-full">
              <div
                className="bg-[#D5DEFD] w-full rounded-t-xl text-xs font-bold text-blue-700 text-center p-1 relative"
                style={{ height: `${item.total / 2}px` }}
              >
                {item.total} M
              </div>
              <div
                className="bg-[#FF7474] w-full rounded-t-xl text-xs font-bold text-black text-center p-1 absolute bottom-3"
                style={{ height: `${item.immigrants * 4}px` }}
              >
                {item.immigrants} M
              </div>
              <div className="bg-[#030A2F] text-white w-full text-center py-1 rounded-t-xl absolute bottom-0">
                {item.ethnicities}
              </div>
            </div>
          
          </div>
        ))}
      </div>
      <div className='flex justify-center gap-10 mt-6'>
      {data.map((item, index) => (
        <div
          key={index}
          className={`border border-gray-300 shadow-lg shadow-gray-400 rounded-lg w-36 flex flex-col items-center justify-center p-3 ${
            item.country === 'United States' ? 'border-purple-500' : ''
          }`}
        >
          <Images src={item.flag} alt={item.country} width={50} height={50}/>
        
          <p className="text-sm">{item.country}</p>
        </div>
      ))}
    </div>
      
      <div className="flex space-x-4 mt-6">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-[#D5DEFD] shadow-md"></div>
          <p className="text-xs text-black">Total Population in Millions (M)</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-[#FF7474]"></div>
          <p className="text-xs">Immigrant Population in Millions (M)</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-[#030A2F]"></div>
          <p className="text-xs">Total Ethnicities</p>
        </div>
      </div>
    </div>
  );
};

export default Graph;