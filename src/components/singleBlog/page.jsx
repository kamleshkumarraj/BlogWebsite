
import Comments from "../comments/Comments";
import Menu from "../Menu/Menu";
import styles from "./singlePage.module.css";
import userImg from '../../assets/Images/travel.png'

const SinglePage =  () => {
  

  const data = {
    user : {
      username : 'Kamelsh Kumar',
      image : userImg
    },
    title : "Bangladesh's first ever tourist attraction",
    img : userImg,
    desc : `Bangladesh's first ever tourist attraction is the world-famous Bangla National Park. It is located in the southern part of the country and is a UNESCO World Heritage Site. The park is a 12,000-acre site that contains a wide range of natural and man-made wonders.
    <br /> <br />
    The park is located in the center of the city, and is a popular tourist destination for both visitors and locals alike. The park is home to a wide range of animals, including lions, leopards, hyenas, and elephants. The park is also home to a variety of birds, including eagles, hawks, and parrots. The park is also home to a wide range of plants, including trees, shrubs, and flowers. The park is also home to a variety of mammals, including elephants, lions, and hyenas. 
    <br /> <br />
    The park is also home to a variety of reptiles, including snakes, lizards, and crocodiles. 
    The park is also home to a variety of fungi, including mushrooms and lichens. The park is also home to a variety of insects, including beetles,`
  }

  return (
    <div style={{paddingInline : '4rem'}} className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data?.title}</h1>
          <div className={styles.user}>
            {data?.user?.image && (
              <div className={styles.userImageContainer}>
                <img src={data.user.image} alt=""  className={styles.avatar} />
              </div>
            )}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{data?.user.name}</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        {data?.img && (
          <div className={styles.imageContainer}>
            <img src={data.img} alt=""  className={styles.image} />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: data?.desc }}
          />
          <div className={styles.comment}>
            <Comments postSlug={'cullture'}/>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
