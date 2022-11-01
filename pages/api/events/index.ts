import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req

  switch (method) {
    case 'GET':
      try {
        const events = await prisma.event.findMany({
          include: {
            owner: true,
          },
        })
        res.status(200).json(events)
      } catch (e) {
        console.error('Request error', e)
        res.status(500).json({ error: 'Error fetching events' })
      }
      break
    
    case 'POST':
      try {
        const event = await prisma.event.create({
          data: body,
        })
        res.status(200).json(event)
      } catch (e) {
        console.error('Request error', e)
        res.status(500).json({ error: 'Error creating event' })
      }
      break

    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
      break
  }
}