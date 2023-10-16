import { setAccountInState } from 'actions/account/setAccountInState'
import { create } from 'zustand'

export const useAccount = create((set, get) => ({
  // STATE
  account: {},

  // ACTIONS
  setAccount: setAccountInState(set, get),
}))
