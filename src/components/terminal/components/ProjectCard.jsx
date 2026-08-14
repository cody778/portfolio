import { useState } from 'react'

export default function ProjectCard({ title, date, description, technologies, responsibilities, imageUrl, imageSources = [], reportUrl, reportName }) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const images = imageSources.length > 0 ? imageSources : (imageUrl ? [imageUrl] : [])

  const openGallery = () => {
    if (images.length === 0) {
      return
    }
    setActiveIndex(0)
    setIsOpen(true)
  }

  const closeGallery = () => setIsOpen(false)

  const nextImage = (event) => {
    event.stopPropagation()
    setActiveIndex((activeIndex + 1) % images.length)
  }

  const previousImage = (event) => {
    event.stopPropagation()
    setActiveIndex((activeIndex - 1 + images.length) % images.length)
  }

  return (
    <div style={{
      marginBottom: '2rem',
      borderLeft: '2px solid #7fb342',
      paddingLeft: '1rem',
      color: '#c8c8c8'
    }}>
      <div style={{
        display: 'flex',
        gap: '1.5rem',
        flexWrap: 'wrap'
      }}>
        {/* Image Section */}
        <button type="button" onClick={openGallery} style={{
          flex: '0 0 250px',
          height: '200px',
          background: '#1a1a24',
          border: '1px solid #333',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#666',
          fontSize: '0.9rem',
          overflow: 'hidden',
          padding: 0,
          cursor: images.length > 0 ? 'zoom-in' : 'default',
          position: 'relative'
        }}>
          {imageUrl ? (
            <img src={imageUrl} alt={title} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
          ) : (
            '[Project Image]'
          )}
          {images.length > 0 && (
            <span style={{
              position: 'absolute',
              bottom: '0.4rem',
              right: '0.4rem',
              background: '#0a0a14cc',
              color: '#7fb342',
              border: '1px solid #7fb342',
              borderRadius: '3px',
              padding: '0.15rem 0.4rem',
              fontSize: '0.7rem'
            }}>
              Open gallery
            </span>
          )}
        </button>

        {isOpen && (
          <div style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.92)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 50,
            padding: '1rem'
          }}
          onClick={closeGallery}>
            <div style={{
              position: 'relative',
              maxWidth: '92vw',
              maxHeight: '88vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: '0.75rem'
            }}
            onClick={(event) => event.stopPropagation()}>
              <button type="button" onClick={closeGallery} style={{
                position: 'absolute',
                top: '-2.4rem',
                right: '0',
                background: 'transparent',
                border: '1px solid #7fb342',
                color: '#7fb342',
                width: '2rem',
                height: '2rem',
                borderRadius: '3px'
              }}>
                ✕
              </button>

              <img
                src={images[activeIndex]}
                alt={`${title} ${activeIndex + 1}`}
                style={{
                  maxWidth: '86vw',
                  maxHeight: '75vh',
                  objectFit: 'contain'
                }}
              />

              {images.length > 1 && (
                <div style={{
                  color: '#c8c8c8',
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <button type="button" onClick={previousImage} style={{ border: '1px solid #7fb342', color: '#7fb342', background: 'transparent', padding: '0.35rem 0.7rem', borderRadius: '3px' }}>
                    ←
                  </button>
                  <div style={{ color: '#999', fontSize: '0.85rem' }}>
                    {activeIndex + 1} / {images.length}
                  </div>
                  <button type="button" onClick={nextImage} style={{ border: '1px solid #7fb342', color: '#7fb342', background: 'transparent', padding: '0.35rem 0.7rem', borderRadius: '3px' }}>
                    →
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Info Section */}
        <div style={{flex: '1', minWidth: '300px'}}>
          <div style={{color: '#7fb342', fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 'bold'}}>
            {title}
          </div>
          <div style={{color: '#999', fontSize: '0.9rem', marginBottom: '1rem'}}>
            {date}
          </div>

          <div style={{marginBottom: '0.8rem'}}>
            <div style={{color: '#d8d8d8', marginBottom: '0.3rem'}}>Description:</div>
            <div style={{color: '#b0b0b0', fontSize: '0.9rem'}}>{description}</div>
          </div>

          {technologies && (
            <div style={{marginBottom: '0.8rem'}}>
              <div style={{color: '#d8d8d8', marginBottom: '0.3rem'}}>Tech:</div>
              <div style={{color: '#b0b0b0', fontSize: '0.85rem'}}>{technologies}</div>
            </div>
          )}

          {responsibilities && (
            <div style={{marginBottom: '0.8rem'}}>
              <div style={{color: '#d8d8d8', marginBottom: '0.3rem'}}>Responsibilities:</div>
              <ul style={{margin: '0', paddingLeft: '1.5rem', color: '#b0b0b0', fontSize: '0.85rem'}}>
                {responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Download Report Link */}
          {reportUrl && (
            <div style={{marginTop: '1rem'}}>
              <a 
                href={reportUrl}
                download={reportName}
                style={{
                  color: '#7fb342',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  border: '1px solid #7fb342',
                  padding: '0.5rem 1rem',
                  borderRadius: '3px',
                  display: 'inline-block',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#7fb342';
                  e.target.style.color = '#0a0a14';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#7fb342';
                }}
              >
                📄 Download Report
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
