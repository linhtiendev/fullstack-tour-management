import React from 'react'
import '../styles/home.css'

import { Container, Row, Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import herovideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'

import Subtitle from '../shared/Subtitle'

import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList'

const Home = () => {
  return (
    <>
    {/* ==================== hero section start ================== */}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center ">
                  <Subtitle subtitle={'Know Before You Go'}/>
                  <img src={worldImg} />
                </div>
                <h1> 
                  Tận hưởng chuyến du lịch và tạo ra những 
                  <span className='highlight'> kỉ niệm</span>
                </h1>
                <p>
                  Những khoảnh khắc đáng nhớ khi du lịch bên
                  người thân, gia đình và bạn bè khi sử dụng dịch vụ của Travel World. 
                  Chúng tôi luôn hỗ trợ khách hàng 24/24 khi khách hàng có thắc mắc 
                  về chính sách ưu đãi và lịch trình khi sử dụng dịch vụ.
                </p>
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box">
                <img src={heroImg} alt=''/>
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box mt-4">
                <video src={herovideo} alt='' controls/>
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt=''/>
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>
      {/* ==================== hero section end ================== */}

      {/* ==================== services section start ================== */}
      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className="services__subtitle">Dịch vụ của chúng tôi</h5>
              <h2 className="services__title">Dịch vụ tốt nhất được cung cấp bởi Travel World</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
      {/* ==================== services section end ================== */}

      {/* ================ featured tour section start =============== */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <Subtitle subtitle={'Khám Phá'}/>
              <h2 className="featured__tour-title">Những tour du lịch nổi bật</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/* ================ featured tour section end =============== */}
    </>
  )
}

export default Home
