import styles from "../Post-style.module.scss";

import { FaHeart, FaQuoteLeft, FaEye } from "react-icons/fa";
import { IconContext } from "react-icons";

const PostFooter = (props) => {
  return (
    <div className={styles.footer}>
      <IconContext.Provider>
        <div>
          <FaHeart />
        </div>
        <div>
          <FaQuoteLeft />
        </div>
        <div>
          <FaEye />
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default PostFooter;
