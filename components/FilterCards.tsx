import { useEffect, useState } from "react";
import MediaCard from "./cards";

interface Props<T> {
    results?: T[];
    onChange?: React.ChangeEventHandler;
}

const FilterCards = <T extends object>({onChange}: Props<T>): JSX.Element => {
    // result contianer visibility handler
    
  return (
    <div className='flex items-center justify-center'>
        <div className="hidden md:inline p-4">
            <input type="text" 
                onChange={onChange}
                className="md:w-[500px] lg:w-[700px] px-5 py-3 text-lg rounded-lg border border-gray-500 focus:border-gray-700 transition"
                placeholder="Filter"
            />
            
        </div>
        <div className="md:hidden p-2 pt-5">
            <input type="text" 
                onChange={onChange}
                className="w-[280px] sm:w-[400px] px-5 py-3 text-sm rounded-lg border border-gray-500 focus:border-gray-700 transition"
                placeholder="Filter"
            />
        </div>
    </div>
  )
}
export default FilterCards;
