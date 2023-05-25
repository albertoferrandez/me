export async function getRepos() {
    try {
        const res = await fetch('https://api.github.com/users/albertoferrandez/repos', { next: { revalidate: 60 } })

        return await res.json()
    } catch (error) {
        throw new Error('Failed to fetch data')
    }
   
}

