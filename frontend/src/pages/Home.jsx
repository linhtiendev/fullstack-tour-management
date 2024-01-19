import React from 'react'
import '../styles/home.css'

import { Container, Row, Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import herovideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'

import Subtitle from '../shared/Subtitle'


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
              <div className="hero__img-box mt-5">
                <img src={heroImg} alt=''/>
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box mt-4">
                <video src={herovideo} alt='' controls/>
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box">
                <img src={heroImg02} alt=''/>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ==================== hero section end ================== */}
    </>
  )
}

export default Home
