import React, { useState, useEffect, useRef } from 'react';
import { useGlobalContext } from './context';

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links }, } =
    useGlobalContext();
  const container = useRef(null);
  const [columns, setColumns] = useState('col-2')


  // setting top bottom
  useEffect(() => {
    setColumns('col-2')
    const submenu = container.current;
    const { center, buttom } = location;
    submenu.style.left = `${center}px`
    submenu.style.top = `${buttom}px`


    if (links.length === 3) {
      setColumns('col-3')
    }
    if (links.length > 3) {
      setColumns('col-4')
    }
  }, [page, location, links])

  return (
    <aside className={`${isSubmenuOpen ? 'submenu show' :
      'submenu'
      }`}
      ref={container}>
      <section>
        <h4>{page}</h4>
        <div className={`submenu-center ${columns}`}>
          {links.map((link, index) => {
            const { url, icon, label } = link
            return (
              <a key={index} href={url}>
                {icon}
                {label}
              </a>
            )
          })}
        </div>
      </section>
    </aside>
  )
};

export default Submenu
