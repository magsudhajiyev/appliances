import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'

const serviceRequestSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().regex(/^\+?[\d\s\-\(\)]+$/, 'Invalid phone number format'),
  email: z.string().email('Invalid email address'),
  address: z.string().min(5, 'Address must be at least 5 characters'),
  appliance: z.string().min(1, 'Appliance type is required'),
  brand: z.string().optional(),
  model: z.string().optional(),
  issue: z.string().min(10, 'Issue description must be at least 10 characters'),
  urgency: z.enum(['same_day', 'next_day', 'within_week']),
  preferredContact: z.enum(['phone', 'email', 'either'])
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request data
    const validatedData = serviceRequestSchema.parse(body)

    // Create the service request in the database
    const serviceRequest = await prisma.serviceRequest.create({
      data: {
        name: validatedData.name,
        phone: validatedData.phone,
        email: validatedData.email,
        address: validatedData.address,
        appliance: validatedData.appliance,
        brand: validatedData.brand || '',
        model: validatedData.model || '',
        issue: validatedData.issue,
        urgency: validatedData.urgency,
        preferredContact: validatedData.preferredContact,
        status: 'pending'
      }
    })

    // Here you would typically send notification emails
    // to both the customer and the business
    // For example:
    // await sendCustomerConfirmationEmail(serviceRequest)
    // await sendBusinessNotificationEmail(serviceRequest)

    return NextResponse.json(
      { 
        message: 'Service request submitted successfully',
        id: serviceRequest.id 
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Service request error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          error: 'Validation failed',
          details: error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Internal server error. Please try again.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Service request API endpoint' },
    { status: 200 }
  )
}