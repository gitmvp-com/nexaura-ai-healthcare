export interface User {
  id: string;
  clerkId: string;
  email: string;
  firstName: string;
  lastName: string;
  image?: string;
  age?: number;
  height?: number;
  weight?: number;
  gender?: string;
  bloodGroup?: string;
  medicalIssues?: string;
  stripeCustomerId?: string;
  stripeInvoiceId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Symptom {
  id: string;
  userId: string;
  name: string;
  intensity: number;
  frequency: string;
  loggedAt: Date;
}

export interface Medication {
  id: string;
  userId: string;
  name: string;
  dosage: string;
  purpose?: string;
  frequency: string;
  adherence: string;
  startDate?: Date;
}

export interface MentalWellness {
  id: string;
  userId: string;
  mood: string;
  happiness: number;
  sleep: string;
  stress: string;
  anxiety?: string;
}

export interface Message {
  id: string;
  role: "user" | "model";
  userId: string;
  content: string;
  createdAt: Date;
}
