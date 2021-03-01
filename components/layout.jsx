import Head from 'next/head'
import { Container, Row, Nav } from 'react-bootstrap'
import { useIntl } from 'react-intl';

export const name = 'Rodrigo Paszniuk'
export const siteTitle = 'Rodrigo Paszniuk - Senior Software Engineer'

export default function Layout({ children, home }) {
  const { formatMessage } = useIntl();
  const f = (id) => formatMessage({ id });
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css" />
        <meta name="description" content={siteTitle} />
        <meta name="og:title" content={siteTitle} />
        <meta name="author" content={name} />
      </Head>
      <div id="page-top">
        <Nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
          <Container>
            <a className="navbar-brand js-scroll-trigger" href="#page-top">{name}</a>
            <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#projects">{f('projects')}</a></li>
                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">{f('about')}</a></li>
                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">{f('contact')}</a></li>
              </ul>
            </div>
          </Container>
        </Nav>
        <main>{children}</main>
        <footer className="footer text-center">
          <Container>
            <Row>
              <div className="col-lg-4 mb-5 mb-lg-0">
                <h4 className="text-uppercase mb-4">{f('location')}</h4>
                <p className="lead mb-0">
                  Encarnación, Paraguay
                        </p>
              </div>
              <div className="col-lg-4 mb-5 mb-lg-0">
                <h4 className="text-uppercase mb-4">{f('around_the_web')}</h4>
                <a className="btn btn-outline-light btn-social mx-1" href="https://www.facebook.com/rodrigopaszniuk"><i className="fab fa-fw fa-facebook-f"></i></a>
                <a className="btn btn-outline-light btn-social mx-1" href="https://twitter.com/rodrigopaszniuk"><i className="fab fa-fw fa-twitter"></i></a>
                <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/rodrigo-paszniuk-b879b956/"><i className="fab fa-fw fa-linkedin-in"></i></a>
                <a className="btn btn-outline-light btn-social mx-1" href="https://github.com/rpaszniuk"><i className="fab fa-fw fa-github"></i></a>
                <a className="btn btn-outline-light btn-social mx-1" href="https://www.youtube.com/user/rpaszniuk"><i className="fab fa-fw fa-youtube"></i></a>
              </div>
              <div className="col-lg-4">
                <h4 className="text-uppercase mb-4">{f('my_hobbies')}</h4>
                <p className="lead mb-0">{f('hobbies')}</p>
              </div>
            </Row>
          </Container>
        </footer>
        <div className="copyright py-4 text-center text-white">
          <Container><small>Copyright © Rodrigo Paszniuk 2021</small></Container>
        </div>
        <div className="scroll-to-top d-lg-none position-fixed">
          <a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top"><i className="fa fa-chevron-up"></i></a>
        </div>
        <script src="https://use.fontawesome.com/releases/v5.15.1/js/all.js" crossOrigin="anonymous"></script>
      </div>
    </div>
  )
}