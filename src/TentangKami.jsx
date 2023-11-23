/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from './components/Navbar';
import Logo from './assets/logo.jpeg';
import Footer from './components/Footer';
import Card from 'react-bootstrap/Card';


const TentangKami = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1 className="font-bold text-2x2" style={{ color: 'black', marginLeft: '5%', marginTop: '5%' }}>
          Laundry Ease
        </h1>
        <div className='d-flex justify-content-around' style={{ display: 'flex', alignItems: 'center', marginTop: '1%', fontSize: '18pt' }}>
          <p style={{ textAlign: 'justify', marginLeft: '5%', marginRight: '19%', flex: '1' }}>
            Laundry Ease adalah layanan laundry terpercaya yang menawarkan cuci kering, cuci setrika, dll. Melalui platform online yang mudah digunakan, kami menjemput, membersihkan, dan mengantar pakaian dengan efisien tinggi. Dengan fokus pada kenyamanan dan kehandalan, kami menjadi mitra handal dalam perawatan pakaian Anda.
          </p>
          <img
            src={Logo}
            alt="Logo Laundry Ease"
            style={{ width: '400px', height: 'auto', marginRight:'10%'}}
          />
        </div>

        {/* visi misi */}
        <div>
          <div className="d-flex justify-content-around" style={{ marginTop: "10%", }}>
          <h1 className="text-center flex justify-center items-center" >Visi</h1>
          <h1 className="text-center flex justify-center items-center" >Misi</h1>
          </div>
          {/* bagian card kelebihan kami */}
          <div className="d-flex justify-content-around" style={{ marginTop: "5%" }}>
            {/* Visi*/}
            <Card
              style={{
                width: "30rem",
                height: "20rem",
                boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                borderRadius: "20px",
                border: '1px solid black'
              }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}>
              </div>
              <Card.Body style={{ textAlign: "justify", display: 'flex', justifyContent: 'center' }}>
                <Card.Title style={{ fontWeight: "normal", fontSize:'16pt', marginLeft:'3%', marginRight:'3%', marginTop:'6%' }}>
                Menjadi platform terdepan dalam industri laundry, menyediakan solusi yang inovatif, efisien, dan ramah lingkungan untuk memenuhi kebutuhan pelanggan, sambil mendorong pertumbuhan berkelanjutan bagi mitra bisnis kami 
                </Card.Title>
              </Card.Body>
            </Card>

            {/* Misi*/}
            <Card
              style={{
                width: "30rem",
                height: "20rem",
                boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                borderRadius: "20px",
                border: '1px solid black'
              }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}>
              </div>
              <Card.Body style={{ textAlign: "justify", display: 'flex', justifyContent: 'center' }}>
                <Card.Title style={{ fontWeight: "normal", fontSize:'16pt', marginLeft:'3%', marginRight:'3%', marginTop:'6%' }}>
                Memberikan pengalaman pelanggan terbaik melalui layanan laundry yang cepat, handal, dan hemat waktu, dengan fokus pada kepuasan pelanggan yang tinggi 
                </Card.Title>
              </Card.Body>
            </Card>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default TentangKami;
