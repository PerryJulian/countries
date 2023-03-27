import { NextResponse } from 'next/server'

export async function GET() {
  const countries = await fetch('https://restcountries.com/v3.1/all')
  const data = await countries.json()

  return NextResponse.json(data)
}
