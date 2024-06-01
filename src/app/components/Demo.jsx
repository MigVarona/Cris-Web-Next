"use client"

function Demo() {
    return ( 
        <section className="section without-space" onClick={() => window.open('https://go.screenpal.com/watch/cZfuQZVMOP2', '_blank')}>
  <div className="w-layout-blockcontainer full-container w-container">
    <div className="w-layout-grid grid-2">
      <div id="w-node-_581a8698-499a-99d3-47af-e9d075f350b9-ae51e7eb" className="collection-list-wrapper w-dyn-list">
        <div role="list" className="collection-list w-dyn-items">
          <div data-w-id="581a8698-499a-99d3-47af-e9d075f350bb" role="listitem" className="collection-item-small w-dyn-item">
            <div data-w-id="581a8698-499a-99d3-47af-e9d075f350bc" className="block-project">
              <a href="" className="home-1-work-link h4">Demo reel</a>
            </div>
            <div 
              data-poster-url="https://assets-global.website-files.com/66095c4f9765fb9eae51e781/660acaed9ac1d4daad1a8527_6150670-sd_640_338_25fps-poster-00001.jpg"
              data-autoplay={true} 
              data-loop={true}  
              data-wf-ignore={true} 
              className="small-video w-background-video w-background-video-atom"
            >
              <video 
                id="581a8698-499a-99d3-47af-e9d075f350bf-video" 
                autoPlay={true} 
                loop={true}  
                style={{backgroundImage: "url(/reel-protada-RED.jpg)"}} 
                muted={true} 
                playsInline="cover"
                data-wf-ignore={true} 
              >
                <source src="/demo reel loop v03.mp4" data-wf-ignore={true}  />
              </video>
              <div className="hidden">This is some text inside of a div block.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

     );
}

export default Demo;