import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'faq',
  title: 'Frequently Asked Questions',
  type: 'document',
	fields: [
		defineField({
      name: 'question',
      title: 'question',
      type: 'string',
    }),
		defineField({
			name:'answers',
			type:'array',
			of:[{
				type:'block'
			}]
		})

	],

})
