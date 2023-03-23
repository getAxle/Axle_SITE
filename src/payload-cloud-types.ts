/* tslint:disable */
/**
 * This file was automatically generated by Payload CMS.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User
    teams: Team
    projects: Project
    deployments: Deployment
    plans: Plan
    templates: Template
    'atlas-projects': AtlasProject
    'atlas-orgs': AtlasOrg
    jobs: Job
    'teardown-errors': TeardownError
  }
  globals: {}
}
export interface User {
  id: string
  name?: string
  githubID?: string
  teams?: Array<{
    team?: string | Team
    roles?: Array<'owner' | 'admin' | 'user'>
    id?: string
  }>
  roles?: Array<'admin' | 'user'>
  githubAccessToken?: string
  githubAccessTokenExpiration?: number
  githubRefreshToken?: string
  githubRefreshTokenExpiration?: number
  email?: string
  resetPasswordToken?: string
  resetPasswordExpiration?: string
  _verified?: boolean
  _verificationToken?: string
  loginAttempts?: number
  lockUntil?: string
  createdAt: string
  updatedAt: string
  password?: string
}
export interface Team {
  id: string
  name?: string
  slug?: string
  billingEmail: string
  stripeCustomerID?: string
  skipSync?: boolean
  members?: Array<{
    user?: string | User
    roles?: Array<'owner' | 'admin' | 'user'>
    invitedOn?: string
    acceptedOn?: string
    id?: string
  }>
  createdAt: string
  updatedAt: string
}
export interface Project {
  id: string
  slug?: string
  status?: 'draft' | 'published'
  skipSync?: boolean
  name: string
  plan?: string | Plan
  team: string | Team
  template?: string | Template
  makePrivate?: boolean
  source?: 'github'
  repositoryName?: string
  repositoryURL?: string
  repositoryID?: string
  installID?: string
  deploymentBranch?: string
  outputDirectory?: string
  buildScript?: string
  installScript?: string
  runScript?: string
  rootDirectory?: string
  cloudflareDNSRecordID?: string
  digitalOceanAppID?: string
  atlasProjectID?: string
  atlasConnectionString?: string
  atlasDatabaseName?: string
  atlasDatabaseType?: 'cluster' | 'serverless'
  atlasDatabaseUser?: string
  atlasDatabasePassword?: string
  s3Policy?: 'public' | 'private'
  cognitoIdentityID?: string
  cognitoPassword?: string
  region?: 'us-east' | 'us-west' | 'eu-west'
  defaultDomain?: string
  domains?: Array<{
    domain: string
    cloudflareID?: string
    id?: string
  }>
  environmentVariables?: Array<{
    key?: string
    value?: string
    id?: string
  }>
  stripeSubscriptionID?: string
  stripeSubscriptionStatus?:
    | 'active'
    | 'canceled'
    | 'incomplete'
    | 'incomplete_expired'
    | 'past_due'
    | 'trialing'
    | 'unpaid'
    | 'paused'
  teamProjectName?: string
  createdAt: string
  updatedAt: string
}
export interface Plan {
  id: string
  name?: string
  slug?: string
  stripeProductID?: string
  priceJSON?: string
  order?: number
  createdAt: string
  updatedAt: string
}
export interface Template {
  id: string
  name?: string
  slug?: string
  description?: string
  repositoryURL?: string
  order?: number
  createdAt: string
  updatedAt: string
}
export interface Deployment {
  id: string
  name?: string
  project: string | Project
  deployedAt?: string
  deploymentURL?: string
  deploymentID?: string
  commitSha?: string
  commitMessage?: string
  logs?: Array<{
    timestamp?: string
    message?: string
    id?: string
  }>
  deploymentStatus?: 'pending' | 'inProgress' | 'success' | 'error'
  createdAt: string
  updatedAt: string
}
export interface AtlasProject {
  id: string
  atlasProjectID?: string
  projects?: string[] | Project[]
  projectCount?: number
  createdAt: string
  updatedAt: string
}
export interface AtlasOrg {
  id: string
  atlasOrgID?: string
  atlasProjects?: string[] | AtlasProject[]
  projectCount?: number
  createdAt: string
  updatedAt: string
}
export interface Job {
  id: string
  type: 'deployApp' | 'provisionDNS'
  processing?: boolean
  seenByWorker?: boolean
  deployApp?: {
    project: string | Project
  }
  provisionDNS?: {
    project: string | Project
  }
  hasError?: boolean
  error?:
    | {
        [k: string]: unknown
      }
    | unknown[]
    | string
    | number
    | boolean
    | null
  createdAt: string
  updatedAt: string
}
export interface TeardownError {
  id: string
  project?: {
    name: string
    teamName?: string
    teamID: string
  }
  errors?: Array<{
    service?: string
    error?: string
    id?: string
  }>
  createdAt: string
  updatedAt: string
}
