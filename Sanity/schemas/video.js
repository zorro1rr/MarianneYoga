import { ImVideoCamera as icon } from 'react-icons/Im';

export default {
  // computer name
  name: 'videos',
  // visable title
  title: 'Videos',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'href',
      title: 'Share/Embed',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Video Description',
    },
  ],
};