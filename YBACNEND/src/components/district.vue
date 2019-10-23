<template>
  <el-cascader
    clearable
    :options="districts"
    v-model="selectedDistrict"
    :placeholder="placeholder">
  </el-cascader>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import { mapState } from 'vuex';
import { getAllDistricts } from '@/apis/constants';
import { cascaderFormatter } from '@/utils/transformer';
import { RootState } from '@/store/root-states';

@Component({
  props: {
    placeholder: {
      type: String,
      default: '请选择',
    },
    value: {
      type: Array,
      default: (): any[] => [],
    },
  },
  computed: mapState({
    districts(state: RootState) {
      return cascaderFormatter(state.constants.districts);
    },
  }),
})
export default class District extends Vue {
  selectedDistrict: string = '';

  allDistricts: any[] = [];

  @Watch('selectedDistrict', { immediate: true, deep: true })
  watchSelectedDistrict(val: string, oldVal: string) {
    this.$emit('input', this.selectedDistrict);
  }

  @Watch('value', { immediate: true, deep: true })
  watchValue(val: string, oldVal: string) {
    this.selectedDistrict = val;
  }
}
</script>
