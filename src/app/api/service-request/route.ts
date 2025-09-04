import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
// import { prisma } from '@/lib/prisma' // Commented out for demo - no database configured

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

    // For demo purposes, we'll just log the data instead of saving to database
    // In production, you would save to database here
    console.log('Service request received:', validatedData)
    
    // Simulate a database record with an ID
    const serviceRequest = {
      id: Math.random().toString(36).substring(2, 15),
      ...validatedData,
      status: 'pending'
    }

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
          details: error.issues.map(err => ({
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