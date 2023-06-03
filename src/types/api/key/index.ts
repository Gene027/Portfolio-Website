import { ApiKey } from '@prisma/client'
import { ZodIssue } from 'zod'    //lib for schema validation

export interface CreateApiData {
  error: string | ZodIssue[] | null
  createdApiKey: ApiKey | null
}

export interface RevokeApiData {
  error: string | ZodIssue[] | null
  success: boolean
}
