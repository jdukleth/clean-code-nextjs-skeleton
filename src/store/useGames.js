import { addGame } from 'actions/games/addGame'
import { getGames } from 'actions/games/getGames'
import { removeGame } from 'actions/games/removeGame'
import { create } from 'zustand'

export const useGames = create((set, get) => ({
  /* STATE: only manipulated through actions */
  games: null,
  activeGame: null,

  /* ACTIONS: no implentation here, only passes set/get to `action` files */
  getGames: getGames(set),
  addGame: addGame(set),
  removeGame: removeGame(set),
}))
