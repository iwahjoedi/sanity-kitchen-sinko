export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '607736881a523421229a2f3a',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sinko-studio',
                  apiId: 'cd66aee9-3c62-43f4-ba0c-65e88bb16af2'
                },
                {
                  buildHookId: '6077368844db381709cdb010',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sinko',
                  apiId: '9ed5e4e7-6454-4059-9c4b-cc055003e327'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/iwahjoedi/sanity-kitchen-sinko',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sinko.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
