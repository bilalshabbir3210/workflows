let initialObj = {

  todos : [
    {'id' : 1 , 'task' : 'Create new action' ,'created_at':'22-04-11'},
   {'id' : 2 , 'task' : 'Create new reducer' ,'created_at':'22-04-09'},
   {'id' : 3 , 'task' : 'Create new dispatch' ,'created_at':'22-04-10'},
   {'id' : 4 , 'task' : 'Create new store' ,'created_at':'22-04-11'},
   {'id' : 5 , 'task' : 'Create new connector' ,'created_at':'22-04-12'},
  ],
  filter:{}
};
const todoReducer = (state = initialObj , action) => {

        return {...state.todos} ;
      
}


export default todoReducer;