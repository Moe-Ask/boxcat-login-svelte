<div>
    <Input name="email" type="email"/>
    <Input name="password" type="password"/>
</div>

<script lang="ts">
    import Input from "./form-eles/Input.svelte"
</script>

<style>
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        border: 1px outset;
        border-radius: 0.5rem;

        text-align: center;
        margin: 0 auto;
        padding: 1rem;
    }

    @media all and (orientation: landscape) {
        div {
            width: 30rem;
        }
    }

    @media all and (orientation: portrait) {
        div {
            width: 15rem;
        }
    }
</style>