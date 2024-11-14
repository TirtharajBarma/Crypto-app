
# Crypto Tracker App

> **⚠️ Important Note:**  
> This project requires [Bun](https://bun.sh/) to be installed on your system. **Bun** is a high-speed JavaScript runtime and package manager, similar to Node.js, that enables faster performance and streamlined package management.  
> **Without Bun, the project cannot run.**  
> Please ensure you have Bun installed by following the installation guide below.


## 📥 Installation Guide

### Install Bun
To install Bun, open your terminal and run the following command:

```bash
curl -fsSL https://bun.sh/install | bash
```

After installation, verify it with:

```bash
bun --version
```

> For more information on Bun, refer to the [official Bun documentation](https://bun.sh/docs).

---

## 🛠 Project Setup

Once Bun is installed, you can clone this repository and start the application. Run these commands:

```bash
# Clone the repository
git clone https://github.com/TirtharajBarma/crypto-app.git

# Navigate to the project directory
cd crypto-app

# Install dependencies using Bun
bun install

# Start the development server
bun run start
```

This will start the app on the default port, usually `http://localhost:5173`.

---

## 📑 Project Features

The Crypto Tracker App provides a comprehensive platform for tracking cryptocurrency prices and market trends. Key features include:

- **Real-time Market Data**: Displays live prices and market information for popular cryptocurrencies.
- **Charts and Data Visualization**: Interactive charts built with Chart.js to visualize price changes over different timeframes.
- **Detailed Crypto Information**: Includes descriptions, historical data, and trends for each cryptocurrency.
- **Global Market Stats**: Aggregates statistics about the overall cryptocurrency market, including market cap, trading volume, and more.
- **User-friendly UI**: Designed with Ant Design for a clean and professional user experience.
- **Responsive Design**: Optimized for both desktop and mobile viewing

---

## 📈 How It Works

1. **Fetches Market Data**: On startup, the app connects to a cryptocurrency API to retrieve live market data.
2. **Processes and Displays Data**: Using Coin Gecho API, the app stores fetched data, which is then visualized through various UI components and charts.
3. **Interactive User Experience**: Users can view detailed information on each cryptocurrency and access market stats with smooth navigation and intuitive design.
4. **Real-time Updates**: Regularly fetches new data to ensure accurate, up-to-date information for users.

---

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or feature additions.

---

## 📄 License

This project is licensed under the MIT License.
