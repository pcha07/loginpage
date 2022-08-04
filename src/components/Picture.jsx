import LoginPic from "../assets/loginpic.jpg";
const Picture = () => {
  return (
    <div className="hidden lg:inline">
      <img src={LoginPic} alt="login picture" />
    </div>
  );
};

export default Picture;
