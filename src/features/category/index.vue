<script>
import {mapState,mapActions, mapGetters} from 'vuex'

export default {
    mounted(){
        this.setList()
    },
    methods:{
        ...mapActions('category',['setList'])
    },
    computed:{
        ...mapState('category',['list']),
        ...mapGetters('category',['leanList'])
    }
}
</script>


<template>
    <div>
        <h3>Categorias</h3>
    </div>
</template>
