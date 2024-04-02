import { useState } from "react";

export default function Team() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <div className="revnitrobodyblack">
        {/* <!-----------------------------------------------VideoSection--------------------------------------> */}
        <div className="teamsectionvideopagessection">
          <video autoPlay muted loop>
            <source src="./images/revnitro3.mp4" type="video/mp4" />
          </video>

          <div className="revnitroteamsss">
            <h1>RevNitro Team</h1>
            <h2>
              RevNitro Team RevNitro is a devoted community of engineers and
              auto enthusiasts committed to offering thorough reviews and
              thoughts on automobiles and bikes.
            </h2>

            <button>OUR TEAM</button>
          </div>
        </div>

        <div className="revnitroteamssszz">
          <h1>RevNitro Team</h1>
          <h2>
            RevNitro Team RevNitro is a devoted community of engineers and auto
            enthusiasts committed to offering thorough reviews and thoughts on
            automobiles and bikes.
          </h2>

          <button>OUR TEAM</button>
        </div>
        {/* <!-----------------------------------------------VideoSection--------------------------------------> */}
        {/* <!-----------------------------------Pleasure Section------------------------------------> */}
        <div>
          <div className="wetakpleasere">
            We take pleasure in being a dependable source of information at
            RevNitro, promoting a deeper love of automobiles and motorcycles
            through interesting material.
          </div>
          <div className="joinusa">
            Join us as RevNitro, your ideal automotive friend, and I set off on
            an exciting voyage through the fascinating world of autos. In
            addition to our commitment to providing comprehensive automotive
            reviews and insights, we are proud to cater specifically to the
            Tamil-speaking community with our video content.
          </div>
        </div>
        {/* <!-----------------------------------Pleasure Section------------------------------------> */}

        {/* <!-----------------------------------Tamil Section------------------------------------> */}

        <div>
          <h2 className="fortamilspeaking">For Tamil Speaking Audience</h2>

          <div className="tamilspeakingcontent">
            Our engaging videos are created with the aim of delivering valuable
            information in a language that resonates with our Tamil-speaking
            audience. Furthermore, for those who prefer reading, we offer a
            diverse range of informative blogs in the English language, ensuring
            that our content reaches a wider audience and fosters a deeper
            appreciation for automobiles and motorcycles.
          </div>

          <div className="tamilspeakingcontent22">
            At RevNitro, we strive to connect with enthusiasts from all
            backgrounds and provide them with a rewarding automotive experience.
          </div>
        </div>
        {/* <!-----------------------------------Tamil Section------------------------------------> */}

        {/* <!-----------------------------------Teams--------------------------------------------> */}
        <div className="content__container">
          <ul className="textanimationssHomePage">
            <li className="textanimationssHomePage__item">Meet</li>
            <li className="textanimationssHomePage__item">Our</li>
            <li className="textanimationssHomePage__item">Teams</li>
            <li className="textanimationssHomePage__item">Meet</li>
          </ul>
        </div>

        {/* <!-----------------------------------Teams--------------------------------------------> */}
        {/* <!-------------------------------------Team Members Section------------------------------------------------------> */}
        <div>
          <div className="teamsManagementSection">Management Team</div>
          <div className="MangemenetHeads">
            <div>
              <section className="section-6">
                <div className="rowssss">
                  <figure className="figure">
                    <img
                      src="images/Group 150.png"
                      alt="Daniel Rajkumar:Director-Technical lead"
                    />
                    <figcaption>
                      <h3 style={{ fontFamily: "Poppins" }}>Daniel Rajkumar</h3>
                      <p style={{ fontFamily: "Poppins" }}>
                        Tests and makes assessments of automobiles, offering
                        professional views and feedback on their performance,
                        while also supervising and editing articles to guarantee
                        accuracy and entertaining presentation for readers.
                      </p>
                    </figcaption>
                    <a
                      href="https://www.instagram.com/life_at_the_revlimiter/"
                      target="_blank"
                    ></a>
                  </figure>
                </div>
              </section>
            </div>
            <div>
              <section className="section-6">
                <div className="rowssss">
                  <figure className="figure">
                    <img
                      src="images/Group 151.png"
                      alt="Dinesh Kumar S:Director-Operations"
                    />
                    <figcaption>
                      <h3 style={{ fontFamily: "Poppins" }}>Dinesh Kumar S</h3>
                      <p style={{ fontFamily: "Poppins" }}>
                        He manages all RevNitro team activities, coordinates
                        photo and video shoot schedules, and establishes product
                        and service partnerships throughout India.
                      </p>
                    </figcaption>
                    <a
                      href="https://www.instagram.com/dinesh_revnitro/"
                      target="_blank"
                    ></a>
                  </figure>
                </div>
              </section>
            </div>
          </div>

          <div className="teamsProductionpreProduction">
            <div>
              <h3 className="preproductionteams">Pre Production Team</h3>
              <div className="preflexproduction">
                <div>
                  <section className="section-6">
                    <div className="rowssss">
                      <figure className="figure">
                        <img
                          src="images/Group 146.png"
                          alt="Siva Prakash:Director of Photography"
                        />
                        <figcaption>
                          <h3 style={{ fontFamily: "Poppins" }}>
                            Siva Prakash
                          </h3>
                          <p style={{ fontFamily: "Poppins" }}>
                            He manages the camera for all RevNitro events,
                            reviews, and cinematography projects
                          </p>
                        </figcaption>
                        <a
                          href="https://www.instagram.com/theclownphotography/"
                          target="_blank"
                        ></a>
                      </figure>
                    </div>
                  </section>
                </div>
                <div>
                  <section className="section-6">
                    <div className="rowssss">
                      <figure className="figure">
                        <img
                          src="images/Group 147.png"
                          alt="Stephen Joshua:Director of photography"
                        />
                        <figcaption>
                          <h3 style={{ fontFamily: "Poppins" }}>
                            Stephen Joshua
                          </h3>
                          <p style={{ fontFamily: "Poppins" }}>
                            He manages the camera for all RevNitro events,
                            reviews, and cinematography projects
                          </p>
                        </figcaption>
                        <a
                          href="https://www.instagram.com/joshua_stephen_/"
                          target="_blank"
                        ></a>
                      </figure>
                    </div>
                  </section>
                </div>
              </div>
            </div>
            <div>
              <h3 className="preproductionteams">Post Production Team</h3>
              <div className="postflexproduction">
                <div>
                  <section className="section-6">
                    <div className="rowssss">
                      <figure className="figure">
                        <img
                          src="images/Group 148.png"
                          alt="Sanjay:Content Review & writer"
                        />
                        <figcaption>
                          <h3 style={{ fontFamily: "Poppins" }}>Sanjay</h3>
                          <p style={{ fontFamily: "Poppins" }}>
                            Makes assessments of automobiles through test rides,
                            offering extensive and impartial appraisals of their
                            performance and features, while also generating
                            compelling and instructive written material that
                            highlights the driving experience and technical
                            elements for the audience.
                          </p>
                        </figcaption>
                        <a
                          href="https://www.instagram.com/sanjay477/"
                          target="_blank"
                        ></a>
                      </figure>
                    </div>
                  </section>
                </div>
                <div>
                  <section className="section-6">
                    <div className="rowssss">
                      <figure className="figure">
                        <img
                          src="images/Group 149 (1).png"
                          alt="Gautham:Video Editor"
                        />
                        <figcaption>
                          <h3 style={{ fontFamily: "Poppins" }}>Gautham</h3>
                          <p style={{ fontFamily: "Poppins" }}>
                            Develops interesting video content, including car
                            test drives and reviews, managing the
                            post-production process, editing films, and ensuring
                            the final output satisfies the journal's quality
                            requirements and engages the audience successfully.
                          </p>
                        </figcaption>
                        <a
                          href="https://www.instagram.com/rgowthamhema12829/"
                          target="_blank"
                        ></a>
                      </figure>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
          <div className="teamsProductionpreProduction">
            <div>
              <h3 className="preproductionteams">Customer Relationship</h3>
              <div className="preflexproduction">
                <div>
                  <section className="section-6">
                    <div className="rowssss">
                      <figure className="figure">
                        <img
                          src="images/Group 145.png"
                          alt="Sriram:CR-Manager"
                        />
                        <figcaption>
                          <h3 style={{ fontFamily: "Poppins" }}>Sriram</h3>
                          <p style={{ fontFamily: "Poppins" }}>
                            Supervises the whole production process, assuring
                            the timely and efficient development of print or
                            digital material, collaborating with authors,
                            editors, designers, and other team members, and
                            ensuring the final product's quality and
                            consistency.
                          </p>
                        </figcaption>
                        <a
                          href="https://www.instagram.com/sreeramkumar_j_s/"
                          target="_blank"
                        ></a>
                      </figure>
                    </div>
                  </section>
                </div>
                <div>
                  <section className="section-6">
                    <div className="rowssss">
                      <figure className="figure">
                        <img
                          src="images/Group 144.png"
                          alt="Daniel Rajkumar:CR-Executive"
                        />
                        <figcaption>
                          <h3 style={{ fontFamily: "Poppins" }}>Sridhar</h3>
                          <p style={{ fontFamily: "Poppins" }}>
                            Handles communication with the public, media,
                            manufacturers, and readers in order to promote the
                            journal's brand and events, while also handling
                            consumer requests, comments, and concerns,
                            establishing positive connections
                          </p>
                        </figcaption>
                        <a
                          href="https://www.instagram.com/sridhar_krishnan/"
                          target="_blank"
                        ></a>
                      </figure>
                    </div>
                  </section>
                </div>
              </div>
            </div>
            <div>
              <h3 className="preproductionteams"> Backend</h3>
              <div className="postflexproduction">
                <div>
                  <section className="section-6">
                    <div className="rowssss">
                      <figure className="figure">
                        <img
                          src="images/Group 153.png"
                          alt="Rahul:Article-writer"
                        />
                        <figcaption>
                          <h3 style={{ fontFamily: "Poppins" }}>Rahul</h3>
                          <p style={{ fontFamily: "Poppins" }}>
                            He oversees all Revnitro content writing for website
                            blogs and content creation for forums, classifieds,
                            e-commerce, and other content-related tasks.
                          </p>
                        </figcaption>
                        <a
                          href="https://www.instagram.com/rahul_ramesh_17/?igsh=MTV3d3kybW5obHB1Ng%3D%3D"
                          target="_blank"
                        ></a>
                      </figure>
                    </div>
                  </section>
                </div>
                {/* <div>
                  <section className="section-6">
                    <div className="rowssss">
                      <figure className="figure">
                        <img
                          src="images/Group 152.png"
                          alt="Dhinesh:Developer"
                        />
                        <figcaption>
                          <h3 style={{ fontFamily: "Poppins" }}>Dhinesh</h3>
                          <p style={{ fontFamily: "Poppins" }}>
                            Creates captivating online experiences by designing
                            and developing websites, ensuring seamless
                            functionality, user-friendly interfaces, and staying
                            abreast of evolving web technologies for optimal
                            digital engagement.
                          </p>
                        </figcaption>
                        <a
                          href="https://www.instagram.com/iamdhinesh06/"
                          target="_blank"
                        ></a>
                      </figure>
                    </div>
                  </section>
                </div> */}
              </div>
            </div>
          </div>

          <div className="asherDnSection">
            <div className="asherDnTeam">
              {/* <h3>Digital Marketing Partner</h3> */}
              {/* <div className="asherdnphoto">
                <img
                  src="./images/Rectangle 207 (2).png"
                  alt="asherDn Digital Marketing Service"
                  title="asherDn Digital Marketing Service"
                />
              </div> */}

              {/* <div className="nameoftheCompanyline">
                asherDn Digital Marketing Service
              </div> */}

              {/* <div className="nameothecontetnds">
                We are providing Digital Marketing Services for Revnitro, We
                handle all the Technical and Backend works. We are Currently
                Developing Revnitro E-Commerce, Revnitro Forum, Classified Cars,
                Classified Bikes, etc.,
              </div> */}

              {/* <div className="companyslinkss">
                <div className="sharebuttonlinkss">
                  <img src="./images/Group 140.png" alt="arrow-left" />
                </div>
                <div className="iconsAsherDn">
                  <div>
                    <a
                      href="https://www.instagram.com/asherdn_official/"
                      target="_blank"
                    >
                      <img
                        src="./images/Vector (47).png"
                        alt="instagram-logo"
                      />
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/company/asherdn/"
                      target="_blank"
                    >
                      <img src="./images/Vector (48).png" alt="linkedin-icon" />
                    </a>
                  </div>
                  <div>
                    <a href="https://wa.me/+918072618573/?text=Hi ! I would like to know about your services ?">
                      <img src="./images/Vector (49).png" alt="whatsapp icon" />
                    </a>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        {/* <!-------------------------------------Team Members Section------------------------------------------------------> */}

        {/* <!-----------------------------------Moving Logos--------------------------------------------> */}
        <div className="movinglogposss">
          <h2 className="move-slider-heading">THESE ARE OUR TIE-UPS</h2>
          <div className="slider-container">
            <div className="slider">
              <div className="slide-track">
                <div className="sliderss">
                  <img
                    className="img-slide"
                    src="./images/Frame 75.png"
                    alt="Race"
                  />
                </div>
                <div className="sliderss">
                  <img
                    className="img-slide"
                    src="./images/Frame 76.png"
                    alt="circuit 99"
                  />
                </div>
                <div className="sliderss">
                  <img
                    className="img-slide"
                    src="./images/Frame 77.png"
                    alt="gage"
                  />
                </div>
                <div className="sliderss">
                  <img
                    className="img-slide"
                    src="./images/Frame 78.png"
                    alt="prostreet"
                  />
                </div>
                <div className="sliderss">
                  <img
                    className="img-slide"
                    src="./images/Frame 79.png"
                    alt="one racing"
                  />
                </div>
                <div className="sliderss">
                  <img
                    className="img-slide"
                    src="./images/Frame 80.png"
                    alt="moto tunes"
                  />
                </div>
                <div className="sliderss">
                  <img
                    className="img-slide"
                    src="./images/Frame 75.png"
                    alt="Race"
                  />
                </div>
                <div className="sliderss">
                  <img
                    className="img-slide"
                    src="./images/Frame 76.png"
                    alt="circuit 99"
                  />
                </div>
                <div className="sliderss">
                  <img
                    className="img-slide"
                    src="./images/Frame 77.png"
                    alt="gage"
                  />
                </div>
                <div className="sliderss">
                  <img
                    className="img-slide"
                    src="./images/Frame 78.png"
                    alt="prostreet"
                  />
                </div>
                <div className="sliderss">
                  <img
                    className="img-slide"
                    src="./images/Frame 79.png"
                    alt="one racing"
                  />
                </div>
                <div className="sliderss">
                  <img
                    className="img-slide"
                    src="./images/Frame 80.png"
                    alt="one racing"
                  />
                </div>
                <div className="sliderss">
                  <img
                    className="img-slide"
                    src="./images/Frame 75.png"
                    alt="Race"
                  />
                </div>
                <div className="sliderss">
                  <img
                    className="img-slide"
                    src="./images/Frame 76.png"
                    alt="circuit 99"
                  />
                </div>
                <div className="sliderss">
                  <img
                    className="img-slide"
                    src="./images/Frame 77.png"
                    alt="gage"
                  />
                </div>
                <div className="sliderss">
                  <img
                    className="img-slide"
                    src="./images/Frame 78.png"
                    alt="prostreet"
                  />
                </div>
                <div className="sliderss">
                  <img
                    className="img-slide"
                    src="./images/Frame 79.png"
                    alt="one racing"
                  />
                </div>
                <div className="sliderss">
                  <img
                    className="img-slide"
                    src="./images/Frame 80.png"
                    alt="moto tunes"
                  />
                </div>
                <div className="sliderss">
                  <img
                    className="img-slide"
                    src="./images/Frame 75.png"
                    alt="Race"
                  />
                </div>
                <div className="sliderss">
                  <img
                    className="img-slide"
                    src="./images/Frame 76.png"
                    alt="circuit 99"
                  />
                </div>
                <div className="sliderss">
                  <img
                    className="img-slide"
                    src="./images/Frame 77.png"
                    alt="gage"
                  />
                </div>
                <div className="sliderss">
                  <img
                    className="img-slide"
                    src="./images/Frame 78.png"
                    alt="prostreet"
                  />
                </div>
                <div className="sliderss">
                  <img
                    className="img-slide"
                    src="./images/Frame 79.png"
                    alt="one racing"
                  />
                </div>
                <div className="sliderss">
                  <img
                    className="img-slide"
                    src="./images/Frame 80.png"
                    alt="moto tunes"
                  />
                </div>
                <div className="sliderss">
                  <img
                    className="img-slide"
                    src="./images/Frame 75.png"
                    alt="Race"
                  />
                </div>
                <div className="sliderss">
                  <img
                    className="img-slide"
                    src="./images/Frame 76.png"
                    alt="circuit 99"
                  />
                </div>
                <div className="sliderss">
                  <img
                    className="img-slide"
                    src="./images/Frame 77.png"
                    alt="gage"
                  />
                </div>
                <div className="sliderss">
                  <img
                    className="img-slide"
                    src="./images/Frame 78.png"
                    alt="prostreet"
                  />
                </div>
                <div className="sliderss">
                  <img
                    className="img-slide"
                    src="./images/Frame 79.png"
                    alt="one racing"
                  />
                </div>
                <div className="sliderss">
                  <img
                    className="img-slide"
                    src="./images/Frame 80.png"
                    alt="mototunes"
                  />
                </div>
                <div className="sliderss">
                  <img
                    className="img-slide"
                    src="./images/Frame 75.png"
                    alt="Race"
                  />
                </div>
                <div className="sliderss">
                  <img
                    className="img-slide"
                    src="./images/Frame 76.png"
                    alt="circuit 99"
                  />
                </div>
                <div className="sliderss">
                  <img
                    className="img-slide"
                    src="./images/Frame 77.png"
                    alt="gage"
                  />
                </div>
                <div className="sliderss">
                  <img
                    className="img-slide"
                    src="./images/Frame 78.png"
                    alt="one racing"
                  />
                </div>
                <div className="sliderss">
                  <img
                    className="img-slide"
                    src="./images/Frame 79.png"
                    alt="one racing"
                  />
                </div>
                <div className="sliderss">
                  <img
                    className="img-slide"
                    src="./images/Frame 80.png"
                    alt="moto tunes"
                  />
                </div>
                <div className="sliderss">
                  <img
                    className="img-slide"
                    src="./images/Frame 75.png"
                    alt="Race"
                  />
                </div>
                <div className="sliderss">
                  <img
                    className="img-slide"
                    src="./images/Frame 76.png"
                    alt="circuit 99"
                  />
                </div>
                <div className="sliderss">
                  <img
                    className="img-slide"
                    src="./images/Frame 77.png"
                    alt="gage"
                  />
                </div>
                <div className="sliderss">
                  <img
                    className="img-slide"
                    src="./images/Frame 78.png"
                    alt="prostreet"
                  />
                </div>
                <div className="sliderss">
                  <img
                    className="img-slide"
                    src="./images/Frame 79.png"
                    alt="one racing"
                  />
                </div>
                <div className="sliderss">
                  <img
                    className="img-slide"
                    src="./images/Frame 80.png"
                    alt="moto tunes"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-----------------------------------Moving Logos--------------------------------------------> */}

        <div className="foranyqueriesssaboutrevnitro">
          <h1>
            For any Queries or Disputes Raise your Complaint at
            <a href="mailto:escalations@revnitro.com">
              &nbsp; escalations@revnitro.com
            </a>
          </h1>
        </div>

        <div className="wanttojointeammm">
          <h1>
            Want to join our team Contact our <span>team</span> now
          </h1>
        </div>

        {/* <!---------------------------------------------------Youtube VIDEO Section--------------------------------------> */}
        <div className="youtubevideomain">
          <div className="formsmaindivsectionflex">
            <div>
              <div>
                <div className="toggleswitchFlexbox">
                  <div className="biketooglenamerevnitro">PRODUCTION JOBS</div>
                  <div>
                    <label htmlFor="chkPassport" className="switchforRevnito">
                      <input
                        type="checkbox"
                        id="chkPassport"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                      <span className="sliderreee round"></span>
                    </label>
                  </div>
                  <div className="cartooglenamerevnitro">TECHINICAL JOBS</div>
                </div>

                {/* <!------------------------------------------Bike Section---------------------------------------> */}
                {!isChecked ? (
                  <div id="dvPassportss">
                    <div>
                      <div className="firstsectionformscarpurchased">
                        <div className="carpurchaseform">
                          <form
                            action="https://formsubmit.co/forms@revnitro.com"
                            method="POST"
                          >
                            <div id="formschecktickbox">
                              <div className="dropdwoninputforrevnbitrto">
                                <select
                                  name="(This-is-Production-Jobs)-Role"
                                  id=""
                                  required
                                >
                                  <option value="SEO">SEO</option>
                                  <option value="VFX Artist">VFX Artist</option>
                                  <option value="Marketing Operation">
                                    Marketing Operation
                                  </option>
                                  <option value="Public Relations">
                                    Public Relations
                                  </option>
                                  <option value="Editor">Editor</option>
                                  <option value="Camera Man">Camera Man</option>
                                  <option value="Content Mangement">
                                    Content Mangement
                                  </option>
                                  <option value="Content Writer">
                                    Content Writer
                                  </option>
                                  <option value="VJ">VJ</option>
                                  <option value="RJ">RJ</option>
                                </select>
                              </div>
                            </div>

                            <div id="formschecktickbox"></div>

                            <div className="inputboxforcarpurchase">
                              {/* <!-- <label htmlFor="">Name :</label> --> */}
                              <input
                                type="text"
                                placeholder="Name"
                                name="Name"
                                required
                              />
                            </div>
                            <div className="inputboxforcarpurchase">
                              {/* <!-- <label htmlFor="">Name :</label> --> */}
                              <input
                                type="text"
                                placeholder="Age"
                                name="Age"
                                required
                              />
                            </div>
                            <div className="inputboxforcarpurchase">
                              {/* <!-- <label htmlFor="">Phone No :</label> --> */}
                              <input
                                type="number"
                                placeholder="Phone No"
                                name="Mobile Number"
                                required
                              />
                            </div>
                            <div className="inputboxforcarpurchase">
                              {/* <!-- <label htmlFor="">Email Id :</label> --> */}
                              <input
                                type="email"
                                placeholder="Email Id"
                                name="Email"
                                required
                              />
                            </div>
                            <div className="inputboxforcarpurchase">
                              {/* <!-- <label htmlFor="">Loacation :</label> --> */}
                              <input
                                type="text"
                                placeholder="Location"
                                name="Location"
                                required
                              />
                            </div>

                            <div className="textatreaadressform">
                              <textarea
                                name="Address"
                                id=""
                                cols="30"
                                rows="10"
                                placeholder="Address"
                                required
                              ></textarea>
                            </div>

                            <div className="carspurchasebuuttonss">
                              <button type="submit">Submit</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div id="dvPassport">
                    <div>
                      <div className="firstsectionformscarpurchased">
                        <div className="carpurchaseform">
                          <form
                            action="https://formsubmit.co/forms@revnitro.com"
                            method="POST"
                          >
                            <div id="formsnotchecktickbox">
                              <div id="formschecktickbox">
                                <div className="dropdwoninputforrevnbitrto">
                                  <select
                                    name="(This-is-Techinical-Jobs)-Role"
                                    id=""
                                    required
                                  >
                                    <option value="Bike Techinician">
                                      Bike Techinician
                                    </option>
                                    <option value="Car Techinician">
                                      Car Techinician
                                    </option>
                                    <option value="Automobile Painter">
                                      Automobile Painter
                                    </option>
                                    <option value=" ECU & Electronic technician">
                                      ECU & Electronic technician
                                    </option>
                                  </select>
                                </div>
                              </div>
                            </div>

                            <div className="inputboxforcarpurchase">
                              {/* <!-- <label htmlFor="">Name :</label> --> */}
                              <input
                                type="text"
                                placeholder="Name"
                                name="Name"
                                required
                              />
                            </div>
                            <div className="inputboxforcarpurchase">
                              {/* <!-- <label htmlFor="">Name :</label> --> */}
                              <input
                                type="text"
                                placeholder="Age"
                                name="Age"
                                required
                              />
                            </div>
                            <div className="inputboxforcarpurchase">
                              {/* <!-- <label htmlFor="">Phone No :</label> --> */}
                              <input
                                type="number"
                                placeholder="Phone No"
                                name="Mobile Number"
                                required
                              />
                            </div>
                            <div className="inputboxforcarpurchase">
                              {/* <!-- <label htmlFor="">Email Id :</label> --> */}
                              <input
                                type="email"
                                placeholder="Email Id"
                                name="Email"
                                required
                              />
                            </div>
                            <div className="inputboxforcarpurchase">
                              {/* <!-- <label htmlFor="">Loacation :</label> --> */}
                              <input
                                type="text"
                                placeholder="Location"
                                name="Location"
                                required
                              />
                            </div>

                            <div className="textatreaadressform">
                              <textarea
                                name="Address"
                                id=""
                                cols="30"
                                rows="10"
                                placeholder="Address"
                                required
                              ></textarea>
                            </div>

                            <div className="carspurchasebuuttonss">
                              <button type="submit">Submit</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="revnitronewownershipform">
              <form
                action="https://formsubmit.co/forms@revnitro.com"
                method="POST"
              >
                <div className="dropuourdetailss">
                  Drop your Details below, If you wish to appear for Ownership
                  Review
                </div>

                <div className="inputboxforcarpurchase">
                  {/* <!-- <label htmlFor="">Name :</label> --> */}
                  <input
                    type="text"
                    placeholder="Name"
                    name="(This-is-OwnerShip-Review-Form)"
                    required
                  />
                </div>
                <div className="inputboxforcarpurchase">
                  {/* <!-- <label htmlFor="">Name :</label> --> */}
                  <input
                    type="number"
                    placeholder="Mobile Number"
                    name="Mobile Number"
                    required
                  />
                </div>
                <div className="inputboxforcarpurchase">
                  {/* <!-- <label htmlFor="">Name :</label> --> */}
                  <input
                    type="text"
                    placeholder="Vechicle Details"
                    name="Vechicle Details"
                    required
                  />
                </div>
                <div className="carspurchasebuuttonss">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* <!---------------------------------------------------Youtube VIDEO Section--------------------------------------> */}
        {/* <!-----------------------------------Want to join --------------------------------------------> */}
        <div className="resumepageeforrevnitro">
          <h1>
            Send your Resume
            <a href="mailto:career@revnitro.com">&nbsp;career@revnitro.com</a>
          </h1>
        </div>

        {/* <!-----------------------------------Want to join --------------------------------------------> */}
      </div>
    </div>
  );
}
