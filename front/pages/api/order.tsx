import type { NextApiRequest, NextApiResponse } from 'next'
import { GetContractors } from '../../components/Data';
import { EStateOrder, IRequestOrder } from '../../components/Types';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { value, state } = req.body as IRequestOrder;
	const data             = await GetContractors();

	switch ( value ) {
		case 'AVAILABILITY':
			if      ( state===EStateOrder.Acending  ) data.sort( ( a, b ) => ( b.availability as any ) - ( a.availability as any ) );
			else if ( state===EStateOrder.Decending ) data.sort( ( b, a ) => ( b.availability as any ) - ( a.availability as any ) );
		break;

		case 'DAY RATE'    :
			if      ( state===EStateOrder.Acending  ) data.sort( ( a, b ) => a.day_rate - b.day_rate );
			else if ( state===EStateOrder.Decending ) data.sort( ( b, a ) => a.day_rate - b.day_rate );
		break;

		case 'FULLNAME'    :
			if      ( state===EStateOrder.Acending  ) data.sort( ( a, b ) => a.name<b.name ? -1 : ( a.name>b.name ? 1 : 0 ));
			else if ( state===EStateOrder.Decending ) data.sort( ( b, a ) => a.name<b.name ? -1 : ( a.name>b.name ? 1 : 0 ));
		break;

		case 'SPECIALITIES':
			if      ( state===EStateOrder.Acending  ) data.sort( ( a, b ) => a.specialities[0]<b.specialities[0] ? -1 : ( a.specialities[0]>b.specialities[0] ? 1 : 0 ) );
			else if ( state===EStateOrder.Decending ) data.sort( ( b, a ) => a.specialities[0]<b.specialities[0] ? -1 : ( a.specialities[0]>b.specialities[0] ? 1 : 0 ) );
		break;
	}

	res.status( 200 ).json( data );
}