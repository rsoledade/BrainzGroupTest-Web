export interface Student {
  id: string
  displayName: string
  mail: string
}

export interface StudentWithEvents extends Student {
  events?: Event[]
}

export interface Event {
  id: string
  subject: string
  start: {
    dateTime: string
    timeZone: string
  }
  end: {
    dateTime: string
    timeZone: string
  }
  location?: {
    displayName?: string
  }
  organizer?: {
    emailAddress?: {
      name?: string
      address?: string
    }
  }
  attendees?: Array<{
    emailAddress?: {
      name?: string
      address?: string
    }
    type?: string
  }>
}
