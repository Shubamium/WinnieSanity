import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'client',
  title: 'Clients',
  type: 'document',
	fields: [
		defineField({
			name:'picture',
			type:'image',
		}),
		defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
		defineField({
			name: 'handle',
			type:'object',
			fields:[
				defineField({
					name:'handle_name',
					type:'string',
				}),
				defineField({
					name:'link',
					type:'url'
				})
			]
		}),
		defineField({
			name:'bio',
			type:'array',
			of:[
				{type:'block'}
			]
		}),
		defineField({
			name:'contacts',
			type: 'array',
			of:[
				{
					type:'object',
					fields:[
						{
							name: 'Type',
							type:'string',
							options: {
								list: [{title:'Twitch',value:'twitch'}, 
								{title:'Twitter',value:'twitter',},
								{title:'Discord',value:'discord'}, 
								{title:'Youtube',value:'youtube'}, 
								{title:'Website',value:'website'},
								{title:'Tiktok',value:'tiktok'}
							]},
						},
						{
							name: 'Link',
							type:'string',
						}
					]
				}
			]
		}),

	],

})
