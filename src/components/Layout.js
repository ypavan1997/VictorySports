import HeaderContainer from "./containers/HeaderContainer";
import React from 'react'
import ModalRoot from "./containers/ModalRoot";

export const Layout = ({children}) =>
  <React.Fragment>
    <HeaderContainer/>
    <ModalRoot/>
    <div className="layout-component">
      { children }
    </div>
  </React.Fragment>;


export default Layout;
