export default function About() {
  const imageUrl = null
  const bulletStyle = { color: '#7fb342', marginRight: '0.5rem' }
  const accentText = { color: '#7fb342', fontWeight: '600' }

  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', flexWrap: 'wrap', paddingBottom: '1rem' }}>
      <div style={{
        flex: '0 0 280px',
        height: '360px',
        border: '1px solid #333',
        borderRadius: '4px',
        overflow: 'hidden',
        background: '#1a1a24',
        marginTop: '1rem',
        marginLeft: '1rem',
        minWidth: '220px'
      }}>
        {imageUrl ? (
          <img src={imageUrl} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <div style={{
            color: '#666',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.95rem'
          }}>
            [Profile Image]
          </div>
        )}
      </div>

      <div className="pl-4 pt-4 pb-4 text-sm leading-relaxed" style={{ flex: '1', minWidth: '300px' }}>
        <div style={{ color: '#c8c8c8', marginBottom: '1.5rem' }}>
          <div style={{ color: '#7fb342', marginBottom: '0.5rem' }}>
            - ABOUT ME
          </div>
          <div style={{ color: '#c8c8c8', marginLeft: '1rem' }}>
            I am a very <span style={accentText}>dynamic</span> person and I
            <span style={accentText}> adapt</span> easily to any situation
            that I encounter. I can brighten people's day with ease and I can
            <span style={accentText}> integrate</span> into any team I work with. I am
            a very <span style={accentText}>sociable</span> person and I enjoy
            everything I do, no matter the task. I like to think of myself as a
            <span style={accentText}> trustworthy</span>,
            <span style={accentText}> efficient</span>,
            <span style={accentText}> reliable</span> and
            <span style={accentText}> pleasant</span> person.
          </div>
        </div>

        <div style={{ color: '#c8c8c8', marginBottom: '1.5rem' }}>
          <div style={{ color: '#7fb342', marginBottom: '0.5rem' }}>
            - SOFT SKILLS
          </div>
          <div style={{ color: '#c8c8c8', marginLeft: '1rem', lineHeight: '1.6' }}>
            <div><span style={bulletStyle}>▸</span><span style={accentText}>Communicative</span> - Social person who enjoys discussing ideas and perspectives.</div>
            <div><span style={bulletStyle}>▸</span><span style={accentText}>Creative Thinker</span> - Team player who works well independently and consistently finds best solutions.</div>
            <div><span style={bulletStyle}>▸</span><span style={accentText}>Result Driven</span> - I like measurable outcomes and on-time delivery.</div>
            <div><span style={bulletStyle}>▸</span><span style={accentText}>Leadership</span> - Experienced coordinating teams of <span style={accentText}>4-5</span> people.</div>
            <div><span style={bulletStyle}>▸</span><span style={accentText}>Problem Solving</span> - Strong analytical approach across technical and operational work.</div>
          </div>
        </div>

        <div style={{ color: '#c8c8c8', marginBottom: '1.5rem' }}>
          <div style={{ color: '#7fb342', marginBottom: '0.5rem' }}>
            - HARD SKILLS & TECH
          </div>
          <div style={{ color: '#c8c8c8', marginLeft: '1rem', lineHeight: '1.6' }}>
            <div><span style={{ color: '#7fb342' }}>Programming:</span> C#, <span style={accentText}>C++</span>, Python, JavaScript, HTML, CSS, PHP, JSON, Object-Oriented Programming</div>
            <div><span style={{ color: '#7fb342' }}>Frameworks:</span> <span style={accentText}>.NET</span>, <span style={accentText}>React</span>, Unity, WordPress, WooCommerce, Shopify</div>
            <div><span style={{ color: '#7fb342' }}>Databases:</span> MongoDB, MySQL, PostgreSQL, DynamoDB, SQLite, Elasticsearch</div>
            <div><span style={{ color: '#7fb342' }}>Embedded:</span> Arduino, Atmega 1284, Raspberry Pi4, ESP32</div>
            <div><span style={{ color: '#7fb342' }}>Tools:</span> <span style={accentText}>Git</span>/<span style={accentText}>GitHub</span>, Linux, Docker, Blender, Agile/Scrum, VMware, Wireshark</div>
            <div><span style={{ color: '#7fb342' }}>Web Dev:</span> Klaviyo, Wix, WordPress, WooCommerce, Shopify</div>
          </div>
        </div>

        <div style={{ color: '#c8c8c8', marginBottom: '1.5rem' }}>
          <div style={{ color: '#7fb342', marginBottom: '0.5rem' }}>
            - WORK EXPERIENCE
          </div>
          <div style={{ color: '#c8c8c8', marginLeft: '1rem', lineHeight: '1.8' }}>
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ color: '#d8d8d8' }}><span style={accentText}>Lead Software Developer</span> - Rasmines eBits <span style={accentText}>(Sep 2024 - OnGoing)</span></div>
              <div style={{ color: '#999', fontSize: '0.9rem' }}><span style={bulletStyle}>▸</span>Develop and deliver software in <span style={accentText}>C#</span>, <span style={accentText}>C++</span>, .NET, Unity, HTML5, JavaScript, Python</div>
              <div style={{ color: '#999', fontSize: '0.9rem' }}><span style={bulletStyle}>▸</span>Create electronics courses and kits for students</div>
              <div style={{ color: '#999', fontSize: '0.9rem' }}><span style={bulletStyle}>▸</span>Develop and manage <span style={accentText}>Ecommerce</span> solutions</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
