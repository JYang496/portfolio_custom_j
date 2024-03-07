import './styles/general.scss'
import { ReactTyped } from "react-typed";

export const Hero = () => {

  return <>
      <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
          <div className="hero-container" data-aos="fade-in">
              <h1>Alex Smith</h1>
              <p>I'm <ReactTyped
                  strings={[
                      "Software Developer",
                      "Gamer",
                      "UI/UX Designer",
                  ]}
                  typeSpeed={40}
                  backSpeed={40}
                  loop
              />
              </p>
          </div>
      </section>

  </>
}
