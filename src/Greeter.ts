export class Greeter {
  greet(to: string): void {
    console.log(`Hello ${to}`)
  }
}

export interface SSSWindow extends Window {
  SSS: {
    activeName: string
    activeAddress: string
    activePublicKey: string
    activeNetworkType: number
    getActiveAccountToken: (
      verifierPublicKey: string,
      customPayload?: Object,
      encriptedPayload?: string
    ) => Promise<string>
    setTransaction: (transaction: any) => void
    requestSign: () => Promise<any>
  }
  isAllowedSSS: () => boolean
}

declare const window: SSSWindow

export const getActiveAccountToken = (
  verifierPublicKey: string,
  customPayload?: Object,
  encriptedPayload?: string
): Promise<string> => {
  return window.SSS.getActiveAccountToken(
    verifierPublicKey,
    customPayload,
    encriptedPayload
  )
}

export const getActiveAddress = () => window.SSS.activeAddress
