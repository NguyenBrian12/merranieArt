import React from "react";
import "./simples-colorlib/css/bootstrap.css";
import "./simples-colorlib/css/font-awesome.min.css";
import "./simples-colorlib/css/linearicons.css";
import "./simples-colorlib/css/magnific-popup.css";
import "./simples-colorlib/css/main.css";
import "./simples-colorlib/css/nice-select.css";
import "./simples-colorlib/css/owl.carousel.css";
import "./simples-colorlib/css/pgwslider.min.css";
import "./simples-colorlib/img/g1.jpg";
import LastDropSign from "./artworks/20190117_134551.jpg";
import AASArtFinal from "./artworks/AASArtFinal.png";
import Ahri from "./artworks/Ahri&Flower_Portfolio.png";
import Angel from "./artworks/Angel 2015.png";
import BOGO from "./artworks/BOGO Deli Deal 2018.png";
import BrianBusinessCard from "./artworks/Brian WebDev Business Card Back__Cropped.png";
import Humanoid from "./artworks/Humanoid (Permit).png";
import Lux from "./artworks/Lux & Flower__Portfolio.png";
import LuxClose from "./artworks/Lux Flower Close-Up__Portfolio.jpg";
import Jhin from "./artworks/Miko Jhin Art BG__Portfolio.png";
import JhinBanner from "./artworks/Miko Twitch Offline Banner.png";
import MF from "./artworks/Miss Fortune & Flower_Portfolio.png";
import Sprite from "./artworks/pixel sprite_Color Test 3.png";
import BabySoraka from "./artworks/received_10155225724098344.png";
import SnowZone from "./artworks/Snow Zone Grand Opening 2015.png";
import Soraka from "./artworks/Soraka_&_Flower_Portfolio.png";
import SorakaClose from "./artworks/Soraka Flower Close-Up_Portfolio.jpg";
import Syndra from "./artworks/Syndra & Flower_Portfolio.png";
import TetraWill from "./artworks/Tetra Leo & Willum Scorpio Art Trade For Morthor.png";
import Mel from "./artworks/921453_10153245565253344_2947847158047255132_o.png";
import Illustrator from "./artworks/Illustrator_Icon_Portfolio.png";
import PS from "./artworks/Photoshop_Icon_Portfolio.png";
import Alligator from "./artworks/alligator.png";
import Butts from "./artworks/BUTTS.png";
import DVAW from "./artworks/DVAW.png";
import flowers from "./artworks/flowers.png";
import horoscopes from "./artworks/horoscopes.png";
import JH from "./artworks/JH.png";
import Recruit from "./artworks/recruit.png";
import Wags from "./artworks/wags.png";

function App() {
  return (
    <div className="App">
      <section class="banner-area relative">
        <div class="overlay overlay-bg"></div>
        <div class="container">
          <div
            class="row fullscreen align-items-center justify-content-center"
            style={{ height: "937px" }}
          >
            <div class="col-lg-10">
              <div class="banner-content text-center">
                <h1 class="text-white">Melanie Chen</h1>
                <p>
                  Freelance Artist studying Graphic Design at San Francisco
                  State University.
                </p>
                <img src={Mel} style={{ width: "50%" }}></img>
                <div style={{ padding: "10px" }}>
                  {" "}
                  <a
                    href="#features"
                    class="genric-btn primary-border primary-border circle"
                  >
                    Explore Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </section>

      <section class="feature-area pt-100 pb-100" id="features">
        <div class="container">
          <div className="row">
            <div class="col-lg-12 col-sm-6 single-feature">
              <h1>Proficient Skills In...</h1>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 col-sm-6 single-feature">
              <div>
                <img src={Illustrator} style={{ width: "25%" }}></img>
              </div>
              <h2>Illustrator</h2>
            </div>
            <div class="col-lg-6 col-sm-6 single-feature">
              <div>
                <img src={PS} style={{ width: "25%" }}></img>
              </div>
              <h2>Photoshop</h2>
            </div>
          </div>
        </div>
      </section>

      <section class="core-feature-area" style={{ padding: "20px" }}>
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-lg-6 core-feat-left">
              <h2>Illustrations: Featuring Chibi Soraka</h2>
              <p>
                The following illustrations demonstrate my creativity and
                versatility with different styles. Some of the illustrations I
                have included here showcase my explorations with various
                mediums, anatomy, and stylistic interpretations. Featured here
                is a work I painted in Photoshop. It was inspired from a game
                called 'League of Legends', owned by Riot Games. I painted the
                character named 'Soraka' if she were much younger and sporting a
                onesie, along with her familiar 'Shisa' who weilds Soraka's
                staff. I enjoyed experimenting with different color palettes and
                tackling different approaches to rendering it.
              </p>
            </div>
            <div class="col-lg-5 core-feature-right">
              <img class="img-fluid" src={BabySoraka} alt=""></img>
            </div>
          </div>
          <section class="core-feature-bottom-area" style={{ padding: "20px" }}>
            <div class="container-fluid">
              <h3 style={{ textAlign: "center" }}>More Illustrations</h3>
              <div class="row gallery-item">
                <div class="col-md-6" style={{ padding: "10px" }}>
                  <img class="img-fluid" src={JH} alt=""></img>
                </div>
                <div class="col-md-6" style={{ padding: "10px" }}>
                  <img class="img-fluid" src={flowers} alt=""></img>
                </div>
                <div class="col-md-6" style={{ padding: "10px" }}>
                  <img class="img-fluid" src={Jhin} alt=""></img>
                </div>
                <div class="col-md-6" style={{ padding: "10px" }}>
                  <img class="img-fluid" src={horoscopes} alt=""></img>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section class="core-feature-area" style={{ padding: "100px" }}>
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-lg-5 core-feature-left">
              <img class="img-fluid" src={Wags} alt=""></img>
            </div>
            <div class="col-lg-6 core-feat-right">
              <h2>Health Promotion & Wellness Internship</h2>
              <p>
                Here are some of the works I created from my experience as a
                Graphic Design Intern for Health Promotion & Wellness at San
                Francisco State University. I learned how to communicate with
                teams, understand varying messages that different departments
                executed, and created flyers of differing styles. What I have
                featured here is a patch for therapy animals. The therapy
                animals being featured were primarily dogs and a cat, hence the
                simple dog and cat graphics. I had to keep in mind that because
                these would be embroidered patches, it can lose some detailing
                if the design aspect were too small. Creating a simple but
                straightforward graphic was a challenge but helped me understand
                that 'less is more'.
              </p>
            </div>
          </div>
          <section class="core-feature-bottom-area" style={{ padding: "20px" }}>
            <div class="container-fluid">
              <h3 style={{ textAlign: "center" }}>More Internship Designs</h3>
              <div class="row gallery-item">
                <div class="col-md-6" style={{ padding: "10px" }}>
                  <img class="img-fluid" src={Recruit} alt=""></img>
                </div>
                <div class="col-md-6" style={{ padding: "10px" }}>
                  <img class="img-fluid" src={Alligator} alt=""></img>
                </div>
                <div class="col-md-6" style={{ padding: "10px" }}>
                  <img class="img-fluid" src={Butts} alt=""></img>
                </div>
                <div class="col-md-6" style={{ padding: "10px" }}>
                  <img class="img-fluid" src={DVAW} alt=""></img>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section
        class="core-feature-area"
        id="features"
        style={{ padding: "20px" }}
      >
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-lg-6 core-feat-left">
              <h2>Freelance Works: Featuring Paid Commission</h2>
              <p>
                Some of the freelance works I have featured below display the
                experiences I had in working with commissioners. I learned how
                to communicate, understand and execute what was requested of the
                commissioner. The illustration I have featured here was a
                commission I had finished mid-January 2019. The commissioner
                requested a character sprite in different frames for a simple
                walking animation. I worked with a partner who sketched out the
                basics and linework for his (the commissioner) character while I
                went in and colored it. Exploring different color schemes and
                theories was a completely new experience for me that helped me
                understand different values and hues to use when it came to
                shading and lighting.{" "}
              </p>
            </div>
            <div class="col-lg-5 core-feature-right">
              <img class="img-fluid" src={Sprite} alt=""></img>
            </div>
          </div>
          <section class="core-feature-bottom-area" style={{ padding: "20px" }}>
            <div class="container-fluid">
              <h3 style={{ textAlign: "center" }}>More Freelance Works</h3>
              <div class="row gallery-item">
                <div class="col-md-6" style={{ padding: "10px" }}>
                  <img class="img-fluid" src={JhinBanner} alt=""></img>
                </div>
                <div class="col-md-6" style={{ padding: "10px" }}>
                  <img class="img-fluid" src={BrianBusinessCard} alt=""></img>
                </div>
                <div class="col-md-6" style={{ padding: "10px" }}>
                  <img class="img-fluid" src={SnowZone} alt=""></img>
                </div>
                <div class="col-md-6" style={{ padding: "10px" }}>
                  <img class="img-fluid" src={BOGO} alt=""></img>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <footer class="section-gap">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-sm-6">
              <div class="single-footer-widget">
                <h6 class="text-uppercase mb-20">Business Inquiries</h6>

                <p>
                  Email: merranieart@gmail.com <br></br>
                  Instagram: merranie
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
