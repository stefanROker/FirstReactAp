import classes from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className={classes.navbar}>
      <a href="#">NewMag</a>
    </nav>
  );
};

export default Navbar;
