<template>
<div>
<input 
  type="radio" 
  id="one" 
  value="title.one" 
  v-model="picked">
<label for="one">1 Year</label>
<br>
<input 
  type="radio" 
  id="two" 
  value="title.two" 
  v-model="picked">
<label for="two">2 Year</label>
<br>
<br>
<span>Price: {{ picked }}</span>
</div>
</template>

<script>

export default {
  data () {
    return {
      picked:''
    }
  }
}
</script>



