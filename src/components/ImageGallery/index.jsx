import React from "react";
import "./styles.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
function ImageGallery() {
  const [isOpen, setIsopen] = useState(false);
  const [image,setImage] = useState('')
  const [arr,setArr] = useState( [
    {
      id: 1,
      img: "https://preview.eagle-themes.com/html/zante/images/gallery/gallery1.jpg",
    },
    {
      id: 1,
      img: "https://preview.eagle-themes.com/html/zante/images/gallery/gallery2.jpg",
    },
    {
      id: 1,
      img: "https://preview.eagle-themes.com/html/zante/images/gallery/gallery3.jpg",
    },
    {
      id: 1,
      img: "https://preview.eagle-themes.com/html/zante/images/gallery/gallery4.jpg",
    },
    {
      id: 1,
      img: "https://preview.eagle-themes.com/html/zante/images/gallery/gallery5.jpg",
    },
    {
      id: 1,
      img: "https://preview.eagle-themes.com/html/zante/images/gallery/gallery6.jpg",
    },
    {
      id: 1,
      img: "https://preview.eagle-themes.com/html/zante/images/gallery/gallery7.jpg",
    },
    {
      id: 1,
      img: "https://preview.eagle-themes.com/html/zante/images/gallery/gallery8.jpg",
    },
    {
      id: 1,
      img: "https://preview.eagle-themes.com/html/zante/images/gallery/gallery9.jpg",
    },
    {
      id: 1,
      img: "https://preview.eagle-themes.com/html/zante/images/gallery/gallery10.jpg",
    },
    {
      id: 1,
      img: "https://preview.eagle-themes.com/html/zante/images/gallery/gallery11.jpg",
    },
    {
      id: 1,
      img: "https://preview.eagle-themes.com/html/zante/images/gallery/gallery12.jpg",
    },
  ])
  useEffect(() =>{
    getData()
  },[])
  const getData  = async () =>{
    try {
      const res = await axios.get('http://localhost:3030/imageGallery/getData')
      if(res){
        setArr(res?.data?.data)
      }
    } catch (error) {
      
    }
  }
  
  const setData = (img) =>{
    setIsopen(!isOpen)
    setImage(img)
  }
  return (
    <div className="image-container body-container">
      <div className="image-main-title">
        <h2>IMAGE GALLERY</h2>
      </div>
      <div className="image-title">
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod 
        tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, 
        quis nostrud exerci tation ullamcorper suscipit.
      </p>
      </div>
      <div className="image-gallery">
        <div
          className="image-gallery-item"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          {arr.map((e, index) => {
            return (
              <div className="image-item-content" style={{ width: "25%" }} key={index} onClick={() => setData(e.img)}>
                <figure className="image-gs2">
                  <a className="hover_effect h_lightbox h_blue">
                    <img
                      src={e?.image}
                      className="img-responsive"
                      alt="Image"
                    />
                  </a>
                </figure>
              </div>
            );
          })}

        </div>
        <Popup open={isOpen} position="right center">
          <div  onClick={()=>setIsopen(!setIsopen)}>
            <img src={image} />
          </div>
        </Popup>
      </div>
    </div>
  );
}

export default ImageGallery;
