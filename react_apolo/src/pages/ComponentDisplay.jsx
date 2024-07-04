import { useState } from 'react';
import Component from '../component/Component';
import { Company } from '../dummyData/DummyData';
import { CiSearch } from "react-icons/ci";

const ComponentDisplay = () => {
    const [companies, setCompanies] = useState(Company);
    const [search, setSearch] = useState("");

    return (
        <div>
            <div className='flex flex-row px-4 w-full mt-4'>
                <div className="relative w-2/3">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
                    />
                    <CiSearch className="absolute top-0 left-0 mt-3 ml-3 text-gray-400" />
                    <button className='ml-3 bg-blue-500 text-white py-2 px-4 rounded-lg'>Search</button>
                </div>
                <div className='w-1/3 p-3'>
                    <select className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500'>
                        <option value="all-categories">All Categories</option>
                        <option value="culture">Culture</option>
                        <option value="technology">Technology</option>
                        <option value="health">Health</option>
                    </select>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 mt-4'>
                {companies.map((company) => (
                    <Component
                        key={company.id}
                        id={company.id}
                        name={company.name}
                        type={company.type}
                        location={company.location}
                    />
                ))}
            </div>
        </div>
    );
};

export default ComponentDisplay;
