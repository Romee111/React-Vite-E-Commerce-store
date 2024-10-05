import React, { useEffect, useState } from 'react';
import '../styling/category.css';
import { NavLink } from 'react-bootstrap';
import { useCategories } from '../hooks/categoryhooks';
import { useSubCategories } from '../hooks/subcategoryhooks';
import { useNavigate } from 'react-router-dom';

function Categories() {
  const [categories, setCatgory] = useState([]);
  const [subCategories, setSubCatgory] = useState([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const { getCat } = useCategories();
  const { getsubCat } = useSubCategories();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategory = async () => {
      const data = await getCat();
      setCatgory(data);
      console.log(data);
    };

    const fetchSubCategory = async () => {
      const data = await getsubCat();
      setSubCatgory(data);
      console.log(data);
    };

    fetchCategory();
    fetchSubCategory();
  }, []);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleCategoryClick = () => {
    navigate(`/productinventory`);
  };

  const visibleSubCategories = screenWidth < 768 ? subCategories.slice(0, 4) : subCategories;

  return (
    <div>
      <div className="category">
        <ul>
          {categories.map((category, index) => (
            <li className="list-group" key={index}>{category.name}</li>
          ))}
          <li className="list-group" onClick={handleCategoryClick}>view all</li>
        </ul>
      </div>
      <hr className='w-100' />
      <div className="grid-container">
        <div className="col-md-12">
          <div className="cat-card-1">
            <div className="cat-cards">
              {visibleSubCategories( ).map((data) => (
                <div key={data.id} className="cat-card" onClick={handleCategoryClick}>
                  <div className="cat-card-body">
                    <img src={data.image} className="cat-card-img-top" alt="Product" />
                    <h5 className="cat-card-title">{data.name}</h5>
                  </div>
                  <div className="vertical-line"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
