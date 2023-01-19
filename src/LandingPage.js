import React from 'react';
import "./index.css"
import NavBar from "./components/navbar"
import DiscountTab from './components/discount';
import Clock from './reloj.jpg'
import ClockG from './relojG.jpg'

const LandingPage = () => {
  return (
      <div className="landing-page-container">
        <NavBar/>
        <DiscountTab/>
          <div className="welcome-section">
              <h1 className="welcome-text">Welcome to the GaWear Smartwatch product!
              <br/>
              <h4 className='mt-3' id="subtitle">Practical and elegant</h4>
              <br/>
              <a href="#productSection"><button class="btn btn-danger text-white" >Shop Now</button></a>
              </h1>
          </div>
          <div className="product-section d-flex justify-content-center" id="productSection">
    <div className="row">
        <div className="col-lg-6 text-center d-flex align-items-center mt-5">
            <div className="card ms-5" id="productCard">
                <div className="card-body">
                    <h2 className="card-title product-title">About the GaWear Smartwatch</h2>
                    <p className="card-text product-text">
                      <ul>
                        <li>【New Fashion Smart Watch】This personalized face smart watch is 1.39 inch color screen face. Round dial smart watches have more than 40 styles, or you can choose to set photos as wallpaper to suit different uses and occasions: sports, business negotiations, leisure, etc.</li>
                        <li>【Sports Smartwatch】Activity Tracker has a variety of sports modes, such as cycling, climbing, yoga, etc. Smart watches can help you analyze sports data, and you can adjust your sports goals and plans based on the data. The smart fitness watch can also control the music on the watch, allowing you to have more focused and comfortable energy during exercise.</li>
                        <li>【Multiple Health Detection Functions】This men's smartwatch has heart rate monitoring: 24-hour continuous monitoring and recording, feedback heart rate value, abnormal heart rate alarm. You can record your sleep (deep sleep, light sleep and conscious sleep) and analyze your sleep to regulate your rest time. These health features help you develop a healthier lifestyle.</li>
                        <li>【Smart Assistant & Long Battery Life】 More useful functions like smart reminder, alarm clock, weather forecast, drinking water reminder, sedentary reminder, stopwatch, timer, adjustable brightness, split screen. Large capacity and low power consumption design provides longer battery life, 5-7 days working time after full charge and 15 days standby time.</li>
                        <li>【Bluetooth Compatible & Connection】 The smart watch supports iOS, Android or Bluetooth 5.0, you can scan the built-in QR code of the watch to download and install the "Da Fit", then start your smart life journey. Once connected, you can receive calendars, incoming calls, SNS (Messenger, WhatsApp, etc.) reminders and preview messages.</li>
                      </ul>
                    </p>
                </div>
            </div>
        </div>
        <div className="col-lg-6 text-center d-flex align-items-center justify-content-center mt-5">
            <img src={Clock} alt="product" className="img-fluid " />
        </div>
    </div>
</div>
<div className="detail-section d-flex justify-content-center" id="detailSection">
    <div className="row">
        
        <div className="col-lg-6 text-center d-flex align-items-center justify-content-center mt-5">
            <img src={ClockG} alt="product" className="img-fluid " />
        </div>
        <div className="col-lg-6 text-center d-flex align-items-center mt-5">
            <div className="card me-5" id="detail-card">
                <div className="card-body" >
                    <h2 className="card-title detail-title">Details of the GaWear Smartwatch</h2>
                    <p className="card-text detail-text">
                    Este reloj inteligente os lo trae la marca GaWear, y podeis adquirirlo de color negro, verde y caqui. El tamaño de su pantalla es de 1,39 pulgadas. Tiene bluetooth, te permite realizar llamadas, traquear tus ejercicios, estar atento a tu estado de salud, y mucho mas!
                    <br/>
                    It includes the following components: Smart watch, Charging Data Cable, Manual and Watch Strap
                    <br/>
                    You can buy this watch on amazon for just 66.99 EUR, a super cheap price for such a good quality watch with so many features. Link:
                    <br/>
                    <a href="https://www.amazon.es/GaWear-Inteligente-Smartwatch-Puls%C3%B3metro-Pod%C3%B3metro/dp/B0BHT6T4N3/ref=sr_1_9?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1IM6CDIPMF7N&keywords=relojes&qid=1674063601&sprefix=reljoes%2Caps%2C99&sr=8-9&th=1"><button className="btn btn-danger btn-lg mt-5">Purchase</button></a>
                    </p>
                    
  
                </div>
            </div>
        </div>
    </div>
</div>
<footer class="bg-dark text-white mt-5">
  <div class="container-fluid" id="contact">
    <div class="row">
      <div class="col-md-4">
        <h4>About Us</h4>
        <p>Im a highly motivated and dedicated Web Developer and have worked hard for the last 2 years algonside my full-time education to develop the required knowledge and skills needed to develop simple Web Pages. </p>
      </div>
      <div class="col-md-4">
        <h4>Contact Us</h4>
        <ul class="list-unstyled">
          <li>Email: sam.chadwick.p@gmail.com</li>
          
        </ul>
      </div>
      <div class="col-md-4">
        <h4>Follow Us</h4>
        <ul>
          <li>Instagram: @maineimisSamu</li>
          <li>Twitter: @maineimisSamu</li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <p class="text-center">Copyright &copy; 2023, GaWear Watch</p>
      </div>
    </div>
  </div>
</footer>
      </div>
  );
}

export default LandingPage;
