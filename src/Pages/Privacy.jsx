import React from 'react';
import { Link } from 'react-router-dom';

function Privacy() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-600 text-white">
      <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-lg mb-8">This page is currently under development.</p>
      <div className="w-20 h-20 rounded-full bg-blue-800 flex items-center justify-center mb-4">
        <span className="text-white text-2xl">🚧</span>
      </div>
      <p className="text-sm">Check back later for updates!</p>
      <Link to="/" className="text-white mt-4 underline">Go to Home</Link>
    </div>
  );
}

export default Privacy;
