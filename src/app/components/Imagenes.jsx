
import Image from 'next/image'

function Imagenes() {
    return ( 

        <div style={{ maxWidth: "100%", marginTop: "90px", marginLeft: "auto", marginRight: "auto" }}>
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
    <div style={{ maxWidth: "350px", margin: "0 10px" }}>
      <a href="https://haz.institutortve.com/" target="_blank">
        <Image width={300} height={200} src="/1 haz.jpg" alt="Imagen 1" style={{ maxWidth: "100%", height: "auto" }} />
      </a>
    </div>
    <div style={{ maxWidth: "350px", margin: "0 10px" }}>
      <a href="https://www.domestika.org/" target="_blank">
        <Image width={300} height={200} src="/2 dmtk.jpg" alt="Imagen 2" style={{ maxWidth: "100%", height: "auto" }} />
      </a>
    </div>
    <div style={{ maxWidth: "350px", margin: "0 10px" }}>
      <a href="https://www.dazn.com/es-ES/home" target="_blank">
        <Image width={300} height={200} src="/3 dazn.jpg" alt="Imagen 2" style={{ maxWidth: "100%", height: "auto" }} />
      </a>
    </div>
  </div>
  <div style={{ display: "flex", marginTop: "30px", justifyContent: "center", alignItems: "center" }}>
    <div style={{ maxWidth: "350px", margin: "0 10px" }}>
      <a href="https://www.cuatro.com/hermano-mayor/" target="_blank">
        <Image width={300} height={200} src="/3 hermano.jpg" alt="Imagen 1" style={{ maxWidth: "100%", height: "auto" }} />
      </a>
    </div>
    <div style={{ maxWidth: "350px", margin: "0 10px" }}>
      <a href="https://www.cuatro.com/daniyflo/" target="_blank">
        <Image width={300} height={200} src="/5 daniflo.jpg" alt="Imagen 2" style={{ maxWidth: "100%", height: "auto" }} />
      </a>
    </div>
    <div style={{ maxWidth: "350px", margin: "0 10px" }}>
      <a href="https://www.cuatro.com/venacenarconmigo/?utm_source=youtube" target="_blank">
        <Image width={300} height={200} src="/6 ven a cenar.jpg" alt="Imagen 2" style={{ maxWidth: "100%", height: "auto" }} />
      </a>
    </div>
  </div>
</div>

     );
}

export default Imagenes;