<template>
  <div>
    <paginated-list :list-array="pageArray" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PaginatedList from './PaginatedList.vue'

export default {
  name: 'simple-pagination',
  components: {
    PaginatedList
  },
  data () {
    return {
      pageArray: []
    }
  },
  computed: {
    ...mapGetters(['profile']),
    
  },
  methods : {
    putPageArray() {
      this.pageArray = this.profile.person_ids
    },
  },
  created () {
    // this.putPageArray()
    this.sortPageArray()
  }
}
</script>

<style>

</style>