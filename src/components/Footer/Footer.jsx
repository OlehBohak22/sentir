import { Link } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import s from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <Layout>
        <div className={s.footerContainer}>
          <div className={s.logoContainer}>
            <img src="/icons/colored-logo.svg" alt="Logo" />
            <span>Sentir</span>
          </div>

          <div className={s.menuNav}>
            <ul>
              <h4>MENU</h4>
              <li>
                <Link>About Us</Link>
              </li>
              <li>
                <Link>Portfolio</Link>
              </li>
              <li>
                <Link>Workflow</Link>
              </li>
            </ul>
          </div>

          <div className={s.serviceNav}>
            <ul>
              <h4>Services</h4>
              <li>
                <Link>Project Kick-Off</Link>
              </li>
              <li>
                <Link>Discovery</Link>
              </li>
              <li>
                <Link>UX/UI Design</Link>
              </li>
              <li>
                <Link>Web & Mobile Development</Link>
              </li>
              <li>
                <Link>Due Diligence</Link>
              </li>
              <li>
                <Link>Staff Augmentation</Link>
              </li>
            </ul>
          </div>

          <div className={s.socialContainer}>
            <div>
              <h4>TALK TO US</h4>
              <a href="mailto:hello@sentir.co">hello@sentir.co</a>
            </div>

            <div>
              <h4>COME SEE US</h4>
              <Link>
                Chiang Mai, Thailand
                <br />
                York, United Kingdom
              </Link>
            </div>

            <div>
              <h4>WORK WITH US</h4>
              <a href="mailto:careers@sentir.co">careers@sentir.co</a>
            </div>

            <div>
              <h4>COME SEE US</h4>
              <ul className={s.socialLinks}>
                <li>
                  <a href="">
                    <svg>
                      <use href="/icons/social-icons.svg#icon-facebook"></use>
                    </svg>
                  </a>
                </li>

                <li>
                  <a href="">
                    <svg>
                      <use href="/icons/social-icons.svg#icon-instagram"></use>
                    </svg>
                  </a>
                </li>

                <li>
                  <a href="">
                    <svg>
                      <use href="/icons/social-icons.svg#icon-whatsapp"></use>
                    </svg>
                  </a>
                </li>

                <li>
                  <a href="">
                    <svg>
                      <use href="/icons/social-icons.svg#icon-linkedin2"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={s.footerBottomContainer}>
          <p>All rights reserved 2024 © Sentir</p>
          <a href="">Privacy Policy</a>
        </div>
      </Layout>
    </footer>
  );
};
