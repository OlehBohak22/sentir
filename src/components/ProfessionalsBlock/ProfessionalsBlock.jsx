import s from "./ProfessionalsBlock.module.css";

import { professionals } from "../../services/fake-api";

export const ProfessionalsBlock = () => {
  return (
    <div className={s.container}>
      <div className={s.rotatingCircles}>
        <img
          className={s.circle1}
          src="/icons/animated_circles/circle1.svg"
          alt="Circle"
        />
        <img
          className={s.circle2}
          src="/icons/animated_circles/circle2.svg"
          alt="Circle"
        />
      </div>
      <div>
        <h2>
          Professionals
          <span>behind</span>
          your project
        </h2>

        <ul>
          {professionals.map((item) => (
            <li key={item.id}>
              <div>
                <img src={item.image} alt="" />
              </div>

              <span>{item.qty}</span>
              <p>{item.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
