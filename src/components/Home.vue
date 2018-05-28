<template>
    <div class="card mt-3">
        <div class="card-block p-4">
            <h1>Trade or View your Portfolio</h1>
            <p>You may save and load your data</p>
            <p>Click on End Day to begin a new day!</p>
            <hr>
            <h2>Your funds: ${{ this.$store.state.funds.toLocaleString() }}</h2>
        </div>
    </div>
</template>
<script>
export default {
  
}
</script>
<style lang="sass" scoped>

</style>
