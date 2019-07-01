<template>
  <Layout>

   
<div v-for="title in $page.titles.edges" :key="title.id">
    <g-link :to="title.node.path">{{ title.node.title }}</g-link>
    </div> 
            </Layout>
 
</template>



 <page-query>
 query Titles {
   titles: allTitle (sortBy: "title", order: ASC) {
     edges {
       node {
         id
         title
         path
       }
     }
   }
 }
</page-query>

 
    
<style>
.home-links a {
  margin-right: 1rem;
}
</style>
