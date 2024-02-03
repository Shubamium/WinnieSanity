import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'prices',
  title: 'Prices',
  type: 'document',
	fields: [
		defineField({
      name: 'section',
      title: 'Section Name',
      type: 'string',
    }),
		defineField({
			name: 'price_list',
			title:'Price List',
			type:'array',
			of:[
				{
					type:'object',
					fields:[
						{
							name:'title',
							type:'string',
						},{
							name:'description',
							type:'array',
							of:[{
								type:'block'
							}]
						},{
							name:'price',
							type:'string',
						},{
							name:'notes',
							type:'array',
							of:[
								{
									name:'note',
									type:'string',
								}
							]
						}
					]
				}
			]
		}),
	],

})
