export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ea01dec33ab7d9b21cf8bfa',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-45uao6vj',
                  apiId: '0a28ddff-e2ab-400e-8843-2842a0a835ad'
                },
                {
                  buildHookId: '5ea01dec1e6243009fedf64a',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-aprfnomn',
                  apiId: 'b814a2d6-95f3-4137-aab0-1ad5e54f1036'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/CDulst/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-aprfnomn.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
