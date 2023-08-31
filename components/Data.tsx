import { gql } from "@apollo/client";
import client from "../apollo-client";
import { IDataRow, IQueryResultContractors } from './Types';

export async function GetContractors() {
	const { data:{ contractors } }:IQueryResultContractors = await client.query({
		query: gql`{
			contractors {
				data {
					attributes {
						name
						specialities
						day_rate
						availability
					}
				}
			}
		}`,
	});

	return contractors.data.map( ( v ) => {
		const res = { ...v.attributes };

		return res;
	});
}