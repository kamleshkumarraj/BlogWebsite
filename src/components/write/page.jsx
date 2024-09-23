
import styles from "./writePage.module.css";
import { useEffect, useState } from "react";
import plusImg from '../../assets/Images/plus.png'
import externalImg from '../../assets/Images/external.png'
import videoImg from '../../assets/Images/video.png'
import image from '../../assets/Images/image.png'
import ReactQuill from 'react-quill'
import "react-quill/dist/quill.bubble.css";




const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Title"
        className={styles.input}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select className={styles.select} onChange={(e) => setCatSlug(e.target.value)}>
        <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>
      <h1 className="text-[2.4rem] my-[1rem] px-[2rem]">Write Your Story</h1>
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <img src={plusImg} alt="" width={16} height={16} />
        </button>
        
        {open && (
          <div className={styles.add}>
            <input
              type="file"
              id="img"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
            <button className={styles.addButton}>
              <label htmlFor="img">
                <
                img src={image} alt="" width={16} height={16} />
              </label>
            </button>
            <button className={styles.addButton}>
              <img src={externalImg} alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <img src={videoImg} alt="" width={16} height={16} />
            </button>
          </div>
        )}
        
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>
      <button className={styles.publish}>
        Publish
      </button>
    </div>
  );
};

export default WritePage;
