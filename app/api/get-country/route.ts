import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const name = searchParams.get('name')
  const response = await fetch(`https://restcountries.com/v3.1/name/${name}`)
  const country = await response.json()

  return NextResponse.json({ country })
}
