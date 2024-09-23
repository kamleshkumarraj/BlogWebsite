import React from "react";
import styles from "./cardList.module.css";
import Card from "../card/Card";
import postImg from '../../assets/Images/culture.png'
import Pagination from "../pagination/Pagination";



const CardList =  () => {
  // const { posts, count } = await getData(page, cat);

  // const POST_PER_PAGE = 2;

  // const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  // const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
  const posts = [
    {_id : 1 , img : postImg , createdAt : '08/09/2020' , catSlug : 'Culture' , slug : 'culture', title : 'Bangladesh: The next big thing in culture', desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. '} , 
    {_id : 2 , img : postImg , createdAt : '08/09/2020' , catSlug : 'Culture' , slug : 'culture', title : 'Bangladesh: The next big thing in culture', desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. '} , 
    {_id : 3 , img : postImg , createdAt : '08/09/2020' , catSlug : 'Culture' , slug : 'culture', title : 'Bangladesh: The next big thing in culture', desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. '},
    {_id : 4 , img : postImg , createdAt : '08/09/2020' , catSlug : 'Culture' , slug : 'culture', title : 'Bangladesh: The next big thing in culture', desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. '}

  ]
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts?.map((item) => (
          <Card item={item} id={item._id} key={item._id} />
        ))}
      </div>
       <Pagination page={10} hasPrev={4} hasNext={5} />
        
    </div>
  );
};

export default CardList;
