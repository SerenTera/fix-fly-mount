module.exports = function flymountfix(dispatch) {

	dispatch.hook('S_USER_FLYING_LOCATION',1, event => {
		if(event.type===8) {
			dispatch.hookOnce('S_USER_LOCATION',1,event => {
				return false;
			});
		};
	});
};
