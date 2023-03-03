<script>
    import '../app.css'
    import Navigation from '../components/Navigation.svelte'
</script>

<div class="viewport">
    <Navigation />

    <h1 class="japanese">ライブカラオケ</h1>

    <div class="main-content">
        <div class="vertical-spacer"></div>

        <slot></slot>

        <div class="vertical-spacer"></div>
    </div>
</div>

<style>
    .viewport {
        display: flex;
        justify-content: center;
        width: 100vw;
    }

    .main-content {
        position: relative;
        width: var(--main-content-width);
        overflow: hidden;
    }

    .vertical-spacer {
        height: var(--nav-height);
    }

    .japanese {
        position: fixed;
        right: 0;
        bottom: 0;
        font-family: 'Noto Sans JP', sans-serif;
        font-weight: 900;
        font-size: 172px;
        color: var(--white);
    }
</style>