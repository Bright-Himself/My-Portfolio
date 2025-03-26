import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-dark-bg shadow-md mt-16">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center text-gray-500 dark:text-dark-text">
          <p>© {new Date().getFullYear()} Bright Jordan Bishio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}