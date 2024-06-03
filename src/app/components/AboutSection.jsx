

function AboutSection() {
  return (
    <>
      <div className="section inner-banner">
        <div className="base-container w-container">
          <div className="about-hero-content">
            <div className="overflow">
              <div
                data-w-id="fe347540-b17b-7eb6-0d52-86453fd36720"
                style={{ opacity: 100 }}
                className="banner-title-wrapper"
              >
                <h1 className="banner-title">Hi, my name is Cristina</h1>
              </div>
            </div>
            <div style={{ gap: "10px", marginTop: "10px" }} className="overflow">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/cristinagomezvara/"
              >
                <img src="/link blanc.png" width="30px" alt="" />
              </a>
              <a
                target="_blank"
                href=" https://www.flickr.com/photos/espica/albums"
              >
                <img src="/social_10097005.png" width="30px" alt="" />
              </a>
              <a target="_blank" href=" https://vimeo.com/espica">
                <img src="/vime blanc.png" width="30px" alt="" />
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCFuw3busLiqAwiUNnBlU5PA"
              >
                <img src="/yout blanc.png" width="30px" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div
          data-w-id="ef1cbe54-9e1d-9165-26a7-a32dce51ff08"
          style={{ opacity: 100 }}
          className=""
        >
          <div>
            <img
              className="large-screen-margin-left"
              width="300px"
              src="/yo misma sin fondo.png"
              alt=""
            />
          </div>
          <div className="black-overlay"></div>
        </div>
      </div>
      <section id="Next" className="section ">
        <div className="w-layout-blockcontainer base-container w-container">
          <div
            data-w-id="03b55d4c-e7fe-e62a-d25e-84cd9cb20edf"
            className="who-content-block"
          >
            <div className="margin-bottom-40">
              <h6 className="subtitle">Skills</h6>
            </div>
            <div className="who-text-top">
              <div className="big-text">
                Adobe Premiere
                <br />
              </div>
            </div>
            <div className="who-text-middle">
              <div className="big-text">DaVinci Resolve</div>
            </div>
            <div className="who-text-right lado">
              <div className="big-text ">Avid Media Composer</div>
            </div>
            <div className="who-text-bottom">
              <div className="big-text">After Effects</div>
            </div>
          </div>
        </div>
      </section>
      <div
        style={{ marginTop: "60px" }}
        id="Work"
        className="section without-top-spacing"
      >
        <div className="base-container w-container">
          <div
            data-w-id="b155ac50-75a9-7e8e-5a77-49192bf9d0a4"
            style={{ opacity: 100 }}
            className="text-container"
          >
            <div className="title-container">
              <h2>
                What I Do
                <br />
              </h2>
            </div>
            <div className="description-container">
              <p className="paragraph-large">
                I have had the privilege of working on diverse projects,
                including events, advertising campaigns, start-ups, and
                freelance assignments for clients such as RTVE, Save The
                Children, Heineken, and Disney, among others. These experiences
                have further strengthened my ability to deliver high-quality
                results within demanding deadlines and varying project scopes. I
                am confident in my abilities to contribute effectively to your
                team and help you achieve your goals together.
              </p>
            </div>
          </div>
        </div>
      </div>
      <script src="main.js" type="text/javascript"></script>
    </>
  );
}

export default AboutSection;
