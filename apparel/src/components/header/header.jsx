import headerStyle from "./header.module.css";

export const Header = () => {
  return (
    <div className={headerStyle.header}>
      <a href="#" className={headerStyle.link}>
        <span className={headerStyle.title}> Apparel </span>
        <img src="/images/headerIcons/icone.svg" alt="The circled black grid" />
      </a>
      <div href="#" className={headerStyle.link}>
        <img
          src="/images/headerIcons/notification.svg"
          alt="Black circled notification field"
        />
        {/* <div></div> */}
      </div>
      <a href="#" className={headerStyle['logOut']}>
        <img
          src="/images/headerIcons/logOut.svg"
          alt="A circled button to log out of the account"
        />
      </a>
    </div>
  );
};
