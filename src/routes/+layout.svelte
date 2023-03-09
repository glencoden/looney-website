<script>
    import '../app.css'
    import Navigation from '../components/Navigation.svelte'
</script>

<div class="viewport">
    <h1 class="hidden-headline">Live Rock Karaoke</h1>

    <video
            class="hidden-video-element"
            src='teaser-1v5.m4v'
    >
    </video>

    <img class="spotlight" src="city.svg" alt="spotlight">

    <h2 class="japanese">ライブ❤カラオケ!</h2>

    <Navigation />

    <div class="main-content">
        <div class="vertical-spacer"></div>

        <slot></slot>

        <div class="vertical-spacer"></div>
    </div>
</div>

<style>
    .hidden-headline {
        position: fixed;
        opacity: 0;
        user-select: none;
    }

    .hidden-video-element {
        position: fixed;
        opacity: 0;
        user-select: none;
        width: 100px;
    }

    .viewport {
        display: flex;
        justify-content: center;
        width: 100vw;
        overflow: hidden;
    }

    .main-content {
        position: relative;
        width: var(--main-content-width);
    }

    .vertical-spacer {
        height: calc(var(--nav-height) + calc(4 * var(--padding) * 1px));
    }

    .japanese {
        position: fixed;
        right: var(--screen-side);
        bottom: 0;
        font-family: 'Noto Sans JP', sans-serif;
        font-weight: 900;
        font-size: 172px;
        margin: 0;
        color: var(--white);
        filter: blur(5px);
        opacity: 0.8;
        white-space: nowrap;
    }

    .spotlight {
        position: fixed;
        right: var(--screen-side);
        top: var(--nav-height);
        height: 60vmin;
        filter: blur(5px);
        opacity: 0.8;
    }
</style>