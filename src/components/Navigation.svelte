<script>
    import { onMount } from 'svelte';
    // import { goto } from '$app/navigation';
    import { navigating } from '$app/stores';
    import Button from './Button.svelte'

    let currentPathname = ''

    $: if($navigating) {
        currentPathname = $navigating.to.route.id
    }

    onMount(() => {
        currentPathname = location.pathname

        // goto('/')

        // window.addEventListener('beforeunload', () => {
        //     //
        // })
    })
</script>

<div class="navigation-background"></div>

<div class="logo">
    <a href='/'>
        <img class="logo-shadow" src="logo-white.png" alt="black">
        <img class="logo-image" src="logo.png" alt="black">
    </a>
</div>

<div class="navigation">
    <a href='/events'>
        <Button
            isActive={currentPathname === '/events'}
            label='Events'
        />
    </a>
    <a href='/songs'>
        <Button
            isActive={currentPathname === '/songs'}
            label='Songs'
        />
    </a>
    <a href='/references'>
        <Button
            isActive={currentPathname === '/references'}
            label='References'
        />
    </a>
    <a href='/contact'>
        <Button
            isActive={currentPathname === '/contact'}
            label='Contact'
        />
    </a>
</div>

<style>
    .logo {
        z-index: var(--level-3);
        position: fixed;
        left: 0;
        top: calc(var(--padding) * 1px);
        display: flex;
        justify-content: center;
        align-items: center;
        transform: rotate(-10deg);
    }

    .logo-image {
        position: relative;
    }

    .logo-shadow {
        position: absolute;
        left: 49%;
        top: 51%;
        transform: translate(-50%, -50%);
        filter: blur(5px);
        opacity: 0.5;
    }

    .logo img {
        width: var(--logo-width);
    }

    .navigation, .navigation-background {
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
        height: var(--nav-height);
    }

    .navigation-background {
        width: 120vw;
        background-color: var(--bg-color);
    }
</style>