
interface Props<T> {
    results?: T[];
    renderItem: (item: T) => JSX.Element;
    onChange?: React.ChangeEventHandler;
}

const SearchBar = <T extends object>({results =[], renderItem,onChange}: Props<T>): JSX.Element => {
  return (
    <div className='flex items-center justify-center'>
        <div className="hidden lg:inline ">
            <input type="text" 
                onChange={onChange}
                className="lg:w-[420px] xl:w-[600px] px-5 py-3 text-lg rounded-full border-2 border-gray-500  focus:border-gray-700 outline-none transition"
                placeholder="Search"
            />
            {/* search results */}
            <div 
                className="lg:w-[400px] xl:w-[580px]  absolute mt-1 w-full text-lg p-2 bg-white rounded-bl rounded-br max-h-44 shadow-xl overflow-y-auto"
            >
                {
                    results.map((item, index) => {
                        return (
                            <div key={index} className="courso-pointer rounded hover:bg-slate-400 hover:bg-opicity-10 p-2">
                                {renderItem(item)}
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <div className="lg:hidden ">
            <input type="text" 
                onChange={onChange}
                className="md:w-[168px] ml:w-[250px] px-5 py-3 text-lg rounded-full border-2 border-gray-500  focus:border-gray-700 outline-none transition"
                placeholder="Search"
            />
            {/* search results */}
            <div 
                className="w-[50px] absolute mt-1 w-full text-lg p-2 bg-white rounded-bl rounded-br max-h-44 shadow-xl overflow-y-auto"
            >
                {
                    results.map((item, index) => {
                        return (
                            <div key={index} className="courso-pointer rounded hover:bg-slate-400 hover:bg-opicity-10 p-2">
                                {renderItem(item)}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}
export default SearchBar;
