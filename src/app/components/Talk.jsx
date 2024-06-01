import Script from "next/script";


function Talk() {
    return ( 
<main>
        <div className="page-content-wrapper">
  <div className="top-page-content">
    <section className="cta-section">
      <div className="w-layout-blockcontainer base-container w-container">
        <div className="cta">
          <div className="overflow">
            <h2 data-w-id="245835ba-a1e9-5844-e03c-295d6d973b68" style={{ opacity: 0 }}>Have an idea for a project?</h2>
          </div>
          <div className="overflow">
            <a data-w-id="2ae99de2-ea3a-4258-aa22-fc486fbc59c2" style={{ opacity: 0 }} href="contact.html" className="underline-link w-inline-block">
              <h3 className="cta-text">Let's talk.</h3>
              <div className="hover-line">
                <div style={{ transform: 'translate3d(-101%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', WebkitTransform: 'translate3d(-101%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(-101%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MsTransform: 'translate3d(-101%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)' }} className="hover-line-fill"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
  
</div>
<Script src="/main.js" strategy="lazyOnload" />
</main>

     );
}

export default Talk;