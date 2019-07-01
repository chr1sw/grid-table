<template>
    <Layout>
        <g-link to="/">Go Back</g-link>
        <br>
        <h1> {{ $page.title.title }} </h1>
        <buy-button :title="$page.title" />

        <div v-html="$page.title.note" />
        <br>
        <a href="#" class="snipcart-checkout">Checkout</a>

    </Layout>
</template>

<script>
    import BuyButton from '../components/BuyButton';

    export default {
        components: {
            BuyButton
             }
    }
</script>


<page-query>
query Title ($path: String!) {
    title (path: $path) {
        id
        title
        path
        one
        two
        three
        note
      }
    }
    </page-query>


    
