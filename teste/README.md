# D3 Challenge - CovidEvolution 🦠
## 👔 Author Infos 
- Name: João Vinicius Vitral
- Email: joaoviniciusvitral@hotmail.com
- [GitHub](https://github.com/JxVtrl)
- [LinkedIn](https://www.linkedin.com/in/jo%C3%A3o-vinicius-vitral-a9a8b5a6/)

----------
## 📝 Project Infos 
- Project Name
    * CovidEvolution
- Project Description
    * This project is a simple visualization of the evolution of the COVID-19 pandemic.
- Project Language
    * Node.js

----------
## 🚧 Project Structure
1. Input Number of Days
2. Make input errors 
    - If the number of days is less than 1, the output will be:
    - If the number of days is greater than data length, the output will be:
3. Predict the evolution of the pandemic
4. Output Format (4 Days):
    ```
    1 -> 456
    2 -> 765
    3 -> 40
    4 -> 964
    ```
----------
## ⚠️ Prerequisites
1. You will need [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) to run the project.

2. You will need [express](https://expressjs.com/) Module to render the project.

----------
## 📚 Instructions 
### Docker
1. Install Docker
    - [Docker](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-18-04)

2. Build the containers
    ```
    docker build -t jxvtrl/d3challenge .
    ```
3. Run the project
    ```
    docker-compose up
    ```
### Local Host
1. Cloning this repository
    ```	
    git clone https://github.com/JxVtrl/D3-Challenge-CovidEvolution.git
    ```
2. Go into the repository
    ```
    cd D3-Challenge-CovidEvolution
    ```
3. Install dependencies
    ```
    npm install express
    ```
4. Run the project
    ```
    node run.js
    ```
5. In the browser, type:
    ```
    http://localhost:3000
    ```
----------
## 🚀 Roadmap
1. Getting information on Github covid-19-data repository
    - [Repo](https://github.com/owid/covid-19-data)
    - [Json](https://covid.ourworldindata.org/data/owid-covid-data.json)
    - Chose Method to get Data: XML Request
        * [Method](https://www.w3schools.com/xml/ajax_intro.asp)
    - Variables and Classes:
        * OWID_WRL: Worldwide Data
        * OWID_WRL.data.[day].new_cases: New cases in the day

2. Make the function
    - Chose Method to Predict the Data: [Linear Regression](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html)

    - Clicking the "Gerar" button
        * Checks for input errors
        * Calls getData function to get the data and calls predict function to predict the evolution
        * We're using only 7 days to predict the evolution because the pandemic evolution isn't linear

3. Create the web Design
    - Responsive Design
        * Mobile and Web Visualization
        
    - Styling
        * Getting pattern from the challenge
        * ~~Using Bootstrap~~
----------
 ## 💥 Tests
* Test 1: User input number 4
    ```
    613 -> 330987
    614 -> 488011
    615 -> 447089
    616 -> 472876
    617 -> 485039
    618 -> 544435
    619 -> 340793 --> last Week data

    620 -> 469921
    621 -> 476357
    622 -> 482793
    623 -> 489230 --> Predicted data
    ```
* Test 2: User input number 10
    ```
    613 -> 330987
    614 -> 488011
    615 -> 447089
    616 -> 472876
    617 -> 485039
    618 -> 544435
    619 -> 340793 --> last Week data

    620 -> 469921
    621 -> 476357
    622 -> 482793
    623 -> 489230
    624 -> 495666
    625 -> 502102
    626 -> 508539
    627 -> 514975
    628 -> 521411
    629 -> 527847 --> Predicted data
    ```
* Test 3: User input number 0
    ```
    Please enter a number greater than 0
    ```
* Test 4: User input number -1
    ```
    Please enter a number greater than 0
    ```
----------
## 🏠 Architecture Purpose
1. Why Architecture?
    - It's a good practice to have a good architecture.
    - Responsable to plan and organize the project.
2. Architecture Model
    - Service-Oriented Architecture ([SOA](https://en.wikipedia.org/wiki/Service-oriented_architecture))
        * Software as a Service ([SaaS](https://en.wikipedia.org/wiki/Software_as_a_service))
        * Reutilization of code