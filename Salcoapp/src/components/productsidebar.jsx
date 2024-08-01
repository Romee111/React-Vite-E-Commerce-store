import React, { useEffect, useState } from 'react';
import '../styling/productsidebar.css';
import { useCategories } from '../hooks/categoryhooks';
import { useSubCategories } from '../hooks/subcategoryhooks';
import { useNavigate } from 'react-router-dom';
function ProductSidebar() {
    const [sidebar, setSidebar] = useState([]);
    const [expandedCategory, setExpandedCategory] = useState(null);
    const { getallCategory } = useCategories();
    const { listSubCategories } = useSubCategories();

    const navigate = useNavigate();

    useEffect(() => {
        const fetchSidebar = async () => {
            try {
                // Fetch all categories
                const categories = await getallCategory();
                console.log('Fetched categories:', categories);
                
                if (Array.isArray(categories)) {
                    // Fetch subcategories for each category
                    const categoriesWithSubcategories = await Promise.all(categories.map(async (category) => {
                        try {
                            const subcategories = await listSubCategories(category._id);
                            return { ...category, subcategories };
                        } catch (subcatError) {
                            console.error(`Error fetching subcategories for category ${category._id}:`, subcatError);
                            return { ...category, subcategories: [] };
                        }
                    }));

                    console.log('Categories with subcategories:', categoriesWithSubcategories);
                    setSidebar(categoriesWithSubcategories);
                } else {
                    console.error('Categories data is not in expected format:', categories);
                }
            } catch (error) {
                console.error('Error fetching sidebar data:', error);
            }
        };

        fetchSidebar();
    }, []);

    const handleCategoryClick = (id) => {
        // setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
        navigate('/listProduct',{state:{sidebar:sidebar.filter( product => product._id === id)}});
    };

    return (
        <div>
            <div className="cat-head">
            <h5 style={{ textAlign: 'center',  fontWeight: 'bolder', fontSize: '25px',position:'static', }}>Category</h5>
            </div>
            <div className="sidebar">
                <div className="filter-type" style={{ marginTop: '30px' }}>
                    <input id="filter-cat" type="checkbox" name="filter-type" defaultChecked />
                    <ul className="samples">
                        {Array.isArray(sidebar) && sidebar.length > 0 ? (
                            sidebar.map((category) => (
                                <div key={category._id} className="cat-name">
                                    <a
                                        href="#"
                                        onClick={() => handleCategoryClick(category._id)}
                                    >
                                        {category.name}
                                    </a>
                                    {expandedCategory === category._id && (
                                        <ul>
                                            {Array.isArray(category.subcategories) && category.subcategories.length > 0 ? (
                                                category.subcategories.map((subcategory) => (
                                                    <li key={subcategory._id} className='subcat'>{subcategory.name}</li>
                                                ))
                                            ) : (
                                                <li>No subcategories available</li>
                                            )}
                                        </ul>
                                    )}
                                </div>
                            ))
                        ) : (
                            <li>No categories available</li>
                        )}
                    </ul>
                </div>
                <div className="filter-type">
                    <input id="filter-sty" type="checkbox" name="filter-type" defaultChecked />
                    <label htmlFor="filter-sty">
                        <h4>Brands</h4>
                    </label>
                    <ul>
                        <li>Redock Fragrances</li>
                        <li>Redock Beauty</li>
                        <li>Redock Watches</li>
                        <li>Redock Special</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProductSidebar;
