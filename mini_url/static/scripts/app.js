(function(){
    'use strict';

    angular.module('scrumboard', [])
        .controller('ScrumboardController', ScrumboardController,
        ['$scope', '$http', ScrumboardController]);

        function ScrumboardController($scope, $http){
            $scope.add = function(list, title) {
                var card = {
                    title: title
                };
                $http.post('/scrumboard/cards/', card)
                    .then(function(response){
                        list.cards.push(response.card);
                    }, function(){
                        console.log('error');
                    });
            };

            $scope.data = [];
            $http.get('/scrumboard/lists').then(function(response){
                $scope.data = response.data;
            });

            /*$scope.data = [
                {
                    name: 'Django',
                    cards: [
                    {
                        title: 'models'
                    },
                    {
                        title: 'views'
                    },
                    {
                        title: 'controllers'
                    }
                ]
            },
            {
                name: 'angular',
                cards : [
                    {
                        title: 'html'
                    },
                    {
                        title: 'binding'
                    }
                ]
            }

        ];*/
        }
}());
