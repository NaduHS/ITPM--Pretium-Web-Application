import React from "react";
import '../Styles/MyWeddingAlbumStyle.css';

import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
    MDBCarouselCaption
  } from 'mdb-react-ui-kit';

import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';

function MyWeddingAlbum() {
    return (
      <div className="MyWeddingAlbum">

        <div><h1>MY WEDDINGS...</h1></div>

        <div>
            <a href='#'>
                <p>My Portfolio {'>'} Weddings {'>'}</p>
            </a>
        </div> 


      {/* Carousel cards */}

      <MDBCarousel className='Cards' showControls showIndicators dark fade children>
              <MDBCarouselInner>
                <MDBCarouselItem className='active'>
                  <MDBCarouselElement className='banner' src='https://www.lieben.no/wp-content/uploads/2020/05/lieben_storfjord_0013.jpg' alt='1st image' />
                  <MDBCarouselCaption>
                    <h2>My Wedding Albums...</h2>
                  </MDBCarouselCaption>
                </MDBCarouselItem>
                <MDBCarouselItem>
                  <MDBCarouselElement className='banner' src='https://www.lieben.no/wp-content/uploads/2020/05/lieben_storfjord_0021.jpg' alt='2nd image' />
                  <MDBCarouselCaption>
                    <h2>My Wedding Albums...</h2>
                    
                  </MDBCarouselCaption>
                </MDBCarouselItem>

                <MDBCarouselItem>
                  <MDBCarouselElement className='banner' src='https://www.lieben.no/wp-content/uploads/2020/05/lieben_storfjord_0033.jpg' alt='3rd image' />
                  <MDBCarouselCaption>
                    <h2>My Wedding Albums...</h2>
                    
                  </MDBCarouselCaption>
                </MDBCarouselItem>
              </MDBCarouselInner>
            </MDBCarousel>

            {/* --------------------------------Albums------------------------------------------ */}
            <div><br></br><div></div></div>
            <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
              <MDBCol>
                <MDBCard className='h-100'>
                 
                  <MDBCardBody>
                    <MDBCardTitle><h3>Weddings</h3></MDBCardTitle>
                  
                  <MDBCardText>
                    This is a longer card with supporting text below as a natural lead-in to additional content.
                    This content is a little bit longer.
                  </MDBCardText>
                  </MDBCardBody>
                  <MDBCardFooter>
                    <MDBBtn color='success'>Edit</MDBBtn>
                    <MDBBtn className='mx-2' color='danger'>Delete </MDBBtn>
                  </MDBCardFooter>
                  <a href="#!" >
                  <MDBCardImage
                    src='https://www.lieben.no/wp-content/uploads/2020/05/lieben_storfjord_0036.jpg'
                    alt='...'
                    position='bottom'
                   
                  />
                  </a>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className='h-100'>
                  
                  <MDBCardBody>
                    <MDBCardTitle><h3>Birthdays</h3></MDBCardTitle>
                  <MDBCardText>
                    This is a longer card with supporting text below as a natural lead-in to additional content.
                    This content is a little bit longer.
                  </MDBCardText>
                  </MDBCardBody>
                  <MDBCardFooter>
                    <MDBBtn color='success'>Edit</MDBBtn>
                    <MDBBtn className='mx-2' color='danger'>Delete </MDBBtn>
                  </MDBCardFooter>
                  <a href="#!" >
                  <MDBCardImage
                    src='https://www.lieben.no/wp-content/uploads/2017/10/mb_fest-7_web.jpg'
                    alt='...'
                    position='bottom'
                    
                  />
                 </a>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className='h-100'>
                  <MDBCardBody>
                    <MDBCardTitle><h3>Couples</h3></MDBCardTitle> 
                  </MDBCardBody>
                  <MDBCardFooter>
                    <MDBBtn color='success'>Edit</MDBBtn>
                    <MDBBtn className='mx-2' color='danger'>Delete </MDBBtn>
                  </MDBCardFooter>
                  <a href="#!" >
                  <MDBCardImage
                    src='http://www.lieben.no/wp-content/uploads/2020/10/mr-41-1024x683.jpg'
                    alt='...'
                    position='bottom'
              
                  />
                  </a>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <div><br></br></div>
            <MDBRow className='row-cols-2 row-cols-md-3 g-4'>
              <MDBCol>
                <MDBCard className='h-100'>
                  <MDBCardBody>
                    <MDBCardTitle><h3>Family</h3></MDBCardTitle> 
                  </MDBCardBody>
                  <MDBCardFooter>
                    <MDBBtn color='success'>Edit</MDBBtn>
                    <MDBBtn className='mx-2' color='danger'>Delete </MDBBtn>
                  </MDBCardFooter>
                  <a href="#!" >
                  <MDBCardImage
                    src='https://www.lieben.no/wp-content/uploads/2017/02/groven-25_web.jpg'
                    alt='...'
                    position='bottom'
                  />
                  </a>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className='h-100'>
                  <MDBCardBody>
                    <MDBCardTitle><h3>Model</h3></MDBCardTitle>
                  </MDBCardBody>
                  <MDBCardFooter>
                    <MDBBtn color='success'>Edit</MDBBtn>
                    <MDBBtn className='mx-2' color='danger'>Delete </MDBBtn>
                  </MDBCardFooter>
                  <a href="#!" >
                  <MDBCardImage
                    src='http://www.lieben.no/wp-content/uploads/2016/09/09-3494-post/marie17_WEB.jpg'
                    alt='...'
                    position='bottom'
                  />
                  </a>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className='h-100'>
                  <MDBCardBody>
                    <MDBCardTitle><h3>Nature</h3></MDBCardTitle>
                  </MDBCardBody>
                  <MDBCardFooter>
                    <MDBBtn color='success'>Edit</MDBBtn>
                    <MDBBtn className='mx-2' color='danger'>Delete </MDBBtn>
                  </MDBCardFooter>
                  <a href="#!" >
                  <MDBCardImage
                    src='https://images.squarespace-cdn.com/content/v1/544909b6e4b09df9d3d11936/1478878754708-Y6VHK0XRDTZC2M4WAVLS/SeaGrass.jpg?format=1000w'
                    alt='...'
                    position='bottom'
                  />
                  </a>
                </MDBCard>
              </MDBCol>
            </MDBRow>

            <MDBBtn className="Add-btn1 col-md-12"><h5>Download Report</h5></MDBBtn>

      </div>
    );
  }

  
export default MyWeddingAlbum;