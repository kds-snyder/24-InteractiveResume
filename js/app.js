angular.module('app', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/home');
	$stateProvider
		.state('home', { 
			url: '/home', 
			templateUrl: '/templates/home.html', 
			controller: 'HomeController'})			
		.state('portfolio', { 
			url: '/portfolio',
			 templateUrl: '/templates/portfolio.html', 
			 controller: 'PortfolioController'})						
		.state('resume', { 
			url: '/resume', 
			templateUrl: '/templates/resume.html',
			controller: 'ResumeController'});
});
