var LoginEvent = {
	preLogin: {
		name: "auditLog",
		eventCallback: function(eventObj) {
			eventObj.message = "Triggered Login Flow";
		}
	},

	postLogin: {
		name: "setMFA",
		eventCallback: function(eventObj) {
			if (eventObj.Failure)  {
				var user = eventObj.user
				user.setFailureCount++;
				if (user.failureCount >= 3) {
					user.setMFA=true;
				}
			}
		}		
	}
}

module.exports = LoginEvent;