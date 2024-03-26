
interface GetBalanceResult {
  confirmed: number
  unconfirmed: number
  total: number
}

interface SignPsbtOption {
  autoFinalized: boolean,
  toSignInputs: {
    index: number,
    address?: string,
    publicKey?: string,
    sighashTypes?: number[],
    disableTweakSigner?: boolean,
  }[],
}

export default class Bitcoin {
  public async connect(): Promise<{
    address: string,
    publicKey: string,
  }> {
    console.log("connect is called")
    return {
      address: "address",
      publicKey: "fradfa",
    }
  }

  public async getAccounts(): Promise<string[]> {
    console.log("getAccounts is called")
    return []
  }

  public async getNetwork(): Promise<string> {
    console.log("getNetwork is called")
    return ""
  }


  public async getBalance(): Promise<GetBalanceResult> {
    console.log("getBalance is called")
    return {
      confirmed: 0,
      unconfirmed: 0,
      total: 0,
    }
  }

  public async signMessage(
    signStr: string,
    type: string = "ecdsa",
  ): Promise<string> {
    console.log("signMessage is called")
    return ""
  }

  public async signPsbt(
    psbtHex: string,
    options: SignPsbtOption,
  ): Promise<string> {
    console.log("signPsbt is called")
    return ""
  }

  public async signPsbts(
    psbtHexs: string[],
    options: SignPsbtOption[],
  ): Promise<string> {
    console.log("signPsbts is called")
    return ""
  }
}
