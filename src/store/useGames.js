import { addGame } from 'actions/games/addGame'
import { getGames } from 'actions/games/getGames'
import { removeGame } from 'actions/games/removeGame'
import { create } from 'zustand'

export const useGames = create((set, get) => ({
  // STATE
  games: null,
  activeGame: null,

  // ACTIONS
  getGames: getGames(set),
  addGame: addGame(set),
  removeGame: removeGame(set),
}))
