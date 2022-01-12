import React from 'react';
import { IconContext } from 'react-icons';
import { VscBell, VscSearch } from 'react-icons/vsc';
import { BsList } from 'react-icons/bs';

const Nav = () => {
  return (
    <IconContext.Provider value={{ size: '1.4em' }}>
      <VscBell />
      <BsList />
      <VscSearch />
      blue Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, porro?
      Nam consequuntur architecto deleniti doloribus ut fugiat sint amet. Minus
      quis debitis voluptates corrupti enim necessitatibus sequi! Nesciunt,
      nobis eum!
    </IconContext.Provider>
  );
};

export default Nav;
