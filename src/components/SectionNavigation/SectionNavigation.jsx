import { useState, useEffect } from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import s from "./SectionNavigation.module.css";
import { Layout } from "../Layout/Layout";
import Faq from "../Faq/Faq";
import { useMediaQuery } from "react-responsive";
import { DiscussBtn } from "../../components/DiscussBtn/DiscussBtn";
import { AnimatedHeading } from "../AnimatedHeading/AnimatedHeading";

// ...імпорти (залишаються ті самі)

export const SectionNavigation = ({ token, openPopup }) => {
  const [activeSection, setActiveSection] = useState("");
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 1023px)" });

  const sections = [
    {
      id: "intro",
      label: "Introductory Meeting",
      image: "/images/workflow-page/nav-section/introductory.avif",
      title: "Introductory Meetings",
      paragraphs: [
        `Once we receive a request from you, we typically send an invitation for an introductory call within one business day, along with an NDA template to ensure you feel comfortable discussing your product with us. During this call, we explore your primary needs, target audience, competitors, and high-level product requirements. We also explain our working methodologies to determine the most suitable approach for your project: Time & Materials or Fixed Price. Depending on the selected approach, our team will proceed with either a high-level estimation or a detailed project evaluation.`,
      ],
      button: true,
    },
    {
      id: "research",
      label: "Research",
      image: "/images/workflow-page/nav-section/research.avif",
      title: "Research and Proposal: Time and Materials.",
      paragraphs: [
        `The Time and Materials (T&M) approach is ideal for projects expected to last over three months, especially when requirements are likely to evolve, such as ongoing software development or iterative product enhancements. This method is perfect for situations where project specifics are uncertain, offering financial flexibility as costs are based on actual hours worked. It is particularly suitable for innovative projects and startups where new features might be added based on user feedback or market trends. `,
        `If the T&M approach is selected, our Product Manager will collaborate with you to build a high-level Product Requirements Document. Based on these requirements, we will provide a high-level budget estimation, timeline, Total Cost of Ownership (TCO), and team composition to address your project needs. The high-level project kick-off is conducted free-of-charge within 3-5 business days.`,
      ],
    },
    {
      id: "proposal",
      label: "Proposal",
      image: "/images/workflow-page/nav-section/proposal.avif",
      title: "Research and Proposal: Fixed Price.",
      paragraphs: [
        `The Fixed Price (FP) approach is ideal for projects with a duration of three months or less and clear deliverables, such as building a specific feature or website. It is suitable for projects with fixed budgets where cost predictability is essential, like government contracts, grant-funded projects, or commitments to investors. This method is best when project requirements are unlikely to change, such as replicating an existing application in a known market. As the Fixed Price approach requires us to commit to fixed requirements, it is less flexible than the T&M approach. Any significant changes in the requirements will necessitate a Change Request Process. This ensures that all adjustments are carefully evaluated and incorporated, but it can add complexity and delay to the project timeline.`,
        `If the FP approach is selected, our Product Manager will create a tailored Project Discovery proposal, outlining the efforts needed to provide a precise budget estimation. Once the proposal is signed, our team will engage in a series of meetings with you to build the "product on paper." This process results in a Scope and Vision Document that includes Target Audience Analysis, Detailed Product Requirements, Wireframes, Architecture and Infrastructure Design, and a Detailed Estimate and Timeline. The Discovery phase is conducted on a paid basis within 1-5 weeks`,
      ],
    },
    {
      id: "design",
      label: "Design",
      image: "/images/workflow-page/nav-section/design.avif",
      title: "Design",
      paragraphs: [
        `Once the high-level estimate (T&M) or detailed estimate (FP) is completed and we have reached an agreement to move forward, the team will require an initial design scope to proceed with development. This typically includes a style guide, development kit (such as Material UI or Ant Design), and the first few initial screens to establish the look and feel. Once the initial design scope is ready, the team can begin the development, while the designer continues to create additional screens in parallel to decrease time to market. As a result of our involvement, you will receive a UI kit, clickable prototypes, and a design system.`,
      ],
    },
    {
      id: "delivery",
      label: "Delivery and Feedback",
      image: "/images/workflow-page/nav-section/delivery.avif",
      title: "Delivery and Feedback",
      paragraphs: [
        `After the initial design is approved, the team will commence the project delivery phase. Delivery is typically conducted in two-week iterations following the Scrum methodology, ensuring a transparent process and timely quality assurance and feedback on the developed functionality. This phase includes regular priority sync meetings, demo sessions, and project delivery reports.`,
        `It's important to remember that delivery is a collaborative effort that requires close cooperation from your side, usually involving a Product Manager. This collaboration ensures that the project stays on track and meets your expectations throughout the development process.`,
      ],
    },
    {
      id: "soft",
      label: "Soft Launch",
      image: "/images/workflow-page/nav-section/soft.avif",
      title: "Soft Launch",
      paragraphs: [
        `During the Soft Launch the application is released to a select group of power users to gather their feedback. This phase allows us to ideate and incorporate valuable insights, ensuring the product meets user expectations. During the soft launch, we consider any additional scope changes that will maximize the product's value, making adjustments based on real user feedback to enhance the overall user experience and functionality.`,
      ],
    },
    {
      id: "launch",
      label: "Launch, Support and Incidents Management",
      image: "/images/workflow-page/nav-section/launch.avif",
      title: "Launch and Support",
      paragraphs: [
        `After incorporating feedback from the soft launch, the application is prepared for its official launch. This phase involves finalizing the product, ensuring all features are fully functional, and performing sorrow testing to guarantee a smooth deployment. The launch phase is critical for making the product available to the broader audience, and we ensure that it is executed seamlessly to meet your business objectives.`,

        `Post-launch, if required, we provide ongoing support to ensure the application runs smoothly and efficiently. Our support services include monitoring the application, addressing any issues that arise, and making minor enhancements as needed. We aim to ensure that your application remains stable and continues to meet user expectations, providing a reliable user experience.`,
      ],
    },
    {
      id: "faq",
      label: "FAQ",
      isFaq: true,
    },
  ];

  useEffect(() => {
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
  }, []);

  return (
    <section className={s.section}>
      {isMobile && (
        <ul className={s.navList}>
          {sections.map((section) => (
            <li key={section.id} className={section.isFaq ? "faq-link" : ""}>
              <ScrollLink
                to={section.id}
                smooth={true}
                offset={-50}
                duration={200}
                className={activeSection === section.id ? "active-link" : ""}
                style={{
                  cursor: "pointer",
                  color: activeSection === section.id ? "black" : "#80808080",
                }}
              >
                {section.label}
              </ScrollLink>
            </li>
          ))}
        </ul>
      )}

      <Layout className={s.container}>
        {isDesktop && (
          <ul className={s.navList}>
            {sections.map((section) => (
              <li key={section.id} className={section.isFaq ? "faq-link" : ""}>
                <ScrollLink
                  to={section.id}
                  smooth={true}
                  offset={-50}
                  duration={200}
                  className={activeSection === section.id ? "active-link" : ""}
                  style={{
                    cursor: "pointer",
                    color: activeSection === section.id ? "black" : "#80808080",
                  }}
                >
                  {section.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        )}

        <div>
          {sections.map((section) => (
            <Element
              name={section.id}
              id={section.id}
              key={section.id}
              style={{ marginBottom: section.id === "launch" ? "50px" : "0" }}
            >
              {section.isFaq ? (
                <div data-aos="fade-up">
                  <Faq token={token} />
                </div>
              ) : (
                <div className={s.navBlock}>
                  <div className={s.imageContainer}>
                    <img
                      data-aos="fade-up"
                      src={section.image}
                      alt={section.title}
                    />
                  </div>

                  <h3>
                    <AnimatedHeading text={section.title} />
                  </h3>

                  {section.paragraphs.map((text, idx) => (
                    <p
                      data-aos="fade-up"
                      key={idx}
                      className={
                        idx === 0 && section.paragraphs.length > 1
                          ? "mb-[2vw]"
                          : ""
                      }
                    >
                      {text}
                    </p>
                  ))}

                  {section.button && (
                    <div data-aos="fade-up" onClick={openPopup}>
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
                    </div>
                  )}
                </div>
              )}
            </Element>
          ))}
        </div>
      </Layout>
    </section>
  );
};
