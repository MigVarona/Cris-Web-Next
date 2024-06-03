import Image from "next/image";


function Header() {
  return (
    <div>
      <div
        data-animation="over-left"
        className="navbar-transparent w-nav"
        data-easing2="ease"
        data-easing="ease"
        data-collapse="medium"
        role="banner"
        data-no-scroll="1"
        data-duration="400"
        data-doc-height="1"
      >
        <div className="gradient"></div>
        <div className="nav-container w-container">
          <div className="nav-menu-wrapper">
            <a href="/" className="brand w-nav-brand">
              <Image
                src="/flaticon home.png"
                alt="logo"
                width={80}
                height={80}
                loading="lazy"
              />
            </a>
            <nav role="navigation" className="nav-menu w-nav-menu">
              <div className="tablet-menu">
                <a href="/" className="brand-tablet w-nav-brand">
                  <Image
                    src="/flaticon home.png"
                    alt="logo"
                    width={40}
                    height={40}
                    loading="lazy"
                  />
                </a>
                <div className="close-menu-button w-nav-button">
                  <Image
                    src="/flaticon home.png"
                    alt="icon"
                    height={16}
                    width={16}
                    loading="lazy"
                    className="nav-close-icon"
                  />
                </div>
              </div>
              <div className="menu-wrap">
                <div
                  data-hover="true"
                  data-delay="0"
                  data-w-id="1bba802f-7b9e-f63d-4f08-053960cc3754"
                  className="nav-dropdown w-dropdown"
                >
                  <div className="nav-dropdown-toggle w-dropdown-toggle">
                    <div className="clip">
                      <div className="btn-banner-text">
                        <a href="/about" style={{ color: "white" }}>
                          <div className="btn-title-text">
                            About Me <span className="tablet-hidden">+</span>
                          </div>
                        </a>
                      </div>
                      <div className="btn-banner-text button-text-bottom">
                        <div className="btn-title-text">About Me +</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-hover="true"
                  data-delay="0"
                  data-w-id="1bba802f-7b9e-f63d-4f08-053960cc377a"
                  className="nav-dropdown w-dropdown"
                >
                  <div className="nav-dropdown-toggle w-dropdown-toggle">
                    <div className="nav-dropdown-icon w-icon-dropdown-toggle"></div>
                    <div className="clip">
                      <div className="btn-banner-text">
                        <div className="btn-title-text">
                          Works <span className="tablet-hidden">+</span>
                        </div>
                      </div>
                      <div className="btn-banner-text button-text-bottom">
                        <div className="btn-title-text">Works +</div>
                      </div>
                    </div>
                  </div>
                  <nav className="nav-dropdown-list w-dropdown-list">
                    <div className="nav-dropdown-link-wrapper">
                      <a
                        href="education.html"
                        className="nav-dropdown-link w-dropdown-link"
                      >
                        <span className="nav-dropdown-link-line"></span>
                        Education
                      </a>
                      <a
                        href="/entertaiment"
                        className="nav-dropdown-link w-dropdown-link"
                      >
                        <span className="nav-dropdown-link-line"></span>
                        Entertaiment
                      </a>
                      <a
                        href="/corporate"
                        className="nav-dropdown-link w-dropdown-link"
                      >
                        <span className="nav-dropdown-link-line"></span>
                        Corporate
                      </a>
                    </div>
                  </nav>
                </div>
                <a
                  data-w-id="1bba802f-7b9e-f63d-4f08-053960cc379e"
                  className="nav-link w-inline-block"
                >
                  <div className="clip">
                    <div className="btn-banner-text">
                      <div className="btn-title-text"></div>
                    </div>
                    <div className="btn-banner-text button-text-bottom">
                      <div className="btn-title-text"></div>
                    </div>
                  </div>
                </a>
                <div className="nav-button-wrapper">
                  <a
                    data-w-id="1bba802f-7b9e-f63d-4f08-053960cc380e"
                    href="contact.html"
                    className="nav-button w-inline-block"
                  >
                    <div className="clip">
                      <div className="btn-banner-text">
                        <div className="btn-title-text">Let&#x27;s Talk</div>
                      </div>
                      <div className="btn-banner-text button-text-bottom">
                        <div className="btn-title-text">Let&#x27;s Talk</div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </nav>
            <div className="menu-button w-nav-button">
              <Image
                src="https://assets-global.website-files.com/66095c4f9765fb9eae51e781/66095c4f9765fb9eae51e859_menu-btn.svg"
                alt="icon"
                width={16}
                height={16}
                loading="lazy"
                className="image-burger"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
