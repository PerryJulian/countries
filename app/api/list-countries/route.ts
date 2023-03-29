import { NextResponse } from 'next/server'

export async function GET() {
  const countries = await fetch('https://restcountries.com/v3.1/all', {
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const data = await countries.json()

  data.sort((a: any, b: any) => {
    return a.name.common.localeCompare(b.name.common)
  })

  // const temp = { countries: data }
  return NextResponse.json({ countries: data })
}
