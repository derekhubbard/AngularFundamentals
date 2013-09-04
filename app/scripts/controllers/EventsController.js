'use strict';

  eventsApp.controller('EventController', function EventController($scope) {
    $scope.event = {
      name: 'Angular Boot Camp',
      date: '1/1/2013',
      time: '10:30 am',
      location: {
          address: 'Google Headquarters',
          city: 'Mountain View',
          province: 'CA'
      },
      imageUrl: '/images/AngularJS-large.png',
      sessions: [
        {
            name: 'Directives Masterclass',
            creatorName: 'Bob Smit', 
            duration: '1 hr',
            level: 'Advanced',
            abstract: 'In this session you will learn the ins and outs of directives.',
            upVoteCount: 0 
        },
        {
            name: 'Scopes for fun and profile',
            creatorName: 'John Doe',
            duration: '30 mins',
            level: 'Introductory',
            abstract: 'This session will take a closer look at scopes.  Learn some awesome stuff about scope!',
            upVoteCount: 0 
        },
        {
            name: 'Well behaved controllers',
            creatorName: 'Jane Doe',
            duration: '2 hours',
            level: 'Intermediate',
            abstract: 'Controllers are the beginning of everything Angular does.',
            upVoteCount: 0
        }
      ]
    }

    $scope.upVoteSession = function(session) {
        session.upVoteCount++;
    };

    $scope.downVoteSession = function(session) {
        session.upVoteCount--;
    };
  });