
# Resource Insights

This Project is aimed at providing insights on the data based on various countries and their import and export likelihood and intensities.

## Installation

Clone the Project

```bash
git clone https://github.com/beastkp/Blackcoffer.git
```
Install libraries using npm in the outer folder.

```bash
npm install
```
Navigate to the client folder and do the same.

```bash
cd client
npm install
```

Start the server and the client from their respective folders.

```bash
npm start 
```



## API Reference

#### Inserting items from json data file "data.json" to database.

```http
  GET /api/v1/blackcoffer/insert
```


#### For Viewing Charts on localhost

```http
  GET /api/v1/blackcoffer/dashboard/analytics 
```



## Appendix

ChartJS was used for Visualization purposes. You can also change the parameters that leads to the selection of fields for the Database in the DataRetreival.js file. Other libraries and dependencies 
which are used in the project are :

```bash
├── @testing-library/jest-dom@5.17.0
├── @testing-library/react@13.4.0
├── @testing-library/user-event@13.5.0
├── axios@1.5.1
├── chart.js@4.4.0
├── react-chartjs-2@5.2.0
├── react-dom@18.2.0
├── react-icons@4.11.0
├── react-router-dom@6.16.0
├── react-scripts@5.0.1
├── react@18.2.0
├── tailwindcss@3.3.3
└── web-vitals@2.1.4
├── cors@2.8.5
├── dotenv@16.3.1
├── express@4.18.2
├── mongodb@6.1.0
├── mongoose@7.5.1
└── nodemon@3.0.1
```


## Authors

- [@KrishPanchal](https://github.com/beastkp)




