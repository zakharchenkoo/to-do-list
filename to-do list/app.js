angular.module('todoApp', [])
  .controller('TodoController', function($scope) {
    $scope.todos = [];
    $scope.newTodoText = '';

    $scope.addTodo = function() {
      if ($scope.newTodoText) {
        $scope.todos.push({ text: $scope.newTodoText });
        $scope.newTodoText = '';
      }
    };

    $scope.removeTodo = function(todo) {
      var index = $scope.todos.indexOf(todo);
      if (index !== -1) {
        $scope.todos.splice(index, 1);
      }
    };
  });
