export default function ProjectCard({ title, date, description, technologies, responsibilities, imageUrl, reportUrl, reportName }) {
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
        <div style={{
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
          overflow: 'hidden'
        }}>
          {imageUrl ? (
            <img src={imageUrl} alt={title} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
          ) : (
            '[Project Image]'
          )}
        </div>

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
