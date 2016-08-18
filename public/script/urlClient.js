// environ = 'LOCAL';
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

