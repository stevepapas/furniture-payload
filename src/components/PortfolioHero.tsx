type Profile = {
  name?: string | null
  role?: string | null
  bio?: string | null
}

export function PortfolioHero({ profile }: { profile: Profile }) {
  return (
    <div
      style={{
        background: '#3b3b3b',
        color: '#fff',
        padding: '3rem 2.5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        minHeight: '50vh',
      }}
    >
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
        Portfolio
        <br />
        {profile.name || 'Template'}
      </h1>
      <p
        style={{
          fontFamily: "'Epilogue', sans-serif",
          fontWeight: 500,
          fontSize: 'clamp(1rem, 2vw, 2rem)',
          lineHeight: 1.3,
          maxWidth: 480,
          color: 'rgba(255,255,255,0.8)',
        }}
      >
        {profile.role || 'Visual Designer'}
      </p>
    </div>
  )
}
