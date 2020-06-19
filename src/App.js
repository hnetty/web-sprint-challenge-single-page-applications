import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import axios from 'axios'
import * as Yup from 'yup'

import Form from './Form'
import formSchema from './formSchema'
import Home from './Home'

const initialPizzaList = [
  {
    id: uuid(),
    name: 'Harper',
    size: 'L',
    toppings: {
      pepperoni: true,
      sausage: true,
      mushroom: false,
      bacon: true,
    },
    instructions: 'Have a nice day',
  },
]

const initialFormValues ={
  name: '',
  size: '',
  toppings: {
    pepperoni: false,
    sausage: false,
    mushroom: false,
    bacon: false,
  },
  instructions: '',
}

const initialFormErrors = {
  name: '',
  size: '',
  toppings: '',
  instructions: '',
}


const App = () => {

  const [ pizzas, setPizzas ] = useState(initialPizzaList)
  const [ formValues, setFormValues ] = useState(initialFormValues)
  const [ formErrors, setFormErrors ] = useState(initialFormErrors)

  const getPizzas = () => {
    axios.get('https://reqres.in/api/user')
      .then(response => {
        console.log(response.data)
        setPizzas(response.data)
      })
      .catch(err => {
        debugger
      })
  }

  const postNewPizza = newPizza => {

    axios.post('https://reqres.in/api/pizza', newPizza)
      .then(res => {
        setPizzas([...pizzas, res.data])
      })
      .catch(err => {
        debugger
      })
      .finally(() =>{
        setFormValues(initialFormValues)
      })

  }




  const onInputChange = evt => {
    
    const { name, value } = evt.target

    Yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: ""
        })
      })
      .catch( err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })



    setFormValues({

      ...formValues,
      [name]:value,
    })

    setFormErrors({
      ...formValues,
      [name]: value
    })

  }

  const onSubmit = evt => {
  
    evt.preventDefault()

    const newPizza = { ...formValues, id: uuid() }

    setPizzas(pizzas => [newPizza, pizzas])

    postNewPizza(newPizza);

  }

  const onCheckboxChange = evt => {

    const { name, checked } = evt.target

    setFormValues({
      ...formValues,
      toppings:{
        ...formValues.toppings,
        [name]: checked,
      }
    })

  }


  useEffect(() =>{
    getPizzas()
  }, [])


  

  return (
    <div>
      <nav>
        <h1>Lambda Eats</h1>
        <Link to='/'>Home</Link>
        <br></br>
        <Link to='/form'>Form</Link>
      </nav>

      <Switch>
        <Route path="/form">
          <Form 
          values={formValues}
          onInputChange={onInputChange}
          onSubmit={onSubmit}
          onCheckboxChange={onCheckboxChange}
          errors={formErrors}
          />
        </Route>

        <Route path="/">
         <Home />
        </Route>

      </Switch>

    </div>
  );
};
export default App;
