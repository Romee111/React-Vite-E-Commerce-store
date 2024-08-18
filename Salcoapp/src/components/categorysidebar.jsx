import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styling/categorysidebar.css';

function CategorySidebar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [openSubcategory, setOpenSubcategory] = useState(null);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSubcategory = (index) => {
    setOpenSubcategory(openSubcategory === index ? null : index);
  };

  const handleSubcategoryClick = (categoryName, subcategory) => {
    navigate('/listsproduct', { state: { filter: { category: categoryName, subcategory } } });
  };

  const categories = [
    {
      name: "Men's Collection",
      subcategories: ['Shirts', 'Pants', 'Shoes'],
    },
    {
      name: "Women's Collection",
      subcategories: ['Dresses', 'Handbags', 'Shoes'],
    },
    {
      name: 'Accessories',
      subcategories: ['Watches', 'Belts', 'Hats'],
    },
    {
      name: 'Jewellery',
      subcategories: ['Necklaces', 'Earrings', 'Rings'],
    },
    {
      name: 'Cosmetics & Beauty',
      subcategories: ['Makeup', 'Skincare', 'Haircare'],
    },
    {
      name: 'Sports & Outdoor',
      subcategories: ['Sportswear', 'Equipment', 'Footwear'],
    },
    {
      name: 'Home Appliances',
      subcategories: ['Kitchen', 'Cleaning', 'Electronics'],
    },
    {
      name: 'Medicare',
      subcategories: ['Health Products', 'Supplements', 'Medical Devices'],
    },
    {
      name: 'Automotives',
      subcategories: ['Car Accessories', 'Tools', 'Maintenance'],
    },
    {
      name: 'Stationery',
      subcategories: ['Notebooks', 'Pens', 'Office Supplies'],
    },
  ];

  return (
    <aside className="sidebar" aria-label="Sidebar">
      <ul style={{ marginTop: '10%' }}>
        <li className="dropdown">
          <button type="button" onClick={toggleDropdown}>
            <svg
              className="icon"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span style={{ color: 'white', fontWeight: 'bold', fontSize: '20px' }}>Categories</span>
            <svg
              className="icon ml-auto"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <ul className={isDropdownOpen ? 'show' : ''}>
            {categories.map((category, index) => (
              <li key={index} className="dropdown-subcategory">
                <button type="button" onClick={() => toggleSubcategory(index)} className='dropdown' style={{ color: 'white', fontWeight: 'bold' }}>
                  {category.name}
                  <svg
                    className="icon ml-auto"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <ul className={openSubcategory === index ? 'show' : ''}>
                  {category.subcategories.map((subcategory, subIndex) => (
                    <li key={subIndex}>
                      <a href="#" className='dropdown' onClick={() => handleSubcategoryClick(category.name, subcategory)}>
                        {subcategory}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </aside>
  );
}

export default CategorySidebar;
