
define(
	'TelQuest.ExtendLoginRegister.ExtendLoginRegister'
,   [
	    'LoginRegister.Register.View'
	,   'telquest_extendloginregister_extendloginregister.tpl'
	]
,   function (
		LoginRegisterRegisterView
	,   telquest_extendloginregister_extendloginregister_tpl
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			LoginRegisterRegisterView.prototype.template=telquest_extendloginregister_extendloginregister_tpl;
		}
	};
});
