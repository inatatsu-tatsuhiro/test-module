import { PublicAccount, SignedTransaction, Transaction } from 'symbol-sdk'
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
    setTransaction: (transaction: Transaction) => void
    requestSign: () => Promise<SignedTransaction>
  }
  isAllowedSSS: () => boolean
}

export declare const window: SSSWindow

export const getActiveAccountToken = (
  verifierPublicKey: string | PublicAccount,
  customPayload?: Object,
  encriptedPayload?: string
): Promise<string> => {
  if (typeof verifierPublicKey === 'string') {
    return window.SSS.getActiveAccountToken(
      verifierPublicKey,
      customPayload,
      encriptedPayload
    )
  } else {
    const key = verifierPublicKey.publicKey
    if (
      verifierPublicKey.address.pretty().charAt(0) !==
      window.SSS.activeAddress.charAt(0)
    ) {
      return new Promise((_, reject) => {
        reject('invalid network type')
      })
    }
    return window.SSS.getActiveAccountToken(
      key,
      customPayload,
      encriptedPayload
    )
  }
}

export const getActiveAddress = () => window.SSS.activeAddress
