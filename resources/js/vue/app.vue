<template>
    <div class="todoListContainer">
        <div class="heading">
            <h2 id="title">Todo List</h2>
            <add-item-form></add-item-form>
            <list-view/>
            <list-item></list-item>
        </div>
    </div>
</template>

<script>
import addItemForm from "./addItemForm"
import listView from "./listView"
import listItem from "./listItem";

export default {
    name: "app",
    components: {
        addItemForm,
        listView,
        listItem
    }

}
</script>

<style scoped>
.todoListContainer {
    width: 350px;
    margin: auto;
}
.heading {
    background: #e6e6e6;
    padding: 10px;
}
.title {
    text-align: center;
}
</style>
