import { useCallback, useEffect, useRef, useState } from "react";

interface Props<T> {
    results?: T[];
    renderItem: (item: T) => JSX.Element;
    onChange?: React.ChangeEventHandler;
    onSelect?: (item: T) => void;
    value?: string;
}

const SearchBar = <T extends object>({results =[], renderItem,onChange,onSelect,value}: Props<T>): JSX.Element => {
    // result contianer visibility handler
    const [showRes,setShowRes] = useState(false);
    const resultContainer = useRef<HTMLDivElement>(null);
    const [focusedIndex, setFocusedIndex] = useState(-1);
    const [defaultValue, setDefaultValue] = useState("");

    const handleSelection = (selectedIndex: number) => {
        const selectedItem = results[selectedIndex];
        if(!selectedItem) return resetSearchComplete();
        onSelect && onSelect(selectedItem);
        resetSearchComplete();
    };

    const resetSearchComplete = useCallback(() => {
        setShowRes(false);
    }, [])

    const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
        const { key } = e;
        let nextIndexCount = 0;
    
        // move down
        if (key === "ArrowDown")
          nextIndexCount = (focusedIndex + 1) % results.length;
    
        // move up
        if (key === "ArrowUp")
          nextIndexCount = (focusedIndex + results.length - 1) % results.length;
    
        // hide search results
        if (key === "Escape") {
          resetSearchComplete();
        }
    
        // select the current item
        if (key === "Enter") {
          e.preventDefault();
          handleSelection(focusedIndex);
        }
    
        setFocusedIndex(nextIndexCount);
    };

    useEffect(() => {
        if (!resultContainer.current) return;

        resultContainer.current.scrollIntoView({
            block: "center",
        });
    }, [focusedIndex]);

    useEffect(() => {
        if(results.length > 0){
            setShowRes(true);
        }else{
            setShowRes(false);
        }
    }, [results]);
  return (
    <div className='flex items-center justify-center'>
        <div tabIndex={1} onKeyDown={handleKeyDown} className="hidden lg:inline ">
            <input 
                type="text" 
                onChange={onChange}
                className="lg:w-[420px] xl:w-[600px] px-5 py-3 text-lg rounded-2xl border focus:border-2 border-gray-500  focus:border-gray-700 outline-none transition"
                placeholder="Search"
            />
            {/* search results */}
            {showRes && 
                <div 
                    className="lg:w-[400px] xl:w-[580px]  absolute mt-1 w-full text-lg p-2 bg-white rounded-bl rounded-br max-h-64 shadow-xl overflow-y-auto"
                >
                    {
                        results.map((item, index) => {
                            return (
                                <div 
                                    key={index} 
                                    ref={index === focusedIndex ? resultContainer : null}
                                    style={{backgroundColor: index === focusedIndex  ? "#bebebe" : ""}}
                                    onMouseDown={() => handleSelection(index)}
                                    className="flex courso-pointer rounded hover:bg-slate-400 hover:bg-opicity-10 p-2" 
                                >
                                    {renderItem(item)} 
                                </div>
                            )
                        })
                    }
                </div>
            }
            
        </div>
        <div  tabIndex={1} onKeyDown={handleKeyDown} className="lg:hidden ">
            <input type="text" 
                onChange={onChange}
                className="w-[168px] ml:w-[250px] px-5 py-3 text-lg rounded-2xl border focus:border-2 border-gray-500  focus:border-gray-700 outline-none transition"
                placeholder="Search"
            />
            {/* search results */}
            {showRes && 
                <div 
                    className="w-[200px] ml:w-[250px] absolute mt-1 w-full text-lg p-2 bg-white rounded-bl rounded-br max-h-44 shadow-xl overflow-y-auto"
                >
                    {
                        results.map((item, index) => {
                            return (
                                <div 
                                    key={index} 
                                    ref={index === focusedIndex ? resultContainer : null}
                                    style={{backgroundColor: index === focusedIndex  ? "#bebebe" : ""}}
                                    onMouseDown={() => handleSelection(index)}
                                    className="courso-pointer rounded hover:bg-slate-400 hover:bg-opicity-10 p-2"
                                >
                                    {renderItem(item)} 
                                </div>
                            )
                        })
                    }
                </div>
            }
        </div>
    </div>
  )
}
export default SearchBar;
