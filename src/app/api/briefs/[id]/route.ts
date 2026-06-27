import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const brief = await prisma.brief.findUnique({ where: { id } })
    if (!brief) return NextResponse.json({ error: 'Not found' }, { status: 404 })
    return NextResponse.json(brief)
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}