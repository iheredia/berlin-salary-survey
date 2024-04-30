# Berlin salary survey

[See it live in Handpicked Berlin!](https://handpickedberlin.com/berlin-salary-trends-2024-dashboard/)

## Setup

Install dependencies with `npm install` before continuing

### Data

The data files need to be placed in the `data/etl` folder. The project expects 2 files named `2023.csv` and `2024.csv`. There are example files in the same folder.

After placing the data files, run the ETL command to convert them to json files and extract some common values

```
npm run etl
```

### Nextjs app

Once the data files are processed, simply run `npm run dev` and visit [localhost:3000](http://localhost:3000)
