<script>
    import Button from './Button.svelte'
</script>

<div class="navigation">
    <a href='/events'>
        <Button label='Events' />
    </a>
    <a href='/songs'>
        <Button label='Songs' />
    </a>
    <a href='/references'>
        <Button label='References' />
    </a>
    <a href='/contact'>
        <Button label='Contact' />
    </a>
</div>

<div class="logo">
    <a href='/'>
        <img src="logo.png" alt="black">
    </a>
</div>

<style>
    .logo {
        z-index: var(--level-3);
        position: fixed;
        left: 0;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        /*width: var(--nav-height);*/
        /*height: var(--nav-height);*/
    }

    .logo img {
        width: 400px;
    }

    .navigation {
        z-index: var(--level-3);
        position: fixed;
        left: 50%;
        top: var(--nav-top);
        bottom: var(--nav-bottom);
        transform: translateX(-50%);
        display: flex;
        justify-content: center;
        align-items: center;
        gap: calc(2 * var(--padding) * 1px);
        width: 120vw;
        height: var(--nav-height);
        background-color: var(--bg-color);
    }
</style>