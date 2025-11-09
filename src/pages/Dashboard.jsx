export default function Dashboard() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-4">RecoverAura Dashboard</h1>
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600">Total Cases</p>
          <p className="text-3xl font-bold">342</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600">Active Cases</p>
          <p className="text-3xl font-bold">87</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600">Recovered</p>
          <p className="text-3xl font-bold">255</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600">Pending</p>
          <p className="text-3xl font-bold">45</p>
        </div>
      </div>
    </div>
  )
}