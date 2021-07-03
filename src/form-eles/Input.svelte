<div class="wrap">
    {#if in_focus}
        <span class="title">{name}</span>
    {/if}

    <input on:focus={() => in_focus = true}
           on:blur={() => in_focus = false}
           placeholder="{in_focus ? '' : name}"
           {type}
    />
</div>

<script lang="ts">
    export let name: string;
    export let type: string;

    let in_focus = false;
</script>

<style>
    .wrap {
        margin: 0.8rem auto;
        position: relative;
    }

    .wrap .title {
        position: absolute;
        top: -0.75rem;
        left: 10%;
        line-height: 1.5rem;
        padding: 0 1rem;
        background-size: 1px 1px;
        background: #fff;

        color: #999999;
        font-weight: bold;
    }

    input {
        outline: 0;

        border-width: 0.15rem;
        border-style: solid;
        border-radius: 0.5rem;
        border-color: #666666;
    }

    input:focus, input:hover {

        border-style: outset;
        border-color: #ff3e00;
        border-radius: 0.3rem;
        border-width: 0.15rem;
    }
</style>