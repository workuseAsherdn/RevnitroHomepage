import { useState } from "react";
import { a, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Header() {
  const [isVisiblesdfdsf, setIsVisttibleswe234] = useState(false);

  const toggleVisibility2323edrfe = () => {
    setIsVisttibleswe234(!isVisiblesdfdsf);
  };
  const [isVisibldfesdfdsfdsadff, setIsdssdVdsddisttibleswe234] =
    useState(false);

  const toggleVfsdfsf2323edrfe = () => {
    setIsdssdVdsddisttibleswe234(!isVisibldfesdfdsfdsadff);
  };

  const [isVisiblefOthemaninnavbar, setIsVisiblefo3244rthwsmainfiv] =
    useState(false);

  const toggleVisibility = () => {
    setIsVisiblefo3244rthwsmainfiv(!isVisiblefOthemaninnavbar);
  };

  return (
    <div>
      <div>
        <div className="Navbardivareawodth">
          <div className="Navbardicfelxsecirer">
            <div>
              {/* <!------------------------------------------------Desktop Verison--------------------------------------------> */}
              <div className="newNavbarswidthflex">
                <div className="firstnavbarwidthdiv">
                  <div className="fordesktop">
                    {/* <!----------------------------------First Navbar-------------------------------> */}
                    <div className="NavbARDIV">
                      <input type="checkbox" id="check" />
                      <label htmlFor="check" className="checkbtn">
                        <i className="fas fa-bars"></i>
                      </label>
                      <a
                        style={{ background: "none", cursor: "pointer" }}
                        // to={"/login"}
                        to={"/"}
                      >
                        <label
                          className="NavbarLOGO"
                          style={{ background: "none", cursor: "pointer" }}
                        >
                          <img src="/images/logo.png" alt="no image" />
                        </label>
                      </a>
                      <ul>
                        <li>
                          <a href="#">Book Service</a>
                        </li>
                        <li>
                          <a href="https://revnitro.com/">Blogs</a>
                        </li>
                        <li>
                          <a href="https://revnitro.com/">Course</a>
                        </li>
                        <li>
                          <a href="https://revnitro.com/">Forum</a>
                        </li>
                        <li>
                          <a href="">Team</a>
                        </li>

                        <li>
                          <a href="#">Bike Resale</a>
                        </li>
                        <li>
                          <a href="#">Shop</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!------------------------------------------------Desktop Verison-------------------------------------------->

  <!------------------------------------------------Mobile Verison-------------------------------------------->
  <!------------------------------------------First Navbar----------------------------------------------------> */}
              <div className="mobilefelesvccdwidth">
                <div className="mobilevsesiosdnwidthhdiv">
                  <div className="formobile">
                    <div className="mobilef54cdwidth">
                      <div className="navbarDi24243ervsa">
                        <div className="dropdo344wn4234">
                          <div className="dr34324opdownflexconcept">
                            <div>
                              <button
                                className="dro434pbtn4342"
                                onClick={toggleVisibility}
                              >
                                <span className="namechangingsection">
                                  Home
                                </span>{" "}
                                &nbsp;
                                <i className="fa fa-caret-down"></i>
                              </button>
                            </div>
                            <div>
                              <a to="/">
                                <img src="/images/Group64.png" alt="" />
                              </a>
                            </div>
                          </div>

                          {isVisiblefOthemaninnavbar && (
                            <div>
                              <div className="drop234downwn-content">
                                <a>Blog</a>
                                <a>Forum</a>
                                <a>Course</a>
                                <a>Classified</a>
                                <a>Shop</a>
                                <a>Team</a>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
