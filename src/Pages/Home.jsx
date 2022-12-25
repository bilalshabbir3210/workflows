import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NavbarMenu from "./NavbarMenu";
const Home = () => {
  const todos = useSelector((state) => state.todos);
  // const [placeholder, setPlaceholder] = useState([]);

  // const getData = async =>{
  //  let data = await axios.get('https://jsonplaceholder.typicode.com/todos');
  // }
  useEffect(() => {
    axios.get(`https://dummyjson.com/products`).then((response) => {
      console.log(response.data);
    });
  }, []);


  return (
    <>
      <NavbarMenu />
      <h1>Todo List.</h1>
      {
        console.log(todos)
        // placeholder?.products?.map((product) => {
        //   return <li>{product.title}</li>;

        // })
        // todos.map(todo =>{
        //   return (<li>{todo.title}</li>);
        // })
      }
    </>
  );
};

export default Home;
