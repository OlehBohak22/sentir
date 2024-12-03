import { useState, useEffect } from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import s from "./SectionNavigation.module.css";
import { Layout } from "../Layout/Layout";
import Faq from "../Faq/Faq";

export const SectionNavigation = ({ token }) => {
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { id: "intro", label: "Introductory Meeting" },
    {
      id: "time-and-materials",
      label: "Research and Proposal",
    },
    { id: "design", label: "Design" },
    { id: "delivery", label: "Delivery and Feedback" },
    { id: "soft", label: "Soft Launch" },
    { id: "launch", label: "Launch, Support and Incidents Management" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top <= 1 && bottom > 1) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <Layout className={s.container}>
      {/* Ліва панель навігації */}
      <nav
        style={{
          position: "relative",
        }}
      >
        <ul className={s.navList}>
          {sections.map((section) => (
            <li key={section.id}>
              <ScrollLink
                to={section.id}
                smooth={true}
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
      </nav>

      {/* Контент секцій */}
      <div>
        <Element name="intro" id="intro">
          <div className={s.navBlock}>
            <div className={s.imageContainer}>
              <img
                src="/images/workflow-page/nav-section/intro.jpg"
                alt="Introduction"
              />
            </div>
            <h3>Introductory Meeting</h3>
            <p>
              Once we receive a request from you, we typically send an
              invitation for an introductory call within one business day, along
              with an NDA template to ensure you feel comfortable discussing
              your product with us. During this call, we explore your primary
              needs, target audience, competitors, and high-level product
              requirements. We also explain our working methodologies to
              determine the most suitable approach for your project: Time &
              Materials or Fixed Price. Depending on the selected approach, our
              team will proceed with either a high-level estimation or a
              detailed project evaluation.
            </p>
          </div>
        </Element>

        <Element name="time-and-materials" id="time-and-materials">
          <div className={s.navBlock}>
            <div className={s.imageContainer}>
              <img
                src="/images/workflow-page/nav-section/research.jpg"
                alt="Introduction"
              />
            </div>
            <h3>Research and Proposal: Time and Materials.</h3>
            <p className="mb-[2vw]">
              The Time and Materials (T&M) approach is ideal for projects
              expected to last over three months, especially when requirements
              are likely to evolve, such as ongoing software development or
              iterative product enhancements. This method is perfect for
              situations where project specifics are uncertain, offering
              financial flexibility as costs are based on actual hours worked.
              It is particularly suitable for innovative projects and startups
              where new features might be added based on user feedback or market
              trends.
            </p>

            <p>
              If the T&M approach is selected, our Product Manager will
              collaborate with you to build a high-level Product Requirements
              Document. Based on these requirements, we will provide a
              high-level budget estimation, timeline, Total Cost of Ownership
              (TCO), and team composition to address your project needs. The
              high-level project kick-off is conducted free-of-charge within 3-5
              business days.
            </p>
          </div>
        </Element>

        <Element>
          <div className={s.navBlock}>
            <h3>Research and Proposal: Fixed Price.</h3>
            <p className="mb-[2vw]">
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

            <p>
              If the FP approach is selected, our Product Manager will create a
              tailored Project Discovery proposal, outlining the efforts needed
              to provide a precise budget estimation. Once the proposal is
              signed, our team will engage in a series of meetings with you to
              build the "product on paper." This process results in a Scope and
              Vision Document that includes Target Audience Analysis, Detailed
              Product Requirements, Wireframes, Architecture and Infrastructure
              Design, and a Detailed Estimate and Timeline. The Discovery phase
              is conducted on a paid basis within 1-5 weeks
            </p>
          </div>
        </Element>

        <Element name="design" id="design">
          <div className={s.navBlock}>
            <div className={s.imageContainer}>
              <img
                src="/images/workflow-page/nav-section/design.jpg"
                alt="Introduction"
              />
            </div>
            <h3>Design</h3>

            <p>
              Once the high-level estimate (T&M) or detailed estimate (FP) is
              completed and we have reached an agreement to move forward, the
              team will require an initial design scope to proceed with
              development. This typically includes a style guide, development
              kit (such as Material UI or Ant Design), and the first few initial
              screens to establish the look and feel. Once the initial design
              scope is ready, the team can begin the development, while the
              designer continues to create additional screens in parallel to
              decrease time to market. As a result of our involvement, you will
              receive a UI kit, clickable prototypes, and a design system.
            </p>
          </div>
        </Element>

        <Element name="delivery" id="delivery">
          <div className={s.navBlock}>
            <h3>Delivery and Feedback</h3>

            <p className="mb-[2vw]">
              After the initial design is approved, the team will commence the
              project delivery phase. Delivery is typically conducted in
              two-week iterations following the Scrum methodology, ensuring a
              transparent process and timely quality assurance and feedback on
              the developed functionality. This phase includes regular priority
              sync meetings, demo sessions, and project delivery reports.
            </p>

            <p>
              It's important to remember that delivery is a collaborative effort
              that requires close cooperation from your side, usually involving
              a Product Manager. This collaboration ensures that the project
              stays on track and meets your expectations throughout the
              development process.
            </p>
          </div>
        </Element>

        <Element name="soft" id="soft">
          <div className={s.navBlock}>
            <h3>Soft Launch</h3>

            <p>
              During the Soft Launch the application is released to a select
              group of power users to gather their feedback. This phase allows
              us to ideate and incorporate valuable insights, ensuring the
              product meets user expectations. During the soft launch, we
              consider any additional scope changes that will maximize the
              product's value, making adjustments based on real user feedback to
              enhance the overall user experience and functionality.
            </p>
          </div>
        </Element>

        <Element name="launch" id="launch" style={{ marginBottom: "50px" }}>
          <div className={s.navBlock}>
            <h3>Launch and Support</h3>
            <p className="mb-[2vw]">
              After incorporating feedback from the soft launch, the application
              is prepared for its official launch. This phase involves
              finalizing the product, ensuring all features are fully
              functional, and performing sorrow testing to guarantee a smooth
              deployment. The launch phase is critical for making the product
              available to the broader audience, and we ensure that it is
              executed seamlessly to meet your business objectives.
            </p>

            <p>
              Post-launch, if required, we provide ongoing support to ensure the
              application runs smoothly and efficiently. Our support services
              include monitoring the application, addressing any issues that
              arise, and making minor enhancements as needed. We aim to ensure
              that your application remains stable and continues to meet user
              expectations, providing a reliable user experience.
            </p>
          </div>
        </Element>

        <Element>
          <Faq token={token} />
        </Element>
      </div>
    </Layout>
  );
};
