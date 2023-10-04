import { AuthConfig } from 'angular-oauth2-oidc'

// https://github.com/manfredsteyer/angular-oauth2-oidc
export const authCodeFlowConfig: AuthConfig = {
  issuer: 'https://auth.passcess.net/auth/realms/master',
  redirectUri: window.location.origin,
  clientId: 'pulsar-portal',
  responseType: 'code',
  scope: 'openid',
  showDebugInformation: true,
}
