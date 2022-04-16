import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [categories, setCategories] = useState(['All']);
  const [menuItems, setMenuItems] = useState(items);
  const [allMenuItems, setAllMenuItems] = useState(items);

  menuItems.map(item => {
    if(!categories.includes(item.category)) {
      setCategories([...categories, item.category]);
    }
  });

  const filterItems = (category) => {
    const filteredMenuItems = [];
    if(category === 'All') {
      setMenuItems(allMenuItems);
    } else {
      allMenuItems.map(item => {
        if(item.category === category && !filteredMenuItems.includes(item)) {
          filteredMenuItems.push(item);
        }
      })
      setMenuItems(filteredMenuItems);
    }
  }

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories filterItems={filterItems} categories={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default App;
