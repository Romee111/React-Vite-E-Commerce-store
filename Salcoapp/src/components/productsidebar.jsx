import React, { useEffect } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import '../styling/productsidebar.css'; // Ensure your CSS file is correctly imported

const ProductSidebar = () => {
  // const {listSubCategories} = useSubCategories();
  // const [ subCategories, setSubCategories ] = useState([]);
  // useEffect(() => {
  //   const fetchSubCategories = async () => {
  //     const subCategories = await listSubCategories();
  //     setSubCategories(subCategories);
  //   };
  //   fetchSubCategories();
  // } , []);

  return (
         

    <Sidebar>
      <Menu
        menuItemStyles={{
          button: {
            // the active class will be added automatically by react router
            // so we can use it to style the active menu item
            ['&.active']: {
              backgroundColor: '#13395e',
              color: '#b6c8d9',
            },
          },
        }}
      >
        <SubMenu title="Categories">
          <MenuItem component={<Link to="/category1" />}>Category 1</MenuItem>
          <SubMenu title="Subcategory 1.1">
            <MenuItem component={<Link to="/subcategory1-1-item1" />}>Item 1</MenuItem>
            <MenuItem component={<Link to="/subcategory1-1-item2" />}>Item 2</MenuItem>
          </SubMenu>
          <MenuItem component={<Link to="/category2" />}>Category 2</MenuItem>
          <SubMenu title="Subcategory 2.1">
            <MenuItem component={<Link to="/subcategory2-1-item1" />}>Item 1</MenuItem>
            <MenuItem component={<Link to="/subcategory2-1-item2" />}>Item 2</MenuItem>
          </SubMenu>
        </SubMenu>
        <MenuItem component={<Link to="/documentation" />}>Documentation</MenuItem>
        <MenuItem component={<Link to="/calendar" />}>Calendar</MenuItem>
        <MenuItem component={<Link to="/e-commerce" />}>E-commerce</MenuItem>

        {/* Categories with subcategories */}
        <SubMenu title="Categories">
          <MenuItem component={<Link to="/category1" />}>Category 1</MenuItem>
          <SubMenu title="Subcategory 1.1">
            <MenuItem component={<Link to="/subcategory1-1-item1" />}>Item 1</MenuItem>
            <MenuItem component={<Link to="/subcategory1-1-item2" />}>Item 2</MenuItem>
          </SubMenu>
          <MenuItem component={<Link to="/category2" />}>Category 2</MenuItem>
          <SubMenu title="Subcategory 2.1">
            <MenuItem component={<Link to="/subcategory2-1-item1" />}>Item 1</MenuItem>
            <MenuItem component={<Link to="/subcategory2-1-item2" />}>Item 2</MenuItem>
          </SubMenu>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
}

export default ProductSidebar;
