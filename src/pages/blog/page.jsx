
import CardList from "../../components/cardList/CardList";
import Menu from "../../components/Menu/Menu";
import styles from "./blogPage.module.css";


const BlogPage = () => {
 
  return (
    <div style={{paddingInline: "4rem"}} className={styles.container}>
      <h1 className={styles.title}>culture Blog</h1>
      <div className={styles.content}>
        <CardList page={1} cat={"culture"}/>
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
