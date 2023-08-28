import Paraqom_icon from "../../Assets/Paraqom_icon.png";
import Image from "next/image";

const SideNav = () => {
  return (
    <div className="SideNav_container">
      <div className="Paraqom_icon">
        <Image
          src="/Paraqom-icon.png"
          width={25}
          height={20}
          alt="Paraqom Logo"
        />
      </div>
      <div className="Maintabs"></div>
    </div>
  );
};

export default SideNav;
