import technologesStyle from "./technologes.module.css";

export const Technologies = () => {
  return (
    <div className={technologesStyle.main}>
      <div className={technologesStyle["person-block"]}>
        <img src="/images/avatar.png" alt="" className={technologesStyle.avatar} />
        <div className={technologesStyle["person-description"]}>
          <h2 className={technologesStyle["person-name"]}>Evgeniy Woolovich</h2>
          <span className={technologesStyle.span}>age: 23</span>
          <span className={technologesStyle.span}>gender: male</span>
          <span className={technologesStyle.span}>I'm learning JavaScript and Figma</span>
        </div>
      </div>
    </div>
  );
};
