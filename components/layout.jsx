import Head from 'next/head'
import { useRouter } from 'next/router';
import { Container, Row, Nav, Button, Dropdown } from 'react-bootstrap'
import { useIntl } from 'react-intl';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const name = 'Rodrigo Paszniuk'
export const siteTitle = 'Rodrigo Paszniuk - Senior Software Engineer'

export default function Layout({ children, home }) {
  const { formatMessage } = useIntl();
  const f = (id) => formatMessage({ id });
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const router = useRouter()
  const { locale } = router
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/css/flag-icon.min.css" integrity="sha512-Cv93isQdFwaKBV+Z4X8kaVBYWHST58Xb/jVOcV9aRsGSArZsgAnFIhMpDoMDcFNoUtday1hdjn0nGp3+KZyyFw==" crossorigin="anonymous" />
        <meta name="description" content={siteTitle} />
        <meta name="og:title" content={siteTitle} />
        <meta name="author" content={name} />
      </Head>
      <div id="page-top">
        <Nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
          <Container>
            <a className="navbar-brand js-scroll-trigger" href="#page-top">{name}</a>
            <Button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
              <FontAwesomeIcon icon={["fas", "bars"]} />
            </Button>
            <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#projects">{f('projects')}</a></li>
                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">{f('about')}</a></li>
                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">{f('contact')}</a></li>
                <li className="nav-item mx-0 mx-lg-1">
                  <Dropdown> 
                    <Dropdown.Toggle className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" id="dropdown-basic">
                      {f('language')}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item className={`${locale == 'en' ? 'active' : ''}`} href="/en"><span class="flag-icon flag-icon-us"></span> {f('english')}</Dropdown.Item>
                      <Dropdown.Item className={`${locale == 'es' ? 'active' : ''}`} href="/es"><span class="flag-icon flag-icon-es"></span> {f('spanish')}</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
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
                <a className="btn btn-outline-light btn-social mx-1" href="https://www.facebook.com/rodrigopaszniuk"><FontAwesomeIcon icon={["fab", "facebook"]} /></a>
                <a className="btn btn-outline-light btn-social mx-1" href="https://twitter.com/rodrigopaszniuk"><FontAwesomeIcon icon={["fab", "twitter"]} /></a>
                <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/rodrigo-paszniuk-b879b956/"><FontAwesomeIcon icon={["fab", "linkedin"]} /></a>
                <a className="btn btn-outline-light btn-social mx-1" href="https://github.com/rpaszniuk"><FontAwesomeIcon icon={["fab", "github"]} /></a>
                <a className="btn btn-outline-light btn-social mx-1" href="https://www.youtube.com/user/rpaszniuk"><FontAwesomeIcon icon={["fab", "youtube"]} /></a>
              </div>
              <div className="col-lg-4">
                <h4 className="text-uppercase mb-4">{f('my_hobbies')}</h4>
                <p className="lead mb-0">{f('hobbies')}</p>
              </div>
            </Row>
          </Container>
        </footer>
        <div className="copyright py-4 text-center text-white">
          <Container><small>Copyright © Rodrigo Paszniuk {(new Date().getFullYear())}</small></Container>
        </div>
      </div>
    </div>
  )
}