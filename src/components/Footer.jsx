import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';



function Footer() {
  return (
    <div><MDBFooter className='text-center text-lg-start text-muted'>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <img width={'100px'} src="https://www.dignited.com/wp-content/uploads/2019/04/1200px-Disney_logo.svg_-1024x594.png" alt="NoImg" />
              </h6>
              <p>
                Disney+ Hotstar is an online video streaming platform owned by Novi Digital Entertainment Private Limited, a wholly owned subsidiary of Star India Private Limited.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4 mt-5'>
              <h6 className='text-uppercase fw-bold mb-3 mt-4'>Company</h6>
              <p>
                <a href='#!' className='text-reset'>
                  About Us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Careers
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4 mt-5'>
              <h6 className='text-uppercase fw-bold mb-4 mt-4'>View Website</h6>
              <p>
                <a href='#!' className='text-reset'>
                  English
                </a>
              </p>

            </MDBCol>

            <MDBCol md="5" lg="4" xl="4" className='mx-auto mb-md-0 mb-4 mt-3'>
              <div className='d-flex justify-content-center justify-content-lg-between p-5 '>
                <div className='me-5 d-none d-lg-block'>
                  <span>Get connected with us on social networks:</span>
                </div>

                <div>
                  <a href='' className='me-4 fs-5 text-reset'>
                    <MDBIcon fab icon="facebook-f" />
                  </a>
                  <a href='' className='me-4 fs-5  text-reset'>
                    <MDBIcon fab icon="twitter" />
                  </a>
                  <a href='' className='me-4 fs-5  text-reset'>
                    <MDBIcon fab icon="google" />
                  </a>
                  <a href='' className='me-4 fs-5  text-reset'>
                    <MDBIcon fab icon="instagram" />
                  </a>
                </div>
              </div>
              <div className='ms-5'><a><img width={'100px'} src="https://www.edsys.in/wp-content/uploads/Play-Store-Logo-2.png" alt="" /></a>
                <a className='align-items-right'><img width={'100px'} src="https://pluspng.com/img-png/download-on-app-store-png-how-to-download-the-app-1945.png" alt="" /></a></div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)',marginLeft:"75px" }}>
        © 2024 Copyright:All rights Reserved. <b>Terms Of Use | Privacy Policy | FAQ </b><br />
        <a className='text-reset fw-bold' href='https://www.hotstar.com/'> Disney+Hotstar.com
        </a>
      </div>
      </section>
    </MDBFooter></div>
  )
}

export default Footer