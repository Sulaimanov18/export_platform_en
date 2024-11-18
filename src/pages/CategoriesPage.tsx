import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Psychologists', icon: '🧠' },
  { name: 'Life Coaches', icon: '🌟' },
  { name: 'Career Mentors', icon: '📈' },
  { name: 'Business Coaches', icon: '🏢' },
  { name: 'Financial Advisors', icon: '💰' },
];

const CategoriesPage: React.FC = () => {
  return (
    <div className="p-6">
      <div className="text-3xl font-bold text-center mb-6 font-sans">Browse by Category</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={`/experts/${category.name.toLowerCase().replace(/\s+/g, '-')}`} // Correct dynamic route
            className="block p-4 bg-white border border-gray-300 rounded-xl shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105"
            aria-label={`Browse experts in ${category.name}`} // Accessibility enhancement
            title={`Browse experts in ${category.name}`} // SEO enhancement
          >
            <div className="flex flex-row md:flex-col items-center md:items-center space-x-4 md:space-x-0">
              {/* Icon for each category */}
              <div className="text-3xl md:text-5xl items-center">{category.icon}</div>
              {/* Category Title */}
              <div className="text-lg items-center md:text-xl font-bold text-gray-800">{category.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
