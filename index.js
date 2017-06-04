module.exports = function flymountfix(dispatch) {

let flyvar;
let	uservar=[];
	
	dispatch.hook('S_LOGIN', 1, event => {
		player = event.playerId;
	});
	
	dispatch.hook('S_USER_FLYING_LOCATION',1, event => {
		if(event.type===7) {
			dispatch.hook('C_USER_LOCATION',1, event => {
				flyvar = event.w;
			});		
		}
		if(event.type===8) {
			dispatch.hook('C_PLAYER_LOCATION',1, event => {
				uservar = event,
				wedit();
				return;
			});
		};
	});
	
	function wedit() {
		dispatch.toClient('S_USER_LOCATION',1, {
			target: player,
			x1: uservar.x1,
			y1: uservar.y1,
			z1: uservar.z1,
			w: flyvar,
			unk2: uservar.unk2,
			speed: uservar.speed,
			x2: uservar.x2,
			y2: uservar.y2,
			z2: uservar.z2,
			type: uservar.type,
			unk: 0,
		});
	};
};
