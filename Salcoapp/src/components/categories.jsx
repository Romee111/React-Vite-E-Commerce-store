import React, { useEffect, useState } from 'react';
import '../styling/category.css';
import { useCategories } from '../hooks/categoryhooks';
import { useSubCategories } from '../hooks/subcategoryhooks';
import { useNavigate } from 'react-router-dom';

function Categories() {
    const [categories, setCategory] = useState([]);
    const [subCategories, setSubCategory] = useState([]);
    const [visibleSubCategories, setVisibleSubCategories] = useState(4); // Default visible subcategories
    const { getCat } = useCategories();
    const { getsubCat } = useSubCategories();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCategory = async () => {
            const data = await getCat();
            setCategory(data);
            console.log(data);
        };

        const fetchSubCategory = async () => {
            const data = await getsubCat();
            setSubCategory(data);
            console.log(data);
        };

        fetchCategory();
        fetchSubCategory();
    }, []);

    useEffect(() => {
        const updateVisibleSubCategories = () => {
            if (window.innerWidth <= 768) {
                setVisibleSubCategories(4); // Show 4 subcategories on small screens
            } else {
                setVisibleSubCategories(16); // Show all on larger screens
            }
        };

        updateVisibleSubCategories(); // Initial call to set visible subcategories

        window.addEventListener('resize', updateVisibleSubCategories);
        return () => window.removeEventListener('resize', updateVisibleSubCategories);
    }, [subCategories]); // Dependency on subCategories to update when it changes

    const handleCategoryClick = () => {
        navigate(`/productinventory`);
    };

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
                            {subCategories.slice(0, visibleSubCategories).map((data) => (
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
