import React, { useEffect,useState } from 'react'
import '../styling/productsidebar.css'
import { useSubCategories } from '../hooks/subcategoryhooks'
function porductsidebar() {
    const [sidebar, setSidebar] = useState([])
    const { getsubCat } = useSubCategories()

    useEffect(() => {
        const fetchSidebar = async () => {
            const data = await getsubCat();
            setSidebar(data || [])
            console.log(data);
        }
        fetchSidebar()
    }, [])
  return (
    <div>
        <div className="sidebar">
            <div className="filter-type">
                <input
                    id="filter-cat"
                    type="checkbox"
                    name="filter-type"
                    defaultChecked
                />
                <label htmlFor="filter-cat">
                    <h6>Category</h6>
                </label>
                <ul className="samples">
                {Array.isArray(sidebar) && sidebar.map((list, index) => (
                        <div key={index} className="cat-name">
                            <a href="#">{list.name}</a> {/* Use anchor or link */}
                            <ul>
                            {Array.isArray(list.subcategory) && list.subcategory.map((item, idx) => (
                                    <li key={idx}>{item.name}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </ul>
            </div>
            <div className="filter-type">
                <input
                    id="filter-sty"
                    type="checkbox"
                    name="filter-type"
                    defaultChecked
                />
                <label htmlFor="filter-sty">
                    <h4>Redoock Hub</h4>
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
  )
}

export default porductsidebar
