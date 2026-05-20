import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Categories } from './src/collections/Categories'
import { Media } from './src/collections/Media'
import { Pages } from './src/collections/Pages'
import { Posts } from './src/collections/Posts'
import { Projects } from './src/collections/Projects'
import { Skills } from './src/collections/Skills'
import { Users } from './src/collections/Users'
import { HeaderGlobal } from './src/globals/Header'
import { Profile } from './src/globals/Profile'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Categories, Media, Pages, Posts, Projects, Skills, Users],
  globals: [HeaderGlobal, Profile],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || '',
  }),
  sharp,
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL,
})
