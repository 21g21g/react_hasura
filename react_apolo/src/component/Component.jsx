const Component = ({ id, name, type, location }) => {
    return (
        <div className="bg-slate-300 rounded-xl p-4">
            <h2 className="text-lg font-semibold">{name}</h2>
            <p className="text-sm text-gray-600">{type}</p>
            <p className="text-sm text-gray-600">{location}</p>
            <button className="bg-indigo-600 text-white mt-2 px-4 py-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                View Details
            </button>
        </div>
    );
};

export default Component;