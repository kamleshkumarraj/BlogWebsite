
import styles from "./card.module.css";
import { Link } from "react-router-dom";

const Card = ({ id, item }) => {

  return (
    <div className={styles.container} key={id}>
      {item.img && (
        <div className={styles.imageContainer}>
          <img src={item.img} alt="" className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {item.createdAt + " : "}
          </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>
        {/* <p className={styles.desc}>{item.desc.substring(0, 60)}</p> */}
        <div className={styles.desc} dangerouslySetInnerHTML={{ __html: item?.desc.substring(0,360) }}/>
        <Link to={`/blog/blog_id`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
