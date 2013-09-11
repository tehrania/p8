$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());


  function bindEvents() {
    // Bind functions which add, remove, and complete todos to the appropriate
    // elements
    $('button.add').on('click', function(e){
     e.preventDefault();
     var todoName = $('input.todo').val()
     addTodo(todoName)
   });

    $('.todo_list').on('click', '.delete', function(event){
      event.preventDefault();
      var todo = $(this).closest('.todo');
      removeTodo(todo);
    });


    $('.todo_list').on('click', '.complete', function(e){
     e.preventDefault();
     var todo = $(this).closest('.todo');
     completeTodo(todo);
   });

  }


  function addTodo(todoName) {
    var $todo = buildTodo(todoName)
    $('.todo_list').append($todo)
  }

  function removeTodo(todo){
    $(todo).remove()
  }

  function completeTodo(todo){  
    $(todo).addClass('complete');
  }


  function buildTodo(todoName) {

   var $todo = $(todoTemplate);
    // Modifies it's text to use the passed in todoName.
    $todo.find('h2').text(todoName);
    // Returns the jQueryDOMElement to be used elsewhere.
    return $todo;
  }

    bindEvents();

});


