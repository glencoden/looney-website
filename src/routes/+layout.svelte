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

    <img class="city" src="city.svg" alt="city">

    <h2 class="japanese">
        <span>ラ</span>
        <span>イ</span>
        <span>ブ</span>
        <span>❤</span>
        <span>カ</span>
        <span>ラ</span>
        <span>オ</span>
        <span>ケ</span>
        <span>!</span>
    </h2>

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
        display: none;
    }

    .city {
        position: fixed;
        left: var(--screen-side);
        bottom: var(--nav-height);
        right: auto;
        top: auto;
        height: 60vmin;
        filter: var(--bg-item-filter);
        opacity: 0.8;
    }

    @media only screen and (min-width: 600px) {
        .japanese {
            display: flex;
            position: fixed;
            right: var(--screen-side);
            bottom: 0;
            font-family: 'Noto Sans JP', sans-serif;
            font-weight: 900;
            font-size: 172px;
            margin: 0;
            color: var(--white);
            filter: var(--bg-item-filter);
            opacity: 0.8;
        }

        .city {
            left: auto;
            bottom: auto;
            right: var(--screen-side);
            top: var(--nav-height);
            height: 60vmin;
        }
    }
</style>