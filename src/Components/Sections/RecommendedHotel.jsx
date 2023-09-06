import React, { useState }  from 'react'
import SectionNavigation from './SectionNavigation';
import SectionNavigationTopHotel from './SectionNavigationTopHotel';
import SectionNavigationPopularHotel from './SectionNavigationPopularHotel';

export default function RecommendedHotel() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div>
        <div className='text-[30px] my-[20px] font-bold'>Other Recommended Hotel</div>
        <div>
      <div className="flex">
        {/* Tab buttons */}
        <div
          className={`px-4 pt-2 mr-2 cursor-pointer ${
            activeTab === 0 ? 'text-blue-500' : 'text-gray-500'
          }`}
          onClick={() => handleTabClick(0)}
        >
          Similar hotels nearby
        <div
          className={` ${
            activeTab === 0 ? 'bg-blue-500 mt-2 h-[4px] w-full' : null
          }`}
        >
        </div>
        </div>
        <div
          className={`px-4 pt-2 mr-2 cursor-pointer ${
            activeTab === 1 ? 'text-blue-500' : 'text-gray-500'
          }`}
          onClick={() => handleTabClick(1)}
        >
          Top recommended hotels
        <div
          className={` ${
            activeTab === 1 ? 'bg-blue-500 mt-2 h-[4px] w-full' : null
          }`}
        >
        </div>
        </div>
        <div
          className={`px-4 pt-2 cursor-pointer ${
            activeTab === 2 ? 'text-blue-500' : 'text-gray-500'
          }`}
          onClick={() => handleTabClick(2)}
        >
          Most popular hotels
        <div
          className={` ${
            activeTab === 2 ? 'bg-blue-500 mt-2 h-[4px] w-full' : null
          }`}
        >
        </div>
        </div>
      </div>
      <div className='h-[1px] w-full bg-gray-300'></div>

      {/* Tab content */}
      <div className="mt-2">
        {activeTab === 0 && 
        <div>
          <div>
            <SectionNavigation />
          </div>
        </div>
        }
        {activeTab === 1 && 
        <div>
        <div>
          <SectionNavigationTopHotel />
        </div>
      </div>
      }
        {activeTab === 2 && 
        <div>
        <div>
          <SectionNavigationPopularHotel />
        </div>
      </div>
      }
      </div>
    </div>
    </div>
  )
}
