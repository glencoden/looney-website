<script>
    import usePost from '../../utils/usePost'
    import InputText from '../../components/InputText.svelte'
    import Button from '../../components/Button.svelte'

    let name = 'name'
    let email = 'email'
    let subject = 'subject'
    let message = 'message'

    const { error, isLoading, post } = usePost('')

    const onSubmit = () => {
        post({
            name,
            email,
            subject,
            message,
        })
    }
</script>

<h2>CONTACT</h2>

{#if $isLoading}

    <p>Loading...</p>

{:else if $error !== null}

    <pre>{JSON.stringify(error, null, 4)}</pre>

{:else}

    <InputText bind:value={name} />
    <InputText bind:value={email} />
    <InputText bind:value={subject} />
    <InputText bind:value={message} />

    <Button label="submit" onClick={onSubmit} />

{/if}