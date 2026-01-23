export default async function handler(req, res) {
  try {
    const githubUrl = 'https://raw.githubusercontent.com/ronnieronald/Preguntas/main/Preguntas.json'

    // fetch nativo
    const response = await fetch(githubUrl, { cache: 'no-store' })
    if (!response.ok) throw new Error('No se pudo obtener el JSON de GitHub')

    const preguntas = await response.json()
    res.status(200).json(preguntas)
  } catch (err) {
    console.error(err) // ayuda a depurar en Vercel logs
    res.status(500).json({ error: err.message })
  }
}