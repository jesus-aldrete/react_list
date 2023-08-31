const array = [
	{ name:'Strykes'   , specialities:['Surgery'   ,'Medical'                                     ], day_rate:'300,00', availability:true  },
	{ name:'Rossonerri', specialities:['Healthcare','Fitness'                                     ], day_rate:'250,00', availability:false },
	{ name:'Tyga'      , specialities:['Surgery'   ,'Medical'                                     ], day_rate:'199,00', availability:false },
	{ name:'Yolo.corp' , specialities:['Automotive','Modification'                                ], day_rate:'200,00', availability:true  },
	{ name:'Bardi'     , specialities:['Technology','Home Living','Healthcare','Surgery','Medical'], day_rate:'100,00', availability:true  },
	{ name:'Bardi'     , specialities:['Technology','Home Living','Healthcare','Surgery','Medical'], day_rate:'100,00', availability:true  },
	{ name:'Bardi'     , specialities:['Technology','Home Living','Healthcare','Surgery','Medical'], day_rate:'100,00', availability:true  },
	{ name:'Bardi'     , specialities:['Technology','Home Living','Healthcare','Surgery','Medical'], day_rate:'100,00', availability:true  },
	{ name:'Bardi'     , specialities:['Technology','Home Living','Healthcare','Surgery','Medical'], day_rate:'100,00', availability:true  },
	{ name:'Bardi'     , specialities:['Technology','Home Living','Healthcare','Surgery','Medical'], day_rate:'100,00', availability:true  },
	{ name:'Bardi'     , specialities:['Technology','Home Living','Healthcare','Surgery','Medical'], day_rate:'100,00', availability:true  },
	{ name:'Bardi'     , specialities:['Technology','Home Living','Healthcare','Surgery','Medical'], day_rate:'100,00', availability:true  },
	{ name:'Bardi'     , specialities:['Technology','Home Living','Healthcare','Surgery','Medical'], day_rate:'100,00', availability:true  },
	{ name:'Bardi'     , specialities:['Technology','Home Living','Healthcare','Surgery','Medical'], day_rate:'100,00', availability:true  },
];

import Content_grid_rows_items from './Content_grid_rows_items';

export default async function Content_grid_rows() {
	return (
		<div className="cont overflow-scroll absolute w-full h-content-fill">
			{array.map( v => <Content_grid_rows_items data={v}></Content_grid_rows_items> )}
		</div>
	);
}