import Image from "next/image";

export default function Dashboard() {
  // Sample transaction data
  const transactions = [
    {
      image: "/images/rt1.png", // Ensure this path is correct
      carName: "Nissan GT - R",
      carType: "Sport Car",
      date: "20 July",
      price: "$80.00",
    },
    {
      image: "/images/rt2.png", // Ensure this path is correct
      carName: "Koenigsegg",
      carType: "Sport Car",
      date: "19 July",
      price: "$99.00",
    },
    {
      image: "/images/rt3.png", // Ensure this path is correct
      carName: "Rolls - Royce",
      carType: "Sport Car",
      date: "18 July",
      price: "$96.00",
    },
    {
      image: "/images/rt4.png", // Ensure this path is correct
      carName: "CR-V",
      carType: "Sport Car",
      date: "17 July",
      price: "$80.00",
    },
  ];

  return (
    <>
    <div className="flex flex-col md:flex-row bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <aside className="bg-white h-auto w-full md:w-96 p-4 flex flex-col shadow-md">
        {/* Logo */}
        <div className="font-bold text-2xl mb-10 text-blue-600">Car Rental</div>

        {/* Menu Items */}
        <ul className="space-y-6 leading-loose text-gray-400">
          <li className="flex items-center space-x-2 bg-blue-600 border rounded text-white font-semibold">
            <Image src="/images/home.png" alt="dashboard icon" height={24} width={24} />
            <span>Dashboard</span>
          </li>
          <li className="flex items-center space-x-2 font-semibold">
            <Image src="/images/car.png" alt="dashboard icon" height={24} width={24} />
            <span>Car Rent</span>
          </li>
          <li className="flex items-center space-x-2 font-semibold">
            <Image src="/images/chart2.png" alt="dashboard icon" height={24} width={24} />
            <span>Insight</span>
          </li>
          <li className="flex items-center space-x-2 font-semibold">
            <Image src="/images/wallet.png" alt="dashboard icon" height={24} width={24} />
            <span>Reimburse</span>
          </li>
          <li className="flex items-center space-x-2 font-semibold">
            <Image src="/images/message.png" alt="dashboard icon" height={24} width={24} />
            <span>Inbox</span>
          </li>
          <li className="flex items-center space-x-2 font-semibold">
            <Image src="/images/calendar.png" alt="dashboard icon" height={24} width={24} />
            <span>Calender</span>
          </li>
        </ul>

        {/* Preferences */}
        <div className="mt-32 leading-loose space-y-4 text-gray-400">
          <div>Preferences</div>
          <li className="flex items-center space-x-2 font-semibold">
            <Image src="/images/setting.png" alt="dashboard icon" height={24} width={24} />
            <span>Settings</span>
          </li>
          <li className="flex items-center space-x-2 font-semibold">
            <Image src="/images/info-circle.png" alt="dashboard icon" height={24} width={24} />
            <span>Help & Center</span>
          </li>
          <li className="flex items-center space-x-2 font-semibold">
            <Image src="/images/briefcase.png" alt="dashboard icon" height={24} width={24} />
            <span>Dark Mode</span>
          </li>
          <li className="flex items-center space-x-2 font-semibold">
            <Image src="/images/logout.png" alt="dashboard icon" height={24} width={24} />
            <span>Logout</span>
          </li>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Rental Details */}
          <div className="p-6 bg-white shadow rounded-lg">
            <h2 className="text-xl font-bold mb-4">Details Rental</h2>
            {/* Map Placeholder */}
            <div className="mb-6">
              <Image src="/images/Maps.png" alt="map" width={786} height={272} className="rounded-md" />
            </div>

            {/* Car Details */}
            <div className="flex items-center space-x-4 mb-6">
              <Image src="/images/View 1.png" alt="car" width={132} height={72} className="rounded-md" />
              <div>
                <h2 className="font-bold text-lg">Nissan GT - R</h2>
                <span className="text-gray-500 text-sm">Sport Car</span>
              </div>
            </div>

            {/* Booking Form */}
            {/* <div className="flex flex-col md:flex-row items-center gap-4 mt-8 bg-white p-6 rounded-lg shadow-md">
              <div className="flex-1 flex-col w-full">
                <h3 className="text-lg font-medium mb-2">Pick-Up</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm mb-1">Locations</label>
                    <select className="w-full border rounded-md text-gray-400 p-2">
                      <option>Kota Semarang</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Date</label>
                    <input placeholder="20 july 2022" className="w-full border rounded-md p-2" />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Time</label>
                    <input placeholder="07:00" className="w-full border rounded-md p-2" />
                  </div>
                </div>
              </div>

              <div>
                <button className="bg-blue-500 text-white p-4 rounded-full shadow-md hover:bg-blue-600">↔</button>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Drop-Off</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm mb-1">Locations</label>
                    <select className="w-full border text-gray-400 rounded-md p-2">
                      <option>Kota Semarang</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Date</label>
                    <input placeholder="21 july 2022" className="w-full border rounded-md p-2" />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Time</label>
                    <input placeholder="01:00" className="w-full border rounded-md p-2" />
                  </div>
                </div>
              </div>
            </div> */}
            <div className="mt-4 bg-white">
          <h3 className="leading-[30px] text-xl font-bold p-2">Rental Info</h3>
          <div className="w-full flex justify-between p-2">
            <h5 className="text-[#90A3BF] font-medium text-sm leading-[21px]">
              Please select your rental date
            </h5>
            <h5 className="text-[#90A3BF] font-medium text-sm leading-[21px]">
              Step 2 to 4
            </h5>
          </div>
          <h5 className="p-2">
            <input type="radio" name="" id="" /> Pick Of
          </h5>
          <div className="w-full flex justify-around items-center gap-2 p-4">
            <div className="flex flex-col w-1/2">
              <label htmlFor="">Location</label>
              <input
                type="text"
                placeholder="Enter Your City"
                className="p-4 bg-[#F6F7F9] rounded-lg"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label htmlFor="">Date</label>
              <input
                type="text"
                placeholder="Enter Current Date"
                className="p-4 bg-[#F6F7F9] rounded-lg"
              />
            </div>
          </div>

          <div className="w-full p-4">
            <div className="flex flex-col w-1/2">
              <label htmlFor="">Time</label>
              <input
                type="text"
                placeholder="Enter Current Time"
                className="p-4 bg-[#F6F7F9] rounded-lg"
              />
            </div>
          </div>

          <h5 className="p-2">
            <input type="radio" name="" id="" /> Drop Of
          </h5>
          <div className="w-full flex justify-around items-center gap-2 p-4">
            <div className="flex flex-col w-1/2">
              <label htmlFor="">Location</label>
              <input
                type="text"
                placeholder="Enter Your City"
                className="p-4 bg-[#F6F7F9] rounded-lg"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label htmlFor="">Date</label>
              <input
                type="text"
                placeholder="Enter Current Date"
                className="p-4 bg-[#F6F7F9] rounded-lg"
              />
            </div>
          </div>

          <div className="w-full p-4">
            <div className="flex flex-col w-1/2">
              <label htmlFor="">Time</label>
              <input
                type="text"
                placeholder="Enter Current Time"
                className="p-4 bg-[#F6F7F9] rounded-lg"
              />
            </div>
          </div>
        </div>

            {/* Total Rental Price */}
            <div className="mt-6 font-bold text-xl md:text-[30px]">
              Total Rental Price:
              <div className="flex items-center justify-between mt-2 text-sm md:text-[15px] text-gray-400 font-normal">
                <span>Overall price and includes rental discount</span>
                <span className="text-[30px] text-black font-bold">$80:00</span>
              </div>
            </div>
          </div>

          {/* Right-side Content (Top 5 Car Rentals and Recent Transactions) */}
          <div className="space-y-6">
            {/* Top 5 Car Rentals */}
            <div className="p-6 bg-white shadow rounded-lg">
              <h2 className="font-bold mb-4">Top 5 Car Rental</h2>
              <div className="flex flex-col md:flex-row gap-4 items-start">
                {/* Chart */}
                <div className="relative flex-1">
                  <img src="/images/chart.png" alt="chart"  className=" w-[220px] h-[220px] rounded-md"/>
                  <div className="ml-28 md:ml-20 absolute inset-0 flex items-center justify-center font-bold text-2xl mr-36 text-gray-800">
                    72,030
                  </div>
                </div>

                {/* Car List */}
                <div className="flex">
                  <ul className="list-disc pl-4 leading-loose text-[20px] space-y-6 text-2xl">
                    <li>Sport Car - 17,439</li>
                    <li>SUV - 9,478</li>
                    <li>Coupe - 18,197</li>
                    <li>Hatchback - 12,510</li>
                    <li>MPV - 14,406</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="p-6 bg-white shadow rounded-lg">
              <h2 className="font-bold mb-4">Recent Transactions</h2>
              <ul className="space-y-4">
                {transactions.map((transaction, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Image src={transaction.image} alt="car" width={80} height={50} />
                      <div>
                        <span className="text-gray-700 font-bold">{transaction.carName}</span>
                        <div className="text-gray-400 text-sm">{transaction.carType}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-gray-400 text-sm">{transaction.date}</div>
                      <span className="text-gray-800 font-bold">{transaction.price}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )}