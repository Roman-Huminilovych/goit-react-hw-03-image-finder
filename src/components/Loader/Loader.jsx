import DotLoader from "react-spinners/ClipLoader";
import s from "./Loader.module.css";
import PropTypes from "prop-types";

export default function Loader() {
  return (
    <div className={s.overlay}>
      <DotLoader size={200} color={"#303f9f"} className={s.loader} />
    </div>
  );
}
Loader.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};
