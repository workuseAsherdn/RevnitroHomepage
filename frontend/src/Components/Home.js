import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import { Carousel } from "react-bootstrap";
export default function Home() {
  const [visibleSection, setVisibleSection] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  const handleButtonClick = (sectionIndex) => {
    setVisibleSection(sectionIndex);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <div className="revnitrobodyblack">
        {/* <!-----------------------------------------------Banner--------------------------------------> */}

        <div className="DesktopBannerHides">
          <Carousel>
            <Carousel.Item style={{ background: "white" }}>
              <img
                className="d-block w-100"
                src="./images/MobilePageFirstImage.JPG"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 className="HeadingBannerImageTextDiv">RTR 310</h3>

                <p className="BannerImgParatext">
                  40 Years of Racing Heritage forms the Essence of Apache. The
                  moniker Standing for Racing Throttle Response.
                  <div>
                    <a
                      target="_blank"
                      href="https://www.tvsmotor.com/tvs-apache/apache-rtr-310#racing-dna-section"
                    >
                      <button className="KnowmoreBannerImageButton">
                        Know More
                      </button>
                    </a>
                  </div>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ background: "white" }}>
              <img
                className="d-block w-100"
                src="./images/MobilePageSecondmage.png"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3 className="HeadingBannerImageTextDiv">
                  New Scrambler 400X
                </h3>
                <p className="BannerImgParatext">
                  Timeless style and modern capability with all-road attitude.
                  Find out why you need to experience the Scrambler 400 X
                  <div>
                    <a
                      target="_blank"
                      href="https://www.triumphmotorcycles.in/motorcycles/classic/scrambler-400-x/"
                    >
                      <button className="KnowmoreBannerImageButton">
                        Know More
                      </button>
                    </a>
                  </div>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ background: "white" }}>
              <img
                className="d-block w-100"
                src="./images/MobilePageThirdimage.png"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3 className="HeadingBannerImageTextDiv">Karizma XMR</h3>
                <p className="BannerImgParatext">
                  Most Powerful in its class, Max Power 25.5 Ps @ 9250 RPM and
                  Max Torque 20.4 Nm @ 7250 RPM
                  <div>
                    <a
                      target="_blank"
                      href="https://www.heromotocorp.com/en-in/motorcycles/KarizmaXMR.html"
                    >
                      <button className="KnowmoreBannerImageButton">
                        Know More
                      </button>
                    </a>
                  </div>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="MobileBannerHides">
          <Carousel>
            <Carousel.Item style={{ background: "white" }}>
              <img
                className="d-block w-100"
                src="./images/FirsdtBannerIamge.png"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 className="HeadingBannerImageTextDiv">RTR 310</h3>

                <p className="BannerImgParatext">
                  40 Years of Racing Heritage forms the Essence of Apache. The
                  moniker Standing for Racing Throttle Response.
                  <div>
                    <a
                      target="_blank"
                      href="https://www.tvsmotor.com/tvs-apache/apache-rtr-310#racing-dna-section"
                    >
                      <button className="KnowmoreBannerImageButton">
                        Know More
                      </button>
                    </a>
                  </div>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ background: "white" }}>
              <img
                className="d-block w-100"
                src="./images/WesbiteMobileBannertwo.png"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3 className="HeadingBannerImageTextDiv">
                  New Scrambler 400X
                </h3>
                <p className="BannerImgParatext">
                  Timeless style and modern capability with all-road attitude.
                  Find out why you need to experience the Scrambler 400 X
                  <div>
                    <a
                      target="_blank"
                      href="https://www.triumphmotorcycles.in/motorcycles/classic/scrambler-400-x/"
                    >
                      <button className="KnowmoreBannerImageButton">
                        Know More
                      </button>
                    </a>
                  </div>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ background: "white" }}>
              <img
                className="d-block w-100"
                src="./images/WesbiteMobileBannerthree.png"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3 className="HeadingBannerImageTextDiv">Karizma XMR</h3>
                <p className="BannerImgParatext">
                  Most Powerful in its class, Max Power 25.5 Ps @ 9250 RPM and
                  Max Torque 20.4 Nm @ 7250 RPM
                  <div>
                    <a
                      target="_blank"
                      href="https://www.tvsmotor.com/tvs-apache/apache-rtr-310#racing-dna-section"
                    >
                      <button className="KnowmoreBannerImageButton">
                        Know More
                      </button>
                    </a>
                  </div>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        {/* <!---------------------------------------------------Banner--------------------------------------> */}

        {/* <!---------------------------------------------------Third Section--------------------------------------> */}
        <div className="thirdsectionRevnitro">
          <div>
            <h1>REVNITRO</h1>
            <h3>REDEFING AUTOMOBILE JOURNALISM</h3>
          </div>
        </div>
        {/* <!---------------------------------------------------Third Section--------------------------------------> */}
        {/* <!---------------------------------------------------Review Section--------------------------------------> */}
        <div className="reviewmargintopsection">
          <div className="reviewsectionrevnitrro">
            <div
              className="bikereviewsrreviewsection"
              onClick={() => handleButtonClick(0)}
            >
              <div className="mobilehidden">
                &nbsp; &nbsp; &nbsp;BIKE&nbsp;REVIEWS
              </div>
              <div className="desktophiddenrevnitro">BIKE REVIEWS</div>

              {visibleSection === 0 && (
                <div className="marginbottombikedeatisl"></div>
              )}
            </div>

            <div
              className="carreviewsrreviewsection"
              onClick={() => handleButtonClick(1)}
            >
              <div className="mobilehidden">
                &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;CAR&nbsp;REVIEWS
              </div>
              <div className="desktophiddenrevnitro">CAR REVIEWS</div>

              {visibleSection === 1 && (
                <div className="marginbottombikedeatisl12xsxs"></div>
              )}
            </div>

            <div
              className="riderreviewsrreviewsection"
              onClick={() => handleButtonClick(2)}
            >
              <div className="mobilehidden">
                &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;RIDER&nbsp;REVIEWS
              </div>
              <div className="desktophiddenrevnitro">RIDE REVIEWS</div>

              {visibleSection === 2 && (
                <div className="marginbottombikedeatisl12csds"></div>
              )}
            </div>

            <div
              className="techinicalreviewsrreviewsection"
              onClick={() => handleButtonClick(3)}
            >
              <div className="mobilehidden">TECHINICAL&nbsp;REVIEWS</div>
              <div className="desktophiddenrevnitro">TECHINCAL REVIEWS</div>

              {visibleSection === 3 && (
                <div className="marginbottombikedeatisl12ssdds"></div>
              )}
            </div>
          </div>

          {/* <!-------------------------Bike Section----------------------> */}
          <div className="bikereviewdivs">
            {visibleSection === 0 && (
              <div className="bikereviewcards">
                {/* <!-------------------------Bike one----------------------> */}
                <div className="bikereview1">
                  <div className="bike1cards">
                    <div>
                      <img
                        className="BikeRevirewSectrionImagesize"
                        src="./images/karzima.png"
                        alt="karzima bike"
                        title="karzima bike"
                      />
                    </div>
                    <div className="bikereviewcontent">
                      Hero Motocorp revs up premium motorcycle segment launches
                      iconic motorcycle ‘Karizma XMR’ in its new
                      contemporary avatar
                    </div>
                    <div className="readmore">
                      <a href="./blog-bike-review/karizma.html">Read more</a>
                    </div>
                  </div>
                </div>
                {/* <!-------------------------Bike two----------------------> */}
                <div className="bikereview1">
                  <div className="bike1cards">
                    <div>
                      <img
                        className="BikeRevirewSectrionImagesize"
                        src="./images/Triumph400.png"
                        alt="triumph400"
                        title="triumph400"
                      />
                    </div>
                    <div className="bikereviewcontent">
                      New Triumph speed 400 launched in India at price of Rs.
                      2,23,000 , 120+ years of motorcycle manufacturing heritage
                    </div>
                    <div className="readmore">
                      <a href="./blog-bike-review/triumph-launch.html">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>

                {/* <!-------------------------Bike three----------------------> */}
                <div className="bikereview1">
                  <div className="bike1cards">
                    <div>
                      <img
                        className="BikeRevirewSectrionImagesize"
                        src="./images/X440-280.png"
                        alt="Hero Motocorp & Harley-davidson"
                        title="Hero Motocorp & Harley-davidson"
                      />
                    </div>
                    <div className="bikereviewcontent">
                      Hero Motocorp & Harley-davidson co-developed premium
                      motorcycle' Harley-davidson X 440 ' debuts in India
                    </div>
                    <div className="readmore">
                      <a href="./blog-bike-review/harley-x440.html">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>

                {/* <!-------------------------Bike four----------------------> */}
                <div className="bikereview1">
                  <div className="bike1cards">
                    <div>
                      <img
                        className="BikeRevirewSectrionImagesize"
                        src="./images/Rectangle 171 (1).png"
                        alt="TVS-Motor"
                        title="TVS-Motor"
                      />
                    </div>
                    <div className="bikereviewcontent">
                      TVS Motor Company launches TVS Raider Super Squad Edition
                      inspired by the iconic Marvel Super Heroes in Avengers
                    </div>
                    <div className="readmore">
                      <a href="./blog-bike-review/tvs-raider.html">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* <!-------------------------Bike Section--------------------->
          <!-------------------------CAR Section----------------------> */}
          {visibleSection === 1 && (
            <div className="carreviewcards">
              <div className="bikereview1">
                <div className="bike1cards">
                  <div>
                    <img
                      className="BikeRevirewSectrionImagesize"
                      src="./images/Brezza280.png"
                      alt="Maruti-Suzuki-Vitara-Brezza"
                      title="Maruti-Suzuki-Vitara-Brezza"
                    />
                  </div>
                  <div className="bikereviewcontent">
                    The Maruti Suzuki Vitara Brezza was the first big success in
                    the compact SUV segment, becoming the best-selling SUV in
                    India.
                  </div>
                  <div className="readmore">
                    <a href="./blog-car-review/suzuki-breeza.html">Read more</a>
                  </div>
                </div>
              </div>
              <div className="bikereview1">
                <div className="bike1cards">
                  <div>
                    <img
                      className="BikeRevirewSectrionImagesize"
                      src="./images/Citreon280.png"
                      alt=" Citroen"
                      title="Citroen"
                    />
                  </div>
                  <div className="bikereviewcontent">
                    Citroen was late to the Indian market, but it did not waste
                    time; in just over two years,it introduced four vehicles.
                  </div>
                  <div className="readmore">
                    <a href="./blog-car-review/citreon-c3.html">Read more</a>
                  </div>
                </div>
              </div>
              <div className="bikereview1">
                <div className="bike1cards">
                  <div>
                    <img
                      className="BikeRevirewSectrionImagesize"
                      src="./images/Tatanexon280.png"
                      alt="Tata Motors launches the new gen-NEXON"
                      title="Tata Motors launches the new gen-NEXON"
                    />
                  </div>
                  <div className="bikereviewcontent">
                    Tata Motors launches the new gen NEXON with premium design,
                    best-in-class tech features. Book you Tata Nexon today!
                  </div>
                  <div className="readmore">
                    <a href="./blog-car-review/tata-nexon.html">Read more</a>
                  </div>
                </div>
              </div>
              <div className="bikereview1">
                <div className="bike1cards">
                  <div>
                    <img
                      className="BikeRevirewSectrionImagesize"
                      src="./images/Elevate 280.png"
                      alt=" Honda Elevate"
                      title="Honda Elevate"
                    />
                  </div>
                  <div className="bikereviewcontent">
                    Honda Elevate marks 20,000 cumulative sales milestone in 100
                    days after launch. Book you Honda Elevate today!
                  </div>
                  <div className="readmore">
                    <a href="./blog-car-review/honda-elevator.html">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* <!-------------------------CAR Section---------------------->
          <!-------------------------Rider Section--------------------> */}

          {visibleSection === 2 && (
            <div className="riderreviewcards">
              <div className="bikereview1">
                <div className="bike1cards">
                  <div>
                    <img
                      className="BikeRevirewSectrionImagesize"
                      src="./images/RiderReview1.png"
                      alt="mastering the clutch"
                      title="mastering the clutch"
                    />
                  </div>
                  <div className="bikereviewcontent">
                    Before mastering the clutch, lets get to know how a clutch
                    actually works and what is its actual use in
                    a bike or a car.
                  </div>
                  <div className="readmore">
                    <a href="./blog-rider-review/master-your-clutch.html">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div className="bikereview1">
                <div className="bike1cards">
                  <div>
                    <img
                      className="BikeRevirewSectrionImagesize"
                      src="./images/RiderReview2.png"
                      alt="Braking"
                      title="Braking"
                    />
                  </div>
                  <div className="bikereviewcontent">
                    Braking is an important and lifesaving skill in driving a
                    two-wheeler. One who fails to master it won’t be a
                    good driver at all.
                  </div>
                  <div className="readmore">
                    <a href="./blog-rider-review/master-your-braking.html">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div className="bikereview1">
                <div className="bike1cards">
                  <div>
                    <img
                      className="BikeRevirewSectrionImagesize"
                      src="./images/RiderReview3.png"
                      alt="hill climb"
                      title="hill climb"
                    />
                  </div>
                  <div className="bikereviewcontent">
                    Having a long vacation and planning to go for a hill climb
                    with you loved ones, but afraid of driving a manual car over
                    hills.
                  </div>
                  <div className="readmore">
                    <a href="./blog-rider-review/master-hill-driving.html">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div className="bikereview1">
                <div className="bike1cards">
                  <div>
                    <img
                      className="BikeRevirewSectrionImagesize"
                      src="./images/RiderReview4.png"
                      alt="Manual transmission"
                      title="Manual transmission"
                    />
                  </div>
                  <div className="bikereviewcontent">
                    Manual transmission is one of the most successful
                    transmissions found in a car apart from various types of
                    automatics, because
                  </div>
                  <div className="readmore">
                    <a href="./blog-rider-review/master-manual-gear.html">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* <!-------------------------Rider Section---------------------->
          <!-------------------------Techincal Section------------------> */}

          {visibleSection === 3 && (
            <div className="techincalreviewcards">
              <div className="bikereview1">
                <div className="bike1cards">
                  <div>
                    <img
                      className="BikeRevirewSectrionImagesize"
                      src="./images/Carbonclean-280.png"
                      alt="ENGINE CARBON CLEANING"
                      title="ENGINE CARBON CLEANING"
                    />
                  </div>
                  <div className="bikereviewcontent">
                    Carbon deposit is usual in all engines and unavoidable as
                    said above, but you can slow down the rate and quantity of
                    Carbon getting depostied
                  </div>
                  <div className="readmore">
                    <a href="./blog-techical-review/engine-carbon-cleaning.html">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div className="bikereview1">
                <div className="bike1cards">
                  <div>
                    <img
                      className="BikeRevirewSectrionImagesize"
                      src="./images/AMT.png"
                      alt="AMT (Automated Manual Transmission)"
                      title="AMT (Automated Manual Transmission)"
                    />
                  </div>
                  <div className="bikereviewcontent">
                    AMT stands for Automated Manual Transmission and AGS stands
                    for Auto Geat Shift, There are various problems faced by AMT
                    users. some are listed below.
                  </div>
                  <div className="readmore">
                    <a href="./blog-techical-review/amt-ags-gearbox.html">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div className="bikereview1">
                <div className="bike1cards">
                  <div>
                    <img
                      className="BikeRevirewSectrionImagesize"
                      src="./images/Paint.png"
                      alt="how to
                    maintain your car's or bike's paint"
                      title="how to
                    maintain your car's or bike's paint"
                    />
                  </div>
                  <div className="bikereviewcontent">
                    Baffeled how to keep up the shiningness for a long term,
                    don't worry you are at the right page to know how to
                    maintain your car's or bike's paint
                  </div>
                  <div className="readmore">
                    <a href="./blog-techical-review/car-bike-paint.html">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div className="bikereview1">
                <div className="bike1cards">
                  <div>
                    <img
                      className="BikeRevirewSectrionImagesize"
                      src="./images/Clutch.png"
                      alt="clutch"
                      title="clutch"
                    />
                  </div>
                  <div className="bikereviewcontent">
                    A clutch is a connecting mechanism placed between your
                    vehicle’s transmission and the engine. It plays a vital role
                    in transferring the power
                  </div>
                  <div className="readmore">
                    <a href="./blog-techical-review/clutch-technical.html">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* <!-------------------------Techincal Section------------------> */}
        </div>
        {/* <!---------------------------------------------------Review Section--------------------------------------> */}

        {/* <!--------------------------------------------Bike Service Section--------------------------------------> */}

        <div>
          <div className="bookservicesectionsrevnitro">
            <h2>Book Services & Consultation</h2>
          </div>

          <div className="booksserviceconsultationsflex">
            <div className="icondivleftsection" id="containersssection">
              <div className="bookimageserviceflex">
                <div>
                  <img
                    src="./images/4.png"
                    alt="CAR SERVICE BOOKING "
                    title="CAR SERVICE BOOKING"
                  />
                </div>
                <div className="BOOKINGSERVICEHEADINGS">
                  <a href="https://forms.revnitro.com/CarServiceBooking">
                    CAR SERVICE BOOKING
                  </a>
                </div>
              </div>
              <div className="bookservicesectionmargin"></div>
              <div className="bookimageserviceflex">
                <div>
                  <img
                    src="./images/1.png"
                    alt="BIKE SERVICE BOOKING"
                    title="BIKE SERVICE BOOKING"
                  />
                </div>
                <div className="BOOKINGSERVICEHEADINGS">
                  <a href="https://forms.revnitro.com/BikeServiceBooking">
                    BIKE SERVICE BOOKING
                  </a>
                </div>
              </div>
              <div className="bookservicesectionmargin"></div>
              <div className="bookimageserviceflex">
                <div>
                  <img
                    src="./images/3.png"
                    alt="CAR PURCHASE CONSULTATION"
                    title="CAR PURCHASE CONSULTATION"
                  />
                </div>
                <div className="BOOKINGSERVICEHEADINGS">
                  <a href="https://forms.revnitro.com/CarConsultation">
                    CAR PURCHASE CONSULTATION
                  </a>
                </div>
              </div>
              <div className="bookservicesectionmargin"></div>
              <div className="bookimageserviceflex">
                <div>
                  <img
                    src="./images/2.png"
                    alt="BIKE PURCHASE CONSULTATION"
                    title="BIKE PURCHASE CONSULTATION"
                  />
                </div>
                <div className="BOOKINGSERVICEHEADINGS">
                  <a href="https://forms.revnitro.com/BikeConsultation">
                    BIKE PURCHASE CONSULTATION
                  </a>
                </div>
              </div>

              <div className="bookservicesectionmargin"></div>
              <div className="bookimageserviceflex">
                <div>
                  <img
                    src="./images/5.png"
                    alt="BIKE ECU TUNING"
                    title="BIKE ECU TUNING"
                  />
                </div>
                <div className="BOOKINGSERVICEHEADINGS">
                  <a href="https://forms.revnitro.com/EcuTuning">
                    BIKE ECU TUNING
                  </a>
                </div>
              </div>
              <div className="bookservicesectionmargin"></div>
              <div className="bookimageserviceflex">
                <div>
                  <img
                    src="./images/Racing.png"
                    alt="JOIN OUR RACING"
                    title="JOIN OUR RACING"
                  />
                </div>
                <div className="BOOKINGSERVICEHEADINGS" id="containersssection">
                  <a href="https://forms.revnitro.com/Racing">
                    JOIN OUR RACING
                  </a>
                </div>
              </div>
            </div>
            <div className="videodivrightsection" id="change">
              <video width="650" height="600" autoPlay muted loop>
                <source src="./images/FormsPageVideo.mp4" type="video/mp4" />
                <source src="movie.ogg" type="video/ogg" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* <!--------------------------------------------Bike Service Section--------------------------------------> */}
        {/* <!---------------------------------------------------Dont' Just--------------------------------------> */}

        <div>
          <div className="dontjustnamesection">
            <h2>Don't just take our word for it.</h2>
            <h2>This is Review from people who</h2>
            <h2>received consultation :</h2>
          </div>

          <div>{/* <Testimonials /> */}</div>
        </div>

        {/* <!---------------------------------------------------Dont' Just--------------------------------------> */}

        {/* <!---------------------------------------------------Dont' Just--------------------------------------> */}

        {/* <!---------------------------------------------------Dont' Just--------------------------------------> */}
        {/* <!------------------------------------------------Gradient Div------------------------------------> */}

        <div className="gardeientsectionmain">
          <div className="gradientflexsection">
            <div>
              <div className="fromtheworld">FROM THE WORLD OF</div>
              <div className="fromtheworld">MOTOSPORTS</div>
            </div>
            <div className="drivenbypassion">Driven By Passion...</div>
          </div>
        </div>

        {/* <!------------------------------------------------Gradient Div------------------------------------> */}
        {/* <!---------------------------------------------------Indian Section--------------------------------------> */}

        <div className="indiansectionname">
          <h1>INDIAN RACING</h1>
          <h3>LET YOUR PASSION THROTTLE</h3>
          <h6>
            Are you ready to rev up your engines and take the racing world by
            storm? The Ultimate Young Bike Racing Championship is calling out to
            all young riders who have a buring passion for speed,adrenaline,and
            the thrill of competition
          </h6>
        </div>
        {/* <!---------------------------------------------------Indian Section--------------------------------------> */}

        {/* <!---------------------------------------------------Image Section--------------------------------------> */}

        <div>
          <div className="accordion">
            <ul>
              <li tabIndex="1">
                <div>
                  <a href="https://www.hondaracingindia.com/" target="_blank">
                    <h2 className="accordortionpaddingtop">HONDA RACING</h2>
                    <h2>
                      <button className="revnitrobuttonimage">
                        Discover More
                      </button>
                    </h2>
                  </a>
                </div>
              </li>
              <li tabIndex="2">
                <div>
                  <a href="https://suzukicycles.com/racing" target="_blank">
                    <h2 className="accordortionpaddingtop">SUZUKI ENDURANCE</h2>
                    <h2>
                      <button className="revnitrobuttonimage">
                        Discover More
                      </button>
                    </h2>
                  </a>
                </div>
              </li>
              <li tabIndex="3">
                <div>
                  <a href="https://www.ktmindia.com/ktmrccup" target="_blank">
                    <h2 className="accordortionpaddingtop">KTM RC CUP</h2>
                    <h2>
                      <button className="revnitrobuttonimage">
                        Discover More
                      </button>
                    </h2>
                  </a>
                </div>
              </li>
              <li tabIndex="4">
                <div>
                  <a
                    href="https://www.tvsmotor.com/tvsracing/tvs-asia-one-make-championship-omc"
                    target="_blank"
                  >
                    <h2 className="accordortionpaddingtop">
                      TVS ONE CHAMPIONSIP
                    </h2>
                    <h2>
                      <button className="revnitrobuttonimage">
                        Discover More
                      </button>
                    </h2>
                  </a>
                </div>
              </li>
              <li tabIndex="5">
                <div>
                  <a
                    href="https://www.royalenfield.com/in/en/gtcup/"
                    target="_blank"
                  >
                    <h2 className="accordortionpaddingtop">GT CUP</h2>
                    <h2>
                      <button className="revnitrobuttonimage">
                        Discover More
                      </button>
                    </h2>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* <!---------------------------------------------------Image Section-------------------------------------->

<!---------------------------------------------------Mobile Image Section---------------------------------> */}
        <div className="mobileversionfornrentriflex">
          <div className="containermobiileversionforcards">
            <img
              src="./images/Artboard6.png"
              alt="HONDA RACING"
              title="HONDA RACING"
              className="imagesdasansns"
            />
            <div className="overlaysadsddsdsd">
              <div className="textsadsddsddsd">
                <div className="nameofthecupname">
                  HONDA RACING
                  <button className="racingggsssbutton">
                    <a href="https://www.hondaracingindia.com" target="_blank">
                      Discover Mode
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="containermobiileversionforcards">
            <img
              src="./images/Artboard7.png"
              alt="SUZUKI ENDURANCE"
              title="SUZUKI ENDURANCE"
              className="imagesdasansns"
            />
            <div className="overlaysadsddsdsd">
              <div className="textsadsddsddsd">
                <div className="nameofthecupname">
                  SUZUKI ENDURANCE
                  <button className="racingggsssbutton">
                    <a href="https://suzukicycles.com/racing" target="_blank">
                      Discover Mode
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="containermobiileversionforcards">
            <img
              src="./images/Artboard8.png"
              alt="KTM RACING CUP"
              title="KTM RACING CUP"
              className="imagesdasansns"
            />
            <div className="overlaysadsddsdsd">
              <div className="textsadsddsddsd">
                <div className="nameofthecupname">
                  KTM RACING CUP
                  <button className="racingggsssbutton">
                    <a href="https://www.ktmindia.com/ktmrccup" target="_blank">
                      Discover Mode
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="containermobiileversionforcards">
            <img
              src="./images/Artboard9.png"
              alt="TVS ONE CHAMPIONSHIP"
              title="TVS ONE CHAMPIONSHIP"
              className="imagesdasansns"
            />
            <div className="overlaysadsddsdsd">
              <div className="textsadsddsddsd">
                <div className="nameofthecupname">
                  TVS ONE CHAMPIONSHIP
                  <button className="racingggsssbutton">
                    <a
                      href="https://www.tvsmotor.com/tvsracing/tvs-asia-one-make-championship-omc"
                      target="_blank"
                    >
                      Discover Mode
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="containermobiileversionforcards">
            <img
              src="./images/Artboard10.png"
              alt="GT CUP"
              title="GT CUP"
              className="imagesdasansns"
            />
            <div className="overlaysadsddsdsd">
              <div className="textsadsddsddsd">
                <div className="nameofthecupname">
                  GT CUP
                  <button className="racingggsssbutton">
                    <a
                      href="https://www.royalenfield.com/in/en/gtcup/"
                      target="_blank"
                    >
                      Discover Mode
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!---------------------------------------------------Mobile Image Section---------------------------------> */}

        {/* <!---------------------------------------------------Youtube VIDEO Section--------------------------------------> */}
        <div className="youtubevideomain">
          <div className="yotubevideofirst">
            <h1>REVNITRO</h1>
          </div>

          <div className="yotubevideoSECOND">
            <h3>UNCOVER THE STORIES BEHIND THE WHEELS</h3>
          </div>

          <div>
            <div className="toggleswitchFlexbox">
              <div className="biketooglenamerevnitro">BIKES</div>
              <div>
                <label for="chkPassport" className="switchforRevnito">
                  <input
                    type="checkbox"
                    id="chkPassport"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <span className="sliderreee round"></span>
                </label>
              </div>
              <div className="cartooglenamerevnitro">CARS</div>
            </div>

            {!isChecked ? (
              <div>
                <div id="dvPassportss">
                  <div className="bikedisplayflexrevnito">
                    <div className="yotubevideosiframe">
                      <iframe
                        src="https://www.youtube.com/embed/5C5hWlL-13s?si=fG_dEgoSN1XGmOK1"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                      ></iframe>
                    </div>
                    <div className="yotubevideosiframe">
                      <iframe
                        src="https://www.youtube.com/embed/7QTgcl9KJ3k?si=XYY8rhBFKc_tXB1e"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                      ></iframe>
                    </div>

                    <div className="yotubevideosiframe">
                      <iframe
                        src="https://www.youtube.com/embed/29T8gyUjPpI?si=PVOP4QpVmvUqHUsW"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                      ></iframe>
                    </div>
                    <div className="yotubevideosiframe">
                      <iframe
                        src="https://www.youtube.com/embed/rsCdTk1lIRo?si=yxWgS43qa8rw629G"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div id="dvPassport">
                  <div className="cardisplayflexrevnito">
                    <div className="yotubevideosiframe">
                      <iframe
                        src="https://www.youtube.com/embed/Uw2P9XE6tpo?si=xnu4VV4hCwDE3i9y"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                      ></iframe>
                    </div>
                    <div className="yotubevideosiframe">
                      <iframe
                        src="https://www.youtube.com/embed/vC39VxarXj8?si=95ZbDpIdA0siKvBK"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                      ></iframe>
                    </div>
                    <div className="yotubevideosiframe">
                      <iframe
                        src="https://www.youtube.com/embed/lRCkI6mhPuU?si=_N9fVwcivM0fxpUW"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                      ></iframe>
                    </div>
                    <div className="yotubevideosiframe">
                      <iframe
                        src="https://www.youtube.com/embed/CkUYcdnqj9o?si=OHuaqFAX7tbP22eM"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* <!------------------------------------------Bike Section---------------------------------------> */}
          </div>
        </div>
        {/* <!---------------------------------------------------Youtube VIDEO Section--------------------------------------> */}
      </div>
    </div>
  );
}
