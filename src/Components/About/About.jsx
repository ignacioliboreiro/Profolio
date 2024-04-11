
import "./About.css"

const About = () => {
  return (
    <div className="divAbout">
      <div className="h2About">
      <h2 className="h2Title" id="about">Sobre Mi</h2>
      <h4>Aquí encontrarás más información sobre mí, lo que hago y mis habilidades actuales<br/> principalmente en términos de programación y tecnología.</h4>
      </div>
      <div className="about">
        <div className="Titulo-Abuot">
        <h3>!Conoce un poco mas de mi!</h3>
        <p className="descripcion">
          Soy un desarrollador web centrado en el frontend que construye y administra el front-end de sitios web y aplicaciones web que conducen al éxito del producto en general. Echa un vistazo a algunos de mis trabajos en la sección de Proyectos .
          <br />
          También me gusta compartir contenido relacionado con lo que he aprendido a lo largo de los años en Desarrollo Web para que pueda ayudar a otras personas de la Comunidad de Desarrollo. No dudes en conectarte o seguirme en mi Linkedin e Instagram , donde publico contenido útil relacionado con el desarrollo y la programación web.
          <br />
          Estoy abierto a oportunidades laborales donde pueda contribuir, aprender y crecer. Si tienes una buena oportunidad que coincida con mis habilidades y experiencia, no dudes en contactarme .
        </p>
        </div>
        <div className="Habilidades">
        <h3 className="TituloHabi">Mis Habilidades</h3>
        <ul>
          <li className="skills">HTML</li>
          <li className="skills">CSS</li>
          <li className="skills">JavaScript</li>
          <li className="skills">React</li>
          <li className="skills">SASS</li>
          <li className="skills">GIT</li>
          <li className="skills">GitHub</li>
          <li className="skills">Responsive Design</li>
          <li className="skills">Redux</li>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default About