export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5eba65f7d6602d7858c97933',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ct8b93oh',
                  apiId: '2461a165-6afd-4de3-9b92-c7c7ffc59c46'
                },
                {
                  buildHookId: '5eba65f7d6602d5c35c97c26',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-45tqtx67',
                  apiId: '13a63a58-6f84-48b0-82d7-0fc2b0865b0f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gispatial/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-45tqtx67.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
