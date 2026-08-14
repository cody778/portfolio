import { useState } from 'react'

export default function ProjectCard({
  title,
  date,
  description,
  technologies,
  responsibilities,
  imageUrl,
  imageSources = [],
  reportUrl,
  reportName
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const images = imageSources.length > 0 ? imageSources : (imageUrl ? [imageUrl] : [])
  const techItems = Array.isArray(technologies)
    ? technologies
    : typeof technologies === 'string'
    ? technologies.split(',').map((tech) => tech.trim()).filter(Boolean)
    : []
  const reportFileName =
    reportName ||
    (typeof reportUrl === 'string'
      ? reportUrl.split('/').pop()?.split('?')[0]?.split('#')[0] || ''
      : '')
  const highlightWords = [
    'responsive',
    'real-time',
    'secure',
    'authentication',
    'payments',
    'payment',
    'subscription',
    'automation',
    'testing',
    'hardware',
    'software',
    'testing',
    'prototype',
    'architecture',
    'delivery',
    'integration',
    'implement',
    'design',
    'web',
    'system',
    'system',
    'report',
    'maintenance',
    'deployment'
  ]

  const renderHighlightedText = (text, keyPrefix = 'text') => {
    return text.split(/(\s+)/).map((part, index) => {
      const normalized = part
        .toLowerCase()
        .replace(/[^a-z0-9\-]/g, '')
        .trim()

      if (highlightWords.includes(normalized) && normalized.length > 0) {
        return (
          <span
            key={`${keyPrefix}-${index}`}
            style={{ color: '#d0ff8a', fontWeight: 600 }}
          >
            {part}
          </span>
        )
      }

      return <span key={`${keyPrefix}-${index}`}>{part}</span>
    })
  }

  const terminalRail = Array.from({ length: 60 }, (_, index) => index)
  const terminalRailTemplate = `>`

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
      position: 'relative',
      padding: '1rem 1rem 1rem 2.35rem',
      marginLeft: '0.2rem',
      color: '#c8c8c8',
      background: '#0f1118',
      fontFamily: "'Fira Code', 'Source Code Pro', 'Consolas', 'Courier New', monospace"
    }}>
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: '0.2rem',
          top: 0,
          bottom: 0,
          width: '2.6rem',
          display: 'grid',
          gridAutoRows: '1.08rem',
          alignContent: 'start',
          color: '#7fb342',
          fontSize: '0.72rem',
          lineHeight: '1.08rem',
          letterSpacing: '0.01rem',
          pointerEvents: 'none',
          userSelect: 'none',
          opacity: 0.9,
          overflow: 'hidden'
        }}
      >
        {terminalRail.map((index) => (
          <span
            key={`terminal-rail-${index}`}
            style={{ textAlign: 'left', whiteSpace: 'pre' }}
          >
            {terminalRailTemplate}
          </span>
        ))}
      </div>

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
          <div style={{
            color: '#7fb342',
            fontSize: '0.82rem',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '0.55rem',
            fontWeight: 700
          }}>
            $ terminal::project
          </div>
          <div style={{
            color: '#9ad67f',
            fontSize: '1.1rem',
            marginBottom: '0.35rem',
            fontWeight: 600,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>
            {title}
          </div>
          <div style={{color: '#88a0bf', fontSize: '0.82rem', marginBottom: '1rem'}}>
            <span style={{color: '#7fb342'}}>$ </span>updated: {date}
          </div>

          <div style={{
            display: 'flex',
            gap: '1.2rem',
            flexWrap: 'wrap',
            marginBottom: '0.8rem',
            alignItems: 'flex-start'
          }}>
            <div style={{flex: '1 1 260px', maxWidth: '52%'}}>
              <div style={{color: '#7fb342', marginBottom: '0.3rem', fontSize: '0.84rem'}}>
                <span style={{color: '#7fb342'}}>$ </span>description:
              </div>
              <div style={{
                color: '#b0b0b0',
                fontSize: '0.86rem',
                marginBottom: '0.55rem',
                lineHeight: '1.45',
                background: '#141925',
                border: '1px solid #223044',
                borderRadius: '4px',
                padding: '0.55rem 0.65rem'
              }}>
                {renderHighlightedText(description, 'desc')}
              </div>
            </div>

            <div style={{flex: '1 1 240px'}}>
              {techItems.length > 0 && (
                <div style={{marginBottom: '0.8rem'}}>
                  <div style={{color: '#7fb342', marginBottom: '0.3rem', fontSize: '0.84rem'}}>
                    <span style={{color: '#7fb342'}}>$ </span>technologies:
                  </div>
                  <ul style={{
                    margin: '0',
                    paddingLeft: '1.2rem',
                    color: '#b0b0b0',
                    fontSize: '0.83rem',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                    gap: '0.25rem 1rem'
                  }}>
                    {techItems.map((tech, idx) => (
                      <li key={idx}>{renderHighlightedText(tech, `tech-${idx}`)}</li>
                    ))}
                  </ul>
                </div>
              )}

              {responsibilities && (
                <div style={{marginBottom: '0.8rem'}}>
                  <div style={{color: '#7fb342', marginBottom: '0.3rem', fontSize: '0.84rem'}}>
                    <span style={{color: '#7fb342'}}>$ </span>responsibilities:
                  </div>
                  <ul style={{
                    margin: '0',
                    paddingLeft: '1.2rem',
                    color: '#b0b0b0',
                    fontSize: '0.83rem'
                  }}>
                    {responsibilities.map((resp, idx) => (
                      <li key={idx}>{renderHighlightedText(resp, `resp-${idx}`)}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Download Report Link */}
          {reportUrl && (
            <div style={{marginTop: '1rem'}}>
            <a 
                href={reportUrl}
                download={reportFileName || reportName}
                style={{
                  color: '#7fb342',
                  textDecoration: 'none',
                  fontSize: '0.84rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontWeight: 600
                }}
              >
                Download report; <span aria-hidden="true">&#128196;</span>
                {reportFileName}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

