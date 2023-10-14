import { setAccount } from 'actions/account/setAccount'
import { create } from 'zustand'

export const useAccount = create((set, get) => ({
  // STATE
  account: {},

  // ACTIONS
  setAccount: setAccount(set, get),
}))
