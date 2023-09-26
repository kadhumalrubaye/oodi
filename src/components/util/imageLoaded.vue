<!-- <template >
    <div>
        <img v-if="loaded" :src="imageUrl" alt="Image" @load="onImageLoad" />
        <div v-else class="loading-indicator">Loading... {{ imageUrl }}</div>
    </div>
</template>
  
<script lang="ts">
export default {
    props: {
        imgUrl: String,
    },
    data() {
        return {
            loaded: false,
            imageUrl: this.$props.imgUrl
        };
    },
    methods: {
        onImageLoad() {
            this.loaded = true;
        }
    }
};
</script>
  
<style scoped>
.loading-indicator {
    font-size: 24px;
    text-align: center;
}
</style>
   -->