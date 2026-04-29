import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { password, content } = await request.json()

    if (password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Contraseña incorrecta' }, { status: 401 })
    }

    const token = process.env.GITHUB_TOKEN
    const owner = process.env.GITHUB_OWNER
    const repo  = process.env.GITHUB_REPO
    const path  = 'src/content/site.json'

    if (!token || !owner || !repo) {
      return NextResponse.json({ error: 'GitHub no configurado. Agrega GITHUB_TOKEN, GITHUB_OWNER y GITHUB_REPO en Vercel.' }, { status: 500 })
    }

    // Get current file SHA
    const getRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github+json',
      },
    })

    if (!getRes.ok) {
      return NextResponse.json({ error: 'No se pudo obtener el archivo de GitHub' }, { status: 500 })
    }

    const { sha } = await getRes.json()
    const encoded = Buffer.from(JSON.stringify(content, null, 2)).toString('base64')

    // Commit updated file
    const putRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: 'admin: update site content via CMS panel',
        content: encoded,
        sha,
      }),
    })

    if (!putRes.ok) {
      const err = await putRes.json()
      return NextResponse.json({ error: err.message || 'Error al guardar en GitHub' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}
