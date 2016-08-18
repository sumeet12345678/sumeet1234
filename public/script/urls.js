 //environ = 'LOCAL';
environ = 'HEROKU';

 TEAMS_TREE_URL = "http://localhost:8000/teams";

 GROUPS_TREE_URL = "http://localhost:9000/groups";

 CONNECTIONS_TREE_URL = "";


 CONTAGXONOMY_URL = "http://localhost:3000";

 PEOPLE_URL = "http://localhost:4000";

 PROFILE_URL = "http://localhost:5000";

 COMPOSER_URL = "http://localhost:6000";

 COMMON_UI_INFRA_URL = "http://localhost:7000";

 TEAMS_HOME_URL = "http://localhost:8000";

 GROUPS_HOME_URL = "http://localhost:9000";

 BOARDS_HOME_URL = "http://localhost:2000";

if(environ == 'HEROKU') {
	
	 TEAMS_TREE_URL = "http://ekteams.herokuapp.com/teams";

	 GROUPS_TREE_URL = "http://ekgroups.herokuapp.com/groups";

	 CONNECTIONS_TREE_URL = "";
	 

	 CONTAGXONOMY_URL = "http://ekcontagx.herokuapp.com";

	 PEOPLE_URL = "http://ekpeople.herokuapp.com";

	 PROFILE_URL = "http://ekprofile.herokuapp.com";

	 COMPOSER_URL = "http://ekcomposer.herokuapp.com";

	 COMMON_UI_INFRA_URL = "http://ekpplcommon.herokuapp.com";

	 TEAMS_HOME_URL = "http://ekteams.herokuapp.com";

	 GROUPS_HOME_URL = "http://ekgroups.herokuapp.com";

	 BOARDS_HOME_URL = "http://ekboards.herokuapp.com";
}



exports.ENVIRON = environ;

exports.TEAMS_TREE_URL = TEAMS_TREE_URL; 

exports.GROUPS_TREE_URL = GROUPS_TREE_URL; 

exports.CONNECTIONS_TREE_URL = CONNECTIONS_TREE_URL;  

exports.CONTAGXONOMY_URL = CONTAGXONOMY_URL; 

exports.PEOPLE_URL = PEOPLE_URL; 

exports.PROFILE_URL = PROFILE_URL;  

exports.COMPOSER_URL = COMPOSER_URL; 

exports.COMMON_UI_INFRA_URL = COMMON_UI_INFRA_URL; 

exports.TEAMS_HOME_URL = TEAMS_HOME_URL; 

exports.GROUPS_HOME_URL = GROUPS_HOME_URL; 

exports.BOARDS_HOME_URL = BOARDS_HOME_URL;  

 
