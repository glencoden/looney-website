<script>
    import { base } from '$app/paths';
    import { navigating } from '$app/stores';
    // import { goto } from '$app/navigation';
    import { onMount } from 'svelte';
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
    <a href='{base}/'>
        <img
            class="logo-shadow"
            src="{base}/logo-black.png"
            alt="black"
        >
        <img
            class="logo-image"
            src="{base}/logo.png"
            alt="main"
        >
        <img
            class="logo-glow"
            class:logo-glow-active={currentPathname === '/'}
            src="{base}/logo-white.png"
            alt="glow"
        >
    </a>
</div>

<div class="navigation">
    <a href='{base}/events'>
        <Button
            isActive={currentPathname === '/events'}
            label='Events'
        />
    </a>
    <a href='{base}/songs'>
        <Button
            isActive={currentPathname === '/songs'}
            label='Songs'
        />
    </a>
    <a href='{base}/references'>
        <Button
            isActive={currentPathname === '/references'}
            label='References'
        />
    </a>
    <a href='{base}/contact'>
        <Button
            isActive={currentPathname === '/contact'}
            label='Contact'
        />
    </a>
</div>

<style>
    @keyframes flicker {
        0%, 18%, 22%, 25%, 53%, 57%, 100% {
            opacity: 0.5;
        }
        20%, 24%, 55% {
            opacity: 0;
        }
    }

    .logo {
        z-index: var(--level-3);
        position: fixed;
        left: var(--logo-left);
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
        left: 51%;
        top: 51%;
        transform: translate(-50%, -50%);
        filter: blur(1px);
        opacity: 0.9;
    }

    .logo-glow {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        filter: blur(10px);
        opacity: 0;
    }

    .logo-glow:hover, .logo-glow:active, .logo-glow-active {
        animation: flicker 1.5s infinite alternate;
    }

    .logo img {
        width: var(--logo-width);
    }

    .navigation, .navigation-background {
        z-index: var(--level-3);
        position: fixed;
        left: var(--nav-left);
        top: var(--nav-top);
        bottom: var(--nav-bottom);
        transform: translateX(-50%);
        display: flex;
        justify-content: center;
        align-items: center;
        gap: var(--nav-gap);
        height: var(--nav-height);
    }

    .navigation-background {
        z-index: var(--level-2);
        width: 120vw;
        height: var(--nav-bg-height);
        background-color: var(--bg-color);
    }
</style>