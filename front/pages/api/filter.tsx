import type { NextApiRequest, NextApiResponse } from 'next'
import { GetContractors } from '../../components/Data';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { value } = req.body;
	const rex       = new RegExp( value, 'gmi' );
	const data      = await GetContractors();

	const result = data.filter( v => {
		for ( const [,valor] of Object.entries( v ) ) {
			switch ( typeof valor ) {
				case 'string' : if ( valor.match   ( rex   ) ) return true; break;
				case 'object' : if ( valor.includes( value ) ) return true; break;
				case 'number' : if ( valor==value            ) return true; break;
			}
		}
	});

	res.status( 200 ).json( result );
}