import React, { useEffect, useRef, useState } from 'react';
import './AlbumPage.css';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import BackgroundSlideshow from './BackgroundSlideshow';

const albums = [
  // Sample album data (replace with your actual data)
  {
    name: 'Album 1',
    cover: 'https://images.pexels.com/photos/17417599/pexels-photo-17417599/free-photo-of-model-in-crop-top.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with the actual image filename or URL for the album cover
    images: [
      {
        src: 'https://images.pexels.com/photos/17417554/pexels-photo-17417554/free-photo-of-teenage-model-in-top-and-jeans.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with the actual image filename or URL
        alt: 'Image 1',
      },
      {
        src: 'https://images.pexels.com/photos/17417592/pexels-photo-17417592/free-photo-of-girl-lying-on-mattress.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with the actual image filename or URL
        alt: 'Image 2',
      },
      {
        src: 'https://images.pexels.com/photos/17417563/pexels-photo-17417563/free-photo-of-model-posing-in-panties.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with the actual image filename or URL
        alt: 'Image 3',
      },
      {
        src: 'https://images.pexels.com/photos/17417520/pexels-photo-17417520/free-photo-of-a-teenage-girl-in-a-white-shirt-sitting-on-the-chair.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with the actual image filename or URL
        alt: 'Image 4',
      },
      
      // Add more images for Album 1
    ],
  },
  {
    name: 'Album 2',
    cover: 'https://images.pexels.com/photos/12498664/pexels-photo-12498664.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', // Replace with the actual image filename or URL for the album cover
    images: [
      {
        src: 'https://images.pexels.com/photos/2122363/pexels-photo-2122363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Replace with the actual image filename or URL
        alt: 'Image 1',
      },
      {
        src: 'https://images.pexels.com/photos/3714423/pexels-photo-3714423.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', // Replace with the actual image filename or URL
        alt: 'Image 2',
      },
      {
        src: 'https://images.pexels.com/photos/2062534/pexels-photo-2062534.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', // Replace with the actual image filename or URL
        alt: 'Image 3',
      },
      {
        src: 'https://images.pexels.com/photos/3714421/pexels-photo-3714421.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', // Replace with the actual image filename or URL
        alt: 'Image 4',
      },
      
    ],
  },

  {
    name: 'Album 3',
    cover: 'https://images.pexels.com/photos/2311714/pexels-photo-2311714.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with the actual image filename or URL for the album cover
    images: [
      {
        src: 'https://images.pexels.com/photos/6224711/pexels-photo-6224711.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with the actual image filename or URL
        alt: 'Image 1',
      },
      {
        src: 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with the actual image filename or URL
        alt: 'Image 2',
      },
      {
        src: 'https://images.pexels.com/photos/7810941/pexels-photo-7810941.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with the actual image filename or URL
        alt: 'Image 3',
      },
      {
        src: 'https://images.pexels.com/photos/6224705/pexels-photo-6224705.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with the actual image filename or URL
        alt: 'Image 4',
      },
      
      // Add more images for Album 1
    ],
  },

  {
    name: 'Album 4',
    cover: 'https://images.pexels.com/photos/5332409/pexels-photo-5332409.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', // Replace with the actual image filename or URL for the album cover
    images: [
      {
        src: 'https://images.pexels.com/photos/5332360/pexels-photo-5332360.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', // Replace with the actual image filename or URL
        alt: 'Image 1',
      },
      {
        src: 'https://images.pexels.com/photos/5332361/pexels-photo-5332361.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', // Replace with the actual image filename or URL
        alt: 'Image 2',
      },
      {
        src: 'https://images.pexels.com/photos/5332348/pexels-photo-5332348.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', // Replace with the actual image filename or URL
        alt: 'Image 3',
      },
      {
        src: 'https://images.pexels.com/photos/5332362/pexels-photo-5332362.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', // Replace with the actual image filename or URL
        alt: 'Image 4',
      },
      
      // Add more images for Album 5
    ],
  },

  {
    name: 'Album 5',
    cover: 'https://images.pexels.com/photos/9336844/pexels-photo-9336844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Replace with the actual image filename or URL for the album cover
    images: [
      {
        src: 'https://images.pexels.com/photos/9336850/pexels-photo-9336850.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', // Replace with the actual image filename or URL
        alt: 'Image 1',
      },
      {
        src: 'https://images.pexels.com/photos/9336854/pexels-photo-9336854.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', // Replace with the actual image filename or URL
        alt: 'Image 2',
      },
      {
        src: 'https://images.pexels.com/photos/9336849/pexels-photo-9336849.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', // Replace with the actual image filename or URL
        alt: 'Image 3',
      },
      {
        src: 'https://images.pexels.com/photos/9336847/pexels-photo-9336847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Replace with the actual image filename or URL
        alt: 'Image 4',
      },
      
      // Add more images for Album 1
    ],
  },

  {
    name: 'Album 6',
    cover: 'https://images.pexels.com/photos/2026960/pexels-photo-2026960.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with the actual image filename or URL for the album cover
    images: [
      {
        src: 'https://images.pexels.com/photos/3481556/pexels-photo-3481556.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with the actual image filename or URL
        alt: 'Image 1',
      },
      {
        src: 'https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=600', // Replace with the actual image filename or URL
        alt: 'Image 2',
      },
      {
        src: 'https://images.pexels.com/photos/2869318/pexels-photo-2869318.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with the actual image filename or URL
        alt: 'Image 3',
      },
      {
        src: 'https://images.pexels.com/photos/3934002/pexels-photo-3934002.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with the actual image filename or URL
        alt: 'Image 4',
      },
      
      // Add more images for Album 1
    ],
  },

  {
    name: 'Album 7',
    cover: 'https://images.pexels.com/photos/5257481/pexels-photo-5257481.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with the actual image filename or URL for the album cover
    images: [
      {
        src: 'https://images.pexels.com/photos/2034435/pexels-photo-2034435.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with the actual image filename or URL
        alt: 'Image 1',
      },
      {
        src: 'https://images.pexels.com/photos/3419692/pexels-photo-3419692.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with the actual image filename or URL
        alt: 'Image 2',
      },
      {
        src: 'https://images.pexels.com/photos/15781473/pexels-photo-15781473/free-photo-of-woman-with-cupcake-celebrating-birthday-in-bed.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with the actual image filename or URL
        alt: 'Image 3',
      },
      {
        src: 'https://images.pexels.com/photos/1751167/pexels-photo-1751167.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with the actual image filename or URL
        alt: 'Image 4',
      },
      
      // Add more images for Album 1
    ],
  },

  {
    name: 'Album 8',
    cover: 'https://images.pexels.com/photos/4348082/pexels-photo-4348082.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with the actual image filename or URL for the album cover
    images: [
      {
        src: 'https://images.pexels.com/photos/3738222/pexels-photo-3738222.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with the actual image filename or URL
        alt: 'Image 1',
      },
      {
        src: 'https://images.pexels.com/photos/4587855/pexels-photo-4587855.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with the actual image filename or URL
        alt: 'Image 2',
      },
      {
        src: 'https://images.pexels.com/photos/3265994/pexels-photo-3265994.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with the actual image filename or URL
        alt: 'Image 3',
      },
      {
        src: 'https://images.pexels.com/photos/3778145/pexels-photo-3778145.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with the actual image filename or URL
        alt: 'Image 4',
      },
      
      // Add more images for Album 1
    ],
  },
  {
    name: 'Album 9',
    cover: 'https://images.pexels.com/photos/10464784/pexels-photo-10464784.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with the actual image filename or URL for the album cover
    images: [
      {
        src: 'https://images.pexels.com/photos/10464470/pexels-photo-10464470.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with the actual image filename or URL
        alt: 'Image 1',
      },
      {
        src: 'https://images.pexels.com/photos/10464783/pexels-photo-10464783.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with the actual image filename or URL
        alt: 'Image 2',
      },
      {
        src: 'https://images.pexels.com/photos/10464478/pexels-photo-10464478.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with the actual image filename or URL
        alt: 'Image 3',
      },
      {
        src: 'https://images.pexels.com/photos/10464481/pexels-photo-10464481.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with the actual image filename or URL
        alt: 'Image 4',
      },
      {
        src: 'https://images.pexels.com/photos/10464478/pexels-photo-10464478.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with the actual image filename or URL
        alt: 'Image 5',
      },
      {
        src: 'https://images.pexels.com/photos/10464795/pexels-photo-10464795.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', // Replace with the actual image filename or URL
        alt: 'Image 6',
      },
      {
        src: 'https://images.pexels.com/photos/10464779/pexels-photo-10464779.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', // Replace with the actual image filename or URL
        alt: 'Image 7',
      },
        // Add more images for Album 1
    ],
  },
      {
        name: 'Fashion',
        cover: 'https://images.pexels.com/photos/1982868/pexels-photo-1982868.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', // Replace with the actual image filename or URL for the album cover
        images: [
          {
            src: 'https://images.pexels.com/photos/7066403/pexels-photo-7066403.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', // Replace with the actual image filename or URL
            alt: 'Image 1',
          },
          {
            src: 'https://images.pexels.com/photos/1005032/pexels-photo-1005032.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', // Replace with the actual image filename or URL
            alt: 'Image 2',
          },
          {
            src: 'https://images.pexels.com/photos/13130385/pexels-photo-13130385.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', // Replace with the actual image filename or URL
            alt: 'Image 3',
          },
          {
            src: 'https://images.pexels.com/photos/921155/pexels-photo-921155.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', // Replace with the actual image filename or URL
            alt: 'Image 4',
          },
          {
            src: 'https://images.pexels.com/photos/2005744/pexels-photo-2005744.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', // Replace with the actual image filename or URL
            alt: 'Image 5',
          },
          {
            src: 'https://images.pexels.com/photos/1104034/pexels-photo-1104034.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', // Replace with the actual image filename or URL
            alt: 'Image 6',
          },
          {
            src: 'https://images.pexels.com/photos/4635407/pexels-photo-4635407.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', // Replace with the actual image filename or URL
            alt: 'Image 7',
          },
          {
            src: 'https://images.pexels.com/photos/718973/pexels-photo-718973.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', // Replace with the actual image filename or URL
            alt: 'Image 8',
          },    
          {
            src: 'https://images.pexels.com/photos/859198/pexels-photo-859198.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', // Replace with the actual image filename or URL
            alt: 'Image 9',
          },
          {
            src: 'https://images.pexels.com/photos/11681773/pexels-photo-11681773.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', // Replace with the actual image filename or URL
            alt: 'Image 10',
          },
          {
            src: 'https://images.pexels.com/photos/2703042/pexels-photo-2703042.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', // Replace with the actual image filename or URL
            alt: 'Image 11',
          },
          {
            src: 'https://images.pexels.com/photos/3055011/pexels-photo-3055011.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', // Replace with the actual image filename or URL
            alt: 'Image 12',
          },
          {
            src: 'https://images.pexels.com/photos/821417/pexels-photo-821417.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', // Replace with the actual image filename or URL
            alt: 'Image 13',
          },
          {
            src: 'https://images.pexels.com/photos/8762420/pexels-photo-8762420.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', // Replace with the actual image filename or URL
            alt: 'Image 14',
          },
          {
            src: 'https://images.pexels.com/photos/11628020/pexels-photo-11628020.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', // Replace with the actual image filename or URL
            alt: 'Image 15',
          },       
          // Add more images for Album 1
        ],
      },
      // Add more images for Album 1
    
];







const AlbumPage = () => {
  const [loading, setLoading] = useState(true);
  const [selectedAlbum, setSelectedAlbum] = useState(albums[0]);
  const [slideIndex, setSlideIndex] = useState(0);
  const thumbnailContainerRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500); // Simulating a loading delay of 1.5 seconds
  }, []);

  const openSlideshow = (album) => {
    setSelectedAlbum(album);
    setSlideIndex(0);
  };

  const selectThumbnail = (imageIndex) => {
    setSlideIndex(imageIndex);
  };

  useEffect(() => {
    const container = thumbnailContainerRef.current;
    if (container) {
      if (container.scrollWidth > container.clientWidth) {
        container.classList.add('show');
      } else {
        container.classList.remove('show');
      }
    }
  }, [selectedAlbum]);
  

  return (
    <div className='Gallery'>
      <div>
        <Navbar/>
      </div>
      <div className="bgimgslide">
        <BackgroundSlideshow/>
      </div>
      <div className="gallery-container">
        <h1 className="gallery-container-h1">Album</h1>
        {loading ? (
          <div className="loader">Loading...</div>
        ) : (
          <div className="album-grid">
            {albums.map((album, index) => (
              <div key={index} className="album-container">
                <div className="album-cover" onClick={() => openSlideshow(album)}>
                  <img src={selectedAlbum === album ? album.images[slideIndex].src : album.cover} alt={album.name} style={{ width: '100%' }} />
                  <div className="album-name">{album.name}</div>
                </div>
                {selectedAlbum === album && (
                  <div className={`slideshow-container ${selectedAlbum === album ? 'show' : ''}`}>
                    {/* ... (slideshow content) */}
                  </div>
                )}
                {selectedAlbum === album && (
                  <div className={`thumbnail-scroll-container ${selectedAlbum === album ? 'show' : ''}`} ref={thumbnailContainerRef}>
                    <div className="thumbnail-container">
                      {album.images.map((image, imageIndex) => (
                        <img
                          key={imageIndex}
                          src={image.src}
                          alt={image.alt}
                          className={`thumbnail ${slideIndex === imageIndex ? 'active' : ''}`}
                          onClick={() => selectThumbnail(imageIndex)}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default AlbumPage;





