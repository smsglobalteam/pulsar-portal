// ID reference to determine whether to POST or PUT
export type IdOrUndefined = number | string | undefined
export type Form = Record<string, never>
// Contains pagination data
export interface GetSummary {
  page: number
  page_size: number
  size: number
  filteredCount: number
}

interface GetItem {
  id: number
  created_at: string
  updated_at: string
}

export interface Template extends GetItem {
  Account: string
  Name: string
}

export interface Tag extends GetItem {
  uuid: string
  Account: string
  Name: string
  Hex: string
}

interface FirewallPermissionException {
  label: string
  protocol: number
  destPortRange: { from: number; toInclusive: number }
  remoteAddresses: string[]
  displayPort: number
  parsedProtocol: string
}

interface FirewallPermission {
  defaultAction: string
  exceptions: FirewallPermissionException[]
}

export interface FirewallProfile {
  uid: string
  label: string
  customData: { description: string; AccountNumber: string }
  removed: boolean
  creationDate: string
  lastModificationDate: string
  inbound: FirewallPermission
  outbound: FirewallPermission
}

interface GetResponse {
  Summary: GetSummary
}

export interface GetTemplates extends GetResponse {
  Templates: Template[]
}

export interface GetTags extends GetResponse {
  Tags: Tag[]
}

export interface GetFirewallProfiles extends GetResponse {
  Profile: FirewallProfile[]
}
