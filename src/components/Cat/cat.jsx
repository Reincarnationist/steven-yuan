import React from 'react'
import { useState, useCallback } from "react";
import './style.css';
import ImageViewer from 'react-simple-image-viewer';
import Grid from '@mui/material/Grid';

function importAll(r) {
    let images = {};
    r.keys().map(item => { images[item.replace('./', '')] = r(item); 
                    return null});
    return images
    
  }


const Cat = () => {
    const images = importAll(require.context('../../assets/images/cats', false, /\.(png|jpe?g|svg)$/));
    const images_url = []
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
      }, []);
    
    const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
    };
    
    return(
        <div className='cat_container'>
            <div className ="cat_title">
                <span className='cat_title_inner'>
                    Below are the cats that lived (Mimi, Juzi, Naonao, Biball) and currently living(Susu) in my house.<br/>
                    Some are my friend/cousin's cats that were staying with me for a short time, some were giving away due to moving.<br/><br/>
                    </span>
                    <span style={{fontWeight: 600}}> I Love Them All. </span>
                </div>
            <Grid container spacing={2}>
            {Object.keys(images).map(((key,index) => { 
            images_url.push(images[key].default)
            switch(key[0]){
                case 'm':
                    return(
                        <Grid item xs={4} key={index}>
                            <figure className='cat_img'>
                                <img
                                    src={images[key].default}
                                    onClick={() => openImageViewer(index)}
                                    width="100%"
                                    style={{transition: "all 0.5s ease-in-out"}}
                                    alt="Smart Mimi"
                                />
                                <figcaption style={{textAlign: 'center'}}>Smart Mimi</figcaption>
                            </figure>
                        </Grid>
                    )
                case 'j':
                    return(
                        <Grid item xs={4} key={index}>
                            <figure className='cat_img'>
                            <img
                                src={images[key].default}
                                onClick={() => openImageViewer(index)}
                                width="100%"
                                style={{transition: "all 0.5s ease-in-out"}}
                                alt="Juzi, silly but cute"
                            />
                            <figcaption style={{textAlign: 'center'}}>Juzi, silly but cute</figcaption>
                            </figure>
                        </Grid>
                        )
                    
                    
                case 'n':
                    return(
                        <Grid item xs={4} key={index}>
                            <figure className='cat_img'>
                            <img
                                src={images[key].default}
                                onClick={() => openImageViewer(index)}
                                width="100%"
                                style={{transition: "all 0.5s ease-in-out"}}
                                alt="Big Naonao"
                            />
                            <figcaption style={{textAlign: 'center'}}>Big Naonao</figcaption>
                            </figure>
                        </Grid>
                        )
                case 'b':
                    return(
                        <Grid item xs={4} key={index}>
                            <figure className='cat_img'>
                            <img
                                src={images[key].default}
                                onClick={() => openImageViewer(index)}
                                width="100%"
                                style={{transition: "all 0.5s ease-in-out"}}
                                alt="Dull Biball"
                            />
                            <figcaption style={{textAlign: 'center'}}>Dull Biball</figcaption>
                            </figure>
                        </Grid>
                    )
                case 's':
                    return(
                        <Grid item xs={4} key={index}>
                            <figure className='cat_img'>
                            <img
                                src={images[key].default}
                                onClick={() => openImageViewer(index)}
                                width="100%"
                                style={{transition: "all 0.5s ease-in-out"}}
                                alt="Playful Susu"
                            />
                            <figcaption style={{textAlign: 'center'}}>Playful Susu</figcaption>
                            </figure>
                        </Grid>
                    )
                default:
                    break;
            }
            return null
        }))}
            </Grid>
            {isViewerOpen && (
                <ImageViewer
                src={images_url}
                currentIndex={currentImage}
                disableScroll={ false }
                closeOnClickOutside={ true }
                onClose={closeImageViewer}
                />
            )}
            </div>
    )
}

export default Cat;