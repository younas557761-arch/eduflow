'use client';

export default function StaffForm() {
  return (
    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 text-white">
      <h2 className="text-xl font-bold mb-4">Staff Form</h2>
      <p className="text-gray-400 text-sm mb-4">Staff member details enter karein.</p>
      
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-300 mb-1">First Name</label>
            <input 
              type="text" 
              placeholder="First Name" 
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Last Name</label>
            <input 
              type="text" 
              placeholder="Last Name" 
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm text-gray-300 mb-1">Role / Position</label>
          <input 
            type="text" 
            placeholder="e.g. Accountant, Librarian" 
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
          />
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium">
          Save Staff Member
        </button>
      </div>
    </div>
  );
}
