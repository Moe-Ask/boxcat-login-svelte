<script lang="ts">
    import LoginBox from "./LoginBox.svelte";
    import titleMsg from "./TitleMsg.svelte";
    import TitleMsg from "./TitleMsg.svelte";

    export let name: string;
</script>

<main>
    <TitleMsg msg="{name}"/>
    <LoginBox/>
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>