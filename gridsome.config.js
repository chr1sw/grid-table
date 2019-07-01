// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Jacobson Periodicals',
  plugins: [
    {
      use: '@gridsome/source-airtable',
      options: {
        apiKey: 'keyO9dL9DAXnnodNf', // required
        baseId: 'appHp3atnyMZNMMCB', // required
        tableName: 'Mags', // required
        typeName: 'Title', // required
        route: '/titles/:slug' // optional
      }
    }
  ]
}
