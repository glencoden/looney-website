<script>
    import usePost from '../../utils/usePost'
    import InputText from '../../components/InputText.svelte'
    import Button from '../../components/Button.svelte'

    let email = 'email'
    let name = 'name'
    let content = 'content'

    const { error, isLoading, post } = usePost('https://5o2bjifmql.execute-api.us-east-1.amazonaws.com/dev/email/send')

    const onSubmit = () => {
        post({
            name,
            email,
            content,
            page: 'looneys', // identify this website to serverless contact form
        })
    }
</script>

<h2>CONTACT</h2>

{#if $isLoading}

    <p>Loading...</p>

{:else if $error !== null}

    <pre>{JSON.stringify(error, null, 4)}</pre>

{:else}

    <div class="contact-form">
        <InputText bind:value={name} />
        <InputText bind:value={email} />
        <InputText bind:value={content} />

        <Button label="submit" onClick={onSubmit} />
    </div>

{/if}

<style>
    .contact-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: calc(var(--padding) * 1px);
    }
</style>