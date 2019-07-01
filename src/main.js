// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { head, router, isServer }) {
  Vue.component('Layout', DefaultLayout)

  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css'
  });

  head.script.push({
    type: 'text/javascript',
    src: 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js',
    body: true,
  });

  head.script.push({
    type: 'text/javascript',
    src: 'https://cdn.snipcart.com/scripts/2.0/snipcart.js',
    body: true,
    'data-autopop': false,
    

    // snipcart scripts' attributes
    id: 'snipcart',
    'data-api-key': 'ZDQ2YTEyOWItOGIyMy00OGM3LTk5YzAtODMyMzJjZjUwOTc1NjM2OTczNTQyNTY2NjA1NjA4'

  });
}
