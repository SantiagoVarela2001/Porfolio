import React, { useEffect, useState } from 'react';
import "../header/header.css"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={isScrolled ? 'header-scrolled' : ''}>
      <div className="botones">
        <a href='https://www.linkedin.com/in/santiago-valentin-varela/' target="_blank"><button type="submit" className="boton">LinkedIn</button></a>
        <a href='/Analista_Programador_Santiago_Varela.pdf' target="_blank" download><button type="button" className="boton">Descargar CV</button></a>
        <a href='https://github.com/SantiagoVarela2001' target="_blank"><button type="submit" className="boton">GitHub</button></a>
      </div>
    </header>
  );
}

export default Header;