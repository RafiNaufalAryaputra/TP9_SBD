import React, { useState, useEffect } from 'react';

const App = () => {
  const response = {
    page: 1,
    results: [
      {
        userId: 1,
        id: 1,
        title: "Arsenal",
        body: "Arsenal Football Club adalah sebuah klub sepak bola profesional yang bermarkas di London. Didirikan pada 1886, dan memainkan pertandingan kandang mereka di Emirates Stadium. Arsenal memiliki 13 Gelar Liga Inggris dan 14 Piala FA. Arsenal adalah Klub Terbaik di London.", 
        image: "/Arsenal.png",
      },
      {
        userId: 1,
        id: 2,
        title: "Manchester United",
        body: "Manchester United Football Club adalah sebuah klub sepak bola profesional yang bermarkas di Manchester. Didirikan pada 1878, dan memainkan pertandingan kandang mereka di Old Trafford. Manchester United memiliki 20 Gelar Liga Inggris dan 13 Piala FA. Manchester United juga memiliki 3 Gelar Liga Champions UEFA, 1 Liga Eropa UEFA, dan 1 Piala Super UEFA.",
        image: "/MU.png",
      },
      {
        userId: 1,
        id: 3,
        title: "Liverpool",
        body: "Liverpool Football Club adalah sebuah klub sepak bola profesional yang bermarkas di Liverpool. Didirikan pada 1892, dan memainkan pertandingan kandang mereka di Anfield. Liverpool memiliki 20 Gelar Liga Inggris dan 8 Piala FA. Liverpool juga memiliki 6 Gelar Liga Champions UEFA, 3 Liga Eropa UEFA, dan 4 Piala Super UEFA.",
        image: "/Liverpool.jpg",
      },
      {
        userId: 1,
        id: 4,
        title: "Chelsea",
        body: "Chelsea Football Club adalah sebuah klub sepak bola profesional yang bermarkas di London. Didirikan pada 1905, dan memainkan pertandingan kandang mereka di Stamford Bridge. Chelsea memiliki 6 Gelar Liga Inggris dan 8 Piala FA. Chelsea juga memiliki 2 Gelar Liga Champions UEFA, 2 Liga Eropa UEFA, dan 2 Piala Super UEFA.",
        image: "/Chelsea.png",
      },
      {
        userId: 1,
        id: 5,
        title: "Manchester City",
        body: "Manchester City Football Club adalah sebuah klub sepak bola profesional yang bermarkas di Manchester. Didirikan pada 1880, dan memainkan pertandingan kandang mereka di Etihad Stadium. Manchester City memiliki 10 Gelar Liga Inggris dan 7 Piala FA. Manchester City juga memiliki 1 Gelar Liga Champions UEFA, 1 Piala UEFA, dan 1 Piala Super UEFA.",
        image: "/City.png",
      },
      {
        userId: 1,
        id: 6,
        title: "Tottenham Hotspur",
        body: "Tottenham Hotspur Football Club adalah sebuah klub sepak bola profesional yang bermarkas di London. Didirikan pada 1882, dan memainkan pertandingan kandang mereka di Tottenham Hotspur Stadium. Tottenham Hotspur memiliki 2 Gelar Liga Inggris dan 8 Piala FA.",
        image: "/Tottenham.jpg",
      },
    ],
  };

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count !== 0 && count % 10 === 0) {
      alert(`Angka ${count} habis dibagi 10!`);
    }
  }, [count]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Rafi Naufal Aryaputra</div>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Profile</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Contact</a>
        </div>
      </nav>

      {/* Cards Section */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {response.results.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={item.image} alt="Image" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-700 text-sm">{item.body}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Counter Section */}
      <div className="p-6 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-4">Counter Demo</h2>
        <div className="text-5xl mb-4">{count}</div>
        <div className="flex space-x-4">
          <button onClick={() => setCount(count + 1)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            +
          </button>
          <button onClick={() => setCount(count - 1)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            -
          </button>
          <button onClick={() => setCount(0)} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
