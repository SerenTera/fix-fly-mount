module.exports = function flymountfix(dispatch) {

let flyvar,
	flyunk,
	cID;
	
	dispatch.hook('S_USER_FLYING_LOCATION',1, event => {
		if(event.type===7 || event.type===8) {
			flyunk = event.unk1,
			cID = event.target;
			return false;
		};
	});	
	
	dispatch.hook('C_PLAYER_FLYING_LOCATION',3, event => {
		if(event.type===7 || event.type===8) {
			flyvar=event,
			delete flyvar.time,
			dispatch.toClient ('S_USER_FLYING_LOCATION',1, {
				target: cID,
				flyvar,
				unk1: flyunk,
				unk2: 0x42700000
			});
		};
	});
};
