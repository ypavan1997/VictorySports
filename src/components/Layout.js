import HeaderContainer from "./containers/HeaderContainer";
import React from 'react'
import ModalRoot from "./containers/ModalRoot";
import {Routes} from "../Routes";

export const Layout = ({children}) =>
  <React.Fragment>
    <HeaderContainer>
      <Routes/>
    </HeaderContainer>
    <ModalRoot/>
    <div className="layout-component">
      { children }
    </div>
  </React.Fragment>;


export default Layout;
