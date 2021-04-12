import Head from "next/head";
import Layout, { name } from "../components/layout";
import { Container, Row } from "react-bootstrap";
import { useIntl } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  const { formatMessage } = useIntl();
  const f = (id) => formatMessage({ id });
  return (
    <Layout home>
      <Head>
        <title>{name}</title>
      </Head>
      <header className="masthead bg-primary text-white text-center">
        <Container className="d-flex align-items-center flex-column">
          <img
            className="masthead-avatar mb-5"
            src="images/rodrigopaszniuk.png"
            alt=""
          />
          <h1 className="masthead-heading text-uppercase mb-0">{name}</h1>
          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <FontAwesomeIcon icon={["fas", "star"]} />
            </div>
            <div className="divider-custom-line"></div>
          </div>
          <p className="masthead-subheading font-weight-light mb-0">
            Senior Software Engineer
          </p>
        </Container>
      </header>
      <section className="page-section portfolio" id="projects">
        <Container>
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
            {f("projects")}
          </h2>
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <FontAwesomeIcon icon={["fas", "star"]} />
            </div>
            <div className="divider-custom-line"></div>
          </div>
          <Row className="justify-content-center col-lg-12">
            <p>
              {f("projects_title")}{" "}
              <a href="https://www.linkedin.com/in/rodrigo-paszniuk-b879b956">
                LinkedIn
              </a>
            </p>
            <ul>
              <li>
                <b>
                  <a href="https://www.frases480.com">Frases 480:</a>
                </b>{" "}
                {f("frases480")}
              </li>
              <li>
                <b>
                  <a href="https://www.tecnologia.com.py">
                    Tecnología Paraguay:
                  </a>
                </b>{" "}
                {f("tecnologiapy")}
              </li>
              <li>
                <b>
                  <a href="https://www.programacion.com.py">
                    Programación Paraguay:
                  </a>
                </b>{" "}
                {f("programacionpy")}
              </li>
              <li>
                <b>
                  <a href="https://www.stilogames.com">StiloGames:</a>
                </b>{" "}
                {f("stilogames")}
              </li>
            </ul>
          </Row>
          <Row className="justify-content-center col-lg-12">
            <h4 className="text-center">{f("projects_second_title")}</h4>
            <ul>
              <li>
                Ruby (Ruby on Rails), PHP (Laravel), Java (EE/SE), Python
                (Django, Flask), Kotlin (Android), Swift (iOS).
              </li>
              <li>
                Dart (Flutter), Javascript (Vue, React, React Native, Angular,
                Node, Electron), C, C++, C#, HTML, CSS (Material / Boostrap).
              </li>
            </ul>
          </Row>
          <Row className="justify-content-center col-lg-12">
            <h4 className="text-center">{f("projects_third_title")}</h4>
            <ul>
              <li>{f("projects_third_subtitle_1")}</li>
              <li>{f("projects_third_subtitle_2")}</li>
            </ul>
          </Row>
        </Container>
      </section>
      <section className="page-section bg-primary text-white mb-0" id="about">
        <Container>
          <h2 className="page-section-heading text-center text-uppercase text-white">
            {f("about")}
          </h2>
          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <FontAwesomeIcon icon={["fas", "star"]} />
            </div>
            <div className="divider-custom-line"></div>
          </div>
          <Row>
            <div className="col-lg-4 ml-auto">
              <p className="lead">{f("about_me")}</p>
            </div>
            <div className="col-lg-4 mr-auto">
              <p className="lead">{f("about_me_subtitle")}</p>
            </div>
          </Row>
          <Row>
            <p className="lead col-lg-12">{f("about_me_1")}</p>
            <p className="lead col-lg-12">{f("about_me_2")}</p>
            <p className="lead col-lg-12">{f("about_me_3")}</p>
            <p className="lead col-lg-12">{f("about_me_4")}</p>
            <p className="lead col-lg-12">{f("about_me_5")}</p>
            <p className="lead col-lg-12">{f("about_me_6")}</p>
            <p className="lead col-lg-12">{f("about_me_7")}</p>
            <p className="lead col-lg-12">{f("about_me_8")}</p>
          </Row>
        </Container>
      </section>
      <section className="page-section" id="contact">
        <Container>
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
            {f("contact")}
          </h2>
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <FontAwesomeIcon icon={["fas", "star"]} />
            </div>
            <div className="divider-custom-line"></div>
          </div>
          <Row>
            <div className="col-lg-8 mx-auto text-center">
              <p>
                <FontAwesomeIcon icon={["fas", "envelope"]} />
                <a href="mailto:info@rodrigopaszniuk.com">
                  <strong> rodrigo@rodrigopaszniuk.com</strong>
                </a>
              </p>
              <p>
                <FontAwesomeIcon icon={["fab", "skype"]} />
                <strong> rodrigopaszniuk</strong>
              </p>
            </div>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}
