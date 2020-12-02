import React from 'react';
import classes from "./Burger.module.css"
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient"

const burger = props => {
  //Transform an object of key value pairs (ingredients) into an array of ingredients
  //where the value of that object decide how many ingredients need, keys are for 
  //which type of ingredient need.

  /*
    props.ingredients: {
        salad: 1,
        bacon: 1,
        cheese: 2,
        meat: 2
      }
  */

  let transformedIngredients = 
    Object.keys(props.ingredients)
    //transformedIngredients = ["salad", "bacon", "cheese", "meat"]
      .map(ingKey => { return [...Array(props.ingredients[ingKey])]
                             //...Array(3) -> array with 3 empty spaces.

        //Transform each string value from transformedIngredients into an ARRAY 
        // with as many elements as we have ingredients for a given ingredient
        //We don't care about which elements, only the length:
        /*
          transformedIngredients =
              [
                [undefined]
                [undefined]
                [undefined, undefined]
                [undefined, undefined]
              ]
        */
        .map((_, index) => {return <BurgerIngredient key={ingKey + index} type={ingKey}/>
                        //<BurgerIngredient key={salad0} type={salad} />
                        //<BurgerIngredient key={bacon0} type={bacon} />
                        //<BurgerIngredient key={cheese0} type={cheese} />
                        //<BurgerIngredient key={cheese1} type={cheese} />
                        //<BurgerIngredient key={meat0} type={meat} />
                        //<BurgerIngredient key={meat1} type={meat} />
      });
    })
    
    .reduce((prev, next) => {
      return prev.concat(next)
    }, []);

    if(transformedIngredients.length ===0){
      transformedIngredients = <p>Please start adding ingredients</p>
    }
    
  return(
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"/>
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom"/>
    </div>
  );
  }

export default burger;