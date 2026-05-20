import { getPayload } from 'payload'
import config from '@payload-config'
import { PortfolioHero } from '@/components/PortfolioHero'
import { SkillsGrid } from '@/components/SkillsGrid'
import { ProjectsGallery } from '@/components/ProjectsGallery'

export default async function PortfolioPage() {
  const payload = await getPayload({ config })

  const [profile, skills, projects] = await Promise.all([
    payload.findGlobal({ slug: 'profile' }),
    payload.find({ collection: 'skills', sort: 'order', limit: 10 }),
    payload.find({
      collection: 'projects',
      where: { featured: { equals: true } },
      sort: '-createdAt',
      limit: 12,
      depth: 1,
    }),
  ])

  return (
    <main
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        minHeight: '100vh',
      }}
    >
      {/* Left dark hero panel */}
      <PortfolioHero profile={profile} />

      {/* Right column: header card + skills */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          padding: '1.5rem',
          background: 'var(--light-bg)',
        }}
      >
        {/* Header card */}
        <div
          style={{
            background: 'var(--card-bg)',
            borderRadius: '8px',
            padding: '2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
          }}
        >
          {profile.headshot && typeof profile.headshot === 'object' && (
            <img
              src={(profile.headshot as any).url}
              alt={profile.name}
              style={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                objectFit: 'cover',
                flexShrink: 0,
              }}
            />
          )}
          <div style={{ flex: 1, minWidth: 0 }}>
            {profile.role && (
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                {profile.role}
              </p>
            )}
            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--dark)' }}>
              {profile.name || 'Your Name'}
            </h2>
            {profile.bio && (
              <p
                style={{
                  fontSize: '0.875rem',
                  color: '#555',
                  marginTop: '0.5rem',
                  lineHeight: 1.5,
                }}
              >
                {profile.bio}
              </p>
            )}
          </div>
          {profile.contactUrl && (
            <a
              href={profile.contactUrl}
              style={{
                padding: '0.5rem 1.25rem',
                background: 'var(--dark)',
                color: 'var(--white)',
                borderRadius: '4px',
                fontSize: '0.875rem',
                fontWeight: 500,
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
            >
              Contact
            </a>
          )}
        </div>

        {/* Skills cards */}
        <SkillsGrid skills={skills.docs as any} />
      </div>

      {/* Full-width gallery row */}
      <div style={{ gridColumn: '1 / -1' }}>
        <ProjectsGallery projects={projects.docs as any} />
      </div>
    </main>
  )
}
