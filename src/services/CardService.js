import axios from "axios"

export default class CardService {
  static async getAll() {
    const response = await axios.get('http://localhost:4200/cards')
    return response.data
  }
}

