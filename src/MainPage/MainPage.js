import Posts from "../Components/Posts/Posts.js"
import mainBanner from "../images/mainBanner.jpg"
import styles from "./MainPage.style.module.scss"

const MainPage = () => {
    return (
        <>
      <div className={styles.bannerHolder}><img src={mainBanner} alt="mainBanner"/></div>  
        <Posts/>
     </> );
}
 
export default MainPage;