import type { GlobalConfig } from 'payload'

export const Profile: GlobalConfig = {
  slug: 'profile',
  admin: {
    group: 'Portfolio',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Your Name',
    },
    {
      name: 'role',
      type: 'text',
      required: true,
      label: 'Role / Title',
      admin: {
        placeholder: 'e.g. Visual Designer',
      },
    },
    {
      name: 'bio',
      type: 'textarea',
      label: 'Short Bio',
    },
    {
      name: 'headshot',
      type: 'upload',
      relationTo: 'media',
      label: 'Profile Photo',
    },
    {
      name: 'contactUrl',
      type: 'text',
      label: 'Contact Button URL',
      admin: {
        placeholder: 'e.g. mailto:hello@example.com or /contact',
      },
    },
    {
      name: 'socialLinks',
      type: 'array',
      label: 'Social Links',
      fields: [
        {
          name: 'platform',
          type: 'text',
          label: 'Platform Name',
        },
        {
          name: 'url',
          type: 'text',
          label: 'URL',
        },
      ],
    },
  ],
}
