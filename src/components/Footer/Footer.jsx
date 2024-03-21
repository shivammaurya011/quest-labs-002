import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className='py-4 bg-blue-600 text-white text-center w-full'>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="mb-2 md:mb-0">© {year} Your Company</div>
          <div className="md:ml-4">|</div>
          <div className="md:ml-4"><Link to={'/tandc'} className="hover:underline">Terms of Service</Link></div>
          <div className="md:ml-4">|</div>
          <div className="md:ml-4"><Link to={'/privacy'} className="hover:underline">Privacy Policy</Link></div>
        </div>
        <div className="mt-2 text-sm">Designed and developed by <a href="https://vibhamaurya011.github.io/" className='cursor-pointer hover:text-blue-800' rel="noreferrer" target="_blank">Shivam Maurya</a></div>
      </div>
    </footer>
  );
}

export default Footer;
