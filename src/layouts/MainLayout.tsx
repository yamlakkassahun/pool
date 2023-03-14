import React, { useLayoutEffect } from 'react';
import $ from 'jquery';
import {
  AlertTriangle,
  AlignJustify,
  Anchor,
  Bell,
  Briefcase,
  Calendar,
  ChevronsDown,
  Command,
  Copy,
  Feather,
  File,
  Film,
  Flag,
  FolderPlus,
  Grid,
  Image,
  Layout,
  Mail,
  Map,
  MapPin,
  Maximize,
  Menu,
  Monitor,
  PieChart,
  ShoppingBag,
  Sliders,
  Target,
  UserCheck,
  Users,
  Video,
} from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import { selectCurrentUser, removeCredentials } from '../feature/auth';
import { Link } from 'react-router-dom';
import { Dashboard } from '@mui/icons-material';
import { Box } from '@mui/material';
import { SvgIcon } from '../components';
import { Helmet } from "react-helmet";
const MainLayout = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);

  const handleLogout = () => {
    dispatch(removeCredentials());
  };

  return (
    <>
      <div id="app">
        <div className="main-wrapper main-wrapper-1">
          <div className="navbar-bg bg-white"></div>
          <nav className="navbar navbar-expand-lg main-navbar sticky ">
            <div className="form-inline mr-auto">
              <ul className="navbar-nav mr-3 show">
                <li>
                  <a
                    href="#"
                    data-toggle="sidebar"
                    className="nav-link nav-link-lg collapse-btn"
                  >
                    <AlignJustify color="gray" size={20} />
                  </a>
                </li>
                <li>
                  <form className="form-inline mr-auto">
                    <div className="search-element">
                      <button className="btn bg-transparent pl-0" type="submit">
                        <i className="fas fa-search"></i>
                      </button>
                      <input
                        className="form-control bg-transparent"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        data-width="200"
                      />

                    </div>
                  </form>
                </li>
              </ul>
            </div>
            <ul className="navbar-nav navbar-right">
              <li className="dropdown">
                <a
                  href="#"
                  data-toggle="dropdown"
                  className="nav-link dropdown-toggle nav-link-lg nav-link-user"
                >
                  {' '}
                  <img
                    alt="image"
                    src="/assets/img/user.png"
                    className="user-img-radious-style"
                  />{' '}
                  <span className="d-sm-none d-lg-inline-block"></span>
                </a>
                <div className="dropdown-menu dropdown-menu-right pullDown">
                  <div className="dropdown-title">Hello Sarah Smith</div>
                  <a href="profile.html" className="dropdown-item has-icon">
                    {' '}
                    <i
                      className="far
                                          fa-user"
                    ></i>{' '}
                    Profile
                  </a>{' '}
                  <a href="timeline.html" className="dropdown-item has-icon">
                    {' '}
                    <i className="fas fa-bolt"></i>
                    Activities
                  </a>{' '}
                  <a href="#" className="dropdown-item has-icon">
                    {' '}
                    <i className="fas fa-cog"></i>
                    Settings
                  </a>
                  <div className="dropdown-divider"></div>
                  <a
                    href="#"
                    className="dropdown-item has-icon text-danger"
                    onClick={() => handleLogout()}
                  >
                    {' '}
                    <i className="fas fa-sign-out-alt"></i>
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          </nav>
          <div className="main-sidebar sidebar-style-2 sticky">
            <aside id="sidebar-wrapper">
              <div className="sidebar-brand">
                <Link to="/dashboard" >
                  {' '}
                  <img
                    alt="image"
                    src="/assets/icons/Logo.png"
                    className="header-logo"
                  />{' '}
                  <span className="logo-name" style={{ textDecoration: 'none', color: 'black' }}>Pool</span>
                </Link>
              </div>
              <ul className="sidebar-menu">
                <li className="menu-header">Dashboard</li>
                <li className="dropdown">
                  <Link to="/dashboard" className="nav-link">
                    <img src='/assets/icons/Dashboard.svg' color='black' alt='Dashboard' />
                    <span className="ml-2">Dashboard</span>
                  </Link>
                </li>
                <li className="menu-header">Orders</li>
                {/* <li className="dropdown">
                  <Link to="/order" className="nav-link">
                    <img className='side-nav' src='/assets/icons/Dashboard1.svg' color='black' alt='Dashboard' />
                    <span className="ml-2">Order</span>
                  </Link>
                </li> */}
                <li className="dropdown">
                  <a href="#" className="menu-toggle nav-link has-dropdown"><img className='side-nav' src='/assets/icons/Dashboard1.svg' color='black' alt='Dashboard' /><span>Order</span></a>
                  <ul className="dropdown-menu">
                    <li><Link to="/order" className="nav-link" >Create Order</Link></li>
                    <li><Link to="/recent-orders" className="nav-link" >Recent Order</Link></li>
                    <li><Link to="/draft-orders" className="nav-link" >Draft Order</Link></li>
                    <li><Link to="/order-summary" className="nav-link" >Order Summary</Link></li>
                  </ul>
                </li>

                <li className="dropdown">
                  <Link to="/bulk-order" className="nav-link">
                    <img src='/assets/icons/Dashboard2.svg' color='black' alt='Dashboard' />
                    <span className="ml-2">Bulk Order</span>
                  </Link>
                </li>
                <li className="menu-header">Payment</li>
                <li className="dropdown">
                  <Link to="/payment" className="nav-link">
                    <img src='/assets/icons/Dashboard3.svg' color='black' alt='Dashboard' />
                    <span className="ml-2">Payment</span>
                  </Link>
                </li>
                <li className="dropdown">
                  <Link to="/pricing-plan" className="nav-link">
                    <img src='/assets/icons/Group.svg' color='black' alt='Dashboard' />
                    <span className="ml-2">Pricing Plan</span>
                  </Link>
                </li>
                <li className="menu-header">Other</li>
                <li className="dropdown">
                  <Link to="/dashboard" className="nav-link">
                    <img src='/assets/icons/Dashboard5.svg' color='black' alt='Dashboard' />
                    <span className="ml-2">Label</span>
                  </Link>
                </li>
                <li className="dropdown">
                  <Link to="/dashboard" className="nav-link">
                    <img src='/assets/icons/Dashboard6.svg' color='black' alt='Dashboard' />
                    <span className="ml-2">Label</span>
                  </Link>
                </li>
                <li className="dropdown">
                  <Link to="/dashboard" className="nav-link">
                    <img src='/assets/icons/Dashboard7.svg' color='black' alt='Dashboard' />
                    <span className="ml-2">Settings</span>
                  </Link>
                </li>
                <li className="dropdown">
                  <Link to="/profile" className="nav-link">
                    <img src='/assets/icons/Dashboard9.svg' color='black' alt='Dashboard' />
                    <span className="ml-2">Users</span>
                  </Link>
                </li>
              </ul>
            </aside>
          </div>
          <div className="main-content app mb-5">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
