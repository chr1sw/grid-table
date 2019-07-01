<template>
    <div>
<dropdown />
<br>
<button class="snipcart-add-item"
        :data-item-id="title.id"
        :data-item-name="title.title"
        :data-item-price="picked"
        :data-item-url="'/' + title.path">
            <slot>
            Add To Cart
        </slot>
    </button>
    </div>
</template>

<script>
    import Dropdown from '../components/Dropdown';

export default {
    components: {
        Dropdown
     },
    props: ['title','picked']
}
</script>

<style scoped>
button {
    background-color: #E3E3E3;
    border: 0;
    font-family: inherit;
    font-size: inherit;
    border-radius: .2em;
    padding: .4em;
}
button:hover {
    background-color: hsla(152, 65%, 80%, 1);
    cursor: pointer;
}
</style>