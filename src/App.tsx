import React, { useState } from 'react';
import { GiMeal } from "react-icons/gi";
import { IconContext } from 'react-icons'

import api from './service/api'
import { Header, Button, Title, ContainerImage, MealCard, IngredientsCard, InstrutionsCard, CenterCard } from './style'


interface Meal {
  idMeal: number;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
}

function App() {

  const [meals, setMeals] = useState<Meal>()
  const [ingredients, setIngredients] = useState<string[]>([])

  async function handleRandomMeal() {
    const response = await api.get('');
    const responseMeal = response.data.meals[0];
    
    const meal = {
      idMeal: responseMeal.idMeal,
      strMeal: responseMeal.strMeal,
      strMealThumb: responseMeal.strMealThumb,
      strCategory: responseMeal.strCategory,
        strArea: responseMeal.strArea,
        strInstructions: responseMeal.strInstructions,
      };
      setMeals(meal)
      
      let ingredientsReceipt: string[] = [];
      for(let ing = 1; ing <= 20; ing++){
        if (responseMeal[`strIngredient${ing}`]) {
          ingredientsReceipt.push(`${responseMeal[`strIngredient${ing}`]}: ${responseMeal[`strMeasure${ing}`]}`)
        }
      }
      
      setIngredients(ingredientsReceipt)
      
      
    }
    
    const linkFlag = 'https://purecatamphetamine.github.io/country-flag-icons/3x2/' 
    var selectedFlag = ''
    
    const countryList = ['American','British','Canadian','Chinese','Croatian','Dutch','Egyptian','French','Greek','Indian','Irish','Italian']
    const flagList = ['US.svg','GB.svg','CA.svg','CN.svg','HR.svg','HR.svg','EG.svg','FR.svg','EL.svg','IN.svg','IE.svg','IT.svg']
    
    const countryIndex = countryList.findIndex(country => country === meals?.strArea)

    if(countryIndex < 0){ selectedFlag = 'AG.svg'}
    
    selectedFlag = flagList[countryIndex]
    
    // useEffect(() => {
      //   api.get('').then((response) => {
        //     setMeals(response.data.meals[0])
        //   })
        // }, [])
        
        return (
          <div className="App">
      <Header>
        <h1>Random <span>Meals</span></h1>
        <Button type='button' onClick={handleRandomMeal}>  
          Random search
        </Button>
      </Header>
      
      { meals && 
        <div key={meals?.idMeal}>
          <CenterCard>
            <MealCard>
              <Title>
                <h1>{meals?.strMeal}</h1>
                <span>
                  <IconContext.Provider value={{ size: '20', style: { marginRight: 2, color: '#fff' } }}>
                    <GiMeal />
                  </IconContext.Provider>
                  {meals?.strCategory}
                </span>
                <img src={linkFlag + selectedFlag} alt="" />
              </Title>
              <ContainerImage>
                <img src={meals?.strMealThumb} alt="" />
              </ContainerImage>
            </MealCard>
            <IngredientsCard>
              <h1>Ingredients</h1>
              {ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
            </IngredientsCard>
          </CenterCard>

          <InstrutionsCard>
            <h1>Instrutions</h1>
            <p>{meals?.strInstructions}</p>
          </InstrutionsCard>
        </div>
      }     
    </div>
  );
}

export default App;
