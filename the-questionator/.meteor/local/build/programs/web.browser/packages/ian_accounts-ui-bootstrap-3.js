//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
//                                                                      //
// If you are using Chrome, open the Developer Tools and click the gear //
// icon in its lower right corner. In the General Settings panel, turn  //
// on 'Enable source maps'.                                             //
//                                                                      //
// If you are using Firefox 23, go to `about:config` and set the        //
// `devtools.debugger.source-maps-enabled` preference to true.          //
// (The preference should be on by default in Firefox 24; versions      //
// older than 23 do not support source maps.)                           //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var Session = Package.session.Session;
var Accounts = Package['accounts-base'].Accounts;
var _ = Package.underscore._;
var Template = Package.templating.Template;
var i18n = Package['anti:i18n'].i18n;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var accountsUIBootstrap3, $modal;

(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian:accounts-ui-bootstrap-3/accounts_ui.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
if (!Accounts.ui)                                                                                                      // 1
	Accounts.ui = {};                                                                                                     // 2
                                                                                                                       // 3
if (!Accounts.ui._options) {                                                                                           // 4
	Accounts.ui._options = {                                                                                              // 5
		requestPermissions: {},                                                                                              // 6
		extraSignupFields: []                                                                                                // 7
	};                                                                                                                    // 8
}                                                                                                                      // 9
                                                                                                                       // 10
Accounts.ui.navigate = function (route, hash) {                                                                        // 11
	// if router is iron-router                                                                                           // 12
	if(window.Router && _.isFunction(Router.go)) {                                                                        // 13
		Router.go(route, hash);                                                                                              // 14
	}                                                                                                                     // 15
}                                                                                                                      // 16
                                                                                                                       // 17
Accounts.ui.config = function(options) {                                                                               // 18
	// validate options keys                                                                                              // 19
	var VALID_KEYS = ['passwordSignupFields', 'requestPermissions', 'extraSignupFields', 'requestOfflineToken'];          // 20
	_.each(_.keys(options), function(key) {                                                                               // 21
		if (!_.contains(VALID_KEYS, key))                                                                                    // 22
			throw new Error("Accounts.ui.config: Invalid key: " + key);                                                         // 23
	});                                                                                                                   // 24
	                                                                                                                      // 25
	options.extraSignupFields = options.extraSignupFields || []                                                           // 26
	// deal with `passwordSignupFields`                                                                                   // 27
	if (options.passwordSignupFields) {                                                                                   // 28
		if (_.contains([                                                                                                     // 29
			"USERNAME_AND_EMAIL_CONFIRM",                                                                                       // 30
			"USERNAME_AND_EMAIL",                                                                                               // 31
			"USERNAME_AND_OPTIONAL_EMAIL",                                                                                      // 32
			"USERNAME_ONLY",                                                                                                    // 33
			"EMAIL_ONLY"                                                                                                        // 34
		], options.passwordSignupFields)) {                                                                                  // 35
			if (Accounts.ui._options.passwordSignupFields)                                                                      // 36
				throw new Error("Accounts.ui.config: Can't set `passwordSignupFields` more than once");                            // 37
			else                                                                                                                // 38
				Accounts.ui._options.passwordSignupFields = options.passwordSignupFields;                                          // 39
		} else {                                                                                                             // 40
			throw new Error("Accounts.ui.config: Invalid option for `passwordSignupFields`: " + options.passwordSignupFields);  // 41
		}                                                                                                                    // 42
	}                                                                                                                     // 43
                                                                                                                       // 44
	// deal with `requestPermissions`                                                                                     // 45
	if (options.requestPermissions) {                                                                                     // 46
		_.each(options.requestPermissions, function(scope, service) {                                                        // 47
			if (Accounts.ui._options.requestPermissions[service]) {                                                             // 48
				throw new Error("Accounts.ui.config: Can't set `requestPermissions` more than once for " + service);               // 49
			} else if (!(scope instanceof Array)) {                                                                             // 50
				throw new Error("Accounts.ui.config: Value for `requestPermissions` must be an array");                            // 51
			} else {                                                                                                            // 52
				Accounts.ui._options.requestPermissions[service] = scope;                                                          // 53
			}                                                                                                                   // 54
		});                                                                                                                  // 55
		if (typeof options.extraSignupFields !== 'object' || !options.extraSignupFields instanceof Array) {                  // 56
			throw new Error("Accounts.ui.config: `extraSignupFields` must be an array.");                                       // 57
		} else {                                                                                                             // 58
			if (options.extraSignupFields) {                                                                                    // 59
				_.each(options.extraSignupFields, function(field, index) {                                                         // 60
					if (!field.fieldName || !field.fieldLabel)                                                                        // 61
						throw new Error("Accounts.ui.config: `extraSignupFields` objects must have `fieldName` and `fieldLabel` attributes.");
					if (typeof field.visible === 'undefined')                                                                         // 63
						field.visible = true;                                                                                            // 64
					Accounts.ui._options.extraSignupFields[index] = field;                                                            // 65
				});                                                                                                                // 66
			}                                                                                                                   // 67
		}                                                                                                                    // 68
	}                                                                                                                     // 69
};                                                                                                                     // 70
                                                                                                                       // 71
Accounts.ui._passwordSignupFields = function() {                                                                       // 72
	return Accounts.ui._options.passwordSignupFields || "EMAIL_ONLY";                                                     // 73
};                                                                                                                     // 74
                                                                                                                       // 75
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian:accounts-ui-bootstrap-3/i18n/en.i18n.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
i18n.map("en", {                                                                                                       // 1
	resetPasswordDialog: {                                                                                                // 2
		title: "Reset your password",                                                                                        // 3
		newPassword: "New password",                                                                                         // 4
		cancel: "Cancel",                                                                                                    // 5
		submit: "Set password"                                                                                               // 6
	},                                                                                                                    // 7
	enrollAccountDialog: {                                                                                                // 8
		title: "Choose a password",                                                                                          // 9
		newPassword: "New password",                                                                                         // 10
		cancel: "Close",                                                                                                     // 11
		submit: "Set password"                                                                                               // 12
	},                                                                                                                    // 13
	justVerifiedEmailDialog: {                                                                                            // 14
		verified: "Email address verified",                                                                                  // 15
		dismiss: "Dismiss"                                                                                                   // 16
	},                                                                                                                    // 17
	loginButtonsMessagesDialog: {                                                                                         // 18
		dismiss: "Dismiss",                                                                                                  // 19
	},                                                                                                                    // 20
	loginButtonsLoggedInDropdownActions: {                                                                                // 21
		password: "Change password",                                                                                         // 22
		signOut: "Sign out"                                                                                                  // 23
	},                                                                                                                    // 24
	loginButtonsLoggedOutDropdown: {                                                                                      // 25
		signIn: "Sign in",                                                                                                   // 26
		up: "up"                                                                                                             // 27
	},                                                                                                                    // 28
	loginButtonsLoggedOutPasswordServiceSeparator: {                                                                      // 29
		or: "or"                                                                                                             // 30
	},                                                                                                                    // 31
	loginButtonsLoggedOutPasswordService: {                                                                               // 32
		create: "Create",                                                                                                    // 33
		signIn: "Sign in",                                                                                                   // 34
		forgot: "Forgot password?",                                                                                          // 35
		createAcc: "Create account"                                                                                          // 36
	},                                                                                                                    // 37
	forgotPasswordForm: {                                                                                                 // 38
		email: "Email",                                                                                                      // 39
		reset: "Reset password",                                                                                             // 40
		sent: "Email sent"                                                                                                   // 41
	},                                                                                                                    // 42
	loginButtonsBackToLoginLink: {                                                                                        // 43
		back: "Cancel"                                                                                                       // 44
	},                                                                                                                    // 45
	loginButtonsChangePassword: {                                                                                         // 46
		submit: "Change password",                                                                                           // 47
		cancel: "Cancel"                                                                                                     // 48
	},                                                                                                                    // 49
	loginButtonsLoggedOutSingleLoginButton: {                                                                             // 50
		signInWith: "Sign in with",                                                                                          // 51
		configure: "Configure",                                                                                              // 52
	},                                                                                                                    // 53
	loginButtonsLoggedInSingleLogoutButton: {                                                                             // 54
		signOut: "Sign out"                                                                                                  // 55
	},                                                                                                                    // 56
	loginButtonsLoggedOut: {                                                                                              // 57
		noLoginServices: "No login services configured"                                                                      // 58
	},                                                                                                                    // 59
	loginFields: {                                                                                                        // 60
		usernameOrEmail: "Username or Email",                                                                                // 61
		username: "Username",                                                                                                // 62
		email: "Email",                                                                                                      // 63
		password: "Password"                                                                                                 // 64
	},                                                                                                                    // 65
	signupFields: {                                                                                                       // 66
		username: "Username",                                                                                                // 67
		email: "Email",                                                                                                      // 68
		emailOpt: "Email (optional)",                                                                                        // 69
		password: "Password",                                                                                                // 70
		passwordAgain: "Password (again)"                                                                                    // 71
	},                                                                                                                    // 72
	changePasswordFields: {                                                                                               // 73
		currentPassword: "Current Password",                                                                                 // 74
		newPassword: "New Password",                                                                                         // 75
		newPasswordAgain: "New Password (again)"                                                                             // 76
	},                                                                                                                    // 77
	errorMessages: {                                                                                                      // 78
		usernameTooShort: "Username must be at least 3 characters long",                                                     // 79
		invalidEmail: "Invalid email",                                                                                       // 80
		passwordTooShort: "Password must be at least 6 characters long",                                                     // 81
		passwordsDontMatch: "Passwords don't match"                                                                          // 82
	}                                                                                                                     // 83
})                                                                                                                     // 84
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian:accounts-ui-bootstrap-3/i18n/es.i18n.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
i18n.map("es", {                                                                                                       // 1
	resetPasswordDialog: {                                                                                                // 2
		title: "Restablece tu contraseña",                                                                                   // 3
		newPassword: "Nueva contraseña",                                                                                     // 4
		cancel: "Cancelar",                                                                                                  // 5
		submit: "Guardar"                                                                                                    // 6
	},                                                                                                                    // 7
	enrollAccountDialog: {                                                                                                // 8
		title: "Escribe una contraseña",                                                                                     // 9
		newPassword: "Nueva contraseña",                                                                                     // 10
		cancel: "Cerrar",                                                                                                    // 11
		submit: "Guardar contraseña"                                                                                         // 12
	},                                                                                                                    // 13
	justVerifiedEmailDialog: {                                                                                            // 14
		verified: "Correo electrónico verificado",                                                                           // 15
		dismiss: "Cerrar"                                                                                                    // 16
	},                                                                                                                    // 17
	loginButtonsMessagesDialog: {                                                                                         // 18
		dismiss: "Cerrar",                                                                                                   // 19
	},                                                                                                                    // 20
	loginButtonsLoggedInDropdownActions: {                                                                                // 21
		password: "Cambiar contraseña",                                                                                      // 22
		signOut: "Cerrar sesión"                                                                                             // 23
	},                                                                                                                    // 24
	loginButtonsLoggedOutDropdown: {                                                                                      // 25
		signIn: "Iniciar sesión",                                                                                            // 26
		up: "registrarse"                                                                                                    // 27
	},                                                                                                                    // 28
	loginButtonsLoggedOutPasswordServiceSeparator: {                                                                      // 29
		or: "o"                                                                                                              // 30
	},                                                                                                                    // 31
	loginButtonsLoggedOutPasswordService: {                                                                               // 32
		create: "Crear",                                                                                                     // 33
		signIn: "Iniciar sesión",                                                                                            // 34
		forgot: "Ha olvidado su contraseña?",                                                                                // 35
		createAcc: "Registrarse"                                                                                             // 36
	},                                                                                                                    // 37
	forgotPasswordForm: {                                                                                                 // 38
		email: "Correo electrónico",                                                                                         // 39
		reset: "Restablecer contraseña",                                                                                     // 40
		sent: "Email enviado"                                                                                                // 41
	},                                                                                                                    // 42
	loginButtonsBackToLoginLink: {                                                                                        // 43
		back: "Cancelar"                                                                                                     // 44
	},                                                                                                                    // 45
	loginButtonsChangePassword: {                                                                                         // 46
		submit: "Cambiar contraseña",                                                                                        // 47
		cancel: "Cancelar"                                                                                                   // 48
	},                                                                                                                    // 49
	loginButtonsLoggedOutSingleLoginButton: {                                                                             // 50
		signInWith: "Inicia sesión con",                                                                                     // 51
		configure: "Configurar",                                                                                             // 52
	},                                                                                                                    // 53
	loginButtonsLoggedInSingleLogoutButton: {                                                                             // 54
		signOut: "Cerrar sesión"                                                                                             // 55
	},                                                                                                                    // 56
	loginButtonsLoggedOut: {                                                                                              // 57
		noLoginServices: "No hay ningún servicio configurado"                                                                // 58
	},                                                                                                                    // 59
	loginFields: {                                                                                                        // 60
		usernameOrEmail: "Usuario o contraseña",                                                                             // 61
		username: "Usuario",                                                                                                 // 62
		email: "Correo electrónico",                                                                                         // 63
		password: "Contraseña"                                                                                               // 64
	},                                                                                                                    // 65
	signupFields: {                                                                                                       // 66
		username: "Usuario",                                                                                                 // 67
		email: "Correo electrónico",                                                                                         // 68
		emailOpt: "Correo elect. (opcional)",                                                                                // 69
		password: "Contraseña",                                                                                              // 70
		passwordAgain: "Contraseña (otra vez)"                                                                               // 71
	},                                                                                                                    // 72
	changePasswordFields: {                                                                                               // 73
		currentPassword: "Contraseña Actual",                                                                                // 74
		newPassword: "Nueva Contraseña",                                                                                     // 75
		newPasswordAgain: "Nueva Contraseña (otra vez)"                                                                      // 76
	},                                                                                                                    // 77
	errorMessages: {                                                                                                      // 78
		usernameTooShort: "El nombre de usuario tiene que tener 3 caracteres como mínimo",                                   // 79
		invalidEmail: "Correo electrónico inválido",                                                                         // 80
		passwordTooShort: "La contraseña tiene que tener 3 caracteres como mínimo",                                          // 81
		passwordsDontMatch: "Las contraseñas no son iguales"                                                                 // 82
	}                                                                                                                     // 83
})                                                                                                                     // 84
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian:accounts-ui-bootstrap-3/i18n/ca.i18n.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
i18n.map("ca", {                                                                                                       // 1
	resetPasswordDialog: {                                                                                                // 2
		title: "Restablir la contrasenya",                                                                                   // 3
		newPassword: "Nova contrasenya",                                                                                     // 4
		cancel: "Cancel·lar",                                                                                                // 5
		submit: "Guardar"                                                                                                    // 6
	},                                                                                                                    // 7
	enrollAccountDialog: {                                                                                                // 8
		title: "Escriu una contrasenya",                                                                                     // 9
		newPassword: "Nova contrasenya",                                                                                     // 10
		cancel: "Tancar",                                                                                                    // 11
		submit: "Guardar contrasenya"                                                                                        // 12
	},                                                                                                                    // 13
	justVerifiedEmailDialog: {                                                                                            // 14
		verified: "Adreça electrònica verificada",                                                                           // 15
		dismiss: "Tancar"                                                                                                    // 16
	},                                                                                                                    // 17
	loginButtonsMessagesDialog: {                                                                                         // 18
		dismiss: "Tancar",                                                                                                   // 19
	},                                                                                                                    // 20
	loginButtonsLoggedInDropdownActions: {                                                                                // 21
		password: "Canviar contrasenya",                                                                                     // 22
		signOut: "Tancar sessió"                                                                                             // 23
	},                                                                                                                    // 24
	loginButtonsLoggedOutDropdown: {                                                                                      // 25
		signIn: "Iniciar sessió",                                                                                            // 26
		up: "Registrar-se"                                                                                                   // 27
	},                                                                                                                    // 28
	loginButtonsLoggedOutPasswordServiceSeparator: {                                                                      // 29
		or: "o bé"                                                                                                           // 30
	},                                                                                                                    // 31
	loginButtonsLoggedOutPasswordService: {                                                                               // 32
		create: "Crear",                                                                                                     // 33
		signIn: "Iniciar sessió",                                                                                            // 34
		forgot: "Ha oblidat la contrasenya?",                                                                                // 35
		createAcc: "Registrar-se"                                                                                            // 36
	},                                                                                                                    // 37
	forgotPasswordForm: {                                                                                                 // 38
		email: "Adreça electrònica",                                                                                         // 39
		reset: "Restablir contrasenya",                                                                                      // 40
		sent: "Email enviat"                                                                                                 // 41
	},                                                                                                                    // 42
	loginButtonsBackToLoginLink: {                                                                                        // 43
		back: "Cancel·lar"                                                                                                   // 44
	},                                                                                                                    // 45
	loginButtonsChangePassword: {                                                                                         // 46
		submit: "Canviar contrasenya",                                                                                       // 47
		cancel: "Cancel·lar"                                                                                                 // 48
	},                                                                                                                    // 49
	loginButtonsLoggedOutSingleLoginButton: {                                                                             // 50
		signInWith: "Inicia sessió amb",                                                                                     // 51
		configure: "Configurar",                                                                                             // 52
	},                                                                                                                    // 53
	loginButtonsLoggedInSingleLogoutButton: {                                                                             // 54
		signOut: "Tancar sessió"                                                                                             // 55
	},                                                                                                                    // 56
	loginButtonsLoggedOut: {                                                                                              // 57
		noLoginServices: "No hi ha cap servei configurat"                                                                    // 58
	},                                                                                                                    // 59
	loginFields: {                                                                                                        // 60
		usernameOrEmail: "Usuari o contrasenya",                                                                             // 61
		username: "Usuari",                                                                                                  // 62
		email: "Adreça electrònica",                                                                                         // 63
		password: "Contrasenya"                                                                                              // 64
	},                                                                                                                    // 65
	signupFields: {                                                                                                       // 66
		username: "Usuari",                                                                                                  // 67
		email: "Adreça electrònica",                                                                                         // 68
		emailOpt: "Adreça elect. (opcional)",                                                                                // 69
		password: "Contrasenya",                                                                                             // 70
		passwordAgain: "Contrasenya (un altre cop)"                                                                          // 71
	},                                                                                                                    // 72
	changePasswordFields: {                                                                                               // 73
		currentPassword: "Contrasenya Actual",                                                                               // 74
		newPassword: "Nova Contrasenya",                                                                                     // 75
		newPasswordAgain: "Nova Contrasenya (un altre cop)"                                                                  // 76
	},                                                                                                                    // 77
	errorMessages: {                                                                                                      // 78
		usernameTooShort: "El nom d'usuari ha de tenir 3 caracters com a mínim",                                             // 79
		invalidEmail: "Adreça electrònica invàlida",                                                                         // 80
		passwordTooShort: "La contrasenya ha de tenir 3 caracters como a mínim",                                             // 81
		passwordsDontMatch: "Les contrasenyes no són iguals"                                                                 // 82
	}                                                                                                                     // 83
})                                                                                                                     // 84
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian:accounts-ui-bootstrap-3/i18n/fr.i18n.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
i18n.map("fr", {                                                                                                       // 1
	resetPasswordDialog: {                                                                                                // 2
		title: "Réinitialiser mon mot de passe",                                                                             // 3
		newPassword: "Nouveau mot de passe",                                                                                 // 4
		cancel: "Annuler",                                                                                                   // 5
		submit: "Définir le mot de passe"                                                                                    // 6
	},                                                                                                                    // 7
	enrollAccountDialog: {                                                                                                // 8
		title: "Choisir un mot de passe",                                                                                    // 9
		newPassword: "Nouveau mot de passe",                                                                                 // 10
		cancel: "Fermer",                                                                                                    // 11
		submit: "Définir le mot de passe"                                                                                    // 12
	},                                                                                                                    // 13
	justVerifiedEmailDialog: {                                                                                            // 14
		verified: "L'adresse email a été vérifiée",                                                                          // 15
		dismiss: "Fermer"                                                                                                    // 16
	},                                                                                                                    // 17
	loginButtonsMessagesDialog: {                                                                                         // 18
		dismiss: "Fermer",                                                                                                   // 19
	},                                                                                                                    // 20
	loginButtonsLoggedInDropdownActions: {                                                                                // 21
		password: "Changer le mot de passe",                                                                                 // 22
		signOut: "Déconnexion"                                                                                               // 23
	},                                                                                                                    // 24
	loginButtonsLoggedOutDropdown: {                                                                                      // 25
		signIn: "Connexion",                                                                                                 // 26
		up: "Inscription"                                                                                                    // 27
	},                                                                                                                    // 28
	loginButtonsLoggedOutPasswordServiceSeparator: {                                                                      // 29
		or: "ou"                                                                                                             // 30
	},                                                                                                                    // 31
	loginButtonsLoggedOutPasswordService: {                                                                               // 32
		create: "Créer",                                                                                                     // 33
		signIn: "Connexion",                                                                                                 // 34
		forgot: "Mot de passe oublié ?",                                                                                     // 35
		createAcc: "Inscription"                                                                                             // 36
	},                                                                                                                    // 37
	forgotPasswordForm: {                                                                                                 // 38
		email: "Email",                                                                                                      // 39
		reset: "Réinitialiser le mot de passe",                                                                              // 40
		sent: "Email envoyé"                                                                                                 // 41
	},                                                                                                                    // 42
	loginButtonsBackToLoginLink: {                                                                                        // 43
		back: "Annuler"                                                                                                      // 44
	},                                                                                                                    // 45
	loginButtonsChangePassword: {                                                                                         // 46
		submit: "Changer le mot de passe",                                                                                   // 47
		cancel: "Annuler"                                                                                                    // 48
	},                                                                                                                    // 49
	loginButtonsLoggedOutSingleLoginButton: {                                                                             // 50
		signInWith: "Se connecter avec",                                                                                     // 51
		configure: "Configurer",                                                                                             // 52
	},                                                                                                                    // 53
	loginButtonsLoggedInSingleLogoutButton: {                                                                             // 54
		signOut: "Déconnexion"                                                                                               // 55
	},                                                                                                                    // 56
	loginButtonsLoggedOut: {                                                                                              // 57
		noLoginServices: "Aucun service d'authentification n'est configuré"                                                  // 58
	},                                                                                                                    // 59
	loginFields: {                                                                                                        // 60
		sernameOrEmail: "Nom d'utilisateur ou email",                                                                        // 61
		sername: "Nom d'utilisateur",                                                                                        // 62
		mail: "Email",                                                                                                       // 63
		assword: "Mot de passe"                                                                                              // 64
	},                                                                                                                    // 65
	signupFields: {                                                                                                       // 66
		username: "Nom d'utilisateur",                                                                                       // 67
		email: "Email",                                                                                                      // 68
		emailOpt: "Email (optionnel)",                                                                                       // 69
		password: "Mot de passe",                                                                                            // 70
		passwordAgain: "Mot de passe (confirmation)"                                                                         // 71
	},                                                                                                                    // 72
	changePasswordFields: {                                                                                               // 73
		currentPassword: "Mot de passe actuel",                                                                              // 74
		newPassword: "Nouveau mot de passe",                                                                                 // 75
		newPasswordAgain: "Nouveau mot de passe (confirmation)"                                                              // 76
	},                                                                                                                    // 77
	errorMessages: {                                                                                                      // 78
		usernameTooShort: "Username must be at least 3 characters long",                                                     // 79
		invalidEmail: "Invalid email",                                                                                       // 80
		passwordTooShort: "Password must be at least 6 characters long",                                                     // 81
		passwordsDontMatch: "Passwords don't match"                                                                          // 82
	}                                                                                                                     // 83
})                                                                                                                     // 84
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian:accounts-ui-bootstrap-3/i18n/de.i18n.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
i18n.map("de", {                                                                                                       // 1
	resetPasswordDialog: {                                                                                                // 2
		title: "Password zurücksetzten",                                                                                     // 3
		newPassword: "Neues Password",                                                                                       // 4
		cancel: "Abbrechen",                                                                                                 // 5
		submit: "Password ändern"                                                                                            // 6
	},                                                                                                                    // 7
	enrollAccountDialog: {                                                                                                // 8
		title: "Password wählen",                                                                                            // 9
		newPassword: "Neues Password",                                                                                       // 10
		cancel: "Schließen",                                                                                                 // 11
		submit: "Password ändern"                                                                                            // 12
	},                                                                                                                    // 13
	justVerifiedEmailDialog: {                                                                                            // 14
		verified: "Email Adresse verifizieren",                                                                              // 15
		dismiss: "Schließen"                                                                                                 // 16
	},                                                                                                                    // 17
	loginButtonsMessagesDialog: {                                                                                         // 18
		dismiss: "Schließen"                                                                                                 // 19
	},                                                                                                                    // 20
	loginButtonsLoggedInDropdownActions: {                                                                                // 21
		password: "Password ändern",                                                                                         // 22
		signOut: "Abmeleden"                                                                                                 // 23
	},                                                                                                                    // 24
	loginButtonsLoggedOutDropdown: {                                                                                      // 25
		signIn: "Anmelden",                                                                                                  // 26
		up: "hoch"                                                                                                           // 27
	},                                                                                                                    // 28
	loginButtonsLoggedOutPasswordServiceSeparator: {                                                                      // 29
		or: "oder"                                                                                                           // 30
	},                                                                                                                    // 31
	loginButtonsLoggedOutPasswordService: {                                                                               // 32
		create: "Erstellen",                                                                                                 // 33
		signIn: "Anmelden",                                                                                                  // 34
		forgot: "Password vergessen?",                                                                                       // 35
		createAcc: "Account erstellen"                                                                                       // 36
	},                                                                                                                    // 37
	forgotPasswordForm: {                                                                                                 // 38
		email: "Email",                                                                                                      // 39
		reset: "Password zurücksetzen",                                                                                      // 40
		sent: "Email gesendet"                                                                                               // 41
	},                                                                                                                    // 42
	loginButtonsBackToLoginLink: {                                                                                        // 43
		back: "Abbrechen"                                                                                                    // 44
	},                                                                                                                    // 45
	loginButtonsChangePassword: {                                                                                         // 46
		submit: "Password ändern",                                                                                           // 47
		cancel: "Abbrechen"                                                                                                  // 48
	},                                                                                                                    // 49
	loginButtonsLoggedOutSingleLoginButton: {                                                                             // 50
		signInWith: "Anmelden mit",                                                                                          // 51
		configure: "Konfigurieren",                                                                                          // 52
	},                                                                                                                    // 53
	loginButtonsLoggedInSingleLogoutButton: {                                                                             // 54
		signOut: "Abmelden"                                                                                                  // 55
	},                                                                                                                    // 56
	loginButtonsLoggedOut: {                                                                                              // 57
		noLoginServices: "Keine Anmelde Services konfiguriert"                                                               // 58
	},                                                                                                                    // 59
	loginFields: {                                                                                                        // 60
		usernameOrEmail: "Benutzername oder Email",                                                                          // 61
		username: "Benutzername",                                                                                            // 62
		email: "Email",                                                                                                      // 63
		password: "Password"                                                                                                 // 64
	},                                                                                                                    // 65
	signupFields: {                                                                                                       // 66
		username: "Benutzername",                                                                                            // 67
		email: "Email",                                                                                                      // 68
		emailOpt: "Email (freiwillig)",                                                                                      // 69
		password: "Password",                                                                                                // 70
		passwordAgain: "Password (wiederholen)"                                                                              // 71
	},                                                                                                                    // 72
	changePasswordFields: {                                                                                               // 73
		currentPassword: "Aktuelles Password",                                                                               // 74
		newPassword: "Neues Password",                                                                                       // 75
		newPasswordAgain: "Neues Password (wiederholen)"                                                                     // 76
	},                                                                                                                    // 77
	errorMessages: {                                                                                                      // 78
		usernameTooShort: "Der Benutzername muss mindestens 3 Buchstaben lang sein",                                         // 79
		invalidEmail: "Ungültige Email Adresse",                                                                             // 80
		passwordTooShort: "Password muss mindestens 6 Zeichen lang sein",                                                    // 81
		passwordsDontMatch: "Die Passwörter stimmen nicht überein"                                                           // 82
	}                                                                                                                     // 83
})                                                                                                                     // 84
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian:accounts-ui-bootstrap-3/i18n/it.i18n.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
i18n.map("it", {                                                                                                       // 1
	resetPasswordDialog: {                                                                                                // 2
		title: "Reimposta la password",                                                                                      // 3
		newPassword: "Nuova password",                                                                                       // 4
		cancel: "Annulla",                                                                                                   // 5
		submit: "Imposta password"                                                                                           // 6
	},                                                                                                                    // 7
	enrollAccountDialog: {                                                                                                // 8
		title: "Scegli una password",                                                                                        // 9
		newPassword: "Nuova password",                                                                                       // 10
		cancel: "Chiudi",                                                                                                    // 11
		submit: "Imposta password"                                                                                           // 12
	},                                                                                                                    // 13
	justVerifiedEmailDialog: {                                                                                            // 14
		verified: "Indirizzo email verificato",                                                                              // 15
		dismiss: "Chiudi"                                                                                                    // 16
	},                                                                                                                    // 17
	loginButtonsMessagesDialog: {                                                                                         // 18
		dismiss: "Chiudi",                                                                                                   // 19
	},                                                                                                                    // 20
	loginButtonsLoggedInDropdownActions: {                                                                                // 21
		password: "Cambia password",                                                                                         // 22
		signOut: "Esci"                                                                                                      // 23
	},                                                                                                                    // 24
	loginButtonsLoggedOutDropdown: {                                                                                      // 25
		signIn: "Accedi",                                                                                                    // 26
		up: "Registrati"                                                                                                     // 27
	},                                                                                                                    // 28
	loginButtonsLoggedOutPasswordServiceSeparator: {                                                                      // 29
		or: "o"                                                                                                              // 30
	},                                                                                                                    // 31
	loginButtonsLoggedOutPasswordService: {                                                                               // 32
		create: "Crea",                                                                                                      // 33
		signIn: "Accedi",                                                                                                    // 34
		forgot: "Password dimenticata?",                                                                                     // 35
		createAcc: "Crea un account"                                                                                         // 36
	},                                                                                                                    // 37
	forgotPasswordForm: {                                                                                                 // 38
		email: "Email",                                                                                                      // 39
		reset: "Reimposta la password",                                                                                      // 40
		sent: "Email inviata"                                                                                                // 41
	},                                                                                                                    // 42
	loginButtonsBackToLoginLink: {                                                                                        // 43
		back: "Cancella"                                                                                                     // 44
	},                                                                                                                    // 45
	loginButtonsChangePassword: {                                                                                         // 46
		submit: "Cambia password",                                                                                           // 47
		cancel: "Annulla"                                                                                                    // 48
	},                                                                                                                    // 49
	loginButtonsLoggedOutSingleLoginButton: {                                                                             // 50
		signInWith: "Accedi con",                                                                                            // 51
		configure: "Configura",                                                                                              // 52
	},                                                                                                                    // 53
	loginButtonsLoggedInSingleLogoutButton: {                                                                             // 54
		signOut: "Esci"                                                                                                      // 55
	},                                                                                                                    // 56
	loginButtonsLoggedOut: {                                                                                              // 57
		noLoginServices: "Nessun servizio di accesso configurato"                                                            // 58
	},                                                                                                                    // 59
	loginFields: {                                                                                                        // 60
		usernameOrEmail: "Username o Email",                                                                                 // 61
		username: "Username",                                                                                                // 62
		email: "Email",                                                                                                      // 63
		password: "Password"                                                                                                 // 64
	},                                                                                                                    // 65
	signupFields: {                                                                                                       // 66
		username: "Username",                                                                                                // 67
		email: "Email",                                                                                                      // 68
		emailOpt: "Email (opzionale)",                                                                                       // 69
		password: "Password",                                                                                                // 70
		passwordAgain: "Password (di nuovo)"                                                                                 // 71
	},                                                                                                                    // 72
	changePasswordFields: {                                                                                               // 73
		currentPassword: "Password corrente",                                                                                // 74
		newPassword: "Nuova password",                                                                                       // 75
		newPasswordAgain: "Nuova password (di nuovo)"                                                                        // 76
	},                                                                                                                    // 77
	errorMessages: {                                                                                                      // 78
		usernameTooShort: "La Username deve essere almeno di 3 caratteri",                                                   // 79
		invalidEmail: "Email non valida",                                                                                    // 80
		passwordTooShort: "La Password deve essere almeno di 6 caratteri",                                                   // 81
		passwordsDontMatch: "Le password non corrispondono"                                                                  // 82
	}                                                                                                                     // 83
});                                                                                                                    // 84
                                                                                                                       // 85
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian:accounts-ui-bootstrap-3/i18n/pt.i18n.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
i18n.map("pt", {                                                                                                       // 1
	resetPasswordDialog: {                                                                                                // 2
		title: "Esqueceu sua senha?",                                                                                        // 3
		newPassword: "Nova senha",                                                                                           // 4
		cancel: "Cancelar",                                                                                                  // 5
		submit: "Alterar senha"                                                                                              // 6
	},                                                                                                                    // 7
	enrollAccountDialog: {                                                                                                // 8
		title: "Digite a nova senha",                                                                                        // 9
		newPassword: "Nova senha",                                                                                           // 10
		cancel: "Fechar",                                                                                                    // 11
		submit: "Alterar senha"                                                                                              // 12
	},                                                                                                                    // 13
	justVerifiedEmailDialog: {                                                                                            // 14
		verified: "E-mail verificado!",                                                                                      // 15
		dismiss: "Ignorar"                                                                                                   // 16
	},                                                                                                                    // 17
	loginButtonsMessagesDialog: {                                                                                         // 18
		dismiss: "Ignorar",                                                                                                  // 19
	},                                                                                                                    // 20
	loginButtonsLoggedInDropdownActions: {                                                                                // 21
		password: "Mudar senha",                                                                                             // 22
		signOut: "Sair"                                                                                                      // 23
	},                                                                                                                    // 24
	loginButtonsLoggedOutDropdown: {                                                                                      // 25
		signIn: "Entrar",                                                                                                    // 26
		up: "Cadastrar"                                                                                                      // 27
	},                                                                                                                    // 28
	loginButtonsLoggedOutPasswordServiceSeparator: {                                                                      // 29
		or: "ou"                                                                                                             // 30
	},                                                                                                                    // 31
	loginButtonsLoggedOutPasswordService: {                                                                               // 32
		create: "Criar",                                                                                                     // 33
		signIn: "Login",                                                                                                     // 34
		forgot: "Esqueceu sua senha?",                                                                                       // 35
		createAcc: "Cadastrar"                                                                                               // 36
	},                                                                                                                    // 37
	forgotPasswordForm: {                                                                                                 // 38
		email: "E-mail",                                                                                                     // 39
		reset: "Alterar senha",                                                                                              // 40
		sent: "E-mail enviado"                                                                                               // 41
	},                                                                                                                    // 42
	loginButtonsBackToLoginLink: {                                                                                        // 43
		back: "Cancelar"                                                                                                     // 44
	},                                                                                                                    // 45
	loginButtonsChangePassword: {                                                                                         // 46
		submit: "Mudar senha",                                                                                               // 47
		cancel: "Cancelar"                                                                                                   // 48
	},                                                                                                                    // 49
	loginButtonsLoggedOutSingleLoginButton: {                                                                             // 50
		signInWith: "Logar com",                                                                                             // 51
		configure: "Configurar",                                                                                             // 52
	},                                                                                                                    // 53
	loginButtonsLoggedInSingleLogoutButton: {                                                                             // 54
		signOut: "Sair"                                                                                                      // 55
	},                                                                                                                    // 56
	loginButtonsLoggedOut: {                                                                                              // 57
		noLoginServices: "Nenhum servico de login configurado"                                                               // 58
	},                                                                                                                    // 59
	loginFields: {                                                                                                        // 60
		usernameOrEmail: "Usuário ou E-mail",                                                                                // 61
		username: "Usuário",                                                                                                 // 62
		email: "E-mail",                                                                                                     // 63
		password: "Senha"                                                                                                    // 64
	},                                                                                                                    // 65
	signupFields: {                                                                                                       // 66
		username: "Usuário",                                                                                                 // 67
		email: "E-mail",                                                                                                     // 68
		emailOpt: "E-mail (opcional)",                                                                                       // 69
		password: "Senha",                                                                                                   // 70
		passwordAgain: "Senha (confirmacão)"                                                                                 // 71
	},                                                                                                                    // 72
	changePasswordFields: {                                                                                               // 73
		currentPassword: "Senah atual",                                                                                      // 74
		newPassword: "Nova Senha",                                                                                           // 75
		newPasswordAgain: "Nova Senha (confirmacao)"                                                                         // 76
	},                                                                                                                    // 77
	errorMessages: {                                                                                                      // 78
		usernameTooShort: "Usuário precisa ter mais de 3 caracteres",                                                        // 79
		invalidEmail: "E-mail inválido",                                                                                     // 80
		passwordTooShort: "Senha precisa ter mais de 6 caracteres",                                                          // 81
		passwordsDontMatch: "Senhas estão diferentes"                                                                        // 82
	}                                                                                                                     // 83
})                                                                                                                     // 84
                                                                                                                       // 85
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian:accounts-ui-bootstrap-3/i18n.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
i18n.setDefaultLanguage('en')                                                                                          // 1
                                                                                                                       // 2
accountsUIBootstrap3 = {                                                                                               // 3
	setLanguage: function (lang) {                                                                                        // 4
		return i18n.setLanguage(lang)                                                                                        // 5
	},                                                                                                                    // 6
	getLanguage: function () {                                                                                            // 7
		return i18n.getLanguage()                                                                                            // 8
	},                                                                                                                    // 9
	map: function (lang, obj) {                                                                                           // 10
		return i18n.map(lang, obj)                                                                                           // 11
	}                                                                                                                     // 12
}                                                                                                                      // 13
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian:accounts-ui-bootstrap-3/template.login_buttons.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("_loginButtons");                                                                                 // 2
Template["_loginButtons"] = new Template("Template._loginButtons", (function() {                                       // 3
  var view = this;                                                                                                     // 4
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.lookup("currentUser"));                                                                 // 6
  }, function() {                                                                                                      // 7
    return [ "\n		", Blaze.If(function() {                                                                             // 8
      return Spacebars.call(view.lookup("loggingIn"));                                                                 // 9
    }, function() {                                                                                                    // 10
      return [ "\n			\n			", Blaze.If(function() {                                                                     // 11
        return Spacebars.call(view.lookup("dropdown"));                                                                // 12
      }, function() {                                                                                                  // 13
        return [ "\n				", Spacebars.include(view.lookupTemplate("_loginButtonsLoggingIn")), "\n			" ];                // 14
      }, function() {                                                                                                  // 15
        return [ "\n				", HTML.DIV({                                                                                  // 16
          "class": "login-buttons-with-only-one-button"                                                                // 17
        }, "\n					", Spacebars.include(view.lookupTemplate("_loginButtonsLoggingInSingleLoginButton")), "\n				"), "\n			" ];
      }), "\n		" ];                                                                                                    // 19
    }, function() {                                                                                                    // 20
      return [ "\n			", Spacebars.include(view.lookupTemplate("_loginButtonsLoggedIn")), "\n		" ];                     // 21
    }), "\n	" ];                                                                                                       // 22
  }, function() {                                                                                                      // 23
    return [ "\n		", Spacebars.include(view.lookupTemplate("_loginButtonsLoggedOut")), "\n	" ];                        // 24
  });                                                                                                                  // 25
}));                                                                                                                   // 26
                                                                                                                       // 27
Template.__checkName("_loginButtonsLoggedIn");                                                                         // 28
Template["_loginButtonsLoggedIn"] = new Template("Template._loginButtonsLoggedIn", (function() {                       // 29
  var view = this;                                                                                                     // 30
  return Blaze.If(function() {                                                                                         // 31
    return Spacebars.call(view.lookup("dropdown"));                                                                    // 32
  }, function() {                                                                                                      // 33
    return [ "\n		", Spacebars.include(view.lookupTemplate("_loginButtonsLoggedInDropdown")), "\n	" ];                 // 34
  }, function() {                                                                                                      // 35
    return [ "\n	", Spacebars.include(view.lookupTemplate("_loginButtonsLoggedInSingleLogoutButton")), "\n	" ];        // 36
  });                                                                                                                  // 37
}));                                                                                                                   // 38
                                                                                                                       // 39
Template.__checkName("_loginButtonsLoggedOut");                                                                        // 40
Template["_loginButtonsLoggedOut"] = new Template("Template._loginButtonsLoggedOut", (function() {                     // 41
  var view = this;                                                                                                     // 42
  return Blaze.If(function() {                                                                                         // 43
    return Spacebars.call(view.lookup("services"));                                                                    // 44
  }, function() {                                                                                                      // 45
    return [ " \n		", Blaze.If(function() {                                                                            // 46
      return Spacebars.call(view.lookup("configurationLoaded"));                                                       // 47
    }, function() {                                                                                                    // 48
      return [ "\n			", Blaze.If(function() {                                                                          // 49
        return Spacebars.call(view.lookup("dropdown"));                                                                // 50
      }, function() {                                                                                                  // 51
        return [ " \n				", Spacebars.include(view.lookupTemplate("_loginButtonsLoggedOutDropdown")), "\n			" ];       // 52
      }, function() {                                                                                                  // 53
        return [ "\n				", Spacebars.With(function() {                                                                 // 54
          return Spacebars.call(view.lookup("singleService"));                                                         // 55
        }, function() {                                                                                                // 56
          return [ " \n						", Blaze.If(function() {                                                                  // 57
            return Spacebars.call(view.lookup("loggingIn"));                                                           // 58
          }, function() {                                                                                              // 59
            return [ "\n							", Spacebars.include(view.lookupTemplate("_loginButtonsLoggingInSingleLoginButton")), "\n						" ];
          }, function() {                                                                                              // 61
            return [ "\n							", Spacebars.include(view.lookupTemplate("_loginButtonsLoggedOutSingleLoginButton")), "\n						" ];
          }), "\n				" ];                                                                                              // 63
        }), "\n			" ];                                                                                                 // 64
      }), "\n		" ];                                                                                                    // 65
    }), "\n	" ];                                                                                                       // 66
  }, function() {                                                                                                      // 67
    return [ "\n		", HTML.DIV({                                                                                        // 68
      "class": "no-services"                                                                                           // 69
    }, Blaze.View(function() {                                                                                         // 70
      return Spacebars.mustache(view.lookup("i18n"), "loginButtonsLoggedOut.noLoginServices");                         // 71
    })), "\n	" ];                                                                                                      // 72
  });                                                                                                                  // 73
}));                                                                                                                   // 74
                                                                                                                       // 75
Template.__checkName("_loginButtonsMessages");                                                                         // 76
Template["_loginButtonsMessages"] = new Template("Template._loginButtonsMessages", (function() {                       // 77
  var view = this;                                                                                                     // 78
  return [ Blaze.If(function() {                                                                                       // 79
    return Spacebars.call(view.lookup("errorMessage"));                                                                // 80
  }, function() {                                                                                                      // 81
    return [ "\n		", HTML.DIV({                                                                                        // 82
      "class": "alert alert-danger"                                                                                    // 83
    }, Blaze.View(function() {                                                                                         // 84
      return Spacebars.mustache(view.lookup("errorMessage"));                                                          // 85
    })), "\n	" ];                                                                                                      // 86
  }), "\n	", Blaze.If(function() {                                                                                     // 87
    return Spacebars.call(view.lookup("infoMessage"));                                                                 // 88
  }, function() {                                                                                                      // 89
    return [ "\n		", HTML.DIV({                                                                                        // 90
      "class": "alert alert-success no-margin"                                                                         // 91
    }, Blaze.View(function() {                                                                                         // 92
      return Spacebars.mustache(view.lookup("infoMessage"));                                                           // 93
    })), "\n	" ];                                                                                                      // 94
  }) ];                                                                                                                // 95
}));                                                                                                                   // 96
                                                                                                                       // 97
Template.__checkName("_loginButtonsLoggingIn");                                                                        // 98
Template["_loginButtonsLoggingIn"] = new Template("Template._loginButtonsLoggingIn", (function() {                     // 99
  var view = this;                                                                                                     // 100
  return [ Spacebars.include(view.lookupTemplate("_loginButtonsLoggingInPadding")), HTML.Raw('\n	<div class="loading">&nbsp;</div>\n	'), Spacebars.include(view.lookupTemplate("_loginButtonsLoggingInPadding")) ];
}));                                                                                                                   // 102
                                                                                                                       // 103
Template.__checkName("_loginButtonsLoggingInPadding");                                                                 // 104
Template["_loginButtonsLoggingInPadding"] = new Template("Template._loginButtonsLoggingInPadding", (function() {       // 105
  var view = this;                                                                                                     // 106
  return Blaze.Unless(function() {                                                                                     // 107
    return Spacebars.call(view.lookup("dropdown"));                                                                    // 108
  }, function() {                                                                                                      // 109
    return [ "\n		\n		", HTML.DIV({                                                                                    // 110
      "class": "login-buttons-padding"                                                                                 // 111
    }, "\n			", HTML.DIV({                                                                                             // 112
      "class": "login-button single-login-button",                                                                     // 113
      style: "visibility: hidden;",                                                                                    // 114
      id: "login-buttons-logout"                                                                                       // 115
    }, HTML.CharRef({                                                                                                  // 116
      html: "&nbsp;",                                                                                                  // 117
      str: " "                                                                                                         // 118
    })), "\n		"), "\n	" ];                                                                                             // 119
  }, function() {                                                                                                      // 120
    return [ "\n		\n		", HTML.DIV({                                                                                    // 121
      "class": "login-buttons-padding"                                                                                 // 122
    }), "\n	" ];                                                                                                       // 123
  });                                                                                                                  // 124
}));                                                                                                                   // 125
                                                                                                                       // 126
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian:accounts-ui-bootstrap-3/template.login_buttons_single.js                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("_loginButtonsLoggedOutSingleLoginButton");                                                       // 2
Template["_loginButtonsLoggedOutSingleLoginButton"] = new Template("Template._loginButtonsLoggedOutSingleLoginButton", (function() {
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": "navbar-form"                                                                                             // 6
  }, "\n		", Blaze.If(function() {                                                                                     // 7
    return Spacebars.call(view.lookup("configured"));                                                                  // 8
  }, function() {                                                                                                      // 9
    return [ "\n			", HTML.BUTTON({                                                                                    // 10
      "class": function() {                                                                                            // 11
        return [ "login-button btn btn-block btn-", Spacebars.mustache(view.lookup("capitalizedName")) ];              // 12
      }                                                                                                                // 13
    }, Blaze.View(function() {                                                                                         // 14
      return Spacebars.mustache(view.lookup("i18n"), "loginButtonsLoggedOutSingleLoginButton.signInWith");             // 15
    }), " ", Blaze.View(function() {                                                                                   // 16
      return Spacebars.mustache(view.lookup("capitalizedName"));                                                       // 17
    })), "\n		" ];                                                                                                     // 18
  }, function() {                                                                                                      // 19
    return [ "\n			", HTML.BUTTON({                                                                                    // 20
      "class": "login-button btn btn-block configure-button btn-danger"                                                // 21
    }, Blaze.View(function() {                                                                                         // 22
      return Spacebars.mustache(view.lookup("i18n"), "loginButtonsLoggedOutSingleLoginButton.configure");              // 23
    }), " ", Blaze.View(function() {                                                                                   // 24
      return Spacebars.mustache(view.lookup("capitalizedName"));                                                       // 25
    })), "\n		" ];                                                                                                     // 26
  }), "\n	");                                                                                                          // 27
}));                                                                                                                   // 28
                                                                                                                       // 29
Template.__checkName("_loginButtonsLoggingInSingleLoginButton");                                                       // 30
Template["_loginButtonsLoggingInSingleLoginButton"] = new Template("Template._loginButtonsLoggingInSingleLoginButton", (function() {
  var view = this;                                                                                                     // 32
  return HTML.DIV({                                                                                                    // 33
    "class": "login-text-and-button"                                                                                   // 34
  }, "\n		", Spacebars.include(view.lookupTemplate("_loginButtonsLoggingIn")), "\n	");                                 // 35
}));                                                                                                                   // 36
                                                                                                                       // 37
Template.__checkName("_loginButtonsLoggedInSingleLogoutButton");                                                       // 38
Template["_loginButtonsLoggedInSingleLogoutButton"] = new Template("Template._loginButtonsLoggedInSingleLogoutButton", (function() {
  var view = this;                                                                                                     // 40
  return HTML.LI("\n		", HTML.A({                                                                                      // 41
    href: "#",                                                                                                         // 42
    id: "login-buttons-logout"                                                                                         // 43
  }, Blaze.View(function() {                                                                                           // 44
    return Spacebars.mustache(view.lookup("displayName"));                                                             // 45
  }), " ", Blaze.View(function() {                                                                                     // 46
    return Spacebars.mustache(view.lookup("i18n"), "loginButtonsLoggedInSingleLogoutButton.signOut");                  // 47
  })), "\n	");                                                                                                         // 48
}));                                                                                                                   // 49
                                                                                                                       // 50
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian:accounts-ui-bootstrap-3/template.login_buttons_dropdown.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("_loginButtonsLoggedInDropdown");                                                                 // 2
Template["_loginButtonsLoggedInDropdown"] = new Template("Template._loginButtonsLoggedInDropdown", (function() {       // 3
  var view = this;                                                                                                     // 4
  return HTML.LI({                                                                                                     // 5
    id: "login-dropdown-list",                                                                                         // 6
    "class": "dropdown"                                                                                                // 7
  }, "\n		", HTML.A({                                                                                                  // 8
    "class": "dropdown-toggle",                                                                                        // 9
    "data-toggle": "dropdown"                                                                                          // 10
  }, "\n			", Blaze.View(function() {                                                                                  // 11
    return Spacebars.mustache(view.lookup("displayName"));                                                             // 12
  }), "\n			", Spacebars.With(function() {                                                                             // 13
    return Spacebars.call(view.lookup("user_profile_picture"));                                                        // 14
  }, function() {                                                                                                      // 15
    return [ "\n				", HTML.IMG({                                                                                      // 16
      src: function() {                                                                                                // 17
        return Spacebars.mustache(view.lookup("."));                                                                   // 18
      },                                                                                                               // 19
      width: "30px",                                                                                                   // 20
      "class": "img-circular",                                                                                         // 21
      alt: "#"                                                                                                         // 22
    }), "\n			" ];                                                                                                     // 23
  }), "\n			", HTML.Raw('<b class="caret"></b>'), "\n		"), "\n		", HTML.DIV({                                          // 24
    "class": "dropdown-menu col-sm-3"                                                                                  // 25
  }, "\n			", Blaze.If(function() {                                                                                    // 26
    return Spacebars.call(view.lookup("inMessageOnlyFlow"));                                                           // 27
  }, function() {                                                                                                      // 28
    return [ "\n				", Spacebars.include(view.lookupTemplate("_loginButtonsMessages")), "\n			" ];                     // 29
  }, function() {                                                                                                      // 30
    return [ "\n				", Blaze.If(function() {                                                                           // 31
      return Spacebars.call(view.lookup("inChangePasswordFlow"));                                                      // 32
    }, function() {                                                                                                    // 33
      return [ "\n					", Spacebars.include(view.lookupTemplate("_loginButtonsChangePassword")), "\n				" ];           // 34
    }, function() {                                                                                                    // 35
      return [ "\n					", Spacebars.include(view.lookupTemplate("_loginButtonsLoggedInDropdownActions")), "\n				" ];  // 36
    }), "\n			" ];                                                                                                     // 37
  }), "\n		"), "\n	");                                                                                                 // 38
}));                                                                                                                   // 39
                                                                                                                       // 40
Template.__checkName("_loginButtonsLoggedInDropdownActions");                                                          // 41
Template["_loginButtonsLoggedInDropdownActions"] = new Template("Template._loginButtonsLoggedInDropdownActions", (function() {
  var view = this;                                                                                                     // 43
  return [ Blaze.If(function() {                                                                                       // 44
    return Spacebars.call(view.lookup("additionalLoggedInDropdownActions"));                                           // 45
  }, function() {                                                                                                      // 46
    return [ "\n		", Spacebars.include(view.lookupTemplate("_loginButtonsAdditionalLoggedInDropdownActions")), "\n	" ];
  }), "\n\n	", Blaze.If(function() {                                                                                   // 48
    return Spacebars.call(view.lookup("allowChangingPassword"));                                                       // 49
  }, function() {                                                                                                      // 50
    return [ "\n		", HTML.BUTTON({                                                                                     // 51
      "class": "btn btn-default btn-block",                                                                            // 52
      id: "login-buttons-open-change-password"                                                                         // 53
    }, Blaze.View(function() {                                                                                         // 54
      return Spacebars.mustache(view.lookup("i18n"), "loginButtonsLoggedInDropdownActions.password");                  // 55
    })), "\n	" ];                                                                                                      // 56
  }), "\n\n	", HTML.BUTTON({                                                                                           // 57
    "class": "btn btn-block btn-primary",                                                                              // 58
    id: "login-buttons-logout"                                                                                         // 59
  }, Blaze.View(function() {                                                                                           // 60
    return Spacebars.mustache(view.lookup("i18n"), "loginButtonsLoggedInDropdownActions.signOut");                     // 61
  })) ];                                                                                                               // 62
}));                                                                                                                   // 63
                                                                                                                       // 64
Template.__checkName("_loginButtonsLoggedOutDropdown");                                                                // 65
Template["_loginButtonsLoggedOutDropdown"] = new Template("Template._loginButtonsLoggedOutDropdown", (function() {     // 66
  var view = this;                                                                                                     // 67
  return HTML.LI({                                                                                                     // 68
    id: "login-dropdown-list",                                                                                         // 69
    "class": "dropdown"                                                                                                // 70
  }, "\n		", HTML.A({                                                                                                  // 71
    "class": "dropdown-toggle",                                                                                        // 72
    "data-toggle": "dropdown"                                                                                          // 73
  }, Blaze.View(function() {                                                                                           // 74
    return Spacebars.mustache(view.lookup("i18n"), "loginButtonsLoggedOutDropdown.signIn");                            // 75
  }), Blaze.Unless(function() {                                                                                        // 76
    return Spacebars.call(view.lookup("forbidClientAccountCreation"));                                                 // 77
  }, function() {                                                                                                      // 78
    return [ " / ", Blaze.View(function() {                                                                            // 79
      return Spacebars.mustache(view.lookup("i18n"), "loginButtonsLoggedOutDropdown.up");                              // 80
    }) ];                                                                                                              // 81
  }), " ", HTML.Raw('<b class="caret"></b>')), "\n		", HTML.DIV({                                                      // 82
    "class": "dropdown-menu"                                                                                           // 83
  }, "\n			", Spacebars.include(view.lookupTemplate("_loginButtonsLoggedOutAllServices")), "\n		"), "\n	");            // 84
}));                                                                                                                   // 85
                                                                                                                       // 86
Template.__checkName("_loginButtonsLoggedOutAllServices");                                                             // 87
Template["_loginButtonsLoggedOutAllServices"] = new Template("Template._loginButtonsLoggedOutAllServices", (function() {
  var view = this;                                                                                                     // 89
  return Blaze.Each(function() {                                                                                       // 90
    return Spacebars.call(view.lookup("services"));                                                                    // 91
  }, function() {                                                                                                      // 92
    return [ "\n	", Blaze.Unless(function() {                                                                          // 93
      return Spacebars.call(view.lookup("hasPasswordService"));                                                        // 94
    }, function() {                                                                                                    // 95
      return [ "\n		", Spacebars.include(view.lookupTemplate("_loginButtonsMessages")), "\n	" ];                       // 96
    }), "\n		", Blaze.If(function() {                                                                                  // 97
      return Spacebars.call(view.lookup("isPasswordService"));                                                         // 98
    }, function() {                                                                                                    // 99
      return [ "\n			", Blaze.If(function() {                                                                          // 100
        return Spacebars.call(view.lookup("hasOtherServices"));                                                        // 101
      }, function() {                                                                                                  // 102
        return [ " \n				", Spacebars.include(view.lookupTemplate("_loginButtonsLoggedOutPasswordServiceSeparator")), "\n			" ];
      }), "\n			", Spacebars.include(view.lookupTemplate("_loginButtonsLoggedOutPasswordService")), "\n		" ];          // 104
    }, function() {                                                                                                    // 105
      return [ "\n			", Spacebars.include(view.lookupTemplate("_loginButtonsLoggedOutSingleLoginButton")), "\n		" ];   // 106
    }), "\n	" ];                                                                                                       // 107
  });                                                                                                                  // 108
}));                                                                                                                   // 109
                                                                                                                       // 110
Template.__checkName("_loginButtonsLoggedOutPasswordServiceSeparator");                                                // 111
Template["_loginButtonsLoggedOutPasswordServiceSeparator"] = new Template("Template._loginButtonsLoggedOutPasswordServiceSeparator", (function() {
  var view = this;                                                                                                     // 113
  return HTML.DIV({                                                                                                    // 114
    "class": "or"                                                                                                      // 115
  }, HTML.Raw('\n		<span class="hline">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>\n		'), HTML.SPAN({
    "class": "or-text"                                                                                                 // 117
  }, Blaze.View(function() {                                                                                           // 118
    return Spacebars.mustache(view.lookup("i18n"), "loginButtonsLoggedOutPasswordServiceSeparator.or");                // 119
  })), HTML.Raw('\n		<span class="hline">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>\n	'));    // 120
}));                                                                                                                   // 121
                                                                                                                       // 122
Template.__checkName("_loginButtonsLoggedOutPasswordService");                                                         // 123
Template["_loginButtonsLoggedOutPasswordService"] = new Template("Template._loginButtonsLoggedOutPasswordService", (function() {
  var view = this;                                                                                                     // 125
  return Blaze.If(function() {                                                                                         // 126
    return Spacebars.call(view.lookup("inForgotPasswordFlow"));                                                        // 127
  }, function() {                                                                                                      // 128
    return [ "\n		", Spacebars.include(view.lookupTemplate("_forgotPasswordForm")), "\n	" ];                           // 129
  }, function() {                                                                                                      // 130
    return [ "\n		", Spacebars.include(view.lookupTemplate("_loginButtonsMessages")), "\n		", Blaze.Each(function() {  // 131
      return Spacebars.call(view.lookup("fields"));                                                                    // 132
    }, function() {                                                                                                    // 133
      return [ "\n			", Spacebars.include(view.lookupTemplate("_loginButtonsFormField")), "\n		" ];                    // 134
    }), "\n		", HTML.BUTTON({                                                                                          // 135
      "class": "btn btn-primary col-sm-12",                                                                            // 136
      id: "login-buttons-password",                                                                                    // 137
      type: "button"                                                                                                   // 138
    }, "\n			", Blaze.If(function() {                                                                                  // 139
      return Spacebars.call(view.lookup("inSignupFlow"));                                                              // 140
    }, function() {                                                                                                    // 141
      return [ "\n				", Blaze.View(function() {                                                                       // 142
        return Spacebars.mustache(view.lookup("i18n"), "loginButtonsLoggedOutPasswordService.create");                 // 143
      }), "\n			" ];                                                                                                   // 144
    }, function() {                                                                                                    // 145
      return [ "\n				", Blaze.View(function() {                                                                       // 146
        return Spacebars.mustache(view.lookup("i18n"), "loginButtonsLoggedOutPasswordService.signIn");                 // 147
      }), "\n			" ];                                                                                                   // 148
    }), "\n		"), "\n		", Blaze.If(function() {                                                                         // 149
      return Spacebars.call(view.lookup("inLoginFlow"));                                                               // 150
    }, function() {                                                                                                    // 151
      return [ "\n			", HTML.DIV({                                                                                     // 152
        id: "login-other-options"                                                                                      // 153
      }, "\n			", Blaze.If(function() {                                                                                // 154
        return Spacebars.call(view.lookup("showForgotPasswordLink"));                                                  // 155
      }, function() {                                                                                                  // 156
        return [ "\n				", HTML.A({                                                                                    // 157
          id: "forgot-password-link",                                                                                  // 158
          "class": "pull-left"                                                                                         // 159
        }, Blaze.View(function() {                                                                                     // 160
          return Spacebars.mustache(view.lookup("i18n"), "loginButtonsLoggedOutPasswordService.forgot");               // 161
        })), "\n			" ];                                                                                                // 162
      }), "\n			", Blaze.If(function() {                                                                               // 163
        return Spacebars.call(view.lookup("showCreateAccountLink"));                                                   // 164
      }, function() {                                                                                                  // 165
        return [ "\n				", HTML.A({                                                                                    // 166
          id: "signup-link",                                                                                           // 167
          "class": "pull-right"                                                                                        // 168
        }, Blaze.View(function() {                                                                                     // 169
          return Spacebars.mustache(view.lookup("i18n"), "loginButtonsLoggedOutPasswordService.createAcc");            // 170
        })), "\n			" ];                                                                                                // 171
      }), "\n			"), "\n		" ];                                                                                          // 172
    }), "\n		", Blaze.If(function() {                                                                                  // 173
      return Spacebars.call(view.lookup("inSignupFlow"));                                                              // 174
    }, function() {                                                                                                    // 175
      return [ "\n			", Spacebars.include(view.lookupTemplate("_loginButtonsBackToLoginLink")), "\n		" ];              // 176
    }), "\n	" ];                                                                                                       // 177
  });                                                                                                                  // 178
}));                                                                                                                   // 179
                                                                                                                       // 180
Template.__checkName("_forgotPasswordForm");                                                                           // 181
Template["_forgotPasswordForm"] = new Template("Template._forgotPasswordForm", (function() {                           // 182
  var view = this;                                                                                                     // 183
  return HTML.DIV({                                                                                                    // 184
    "class": "login-form"                                                                                              // 185
  }, "\n		", Spacebars.include(view.lookupTemplate("_loginButtonsMessages")), "\n		", HTML.DIV({                       // 186
    id: "forgot-password-email-label-and-input"                                                                        // 187
  }, " \n			", HTML.INPUT({                                                                                            // 188
    id: "forgot-password-email",                                                                                       // 189
    type: "email",                                                                                                     // 190
    placeholder: function() {                                                                                          // 191
      return Spacebars.mustache(view.lookup("i18n"), "forgotPasswordForm.email");                                      // 192
    },                                                                                                                 // 193
    "class": "form-control"                                                                                            // 194
  }), "\n		"), "\n		", HTML.BUTTON({                                                                                   // 195
    "class": "btn btn-primary login-button-form-submit col-sm-12",                                                     // 196
    id: "login-buttons-forgot-password"                                                                                // 197
  }, Blaze.View(function() {                                                                                           // 198
    return Spacebars.mustache(view.lookup("i18n"), "forgotPasswordForm.reset");                                        // 199
  })), "\n		", Spacebars.include(view.lookupTemplate("_loginButtonsBackToLoginLink")), "\n	");                         // 200
}));                                                                                                                   // 201
                                                                                                                       // 202
Template.__checkName("_loginButtonsBackToLoginLink");                                                                  // 203
Template["_loginButtonsBackToLoginLink"] = new Template("Template._loginButtonsBackToLoginLink", (function() {         // 204
  var view = this;                                                                                                     // 205
  return HTML.BUTTON({                                                                                                 // 206
    id: "back-to-login-link",                                                                                          // 207
    "class": "btn btn-default col-sm-12"                                                                               // 208
  }, Blaze.View(function() {                                                                                           // 209
    return Spacebars.mustache(view.lookup("i18n"), "loginButtonsBackToLoginLink.back");                                // 210
  }));                                                                                                                 // 211
}));                                                                                                                   // 212
                                                                                                                       // 213
Template.__checkName("_loginButtonsFormField");                                                                        // 214
Template["_loginButtonsFormField"] = new Template("Template._loginButtonsFormField", (function() {                     // 215
  var view = this;                                                                                                     // 216
  return Blaze.If(function() {                                                                                         // 217
    return Spacebars.call(view.lookup("visible"));                                                                     // 218
  }, function() {                                                                                                      // 219
    return [ "\n		", HTML.INPUT({                                                                                      // 220
      id: function() {                                                                                                 // 221
        return [ "login-", Spacebars.mustache(view.lookup("fieldName")) ];                                             // 222
      },                                                                                                               // 223
      type: function() {                                                                                               // 224
        return Spacebars.mustache(view.lookup("inputType"));                                                           // 225
      },                                                                                                               // 226
      placeholder: function() {                                                                                        // 227
        return Spacebars.mustache(view.lookup("fieldLabel"));                                                          // 228
      },                                                                                                               // 229
      "class": "form-control"                                                                                          // 230
    }), "\n	" ];                                                                                                       // 231
  });                                                                                                                  // 232
}));                                                                                                                   // 233
                                                                                                                       // 234
Template.__checkName("_loginButtonsChangePassword");                                                                   // 235
Template["_loginButtonsChangePassword"] = new Template("Template._loginButtonsChangePassword", (function() {           // 236
  var view = this;                                                                                                     // 237
  return [ Spacebars.include(view.lookupTemplate("_loginButtonsMessages")), "\n	", Blaze.Each(function() {             // 238
    return Spacebars.call(view.lookup("fields"));                                                                      // 239
  }, function() {                                                                                                      // 240
    return [ "\n		", Spacebars.include(view.lookupTemplate("_loginButtonsFormField")), "\n	" ];                        // 241
  }), "\n	", HTML.BUTTON({                                                                                             // 242
    "class": "btn btn-primary",                                                                                        // 243
    id: "login-buttons-do-change-password"                                                                             // 244
  }, Blaze.View(function() {                                                                                           // 245
    return Spacebars.mustache(view.lookup("i18n"), "loginButtonsChangePassword.submit");                               // 246
  })), "\n	", HTML.BUTTON({                                                                                            // 247
    "class": "btn btn-default",                                                                                        // 248
    id: "login-buttons-cancel-change-password"                                                                         // 249
  }, Blaze.View(function() {                                                                                           // 250
    return Spacebars.mustache(view.lookup("i18n"), "loginButtonsChangePassword.cancel");                               // 251
  })) ];                                                                                                               // 252
}));                                                                                                                   // 253
                                                                                                                       // 254
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian:accounts-ui-bootstrap-3/template.login_buttons_dialogs.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.body.addContent((function() {                                                                                 // 2
  var view = this;                                                                                                     // 3
  return [ Spacebars.include(view.lookupTemplate("_resetPasswordDialog")), "\n	", Spacebars.include(view.lookupTemplate("_enrollAccountDialog")), "\n	", Spacebars.include(view.lookupTemplate("_justVerifiedEmailDialog")), "\n	", Spacebars.include(view.lookupTemplate("_configureLoginServiceDialog")), HTML.Raw("\n\n	<!-- if we're not showing a dropdown, we need some other place to show messages -->\n	"), Spacebars.include(view.lookupTemplate("_loginButtonsMessagesDialog")) ];
}));                                                                                                                   // 5
Meteor.startup(Template.body.renderToDocument);                                                                        // 6
                                                                                                                       // 7
Template.__checkName("_resetPasswordDialog");                                                                          // 8
Template["_resetPasswordDialog"] = new Template("Template._resetPasswordDialog", (function() {                         // 9
  var view = this;                                                                                                     // 10
  return Blaze.If(function() {                                                                                         // 11
    return Spacebars.call(view.lookup("inResetPasswordFlow"));                                                         // 12
  }, function() {                                                                                                      // 13
    return [ "\n		", HTML.DIV({                                                                                        // 14
      "class": "modal",                                                                                                // 15
      id: "login-buttons-reset-password-modal"                                                                         // 16
    }, "\n			", HTML.DIV({                                                                                             // 17
      "class": "modal-dialog"                                                                                          // 18
    }, "\n				", HTML.DIV({                                                                                            // 19
      "class": "modal-content"                                                                                         // 20
    }, "\n					", HTML.DIV({                                                                                           // 21
      "class": "modal-header"                                                                                          // 22
    }, "\n						", HTML.BUTTON({                                                                                       // 23
      type: "button",                                                                                                  // 24
      "class": "close",                                                                                                // 25
      "data-dismiss": "modal",                                                                                         // 26
      "aria-hidden": "true"                                                                                            // 27
    }, HTML.CharRef({                                                                                                  // 28
      html: "&times;",                                                                                                 // 29
      str: "×"                                                                                                         // 30
    })), "\n						", HTML.H4({                                                                                         // 31
      "class": "modal-title"                                                                                           // 32
    }, Blaze.View(function() {                                                                                         // 33
      return Spacebars.mustache(view.lookup("i18n"), "resetPasswordDialog.title");                                     // 34
    })), "\n					"), "\n					", HTML.DIV({                                                                             // 35
      "class": "modal-body"                                                                                            // 36
    }, "\n						", HTML.INPUT({                                                                                        // 37
      id: "reset-password-new-password",                                                                               // 38
      "class": "form-control",                                                                                         // 39
      type: "password",                                                                                                // 40
      placeholder: function() {                                                                                        // 41
        return Spacebars.mustache(view.lookup("i18n"), "resetPasswordDialog.newPassword");                             // 42
      }                                                                                                                // 43
    }), "\n						", Spacebars.include(view.lookupTemplate("_loginButtonsMessages")), "\n					"), "\n					", HTML.DIV({ // 44
      "class": "modal-footer"                                                                                          // 45
    }, "\n						", HTML.A({                                                                                            // 46
      "class": "btn btn-default",                                                                                      // 47
      id: "login-buttons-cancel-reset-password"                                                                        // 48
    }, Blaze.View(function() {                                                                                         // 49
      return Spacebars.mustache(view.lookup("i18n"), "resetPasswordDialog.cancel");                                    // 50
    })), "\n						", HTML.BUTTON({                                                                                     // 51
      "class": "btn btn-primary",                                                                                      // 52
      id: "login-buttons-reset-password-button"                                                                        // 53
    }, "\n							", Blaze.View(function() {                                                                            // 54
      return Spacebars.mustache(view.lookup("i18n"), "resetPasswordDialog.submit");                                    // 55
    }), "\n						"), "\n					"), "\n				"), HTML.Comment(" /.modal-content "), "\n			"), HTML.Comment(" /.modal-dalog "), "\n		"), HTML.Comment(" /.modal "), "\n	" ];
  });                                                                                                                  // 57
}));                                                                                                                   // 58
                                                                                                                       // 59
Template.__checkName("_enrollAccountDialog");                                                                          // 60
Template["_enrollAccountDialog"] = new Template("Template._enrollAccountDialog", (function() {                         // 61
  var view = this;                                                                                                     // 62
  return Blaze.If(function() {                                                                                         // 63
    return Spacebars.call(view.lookup("inEnrollAccountFlow"));                                                         // 64
  }, function() {                                                                                                      // 65
    return [ "\n		", HTML.DIV({                                                                                        // 66
      "class": "modal",                                                                                                // 67
      id: "login-buttons-enroll-account-modal"                                                                         // 68
    }, "\n			", HTML.DIV({                                                                                             // 69
      "class": "modal-dialog"                                                                                          // 70
    }, "\n				", HTML.DIV({                                                                                            // 71
      "class": "modal-content"                                                                                         // 72
    }, "\n					", HTML.DIV({                                                                                           // 73
      "class": "modal-header"                                                                                          // 74
    }, "\n						", HTML.BUTTON({                                                                                       // 75
      type: "button",                                                                                                  // 76
      "class": "close",                                                                                                // 77
      "data-dismiss": "modal",                                                                                         // 78
      "aria-hidden": "true"                                                                                            // 79
    }, HTML.CharRef({                                                                                                  // 80
      html: "&times;",                                                                                                 // 81
      str: "×"                                                                                                         // 82
    })), "\n						", HTML.H4({                                                                                         // 83
      "class": "modal-title"                                                                                           // 84
    }, Blaze.View(function() {                                                                                         // 85
      return Spacebars.mustache(view.lookup("i18n"), "enrollAccountDialog.title");                                     // 86
    })), "\n					"), "\n					", HTML.DIV({                                                                             // 87
      "class": "modal-body"                                                                                            // 88
    }, "\n						", HTML.INPUT({                                                                                        // 89
      id: "enroll-account-password",                                                                                   // 90
      "class": "form-control",                                                                                         // 91
      type: "password",                                                                                                // 92
      placeholder: function() {                                                                                        // 93
        return Spacebars.mustache(view.lookup("i18n"), "enrollAccountDialog.newPassword");                             // 94
      }                                                                                                                // 95
    }), "\n						", Spacebars.include(view.lookupTemplate("_loginButtonsMessages")), "\n					"), "\n					", HTML.DIV({ // 96
      "class": "modal-footer"                                                                                          // 97
    }, "\n						", HTML.A({                                                                                            // 98
      "class": "btn btn-default",                                                                                      // 99
      id: "login-buttons-cancel-enroll-account-button"                                                                 // 100
    }, Blaze.View(function() {                                                                                         // 101
      return Spacebars.mustache(view.lookup("i18n"), "enrollAccountDialog.cancel");                                    // 102
    })), "\n						", HTML.BUTTON({                                                                                     // 103
      "class": "btn btn-primary",                                                                                      // 104
      id: "login-buttons-enroll-account-button"                                                                        // 105
    }, "\n							", Blaze.View(function() {                                                                            // 106
      return Spacebars.mustache(view.lookup("i18n"), "enrollAccountDialog.submit");                                    // 107
    }), "\n						"), "\n					"), "\n				"), HTML.Comment(" /.modal-content "), "\n			"), HTML.Comment(" /.modal-dalog "), "\n		"), HTML.Comment(" /.modal "), "\n	" ];
  });                                                                                                                  // 109
}));                                                                                                                   // 110
                                                                                                                       // 111
Template.__checkName("_justVerifiedEmailDialog");                                                                      // 112
Template["_justVerifiedEmailDialog"] = new Template("Template._justVerifiedEmailDialog", (function() {                 // 113
  var view = this;                                                                                                     // 114
  return Blaze.If(function() {                                                                                         // 115
    return Spacebars.call(view.lookup("visible"));                                                                     // 116
  }, function() {                                                                                                      // 117
    return [ "\n		", HTML.DIV({                                                                                        // 118
      "class": "modal",                                                                                                // 119
      id: "login-buttons-email-address-verified-modal"                                                                 // 120
    }, "\n			", HTML.DIV({                                                                                             // 121
      "class": "modal-dialog"                                                                                          // 122
    }, "\n				", HTML.DIV({                                                                                            // 123
      "class": "modal-content"                                                                                         // 124
    }, "\n					", HTML.DIV({                                                                                           // 125
      "class": "modal-body"                                                                                            // 126
    }, "\n						", HTML.H4(HTML.B(Blaze.View(function() {                                                              // 127
      return Spacebars.mustache(view.lookup("i18n"), "justVerifiedEmailDialog.verified");                              // 128
    }))), "\n					"), "\n					", HTML.DIV({                                                                            // 129
      "class": "modal-footer"                                                                                          // 130
    }, "\n						", HTML.BUTTON({                                                                                       // 131
      "class": "btn btn-info login-button",                                                                            // 132
      id: "just-verified-dismiss-button",                                                                              // 133
      "data-dismiss": "modal"                                                                                          // 134
    }, Blaze.View(function() {                                                                                         // 135
      return Spacebars.mustache(view.lookup("i18n"), "justVerifiedEmailDialog.dismiss");                               // 136
    })), "\n					"), "\n				"), "\n			"), "\n		"), "\n	" ];                                                            // 137
  });                                                                                                                  // 138
}));                                                                                                                   // 139
                                                                                                                       // 140
Template.__checkName("_configureLoginServiceDialog");                                                                  // 141
Template["_configureLoginServiceDialog"] = new Template("Template._configureLoginServiceDialog", (function() {         // 142
  var view = this;                                                                                                     // 143
  return Blaze.If(function() {                                                                                         // 144
    return Spacebars.call(view.lookup("visible"));                                                                     // 145
  }, function() {                                                                                                      // 146
    return [ "\n	", HTML.DIV({                                                                                         // 147
      "class": "modal",                                                                                                // 148
      id: "configure-login-service-dialog-modal"                                                                       // 149
    }, "\n			", HTML.DIV({                                                                                             // 150
      "class": "modal-dialog"                                                                                          // 151
    }, "\n					", HTML.DIV({                                                                                           // 152
      "class": "modal-content"                                                                                         // 153
    }, "\n							", HTML.DIV({                                                                                         // 154
      "class": "modal-header"                                                                                          // 155
    }, "\n									", HTML.H4({                                                                                        // 156
      "class": "modal-title"                                                                                           // 157
    }, "Configure Service"), "\n							"), "\n							", HTML.DIV({                                                     // 158
      "class": "modal-body"                                                                                            // 159
    }, "\n									", HTML.DIV({                                                                                       // 160
      id: "configure-login-service-dialog",                                                                            // 161
      "class": "accounts-dialog accounts-centered-dialog"                                                              // 162
    }, "\n											", Spacebars.include(view.lookupTemplate("configurationSteps")), "\n											", HTML.P("\n											Now, copy over some details.\n											"), "\n											", HTML.P("\n											", HTML.TABLE("\n													", HTML.COLGROUP("\n															", HTML.COL({
      span: "1",                                                                                                       // 164
      "class": "configuration_labels"                                                                                  // 165
    }), "\n															", HTML.COL({                                                                                // 166
      span: "1",                                                                                                       // 167
      "class": "configuration_inputs"                                                                                  // 168
    }), "\n													"), "\n													", Blaze.Each(function() {                                                 // 169
      return Spacebars.call(view.lookup("configurationFields"));                                                       // 170
    }, function() {                                                                                                    // 171
      return [ "\n													", HTML.TR("\n															", HTML.TD("\n																	", HTML.LABEL({             // 172
        "for": function() {                                                                                            // 173
          return [ "configure-login-service-dialog-", Spacebars.mustache(view.lookup("property")) ];                   // 174
        }                                                                                                              // 175
      }, Blaze.View(function() {                                                                                       // 176
        return Spacebars.mustache(view.lookup("label"));                                                               // 177
      })), "\n															"), "\n															", HTML.TD("\n																	", HTML.INPUT({                      // 178
        id: function() {                                                                                               // 179
          return [ "configure-login-service-dialog-", Spacebars.mustache(view.lookup("property")) ];                   // 180
        },                                                                                                             // 181
        type: "text"                                                                                                   // 182
      }), "\n															"), "\n													"), "\n													" ];                                               // 183
    }), "\n											"), "\n											"), "\n									"), "\n							"), "\n							", HTML.DIV({                      // 184
      "class": "modal-footer new-section"                                                                              // 185
    }, "\n									", HTML.DIV({                                                                                       // 186
      "class": "login-button btn btn-danger configure-login-service-dismiss-button"                                    // 187
    }, "\n											I'll do this later\n									"), "\n									", HTML.DIV({                                        // 188
      "class": function() {                                                                                            // 189
        return [ "login-button login-button-configure btn btn-success ", Blaze.If(function() {                         // 190
          return Spacebars.call(view.lookup("saveDisabled"));                                                          // 191
        }, function() {                                                                                                // 192
          return "login-button-disabled";                                                                              // 193
        }) ];                                                                                                          // 194
      },                                                                                                               // 195
      id: "configure-login-service-dialog-save-configuration"                                                          // 196
    }, "\n											Save Configuration\n									"), "\n							"), "\n					"), "\n			"), "\n	"), "\n	" ];             // 197
  });                                                                                                                  // 198
}));                                                                                                                   // 199
                                                                                                                       // 200
Template.__checkName("_loginButtonsMessagesDialog");                                                                   // 201
Template["_loginButtonsMessagesDialog"] = new Template("Template._loginButtonsMessagesDialog", (function() {           // 202
  var view = this;                                                                                                     // 203
  return Blaze.If(function() {                                                                                         // 204
    return Spacebars.call(view.lookup("visible"));                                                                     // 205
  }, function() {                                                                                                      // 206
    return [ "\n		", HTML.DIV({                                                                                        // 207
      "class": "accounts-dialog accounts-centered-dialog",                                                             // 208
      id: "login-buttons-message-dialog"                                                                               // 209
    }, "\n			", Spacebars.include(view.lookupTemplate("_loginButtonsMessages")), "\n			", HTML.DIV({                   // 210
      "class": "login-button",                                                                                         // 211
      id: "messages-dialog-dismiss-button"                                                                             // 212
    }, Blaze.View(function() {                                                                                         // 213
      return Spacebars.mustache(view.lookup("i18n"), "loginButtonsMessagesDialog.dismiss");                            // 214
    })), "\n		"), "\n	" ];                                                                                             // 215
  });                                                                                                                  // 216
}));                                                                                                                   // 217
                                                                                                                       // 218
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian:accounts-ui-bootstrap-3/login_buttons_session.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function () {                                                                                                         // 1
	var VALID_KEYS = [                                                                                                    // 2
		'dropdownVisible',                                                                                                   // 3
                                                                                                                       // 4
		// XXX consider replacing these with one key that has an enum for values.                                            // 5
		'inSignupFlow',                                                                                                      // 6
		'inForgotPasswordFlow',                                                                                              // 7
		'inChangePasswordFlow',                                                                                              // 8
		'inMessageOnlyFlow',                                                                                                 // 9
                                                                                                                       // 10
		'errorMessage',                                                                                                      // 11
		'infoMessage',                                                                                                       // 12
                                                                                                                       // 13
		// dialogs with messages (info and error)                                                                            // 14
		'resetPasswordToken',                                                                                                // 15
		'enrollAccountToken',                                                                                                // 16
		'justVerifiedEmail',                                                                                                 // 17
                                                                                                                       // 18
		'configureLoginServiceDialogVisible',                                                                                // 19
		'configureLoginServiceDialogServiceName',                                                                            // 20
		'configureLoginServiceDialogSaveDisabled'                                                                            // 21
	];                                                                                                                    // 22
                                                                                                                       // 23
	var validateKey = function (key) {                                                                                    // 24
		if (!_.contains(VALID_KEYS, key))                                                                                    // 25
			throw new Error("Invalid key in loginButtonsSession: " + key);                                                      // 26
	};                                                                                                                    // 27
                                                                                                                       // 28
	var KEY_PREFIX = "Meteor.loginButtons.";                                                                              // 29
                                                                                                                       // 30
	// XXX we should have a better pattern for code private to a package like this one                                    // 31
	Accounts._loginButtonsSession = {                                                                                     // 32
		set: function(key, value) {                                                                                          // 33
			validateKey(key);                                                                                                   // 34
			if (_.contains(['errorMessage', 'infoMessage'], key))                                                               // 35
				throw new Error("Don't set errorMessage or infoMessage directly. Instead, use errorMessage() or infoMessage().");  // 36
                                                                                                                       // 37
			this._set(key, value);                                                                                              // 38
		},                                                                                                                   // 39
                                                                                                                       // 40
		_set: function(key, value) {                                                                                         // 41
			Session.set(KEY_PREFIX + key, value);                                                                               // 42
		},                                                                                                                   // 43
                                                                                                                       // 44
		get: function(key) {                                                                                                 // 45
			validateKey(key);                                                                                                   // 46
			return Session.get(KEY_PREFIX + key);                                                                               // 47
		},                                                                                                                   // 48
                                                                                                                       // 49
		closeDropdown: function () {                                                                                         // 50
			this.set('inSignupFlow', false);                                                                                    // 51
			this.set('inForgotPasswordFlow', false);                                                                            // 52
			this.set('inChangePasswordFlow', false);                                                                            // 53
			this.set('inMessageOnlyFlow', false);                                                                               // 54
			this.set('dropdownVisible', false);                                                                                 // 55
			this.resetMessages();                                                                                               // 56
		},                                                                                                                   // 57
                                                                                                                       // 58
		infoMessage: function(message) {                                                                                     // 59
			this._set("errorMessage", null);                                                                                    // 60
			this._set("infoMessage", message);                                                                                  // 61
			this.ensureMessageVisible();                                                                                        // 62
		},                                                                                                                   // 63
                                                                                                                       // 64
		errorMessage: function(message) {                                                                                    // 65
			this._set("errorMessage", message);                                                                                 // 66
			this._set("infoMessage", null);                                                                                     // 67
			this.ensureMessageVisible();                                                                                        // 68
		},                                                                                                                   // 69
                                                                                                                       // 70
		// is there a visible dialog that shows messages (info and error)                                                    // 71
		isMessageDialogVisible: function () {                                                                                // 72
			return this.get('resetPasswordToken') ||                                                                            // 73
				this.get('enrollAccountToken') ||                                                                                  // 74
				this.get('justVerifiedEmail');                                                                                     // 75
		},                                                                                                                   // 76
                                                                                                                       // 77
		// ensure that somethings displaying a message (info or error) is                                                    // 78
		// visible.  if a dialog with messages is open, do nothing;                                                          // 79
		// otherwise open the dropdown.                                                                                      // 80
		//                                                                                                                   // 81
		// notably this doesn't matter when only displaying a single login                                                   // 82
		// button since then we have an explicit message dialog                                                              // 83
		// (_loginButtonsMessageDialog), and dropdownVisible is ignored in                                                   // 84
		// this case.                                                                                                        // 85
		ensureMessageVisible: function () {                                                                                  // 86
			if (!this.isMessageDialogVisible())                                                                                 // 87
				this.set("dropdownVisible", true);                                                                                 // 88
		},                                                                                                                   // 89
                                                                                                                       // 90
		resetMessages: function () {                                                                                         // 91
			this._set("errorMessage", null);                                                                                    // 92
			this._set("infoMessage", null);                                                                                     // 93
		},                                                                                                                   // 94
                                                                                                                       // 95
		configureService: function (name) {                                                                                  // 96
			this.set('configureLoginServiceDialogVisible', true);                                                               // 97
			this.set('configureLoginServiceDialogServiceName', name);                                                           // 98
			this.set('configureLoginServiceDialogSaveDisabled', true);                                                          // 99
			setTimeout(function(){                                                                                              // 100
				$('#configure-login-service-dialog-modal').modal();                                                                // 101
			}, 500)                                                                                                             // 102
		}                                                                                                                    // 103
	};                                                                                                                    // 104
}) ();                                                                                                                 // 105
                                                                                                                       // 106
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian:accounts-ui-bootstrap-3/login_buttons.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function() {                                                                                                          // 1
	if (!Accounts._loginButtons)                                                                                          // 2
		Accounts._loginButtons = {};                                                                                         // 3
                                                                                                                       // 4
	// for convenience                                                                                                    // 5
	var loginButtonsSession = Accounts._loginButtonsSession;                                                              // 6
                                                                                                                       // 7
	UI.registerHelper("loginButtons", function() {                                                                        // 8
		return Template._loginButtons;                                                                                       // 9
	});                                                                                                                   // 10
                                                                                                                       // 11
	// shared between dropdown and single mode                                                                            // 12
	Template._loginButtons.events({                                                                                       // 13
		'click #login-buttons-logout': function() {                                                                          // 14
			Meteor.logout(function() {                                                                                          // 15
				loginButtonsSession.closeDropdown();                                                                               // 16
			});                                                                                                                 // 17
		}                                                                                                                    // 18
	});                                                                                                                   // 19
                                                                                                                       // 20
	//                                                                                                                    // 21
	// loginButtonLoggedOut template                                                                                      // 22
	//                                                                                                                    // 23
	Template._loginButtonsLoggedOut.helpers({                                                                             // 24
		dropdown: function() {                                                                                               // 25
			return Accounts._loginButtons.dropdown();                                                                           // 26
		},                                                                                                                   // 27
		services: function() {                                                                                               // 28
			return Accounts._loginButtons.getLoginServices();                                                                   // 29
		},                                                                                                                   // 30
		singleService: function() {                                                                                          // 31
			var services = Accounts._loginButtons.getLoginServices();                                                           // 32
			if (services.length !== 1)                                                                                          // 33
				throw new Error(                                                                                                   // 34
					"Shouldn't be rendering this template with more than one configured service");                                    // 35
			return services[0];                                                                                                 // 36
		},                                                                                                                   // 37
		configurationLoaded: function() {                                                                                    // 38
			return Accounts.loginServicesConfigured();                                                                          // 39
		}                                                                                                                    // 40
	});                                                                                                                   // 41
                                                                                                                       // 42
                                                                                                                       // 43
                                                                                                                       // 44
	//                                                                                                                    // 45
	// loginButtonsLoggedIn template                                                                                      // 46
	//                                                                                                                    // 47
                                                                                                                       // 48
	// decide whether we should show a dropdown rather than a row of                                                      // 49
	// buttons                                                                                                            // 50
	Template._loginButtonsLoggedIn.helpers({                                                                              // 51
		dropdown: function() {                                                                                               // 52
			return Accounts._loginButtons.dropdown();                                                                           // 53
		},                                                                                                                   // 54
		displayName: function() {                                                                                            // 55
			return Accounts._loginButtons.displayName();                                                                        // 56
		}                                                                                                                    // 57
	})                                                                                                                    // 58
                                                                                                                       // 59
                                                                                                                       // 60
                                                                                                                       // 61
	//                                                                                                                    // 62
	// loginButtonsMessage template                                                                                       // 63
	//                                                                                                                    // 64
                                                                                                                       // 65
	Template._loginButtonsMessages.helpers({                                                                              // 66
		errorMessage: function() {                                                                                           // 67
			return loginButtonsSession.get('errorMessage');                                                                     // 68
		},                                                                                                                   // 69
		infoMessage: function() {                                                                                            // 70
			return loginButtonsSession.get('infoMessage');                                                                      // 71
		}                                                                                                                    // 72
	});                                                                                                                   // 73
                                                                                                                       // 74
                                                                                                                       // 75
                                                                                                                       // 76
	//                                                                                                                    // 77
	// loginButtonsLoggingInPadding template                                                                              // 78
	//                                                                                                                    // 79
                                                                                                                       // 80
                                                                                                                       // 81
	Template._loginButtonsLoggingInPadding.helpers({                                                                      // 82
		dropdown: function() {                                                                                               // 83
			return Accounts._loginButtons.dropdown();                                                                           // 84
		}                                                                                                                    // 85
	});                                                                                                                   // 86
                                                                                                                       // 87
	//                                                                                                                    // 88
	// helpers                                                                                                            // 89
	//                                                                                                                    // 90
                                                                                                                       // 91
	Accounts._loginButtons.displayName = function() {                                                                     // 92
		var user = Meteor.user();                                                                                            // 93
		if (!user)                                                                                                           // 94
			return '';                                                                                                          // 95
                                                                                                                       // 96
		if (user.profile && user.profile.name)                                                                               // 97
			return user.profile.name;                                                                                           // 98
		if (user.username)                                                                                                   // 99
			return user.username;                                                                                               // 100
		if (user.emails && user.emails[0] && user.emails[0].address)                                                         // 101
			return user.emails[0].address;                                                                                      // 102
                                                                                                                       // 103
		return '';                                                                                                           // 104
	};                                                                                                                    // 105
                                                                                                                       // 106
	Accounts._loginButtons.getLoginServices = function() {                                                                // 107
		// First look for OAuth services.                                                                                    // 108
		var services = Package['accounts-oauth'] ? Accounts.oauth.serviceNames() : [];                                       // 109
                                                                                                                       // 110
		// Be equally kind to all login services. This also preserves                                                        // 111
		// backwards-compatibility. (But maybe order should be                                                               // 112
		// configurable?)                                                                                                    // 113
		services.sort();                                                                                                     // 114
                                                                                                                       // 115
		// Add password, if it's there; it must come last.                                                                   // 116
		if (this.hasPasswordService())                                                                                       // 117
			services.push('password');                                                                                          // 118
                                                                                                                       // 119
		return _.map(services, function(name) {                                                                              // 120
			return {                                                                                                            // 121
				name: name                                                                                                         // 122
			};                                                                                                                  // 123
		});                                                                                                                  // 124
	};                                                                                                                    // 125
                                                                                                                       // 126
	Accounts._loginButtons.hasPasswordService = function() {                                                              // 127
		return !!Package['accounts-password'];                                                                               // 128
	};                                                                                                                    // 129
                                                                                                                       // 130
	Accounts._loginButtons.dropdown = function() {                                                                        // 131
		return this.hasPasswordService() || Accounts._loginButtons.getLoginServices().length > 1;                            // 132
	};                                                                                                                    // 133
                                                                                                                       // 134
	// XXX improve these. should this be in accounts-password instead?                                                    // 135
	//                                                                                                                    // 136
	// XXX these will become configurable, and will be validated on                                                       // 137
	// the server as well.                                                                                                // 138
	Accounts._loginButtons.validateUsername = function(username) {                                                        // 139
		if (username.length >= 3) {                                                                                          // 140
			return true;                                                                                                        // 141
		} else {                                                                                                             // 142
			loginButtonsSession.errorMessage(i18n('errorMessages.usernameTooShort'));                                           // 143
			return false;                                                                                                       // 144
		}                                                                                                                    // 145
	};                                                                                                                    // 146
	Accounts._loginButtons.validateEmail = function(email) {                                                              // 147
		if (Accounts.ui._passwordSignupFields() === "USERNAME_AND_OPTIONAL_EMAIL" && email === '')                           // 148
			return true;                                                                                                        // 149
                                                                                                                       // 150
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                                                                                                                       // 152
		if (re.test(email)) {                                                                                                // 153
			return true;                                                                                                        // 154
		} else {                                                                                                             // 155
			loginButtonsSession.errorMessage(i18n('errorMessages.invalidEmail'));                                               // 156
			return false;                                                                                                       // 157
		}                                                                                                                    // 158
	};                                                                                                                    // 159
	Accounts._loginButtons.validatePassword = function(password) {                                                        // 160
		if (password.length >= 6) {                                                                                          // 161
			return true;                                                                                                        // 162
		} else {                                                                                                             // 163
			loginButtonsSession.errorMessage(i18n('errorMessages.passwordTooShort'));                                           // 164
			return false;                                                                                                       // 165
		}                                                                                                                    // 166
	};                                                                                                                    // 167
                                                                                                                       // 168
	Accounts._loginButtons.rendered = function() {                                                                        // 169
		debugger;                                                                                                            // 170
	};                                                                                                                    // 171
                                                                                                                       // 172
})();                                                                                                                  // 173
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian:accounts-ui-bootstrap-3/login_buttons_single.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function() {                                                                                                          // 1
	// for convenience                                                                                                    // 2
	var loginButtonsSession = Accounts._loginButtonsSession;                                                              // 3
                                                                                                                       // 4
	Template._loginButtonsLoggedOutSingleLoginButton.events({                                                             // 5
		'click .login-button': function() {                                                                                  // 6
			var serviceName = this.name;                                                                                        // 7
			loginButtonsSession.resetMessages();                                                                                // 8
			var callback = function(err) {                                                                                      // 9
				if (!err) {                                                                                                        // 10
					loginButtonsSession.closeDropdown();                                                                              // 11
				} else if (err instanceof Accounts.LoginCancelledError) {                                                          // 12
					// do nothing                                                                                                     // 13
				} else if (err instanceof Accounts.ConfigError) {                                                                  // 14
					loginButtonsSession.configureService(serviceName);                                                                // 15
				} else {                                                                                                           // 16
					loginButtonsSession.errorMessage(err.reason || "Unknown error");                                                  // 17
				}                                                                                                                  // 18
			};                                                                                                                  // 19
                                                                                                                       // 20
			var loginWithService = Meteor["loginWith" + capitalize(serviceName)];                                               // 21
                                                                                                                       // 22
			var options = {}; // use default scope unless specified                                                             // 23
			if (Accounts.ui._options.requestPermissions[serviceName])                                                           // 24
				options.requestPermissions = Accounts.ui._options.requestPermissions[serviceName];                                 // 25
                                                                                                                       // 26
			loginWithService(options, callback);                                                                                // 27
		}                                                                                                                    // 28
	});                                                                                                                   // 29
                                                                                                                       // 30
	Template._loginButtonsLoggedOutSingleLoginButton.helpers({                                                            // 31
		configured: function() {                                                                                             // 32
			return !!Accounts.loginServiceConfiguration.findOne({                                                               // 33
				service: this.name                                                                                                 // 34
			});                                                                                                                 // 35
		},                                                                                                                   // 36
		capitalizedName: function() {                                                                                        // 37
			if (this.name === 'github')                                                                                         // 38
			// XXX we should allow service packages to set their capitalized name                                               // 39
				return 'GitHub';                                                                                                   // 40
			else                                                                                                                // 41
				return capitalize(this.name);                                                                                      // 42
		}                                                                                                                    // 43
	});                                                                                                                   // 44
                                                                                                                       // 45
                                                                                                                       // 46
	// XXX from http://epeli.github.com/underscore.string/lib/underscore.string.js                                        // 47
	var capitalize = function(str) {                                                                                      // 48
		str = str == null ? '' : String(str);                                                                                // 49
		return str.charAt(0).toUpperCase() + str.slice(1);                                                                   // 50
	};                                                                                                                    // 51
})();                                                                                                                  // 52
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian:accounts-ui-bootstrap-3/login_buttons_dropdown.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function() {                                                                                                          // 1
                                                                                                                       // 2
	// for convenience                                                                                                    // 3
	var loginButtonsSession = Accounts._loginButtonsSession;                                                              // 4
                                                                                                                       // 5
	// events shared between loginButtonsLoggedOutDropdown and                                                            // 6
	// loginButtonsLoggedInDropdown                                                                                       // 7
	Template._loginButtons.events({                                                                                       // 8
		'click input': function(event) {                                                                                     // 9
			event.stopPropagation();                                                                                            // 10
		},                                                                                                                   // 11
		'click #login-name-link, click #login-sign-in-link': function(event) {                                               // 12
			event.stopPropagation();                                                                                            // 13
			loginButtonsSession.set('dropdownVisible', true);                                                                   // 14
			Meteor.flush();                                                                                                     // 15
		},                                                                                                                   // 16
		'click .login-close': function() {                                                                                   // 17
			loginButtonsSession.closeDropdown();                                                                                // 18
		}                                                                                                                    // 19
	});                                                                                                                   // 20
                                                                                                                       // 21
	Template._loginButtons.toggleDropdown = function() {                                                                  // 22
		toggleDropdown();                                                                                                    // 23
	};                                                                                                                    // 24
                                                                                                                       // 25
	//                                                                                                                    // 26
	// loginButtonsLoggedInDropdown template and related                                                                  // 27
	//                                                                                                                    // 28
                                                                                                                       // 29
	Template._loginButtonsLoggedInDropdown.events({                                                                       // 30
		'click #login-buttons-open-change-password': function(event) {                                                       // 31
			event.stopPropagation();                                                                                            // 32
			loginButtonsSession.resetMessages();                                                                                // 33
			loginButtonsSession.set('inChangePasswordFlow', true);                                                              // 34
			Meteor.flush();                                                                                                     // 35
		}                                                                                                                    // 36
	});                                                                                                                   // 37
                                                                                                                       // 38
	Template._loginButtonsLoggedInDropdown.helpers({                                                                      // 39
		displayName: function() {                                                                                            // 40
			return Accounts._loginButtons.displayName();                                                                        // 41
		},                                                                                                                   // 42
                                                                                                                       // 43
		inChangePasswordFlow: function() {                                                                                   // 44
			return loginButtonsSession.get('inChangePasswordFlow');                                                             // 45
		},                                                                                                                   // 46
                                                                                                                       // 47
		inMessageOnlyFlow: function() {                                                                                      // 48
			return loginButtonsSession.get('inMessageOnlyFlow');                                                                // 49
		},                                                                                                                   // 50
                                                                                                                       // 51
		dropdownVisible: function() {                                                                                        // 52
			return loginButtonsSession.get('dropdownVisible');                                                                  // 53
		}                                                                                                                    // 54
	});                                                                                                                   // 55
                                                                                                                       // 56
                                                                                                                       // 57
	Template._loginButtonsLoggedInDropdownActions.helpers({                                                               // 58
		allowChangingPassword: function() {                                                                                  // 59
			// it would be more correct to check whether the user has a password set,                                           // 60
			// but in order to do that we'd have to send more data down to the client,                                          // 61
			// and it'd be preferable not to send down the entire service.password document.                                    // 62
			//                                                                                                                  // 63
			// instead we use the heuristic: if the user has a username or email set.                                           // 64
			var user = Meteor.user();                                                                                           // 65
			return user.username || (user.emails && user.emails[0] && user.emails[0].address);                                  // 66
		},                                                                                                                   // 67
		additionalLoggedInDropdownActions: function() {                                                                      // 68
			return Template._loginButtonsAdditionalLoggedInDropdownActions !== undefined;                                       // 69
		}                                                                                                                    // 70
	});                                                                                                                   // 71
                                                                                                                       // 72
                                                                                                                       // 73
	//                                                                                                                    // 74
	// loginButtonsLoggedOutDropdown template and related                                                                 // 75
	//                                                                                                                    // 76
                                                                                                                       // 77
	Template._loginButtonsLoggedOutDropdown.events({                                                                      // 78
		'click #login-buttons-password': function(event) {                                                                   // 79
			event.stopPropagation();                                                                                            // 80
			loginOrSignup();                                                                                                    // 81
		},                                                                                                                   // 82
                                                                                                                       // 83
		'keypress #forgot-password-email': function(event) {                                                                 // 84
			event.stopPropagation();                                                                                            // 85
			if (event.keyCode === 13)                                                                                           // 86
				forgotPassword();                                                                                                  // 87
		},                                                                                                                   // 88
                                                                                                                       // 89
		'click #login-buttons-forgot-password': function(event) {                                                            // 90
			event.stopPropagation();                                                                                            // 91
			forgotPassword();                                                                                                   // 92
		},                                                                                                                   // 93
                                                                                                                       // 94
		'click #signup-link': function(event) {                                                                              // 95
			event.stopPropagation();                                                                                            // 96
			loginButtonsSession.resetMessages();                                                                                // 97
                                                                                                                       // 98
			// store values of fields before swtiching to the signup form                                                       // 99
			var username = trimmedElementValueById('login-username');                                                           // 100
			var email = trimmedElementValueById('login-email');                                                                 // 101
			var usernameOrEmail = trimmedElementValueById('login-username-or-email');                                           // 102
			// notably not trimmed. a password could (?) start or end with a space                                              // 103
			var password = elementValueById('login-password');                                                                  // 104
                                                                                                                       // 105
			loginButtonsSession.set('inSignupFlow', true);                                                                      // 106
			loginButtonsSession.set('inForgotPasswordFlow', false);                                                             // 107
                                                                                                                       // 108
			// force the ui to update so that we have the approprate fields to fill in                                          // 109
			Meteor.flush();                                                                                                     // 110
                                                                                                                       // 111
			// update new fields with appropriate defaults                                                                      // 112
			if (username !== null)                                                                                              // 113
				document.getElementById('login-username').value = username;                                                        // 114
			else if (email !== null)                                                                                            // 115
				document.getElementById('login-email').value = email;                                                              // 116
			else if (usernameOrEmail !== null)                                                                                  // 117
				if (usernameOrEmail.indexOf('@') === -1)                                                                           // 118
					document.getElementById('login-username').value = usernameOrEmail;                                                // 119
				else                                                                                                               // 120
					document.getElementById('login-email').value = usernameOrEmail;                                                   // 121
		},                                                                                                                   // 122
		'click #forgot-password-link': function(event) {                                                                     // 123
			event.stopPropagation();                                                                                            // 124
			loginButtonsSession.resetMessages();                                                                                // 125
                                                                                                                       // 126
			// store values of fields before swtiching to the signup form                                                       // 127
			var email = trimmedElementValueById('login-email');                                                                 // 128
			var usernameOrEmail = trimmedElementValueById('login-username-or-email');                                           // 129
                                                                                                                       // 130
			loginButtonsSession.set('inSignupFlow', false);                                                                     // 131
			loginButtonsSession.set('inForgotPasswordFlow', true);                                                              // 132
                                                                                                                       // 133
			// force the ui to update so that we have the approprate fields to fill in                                          // 134
			Meteor.flush();                                                                                                     // 135
			//toggleDropdown();                                                                                                 // 136
                                                                                                                       // 137
			// update new fields with appropriate defaults                                                                      // 138
			if (email !== null)                                                                                                 // 139
				document.getElementById('forgot-password-email').value = email;                                                    // 140
			else if (usernameOrEmail !== null)                                                                                  // 141
				if (usernameOrEmail.indexOf('@') !== -1)                                                                           // 142
					document.getElementById('forgot-password-email').value = usernameOrEmail;                                         // 143
		},                                                                                                                   // 144
		'click #back-to-login-link': function(event) {                                                                       // 145
			event.stopPropagation();                                                                                            // 146
			loginButtonsSession.resetMessages();                                                                                // 147
                                                                                                                       // 148
			var username = trimmedElementValueById('login-username');                                                           // 149
			var email = trimmedElementValueById('login-email') || trimmedElementValueById('forgot-password-email'); // Ughh. Standardize on names?
                                                                                                                       // 151
			loginButtonsSession.set('inSignupFlow', false);                                                                     // 152
			loginButtonsSession.set('inForgotPasswordFlow', false);                                                             // 153
                                                                                                                       // 154
			// force the ui to update so that we have the approprate fields to fill in                                          // 155
			Meteor.flush();                                                                                                     // 156
                                                                                                                       // 157
			if (document.getElementById('login-username'))                                                                      // 158
				document.getElementById('login-username').value = username;                                                        // 159
			if (document.getElementById('login-email'))                                                                         // 160
				document.getElementById('login-email').value = email;                                                              // 161
			// "login-password" is preserved thanks to the preserve-inputs package                                              // 162
			if (document.getElementById('login-username-or-email'))                                                             // 163
				document.getElementById('login-username-or-email').value = email || username;                                      // 164
		},                                                                                                                   // 165
		'keypress #login-username, keypress #login-email, keypress #login-username-or-email, keypress #login-password, keypress #login-password-again': function(event) {
			if (event.keyCode === 13)                                                                                           // 167
				loginOrSignup();                                                                                                   // 168
		}                                                                                                                    // 169
	});                                                                                                                   // 170
                                                                                                                       // 171
                                                                                                                       // 172
	Template._loginButtonsLoggedOutDropdown.helpers({                                                                     // 173
		// additional classes that can be helpful in styling the dropdown                                                    // 174
		additionalClasses: function() {                                                                                      // 175
			if (!Accounts.password) {                                                                                           // 176
				return false;                                                                                                      // 177
			} else {                                                                                                            // 178
				if (loginButtonsSession.get('inSignupFlow')) {                                                                     // 179
					return 'login-form-create-account';                                                                               // 180
				} else if (loginButtonsSession.get('inForgotPasswordFlow')) {                                                      // 181
					return 'login-form-forgot-password';                                                                              // 182
				} else {                                                                                                           // 183
					return 'login-form-sign-in';                                                                                      // 184
				}                                                                                                                  // 185
			}                                                                                                                   // 186
		},                                                                                                                   // 187
                                                                                                                       // 188
		dropdownVisible: function() {                                                                                        // 189
			return loginButtonsSession.get('dropdownVisible');                                                                  // 190
		},                                                                                                                   // 191
                                                                                                                       // 192
		hasPasswordService: function() {                                                                                     // 193
			return Accounts._loginButtons.hasPasswordService();                                                                 // 194
		},                                                                                                                   // 195
                                                                                                                       // 196
		forbidClientAccountCreation: function() {                                                                            // 197
			return Accounts._options.forbidClientAccountCreation;                                                               // 198
		}                                                                                                                    // 199
	});                                                                                                                   // 200
                                                                                                                       // 201
	Template._loginButtonsLoggedOutAllServices.helpers({                                                                  // 202
		services: function() {                                                                                               // 203
			return Accounts._loginButtons.getLoginServices();                                                                   // 204
		},                                                                                                                   // 205
                                                                                                                       // 206
		isPasswordService: function() {                                                                                      // 207
			return this.name === 'password';                                                                                    // 208
		},                                                                                                                   // 209
                                                                                                                       // 210
		hasOtherServices: function() {                                                                                       // 211
			return Accounts._loginButtons.getLoginServices().length > 1;                                                        // 212
		},                                                                                                                   // 213
                                                                                                                       // 214
		hasPasswordService: function() {                                                                                     // 215
			return Accounts._loginButtons.hasPasswordService();                                                                 // 216
		}                                                                                                                    // 217
	});                                                                                                                   // 218
                                                                                                                       // 219
                                                                                                                       // 220
	Template._loginButtonsLoggedOutPasswordService.helpers({                                                              // 221
		fields: function() {                                                                                                 // 222
			var loginFields = [{                                                                                                // 223
				fieldName: 'username-or-email',                                                                                    // 224
				fieldLabel: i18n('loginFields.usernameOrEmail'),                                                                   // 225
				visible: function() {                                                                                              // 226
					return _.contains(                                                                                                // 227
						["USERNAME_AND_EMAIL_CONFIRM", "USERNAME_AND_EMAIL", "USERNAME_AND_OPTIONAL_EMAIL"],                             // 228
						Accounts.ui._passwordSignupFields());                                                                            // 229
				}                                                                                                                  // 230
			}, {                                                                                                                // 231
				fieldName: 'username',                                                                                             // 232
				fieldLabel: i18n('loginFields.username'),                                                                          // 233
				visible: function() {                                                                                              // 234
					return Accounts.ui._passwordSignupFields() === "USERNAME_ONLY";                                                   // 235
				}                                                                                                                  // 236
			}, {                                                                                                                // 237
				fieldName: 'email',                                                                                                // 238
				fieldLabel: i18n('loginFields.email'),                                                                             // 239
				inputType: 'email',                                                                                                // 240
				visible: function() {                                                                                              // 241
					return Accounts.ui._passwordSignupFields() === "EMAIL_ONLY";                                                      // 242
				}                                                                                                                  // 243
			}, {                                                                                                                // 244
				fieldName: 'password',                                                                                             // 245
				fieldLabel: i18n('loginFields.password'),                                                                          // 246
				inputType: 'password',                                                                                             // 247
				visible: function() {                                                                                              // 248
					return true;                                                                                                      // 249
				}                                                                                                                  // 250
			}];                                                                                                                 // 251
                                                                                                                       // 252
			var signupFields = [{                                                                                               // 253
				fieldName: 'username',                                                                                             // 254
				fieldLabel: i18n('signupFields.username'),                                                                         // 255
				visible: function() {                                                                                              // 256
					return _.contains(                                                                                                // 257
						["USERNAME_AND_EMAIL_CONFIRM", "USERNAME_AND_EMAIL", "USERNAME_AND_OPTIONAL_EMAIL", "USERNAME_ONLY"],            // 258
						Accounts.ui._passwordSignupFields());                                                                            // 259
				}                                                                                                                  // 260
			}, {                                                                                                                // 261
				fieldName: 'email',                                                                                                // 262
				fieldLabel: i18n('signupFields.email'),                                                                            // 263
				inputType: 'email',                                                                                                // 264
				visible: function() {                                                                                              // 265
					return _.contains(                                                                                                // 266
						["USERNAME_AND_EMAIL_CONFIRM", "USERNAME_AND_EMAIL", "EMAIL_ONLY"],                                              // 267
						Accounts.ui._passwordSignupFields());                                                                            // 268
				}                                                                                                                  // 269
			}, {                                                                                                                // 270
				fieldName: 'email',                                                                                                // 271
				fieldLabel: i18n('signupFields.emailOpt'),                                                                         // 272
				inputType: 'email',                                                                                                // 273
				visible: function() {                                                                                              // 274
					return Accounts.ui._passwordSignupFields() === "USERNAME_AND_OPTIONAL_EMAIL";                                     // 275
				}                                                                                                                  // 276
			}, {                                                                                                                // 277
				fieldName: 'password',                                                                                             // 278
				fieldLabel: i18n('signupFields.password'),                                                                         // 279
				inputType: 'password',                                                                                             // 280
				visible: function() {                                                                                              // 281
					return true;                                                                                                      // 282
				}                                                                                                                  // 283
			}, {                                                                                                                // 284
				fieldName: 'password-again',                                                                                       // 285
				fieldLabel: i18n('signupFields.passwordAgain'),                                                                    // 286
				inputType: 'password',                                                                                             // 287
				visible: function() {                                                                                              // 288
					// No need to make users double-enter their password if                                                           // 289
					// they'll necessarily have an email set, since they can use                                                      // 290
					// the "forgot password" flow.                                                                                    // 291
					return _.contains(                                                                                                // 292
						["USERNAME_AND_EMAIL_CONFIRM", "USERNAME_AND_OPTIONAL_EMAIL", "USERNAME_ONLY"],                                  // 293
						Accounts.ui._passwordSignupFields());                                                                            // 294
				}                                                                                                                  // 295
			}];                                                                                                                 // 296
                                                                                                                       // 297
			signupFields = Accounts.ui._options.extraSignupFields.concat(signupFields);                                         // 298
                                                                                                                       // 299
			return loginButtonsSession.get('inSignupFlow') ? signupFields : loginFields;                                        // 300
		},                                                                                                                   // 301
                                                                                                                       // 302
		inForgotPasswordFlow: function() {                                                                                   // 303
			return loginButtonsSession.get('inForgotPasswordFlow');                                                             // 304
		},                                                                                                                   // 305
                                                                                                                       // 306
		inLoginFlow: function() {                                                                                            // 307
			return !loginButtonsSession.get('inSignupFlow') && !loginButtonsSession.get('inForgotPasswordFlow');                // 308
		},                                                                                                                   // 309
                                                                                                                       // 310
		inSignupFlow: function() {                                                                                           // 311
			return loginButtonsSession.get('inSignupFlow');                                                                     // 312
		},                                                                                                                   // 313
                                                                                                                       // 314
		showForgotPasswordLink: function() {                                                                                 // 315
			return _.contains(                                                                                                  // 316
				["USERNAME_AND_EMAIL_CONFIRM", "USERNAME_AND_EMAIL", "USERNAME_AND_OPTIONAL_EMAIL", "EMAIL_ONLY"],                 // 317
				Accounts.ui._passwordSignupFields());                                                                              // 318
		},                                                                                                                   // 319
                                                                                                                       // 320
		showCreateAccountLink: function() {                                                                                  // 321
			return !Accounts._options.forbidClientAccountCreation;                                                              // 322
		}                                                                                                                    // 323
	});                                                                                                                   // 324
                                                                                                                       // 325
	Template._loginButtonsFormField.helpers({                                                                             // 326
		inputType: function() {                                                                                              // 327
			return this.inputType || "text";                                                                                    // 328
		}                                                                                                                    // 329
	});                                                                                                                   // 330
                                                                                                                       // 331
	//                                                                                                                    // 332
	// loginButtonsChangePassword template                                                                                // 333
	//                                                                                                                    // 334
	Template._loginButtonsChangePassword.events({                                                                         // 335
		'keypress #login-old-password, keypress #login-password, keypress #login-password-again': function(event) {          // 336
			if (event.keyCode === 13)                                                                                           // 337
				changePassword();                                                                                                  // 338
		},                                                                                                                   // 339
		'click #login-buttons-do-change-password': function(event) {                                                         // 340
			event.stopPropagation();                                                                                            // 341
			changePassword();                                                                                                   // 342
		},                                                                                                                   // 343
		'click #login-buttons-cancel-change-password': function(event) {                                                     // 344
			event.stopPropagation();                                                                                            // 345
			loginButtonsSession.resetMessages();                                                                                // 346
			Accounts._loginButtonsSession.set('inChangePasswordFlow', false);                                                   // 347
			Meteor.flush();                                                                                                     // 348
		}                                                                                                                    // 349
	});                                                                                                                   // 350
                                                                                                                       // 351
	Template._loginButtonsChangePassword.helpers({                                                                        // 352
		fields: function() {                                                                                                 // 353
			return [{                                                                                                           // 354
				fieldName: 'old-password',                                                                                         // 355
				fieldLabel: i18n('changePasswordFields.currentPassword'),                                                          // 356
				inputType: 'password',                                                                                             // 357
				visible: function() {                                                                                              // 358
					return true;                                                                                                      // 359
				}                                                                                                                  // 360
			}, {                                                                                                                // 361
				fieldName: 'password',                                                                                             // 362
				fieldLabel: i18n('changePasswordFields.newPassword'),                                                              // 363
				inputType: 'password',                                                                                             // 364
				visible: function() {                                                                                              // 365
					return true;                                                                                                      // 366
				}                                                                                                                  // 367
			}, {                                                                                                                // 368
				fieldName: 'password-again',                                                                                       // 369
				fieldLabel: i18n('changePasswordFields.newPasswordAgain'),                                                         // 370
				inputType: 'password',                                                                                             // 371
				visible: function() {                                                                                              // 372
					// No need to make users double-enter their password if                                                           // 373
					// they'll necessarily have an email set, since they can use                                                      // 374
					// the "forgot password" flow.                                                                                    // 375
					return _.contains(                                                                                                // 376
						["USERNAME_AND_OPTIONAL_EMAIL", "USERNAME_ONLY"],                                                                // 377
						Accounts.ui._passwordSignupFields());                                                                            // 378
				}                                                                                                                  // 379
			}];                                                                                                                 // 380
		}                                                                                                                    // 381
	});                                                                                                                   // 382
                                                                                                                       // 383
	//                                                                                                                    // 384
	// helpers                                                                                                            // 385
	//                                                                                                                    // 386
                                                                                                                       // 387
	var elementValueById = function(id) {                                                                                 // 388
		var element = document.getElementById(id);                                                                           // 389
		if (!element)                                                                                                        // 390
			return null;                                                                                                        // 391
		else                                                                                                                 // 392
			return element.value;                                                                                               // 393
	};                                                                                                                    // 394
                                                                                                                       // 395
	var trimmedElementValueById = function(id) {                                                                          // 396
		var element = document.getElementById(id);                                                                           // 397
		if (!element)                                                                                                        // 398
			return null;                                                                                                        // 399
		else                                                                                                                 // 400
			return element.value.replace(/^\s*|\s*$/g, ""); // trim;                                                            // 401
	};                                                                                                                    // 402
                                                                                                                       // 403
	var loginOrSignup = function() {                                                                                      // 404
		if (loginButtonsSession.get('inSignupFlow'))                                                                         // 405
			signup();                                                                                                           // 406
		else                                                                                                                 // 407
			login();                                                                                                            // 408
	};                                                                                                                    // 409
                                                                                                                       // 410
	var login = function() {                                                                                              // 411
		loginButtonsSession.resetMessages();                                                                                 // 412
                                                                                                                       // 413
		var username = trimmedElementValueById('login-username');                                                            // 414
		var email = trimmedElementValueById('login-email');                                                                  // 415
		var usernameOrEmail = trimmedElementValueById('login-username-or-email');                                            // 416
		// notably not trimmed. a password could (?) start or end with a space                                               // 417
		var password = elementValueById('login-password');                                                                   // 418
                                                                                                                       // 419
		var loginSelector;                                                                                                   // 420
		if (username !== null) {                                                                                             // 421
			if (!Accounts._loginButtons.validateUsername(username))                                                             // 422
				return;                                                                                                            // 423
			else                                                                                                                // 424
				loginSelector = {                                                                                                  // 425
					username: username                                                                                                // 426
				};                                                                                                                 // 427
		} else if (email !== null) {                                                                                         // 428
			if (!Accounts._loginButtons.validateEmail(email))                                                                   // 429
				return;                                                                                                            // 430
			else                                                                                                                // 431
				loginSelector = {                                                                                                  // 432
					email: email                                                                                                      // 433
				};                                                                                                                 // 434
		} else if (usernameOrEmail !== null) {                                                                               // 435
			// XXX not sure how we should validate this. but this seems good enough (for now),                                  // 436
			// since an email must have at least 3 characters anyways                                                           // 437
			if (!Accounts._loginButtons.validateUsername(usernameOrEmail))                                                      // 438
				return;                                                                                                            // 439
			else                                                                                                                // 440
				loginSelector = usernameOrEmail;                                                                                   // 441
		} else {                                                                                                             // 442
			throw new Error("Unexpected -- no element to use as a login user selector");                                        // 443
		}                                                                                                                    // 444
                                                                                                                       // 445
		Meteor.loginWithPassword(loginSelector, password, function(error, result) {                                          // 446
			if (error) {                                                                                                        // 447
				loginButtonsSession.errorMessage(error.reason || "Unknown error");                                                 // 448
			} else {                                                                                                            // 449
				loginButtonsSession.closeDropdown();                                                                               // 450
			}                                                                                                                   // 451
		});                                                                                                                  // 452
	};                                                                                                                    // 453
                                                                                                                       // 454
	var toggleDropdown = function() {                                                                                     // 455
		// $('#login-dropdown-list .dropdown-menu').dropdown('toggle');                                                      // 456
		$("#login-dropdown-list").toggleClass("open");                                                                       // 457
                                                                                                                       // 458
	};                                                                                                                    // 459
                                                                                                                       // 460
	var signup = function() {                                                                                             // 461
		loginButtonsSession.resetMessages();                                                                                 // 462
                                                                                                                       // 463
		var options = {}; // to be passed to Accounts.createUser                                                             // 464
                                                                                                                       // 465
		var username = trimmedElementValueById('login-username');                                                            // 466
		if (username !== null) {                                                                                             // 467
			if (!Accounts._loginButtons.validateUsername(username))                                                             // 468
				return;                                                                                                            // 469
			else                                                                                                                // 470
				options.username = username;                                                                                       // 471
		}                                                                                                                    // 472
                                                                                                                       // 473
		var email = trimmedElementValueById('login-email');                                                                  // 474
		if (email !== null) {                                                                                                // 475
			if (!Accounts._loginButtons.validateEmail(email))                                                                   // 476
				return;                                                                                                            // 477
			else                                                                                                                // 478
				options.email = email;                                                                                             // 479
		}                                                                                                                    // 480
                                                                                                                       // 481
		// notably not trimmed. a password could (?) start or end with a space                                               // 482
		var password = elementValueById('login-password');                                                                   // 483
		if (!Accounts._loginButtons.validatePassword(password))                                                              // 484
			return;                                                                                                             // 485
		else                                                                                                                 // 486
			options.password = password;                                                                                        // 487
                                                                                                                       // 488
		if (!matchPasswordAgainIfPresent())                                                                                  // 489
			return;                                                                                                             // 490
                                                                                                                       // 491
		// prepare the profile object                                                                                        // 492
		options.profile = {};                                                                                                // 493
                                                                                                                       // 494
		// define a proxy function to allow extraSignupFields set error messages                                             // 495
		var errorFn = function(errorMessage) {                                                                               // 496
			Accounts._loginButtonsSession.errorMessage(errorMessage);                                                           // 497
		};                                                                                                                   // 498
                                                                                                                       // 499
		var invalidExtraSignupFields = false;                                                                                // 500
                                                                                                                       // 501
		// parse extraSignupFields to populate account's profile data                                                        // 502
		_.each(Accounts.ui._options.extraSignupFields, function(field, index) {                                              // 503
			var value = elementValueById('login-' + field.fieldName);                                                           // 504
			if (typeof field.validate === 'function') {                                                                         // 505
				if (field.validate(value, errorFn)) {                                                                              // 506
					options.profile[field.fieldName] = elementValueById('login-' + field.fieldName);                                  // 507
				} else {                                                                                                           // 508
					invalidExtraSignupFields = true;                                                                                  // 509
				}                                                                                                                  // 510
			} else {                                                                                                            // 511
				options.profile[field.fieldName] = elementValueById('login-' + field.fieldName);                                   // 512
			}                                                                                                                   // 513
		});                                                                                                                  // 514
                                                                                                                       // 515
		if (invalidExtraSignupFields)                                                                                        // 516
			return;                                                                                                             // 517
                                                                                                                       // 518
		Accounts.createUser(options, function(error) {                                                                       // 519
			if (error) {                                                                                                        // 520
				loginButtonsSession.errorMessage(error.reason || "Unknown error");                                                 // 521
			} else {                                                                                                            // 522
				loginButtonsSession.closeDropdown();                                                                               // 523
			}                                                                                                                   // 524
		});                                                                                                                  // 525
	};                                                                                                                    // 526
                                                                                                                       // 527
	var forgotPassword = function() {                                                                                     // 528
		loginButtonsSession.resetMessages();                                                                                 // 529
                                                                                                                       // 530
		var email = trimmedElementValueById("forgot-password-email");                                                        // 531
		if (email.indexOf('@') !== -1) {                                                                                     // 532
			Accounts.forgotPassword({                                                                                           // 533
				email: email                                                                                                       // 534
			}, function(error) {                                                                                                // 535
				if (error)                                                                                                         // 536
					loginButtonsSession.errorMessage(error.reason || "Unknown error");                                                // 537
				else                                                                                                               // 538
					loginButtonsSession.infoMessage(i18n('forgotPasswordForm.sent'));                                                 // 539
			});                                                                                                                 // 540
		} else {                                                                                                             // 541
			loginButtonsSession.infoMessage(i18n('forgotPasswordForm.sent'));                                                   // 542
		}                                                                                                                    // 543
	};                                                                                                                    // 544
                                                                                                                       // 545
	var changePassword = function() {                                                                                     // 546
		loginButtonsSession.resetMessages();                                                                                 // 547
                                                                                                                       // 548
		// notably not trimmed. a password could (?) start or end with a space                                               // 549
		var oldPassword = elementValueById('login-old-password');                                                            // 550
                                                                                                                       // 551
		// notably not trimmed. a password could (?) start or end with a space                                               // 552
		var password = elementValueById('login-password');                                                                   // 553
		if (!Accounts._loginButtons.validatePassword(password))                                                              // 554
			return;                                                                                                             // 555
                                                                                                                       // 556
		if (!matchPasswordAgainIfPresent())                                                                                  // 557
			return;                                                                                                             // 558
                                                                                                                       // 559
		Accounts.changePassword(oldPassword, password, function(error) {                                                     // 560
			if (error) {                                                                                                        // 561
				loginButtonsSession.errorMessage(error.reason || "Unknown error");                                                 // 562
			} else {                                                                                                            // 563
				loginButtonsSession.infoMessage("Password changed");                                                               // 564
                                                                                                                       // 565
				// wait 3 seconds, then expire the msg                                                                             // 566
				Meteor.setTimeout(function() {                                                                                     // 567
					loginButtonsSession.resetMessages();                                                                              // 568
				}, 3000);                                                                                                          // 569
			}                                                                                                                   // 570
		});                                                                                                                  // 571
	};                                                                                                                    // 572
                                                                                                                       // 573
	var matchPasswordAgainIfPresent = function() {                                                                        // 574
		// notably not trimmed. a password could (?) start or end with a space                                               // 575
		var passwordAgain = elementValueById('login-password-again');                                                        // 576
		if (passwordAgain !== null) {                                                                                        // 577
			// notably not trimmed. a password could (?) start or end with a space                                              // 578
			var password = elementValueById('login-password');                                                                  // 579
			if (password !== passwordAgain) {                                                                                   // 580
				loginButtonsSession.errorMessage(i18n('errorMessages.passwordsDontMatch'));                                        // 581
				return false;                                                                                                      // 582
			}                                                                                                                   // 583
		}                                                                                                                    // 584
		return true;                                                                                                         // 585
	};                                                                                                                    // 586
})();                                                                                                                  // 587
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ian:accounts-ui-bootstrap-3/login_buttons_dialogs.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function() {                                                                                                          // 1
	// for convenience                                                                                                    // 2
	var loginButtonsSession = Accounts._loginButtonsSession;                                                              // 3
                                                                                                                       // 4
                                                                                                                       // 5
	//                                                                                                                    // 6
	// populate the session so that the appropriate dialogs are                                                           // 7
	// displayed by reading variables set by accounts-urls, which parses                                                  // 8
	// special URLs. since accounts-ui depends on accounts-urls, we are                                                   // 9
	// guaranteed to have these set at this point.                                                                        // 10
	//                                                                                                                    // 11
                                                                                                                       // 12
	if (Accounts._resetPasswordToken) {                                                                                   // 13
		loginButtonsSession.set('resetPasswordToken', Accounts._resetPasswordToken);                                         // 14
	}                                                                                                                     // 15
                                                                                                                       // 16
	if (Accounts._enrollAccountToken) {                                                                                   // 17
		loginButtonsSession.set('enrollAccountToken', Accounts._enrollAccountToken);                                         // 18
	}                                                                                                                     // 19
                                                                                                                       // 20
	// Needs to be in Meteor.startup because of a package loading order                                                   // 21
	// issue. We can't be sure that accounts-password is loaded earlier                                                   // 22
	// than accounts-ui so Accounts.verifyEmail might not be defined.                                                     // 23
	Meteor.startup(function() {                                                                                           // 24
		if (Accounts._verifyEmailToken) {                                                                                    // 25
			Accounts.verifyEmail(Accounts._verifyEmailToken, function(error) {                                                  // 26
				Accounts._enableAutoLogin();                                                                                       // 27
				if (!error)                                                                                                        // 28
					loginButtonsSession.set('justVerifiedEmail', true);                                                               // 29
				// XXX show something if there was an error.                                                                       // 30
			});                                                                                                                 // 31
		}                                                                                                                    // 32
	});                                                                                                                   // 33
                                                                                                                       // 34
	//                                                                                                                    // 35
	// resetPasswordDialog template                                                                                       // 36
	//                                                                                                                    // 37
                                                                                                                       // 38
	Template._resetPasswordDialog.events({                                                                                // 39
		'click #login-buttons-reset-password-button': function(event) {                                                      // 40
			event.stopPropagation();                                                                                            // 41
			resetPassword();                                                                                                    // 42
		},                                                                                                                   // 43
		'keypress #reset-password-new-password': function(event) {                                                           // 44
			if (event.keyCode === 13)                                                                                           // 45
				resetPassword();                                                                                                   // 46
		},                                                                                                                   // 47
		'click #login-buttons-cancel-reset-password': function(event) {                                                      // 48
			event.stopPropagation();                                                                                            // 49
			loginButtonsSession.set('resetPasswordToken', null);                                                                // 50
			Accounts._enableAutoLogin();                                                                                        // 51
			$('#login-buttons-reset-password-modal').modal("hide");                                                             // 52
		}                                                                                                                    // 53
	});                                                                                                                   // 54
                                                                                                                       // 55
	var resetPassword = function() {                                                                                      // 56
		loginButtonsSession.resetMessages();                                                                                 // 57
		var newPassword = document.getElementById('reset-password-new-password').value;                                      // 58
		if (!Accounts._loginButtons.validatePassword(newPassword))                                                           // 59
			return;                                                                                                             // 60
                                                                                                                       // 61
		Accounts.resetPassword(                                                                                              // 62
			loginButtonsSession.get('resetPasswordToken'), newPassword,                                                         // 63
			function(error) {                                                                                                   // 64
				if (error) {                                                                                                       // 65
					loginButtonsSession.errorMessage(error.reason || "Unknown error");                                                // 66
				} else {                                                                                                           // 67
					loginButtonsSession.set('resetPasswordToken', null);                                                              // 68
					Accounts._enableAutoLogin();                                                                                      // 69
					$('#login-buttons-reset-password-modal').modal("hide");                                                           // 70
				}                                                                                                                  // 71
			});                                                                                                                 // 72
	};                                                                                                                    // 73
                                                                                                                       // 74
	Template._resetPasswordDialog.helpers({                                                                               // 75
		inResetPasswordFlow: function() {                                                                                    // 76
			return loginButtonsSession.get('resetPasswordToken');                                                               // 77
		}                                                                                                                    // 78
	});                                                                                                                   // 79
                                                                                                                       // 80
	Template._resetPasswordDialog.rendered = function() {                                                                 // 81
		var $modal = $(this.find('#login-buttons-reset-password-modal'));                                                    // 82
		$modal.modal();                                                                                                      // 83
	};                                                                                                                    // 84
                                                                                                                       // 85
	//                                                                                                                    // 86
	// enrollAccountDialog template                                                                                       // 87
	//                                                                                                                    // 88
                                                                                                                       // 89
	Template._enrollAccountDialog.events({                                                                                // 90
		'click #login-buttons-enroll-account-button': function() {                                                           // 91
			enrollAccount();                                                                                                    // 92
		},                                                                                                                   // 93
		'keypress #enroll-account-password': function(event) {                                                               // 94
			if (event.keyCode === 13)                                                                                           // 95
				enrollAccount();                                                                                                   // 96
		},                                                                                                                   // 97
		'click #login-buttons-cancel-enroll-account-button': function() {                                                    // 98
			loginButtonsSession.set('enrollAccountToken', null);                                                                // 99
			Accounts._enableAutoLogin();                                                                                        // 100
			$modal.modal("hide");                                                                                               // 101
		}                                                                                                                    // 102
	});                                                                                                                   // 103
                                                                                                                       // 104
	var enrollAccount = function() {                                                                                      // 105
		loginButtonsSession.resetMessages();                                                                                 // 106
		var password = document.getElementById('enroll-account-password').value;                                             // 107
		if (!Accounts._loginButtons.validatePassword(password))                                                              // 108
			return;                                                                                                             // 109
                                                                                                                       // 110
		Accounts.resetPassword(                                                                                              // 111
			loginButtonsSession.get('enrollAccountToken'), password,                                                            // 112
			function(error) {                                                                                                   // 113
				if (error) {                                                                                                       // 114
					loginButtonsSession.errorMessage(error.reason || "Unknown error");                                                // 115
				} else {                                                                                                           // 116
					loginButtonsSession.set('enrollAccountToken', null);                                                              // 117
					Accounts._enableAutoLogin();                                                                                      // 118
					$modal.modal("hide");                                                                                             // 119
				}                                                                                                                  // 120
			});                                                                                                                 // 121
	};                                                                                                                    // 122
                                                                                                                       // 123
	Template._enrollAccountDialog.helpers({                                                                               // 124
		inEnrollAccountFlow: function() {                                                                                    // 125
			return loginButtonsSession.get('enrollAccountToken');                                                               // 126
		}                                                                                                                    // 127
	});                                                                                                                   // 128
                                                                                                                       // 129
	Template._enrollAccountDialog.rendered = function() {                                                                 // 130
		$modal = $(this.find('#login-buttons-enroll-account-modal'));                                                        // 131
		$modal.modal();                                                                                                      // 132
	};                                                                                                                    // 133
                                                                                                                       // 134
	//                                                                                                                    // 135
	// justVerifiedEmailDialog template                                                                                   // 136
	//                                                                                                                    // 137
                                                                                                                       // 138
	Template._justVerifiedEmailDialog.events({                                                                            // 139
		'click #just-verified-dismiss-button': function() {                                                                  // 140
			loginButtonsSession.set('justVerifiedEmail', false);                                                                // 141
		}                                                                                                                    // 142
	});                                                                                                                   // 143
                                                                                                                       // 144
	Template._justVerifiedEmailDialog.helpers({                                                                           // 145
		visible: function() {                                                                                                // 146
			if (loginButtonsSession.get('justVerifiedEmail')) {                                                                 // 147
				setTimeout(function() {                                                                                            // 148
					$('#login-buttons-email-address-verified-modal').modal()                                                          // 149
				}, 500)                                                                                                            // 150
			}                                                                                                                   // 151
			return loginButtonsSession.get('justVerifiedEmail');                                                                // 152
		}                                                                                                                    // 153
	});                                                                                                                   // 154
                                                                                                                       // 155
                                                                                                                       // 156
	//                                                                                                                    // 157
	// loginButtonsMessagesDialog template                                                                                // 158
	//                                                                                                                    // 159
                                                                                                                       // 160
	// Template._loginButtonsMessagesDialog.rendered = function() {                                                       // 161
	//   var $modal = $(this.find('#configure-login-service-dialog-modal'));                                              // 162
	//   $modal.modal();                                                                                                  // 163
	// }                                                                                                                  // 164
                                                                                                                       // 165
	Template._loginButtonsMessagesDialog.events({                                                                         // 166
		'click #messages-dialog-dismiss-button': function() {                                                                // 167
			loginButtonsSession.resetMessages();                                                                                // 168
		}                                                                                                                    // 169
	});                                                                                                                   // 170
                                                                                                                       // 171
	Template._loginButtonsMessagesDialog.helpers({                                                                        // 172
		visible: function() {                                                                                                // 173
			var hasMessage = loginButtonsSession.get('infoMessage') || loginButtonsSession.get('errorMessage');                 // 174
			return !Accounts._loginButtons.dropdown() && hasMessage;                                                            // 175
		}                                                                                                                    // 176
	});                                                                                                                   // 177
                                                                                                                       // 178
                                                                                                                       // 179
	//                                                                                                                    // 180
	// configureLoginServiceDialog template                                                                               // 181
	//                                                                                                                    // 182
                                                                                                                       // 183
	Template._configureLoginServiceDialog.events({                                                                        // 184
		'click .configure-login-service-dismiss-button': function(event) {                                                   // 185
			event.stopPropagation();                                                                                            // 186
			loginButtonsSession.set('configureLoginServiceDialogVisible', false);                                               // 187
			$('#configure-login-service-dialog-modal').modal('hide');                                                           // 188
		},                                                                                                                   // 189
		'click #configure-login-service-dialog-save-configuration': function() {                                             // 190
			if (loginButtonsSession.get('configureLoginServiceDialogVisible') &&                                                // 191
				!loginButtonsSession.get('configureLoginServiceDialogSaveDisabled')) {                                             // 192
				// Prepare the configuration document for this login service                                                       // 193
				var serviceName = loginButtonsSession.get('configureLoginServiceDialogServiceName');                               // 194
				var configuration = {                                                                                              // 195
					service: serviceName                                                                                              // 196
				};                                                                                                                 // 197
				_.each(configurationFields(), function(field) {                                                                    // 198
					configuration[field.property] = document.getElementById(                                                          // 199
						'configure-login-service-dialog-' + field.property).value                                                        // 200
						.replace(/^\s*|\s*$/g, ""); // trim;                                                                             // 201
				});                                                                                                                // 202
                                                                                                                       // 203
				// Configure this login service                                                                                    // 204
				Meteor.call("configureLoginService", configuration, function(error, result) {                                      // 205
					if (error)                                                                                                        // 206
						Meteor._debug("Error configuring login service " + serviceName, error);                                          // 207
					else                                                                                                              // 208
						loginButtonsSession.set('configureLoginServiceDialogVisible', false);                                            // 209
					$('#configure-login-service-dialog-modal').modal('hide');                                                         // 210
				});                                                                                                                // 211
			}                                                                                                                   // 212
		},                                                                                                                   // 213
		// IE8 doesn't support the 'input' event, so we'll run this on the keyup as                                          // 214
		// well. (Keeping the 'input' event means that this also fires when you use                                          // 215
		// the mouse to change the contents of the field, eg 'Cut' menu item.)                                               // 216
		'input, keyup input': function(event) {                                                                              // 217
			// if the event fired on one of the configuration input fields,                                                     // 218
			// check whether we should enable the 'save configuration' button                                                   // 219
			if (event.target.id.indexOf('configure-login-service-dialog') === 0)                                                // 220
				updateSaveDisabled();                                                                                              // 221
		}                                                                                                                    // 222
	});                                                                                                                   // 223
                                                                                                                       // 224
	// check whether the 'save configuration' button should be enabled.                                                   // 225
	// this is a really strange way to implement this and a Forms                                                         // 226
	// Abstraction would make all of this reactive, and simpler.                                                          // 227
	var updateSaveDisabled = function() {                                                                                 // 228
		var anyFieldEmpty = _.any(configurationFields(), function(field) {                                                   // 229
			return document.getElementById(                                                                                     // 230
				'configure-login-service-dialog-' + field.property).value === '';                                                  // 231
		});                                                                                                                  // 232
                                                                                                                       // 233
		loginButtonsSession.set('configureLoginServiceDialogSaveDisabled', anyFieldEmpty);                                   // 234
	};                                                                                                                    // 235
                                                                                                                       // 236
	// Returns the appropriate template for this login service.  This                                                     // 237
	// template should be defined in the service's package                                                                // 238
	var configureLoginServiceDialogTemplateForService = function() {                                                      // 239
		var serviceName = loginButtonsSession.get('configureLoginServiceDialogServiceName');                                 // 240
		return Template['configureLoginServiceDialogFor' + capitalize(serviceName)];                                         // 241
	};                                                                                                                    // 242
                                                                                                                       // 243
	var configurationFields = function() {                                                                                // 244
		var template = configureLoginServiceDialogTemplateForService();                                                      // 245
		return template.fields();                                                                                            // 246
	};                                                                                                                    // 247
                                                                                                                       // 248
	Template._configureLoginServiceDialog.helpers({                                                                       // 249
		configurationFields: function() {                                                                                    // 250
			return configurationFields();                                                                                       // 251
		},                                                                                                                   // 252
                                                                                                                       // 253
		visible: function() {                                                                                                // 254
			return loginButtonsSession.get('configureLoginServiceDialogVisible');                                               // 255
		},                                                                                                                   // 256
                                                                                                                       // 257
		configurationSteps: function() {                                                                                     // 258
			// renders the appropriate template                                                                                 // 259
			return configureLoginServiceDialogTemplateForService();                                                             // 260
		},                                                                                                                   // 261
                                                                                                                       // 262
		saveDisabled: function() {                                                                                           // 263
			return loginButtonsSession.get('configureLoginServiceDialogSaveDisabled');                                          // 264
		}                                                                                                                    // 265
	});                                                                                                                   // 266
                                                                                                                       // 267
                                                                                                                       // 268
	;                                                                                                                     // 269
                                                                                                                       // 270
                                                                                                                       // 271
                                                                                                                       // 272
	// XXX from http://epeli.github.com/underscore.string/lib/underscore.string.js                                        // 273
	var capitalize = function(str) {                                                                                      // 274
		str = str == null ? '' : String(str);                                                                                // 275
		return str.charAt(0).toUpperCase() + str.slice(1);                                                                   // 276
	};                                                                                                                    // 277
                                                                                                                       // 278
})();                                                                                                                  // 279
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['ian:accounts-ui-bootstrap-3'] = {
  accountsUIBootstrap3: accountsUIBootstrap3
};

})();
