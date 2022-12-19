import { FC } from 'react'

interface Props {

}

const SearchBar: FC<Props> = (props): JSX.Element => {
  return (
    <div className='flex items-center justify-center'>
        <div>
            <input type="text" 
                className="w-[600px] px-5 py-3 text-lg rounded-full border-2 border-gray-500  focus:border-gray-700 outline-none transition"
                placeholder="Search"
            />
            {/* search results */}
            <div 
                className="w-[580px] absolute mt-1 w-full text-lg p-2 bg-white rounded-bl rounded-br max-h-36 shadow-xl overflow-y-auto"
            >
                <ul>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
export default SearchBar;
