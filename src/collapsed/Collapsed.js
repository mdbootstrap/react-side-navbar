import React, { useState } from 'react';
import './collapsed.css';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBCollapse,
  MDBRipple,
  MDBBadge,
  MDBInput,
  MDBListGroup, 
  MDBListGroupItem
} from 'mdb-react-ui-kit';

export default function Collapsed() {
  const [showShow, setShowShow] = useState(false);
  const [collapse1, setCollapse1] = useState(true);
  const [collapse2, setCollapse2] = useState(false);

  const toggleShow = () => setShowShow(!showShow);

  return (
    <>
       <link
        href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
        rel="stylesheet"
    	/>
      <MDBCollapse show={showShow} tag="nav" className="d-lg-block bg-white sidebar">
        <div className="position-sticky">
          <MDBListGroup flush className="mx-3 mt-4">
            <MDBRipple rippleTag='span'>
              <MDBListGroupItem tag='a' href='#' action
                className='border-0 border-bottom rounded rounded'
                onClick={() => setCollapse1(!collapse1)}
              >
                <MDBIcon fas icon="tachometer-alt me-3" />
                Expanded menu
              </MDBListGroupItem>
            </MDBRipple>

            <MDBCollapse show={collapse1}>
              <MDBListGroup flush>
                <MDBListGroupItem className="py-1" tag='a' action href='#'>Link</MDBListGroupItem>
                <MDBListGroupItem className="py-1" tag='a' action href='#'>Link</MDBListGroupItem>
                <MDBListGroupItem className="py-1" tag='a' action href='#'>Link</MDBListGroupItem>
                <MDBListGroupItem className="py-1" tag='a' action href='#'>Link</MDBListGroupItem>
              </MDBListGroup>
            </MDBCollapse>

          </MDBListGroup>

          <MDBListGroup flush className="mx-3">
            <MDBRipple rippleTag='span'>
              <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded' onClick={() => setCollapse2(!collapse2)}>
                <MDBIcon fas icon="chart-area me-3" />
                Collapsed menu
              </MDBListGroupItem>
            </MDBRipple>

            <MDBCollapse show={collapse2}>
              <MDBListGroup flush>
                <MDBListGroupItem className="py-1" tag='a' action href='#'>Link</MDBListGroupItem>
                <MDBListGroupItem className="py-1" tag='a' action href='#'>Link</MDBListGroupItem>
                <MDBListGroupItem className="py-1" tag='a' action href='#'>Link</MDBListGroupItem>
                <MDBListGroupItem className="py-1" tag='a' action href='#'>Link</MDBListGroupItem>
              </MDBListGroup>
            </MDBCollapse>
          </MDBListGroup>
        </div>
      </MDBCollapse>

      <MDBNavbar expand='lg' light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarNav className="d-flex flex-row align-items-center w-auto">
            <MDBNavbarToggler
              type='button'
              aria-label='Toggle navigation'
              onClick={toggleShow}
            >
              <MDBIcon icon='bars' fas />
            </MDBNavbarToggler>
            <MDBNavbarBrand href='#'>
              <img
                src='https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.webp'
                height='30'
                alt=''
                loading='lazy'
              />
            </MDBNavbarBrand>

            <MDBCollapse navbar>
              <MDBNavbarItem className="d-flex align-items-center">
                <MDBInput label='Search (ctrl + "/" to focus)' id='form1' type='text' />
                <MDBIcon fas icon="search mx-2" />
              </MDBNavbarItem>
            </MDBCollapse>


          </MDBNavbarNav>
          <MDBNavbarNav className="d-flex flex-row justify-content-end w-auto">

            <MDBNavbarItem className='me-3 me-lg-0 d-flex align-items-center'>
              <MDBDropdown>

                <MDBDropdownToggle tag="a" href="#!" className="hidden-arrow nav-link">
                  <MDBIcon fas icon="bell" />
                  <MDBBadge color='danger' notification pill>
                    1
                  </MDBBadge>
                </MDBDropdownToggle>

                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="#">Some news</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="#">Another news</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="#">Something else here</MDBDropdownLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>


            <MDBNavbarItem className='me-3 me-lg-0'>
              <MDBNavbarLink href='#'>
                <MDBIcon fas icon='fill-drip' />
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='me-3 me-lg-0'>
              <MDBNavbarLink href='#'>
                <MDBIcon fab icon='github' />
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem className='me-3 me-lg-0 d-flex align-items-center'>
              <MDBDropdown>

                <MDBDropdownToggle tag="a" href="#!" className="hidden-arrow nav-link">
                  <img src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg" className="rounded-circle" height="22" alt="" loading="lazy" />
                </MDBDropdownToggle>

                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="#">My profile</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="#">Settings</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="#">Logout</MDBDropdownLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>

        </MDBContainer>
      </MDBNavbar>
    </>
  );
}