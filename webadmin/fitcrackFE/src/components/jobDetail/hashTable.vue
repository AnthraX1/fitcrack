<template>
  <v-data-table
    :headers="headers"
    :items="hashes"
    :footer-props="footer"
  >
    <template #item.hashText="{ item }">
      <span class="hash">
        {{ item.hashText }}
      </span>
    </template>
  </v-data-table>
</template>

<script>
export default {
  props: {
    hashes: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      headers: [
        {
          text: 'Hash',
          align: 'start',
          value: 'hashText'
        },
        {text: 'Password', value: 'password', align: 'end'}
      ],
      footer: {
        itemsPerPageOptions: [10,25,50,100,{text: 'All', value: -1}], 
        itemsPerPageText: 'Hashes per page'
      }
    }
  }
}
</script>

<style>
.hash {
  display: inline-block;
  max-width: 80ch;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>