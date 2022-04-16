import React from 'react';

const Menu = (props) => {
  const itemElements = props.items.map((item, index) => {
    return (
      <article className='menu-item' key={index}>
          <img src={item.img} alt="title" className="photo" />
        <div className='item-info'>
          <header>
            <h4>{item.title}</h4>
            <h4 className='price'>${item.price}</h4>
          </header>
        <p className='item-text'>{item.desc}</p>
        </div>
      </article>
    )
  })

  return (
    <div className='section-center'>
      {itemElements}
    </div>
  )
};

export default Menu;
