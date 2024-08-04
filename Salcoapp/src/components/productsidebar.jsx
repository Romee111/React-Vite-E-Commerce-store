import React, { useState } from 'react';
import '../styling/productsidebar.css';
import { useNavigate } from 'react-router-dom';

function ProductSidebar() {
    const [expandedCategory, setExpandedCategory] = useState(null);
    const navigate = useNavigate();

    const productParents = [
        {
            category: {
                name: "Electronics",
                subcategories: [{
                  name:"Laptops",
                    name:"Mobiles",
                     name:"TVs",
                     name:"Watches",
                     name:"Headphones",
                    name:"Cameras",
                    name:"Earphones",
                    name:"Accessories",
                    name:"Tablets"
            }]
            }
        },
        {
            category: {
                name: "Clothing",
                subcategories: [
                    "Men's Wear",
                    "Women's Wear",
                    "Kids' Wear",
                    "Footwear",
                    "Accessories"
                ]
            }
        },
        {
            category: {
                name: "Men's Wear",
                subcategories: [
                    "Shirts",
                    "Trousers",
                    "Suits",
                    "Casual Wear",
                    "Sportswear"
                ]
            }
        },
        {
            category: {
                name: "Women's Wear",
                subcategories: [
                    "Dresses",
                    "Tops",
                    "Skirts",
                    "Formal Wear",
                    "Sportswear"
                ]
            }
        },
        {
            category: {
                name: "Automotive",
                subcategories: [
                    "Car Accessories",
                    "Motorbike Accessories",
                    "Car Electronics",
                    "Tools & Equipment",
                    "Car Care"
                ]
            }
        },
        {
            category: {
                name: "Medicare",
                subcategories: [
                    "Medical Devices",
                    "Health Supplements",
                    "Personal Care",
                    "Home Healthcare",
                    "Wellness"
                ]
            }
        },
        {
            category: {
                name: "Home & Kitchen",
                subcategories: [
                    "Furniture",
                    "Kitchen Appliances",
                    "Home Decor",
                    "Bedding",
                    "Storage & Organization"
                ]
            }
        },
        {
            category: {
                name: "Books",
                subcategories: [
                    "Fiction",
                    "Non-Fiction",
                    "Children's Books",
                    "Textbooks",
                    "Educational"
                ]
            }
        },
        {
            category: {
                name: "Sports & Outdoors",
                subcategories: [
                    "Fitness Equipment",
                    "Outdoor Gear",
                    "Sports Apparel",
                    "Cycling",
                    "Camping"
                ]
            }
        }
    ];

    const handleCategoryClick = (category) => {
        setExpandedCategory(category.name === expandedCategory ? null : category.name);
    };

    const handleSubcategoryClick = (subcategory) => {
        navigate('/listProduct', { state: { subcategory } });
    };

    return (
        <div>
            <div className="cat-head">
                <h5 style={{ textAlign: 'center', fontWeight: 'bolder', fontSize: '25px', position: 'static' }}>Category</h5>
            </div>
            <div className="sidebar">
                <div className="filter-type" style={{ marginTop: '30px' }}>
                    <input id="filter-cat" type="checkbox" name="filter-type" defaultChecked />
                    <ul className="samples">
                        {productParents.map((parent, index) => (
                            <div key={index} className="cat-name">
                                <a
                                    href="#"
                                    onClick={() => handleCategoryClick(parent.category)}
                                    style={{ fontWeight: 'bold', color: '#000' }}
                                >
                                    {parent.category.name}
                                </a>
                                {expandedCategory === parent.category.name && (
                                    <ul>
                                        {parent.category.subcategories.map((subcategory, subIndex) => (
                                            <li key={subIndex} className='subcat'>
                                                <a
                                                    href="#"
                                                    onClick={() => handleSubcategoryClick(subcategory)}
                                                    style={{ marginLeft: '20px', color: '#555' }}
                                                >
                                                    {subcategory}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
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
