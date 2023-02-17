export default {
  name: 'info',
  type: 'document',
  title: 'Info',
  fields: [
    {
      name: 'illustration',
      type: 'image', // image field with alt and caption fields
      title: 'Illustration',
    },
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'text',
      type: 'text', // or text, or simpleRichText depending on what you want to allow,
      title: 'Text',
    },
  ],
}
