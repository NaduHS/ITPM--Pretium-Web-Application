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
import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit';


function MyWeddingAlbum() {
    return (
      <div className="MyWeddingAlbum">

        <div> <h1>MY WEDDINGS...</h1></div>

         <MDBBreadcrumb>
            <MDBBreadcrumbItem>
             <a href='#'>My Portfolio </a>
             
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem active>Weddings</MDBBreadcrumbItem>
        </MDBBreadcrumb>


        <MDBBtn className="Add-btn-small col-md-2"><h5>Add New Album</h5></MDBBtn>

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
                <MDBCard className='h-100 My-wedding-album-card'>
                 
                  <MDBCardBody>
                    <MDBCardTitle className="card-title"><h3>Kamal + Aruni</h3></MDBCardTitle>
                    <MDBCardText className="card-text">Nikon D7500</MDBCardText>
                    <MDBCardText>Colombo</MDBCardText>
                    <MDBCardText>03.02.2022</MDBCardText>
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
                    <MDBCardTitle className="card-title"><h3>Ashen + Anjalee</h3></MDBCardTitle>
                    <MDBCardText>Nikon D7500</MDBCardText>
                    <MDBCardText>Matara</MDBCardText>
                    <MDBCardText>07.05.2022</MDBCardText>
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
                    <MDBCardTitle className="card-title"><h3>Vimukthi + Vishaka</h3></MDBCardTitle>
                    <MDBCardText>Canon D7500</MDBCardText>
                    <MDBCardText>Piliyandala</MDBCardText>
                    <MDBCardText>06.07.2021</MDBCardText> 
                  </MDBCardBody>
                  <MDBCardFooter>
                    <MDBBtn color='success'>Edit</MDBBtn>
                    <MDBBtn className='mx-2' color='danger'>Delete </MDBBtn>
                  </MDBCardFooter>
                  <a href="#!" >
                  <MDBCardImage
                    src='https://www.lieben.no/wp-content/uploads/2019/03/lieben_union%C3%B8ye_0021.jpg'
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
                    <MDBCardTitle className="card-title"><h3>Gimhan + Nilundi</h3></MDBCardTitle>
                    <MDBCardText>Nikon D7500</MDBCardText>
                    <MDBCardText>Colombo</MDBCardText>
                    <MDBCardText>04.01.2022</MDBCardText>
                  </MDBCardBody>
                  <MDBCardFooter>
                    <MDBBtn color='success'>Edit</MDBBtn>
                    <MDBBtn className='mx-2' color='danger'>Delete </MDBBtn>
                  </MDBCardFooter>
                  <a href="#!" >
                  <MDBCardImage
                    src='https://www.lieben.no/wp-content/uploads/2017/02/nyalnesslide-scaled.jpg'
                    alt='...'
                    position='bottom'
                  />
                  </a>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className='h-100'>
                  <MDBCardBody>
                  <MDBCardTitle className="card-title"><h3>Kasun + Kasuni</h3></MDBCardTitle>
                    <MDBCardText>Nikon D7500</MDBCardText>
                    <MDBCardText>Kalutara</MDBCardText>
                    <MDBCardText>03.02.2021</MDBCardText>
                  </MDBCardBody>
                  <MDBCardFooter>
                  <MDBBtn color='success'>Edit</MDBBtn>
                    <MDBBtn className='mx-2' color='danger'>Delete </MDBBtn>
                  </MDBCardFooter>
                  <a href="#!" >
                  <MDBCardImage
                    src='https://www.lieben.no/wp-content/uploads/2016/12/kirkestranda-scaled.jpg'
                    alt='...'
                    position='bottom'
                  />
                  </a>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className='h-100'>
                  <MDBCardBody>
                    <MDBCardTitle className="card-title"><h3>Bavantha + Tharushi</h3></MDBCardTitle>
                    <MDBCardText>Canon D7500</MDBCardText>
                    <MDBCardText>Colombo</MDBCardText>
                    <MDBCardText>03.04.2020</MDBCardText>
                  </MDBCardBody>
                  <MDBCardFooter>
                    <MDBBtn color='success'>Edit</MDBBtn>
                    <MDBBtn className='mx-2' color='danger'>Delete </MDBBtn>
                  </MDBCardFooter>
                  <a href="#!" >
                  <MDBCardImage
                    src='https://www.lieben.no/wp-content/uploads/2018/01/arctic-scaled.jpg'
                    alt='...'
                    position='bottom'
                  />
                  </a>
                </MDBCard>
              </MDBCol>

              {/* <MDBCol>
                <MDBCard className='h-100'>
                  <MDBCardBody>
                    <MDBCardTitle className="card-title"><h3>Mahesh + Thakshila</h3></MDBCardTitle>
                    <MDBCardText>Canon D7500</MDBCardText>
                    <MDBCardText>Gampaha</MDBCardText>
                    <MDBCardText>03.04.2020</MDBCardText>
                  </MDBCardBody>
                  <MDBCardFooter>
                    <MDBBtn color='success'>Edit</MDBBtn>
                    <MDBBtn className='mx-2' color='danger'>Delete </MDBBtn>
                  </MDBCardFooter>
                  <a href="#!" >
                  <MDBCardImage
                    src='https://www.lieben.no/wp-content/uploads/2018/03/lieben_forsidebilde.jpg'
                    alt='...'
                    position='bottom'
                  />
                  </a>
                </MDBCard>
              </MDBCol> */}
            </MDBRow>

            <MDBBtn className="download-btn col-md-12"><h5>Download Report</h5></MDBBtn>

      </div>
    );
  }

  
export default MyWeddingAlbum;