export async function GetContractors() {
	return [
		{
			availability: true,
			day_rate    : 300,
			name        : 'Strykes',
			specialities: [ 'Surgery', 'Medical' ],
		},
		{
			availability: false,
			day_rate    : 250,
			name        : 'Rossonerri',
			specialities: [ 'Healthcare', 'Fitness' ],
		},
		{
			availability: false,
			day_rate    : 199,
			name        : 'Tyga',
			specialities: [ 'Surgery', 'Medical' ],
		},
		{
			availability: true,
			day_rate    : 200,
			name        : 'Yolo.corp',
			specialities: [ 'Automotive', 'Modification' ],
		},
		{
			availability: true,
			day_rate    : 100,
			name        : 'Bardi',
			specialities: [ 'Technology', 'Home Living', 'Automotive', 'Modification', 'Surgery', 'Medical', 'Healthcare' ],
		},
		{
			availability: false,
			day_rate    : 2003,
			name        : 'prueba',
			specialities: [ 'tag 1', 'tag 2' ],
		}
	];
}