import React from 'react'



function Form(props){

    const {
        values,
        onInputChange,
        onSubmit,
        onCheckboxChange,
        errors,
    } = props

    return(

        <form onSubmit={onSubmit}>
            <div>
                <h3>Make Your Pizza</h3>
                <button>Make</button>
            </div>
            <div>
                <div>{errors.name}</div>
                <label>Name:&nbsp;
                    <input
                        type='text'
                        name='name'
                        value={values.name}
                        onChange={onInputChange}
                        maxLength='45'
                    />
                </label>
                <label>Pizza Size:&nbsp;
                    <select
                        name='size'
                        value={values.size}
                        onChange={onInputChange}
                    >
                        <option value=''>- Select an option -</option>
                        <option value='S'>Small</option>
                        <option value='M'>Medium</option>
                        <option value='L'>Large</option>
                        <option value='XL'>Extra-Large</option> 
                    </select>
                </label>
            </div>
            <div>
                <h4>Toppings:</h4>
                <label>Pepperoni
                    <input
                        name='pepperoni'
                        type='checkbox'
                        onChange={onCheckboxChange}
                        checked={values.toppings.pepperoni === true}
                    />
                </label>
                <label>Sausage
                    <input
                        name='sausage'
                        type='checkbox'
                        onChange={onCheckboxChange}
                        checked={values.toppings.sausage === true}
                    />
                </label>
                <label>Mushroom
                    <input
                        name='mushroom'
                        type='checkbox'
                        onChange={onCheckboxChange}
                        checked={values.toppings.mushroom === true}
                    />
                </label>
                <label>Bacon
                    <input
                        name='bacon'
                        type='checkbox'
                        onChange={onCheckboxChange}
                        checked={values.toppings.bacon === true}
                    />
                </label>
                <label>Special Instructions:&nbsp;
                    <input
                        type='text'
                        name='instructions'
                        value={values.instructions}
                        onChange={onInputChange}
                        maxLength='100'
                    />
                </label>
            </div>
        </form>

    )

}


export default Form