
import "./About.css"

const About = () => {
  return (
    <div className="divAbout">
      <div className="h2About">
        <h2 className="h2Title" id="about">Sobre Mi</h2>
        <h4>Aquí encontrarás más información sobre mí, lo que hago y mis habilidades actuales<br /> principalmente en términos de programación y tecnología.</h4>
      </div>
      <div className="about">
        <div className="Titulo-Abuot">
          <h3>!Conoce un poco mas de mi!</h3>
          <p className="descripcion">
            Hola, soy ignacio, un apasionado desarrollador Front-End con un sólido enfoque en el mundo de la programación y el desarrollo web. Mi experiencia y habilidades en tecnologías como JavaScript, React JS me han permitido trabajar en proyectos significativos y adquirir un conocimiento valioso. <br />

            A lo largo de mi carrera, he colaborado en una variedad de proyectos desafiantes, lo que me ha ayudado a mejorar constantemente mis habilidades y enfrentar nuevos retos. Mi objetivo es seguir creciendo como desarrollador Front-End y contribuir a soluciones innovadoras. <br />

            Si estás buscando un colaborador para tu proyecto, no dudes en contactarme.
          </p>
        </div>
        <div className="Habilidades">
          <h3 className="TituloHabi">Mis Habilidades</h3>
          <i className="lni lni-react"></i>
        </div>
      </div>
    </div>
  )
}

export default About