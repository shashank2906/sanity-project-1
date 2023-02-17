export default {
  name: 'about',
  type: 'document',
  title: 'About',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'portrait',
      title: 'Portrait',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Manuscript',
      name: 'manuscript',
      type: 'file',
      fields: [
        {
          name: 'description',
          type: 'string',
          title: 'Description',
        },
      ],
    },
  ],
}
