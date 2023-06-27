import classes from "./Sidebar.module.css";

const Sidebar = (props) => {
  return (
    <nav className={classes.sidebar}>
      <ul>
        <li>
          <a href="#">Admin Panel</a>
        </li>
        <li>
          <a href="#">Brands</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
