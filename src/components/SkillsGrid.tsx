type Skill = {
  id: string
  name: string
  description?: string | null
  category?: string | null
  icon?: { url: string; alt: string } | null
}

export function SkillsGrid({ skills }: { skills: Skill[] }) {
  if (!skills.length) return null

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))',
        gap: '1rem',
      }}
    >
      {skills.map((skill) => (
        <div
          key={skill.id}
          style={{
            background: '#fff',
            borderRadius: '8px',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
          }}
        >
          {skill.icon && (
            <img
              src={skill.icon.url}
              alt={skill.icon.alt}
              style={{ width: 40, height: 40, objectFit: 'contain', marginBottom: '0.25rem' }}
            />
          )}
          <h3
            style={{
              fontFamily: "'Epilogue', sans-serif",
              fontWeight: 600,
              fontSize: '1rem',
              color: '#3b3b3b',
            }}
          >
            {skill.name}
          </h3>
          {skill.description && (
            <p style={{ fontSize: '0.8rem', color: '#777', lineHeight: 1.4 }}>
              {skill.description}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}
