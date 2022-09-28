<template>
    <div class="addItem">
        <input type="text" v-model="item.name"/>
        <font-awesome-icon
            icon="plus-square"
            @click="addItem()"
            :class="[item.name ? 'active' : 'inactive', 'plus']"
        >

        </font-awesome-icon>
    </div>
</template>

<script>

export default {
    name: "addItemForm.vue",
    data() {
        return {
            item: {
                name:""
            }
        }
    },
    methods: {
        addItem(){
            // this.$swal.fire('Iam title', 'Hello','success')
            // this.$swal.fire('Iam title', 'Hello','error')

            if (this.item.name == ""){
                return;
            }
            axios.post('api/item/store',{
                item: this.item
            })
            .then( response => {
                this.$swal.fire({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    icon:response.data.status ? 'success' : "error",
                    text:response.data.messege,
                    onOpen: (toast) => {
                        toast.addEventListener('mouseenter', this.$swal.stopTimer)
                        toast.addEventListener('mouseleave', this.$swal.resumeTimer)
                    }
                });
                if (response.status == 201){
                    this.item.name == "";
                }
            })
            .catch( error => {
                console.log(error);
            })
        }
    }
}
</script>

<style scoped>
.addItem {
    display: flex;
    justify-content: center;
    align-items: center;
}
input {
    background: #f7f7f7;
    border: 0px;
    outline: none;
    padding: 5px;
    margin-right: 10px;
    width:100%;
}
.plus {
    font-size: 20px;
}
.active {
    color: #00CE25;
}
.inactive {
    color: #999999;
}
</style>
