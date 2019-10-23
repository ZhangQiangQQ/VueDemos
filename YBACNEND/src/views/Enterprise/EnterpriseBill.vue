<template>
  <div class="enterprise-bill">
    <board class="board" title="账户余额">
    </board>
    <board class="board" title="消费记录">
    </board>
    <board class="board" title="充值明细">
    </board>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Board from 'components/board.vue';

@Component({
  components: {
    Board,
  },
})
export default class EnterpriseBill extends Vue {
  mounted() {
  }
}
</script>

<style lang="stylus" scoped>
  .enterprise-bill
    display flex
    margin-top 30px
    flex-direction column
    .board
      width 100%
      padding-bottom 30px
      .filters
        margin 20px 0
        .form
          display flex
          justify-content space-between
      .pagination
        margin-top 15px
        text-align right

</style>
