type Project = {
  id: string
  title: string
  category?: string | null
  url?: string | null
  coverImage?:
    | {
        url: string
        alt: string
        sizes?: { card?: { url?: string | null } | null } | null
      }
    | null
}

export function ProjectsGallery({ projects }: { projects: Project[] }) {
  if (!projects.length) {
    return (
      <section style={{ padding: '2rem 1.5rem' }}>
        <h2
          style={{
            fontFamily: "'Epilogue', sans-serif",
            fontWeight: 600,
            fontSize: '1.25rem',
            color: '#3b3b3b',
            marginBottom: '1rem',
          }}
        >
          Latest work
        </h2>
        <p style={{ color: '#888', fontSize: '0.875rem' }}>
          No projects yet — add some in the Payload admin.
        </p>
      </section>
    )
  }

  return (
    <section style={{ padding: '2rem 1.5rem' }}>
      <h2
        style={{
          fontFamily: "'Epilogue', sans-serif",
          fontWeight: 600,
          fontSize: '1.25rem',
          color: '#3b3b3b',
          marginBottom: '1.5rem',
        }}
      >
        Latest work
      </h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '1rem',
        }}
      >
        {projects.map((project) => {
          const imageUrl =
            project.coverImage?.sizes?.card?.url || project.coverImage?.url
          const href = project.url || '#'

          return (
            <a
              key={project.id}
              href={href}
              style={{
                background: '#fff',
                borderRadius: '8px',
                overflow: 'hidden',
                display: 'block',
                textDecoration: 'none',
              }}
            >
              {imageUrl && (
                <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
                  <img
                    src={imageUrl}
                    alt={project.coverImage?.alt || project.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              )}
              <div style={{ padding: '0.75rem 1rem' }}>
                {project.category && (
                  <p
                    style={{
                      fontSize: '0.7rem',
                      color: '#999',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      marginBottom: '0.2rem',
                    }}
                  >
                    {project.category}
                  </p>
                )}
                <h3
                  style={{
                    fontFamily: "'Epilogue', sans-serif",
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    color: '#3b3b3b',
                  }}
                >
                  {project.title}
                </h3>
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}
