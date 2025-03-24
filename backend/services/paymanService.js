const axios = require('axios');

class PaymanService {
  constructor() {
    this.apiSecret = process.env.PAYMAN_API_SECRET;
    this.baseUrl = process.env.PAYMAN_API_BASE_URL;
    this.axiosInstance = axios.create({
      baseURL: this.baseUrl,
      headers: {
        'Authorization': `Bearer ${this.apiSecret}`,
        'Content-Type': 'application/json'
      }
    });
  }

  async listTransactions() {
    try {
      const response = await this.axiosInstance.get('/transactions');
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch transactions: ${error.message}`);
    }
  }
}

module.exports = new PaymanService();
