import "../../app/globals.css";


function Hero() {
    return ( 

        <div className="home-banner-section">
  <div className="hero-1">
    <div data-w-id="dade728e-c94b-1751-0e9e-0bff99516276" className="overflow">
      <div data-w-id="1389cbe7-036f-41ac-6a89-5caf56b8be7f"  className="heading-banner-1">
        Cristina
      </div>
    </div>
    <div data-w-id="14703866-07cc-c290-1e70-2760606a46f9" className="overflow">
      <h1 data-w-id="14703866-07cc-c290-1e70-2760606a46fa"  className="heading-banner-1">
        Gomez
      </h1>
    </div>
  </div>
  <div className="hero-multiply">
    <div className="overflow">
      <div data-w-id="9dd5b4e6-c80a-f45c-cbb4-685676604bfd" className="heading-banner-1 multiply">
        Video editor
      </div>
    </div>
  </div>
  <div className="hero-project">
    <div className="collection-list-wrapper w-dyn-list">
      <div role="list" className="collection-list w-dyn-items">
        <div role="listitem" className="collection-item-2 w-dyn-item">
          <a className="link-hero w-inline-block">
            <div className="bg-wrap">
              <div data-autoplay="true" data-loop="true" className="background-video w-background-video w-background-video-atom">
                <video autoPlay loop muted playsInline data-object-fit="cover">
                  <source src="/loop entrada.mp4" type="video/mp4" />
                </video>
                <video autoPlay loop muted playsInline data-object-fit="cover">
                  <source src="/LOOP movil.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>

    
</div>

     );
}

export default Hero;