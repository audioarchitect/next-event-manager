import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req
  const { eventId } = req.query

  switch (method) {
    case 'GET':
      try {
        const event = await prisma.event.findUnique({
          where: {
            id: parseInt(eventId, 10),
          },
        })
        res.status(200).json(event)
      } catch (e) {
        console.error('Request error', e)
        res.status(500).json({ error: 'Error fetching events' })
      }
      break
    
    case 'PUT':
      // We don't want the owner JSON in the PUT request
      delete body.owner

      try {
        const event = await prisma.event.update({
          where: {
            id: parseInt(eventId), 
          },
          data: body,
        })
        res.status(200).json(event)
      } catch (e) {
        console.error('Request error', e)
        res.status(500).json({ error: 'Error creating event' })
      }
      break

    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
      break
  }
}