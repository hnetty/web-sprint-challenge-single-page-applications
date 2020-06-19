import * as Yup from "yup";

const formSchema = Yup.object().shape({
  name: Yup
    .string()
    .min(2,"Must be 2 or more characters")
    .required("Must include name"),
  instructions: Yup
    .string()
    .min(3, "If no instructions, put 'none'")
    .required("Instructions are required"),
  toppings: Yup
    .string()
    .oneOf(['pepperoni', 'sausage', 'mushroom', 'bacon'], "Please select a topping"),
  size: Yup
    .string()
    .oneOf(["L", "XL", "S", "M"], "Please select a size"),
})

export default formSchema