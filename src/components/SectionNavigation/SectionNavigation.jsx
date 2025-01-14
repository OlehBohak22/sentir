import { useState, useEffect } from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import s from "./SectionNavigation.module.css";
import { Layout } from "../Layout/Layout";
import Faq from "../Faq/Faq";
import { useMediaQuery } from "react-responsive";
import { DiscussBtn } from "../../components/DiscussBtn/DiscussBtn";
import Aos from "aos";
import "aos/dist/aos.css";
import { AnimatedHeading } from "../AnimatedHeading/AnimatedHeading";

export const SectionNavigation = ({ token }) => {
  const [activeSection, setActiveSection] = useState("");
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 1023px)" });

  const sections = [
    { id: "intro", label: "Introductory Meeting" },
    { id: "time-and-materials", label: "Research and Proposal" },
    { id: "design", label: "Design" },
    { id: "delivery", label: "Delivery and Feedback" },
    { id: "soft", label: "Soft Launch" },
    { id: "launch", label: "Launch, Support and Incidents Management" },
    { id: "faq", label: "FAQ" }, // Додано секцію FAQ
  ];

  useEffect(() => {
    Aos.init();
    const handleScroll = () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top <= 100 && bottom > 100) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <section className={s.section}>
      {isMobile && (
        <ul className={s.navList}>
          {sections.map((section) => (
            <li
              key={section.id}
              className={section.id === "faq" ? "faq-link" : ""}
            >
              <ScrollLink
                to={section.id}
                smooth={true}
                offset={-50}
                duration={200}
                className={activeSection === section.id ? "active-link" : ""}
                style={{
                  cursor: "pointer",
                  color: activeSection === section.id ? "black" : "grey",
                }}
              >
                {section.label}
              </ScrollLink>
            </li>
          ))}
        </ul>
      )}

      <Layout className={s.container}>
        {/* Ліва панель навігації */}
        <nav
          style={{
            position: "relative",
          }}
        >
          {isDesktop && (
            <ul className={s.navList}>
              {sections.map((section) => (
                <li
                  key={section.id}
                  className={section.id === "faq" ? "faq-link" : ""}
                >
                  <ScrollLink
                    to={section.id}
                    smooth={true}
                    offset={-50}
                    duration={200}
                    className={
                      activeSection === section.id ? "active-link" : ""
                    }
                    style={{
                      cursor: "pointer",
                      color: activeSection === section.id ? "black" : "grey",
                    }}
                  >
                    {section.label}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          )}
        </nav>

        {/* Контент секцій */}
        <div>
          <Element name="intro" id="intro">
            <div className={s.navBlock}>
              <div className={s.imageContainer}>
                <img
                  data-aos="fade-up"
                  src="/images/workflow-page/nav-section/intro.jpg"
                  alt="Introduction"
                />
              </div>
              <h3>
                <AnimatedHeading text="Introductory Meetings"></AnimatedHeading>
              </h3>
              <p data-aos="fade-up">
                Once we receive a request from you, we typically send an
                invitation for an introductory call within one business day,
                along with an NDA template to ensure you feel comfortable
                discussing your product with us. During this call, we explore
                your primary needs, target audience, competitors, and high-level
                product requirements. We also explain our working methodologies
                to determine the most suitable approach for your project: Time &
                Materials or Fixed Price. Depending on the selected approach,
                our team will proceed with either a high-level estimation or a
                detailed project evaluation.
              </p>

              <div data-aos="fade-up">
                <a href="#form">
                  <DiscussBtn
                    className={`${s.discuss} lg:mt-[3vw] mt-[6vw] flex lg:gap-[0.5vw] gap-[3vw] items-center`}
                  >
                    Make an appointment
                    <svg
                      className={`${s.heroHoverSvg} lg:w-[1.4vw] lg:h-[1.5vw] w-[5.6vw] h-[6.1vw]`}
                      viewBox="0 0 22 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          id="gradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop
                            offset="0%"
                            style={{ stopColor: "#ff0080", stopOpacity: 1 }}
                          />
                          <stop
                            offset="100%"
                            style={{ stopColor: "#7928ca", stopOpacity: 1 }}
                          />
                        </linearGradient>
                      </defs>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.16667 1.49967C3.92899 1.49967 2.742 1.99134 1.86683 2.86651C0.991665 3.74168 0.5 4.92866 0.5 6.16634V18.9997C0.5 20.2374 0.991665 21.4243 1.86683 22.2995C2.742 23.1747 3.92899 23.6663 5.16667 23.6663H16.8333C18.071 23.6663 19.258 23.1747 20.1332 22.2995C21.0083 21.4243 21.5 20.2374 21.5 18.9997V6.16634C21.5 4.92866 21.0083 3.74168 20.1332 2.86651C19.258 1.99134 18.071 1.49967 16.8333 1.49967V0.333008H14.5V1.49967H7.5V0.333008H5.16667V1.49967ZM19.1667 9.66634V18.9997C19.1667 19.6185 18.9208 20.212 18.4832 20.6496C18.0457 21.0872 17.4522 21.333 16.8333 21.333H5.16667C4.54783 21.333 3.95434 21.0872 3.51675 20.6496C3.07917 20.212 2.83333 19.6185 2.83333 18.9997V9.66634H19.1667ZM5.16667 18.9997H7.5V16.6663H5.16667V18.9997ZM9.83333 18.9997H12.1667V16.6663H9.83333V18.9997ZM14.5 18.9997H16.8333V16.6663H14.5V18.9997ZM5.16667 14.333H7.5V11.9997H5.16667V14.333ZM9.83333 14.333H12.1667V11.9997H9.83333V14.333ZM14.5 14.333H16.8333V11.9997H14.5V14.333ZM16.8333 3.83301V6.16634H14.5V3.83301H7.5V6.16634H5.16667V3.83301C4.54783 3.83301 3.95434 4.07884 3.51675 4.51643C3.07917 4.95401 2.83333 5.5475 2.83333 6.16634V7.33301H19.1667V6.16634C19.1667 5.5475 18.9208 4.95401 18.4832 4.51643C18.0457 4.07884 17.4522 3.83301 16.8333 3.83301Z"
                      />
                    </svg>
                  </DiscussBtn>
                </a>
              </div>
            </div>
          </Element>

          <Element name="time-and-materials" id="time-and-materials">
            <div className={s.navBlock}>
              <div className={s.imageContainer}>
                <img
                  data-aos="fade-up"
                  src="/images/workflow-page/nav-section/research.jpg"
                  alt="Introduction"
                />
              </div>
              <h3>
                <AnimatedHeading text="Research and Proposal: Time and Materials."></AnimatedHeading>
              </h3>
              <p data-aos="fade-up" className="mb-[2vw]">
                The Time and Materials (T&M) approach is ideal for projects
                expected to last over three months, especially when requirements
                are likely to evolve, such as ongoing software development or
                iterative product enhancements. This method is perfect for
                situations where project specifics are uncertain, offering
                financial flexibility as costs are based on actual hours worked.
                It is particularly suitable for innovative projects and startups
                where new features might be added based on user feedback or
                market trends.
              </p>

              <p data-aos="fade-up">
                If the T&M approach is selected, our Product Manager will
                collaborate with you to build a high-level Product Requirements
                Document. Based on these requirements, we will provide a
                high-level budget estimation, timeline, Total Cost of Ownership
                (TCO), and team composition to address your project needs. The
                high-level project kick-off is conducted free-of-charge within
                3-5 business days.
              </p>
            </div>
          </Element>

          <Element>
            <div className={s.navBlock}>
              <h3>
                <AnimatedHeading text="Research and Proposal: Fixed Price."></AnimatedHeading>
              </h3>
              <p data-aos="fade-up" className="mb-[2vw]">
                The Fixed Price (FP) approach is ideal for projects with a
                duration of three months or less and clear deliverables, such as
                building a specific feature or website. It is suitable for
                projects with fixed budgets where cost predictability is
                essential, like government contracts, grant-funded projects, or
                commitments to investors. This method is best when project
                requirements are unlikely to change, such as replicating an
                existing application in a known market. As the Fixed Price
                approach requires us to commit to fixed requirements, it is less
                flexible than the T&M approach. Any significant changes in the
                requirements will necessitate a Change Request Process. This
                ensures that all adjustments are carefully evaluated and
                incorporated, but it can add complexity and delay to the project
                timeline.
              </p>

              <p data-aos="fade-up">
                If the FP approach is selected, our Product Manager will create
                a tailored Project Discovery proposal, outlining the efforts
                needed to provide a precise budget estimation. Once the proposal
                is signed, our team will engage in a series of meetings with you
                to build the "product on paper." This process results in a Scope
                and Vision Document that includes Target Audience Analysis,
                Detailed Product Requirements, Wireframes, Architecture and
                Infrastructure Design, and a Detailed Estimate and Timeline. The
                Discovery phase is conducted on a paid basis within 1-5 weeks
              </p>
            </div>
          </Element>

          <Element name="design" id="design">
            <div className={s.navBlock}>
              <div className={s.imageContainer} data-aos="fade-up">
                <img
                  src="/images/workflow-page/nav-section/design.jpg"
                  alt="Introduction"
                />
              </div>
              <h3>
                <AnimatedHeading text="Design"></AnimatedHeading>
              </h3>

              <p data-aos="fade-up">
                Once the high-level estimate (T&M) or detailed estimate (FP) is
                completed and we have reached an agreement to move forward, the
                team will require an initial design scope to proceed with
                development. This typically includes a style guide, development
                kit (such as Material UI or Ant Design), and the first few
                initial screens to establish the look and feel. Once the initial
                design scope is ready, the team can begin the development, while
                the designer continues to create additional screens in parallel
                to decrease time to market. As a result of our involvement, you
                will receive a UI kit, clickable prototypes, and a design
                system.
              </p>
            </div>
          </Element>

          <Element name="delivery" id="delivery">
            <div className={s.navBlock}>
              <h3>
                <AnimatedHeading text="Delivery and Feedback"></AnimatedHeading>
              </h3>

              <p data-aos="fade-up" className="mb-[2vw]">
                After the initial design is approved, the team will commence the
                project delivery phase. Delivery is typically conducted in
                two-week iterations following the Scrum methodology, ensuring a
                transparent process and timely quality assurance and feedback on
                the developed functionality. This phase includes regular
                priority sync meetings, demo sessions, and project delivery
                reports.
              </p>

              <p data-aos="fade-up">
                It's important to remember that delivery is a collaborative
                effort that requires close cooperation from your side, usually
                involving a Product Manager. This collaboration ensures that the
                project stays on track and meets your expectations throughout
                the development process.
              </p>
            </div>
          </Element>

          <Element name="soft" id="soft">
            <div className={s.navBlock}>
              <h3>
                <AnimatedHeading text="Soft Launch"></AnimatedHeading>
              </h3>

              <p data-aos="fade-up">
                During the Soft Launch the application is released to a select
                group of power users to gather their feedback. This phase allows
                us to ideate and incorporate valuable insights, ensuring the
                product meets user expectations. During the soft launch, we
                consider any additional scope changes that will maximize the
                product's value, making adjustments based on real user feedback
                to enhance the overall user experience and functionality.
              </p>
            </div>
          </Element>

          <Element name="launch" id="launch" style={{ marginBottom: "50px" }}>
            <div className={s.navBlock}>
              <h3>
                <AnimatedHeading text="Launch and Support"></AnimatedHeading>
              </h3>
              <p data-aos="fade-up" className="mb-[2vw]">
                After incorporating feedback from the soft launch, the
                application is prepared for its official launch. This phase
                involves finalizing the product, ensuring all features are fully
                functional, and performing sorrow testing to guarantee a smooth
                deployment. The launch phase is critical for making the product
                available to the broader audience, and we ensure that it is
                executed seamlessly to meet your business objectives.
              </p>

              <p data-aos="fade-up">
                Post-launch, if required, we provide ongoing support to ensure
                the application runs smoothly and efficiently. Our support
                services include monitoring the application, addressing any
                issues that arise, and making minor enhancements as needed. We
                aim to ensure that your application remains stable and continues
                to meet user expectations, providing a reliable user experience.
              </p>
            </div>
          </Element>

          <div data-aos="fade-up">
            <Element name="faq" id="faq">
              <Faq token={token} />
            </Element>
          </div>
        </div>
      </Layout>
    </section>
  );
};
