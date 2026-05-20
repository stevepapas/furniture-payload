type Profile = {
  name?: string | null
  role?: string | null
  bio?: string | null
}

export function PortfolioHero({ profile }: { profile: Profile }) {
  return (
    <div
      style={{
        background: '#0f172a',
        color: '#fff',
        padding: '3rem 2.5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        minHeight: '50vh',
        borderRight: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.375rem 0.875rem',
          borderRadius: '0.5rem',
          background: 'rgba(37,99,235,0.10)',
          border: '2px solid #2563eb',
          color: '#93c5fd',
          fontSize: '0.8rem',
          fontWeight: 500,
          marginBottom: '2rem',
          width: 'fit-content',
        }}
      >
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#3b82f6', flexShrink: 0, display: 'inline-block' }} />
        Available for new projects
      </div>
      <h1
        style={{
          fontFamily: "'Epilogue', sans-serif",
          fontWeight: 600,
          fontSize: 'clamp(2.5rem, 5vw, 5.5rem)',
          lineHeight: 1.05,
          letterSpacing: '-0.02em',
          marginBottom: '1.5rem',
        }}
      >
        {profile.name || 'Aetherfield'}
      </h1>
      <p
        style={{
          fontFamily: "'Epilogue', sans-serif",
          fontWeight: 500,
          fontSize: 'clamp(1rem, 2vw, 1.5rem)',
          lineHeight: 1.3,
          maxWidth: 480,
          color: 'rgba(148,163,184,1)',
        }}
      >
        {profile.role || 'Design & development studio'}
      </p>
    </div>
  )
}
