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
