import { FC } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import { Navbar } from "widgets/Navbar";
import mainClasses from "./Header.module.scss";
interface HeaderProps {
  someClasses?: string;
}

const Header: FC<HeaderProps> = ({ someClasses, ...props }) => {
  return (
    <div
      data-testid="header_test"
      className={classNames(mainClasses.Header, {}, [someClasses])}
      {...props}
    >
      <div className={mainClasses.left}>
        {/* <CustomLink to={"/"}>
          <Logo someClasses="white" height={40} width={40} />
        </CustomLink> */}
      </div>
      <div className={mainClasses.right}>
        <Navbar otherClasses={classNames("", {}, [])} />
      </div>
    </div>
  );
};

export default Header;
